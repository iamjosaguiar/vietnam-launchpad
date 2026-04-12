import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TourismStatsWidget from '@/components/TourismStatsWidget';
import EconomicSnapshotWidget from '@/components/EconomicSnapshotWidget';
import GrowingSectorsWidget from '@/components/GrowingSectorsWidget';
import { Link } from '@/i18n/config';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Vietnam Economic Statistics & Market Data 2026 | Vietnam Launchpad',
  description:
    'Live and curated Vietnam economic data: tourism arrivals, GDP, sector breakdown, FDI, and key growth industries. Updated daily from World Bank and VNAT.',
  keywords: [
    'vietnam statistics',
    'vietnam economy data',
    'vietnam tourism statistics',
    'vietnam gdp',
    'vietnam fdi',
    'vietnam market data',
    'vietnam economic indicators',
    'vietnam growth sectors',
  ],
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/vietnam-statistics',
  },
  openGraph: {
    title: 'Vietnam Economic Statistics & Market Data 2026',
    description:
      'Live Vietnam economic data: tourism arrivals, GDP, sector breakdown, FDI, and key growth industries. Updated daily.',
    type: 'website',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Vietnam Economic Statistics & Market Data 2026',
  description:
    'Live and curated Vietnam economic data: tourism arrivals, GDP, sector breakdown, FDI, and key growth industries. Updated daily from World Bank and VNAT.',
  url: 'https://www.vietnamlaunchpad.com/vietnam-statistics',
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
      name: 'Vietnam Statistics',
      item: 'https://www.vietnamlaunchpad.com/vietnam-statistics',
    },
  ],
};

export default async function VietnamStatisticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Navigation />

        {/* ── Hero ─────────────────────────────────────────────────────── */}
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
                <span className="text-sm text-emerald-400 font-medium">Live data - refreshes daily</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Vietnam{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-primary-400">
                  Economic Statistics
                </span>
              </h1>

              <p className="hero-subtitle text-xl text-white/60 mb-8 max-w-2xl">
                Live and curated Vietnam market data — tourism arrivals, GDP, sector composition, FDI, and key
                growth industries. Sourced daily from World Bank and VNAT.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-white/50">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  World Bank open data
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Auto-refreshed daily
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  VNAT 2024 estimates
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tourism Statistics ───────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="mb-8 max-w-3xl">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Tourism Statistics
                </h2>
                <p className="text-gray-500 text-sm">
                  International arrival trends from World Bank, combined with VNAT 2024 source-market data.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up">
              <TourismStatsWidget />
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Economic Snapshot ────────────────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Economic Snapshot
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Key macroeconomic indicators from World Bank open data — refreshed daily.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up">
                <EconomicSnapshotWidget />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Sector Breakdown & Growth Industries ─────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="mb-8 max-w-3xl">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Sector Breakdown &amp; Growth Industries
                </h2>
                <p className="text-gray-500 text-sm">
                  GDP composition from World Bank plus curated FDI and growth-sector intelligence.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up">
              <GrowingSectorsWidget />
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Data Sources Note ─────────────────────────────────────────── */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Data Sources &amp; Methodology
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4 text-sm text-gray-600 leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">World Bank Open Data</h3>
                    <p>
                      Macroeconomic indicators (GDP, GDP per capita, inflation, population, FDI, sector composition,
                      tourism arrivals and receipts) are fetched daily from the{' '}
                      <a
                        href="https://data.worldbank.org/country/vietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline font-medium"
                      >
                        World Bank Open Data API
                      </a>{' '}
                      for Vietnam (country code VN). Data typically lags 1–2 years behind the current calendar year.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Vietnam National Administration of Tourism (VNAT)</h3>
                    <p>
                      International arrivals by origin market reflect VNAT 2024 estimates and statistical releases.
                      Country-level figures are approximate and rounded to one decimal place.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">FDI &amp; Sector Growth</h3>
                    <p>
                      Sector growth narratives are sourced from the Vietnam Ministry of Planning and Investment (MPI),
                      the General Statistics Office of Vietnam (GSO), and industry reports, as of 2024.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-400">
                      All data is provided for informational purposes. For investment decisions, always consult primary
                      sources and qualified advisors. Data accuracy cannot be guaranteed.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Related links */}
              <AnimateOnScroll animation="fade-up">
                <div className="mt-8">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Related Resources</h3>
                  <ul className="space-y-2 list-none pl-0">
                    {[
                      { name: 'USD to VND Exchange Rate (Live)', href: '/vietnam-exchange-rates' },
                      { name: 'Vietnam Compliance Calendar', href: '/vietnam-compliance-calendar' },
                      { name: 'Cost of Living in Vietnam 2026', href: '/guides/cost-of-living' },
                      { name: 'Company Setup in Vietnam', href: '/guides/company-setup-vietnam' },
                      { name: 'Salary Calculator (PIT)', href: '/tools/salary-calculator' },
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
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <AnimateOnScroll animation="scale" className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Operate in Vietnam?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Our consultants handle company registration, visas, work permits, and ongoing compliance —
                so you can focus on growing your business.
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
                  href="/services/company-setup"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/20 transition-all duration-300"
                >
                  Company Setup Services
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
