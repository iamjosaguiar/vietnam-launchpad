'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/config';
import { homeCopy } from '@/data/homeCopy';

const words = homeCopy.h1.split(' ');

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

        {/* Eyebrow */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-white/60 text-sm font-medium tracking-wide">{homeCopy.eyebrow}</span>
          </div>
        </motion.div>

        {/* Main Headline - word reveal */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            variants={container}
            initial={false}
            animate="show"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-display font-bold text-white leading-[1.02] tracking-tight mb-8"
            style={{ perspective: 800 }}
          >
            {words.map((word, i) => (
              <span key={i}>
              <motion.span
                variants={wordVariant}
                className={`inline-block ${i === words.length - 1 ? 'italic text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400' : ''}`}
              >
                {word}
              </motion.span>
              {' '}
              </span>
            ))}
          </motion.h1>

          {/* Accent divider */}
          <motion.div
            initial={false}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent mx-auto mb-8 origin-center"
          />

          {/* Subtitle */}
          <motion.p
            custom={1.0}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-14 leading-relaxed font-light"
          >
            {homeCopy.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1.1}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="flex flex-col sm:flex-row justify-center gap-4 mb-24"
          >
            <Link
              href={homeCopy.primary.href}
              className="group relative px-10 py-5 bg-white text-stone-900 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                {homeCopy.primary.text}
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href={homeCopy.secondary.href}
              className="px-10 py-5 rounded-full text-base font-semibold text-white/80 border border-white/15 hover:bg-white/5 hover:text-white hover:border-white/25 transition-all duration-300"
            >
              {homeCopy.secondary.text}
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.ul
            custom={1.4}
            variants={fadeUp}
            initial={false}
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-4xl mx-auto border border-white/8 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/3"
          >
            {homeCopy.trust.map((item, i) => (
              <li
                key={item}
                className={`py-5 px-4 text-center text-sm text-white/80 font-medium ${i < homeCopy.trust.length - 1 ? 'md:border-r border-white/8' : ''}`}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
    </section>
  );
}
