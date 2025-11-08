import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/config';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Remove Accept-Language header to prevent automatic locale detection from browser settings
  // This ensures users always start with English unless they explicitly choose a language
  // or have the NEXT_LOCALE cookie set from a previous session
  requestHeaders.delete('accept-language');

  // Create a new request with modified headers
  const modifiedRequest = new NextRequest(request, {
    headers: requestHeaders,
  });

  // Call the next-intl middleware with modified request
  return intlMiddleware(modifiedRequest);
}

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};