'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cases = [
  {
    tag: 'Technology Company',
    country: 'United States',
    headline: 'US-based SaaS company, fully operational in 4 months',
    challenge: 'Needed a Vietnam entity, banking, and work permits for 8 relocating engineers before a product launch deadline.',
    outcome: 'LLC registered, corporate account open, all 8 work permits approved. Product launched on schedule.',
    metrics: [
      { value: '~4', unit: 'mo', label: 'Decision to operational' },
      { value: '8', unit: '', label: 'Work permits secured' },
      { value: '1', unit: '', label: 'Entity + bank established' },
    ],
    accentColor: 'from-primary-500/20 to-primary-600/10',
    borderColor: 'border-primary-500/20',
  },
  {
    tag: 'Family Office',
    country: 'Europe',
    headline: 'European family office - 3-year residency for 3 partners',
    challenge: 'Three investment partners needed long-term TRC status and a clean holding structure for Vietnam real-estate and equity positions.',
    outcome: '3-year TRC cards issued to all three partners. Investment holding company structured for optimal tax treatment.',
    metrics: [
      { value: '3', unit: 'yr', label: 'TRC for all partners' },
      { value: '$2M+', unit: '', label: 'Investment structured' },
      { value: '6', unit: 'wks', label: 'TRC processing time' },
    ],
    accentColor: 'from-accent-400/20 to-accent-500/10',
    borderColor: 'border-accent-400/20',
  },
  {
    tag: 'Private Equity',
    country: 'Singapore',
    headline: 'Singapore PE fund - portfolio company compliance in 30 days',
    challenge: 'Acquired a Vietnam portfolio company mid-year with no compliance infrastructure. Tax, social insurance, and accounting were all outstanding.',
    outcome: 'Full accounting caught up, PIT and CIT filings submitted, social insurance enrolled for 8 employees. Zero penalties.',
    metrics: [
      { value: '30', unit: 'days', label: 'Full compliance achieved' },
      { value: '8', unit: '', label: 'Employees enrolled' },
      { value: '0', unit: '', label: 'Penalties incurred' },
    ],
    accentColor: 'from-primary-400/15 to-primary-500/8',
    borderColor: 'border-primary-400/20',
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-ivory">
      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="inline-block text-primary-600 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-5">
            Client Results
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight">
            What execution looks like{' '}
            <span className="italic">in practice</span>
          </h2>
          <p className="text-lg text-stone-500 leading-relaxed">
            Real engagements. Anonymized at client request. These outcomes represent the standard we hold ourselves to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.headline}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className={`relative bg-white rounded-3xl p-8 border ${c.borderColor} hover:shadow-elevation-3 transition-all duration-500 group hover:-translate-y-1`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${c.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Tag */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-semibold tracking-wide">
                    {c.tag}
                  </span>
                  <span className="text-stone-400 text-xs">{c.country}</span>
                </div>

                {/* Headline */}
                <h3 className="text-xl font-display font-bold text-stone-900 mb-4 leading-snug">
                  {c.headline}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">The Situation</div>
                  <p className="text-stone-500 text-sm leading-relaxed">{c.challenge}</p>
                </div>

                {/* Outcome */}
                <div className="mb-8">
                  <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1.5">The Outcome</div>
                  <p className="text-stone-600 text-sm leading-relaxed">{c.outcome}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-stone-100">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-display font-bold text-stone-900 text-lg">
                        {m.value}<span className="text-primary-500 text-sm">{m.unit}</span>
                      </div>
                      <div className="text-stone-400 text-xs mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-stone-400 text-sm mt-10"
        >
          All case studies anonymized at client request. Results reflect specific engagements and may vary.
        </motion.p>
      </div>
    </section>
  );
}
