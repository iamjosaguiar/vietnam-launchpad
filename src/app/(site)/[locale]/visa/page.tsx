import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';
import { VISA_COUNTRIES } from '@/data/visas';

export const metadata: Metadata = {
  title: 'Vietnam Visa Requirements by Nationality 2026 | Vietnam Launchpad',
  description:
    'Check Vietnam visa requirements for your nationality. 45-day visa-free entry for UK, US, Australia, Canada and more. E-visa available to 111 countries. Updated 2026.',
  keywords: [
    'vietnam visa requirements',
    'vietnam visa by nationality',
    'vietnam visa-free countries',
    'vietnam e-visa',
    'vietnam entry requirements 2026',
    'vietnam visa 2026',
    '45 day visa free vietnam',
    'vietnam evisa eligible countries',
  ],
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/visa',
  },
  openGraph: {
    title: 'Vietnam Visa Requirements by Nationality 2026',
    description:
      '45-day visa-free for UK, US, Australia, Canada and more. E-visa available to 111 countries. Check your nationality.',
    type: 'website',
    url: 'https://www.vietnamlaunchpad.com/visa',
  },
};

const visaFreeCountries45 = VISA_COUNTRIES.filter(
  (c) => c.visaFree && c.visaFreeDays === 45
);
const visaFreeCountries30 = VISA_COUNTRIES.filter(
  (c) => c.visaFree && c.visaFreeDays === 30
);
const evisaOnlyCountries = VISA_COUNTRIES.filter(
  (c) => !c.visaFree && c.evisaEligible
);
const otherCountries = VISA_COUNTRIES.filter(
  (c) => !c.visaFree && !c.evisaEligible
);

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Vietnam Visa Requirements by Nationality 2026',
  url: 'https://www.vietnamlaunchpad.com/visa',
  description:
    'Check Vietnam visa requirements for your nationality. 45-day visa-free entry for UK, US, Australia and more. E-visa available to 111 countries.',
  publisher: {
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
  },
  hasPart: VISA_COUNTRIES.map((c) => ({
    '@type': 'WebPage',
    name: `Vietnam Visa for ${c.nationality} Citizens`,
    url: `https://www.vietnamlaunchpad.com/visa/${c.slug}`,
    description: c.visaFree
      ? `${c.nationality} passport holders enjoy ${c.visaFreeDays}-day visa-free entry to Vietnam.`
      : `${c.nationality} passport holders need a Vietnam e-visa for entry.`,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.vietnamlaunchpad.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Vietnam Visa Requirements',
      item: 'https://www.vietnamlaunchpad.com/visa',
    },
  ],
};

