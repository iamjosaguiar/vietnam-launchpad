import en from '@/messages/en.json';

import { routing } from './config';

/**
 * Message lookup for the English strings in src/messages/en.json, with the
 * same call shape as next-intl: useTranslations('navigation')('services').
 * It reads a static import, so it works at build time and in the browser.
 */
type Messages = Record<string, unknown>;

export const messages: Messages = en;

function lookup(path: string): string {
  let value: unknown = messages;
  for (const part of path.split('.')) {
    if (value === null || typeof value !== 'object') return path;
    value = (value as Messages)[part];
  }
  return typeof value === 'string' ? value : path;
}

export function getTranslator(namespace?: string) {
  return (key: string) => lookup(namespace ? `${namespace}.${key}` : key);
}

/** Hook form, for components ported from next-intl. Not a real hook: it holds no state. */
export const useTranslations = getTranslator;

export function useLocale(): string {
  return routing.defaultLocale;
}
