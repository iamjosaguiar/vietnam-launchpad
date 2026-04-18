import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';

const packageItems = [
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Legal Entity Setup',
    desc: 'LLC, representative office, or branch - structured to match your investment type, tax position, and operational needs. We handle the Ministry of Planning registration, business license, and seal.',
  },
  {
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    title: 'Banking & Treasury',
    desc: 'Corporate account opening with verified banking partners. We pre-qualify your documentation and manage the relationship, dramatically shortening what typically takes months.',
  },
  {
    icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
    title: 'Work Permits for Your Team',
    desc: "We process work permits for your entire relocating team concurrently - not sequentially. Each application is tracked by a named team member from submission to approval.",
  },
  {
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    title: 'Compliance Infrastructure',
    desc: 'Monthly accounting, quarterly VAT, annual CIT, social insurance enrollment and monthly contributions. We build the compliance infrastructure from day one so nothing is retroactive.',
  },
  {
    icon: 'M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z',
    title: 'Executive Residency (TRC)',
    desc: '3-year Temporary Residence Cards for founding partners and key executives via investment visa route. We handle all documentation, notarization, and immigration authority submissions.',
  },
  {
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    title: 'Dedicated Senior Consultant',
    desc: 'You get one named senior consultant who owns your engagement. Direct WhatsApp access. Weekly status updates. No ticket queues, no passing between teams.',
  },
];

const processSteps = [
  { step: '01', title: 'Strategy Call', duration: '30 minutes', desc: 'We map your full Vietnam situation - investment structure, team composition, timeline, and any complications. You leave with a clear picture of what needs to happen and in what order.' },
  { step: '02', title: 'Proposal & Scope', duration: '2–3 days', desc: "We present a tailored proposal with a fixed fee, a specific timeline, and a named consultant. Nothing is ambiguous. You know exactly what we're doing and when it will be done." },
  { step: '03', title: 'Execution Begins', duration: 'Within 5 days', desc: "Once you agree, we move immediately. Entity submissions, banking appointments, work permit documentation - everything runs in parallel where possible to move as fast as Vietnam's process allows." },
  { step: '04', title: 'Handover & Ongoing', duration: 'Post-launch', desc: "We hand over a fully documented operational entity with all credentials, contacts, and filing calendars. Ongoing compliance retainer available from month one." },
];

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-stone-950 via-primary-950 to-stone-950 text-white py-36 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary-500/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-400/6 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
          <span className="hero-badge inline-block text-accent-400 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-6">
            Enterprise
          </span>
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
            Complete Vietnam
            <span className="italic block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-400">
              Market Entry
            </span>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-white/65 max-w-2xl font-body leading-relaxed mb-12">
            For founders, family offices, and institutional investors entering Vietnam. From legal structure to first hire - operational within your timeline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-stone-900 rounded-full text-base font-semibold hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Request a Private Strategy Call
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <p className="text-white/30 text-xs mt-6 font-body">
            We take on 6–8 new enterprise clients per quarter to maintain quality standards.
          </p>
        </div>
      </section>

      {/* Investment context */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '3-4', unit: ' mo', label: 'Avg. market-entry time' },
              { value: '$15k', unit: '+', label: 'Engagements start from' },
              { value: '100%', unit: '', label: 'Approval rate, 2024' },
              { value: '1', unit: '', label: 'Named consultant per client' },
            ].map((s) => (
              <div key={s.label} className="py-4">
                <div className="text-4xl font-display font-bold text-stone-900 mb-1">
                  {s.value}<span className="text-primary-500">{s.unit}</span>
                </div>
                <div className="text-stone-400 text-sm font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 md:py-36 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <AnimateOnScroll className="max-w-2xl mb-16">
            <span className="inline-block text-primary-600 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-5">
              What's Included
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight">
              Every piece of your Vietnam strategy
            </h2>
            <p className="text-stone-500 leading-relaxed">
              Enterprise engagements cover the full market-entry spectrum. Nothing is outsourced to third parties we don't control. Nothing is left to you to chase.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageItems.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <div className="bg-white rounded-3xl p-8 border border-stone-100 h-full hover:shadow-elevation-2 hover:-translate-y-1 transition-all duration-400 group">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-5">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
              How an engagement works
            </h2>
          </AnimateOnScroll>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 100}>
                <div className="flex gap-8 items-start p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:border-primary-100 hover:bg-white transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="text-5xl font-display font-bold text-stone-100">{step.step}</div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                      <h3 className="text-xl font-display font-bold text-stone-900">{step.title}</h3>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold font-body">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-24 md:py-36 bg-primary-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fade-right">
              <span className="inline-block text-accent-400 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-6">
                Investment
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Transparent pricing,{' '}
                <span className="italic">fixed fees</span>
              </h2>
              <div className="space-y-5 text-white/65 text-base leading-relaxed">
                <p>
                  Enterprise engagements are scoped and priced based on entity structure, team size, and service complexity. We quote fixed fees - no hourly billing, no surprise invoices.
                </p>
                <p>
                  <span className="text-white/90 font-semibold">Market entry packages</span> typically range from <span className="text-white/90 font-semibold">$15,000 to $150,000</span> depending on entity type, banking complexity, and team size.
                </p>
                <p>
                  <span className="text-white/90 font-semibold">Ongoing compliance retainers</span> start at <span className="text-white/90 font-semibold">$3,000/month</span> and cover accounting, tax filings, social insurance, and compliance monitoring.
                </p>
                <p>
                  Individual services (work permits, TRC, company setup) are available on a standalone basis for clients who need specific components only.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" delay={150}>
              <div className="bg-white/4 border border-white/8 rounded-3xl p-10">
                <h3 className="text-2xl font-display font-bold text-white mb-8">Ready to start?</h3>

                <div className="space-y-4 mb-10">
                  {[
                    'Fixed-fee engagement, scoped before you commit',
                    'Named senior consultant for your engagement',
                    'Weekly status updates throughout',
                    '4-hour response guarantee',
                    'Money-back guarantee if we fail to deliver',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-400/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-accent-400 text-stone-950 rounded-full text-sm font-semibold hover:bg-accent-300 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Private Strategy Call
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <p className="text-white/40 text-xs mt-4 text-center font-body">
                  We take on 6–8 new enterprise clients per quarter
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
