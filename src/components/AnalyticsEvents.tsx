'use client';

import { useEffect, useRef } from 'react';

import { usePathname } from '@/i18n/config';
import { trackEvent, type EventParams } from '@/lib/analytics';

type ContactEvent = 'whatsapp_click' | 'email_click' | 'phone_click';
type ClickEvent = ContactEvent | 'outbound_click' | 'cta_click';

const TRACK_ATTRIBUTE = 'data-track';
const FORM_ATTRIBUTE = 'data-track-form';
const VISA_PATH = /^\/visa\/([a-z0-9-]+)\/?$/;
// How long after a country form submit a /visa/<slug> navigation still counts as that pick.
const PICK_WINDOW_MS = 10000;

const WHATSAPP_HOSTS = ['wa.me', 'whatsapp.com'];

function bareHost(host: string) {
  return host.toLowerCase().replace(/^www\./, '');
}

function isWhatsappHost(host: string) {
  const bare = bareHost(host);
  return WHATSAPP_HOSTS.some((candidate) => bare === candidate || bare.endsWith(`.${candidate}`));
}

/** Where a link goes, without query strings or fragments that could carry anything personal. */
function describeDestination(url: URL): string {
  const sameSite = bareHost(url.host) === bareHost(window.location.host);
  return sameSite ? url.pathname : `${bareHost(url.host)}${url.pathname}`.replace(/\/$/, '');
}

function readLink(anchor: HTMLAnchorElement): { event: ClickEvent | null; destination: string } {
  const href = anchor.getAttribute('href') ?? '';
  if (/^mailto:/i.test(href)) return { event: 'email_click', destination: '' };
  if (/^tel:/i.test(href)) return { event: 'phone_click', destination: '' };
  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return { event: null, destination: '' };
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return { event: null, destination: '' };
  if (isWhatsappHost(url.host)) return { event: 'whatsapp_click', destination: '' };
  const sameSite = bareHost(url.host) === bareHost(window.location.host);
  return { event: sameSite ? null : 'outbound_click', destination: describeDestination(url) };
}

function locationOf(element: Element): string | undefined {
  return element.closest('[data-track-location]')?.getAttribute('data-track-location') ?? undefined;
}

/**
 * Site-wide GA4 event tracking. Renders nothing. One delegated listener per event type on the
 * document, so individual components only need data attributes:
 *   data-track="cta_click"      marks a link or button as a call to action
 *   data-track-label="..."      short fixed label for the CTA
 *   data-track-location="..."   where it sits (hero, nav, footer, service_page, visa_page, blog);
 *                               also read from the nearest ancestor that sets it
 *   data-track-form="..."       on a <form>: the form_id used for visa_form_start
 * Links to WhatsApp, mailto:, tel: and other sites are recognised from the href alone.
 */
export default function AnalyticsEvents() {
  const pathname = usePathname();
  const pendingPick = useRef<number | null>(null);
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // A click always comes before the submit it may cause, so a stale country pick is dropped here.
      pendingPick.current = null;
      if (event.button > 1 || !(event.target instanceof Element)) return;
      const tracked = event.target.closest(`[${TRACK_ATTRIBUTE}]`);
      const anchor = (tracked instanceof HTMLAnchorElement ? tracked : event.target.closest('a[href]')) as HTMLAnchorElement | null;
      const link = anchor ? readLink(anchor) : { event: null, destination: '' };
      const name: ClickEvent | null = link.event ?? (tracked?.getAttribute(TRACK_ATTRIBUTE) === 'cta_click' ? 'cta_click' : null);
      if (!name) return;
      const source = tracked ?? anchor;
      if (!source) return;

      const params: EventParams = {
        cta_label: source.getAttribute('data-track-label'),
        cta_location: locationOf(source),
      };
      if (name === 'cta_click' || name === 'outbound_click') params.destination = link.destination;
      trackEvent(name, params);
    };

    const seenForms = new WeakSet<Element>();
    const onFocusIn = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const form = event.target.closest(`form[${FORM_ATTRIBUTE}]`);
      if (!form || seenForms.has(form)) return;
      seenForms.add(form);
      trackEvent('visa_form_start', { form_id: form.getAttribute(FORM_ATTRIBUTE) });
    };

    // The country picker keeps its choice in component state, so the pick is read from the page
    // it navigates to (see the pathname effect below) instead of from the picker itself.
    const onSubmit = (event: Event) => {
      if (event.target instanceof HTMLFormElement && event.target.querySelector('[role="combobox"]')) {
        pendingPick.current = Date.now();
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('auxclick', onClick);
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('submit', onSubmit, true);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('auxclick', onClick);
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('submit', onSubmit, true);
    };
  }, []);

  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    const submittedAt = pendingPick.current;
    if (submittedAt === null) return;
    pendingPick.current = null;
    if (Date.now() - submittedAt > PICK_WINDOW_MS) return;
    const country = VISA_PATH.exec(pathname)?.[1];
    if (country) trackEvent('visa_country_select', { country });
  }, [pathname]);

  return null;
}
