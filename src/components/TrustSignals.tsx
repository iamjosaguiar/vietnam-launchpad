import { getTranslations } from 'next-intl/server';

const SignalIcons = {
  applications: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
  approvalRate: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  experience: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  responseTime: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
};

export default async function TrustSignals() {
  const t = await getTranslations('homepage.trustSignals');

  const signals = [
    { value: t('applications'), label: t('applicationsLabel'), iconKey: 'applications' },
    { value: t('approvalRate'), label: t('approvalRateLabel'), iconKey: 'approvalRate' },
    { value: t('experience'), label: t('experienceLabel'), iconKey: 'experience' },
    { value: t('responseTime'), label: t('responseTimeLabel'), iconKey: 'responseTime' }
  ] as const;

  return (
    <section className="relative py-12 md:py-16 bg-white">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {signals.map((signal, index) => (
            <div
              key={signal.label}
              className="group relative text-center"
            >
              {/* Vertical divider for desktop */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
              )}

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="flex justify-center mb-3 text-primary-400 opacity-60 group-hover:opacity-100 group-hover:text-primary-600 transition-all duration-300">
                  {SignalIcons[signal.iconKey]}
                </div>

                {/* Value */}
                <div className="stat-number text-3xl md:text-4xl lg:text-5xl mb-2 group-hover:scale-105 transition-transform duration-300">
                  {signal.value}
                </div>

                {/* Label */}
                <div className="text-sm md:text-base text-gray-500 font-medium tracking-wide">
                  {signal.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
