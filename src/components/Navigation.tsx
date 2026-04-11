'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/config';
import { Link } from '@/i18n/config';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

// ─── Mega menu data ───────────────────────────────────────────────────────────

const serviceGroups = [
  {
    title: 'Residency & Visas',
    items: [
      { name: 'TRC Application', desc: 'Temporary Residence Card', href: '/services/trc-application' },
      { name: 'Work Permit', desc: 'Legal authorization to work', href: '/services/work-permit' },
      { name: 'eVisa & Entry Visa', desc: '90-day fast-track entry', href: '/services/evisa' },
      { name: 'Business Visa', desc: 'Multi-entry business visa', href: '/services/business-visa' },
      { name: 'Marriage Registration', desc: 'Register & TRC for your spouse', href: '/services/marriage-registration' },
      { name: 'Permanent Residency', desc: 'Long-term PR application', href: '/services/permanent-residency' },
    ],
  },
  {
    title: 'Business & Compliance',
    items: [
      { name: 'Company Registration', desc: 'Set up a foreign-owned LLC', href: '/services/company-setup' },
      { name: 'Accounting & Bookkeeping', desc: 'Monthly accounts & tax filings', href: '/services/accounting-bookkeeping' },
      { name: 'Tax Filing (PIT)', desc: 'Personal income tax returns', href: '/services/tax-filing' },
      { name: 'Social Insurance', desc: 'Employee SI enrollment', href: '/services/social-insurance' },
      { name: 'Apostille & Authentication', desc: 'Document legalization', href: '/services/apostille-services' },
    ],
  },
  {
    title: 'Property & Lifestyle',
    items: [
      { name: 'Property Registration', desc: 'Foreign-owned property title', href: '/services/property-registration' },
      { name: "Driver's License", desc: 'Convert your foreign license', href: '/services/drivers-license' },
      { name: 'Relocation & Settling In', desc: 'Housing, bank, SIM & more', href: '/services/relocation-assistance' },
      { name: 'Expert Consultation', desc: 'One-on-one advisor session', href: '/services/consultation' },
    ],
  },
];

