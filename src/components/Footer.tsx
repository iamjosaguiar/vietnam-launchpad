'use client';

import Image from 'next/image';
import { Link } from '@/i18n/config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/vietnam launchpad logo.png"
                alt="Vietnam Launchpad"
                width={500}
                height={125}
                className="h-24 md:h-28 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional immigration and business consulting services for expats relocating to Vietnam.
            </p>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold">📍 Offices</p>
              <p className="text-sm">Hanoi: 5th floor, No.7, Alley 3, Lieu Giai Street, Ngoc Ha Ward</p>
              <p className="text-sm">Da Nang: 16 Tran Phu, Hai Chau Ward</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/services/trc-application"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  TRC Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/work-permit"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Work Permits
                </Link>
              </li>
              <li>
                <Link
                  href="/services/company-setup"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Company Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Vietnam Launchpad. All rights reserved.</p>
          <p className="text-xs mt-2">Company Number: 0108305670</p>
          <p className="text-xs mt-3 max-w-3xl mx-auto">
            All company registration and legal services are performed in partnership with registered Vietnamese Law Offices
            licensed to practice in Vietnam.
          </p>
        </div>
      </div>
    </footer>
  );
}