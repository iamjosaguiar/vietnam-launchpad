'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';

interface ServiceData {
  slug: string;
  title: string;
  heroTitle: string;
  heroDescription: string;
  timeline: string;
  process: Array<{
    step: number;
    title: string;
    description: string;
    duration: string;
  }>;
  included: string[];
  requirements: string[];
  benefits: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  guarantee: string;
}

export default function ServiceDetailContent({ service }: { service: ServiceData }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-white/70">{service.timeline}</span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              {service.heroTitle}
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10">
              {service.heroDescription}
            </p>

            <div className="hero-cta">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-primary-700 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">Step by Step</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Clear, transparent steps to achieve your goals</p>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-primary-600/25">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-gray-50 hover:bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                          <h3 className="text-xl font-display font-bold text-gray-900">{step.title}</h3>
                          <span className="inline-flex items-center gap-1.5 text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included & Requirements */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* What's Included */}
            <AnimateOnScroll animation="fade-right">
              <div className="bg-white rounded-3xl p-10 shadow-lg shadow-gray-200/50 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900">What&apos;s Included</h2>
                </div>
                <div className="space-y-4">
                  {service.included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Requirements */}
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="bg-white rounded-3xl p-10 shadow-lg shadow-gray-200/50 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900">What You&apos;ll Need</h2>
                </div>
                <div className="space-y-4 mb-6">
                  {service.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary-600 flex-shrink-0 mt-2" />
                      <span className="text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-primary-50 border border-primary-100 rounded-xl">
                  <p className="text-sm text-primary-800">
                    <strong>Don&apos;t have all documents?</strong> No problem! We&apos;ll guide you through obtaining everything you need.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Key Benefits</h2>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-2xl border border-primary-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium leading-relaxed">{benefit}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimateOnScroll className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-secondary-50 to-emerald-50 border-2 border-secondary-200 p-10 rounded-3xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">Our Guarantee</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{service.guarantee}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Legal Disclaimer - Only for company setup */}
      {service.slug === 'company-setup' && (
        <section className="py-12 bg-primary-50">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll className="max-w-4xl mx-auto">
              <div className="bg-white border-2 border-primary-200 p-8 rounded-2xl">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">Legal Partnership Disclosure</h3>
                    <p className="text-gray-600 leading-relaxed">
                      All company registration and legal services are performed in partnership with registered Vietnamese Law Offices
                      licensed to practice in Vietnam. Our role is to coordinate and manage the entire process, ensuring you receive
                      expert legal representation and full compliance with Vietnamese regulations.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="scale" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Join 500+ satisfied clients who trusted us with their Vietnam journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                Start Your Application
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
