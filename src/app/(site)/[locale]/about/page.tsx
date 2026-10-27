import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';
import { PHONE_E164 } from '@/lib/site';
import { aboutCopy as c } from '@/data/aboutCopy';
import { homeCopy } from '@/data/homeCopy';

const aboutSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com/about',
    description: c.schemaDescription,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
    logo: 'https://www.vietnamlaunchpad.com/vietnam-launchpad-logo.png',
    telephone: PHONE_E164,
    email: 'info@vietnamlaunchpad.com',
    description: homeCopy.orgDescription,
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
              {c.eyebrow}
            </span>
            <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-8 leading-tight">
              {c.h1}
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-white/65 max-w-2xl font-body leading-relaxed">
              {c.intro}
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 md:py-36 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimateOnScroll animation="fade-right">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-8 leading-tight">
                  {c.storyH2}
                </h2>
                <div className="space-y-5 text-stone-500 leading-relaxed">
                  {c.story.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={150}>
                <div className="grid grid-cols-2 gap-4">
                  {c.facts.map((f) => (
                    <div key={f.title} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                      <div className="font-display font-bold text-stone-900 text-lg mb-1">{f.title}</div>
                      <div className="text-stone-500 text-sm">{f.text}</div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-24 md:py-36 bg-ivory">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                {c.howH2}
              </h2>
              <p className="text-stone-500 leading-relaxed">{c.howIntro}</p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.steps.map((step, i) => (
                <AnimateOnScroll key={step.title} delay={i * 100}>
                  <div className="bg-white rounded-3xl p-8 border border-stone-100 h-full hover:shadow-elevation-2 transition-all duration-400">
                    <div className="text-5xl font-display font-bold text-stone-100 mb-6">0{i + 1}</div>
                    <h3 className="text-xl font-display font-bold text-stone-900 mb-3">{step.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{step.text}</p>
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
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  {c.valuesH2}
                </h2>
                <div className="space-y-8">
                  {c.values.map((v) => (
                    <div key={v.title} className="flex gap-5">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-400 mt-2.5" />
                      <div>
                        <h3 className="text-white/90 font-semibold mb-2">{v.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{v.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-white/70 text-sm leading-relaxed">{c.private}</p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-left" delay={150}>
                <div className="bg-white/4 border border-white/8 rounded-3xl p-10">
                  <h2 className="text-2xl font-display font-bold text-white mb-8">{c.officesH2}</h2>
                  <div className="space-y-8 mb-10">
                    {c.offices.map((office) => (
                      <div key={office.name} className="border-b border-white/6 pb-8 last:border-0 last:pb-0">
                        <div className="text-accent-400 font-semibold text-sm mb-2 font-body">{office.name}</div>
                        <div className="text-white/70 text-sm mb-1 leading-relaxed">{office.address}</div>
                        <div className="text-white/50 text-xs">{office.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-4">{c.cta.h2}</h2>
            <p className="text-lg text-stone-500 mb-8 leading-relaxed">{c.cta.text}</p>
            <Link
              href={c.cta.button.href}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-full text-sm font-semibold hover:bg-primary-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              {c.cta.button.text}
            </Link>
            <p className="mt-8 text-sm text-stone-500">
              <Link href={c.secondary.href} className="text-primary-700 font-semibold hover:underline">
                {c.secondary.text}
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
