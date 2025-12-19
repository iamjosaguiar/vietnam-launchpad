import { Link } from '@/i18n/config';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import TestimonialSection from '@/components/TestimonialSection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { getTranslations } from 'next-intl/server';

const serviceCards = [
  {
    key: 'trc',
    href: '/services/trc-application',
  },
  {
    key: 'workPermit',
    href: '/services/work-permit',
  },
  {
    key: 'companySetup',
    href: '/services/company-setup',
  }
] as const;

const ServiceIcons = {
  trc: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    </svg>
  ),
  workPermit: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  companySetup: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  )
};

export default async function HomePage() {
  const t = await getTranslations('homepage');
  const common = await getTranslations('common');

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section - Premium, Trust-Building */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-primary-950 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80')`,
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-primary-950/95" />

        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[100px]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-4 md:px-8 pt-32 pb-24 relative z-10">
          {/* Trust Badge - Top */}
          <div className="hero-badge flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">Trusted by 500+ expats across Vietnam</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight mb-8">
              Your Vietnam
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
                Success Partner
              </span>
            </h1>

            <p className="hero-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-white text-slate-900 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t('hero.cta')}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/services"
                className="px-10 py-5 rounded-full text-lg font-semibold text-white border border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>

            {/* Key Stats - Prominent */}
            <div className="hero-stats grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">98%</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Approval Rate</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">6+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">24h</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Credibility Bar */}
      <section className="cred-bar py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-gray-600 font-medium">Licensed & Registered</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
              <span className="text-gray-600 font-medium">Vietnamese Law Office Partners</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
              <span className="text-gray-600 font-medium">English, Vietnamese, Korean, Chinese</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </AnimateOnScroll>

          {/* Service Cards - Premium Style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <AnimateOnScroll key={service.key} delay={index * 150}>
                <Link
                  href={service.href}
                  className="group relative bg-gray-50 hover:bg-white rounded-3xl p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-100 block h-full"
                >
                  {/* Number indicator */}
                  <div className="absolute top-8 right-8 text-7xl font-display font-bold text-gray-100 group-hover:text-primary-50 transition-colors">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    {ServiceIcons[service.key]}
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 text-2xl font-display font-bold text-gray-900 mb-4">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="relative z-10 text-gray-500 mb-6 leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </p>

                  {/* Duration badge */}
                  <div className="relative z-10 inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t(`services.${service.key}.duration`)}
                  </div>

                  {/* CTA */}
                  <div className="relative z-10 flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                    <span>{common('learnMore')}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          {/* More Services Link */}
          <AnimateOnScroll className="mt-16 text-center" delay={200}>
            <p className="text-gray-500 mb-4">
              Plus Marriage Registration, Property Registration, Driver&apos;s License, and more
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-4 transition-all"
            >
              <span>View All Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Us - Authority Building */}
      <section className="py-24 md:py-32 bg-slate-950 text-white overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Content */}
            <AnimateOnScroll animation="fade-right">
              <span className="inline-block text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">Why Vietnam Launchpad</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                {t('whyChooseUs.title')}
              </h2>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Right - Stats/Visual */}
            <AnimateOnScroll animation="fade-left" className="relative" delay={200}>
              {/* Background image */}
              <div className="absolute -inset-4 rounded-3xl overflow-hidden opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-10 md:p-14 backdrop-blur-sm border border-white/10">
                <div className="text-center mb-10">
                  <div className="text-8xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-400 mb-4">
                    500+
                  </div>
                  <div className="text-white/60 text-lg">Successful Applications</div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold text-white mb-1">98%</div>
                    <div className="text-sm text-white/50">Success Rate</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold text-white mb-1">6+</div>
                    <div className="text-sm text-white/50">Years Active</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold text-white mb-1">2</div>
                    <div className="text-sm text-white/50">Office Locations</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-display font-bold text-white mb-1">4</div>
                    <div className="text-sm text-white/50">Languages</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-400/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="scale" className="max-w-4xl mx-auto">
            {/* Trust indicators */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="" className="w-8 h-8 rounded-full border-2 border-white/50" />
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="" className="w-8 h-8 rounded-full border-2 border-white/50" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="" className="w-8 h-8 rounded-full border-2 border-white/50" />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/80 text-sm font-medium">Rated 5/5 by 500+ clients</span>
              </div>
            </div>

            {/* Main content */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                {t('cta.title')}
              </h2>
              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="group px-12 py-5 bg-white text-primary-700 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {t('cta.button')}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Response time badge */}
              <div className="inline-flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('cta.note')}</span>
              </div>
            </div>

            {/* Bottom trust signals */}
            <div className="mt-16 pt-10 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-white/50">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-white/50">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">6+</div>
                  <div className="text-sm text-white/50">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white mb-1">24h</div>
                  <div className="text-sm text-white/50">Response Time</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
