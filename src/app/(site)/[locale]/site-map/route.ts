import { NextResponse } from 'next/server';

function redirectToSitemap(request: Request) {
  return NextResponse.redirect(new URL('/sitemap', request.url), 301);
}

export const GET = redirectToSitemap;
export const HEAD = redirectToSitemap;
