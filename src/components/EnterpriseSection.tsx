'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from '@/i18n/config';

const deliverables = [
  { label: 'Legal Entity Setup', desc: 'LLC, representative office, or branch - optimally structured for your investment' },
  { label: 'Banking Relationships', desc: 'Local and international accounts established with verified partners' },
  { label: 'Work Authorization', desc: 'Work permits for your full team processed concurrently, not sequentially' },
  { label: 'Compliance Infrastructure', desc: 'Accounting, tax filings, and social insurance running from day one' },
  { label: 'Executive Residency', desc: '3-year TRC for founding partners and key executives' },
  { label: 'Dedicated Case Manager', desc: 'One senior contact owns your engagement end to end' },
];

export default function EnterpriseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-navy-deep overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left - Copy */}
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-gold font-body font-bold text-sm uppercase tracking-[0.15em] mb-6">
              Enterprise
            </span>

            <h2 className="text-step-3 md:text-step-4 lg:text-step-5 font-display font-semibold text-white mb-8">
              Built for Founders,{' '}
              <span className="italic">Investors</span>{' '}
              & Executives
            </h2>

            <p className="text-lead text-[#E6EDF4] mb-6">
              When your Vietnam deal is worth 100x the advisory fee, you need execution you can trust. We handle every piece of your market-entry strategy - so your deal closes clean and your team is operational before the competition arrives.
            </p>

            <p className="text-base text-[#E6EDF4] mb-12 leading-relaxed">
              Enterprise engagements typically range from $15,000 to $150,000 depending on entity structure, team size, and complexity. Annual compliance retainers start at $3,000/month.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/enterprise"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 px-6 border border-gold bg-gold text-ink rounded-full text-base font-bold hover:border-gold-hover hover:bg-gold-hover transition-colors duration-150 motion-reduce:transition-none"
              >
                Explore Enterprise Services
                <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 px-6 rounded-full text-base font-bold text-white border border-white hover:bg-navy transition-colors duration-150 motion-reduce:transition-none"
              >
                Schedule a strategy call
              </Link>
            </div>
          </motion.div>

          {/* Right - Deliverables */}
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Spotlight card */}
            <div className="bg-navy border border-primary-500 rounded-panel p-6 md:p-10 mb-6">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-primary-500">
                <div className="flex-none w-10 h-10 rounded-xl bg-gold flex items-center justify-center">
                  <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Complete Market Entry Package</div>
                  <div className="text-[#E6EDF4] text-xs">Everything included, nothing outsourced</div>
                </div>
              </div>

              <div className="space-y-5">
                {deliverables.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={false}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.07 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-0.5">{item.label}</div>
                      <div className="text-[#E6EDF4] text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social proof strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '3-4', unit: 'mo', desc: 'Avg. market-entry time' },
                { value: '100%', unit: '', desc: 'Approval rate, 2024' },
                { value: '8', unit: 'new', desc: 'Enterprise clients/quarter' },
              ].map((s) => (
                <div key={s.desc} className="bg-navy border border-primary-500 rounded-card p-3 sm:p-4 text-center">
                  <div className="font-display font-semibold text-white text-xl">
                    {s.value}<span className="text-gold text-sm ml-0.5">{s.unit}</span>
                  </div>
                  <div className="text-[#E6EDF4] text-xs mt-1 leading-tight">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
