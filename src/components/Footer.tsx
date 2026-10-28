'use client';

import Image from 'next/image';
import { Link } from '@/i18n/config';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';
import { footerTagline, footerColumns, footerCta, footerLegal, type NavItem } from '@/data/siteNav';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderItem = (item: NavItem) => (
    <li key={item.href}>
      {item.href === '/sitemap' ? (
        <a href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
          {item.name}
        </a>
      ) : (
        <Link
          href={item.href}
          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          onClick={scrollToTop}
        >
          {item.name}
        </Link>
      )}
    </li>
  );

  return (
    <footer className="relative bg-stone-950 text-white overflow-hidden pb-24 md:pb-0">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-950 to-primary-950/50" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Column 1: Brand */}
            <div>
              <div className="mb-6">
                <Image
                  src="/vietnam-launchpad-logo.png"
                  alt="Vietnam Launchpad"
                  width={200}
                  height={200}
                  className="h-16 md:h-20 w-auto brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-white/35 text-sm leading-relaxed mb-6">
                {footerTagline}
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Hanoi & Da Nang</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={PHONE_TEL} className="hover:text-primary-400 transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-white mb-2">{footerCta.heading}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{footerCta.text}</p>
                <Link
                  href={footerCta.href}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  onClick={scrollToTop}
                >
                  {footerCta.button}
                </Link>
              </div>
            </div>

            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                  {col.title}
                </h3>
                {col.groups.map((group) => (
                  <div key={group.title} className="mb-5">
                    <p className="text-xs font-semibold text-white/60 mb-3">{group.title}</p>
                    <ul className="space-y-3">{group.items.map(renderItem)}</ul>
                  </div>
                ))}
                {col.items.length > 0 && <ul className="space-y-3">{col.items.map(renderItem)}</ul>}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Vietnam Launchpad. All rights reserved. &middot; Company No. 0108305670</p>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <span className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-gray-500 flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </span>
            </button>
          </div>

          {/* Legal Disclaimers */}
          <div className="mt-6 pt-6 border-t border-gray-800/50 text-xs text-gray-600 max-w-4xl space-y-2">
            {footerLegal.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
