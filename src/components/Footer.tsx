'use client';

import Image from 'next/image';
import { Link } from '@/i18n/config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-900/30" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Content - 4 Columns */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
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
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professional immigration and business consulting services for expats relocating to Vietnam.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Hanoi & Da Nang</span>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'TRC Applications', href: '/services/trc-application' },
                  { name: 'Work Permits', href: '/services/work-permit' },
                  { name: 'Company Setup', href: '/services/company-setup' },
                  { name: 'Marriage Registration', href: '/services/marriage-registration' },
                  { name: "Driver's License", href: '/services/drivers-license' },
                  { name: 'Property Registration', href: '/services/property-registration' }
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'All Services', href: '/services' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'FAQ', href: '/faq' },
                  { name: 'Contact', href: '/contact' }
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get Started */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Get Started
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Ready to start your Vietnam journey? Book a free consultation today.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25"
                onClick={scrollToTop}
              >
                Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              <p>&copy; 2025 Vietnam Launchpad. All rights reserved. &middot; Company No. 0108305670</p>
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
          <div className="mt-6 pt-6 border-t border-gray-800/50 text-xs text-gray-600 max-w-4xl">
            <p>
              All company registration and legal services are performed in partnership with registered Vietnamese Law Offices.
              Information on this website is subject to change. Please contact us to confirm current requirements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
