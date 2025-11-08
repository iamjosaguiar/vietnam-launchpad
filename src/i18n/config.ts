import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'vi', 'zh', 'ko'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Only add locale prefix for non-default locales
  localePrefix: 'as-needed',

  // Disable automatic locale detection from Accept-Language header
  localeDetection: false
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);