'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/config';

export default function Footer() {
  const t = useTranslations('navigation');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-vietnam-red">Vietnam</span>
              <span className="text-2xl font-bold text-white ml-1">Launchpad</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional immigration and business consulting services for expats relocating to Vietnam. 
              Transparent pricing, expert guidance, guaranteed results.
            </p>
            <div className="text-gray-300">
              <p>📧 hello@vietnamlaunchpad.com</p>
              <p>📱 +84 (0)28 1234 5678</p>
              <p>📍 Ho Chi Minh City, Vietnam</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/trc" className="hover:text-white transition-colors">
                  TRC Applications
                </Link>
              </li>
              <li>
                <Link href="/services/work-permit" className="hover:text-white transition-colors">
                  Work Permits
                </Link>
              </li>
              <li>
                <Link href="/services/company-setup" className="hover:text-white transition-colors">
                  Company Setup
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  {t('pricing')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  {t('resources')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Vietnam Launchpad. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}