function CountryCard({
  slug,
  flag,
  country,
  visaFree,
  visaFreeDays,
  evisaEligible,
}: {
  slug: string;
  flag: string;
  country: string;
  visaFree: boolean;
  visaFreeDays: number | null;
  evisaEligible: boolean;
}) {
  return (
    <Link
      href={`/visa/${slug}`}
      className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200 flex items-center gap-4"
    >
      <span className="text-4xl flex-shrink-0" role="img" aria-label={country}>
        {flag}
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors truncate">
          {country}
        </div>
        {visaFree && visaFreeDays ? (
          <div className="text-sm text-emerald-600 font-medium mt-0.5">
            {visaFreeDays}-day visa-free
          </div>
        ) : evisaEligible ? (
          <div className="text-sm text-blue-600 font-medium mt-0.5">
            E-visa available
          </div>
        ) : (
          <div className="text-sm text-amber-600 font-medium mt-0.5">
            Consulate visa required
          </div>
        )}
      </div>
      <svg
        className="w-4 h-4 text-gray-300 group-hover:text-primary-500 flex-shrink-0 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}

export default function VisaIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="hero-badge flex items-center gap-3 mb-8">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm text-emerald-400 font-medium">
                  Updated April 2026 - based on Vietnam&apos;s 2023 visa policy
                </span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Vietnam Visa{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-primary-400">
                  Requirements 2026
                </span>
              </h1>

              <p className="hero-subtitle text-xl text-white/60 mb-8 max-w-2xl">
                Find out if you need a visa for Vietnam, how long you can stay, and the best options
                for longer-term residency - by nationality.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-white/50">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  45-day visa-free for 40+ nationalities
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  E-visa available to 111+ countries
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Always verify with official sources before travel
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick stats bar */}
        <section className="bg-white border-b border-gray-100 py-6">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-display font-bold text-gray-900">
                  {visaFreeCountries45.length + visaFreeCountries30.length}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">Visa-free countries</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-gray-900">45 days</div>
                <div className="text-sm text-gray-500 mt-0.5">Max visa-free stay (Western)</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-gray-900">90 days</div>
                <div className="text-sm text-gray-500 mt-0.5">E-visa duration</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-gray-900">111+</div>
                <div className="text-sm text-gray-500 mt-0.5">E-visa eligible countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-amber-50 border-b border-amber-100 py-4">
          <div className="container mx-auto px-4 md:px-8">
            <p className="text-sm text-amber-800 flex items-start gap-2">
              <svg
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                <strong>Disclaimer:</strong> Visa policies change frequently. This page reflects Vietnam&apos;s
                visa policy as of April 2026 and is provided for general guidance only. Always verify
                current requirements with the{' '}
                <span className="font-medium">
                  Vietnam Immigration Department or your nearest Vietnamese embassy
                </span>{' '}
                before travel.
              </span>
            </p>
          </div>
        </section>

        {/* 45-day Visa-Free Countries */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  45-Day Visa-Free Entry
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                Visa-Free Countries (45 Days)
              </h2>
              <p className="text-gray-500 mb-8 max-w-2xl">
                Citizens of these countries can enter Vietnam without a visa for up to 45 days per
                visit. Extended stays require an e-visa or long-term visa.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {visaFreeCountries45.map((c) => (
                  <CountryCard key={c.slug} {...c} />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* 30-day Visa-Free Countries */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  30-Day Visa-Free Entry
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                Visa-Free Countries (30 Days)
              </h2>
              <p className="text-gray-500 mb-8 max-w-2xl">
                ASEAN member states and select bilateral agreements offer 30-day visa-free access.
                E-visa or consulate visa needed for longer stays.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {visaFreeCountries30.map((c) => (
                  <CountryCard key={c.slug} {...c} />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* E-Visa Only Countries */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                  E-Visa Required
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                E-Visa Countries (No Visa-Free)
              </h2>
              <p className="text-gray-500 mb-8 max-w-2xl">
                Citizens of these countries must apply for an e-visa before arrival. The e-visa
                is valid for 90 days and allows multiple entries.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {evisaOnlyCountries.map((c) => (
                  <CountryCard key={c.slug} {...c} />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Consulate Visa Countries */}
        {otherCountries.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
              <AnimateOnScroll>
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                    Consulate Visa Required
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                  Consulate Visa Required
                </h2>
                <p className="text-gray-500 mb-8 max-w-2xl">
                  Citizens of these countries are not eligible for the online e-visa and must
                  obtain a visa through a Vietnamese embassy or consulate.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {otherCountries.map((c) => (
                    <CountryCard key={c.slug} {...c} />
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        )}

        {/* How it works / explainer */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Vietnam Entry Options Explained
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Understanding the different ways to enter and stay in Vietnam legally.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  ),
                  title: 'Visa-Free Entry',
                  description:
                    'Citizens of 40+ countries can enter without a visa for 30–45 days. No application needed - just a valid passport. Cannot be extended, but you can re-enter after leaving the country.',
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  ),
                  title: 'E-Visa (90 Days)',
                  description:
                    'Apply online at evisa.xuatnhapcanh.gov.vn. Valid for 90 days, multiple entry. Processing takes approximately 3 business days. Costs around $25 USD. Available to 111+ nationalities.',
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  ),
                  title: 'Long-Stay Options',
                  description:
                    'For stays beyond 90 days, a Business Visa or Temporary Residence Card (TRC) is required. The TRC is Vietnam\'s main long-term residency document for expats, valid for 1–2 years.',
                },
              ].map((item, i) => (
                <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Long-stay pathway */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  Planning a Long-Term Stay?
                </h2>
                <p className="text-gray-600 mb-8">
                  If you plan to live and work in Vietnam long-term, here are the most common
                  pathways for expats.
                </p>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimateOnScroll animation="fade-up">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <h3 className="font-semibold text-gray-900">Business Visa</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Suitable for freelancers, entrepreneurs, and short-term business visitors.
                      Available for 3–12 months with single or multiple entry. Requires sponsorship
                      from a Vietnamese company or business entity.
                    </p>
                    <Link
                      href="/services/business-visa"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1"
                    >
                      Learn about Business Visa
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={100}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <h3 className="font-semibold text-gray-900">Temporary Residence Card (TRC)</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      The TRC is Vietnam&apos;s main long-term residency document for foreign nationals.
                      Valid for 1–2 years (renewable). Requires a valid work permit or business
                      entity. Replaces the need for visa renewals.
                    </p>
                    <Link
                      href="/services/trc-application"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1"
                    >
                      Learn about TRC Application
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <AnimateOnScroll animation="scale" className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Need Help with Your Vietnam Visa or Residency?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Our consultants handle e-visas, business visas, work permits, and TRC
                applications - so you can focus on building your life in Vietnam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-full text-base font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Book a Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/services/trc-application"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/20 transition-all duration-300"
                >
                  TRC Application Service
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
