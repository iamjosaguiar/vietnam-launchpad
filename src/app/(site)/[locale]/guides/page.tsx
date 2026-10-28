'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { getAllGuides, getAllGuideCategories } from '@/data/guides';
import { Link } from '@/i18n/config';
import { useState } from 'react';

const categoryTone = { bg: 'bg-gold-soft', text: 'text-navy', dot: 'bg-navy' };
const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  'Finance & Money': categoryTone,
  'Visas & Residency': categoryTone,
  'Health & Wellbeing': categoryTone,
  'Housing & Real Estate': categoryTone,
  'Daily Life': categoryTone,
  'Work & Business': categoryTone,
  'Family & Education': categoryTone,
  'City Guides': categoryTone,
};

const categoryIcons: Record<string, React.ReactElement> = {
  'Finance & Money': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'Visas & Residency': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'Health & Wellbeing': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  'Housing & Real Estate': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  'Daily Life': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  'Work & Business': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  'Family & Education': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  'City Guides': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function GuidesPage() {
  const guides = getAllGuides();
  const categories = getAllGuideCategories();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const guidesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vietnam Expat Guides',
    url: 'https://www.vietnamlaunchpad.com/guides',
    description: 'Comprehensive guides for expats moving to and living in Vietnam.',
    hasPart: guides.map((guide) => ({
      '@type': 'Article',
      name: guide.title,
      url: `https://www.vietnamlaunchpad.com/guides/${guide.slug}`,
      description: guide.excerpt,
    })),
  };

  const filtered = activeCategory === 'All'
    ? guides
    : guides.filter((g) => g.category === activeCategory);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesSchema) }}
      />
    <div className="min-h-screen">
      <Navigation />
      <main>

        {/* Hero */}
        <section className="bg-hero-wash py-12 nav:py-16">
          <div className="mx-auto w-full max-w-site px-4 md:px-6">
            <div className="max-w-[760px]">
              <div className="hero-badge mb-4 inline-flex min-h-[32px] items-center gap-2 rounded-full border border-gold-line bg-gold-soft px-3 py-1 text-sm font-bold text-navy">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Evergreen reference guides</span>
              </div>

              <h1 className="hero-title mb-4 font-display text-step-3 font-semibold leading-tight text-ink nav:text-step-5">
                The Vietnam Expat
                <span className="block text-navy">
                  Reference Library
                </span>
              </h1>

              <p className="hero-subtitle mb-8 max-w-measure text-lead text-muted">
                Deep-dive guides on every major topic expats research before and after moving to Vietnam. Kept current, not dated.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { value: `${guides.length}`, label: 'Comprehensive Guides' },
                  { value: categories.length.toString(), label: 'Topic Areas' },
                  { value: 'Monthly', label: 'Update Cadence' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="m-0 font-display text-step-2 font-semibold text-ink">{stat.value}</p>
                    <p className="m-0 mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="bg-paper py-12 nav:py-16">
          <div className="mx-auto w-full max-w-site px-4 md:px-6">

            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap gap-2">
              {['All', ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`min-h-[44px] rounded-full border px-5 text-sm font-bold transition-colors duration-150 motion-reduce:transition-none ${
                  activeCategory === cat
                    ? 'border-navy bg-navy text-white'
                    : 'border-hairline bg-white text-ink hover:bg-sand'
                }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Guide Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((guide, index) => {
                const colors = categoryColors[guide.category] || categoryTone;
                const icon = categoryIcons[guide.category];

                return (
                  <AnimateOnScroll key={guide.slug} delay={index * 80}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-white transition-shadow duration-150 hover:shadow-soft motion-reduce:transition-none">

                      {/* Card Header */}
                      <div className="p-6 pb-0">
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div className={`w-12 h-12 rounded-card ${colors.bg} ${colors.text} flex items-center justify-center shrink-0`}>
                            {icon}
                          </div>
                          <span className={`text-sm font-bold px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                            {guide.category}
                          </span>
                        </div>

                        <h2 className="mb-3 font-display text-step-1 font-semibold leading-snug text-ink group-hover:text-navy">
                          <Link href={`/guides/${guide.slug}`} className="inline-block py-1">
                            {guide.title}
                          </Link>
                        </h2>

                        <p className="text-muted text-sm leading-relaxed line-clamp-3 flex-grow">{guide.excerpt}</p>
                      </div>

                      {/* Card Footer */}
                      <div className="mt-auto p-6 pt-4">
                        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-hairline pt-4">
                          <div className="flex items-center gap-3 text-sm text-muted">
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {guide.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                              {new Date(guide.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                          </div>

                          <Link
                            href={`/guides/${guide.slug}`}
                            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-navy hover:underline underline-offset-4"
                          >
                            Read Guide
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-hairline bg-sand py-12 nav:py-16">
          <div className="mx-auto w-full max-w-site px-4 md:px-6">
            <AnimateOnScroll>
              <h2 className="mb-4 font-display text-step-2 font-semibold text-ink nav:text-step-3">
                Need personalised advice?
              </h2>
              <p className="mb-8 max-w-measure text-lead text-muted">
                Guides cover the general picture. For your specific situation - visa type, tax residency, company structure - talk to one of our experts.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-navy bg-navy px-6 font-bold text-white hover:bg-navy-deep"
                >
                  Book a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-navy bg-white px-6 font-bold text-navy hover:bg-sand"
                >
                  View Our Services
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

      </main>
      <Footer />
    </div>
    </>
  );
}
