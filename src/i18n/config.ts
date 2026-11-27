import { createElement, useSyncExternalStore, type AnchorHTMLAttributes, type Ref } from 'react';

/**
 * Locale settings and the navigation helpers components import from here.
 *
 * The site is English only and URLs carry no locale (/about, never /en/about).
 * Every page is a static HTML file, so a link is an ordinary <a> and moving to
 * another page is a normal browser navigation. These keep the names the
 * components already use (Link, usePathname, useRouter).
 */
export const routing = {
  locales: ['en'],
  defaultLocale: 'en',
  localePrefix: 'never',
} as const;

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  ref?: Ref<HTMLAnchorElement>;
  /** Accepted for compatibility with Next.js links and ignored. */
  prefetch?: boolean;
  scroll?: boolean;
  replace?: boolean;
};

/** A plain anchor. Next.js-only props are dropped so they never reach the DOM. */
export function Link({ prefetch: _prefetch, scroll: _scroll, replace: _replace, ...props }: LinkProps) {
  return createElement('a', props);
}

const subscribe = () => () => {};

/**
 * The current path in the browser, for client-only logic. It is '' while
 * rendering at build time, so anything visible that depends on the path
 * (such as the active nav link) takes the path as a prop instead.
 */
export function usePathname(): string {
  return useSyncExternalStore(
    subscribe,
    () => window.location.pathname,
    () => '',
  );
}

/** Full page navigations, matching the router methods components call. */
export function useRouter() {
  return {
    push: (href: string) => window.location.assign(href),
    replace: (href: string) => window.location.replace(href),
    back: () => window.history.back(),
    refresh: () => window.location.reload(),
  };
}
