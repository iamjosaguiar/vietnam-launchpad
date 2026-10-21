import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/config';

const handleI18n = createMiddleware(routing);

const SITEMAP_ALIASES = new Set(['/sitemap.html', '/site-map', '/site-map/']);

export default function middleware(request: NextRequest) {
  if (SITEMAP_ALIASES.has(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/sitemap';
    return NextResponse.redirect(url, 301);
  }

  return handleI18n(request);
}

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - static files (except the legacy sitemap.html alias)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/sitemap.html'],
};
