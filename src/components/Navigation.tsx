'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/config';
import { Link } from '@/i18n/config';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  navVisas,
  navLivingGroups,
  navLivingLast,
  navServiceGroups,
  navServicesLast,
  navButton,
} from '@/data/siteNav';

// ─── Mega menu data ───────────────────────────────────────────────────────────

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setOpenMenu(null);
    setIsMenuOpen(false);
  }, [pathname]);

  const openMega = (menu: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(menu);
  };

  const closeMega = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  const linkBase = isScrolled
    ? 'text-gray-700 hover:text-primary-600'
    : 'text-white/80 hover:text-white';

  const linkActive = isScrolled ? 'text-primary-600' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass shadow-lg shadow-black/5 py-2' : 'bg-transparent py-4'
      }`}
    >
      {/* Services mega panel - anchored to full nav width, not trigger button */}
      {openMenu === 'services' && (
        <div
          className="absolute top-full left-0 right-0 pt-3 z-50"
          onMouseEnter={() => openMega('services')}
          onMouseLeave={closeMega}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden max-w-[960px]">
              <div className="grid grid-cols-4 gap-0 p-6">
                {navServiceGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-2">
                      {group.title}
                    </p>
                    <ul className="space-y-0.5">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="group flex flex-col px-2 py-2.5 rounded-xl hover:bg-primary-50 transition-colors"
                          >
                            <span className="text-sm font-semibold text-gray-800 group-hover:text-primary-700 transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex items-center justify-between">
                <Link
                  href={navServicesLast.href}
                  className="ml-auto text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                >
                  {navServicesLast.name}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visas panel */}
      {openMenu === 'visas' && (
        <div
          className="absolute top-full left-0 right-0 pt-3 z-50"
          onMouseEnter={() => openMega('visas')}
          onMouseLeave={closeMega}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden max-w-[360px]">
              <ul className="space-y-0.5 p-4">
                {navVisas.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-2 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Living in Vietnam mega panel - full container width, anchored to nav */}
      {openMenu === 'living' && (
        <div
          className="absolute top-full left-0 right-0 pt-3 z-50"
          onMouseEnter={() => openMega('living')}
          onMouseLeave={closeMega}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden w-full">
              <div className="grid grid-cols-4 gap-0 p-6">
                {navLivingGroups.map((cat) => (
                  <div key={cat.title} className="min-w-0">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider mb-2 px-2 block truncate ${cat.color}`}
                    >
                      {cat.title}
                    </p>
                    <ul className="space-y-0.5">
                      {cat.items.map((guide) => (
                        <li key={guide.href}>
                          <Link
                            href={guide.href}
                            className="block px-2 py-1 text-xs text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors leading-tight"
                          >
                            {guide.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex items-center justify-between">
                <Link
                  href={navLivingLast.href}
                  className="ml-auto text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                >
                  {navLivingLast.name}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image
              src="/vietnam-launchpad-logo.png"
              alt="Vietnam Launchpad"
              width={200}
              height={200}
              className={`transition-all duration-300 ${
                isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24 brightness-0 invert'
              } w-auto group-hover:scale-[1.02]`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">

            {/* Visas - mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => openMega('visas')}
              onMouseLeave={closeMega}
            >
              <Link
                href="/visa"
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive('/visa') ? linkActive : linkBase
                }`}
              >
                Visas
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'visas' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                {isActive('/visa') && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`} />
                )}
              </Link>
            </div>

            {/* Living in Vietnam - mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => openMega('living')}
              onMouseLeave={closeMega}
            >
              <Link
                href="/guides/living-in-vietnam"
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive('/guides') ? linkActive : linkBase
                }`}
              >
                Living in Vietnam
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'living' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                {isActive('/guides') && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`} />
                )}
              </Link>
            </div>

            {/* Services - mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => openMega('services')}
              onMouseLeave={closeMega}
            >
              <Link
                href="/services"
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive('/services') ? linkActive : linkBase
                }`}
              >
                {t('services')}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'services' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                {isActive('/services') && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`} />
                )}
              </Link>

              {/* Services mega panel rendered at nav level above - see top of return */}
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/blog') ? linkActive : linkBase
              }`}
            >
              {t('blog')}
              {isActive('/blog') && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`} />
              )}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/contact') ? linkActive : linkBase
              }`}
            >
              {t('contact')}
              {isActive('/contact') && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`} />
              )}
            </Link>

            <Link
              href="/contact"
              className={`btn-primary ml-4 text-white px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap`}
            >
              {navButton.text}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-10 h-10 flex items-center justify-center transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-white/80'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-center justify-center gap-1.5">
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-[85vh] overflow-y-auto opacity-100 mt-4' : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 space-y-1 shadow-lg">

            {/* Visas accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'visas' ? null : 'visas')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/visa') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Visas
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'visas' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ${mobileExpanded === 'visas' ? 'max-h-[60vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
                <div className="pl-4 pt-1 pb-2 space-y-0.5">
                  {navVisas.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Living in Vietnam accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'living' ? null : 'living')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/guides') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Living in Vietnam
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'living' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ${mobileExpanded === 'living' ? 'max-h-[60vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
                <div className="pl-4 pt-1 pb-2 space-y-0.5">
                  {navLivingGroups.map((group) => (
                    <div key={group.title}>
                      <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                        {group.title}
                      </p>
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-1.5 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    href={navLivingLast.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    {navLivingLast.name}
                  </Link>
                </div>
              </div>
            </div>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/services') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ${mobileExpanded === 'services' ? 'max-h-[60vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
                <div className="pl-4 pt-1 pb-2 space-y-0.5">
                  {navServiceGroups.map((group) => (
                    <div key={group.title}>
                      <p className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                        {group.title}
                      </p>
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-1.5 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    href={navServicesLast.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    {navServicesLast.name}
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive('/blog') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive('/contact') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>

            <div className="pt-2">
              <Link
                href={navButton.href}
                className="block btn-primary text-white px-4 py-3 rounded-xl text-base font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {navButton.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
