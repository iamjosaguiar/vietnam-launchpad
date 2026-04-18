import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/config';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { getExchangeRates, vndPerCurrency, formatVnd } from '@/lib/open-data';

export const revalidate = 21600;

export const metadata: Metadata = {
  title: 'VND Currency Converter - Convert to Vietnamese Dong | Vietnam Launchpad',
  description:
    'Convert USD, EUR, GBP, AUD, SGD, JPY, KRW and 19 other currencies to Vietnamese Dong (VND). Live rates updated every 6 hours. Expat-focused currency conversion for Vietnam.',
  keywords: [
    'VND currency converter',
    'convert to Vietnamese Dong',
    'USD to VND',
    'EUR to VND',
    'GBP to VND',
    'Vietnam currency converter',
    'Vietnamese Dong conversion',
    'VND exchange rate',
  ],
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/convert',
  },
  openGraph: {
    title: 'VND Currency Converter - Convert to Vietnamese Dong',
    description: 'Live currency conversion to Vietnamese Dong. 19 currency pairs with expat tips.',
    type: 'website',
  },
};

const CURRENCY_PAIRS = [
  { from: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { from: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { from: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { from: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { from: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { from: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' },
  { from: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { from: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
  { from: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰' },
  { from: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭' },
  { from: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾' },
  { from: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿' },
  { from: 'CHF', name: 'Swiss Franc', symbol: 'Fr', flag: '🇨🇭' },
  { from: 'SEK', name: 'Swedish Krona', symbol: 'kr', flag: '🇸🇪' },
  { from: 'NOK', name: 'Norwegian Krone', symbol: 'kr', flag: '🇳🇴' },
  { from: 'DKK', name: 'Danish Krone', symbol: 'kr', flag: '🇩🇰' },
  { from: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { from: 'TWD', name: 'Taiwan Dollar', symbol: 'NT$', flag: '🇹🇼' },
  { from: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VND Currency Converter - Convert to Vietnamese Dong',
  url: 'https://www.vietnamlaunchpad.com/convert',
  description: 'Live currency conversion to Vietnamese Dong for 19 currency pairs. Updated every 6 hours.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vietnamlaunchpad.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Currency Converter',
        item: 'https://www.vietnamlaunchpad.com/convert',
      },
    ],
  },
};

export default async function ConvertIndexPage() {
  const ratesData = await getExchangeRates();

  const updatedAt = ratesData?.time_last_update_utc
    ? new Date(ratesData.time_last_update_utc).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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
                VND{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-primary-400">
                  Currency Converter
                </span>
              </h1>

              <p className="hero-subtitle text-xl text-white/60 mb-8 max-w-2xl">
                Convert USD, EUR, GBP, AUD, SGD, JPY, KRW and 12 more currencies to Vietnamese Dong.
                Live mid-market rates with expat-focused guidance.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-white/50">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  19 currency pairs
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Auto-refreshed 4x daily
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Expat-focused tips per pair
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Currency Pairs Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900">
                    All Currency Pairs
                  </h2>
                  {updatedAt && (
                    <p className="text-sm text-gray-500 mt-1">Rates updated {updatedAt}</p>
                  )}
                </div>
                <Link
                  href="/vietnam-exchange-rates"
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Full rates table →
                </Link>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {CURRENCY_PAIRS.map((pair, i) => {
                const rate = ratesData ? vndPerCurrency(ratesData.rates, pair.from) : null;
                const pairSlug = `${pair.from.toLowerCase()}-to-vnd`;

                return (
                  <AnimateOnScroll key={pair.from} animation="fade-up">
                    <Link
                      href={`/convert/${pairSlug}`}
                      className="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-5 hover:border-primary-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{pair.flag}</span>
                        <div>
                          <div className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                            {pair.from} → VND
                          </div>
                          <div className="text-xs text-gray-500">{pair.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        {rate !== null ? (
                          <>
                            <div className="text-sm font-bold text-gray-900">
                              {formatVnd(rate)} ₫
                            </div>
                            <div className="text-xs text-gray-400">per 1 {pair.from}</div>
                          </>
                        ) : (
                          <div className="text-sm text-gray-400">-</div>
                        )}
                        <div className="mt-1 text-xs text-primary-600 group-hover:text-primary-700 font-medium">
                          View →
                        </div>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Converting Currency to VND: What Expats Need to Know
                </h2>
              </AnimateOnScroll>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  The Vietnamese Dong (VND, ₫) is the sole legal currency of Vietnam. The State Bank of
                  Vietnam manages VND within a controlled floating band against the US Dollar, keeping
                  exchange rate movements gradual and relatively predictable.
                </p>
                <p>
                  For expats, currency conversion typically involves two scenarios: regular transfers
                  (monthly salary or pension arriving in a foreign currency) and one-off large conversions
                  (apartment deposits, large purchases, business capital contributions). Each has different
                  optimal strategies.
                </p>
                <p>
                  For regular transfers, Wise and Revolut consistently offer near mid-market rates with
                  low fees - significantly better than traditional bank wire rates. For large one-off
                  conversions, licensed money changers in major cities sometimes offer competitive rates
                  for substantial sums.
                </p>
                <p>
                  Each currency pair page below includes a live rate, conversion table, and specific expat
                  tips for managing that currency in Vietnam.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Most Used', pairs: ['USD', 'EUR', 'GBP'], note: 'Primary expat currencies' },
                  { label: 'Regional', pairs: ['SGD', 'THB', 'MYR'], note: 'ASEAN neighbors' },
                  { label: 'East Asia', pairs: ['JPY', 'KRW', 'CNY'], note: 'Top FDI sources' },
                ].map((group) => (
                  <div key={group.label} className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="text-xs font-semibold text-primary-600 mb-1">{group.label}</div>
                    <div className="text-xs text-gray-400 mb-3">{group.note}</div>
                    <div className="space-y-1">
                      {group.pairs.map((code) => {
                        const p = CURRENCY_PAIRS.find((x) => x.from === code);
                        return p ? (
                          <Link
                            key={code}
                            href={`/convert/${code.toLowerCase()}-to-vnd`}
                            className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary-600 transition-colors"
                          >
                            <span>{p.flag}</span>
                            {code} to VND
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                ))}
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
