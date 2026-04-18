import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LiveRatesWidget from '@/components/LiveRatesWidget';
import EconomicSnapshotWidget from '@/components/EconomicSnapshotWidget';
import { Link } from '@/i18n/config';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const revalidate = 21600;

export const metadata: Metadata = {
  title: 'USD to VND Exchange Rate Today | Vietnam Dong Rates | Vietnam Launchpad',
  description:
    'Live USD to VND exchange rate and Vietnamese dong rates for USD, EUR, GBP, AUD, SGD, JPY, KRW and more. Updated every 6 hours. Practical expat money tips for Vietnam.',
  keywords: [
    'USD to VND',
    'Vietnam dong exchange rate',
    'VND exchange rate today',
    'USD VND',
    'EUR VND',
    'GBP VND',
    'Vietnam currency',
    'Vietnamese dong',
    'dong exchange rate',
    'Vietnam money',
  ],
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/vietnam-exchange-rates',
  },
  openGraph: {
    title: 'Live Vietnam Dong (VND) Exchange Rates',
    description: 'Live exchange rates for USD, EUR, GBP and more currencies to Vietnamese Dong. Updated every 6 hours.',
    type: 'website',
  },
};

const exchangeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'USD to VND Exchange Rate - Vietnam Currency Guide',
  description:
    'Live Vietnamese Dong exchange rates for USD, EUR, GBP, AUD, SGD, JPY, KRW and more. Updated every 6 hours from open.er-api.com.',
  url: 'https://www.vietnamlaunchpad.com/vietnam-exchange-rates',
  publisher: {
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vietnamlaunchpad.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'USD to VND Exchange Rate',
      item: 'https://www.vietnamlaunchpad.com/vietnam-exchange-rates',
    },
  ],
};

const TIPS = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    ),
    title: 'ATMs vs. Money Changers',
    body: 'Bank ATMs (Vietcombank, BIDV, Techcombank) generally offer rates close to mid-market. Private money changers in tourist areas can beat ATM fees for large sums - always count your cash.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: 'Avoid Airport Exchanges',
    body: 'Airport exchange counters typically offer 3-8% below mid-market rates. Bring enough USD/EUR for your first day, then exchange at a city bank or reputable money changer.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    title: 'Wise & Revolut',
    body: 'For regular transfers from your home country, Wise (formerly TransferWise) and Revolut consistently offer rates within 0.5% of mid-market. Far better than traditional bank wires.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
    title: 'Timing Your Exchange',
    body: 'USD/VND is relatively stable but moves with US interest rate decisions and Vietnam State Bank policy. For large sums (e.g., apartment deposits), monitor rates over 2-4 weeks.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
    title: 'Business Accounts',
    body: 'Setting up a business in Vietnam? A local VND account through Vietcombank or BIDV with a foreign currency sub-account lets you hold USD and convert on your schedule.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
    title: 'Carrying Cash in Vietnam',
    body: 'Vietnam remains heavily cash-based, especially outside major cities. Keep a mix of small VND notes (20K-100K) for markets and street food, and larger bills for rent and services.',
  },
];

export default async function VietnamExchangeRatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exchangeSchema) }}
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
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm text-emerald-400 font-medium">Live data - refreshes every 6 hours</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Vietnam Dong{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-primary-400">
                  Exchange Rates
                </span>
              </h1>

              <p className="hero-subtitle text-xl text-white/60 mb-8 max-w-2xl">
                Live USD to VND rate and Vietnamese Dong rates for USD, EUR, GBP, AUD, SGD, JPY, KRW and more.
                Mid-market rates updated every 6 hours.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-white/50">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  No registration required
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Auto-refreshed 4x daily
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Indicative mid-market rates
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Rates Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <LiveRatesWidget />
            </div>
          </div>
        </section>

        {/* Expat Tips Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Expat Money Tips for Vietnam
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  How to exchange currency, avoid bad rates, and manage your money as a foreigner in Vietnam.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {TIPS.map((tip, i) => (
                <AnimateOnScroll key={i} animation="fade-up">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {tip.icon}
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Vietnam Economic Snapshot */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Vietnam Economic Snapshot
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Key economic indicators from World Bank open data - refreshed daily.
                </p>
              </AnimateOnScroll>
              <EconomicSnapshotWidget />
            </div>
          </div>
        </section>

        {/* About the VND */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
              <AnimateOnScroll>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  About the Vietnamese Dong (VND)
                </h2>
              </AnimateOnScroll>
              <p className="text-gray-600 leading-relaxed">
                The Vietnamese Dong (VND, symbol ₫) is the official currency of Vietnam, issued by the
                State Bank of Vietnam. Notes range from 500 VND to 500,000 VND, with 100,000, 200,000
                and 500,000 note denominations in widespread use.
              </p>
              <p className="text-gray-600 leading-relaxed">
                USD/VND is the most-quoted pair and the reference rate for most expat transactions.
                The State Bank of Vietnam manages the VND within a controlled floating band against the USD,
                so rate movements are gradual rather than volatile. The VND has depreciated gently against
                the USD over recent years (averaging 1-3% annually), largely reflecting inflation differentials.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For expats: most landlords quote rent in USD, major services may invoice in USD, and
                international school fees are typically USD-denominated. Day-to-day spending (food, transport,
                local services) is in VND.
              </p>

              <h3 className="text-xl font-display font-bold text-gray-900 mt-8 mb-4">
                Related Resources
              </h3>
              <ul className="space-y-2 list-none pl-0">
                {[
                  { name: 'Cost of Living in Vietnam 2026', href: '/guides/cost-of-living' },
                  { name: 'Company Setup in Vietnam', href: '/guides/company-setup-vietnam' },
                  { name: 'Tax Filing (PIT) for Expats', href: '/services/tax-filing' },
                  { name: 'Accounting & Bookkeeping Services', href: '/services/accounting-bookkeeping' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm underline underline-offset-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
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
                Planning Your Move to Vietnam?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Our consultants handle visas, work permits, company setup, and banking - so your move goes smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-full text-base font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/guides/cost-of-living"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/20 transition-all duration-300"
                >
                  Cost of Living Guide
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
