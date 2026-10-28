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
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-paper">
      <div className="container mx-auto px-4 md:px-8">

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="inline-block text-navy font-body font-bold text-sm uppercase tracking-[0.15em] mb-5">
            Client Results
          </span>
          <h2 className="text-step-3 md:text-step-4 font-display font-semibold text-ink mb-6">
            What execution looks like{' '}
            <span className="italic">in practice</span>
          </h2>
          <p className="text-lead text-muted">
            Real engagements. Anonymized at client request. These outcomes represent the standard we hold ourselves to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.headline}
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="relative bg-white rounded-card p-6 md:p-8 border border-hairline hover:shadow-soft transition-shadow duration-150 motion-reduce:transition-none"
            >
              <div>
                {/* Tag */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="inline-block px-3 py-1 rounded-full border border-hairline bg-sand text-ink text-xs font-bold tracking-wide">
                    {c.tag}
                  </span>
                  <span className="text-muted text-xs">{c.country}</span>
                </div>

                {/* Headline */}
                <h3 className="text-step-1 font-display font-semibold text-ink mb-4">
                  {c.headline}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1.5">The Situation</div>
                  <p className="text-muted text-sm leading-relaxed">{c.challenge}</p>
                </div>

                {/* Outcome */}
                <div className="mb-8">
                  <div className="text-xs font-bold text-navy uppercase tracking-wider mb-1.5">The Outcome</div>
                  <p className="text-ink text-sm leading-relaxed">{c.outcome}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-hairline">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-display font-semibold text-ink text-lg">
                        {m.value}<span className="text-navy text-sm">{m.unit}</span>
                      </div>
                      <div className="text-muted text-xs mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={false}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted text-sm mt-10"
        >
          All case studies anonymized at client request. Results reflect specific engagements and may vary.
        </motion.p>
      </div>
    </section>
  );
}
