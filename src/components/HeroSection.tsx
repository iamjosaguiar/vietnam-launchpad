'use client';

import { motion, type Variants } from 'framer-motion';
import { Link } from '@/i18n/config';

const words = ["The Firm", "Serious Investors", "Trust to", "Enter Vietnam."];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

const wordVariant = {
  hidden: { opacity: 0, y: 32, rotateX: -15 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay },
  }),
};

const statsContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 1.4 },
  },
};

const statItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

const stats = [
  { value: '6+', label: 'Years in Vietnam' },
  { value: '15+', label: 'End-to-end services' },
  { value: '2', label: 'Offices in Vietnam' },
  { value: '24h', label: 'Response guarantee' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-primary-950 via-primary-900 to-stone-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-stone-950" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url('/images/backgrounds/hero-vietnam.jpg')` }}
      />
      {/* Cinematic overlay - forest green tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-950/80 to-stone-950/95" />

      {/* Ambient atmospheric glows */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-primary-500/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-400/6 rounded-full blur-[120px]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 pt-36 pb-28 relative z-10">

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-sm font-medium tracking-wide">Vietnam's most trusted market-entry firm</span>
          </div>
        </motion.div>

        {/* Main Headline - word reveal */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.02] tracking-tight mb-8"
            style={{ perspective: 800 }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className={`inline-block mr-[0.2em] ${i === words.length - 1 ? 'italic text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Accent divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent mx-auto mb-8 origin-center"
          />

          {/* Subtitle */}
          <motion.p
            custom={1.0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-14 leading-relaxed font-light"
          >
            Complete market entry for founders, family offices, and executives.
            Legal structure to first hire -{' '}
            <span className="text-white/90 font-medium">operational on your timeline.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1.1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row justify-center gap-4 mb-24"
          >
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-white text-stone-900 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                Request Private Consultation
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/enterprise"
              className="px-10 py-5 rounded-full text-base font-semibold text-white/80 border border-white/15 hover:bg-white/5 hover:text-white hover:border-white/25 transition-all duration-300"
            >
              Enterprise Services
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={statsContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-3xl mx-auto border border-white/8 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={statItem}
                className={`py-5 px-4 text-center ${i < stats.length - 1 ? 'border-r border-white/8' : ''}`}
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/55 uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
    </section>
  );
}
