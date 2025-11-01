'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/config';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'services', href: '/services' },
    { key: 'pricing', href: '/pricing' },
    { key: 'about', href: '/about' },
    { key: 'resources', href: '/resources' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-vietnam-red">Vietnam</span>
              <span className="text-2xl font-bold text-gray-900 ml-1">Launchpad</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-vietnam-red bg-red-50'
                    : 'text-gray-700 hover:text-vietnam-red hover:bg-red-50'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="bg-vietnam-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
            >
              {t('getConsultation')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-vietnam-red p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-vietnam-red bg-red-50'
                      : 'text-gray-700 hover:text-vietnam-red hover:bg-red-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block bg-vietnam-red text-white px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-colors mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('getConsultation')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}