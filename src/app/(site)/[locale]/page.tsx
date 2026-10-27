import { Link } from '@/i18n/config';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import HeroSection from '@/components/HeroSection';
import { homeCopy as c } from '@/data/homeCopy';
import { PHONE_E164 } from '@/lib/site';
import { buildAlternates } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: c.title,
  description: c.description,
  alternates: buildAlternates('/'),
};

const homepageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
    logo: 'https://www.vietnamlaunchpad.com/vietnam-launchpad-logo.png',
    telephone: PHONE_E164,
    email: 'info@vietnamlaunchpad.com',
    description: c.orgDescription,
    address: { '@type': 'PostalAddress', addressCountry: 'VN', addressLocality: 'Hanoi' },
    areaServed: 'Vietnam',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
    description: c.webDescription,
    inLanguage: c.webLang,
  },
];

const h2Class = 'text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6';
const textClass = 'text-lg text-stone-600 leading-relaxed mb-5';
const chipClass =
  'inline-flex items-center rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 hover:border-primary-300 hover:bg-primary-50 transition-colors';

function LinkChips({ links }: { links: readonly { readonly name: string; readonly href: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {links.map((l) => (
        <Link key={l.href + l.name} href={l.href} className={chipClass}>
          {l.name}
        </Link>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <main className="min-h-screen">
        <Navigation />

        <HeroSection />

        {/* Section 1: where to start */}
        <section className="py-20 md:py-28 bg-ivory">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-14">
              <h2 className={h2Class}>{c.s1.h2}</h2>
              <p className="text-xl text-stone-500 leading-relaxed">{c.s1.intro}</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {c.s1.cards.map((card, index) => (
                <AnimateOnScroll key={card.Link} delay={index * 150}>
                  <Link
                    href={card.Link}
                    className="group bg-white rounded-3xl p-10 transition-all duration-500 hover:shadow-elevation-3 border border-stone-100 hover:border-primary-100 block h-full"
                  >
                    <h3 className="text-2xl font-display font-bold text-stone-900 mb-4 group-hover:text-primary-800 transition-colors">
                      {card.Title}
                    </h3>
                    <p className="text-stone-500 mb-8 leading-relaxed text-base">{card.Text}</p>
                    <span className="text-primary-600 font-semibold text-sm">{card.Button}</span>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: visas */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className={h2Class}>{c.s2.h2}</h2>
            {c.s2.text.map((p) => (
              <p key={p} className={textClass}>{p}</p>
            ))}
            <LinkChips links={c.s2.popular} />
            <LinkChips links={c.s2.links} />
          </div>
        </section>

        {/* Section 3: living */}
        <section className="py-16 md:py-20 bg-ivory">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className={h2Class}>{c.s3.h2}</h2>
            {c.s3.text.map((p) => (
              <p key={p} className={textClass}>{p}</p>
            ))}
            <LinkChips links={c.s3.links} />
          </div>
        </section>

        {/* Section 4: staying longer */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className={h2Class}>{c.s4.h2}</h2>
            {c.s4.text.map((p) => (
              <p key={p} className={textClass}>{p}</p>
            ))}
            <LinkChips links={c.s4.links} />
          </div>
        </section>

        {/* Section 5: services */}
        <section className="py-20 md:py-28 bg-ivory">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className={h2Class}>{c.s5.h2}</h2>
              {c.s5.text.map((p) => (
                <p key={p} className="text-xl text-stone-500 leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {c.s5.groups.map((group) => (
                <div key={group.title} className="bg-white rounded-3xl p-8 border border-stone-100">
                  <h3 className="text-xl font-display font-bold text-stone-900 mb-2">{group.title}</h3>
                  <p className="text-sm text-stone-500 mb-6 leading-relaxed">{group.line}</p>
                  <ul className="space-y-5">
                    {group.services.map((service) => (
                      <li key={service.href}>
                        <Link href={service.href} className="font-semibold text-primary-700 hover:text-primary-800 transition-colors">
                          {service.name}
                        </Link>
                        <p className="text-sm text-stone-500 leading-relaxed mt-1">{service.line}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href={c.s5.all.href} className="inline-flex items-center gap-2 text-primary-600 font-semibold text-base hover:gap-3 transition-all">
                {c.s5.all.name}
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: for business */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className={h2Class}>{c.s6.h2}</h2>
            {c.s6.text.map((p) => (
              <p key={p} className={textClass}>{p}</p>
            ))}
            <LinkChips links={c.s6.links} />
          </div>
        </section>

        {/* Section 7: who we are */}
        <section className="py-16 md:py-20 bg-ivory">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className={h2Class}>{c.s7.h2}</h2>
            {c.s7.text.map((p) => (
              <p key={p} className={textClass}>{p}</p>
            ))}
            <LinkChips links={[c.s7.link]} />
          </div>
        </section>

        {/* FAQ: visible text only, no FAQPage schema on the home page */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className={h2Class}>{c.faq.h2}</h2>
            <div className="space-y-8">
              {c.faq.items.map((item) => (
                <div key={item.q}>
                  <h3 className="text-xl font-display font-semibold text-stone-900 mb-2">{item.q}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-950" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-950/80 to-stone-950/95" />
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">{c.cta.h2}</h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">{c.cta.text}</p>
            <Link
              href={c.cta.button.href}
              className="inline-flex px-12 py-5 bg-white text-primary-800 rounded-full text-base font-bold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              {c.cta.button.text}
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
