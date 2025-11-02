import { getTranslations } from 'next-intl/server';

export default async function TrustSignals() {
  const t = await getTranslations('homepage.trustSignals');

  const signals = [
    { value: t('applications'), label: t('applicationsLabel') },
    { value: t('approvalRate'), label: t('approvalRateLabel') },
    { value: t('experience'), label: t('experienceLabel') },
    { value: t('responseTime'), label: t('responseTimeLabel') }
  ];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {signals.map((signal) => (
            <div key={signal.label} className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{signal.value}</div>
              <div className="text-sm text-gray-600">{signal.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