const guideCategories = [
  {
    category: 'Finance & Money',
    color: 'text-emerald-600',
    guides: [
      { title: 'Cost of Living', href: '/guides/cost-of-living' },
      { title: 'Taxes for Expats', href: '/guides/taxes' },
      { title: 'Banking in Vietnam', href: '/guides/banking' },
    ],
  },
  {
    category: 'Visas & Residency',
    color: 'text-blue-600',
    guides: [
      { title: 'TRC Complete Guide', href: '/guides/trc-vietnam' },
      { title: 'Digital Nomad Visas', href: '/guides/digital-nomads' },
      { title: 'Retirement Visa', href: '/guides/retirement' },
    ],
  },
  {
    category: 'Work & Business',
    color: 'text-indigo-600',
    guides: [
      { title: 'Company Setup', href: '/guides/company-setup-vietnam' },
      { title: 'Teaching English', href: '/guides/teaching-english-vietnam' },
      { title: 'Working in Vietnam', href: '/guides/working-in-vietnam' },
    ],
  },
  {
    category: 'Daily Life',
    color: 'text-purple-600',
    guides: [
      { title: 'Driving & Car Rental', href: '/guides/driving-vietnam' },
      { title: 'Marriage Registration', href: '/guides/marriage-registration' },
      { title: 'First Week in Vietnam', href: '/guides/first-week' },
    ],
  },
  {
    category: 'Housing & Real Estate',
    color: 'text-amber-600',
    guides: [
      { title: 'Renting in Vietnam', href: '/guides/renting' },
      { title: 'Buying Property', href: '/guides/buying-property' },
    ],
  },
  {
    category: 'Health & Wellbeing',
    color: 'text-rose-600',
    guides: [
      { title: 'Healthcare & Insurance', href: '/guides/healthcare' },
    ],
  },
  {
    category: 'Family & Education',
    color: 'text-pink-600',
    guides: [
      { title: 'International Schools', href: '/guides/international-schools' },
      { title: 'Moving with Family', href: '/guides/moving-with-family' },
    ],
  },
  {
    category: 'City Guides',
    color: 'text-teal-600',
    guides: [
      { title: 'Ho Chi Minh City', href: '/guides/ho-chi-minh-city' },
      { title: 'Hanoi', href: '/guides/hanoi' },
      { title: 'Da Nang', href: '/guides/da-nang' },
    ],
  },
];

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

            {/* Home */}
            <Link
              href="/"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/') ? linkActive : linkBase
              }`}
            >
              {t('home')}
              {isActive('/') && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`} />
              )}
            </Link>

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

              {/* Services mega panel */}
              {openMenu === 'services' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-[780px]"
                  onMouseEnter={() => openMega('services')}
                  onMouseLeave={closeMega}
                >
                  <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-3 gap-0 p-6">
                      {serviceGroups.map((group) => (
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
                                  <span className="text-xs text-gray-400 group-hover:text-primary-500 transition-colors leading-tight">
                                    {item.desc}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex items-center justify-between">
                      <span className="text-xs text-gray-400">15 services available</span>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                      >
                        View all services
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Guides - mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => openMega('guides')}
              onMouseLeave={closeMega}
            >
              <Link
                href="/guides"
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive('/guides') ? linkActive : linkBase
                }`}
              >
                {t('guides')}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === 'guides' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                {isActive('/guides') && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? 'bg-primary-600' : 'bg-white'}`} />
                )}
              </Link>

              {/* Guides mega panel */}
              {openMenu === 'guides' && (
                <div
                  className="absolute top-full right-0 mt-0 pt-3 w-[700px]"
                  onMouseEnter={() => openMega('guides')}
                  onMouseLeave={closeMega}
                >
                  <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-4 gap-0 p-6">
                      {guideCategories.map((cat) => (
                        <div key={cat.category} className="min-w-0">
                          <p className={`text-xs font-bold uppercase tracking-wider mb-2 px-2 truncate ${cat.color}`}>
                            {cat.category}
                          </p>
                          <ul className="space-y-0.5">
                            {cat.guides.map((guide) => (
                              <li key={guide.href}>
                                <Link
                                  href={guide.href}
                                  className="block px-2 py-1.5 text-xs text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors leading-tight"
                                >
                                  {guide.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex items-center justify-between">
                      <span className="text-xs text-gray-400">20 guides across 8 topics</span>
                      <Link
                        href="/guides"
                        className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                      >
                        Browse all guides
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
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

            <div className={`w-px h-6 mx-3 ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`} />

            <LanguageSwitcher isScrolled={isScrolled} />

            <Link
              href="/contact"
              className="btn-primary ml-4 text-white px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap"
            >
              {t('getConsultation')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher isScrolled={isScrolled} />
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
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 space-y-1 shadow-lg">

            {/* Home */}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive('/') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {t('home')}
            </Link>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/services') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {t('services')}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === 'services' ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pl-4 pt-1 pb-2 space-y-0.5">
                  {serviceGroups.map((group) =>
                    group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))
                  )}
                  <Link
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    View all services
                  </Link>
                </div>
              </div>
            </div>

            {/* Guides accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'guides' ? null : 'guides')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive('/guides') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {t('guides')}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'guides' ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === 'guides' ? 'max-h-96 overflow-y-auto' : 'max-h-0'}`}>
                <div className="pl-4 pt-1 pb-2 space-y-0.5">
                  {guideCategories.map((cat) => (
                    <div key={cat.category}>
                      <p className={`px-4 py-1 text-xs font-bold uppercase tracking-wider ${cat.color}`}>
                        {cat.category}
                      </p>
                      {cat.guides.map((guide) => (
                        <Link
                          key={guide.href}
                          href={guide.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-1.5 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                        >
                          {guide.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    href="/guides"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                  >
                    Browse all guides
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
              {t('blog')}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive('/contact') ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {t('contact')}
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                className="block btn-primary text-white px-4 py-3 rounded-xl text-base font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('getConsultation')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
