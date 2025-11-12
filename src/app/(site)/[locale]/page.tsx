import Link from 'next/link';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import TestimonialSection from '@/components/TestimonialSection';
import TrustSignals from '@/components/TrustSignals';
import { getTranslations } from 'next-intl/server';

const serviceCards = [
  {
    icon: '🏠',
    key: 'trc',
    href: '/services/trc-application'
  },
  {
    icon: '💼',
    key: 'workPermit',
    href: '/services/work-permit'
  },
  {
    icon: '🏢',
    key: 'companySetup',
    href: '/services/company-setup'
  }
] as const;

const whyItems = [
  { icon: '🧭', key: 'expertise' },
  { icon: '🤝', key: 'support' },
  { icon: '💡', key: 'transparency' },
  { icon: '🏆', key: 'success' }
] as const;

export default async function HomePage() {
  const t = await getTranslations('homepage');
  const common = await getTranslations('common');

  const stats = [
    { value: t('stats.expats'), label: t('stats.expatLabel') },
    { value: t('stats.growth'), label: t('stats.growthLabel') },
    { value: t('stats.ranking'), label: t('stats.rankingLabel') }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl mb-10">{t('hero.subtitle')}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('hero.cta')}
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl py-4 px-6">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-75 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSignals />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t('services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((service) => (
              <div
                key={service.key}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="text-5xl mb-6" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-6">{t(`services.${service.key}.description`)}</p>

                <div className="border-t border-gray-100 pt-6">
                  <div className="text-sm text-gray-500 mb-6">{t(`services.${service.key}.duration`)}</div>
                  <Link
                    href={service.href}
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
                  >
                    {common('learnMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Link */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-4">
              Plus Marriage Registration, Property Registration, Driver's License, and more...
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('whyChooseUs.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t('whyChooseUs.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyItems.map((item) => (
              <div
                key={item.key}
                className="p-8 border border-gray-200 rounded-2xl text-left bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`whyChooseUs.${item.key}.title`)}
                </h3>
                <p className="text-gray-600">{t(`whyChooseUs.${item.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">{t('cta.subtitle')}</p>
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('cta.button')}
            </Link>
            <div className="text-sm text-white/80">{t('cta.note')}</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
