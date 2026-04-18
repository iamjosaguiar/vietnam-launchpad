import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TAX_TREATIES } from '@/data/taxTreaties';
import { Link } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Vietnam Double Tax Agreements by Country | Vietnam Launchpad',
  description:
    "Complete list of Vietnam's double taxation agreements (DTAs) with 40+ countries. Withholding tax rates on dividends, interest, and royalties for expats and investors.",
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/tax-treaty',
  },
  openGraph: {
    title: 'Vietnam Double Tax Agreements by Country | Vietnam Launchpad',
    description:
      "Complete list of Vietnam's double taxation agreements (DTAs) with 40+ countries. Withholding tax rates on dividends, interest, and royalties.",
    type: 'website',
  },
};

function formatRate(rate: number | null): string {
  if (rate === null) return '-';
  return `${rate}%`;
}

export default function TaxTreatyListPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vietnam Double Tax Agreements',
    url: 'https://www.vietnamlaunchpad.com/tax-treaty',
    description:
      "Vietnam's network of double taxation agreements (DTAs) with countries worldwide.",
    hasPart: TAX_TREATIES.map((t) => ({
      '@type': 'WebPage',
      name: `Vietnam–${t.country} Double Tax Agreement`,
      url: `https://www.vietnamlaunchpad.com/tax-treaty/${t.slug}`,
    })),
  };

  const inForce = TAX_TREATIES.filter((t) => t.inForce);
  const notInForce = TAX_TREATIES.filter((t) => !t.inForce);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white py-32 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-white/70">Tax & Compliance Reference</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Vietnam Double Tax
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
                Agreements
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12">
              Vietnam has tax treaties with 80+ countries. Find withholding tax rates on dividends,
              interest, and royalties - and what each treaty means for expats and investors.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: `${inForce.length}`, label: 'Active Treaties' },
                { value: '40+', label: 'Countries Covered Here' },
                { value: '2026', label: 'Reference Year' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* US No-Treaty Callout */}
        <section className="bg-amber-50 border-y border-amber-200 py-6">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <div className="text-2xl shrink-0">🇺🇸</div>
              <div>
                <p className="font-semibold text-amber-900">
                  The United States does NOT have a tax treaty with Vietnam.
                </p>
                <p className="text-amber-800 text-sm mt-1">
                  US citizens and green card holders must report worldwide income to the IRS while also paying Vietnam PIT.{' '}
                  <Link href="/tax-treaty/united-states" className="underline font-medium hover:text-amber-900">
                    See the full US-Vietnam tax situation →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treaty Table */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Active Treaties
              </h2>
              <p className="text-gray-500">
                {inForce.length} countries with in-force double taxation agreements with Vietnam.
                Click any country for full details and expat guidance.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Country</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Status</th>
                    <th className="text-center px-6 py-4 font-semibold text-gray-700">Dividends WHT</th>
                    <th className="text-center px-6 py-4 font-semibold text-gray-700">Interest WHT</th>
                    <th className="text-center px-6 py-4 font-semibold text-gray-700">Royalties WHT</th>
                    <th className="text-center px-6 py-4 font-semibold text-gray-700">In Force</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {inForce.map((treaty, idx) => (
                    <tr
                      key={treaty.slug}
                      className={`hover:bg-primary-50/40 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                    >
                      <td className="px-6 py-4">
                        <Link
                          href={`/tax-treaty/${treaty.slug}`}
                          className="flex items-center gap-3 font-medium text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          <span className="text-xl">{treaty.flag}</span>
                          {treaty.country}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          In Force
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-mono text-gray-700">
                        {formatRate(treaty.dividendRate)}
                      </td>
                      <td className="px-6 py-4 text-center font-mono text-gray-700">
                        {formatRate(treaty.interestRate)}
                      </td>
                      <td className="px-6 py-4 text-center font-mono text-gray-700">
                        {formatRate(treaty.royaltiesRate)}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        {treaty.inForceYear ?? '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {notInForce.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  No Treaty / Not in Force
                </h2>
                <p className="text-gray-500 mb-6">
                  Countries where no double taxation agreement exists or is not in force with Vietnam.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="text-left px-6 py-4 font-semibold text-gray-700">Country</th>
                        <th className="text-left px-6 py-4 font-semibold text-gray-700">Status</th>
                        <th className="text-left px-6 py-4 font-semibold text-gray-700">Key Note</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {notInForce.map((treaty) => (
                        <tr key={treaty.slug} className="hover:bg-amber-50/40 transition-colors">
                          <td className="px-6 py-4">
                            <Link
                              href={`/tax-treaty/${treaty.slug}`}
                              className="flex items-center gap-3 font-medium text-gray-900 hover:text-primary-600 transition-colors"
                            >
                              <span className="text-xl">{treaty.flag}</span>
                              {treaty.country}
                            </Link>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              No Treaty
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600 max-w-md">
                            {treaty.keyBenefit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <p className="text-xs text-gray-400 mt-8">
              * Withholding tax rates shown are standard treaty rates. Reduced rates may apply where specific conditions are met (e.g., substantial shareholding for dividends). Always verify current rates with a qualified tax adviser before relying on this data.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Need help with Vietnam tax compliance?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Our team handles Vietnam PIT filing, corporate tax, and cross-border tax planning
              for expats and international businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/tax-filing"
                className="btn-primary inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-semibold"
              >
                Tax Filing Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-300 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
