import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/config';

export default createMiddleware({
  ...routing,
  // Disable automatic locale detection from browser Accept-Language header
  // Language switching is handled manually via LanguageSwitcher component
  localeDetection: false
});

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};