/**
 * Thin wrapper around Google Analytics 4 (gtag). Every call is a safe no-op when gtag is not
 * on the page (no NEXT_PUBLIC_GA_ID, blocked script, server render).
 * Params must only ever carry labels, locations and slugs: never names, emails, phone numbers
 * or free text typed by a visitor.
 */

export type EventParamValue = string | number | boolean;
export type EventParams = Record<string, EventParamValue | null | undefined>;

type Gtag = (command: 'event', name: string, params?: Record<string, EventParamValue>) => void;

const MAX_PARAM_LENGTH = 100;

function cleanParams(params: EventParams): Record<string, EventParamValue> {
  const cleaned: Record<string, EventParamValue> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined || value === '') continue;
    cleaned[key] = typeof value === 'string' ? value.slice(0, MAX_PARAM_LENGTH) : value;
  }
  return cleaned;
}

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== 'function') return;
  try {
    gtag('event', name, cleanParams(params));
  } catch {
    // Analytics must never break the page.
  }
}

/** Fixed analytics label for a call to action, chosen from where its link goes. */
export function ctaLabelForHref(href: string): string {
  const path = href.split(/[?#]/)[0];
  if (path === '/contact') return 'book_consultation';
  if (path === '/get-started') return 'get_started';
  if (path === '/services') return 'view_services';
  if (path.startsWith('/services/')) return 'service_cta';
  if (path === '/enterprise') return 'enterprise_cta';
  if (path === '/visa' || path.startsWith('/visa/')) return 'visa_cta';
  if (path.startsWith('/guides/')) return 'read_guide';
  return 'other_cta';
}
