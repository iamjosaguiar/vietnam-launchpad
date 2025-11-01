'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/config';

export default function ServicesPreview() {
  const t = useTranslations('homepage.services');
  const commonT = useTranslations('common');

  const services = [
    {
      key: 'trc',
      icon: '🏠',
      href: '/services/trc'
    },
    {
      key: 'workPermit',
      icon: '💼',
      href: '/services/work-permit'
    },
    {
      key: 'companySetup',
      icon: '🏢',
      href: '/services/company-setup'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t(`${service.key}.description`)}
                </p>
                
                <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-2xl font-bold text-vietnam-red">
                      {t(`${service.key}.price`)}
                    </div>
                    <div className="text-sm text-gray-500">Starting from</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {t(`${service.key}.duration`)}
                    </div>
                    <div className="text-sm text-gray-500">Processing time</div>
                  </div>
                </div>

                <Link
                  href={service.href}
                  className="inline-block bg-vietnam-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  {commonT('learnMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block border-2 border-vietnam-red text-vietnam-red px-8 py-3 rounded-lg font-semibold hover:bg-vietnam-red hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}