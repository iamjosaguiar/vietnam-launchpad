'use client';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import HolaflyCallout from '@/components/HolaflyCallout';
import { Link } from '@/i18n/config';
import Accordion from '@/components/ui/Accordion';
import { SRC_EVISA_FEES, SRC_MPS_EVISA } from '@/data/visas';
import {
  E_VISA_FACTS,
  EVISA_PORTAL_URL,
  FEE_SPLIT_LINE,
  PRIVATE_LINE,
  lastVerifiedLine,
} from '@/data/visa-copy';

const EVISA_VERIFIED_ON = '2026-10-27';

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
      <section className="bg-hero-wash py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <div className="max-w-[760px]">
            <div className="hero-badge mb-4 inline-flex min-h-[32px] items-center gap-2 rounded-full border border-gold-line bg-gold-soft px-3 py-1 text-sm font-bold text-navy">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{service.timeline}</span>
            </div>

            <h1 className="hero-title mb-4 font-display text-step-3 font-semibold leading-tight text-ink nav:text-step-5">
              {service.heroTitle}
            </h1>
            <p className="hero-subtitle mb-8 max-w-measure text-lead text-muted">
              {service.heroDescription}
            </p>

            <div className="hero-cta">
              <Link
                href="/contact"
                data-track="cta_click" data-track-label="book_consultation" data-track-location="service_page"
                className="inline-flex min-h-[48px] items-center gap-3 rounded-full border border-navy bg-navy px-6 font-bold text-white hover:bg-navy-deep"
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
      <section className="bg-paper py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <AnimateOnScroll className="mb-8 max-w-[640px]">
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.08em] text-navy">Step by Step</span>
            <h2 className="mb-3 font-display text-step-2 font-semibold text-ink nav:text-step-4">Our Process</h2>
            <p className="max-w-measure text-muted">Clear, transparent steps to achieve your goals</p>
          </AnimateOnScroll>

          <div className="max-w-4xl">
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <AnimateOnScroll key={index} delay={index * 100}>
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display text-step-1 font-semibold text-white">
                        {step.step}
                      </div>
                    </div>
                    <div className="min-w-0 flex-grow">
                      <div className="rounded-card border border-hairline bg-white p-6">
                        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <h3 className="font-display text-step-1 font-semibold text-ink">{step.title}</h3>
                          <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-gold-line bg-gold-soft px-3 py-1 text-sm font-bold text-navy">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {step.duration}
                          </span>
                        </div>
                        <p className="max-w-measure leading-relaxed text-muted">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            {service.slug === 'evisa' && (
              <div className="mt-10 space-y-6">
                <div className="space-y-3 rounded-card border border-gold-line bg-gold-soft p-6 text-sm text-ink">
                  <p className="font-bold">{PRIVATE_LINE}</p>
                  <p>{FEE_SPLIT_LINE}</p>
                  <p>
                    {E_VISA_FACTS}{' '}
                    <a
                      href={EVISA_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-navy underline"
                    >
                      evisa.gov.vn
                    </a>
                  </p>
                  <p>{lastVerifiedLine(EVISA_VERIFIED_ON)}</p>
                  <p>
                    Official source:{' '}
                    {[SRC_EVISA_FEES, SRC_MPS_EVISA].map((src, i) => (
                      <span key={src.url}>
                        {i > 0 && ' | '}
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy underline"
                        >
                          {src.label}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
                <HolaflyCallout variant="visa" />
              </div>
            )}
            {service.slug === 'relocation-assistance' && (
              <div className="mt-10">
                <HolaflyCallout variant="relocation" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's Included & Requirements */}
      <section className="bg-sand py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* What's Included */}
            <AnimateOnScroll animation="fade-right">
              <div className="h-full rounded-panel border border-hairline bg-white p-6 md:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-success-soft text-success">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-step-2 font-semibold text-ink">What&apos;s Included</h2>
                </div>
                <div className="space-y-4">
                  {service.included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Requirements */}
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="h-full rounded-panel border border-hairline bg-white p-6 md:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-card bg-primary-50 text-navy">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-step-2 font-semibold text-ink">What You&apos;ll Need</h2>
                </div>
                <div className="mb-6 space-y-4">
                  {service.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-navy" />
                      <span className="text-muted">{req}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-card border border-gold-line bg-gold-soft p-4">
                  <p className="text-sm text-ink">
                    <strong>Don&apos;t have all documents?</strong> No problem! We&apos;ll guide you through obtaining everything you need.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-paper py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <AnimateOnScroll className="mb-8 max-w-[640px]">
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.08em] text-navy">Why Choose Us</span>
            <h2 className="font-display text-step-2 font-semibold text-ink nav:text-step-4">Key Benefits</h2>
          </AnimateOnScroll>

          <div className="grid gap-4 md:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="h-full rounded-card border border-hairline bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium leading-relaxed text-ink">{benefit}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-sand py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <AnimateOnScroll className="mb-8 max-w-[640px]">
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.08em] text-navy">Got Questions?</span>
            <h2 className="font-display text-step-2 font-semibold text-ink nav:text-step-4">Frequently Asked Questions</h2>
          </AnimateOnScroll>

          <div className="max-w-4xl">
            <Accordion
              questionAs="h3"
              items={service.faqs.map((faq) => ({ question: faq.question, answer: <p>{faq.answer}</p> }))}
            />
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-paper py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <AnimateOnScroll className="max-w-4xl">
            <div className="rounded-panel border border-hairline bg-success-soft p-6 md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-card bg-white text-success">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 font-display text-step-2 font-semibold text-ink">Our Guarantee</h3>
                  <p className="max-w-measure text-lead text-ink">{service.guarantee}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Legal Disclaimer - Only for company setup */}
      {service.slug === 'company-setup' && (
        <section className="bg-sand py-12">
          <div className="mx-auto w-full max-w-site px-4 md:px-6">
            <AnimateOnScroll className="max-w-4xl">
              <div className="rounded-card border border-hairline bg-white p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-card bg-primary-50 text-navy">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-3 font-display text-step-1 font-semibold text-ink">Legal Partnership Disclosure</h3>
                    <p className="max-w-measure leading-relaxed text-muted">
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
      <section className="bg-paper py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <AnimateOnScroll animation="scale">
            <div className="grid gap-6 rounded-panel bg-navy-deep px-6 py-8 text-white nav:grid-cols-[1fr_auto] nav:items-center nav:p-12">
              <div>
                <h2 className="m-0 font-display text-step-2 font-semibold text-white nav:text-step-4">
                  Ready to Get Started?
                </h2>
                <p className="mb-0 mt-2 max-w-measure text-[#D6E2F0]">
                  Trusted by expats across Vietnam for immigration and business services
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row nav:flex-col">
                <Link
                  href="/contact"
                  data-track="cta_click" data-track-label="book_consultation" data-track-location="service_page"
                  className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-gold px-6 font-bold text-ink hover:bg-gold-hover"
                >
                  Start Your Application
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border-2 border-white/60 px-6 font-bold text-white hover:bg-white/10"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
