import { Link } from '@/i18n/config';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import TestimonialSection from '@/components/TestimonialSection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import HeroSection from '@/components/HeroSection';
import EnterpriseSection from '@/components/EnterpriseSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import { getTranslations } from 'next-intl/server';

const serviceCards = [
  { key: 'trc', href: '/services/trc-application' },
  { key: 'workPermit', href: '/services/work-permit' },
  { key: 'companySetup', href: '/services/company-setup' },
] as const;

const ServiceIcons = {
  trc: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    </svg>
  ),
  workPermit: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  companySetup: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

const homepageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
    logo: 'https://www.vietnamlaunchpad.com/vietnam-launchpad-logo.png',
    telephone: '+84765805294',
    email: 'info@vietnamlaunchpad.com',
    description: "Vietnam's premier market-entry and compliance firm for founders, investors, and executives. Work permits, TRC, company setup, and full enterprise market-entry packages.",
    address: { '@type': 'PostalAddress', addressCountry: 'VN', addressLocality: 'Hanoi' },
    areaServed: 'VN',
    priceRange: '$$$',
    serviceType: ['Market Entry Consulting', 'Immigration Consulting', 'Business Registration', 'Work Permit Services'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
  },
];

export default async function HomePage() {
  const t = await getTranslations('homepage');
  const common = await getTranslations('common');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero - Framer Motion, new positioning */}
        <HeroSection />

        {/* Credibility bar */}
        <section className="cred-bar py-6 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center">
              {[
                { icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', label: 'Licensed & Registered in Vietnam' },
                { icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z', label: 'Vietnamese Law Office Partners' },
                { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Money-back guarantee' },
                { icon: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155', label: 'English, Vietnamese, Korean, Chinese' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-stone-600 font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-36 bg-ivory">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <span className="inline-block text-primary-600 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-5">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 mb-6">
                {t('services.title')}
              </h2>
              <p className="text-xl text-stone-500 leading-relaxed">
                {t('services.subtitle')}
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {serviceCards.map((service, index) => (
                <AnimateOnScroll key={service.key} delay={index * 150}>
                  <Link
                    href={service.href}
                    className="group relative bg-white hover:bg-white rounded-3xl p-10 transition-all duration-500 hover:shadow-elevation-3 border border-stone-100 hover:border-primary-100 block h-full"
                  >
                    <div className="absolute top-8 right-8 text-7xl font-display font-bold text-stone-50 group-hover:text-primary-50 transition-colors select-none">
                      0{index + 1}
                    </div>

                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center mb-8 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                      {ServiceIcons[service.key]}
                    </div>

                    <h3 className="relative z-10 text-2xl font-display font-bold text-stone-900 mb-4 group-hover:text-primary-800 transition-colors">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="relative z-10 text-stone-500 mb-6 leading-relaxed text-base">
                      {t(`services.${service.key}.description`)}
                    </p>

                    <div className="relative z-10 inline-flex items-center gap-2 text-sm text-stone-400 mb-8">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t(`services.${service.key}.duration`)}
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>{common('learnMore')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll className="mt-14 text-center" delay={200}>
              <p className="text-stone-400 mb-4 text-sm">
                Plus eVisa, Marriage Registration, Relocation, Accounting, Tax Filing, PR, and more
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
              >
                <span>View all 15+ services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Enterprise Section - dark, for founders/investors */}
        <EnterpriseSection />

        {/* Case Studies */}
        <CaseStudiesSection />

        {/* Why Choose Us */}
        <section className="py-24 md:py-36 bg-stone-950 text-white overflow-hidden relative">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimateOnScroll animation="fade-right">
                <span className="inline-block text-accent-400 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-6">
                  Why Vietnam Launchpad
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  {t('whyChooseUs.title')}
                </h2>
                <p className="text-lg text-white/65 mb-12 leading-relaxed">
                  {t('whyChooseUs.subtitle')}
                </p>

                <div className="space-y-8">
                  {[
                    { title: t('whyChooseUs.expertise.title'), desc: t('whyChooseUs.expertise.description') },
                    { title: t('whyChooseUs.support.title'), desc: t('whyChooseUs.support.description') },
                    { title: t('whyChooseUs.transparency.title'), desc: t('whyChooseUs.transparency.description') },
                    { title: t('whyChooseUs.success.title'), desc: t('whyChooseUs.success.description') },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary-500/15 border border-primary-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-white/90">{item.title}</h3>
                        <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" className="relative" delay={200}>
                <div className="relative bg-gradient-to-br from-white/6 to-white/3 rounded-3xl p-10 md:p-14 backdrop-blur-sm border border-white/8">
                  <div className="text-center mb-10">
                    <div className="text-8xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/30 mb-3">
                      6+
                    </div>
                    <div className="text-white/40 text-base font-body">Years operating in Vietnam</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { val: '2', lbl: 'Office Locations' },
                      { val: '24h', lbl: 'Response Guarantee' },
                      { val: 'Free', lbl: 'Initial Consultation' },
                      { val: '100%', lbl: 'Vietnam-Based Team' },
                    ].map((s) => (
                      <div key={s.lbl} className="bg-white/4 border border-white/6 rounded-2xl p-5 text-center">
                        <div className="text-2xl font-display font-bold text-white mb-1">{s.val}</div>
                        <div className="text-xs text-white/55 font-body">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <TestimonialSection />

        {/* Final CTA */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-950" />
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-950/80 to-stone-950/95" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-400/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/8 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <AnimateOnScroll animation="scale" className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-10">
                <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/8 backdrop-blur-sm border border-white/10">
                  <div className="flex -space-x-2">
                    {['mark-thompson', 'sarah-chen', 'kim-jihoon'].map((n) => (
                      <img key={n} src={`/images/testimonials/${n}.jpg`} alt="" className="w-8 h-8 rounded-full border-2 border-white/40" />
                    ))}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">Rated 5/5 by our clients</span>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  {t('cta.title')}
                </h2>
                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
                  {t('cta.subtitle')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                  <Link
                    href="/contact"
                    className="group px-12 py-5 bg-white text-primary-800 rounded-full text-base font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {t('cta.button')}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className="inline-flex items-center gap-2 text-white/55 text-xs font-body">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('cta.note')}</span>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { val: 'Free', lbl: 'Initial Consultation' },
                    { val: '2', lbl: 'Office Locations' },
                    { val: '15+', lbl: 'Services' },
                    { val: '24h', lbl: 'Response Time' },
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div className="text-2xl font-display font-bold text-white mb-1">{s.val}</div>
                      <div className="text-xs text-white/55 font-body uppercase tracking-wider">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
