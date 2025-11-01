'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/config';

export default function Hero() {
  const t = useTranslations('homepage.hero');
  const statsT = useTranslations('homepage.stats');

  return (
    <section className="relative bg-gradient-to-r from-vietnam-red to-red-700 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto text-balance">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-white text-vietnam-red px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('cta')}
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-vietnam-red transition-colors"
            >
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {statsT('expats')}
              </div>
              <div className="text-lg text-gray-200">
                {statsT('expatLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {statsT('growth')}
              </div>
              <div className="text-lg text-gray-200">
                {statsT('growthLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {statsT('ranking')}
              </div>
              <div className="text-lg text-gray-200">
                {statsT('rankingLabel')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vietnam-inspired wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}