import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';

const aboutSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com/about',
    description: "Vietnam Launchpad is Vietnam's premier market-entry and compliance firm for founders, investors, and executives.",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
    logo: 'https://www.vietnamlaunchpad.com/vietnam-launchpad-logo.png',
    telephone: '+84765805294',
    email: 'info@vietnamlaunchpad.com',
    address: { '@type': 'PostalAddress', addressCountry: 'VN', addressLocality: 'Hanoi' },
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <main className="min-h-screen bg-ivory">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-stone-950 via-primary-950 to-stone-950 text-white py-36 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
            <span className="hero-badge inline-block text-accent-400 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-6">
              About Vietnam Launchpad
            </span>
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Vietnam specialists,
              <span className="italic block text-primary-300">not generalists</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-white/65 max-w-2xl font-body leading-relaxed">
              We built Vietnam Launchpad after watching too many founders and investors lose time, money, and deals to avoidable administrative failure. Vietnam is not difficult - but it is specific. Knowing the difference is what we do.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 md:py-36 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimateOnScroll animation="fade-right">
                <span className="inline-block text-primary-600 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-5">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-8 leading-tight">
                  Six years building the firm we wished existed
                </h2>
                <div className="space-y-5 text-stone-500 leading-relaxed">
                  <p>
                    Vietnam Launchpad was founded by professionals who had lived the frustration of Vietnam's bureaucracy firsthand - as founders, employees, and investors themselves. We saw how much time serious people were wasting on process that should be invisible.
                  </p>
                  <p>
                    We started by solving immigration for individuals. Work permits, TRCs, visas. But our clients kept asking us to do more - set up their company, handle their accounting, bring their team over. So we built the infrastructure to do all of it.
                  </p>
                  <p>
                    Today, Vietnam Launchpad operates from offices in Hanoi and Da Nang, with a team that speaks English, Vietnamese, Korean, and Chinese. Our clients range from individual expats to multinational corporations entering Vietnam for the first time.
                  </p>
                  <p>
                    The throughline: we handle the process so you can focus on the reason you came here.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={150}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '6+', label: 'Years in Vietnam', desc: 'Operating since 2018' },
                    { value: '2', label: 'Office Locations', desc: 'Hanoi and Da Nang' },
                    { value: '15+', label: 'Services', desc: 'End-to-end coverage' },
                    { value: '4', label: 'Languages', desc: 'EN, VI, KO, ZH' },
                  ].map((s) => (
                    <div key={s.label} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                      <div className="text-4xl font-display font-bold text-primary-600 mb-1">{s.value}</div>
                      <div className="font-semibold text-stone-800 text-sm mb-1">{s.label}</div>
                      <div className="text-stone-400 text-xs">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 md:py-36 bg-ivory">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-primary-600 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-5">
                Our Methodology
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                The Vietnam Readiness Framework
              </h2>
              <p className="text-stone-500 leading-relaxed">
                Every engagement follows a structured methodology refined over 6 years. Nothing is improvised.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '01', title: 'Assess', desc: 'We map your exact situation - nationality, investment, timeline, team size - and identify every requirement before we start.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                { number: '02', title: 'Structure', desc: "We design the optimal legal and tax structure for your situation - not a template, but something built around your goals.", icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
                { number: '03', title: 'Execute', desc: "We handle every government submission, follow up on every approval, and escalate every exception - you're never chasing paperwork.", icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
                { number: '04', title: 'Maintain', desc: "Operational means nothing if compliance lapses. We proactively manage renewals, filings, and reporting so nothing falls through.", icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              ].map((step, i) => (
                <AnimateOnScroll key={step.number} delay={i * 100}>
                  <div className="bg-white rounded-3xl p-8 border border-stone-100 h-full hover:shadow-elevation-2 transition-all duration-400">
                    <div className="text-5xl font-display font-bold text-stone-100 mb-6">{step.number}</div>
                    <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-bold text-stone-900 mb-3">{step.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Values + Offices */}
        <section className="py-24 md:py-36 bg-primary-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/6 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimateOnScroll animation="fade-right">
                <span className="inline-block text-accent-400 font-body font-semibold text-xs uppercase tracking-[0.15em] mb-6">
                  Our Values
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  What makes us different
                </h2>
                <div className="space-y-8">
                  {[
                    { title: 'Depth over breadth', desc: 'We only operate in Vietnam. Not "Southeast Asia." Not "emerging markets." Vietnam. This specificity is what allows us to be genuinely excellent.' },
                    { title: 'One accountable person', desc: 'Every engagement has a named senior consultant who owns it. Not a ticket queue. Not a shared inbox. One person responsible for your outcome.' },
                    { title: 'No surprises', desc: "We quote fixed fees. We tell you what will happen before it happens. We tell you when something unexpected arises - before it becomes a problem." },
                    { title: 'Results, not activity', desc: "Our standard isn't effort - it's outcome. We're not done until your application is approved, your entity is operational, your team is authorized." },
                  ].map((v) => (
                    <div key={v.title} className="flex gap-5">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-400 mt-2.5" />
                      <div>
                        <h3 className="text-white/90 font-semibold mb-2">{v.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={150}>
                <div className="bg-white/4 border border-white/8 rounded-3xl p-10">
                  <h3 className="text-2xl font-display font-bold text-white mb-8">Our offices</h3>
                  <div className="space-y-8 mb-10">
                    {[
                      { city: 'Hanoi', address: '5th Floor, No.7, Alley 3, Lieu Giai Street, Ba Dinh District', role: 'Main office - corporate, immigration, compliance' },
                      { city: 'Da Nang', address: '16 Tran Phu Street, Hai Chau Ward', role: 'Central Vietnam hub - residency, relocation' },
                    ].map((office) => (
                      <div key={office.city} className="border-b border-white/6 pb-8 last:border-0 last:pb-0">
                        <div className="text-accent-400 font-semibold text-sm mb-2 font-body">{office.city}</div>
                        <div className="text-white/70 text-sm mb-1 leading-relaxed">{office.address}</div>
                        <div className="text-white/50 text-xs">{office.role}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-400 text-stone-950 rounded-full text-sm font-semibold hover:bg-accent-300 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Request a consultation
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
