import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllTreatyCountrySlugs, getTreatyCountry } from '@/data/taxTreaties';
import { Link } from '@/i18n/config';

export async function generateStaticParams() {
  const slugs = getAllTreatyCountrySlugs();
  return slugs.map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const treaty = getTreatyCountry(country);

  if (!treaty) {
    return { title: 'Tax Treaty Not Found' };
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  return {
    title: `Vietnam ${treaty.country} Double Tax Agreement (DTA) | Vietnam Launchpad`,
    description: `Vietnam–${treaty.country} double taxation agreement: withholding tax rates, residency rules, and practical guidance for expats and investors.`,
    alternates: {
      canonical: `${baseUrl}/tax-treaty/${treaty.slug}`,
    },
    openGraph: {
      title: `Vietnam ${treaty.country} Double Tax Agreement (DTA)`,
      description: `Vietnam–${treaty.country} double taxation agreement: withholding tax rates, residency rules, and practical guidance for expats and investors.`,
      type: 'article',
    },
  };
}

function RateCell({ rate }: { rate: number | null }) {
  if (rate === null) {
    return <span className="text-gray-400">N/A</span>;
  }
  return (
    <span
      className={`font-bold text-2xl ${
        rate <= 5
          ? 'text-emerald-600'
          : rate <= 10
          ? 'text-primary-600'
          : 'text-amber-600'
      }`}
    >
      {rate}%
    </span>
  );
}

export default async function TaxTreatyCountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const treaty = getTreatyCountry(country);

  if (!treaty) {
    notFound();
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  const faqs = treaty.inForce
    ? [
        {
          q: `Does Vietnam have a tax treaty with ${treaty.country}?`,
          a: `Yes. Vietnam and ${treaty.country} have a Double Taxation Agreement (DTA) that has been in force since ${treaty.inForceYear}. The treaty prevents the same income from being taxed in both countries and sets withholding tax caps on dividends, interest, and royalties.`,
        },
        {
          q: `What is the withholding tax rate on dividends under the Vietnam–${treaty.country} DTA?`,
          a:
            treaty.dividendRate !== null
              ? `Under the Vietnam–${treaty.country} DTA, the withholding tax on dividends is capped at ${treaty.dividendRate}%. Without a treaty, Vietnam's standard domestic WHT rate on dividends paid to foreign entities is generally higher. Always confirm the applicable rate with a tax adviser, as lower rates may apply if specific shareholding thresholds are met.`
              : `The Vietnam–${treaty.country} DTA does not set a specific withholding tax rate on dividends in the standard sense, as one or both countries may not impose personal income tax on this income type. Consult a tax adviser for your specific situation.`,
        },
        {
          q: `How does the ${treaty.country}–Vietnam DTA affect my salary as an expat?`,
          a: `Under Article 15 of the Vietnam–${treaty.country} DTA, employment income is generally taxable in Vietnam if you are working in Vietnam. The treaty's tiebreaker rules determine your residency: ${treaty.tieBreakerRules} If you are a Vietnamese tax resident, your worldwide income may be subject to Vietnam PIT, with a credit or exemption for taxes paid in ${treaty.country}.`,
        },
        {
          q: `What is a Permanent Establishment (PE) under the Vietnam–${treaty.country} treaty?`,
          a: `A Permanent Establishment is a fixed place of business through which a ${treaty.country} company carries on business in Vietnam. If a PE exists, Vietnam can tax the profits attributable to it. Common PE triggers include offices, branches, factories, construction sites lasting more than 6 months, and dependent agents. ${treaty.country} companies operating in Vietnam should assess PE risk carefully.`,
        },
      ]
    : [
        {
          q: `Does Vietnam have a tax treaty with ${treaty.country}?`,
          a: `No. ${treaty.country} and Vietnam do not have a double taxation agreement (DTA). ${treaty.tieBreakerRules} This is a significant tax planning consideration for ${treaty.country} nationals living and working in Vietnam.`,
        },
        {
          q: `How do I avoid double taxation as a ${treaty.country} person in Vietnam without a treaty?`,
          a: `Without a DTA, you may face double taxation on the same income in both countries. Relief options depend on domestic law in both countries. For example, ${treaty.country === 'United States' ? 'US taxpayers can use the Foreign Tax Credit (Form 1116) or the Foreign Earned Income Exclusion (Form 2555) to reduce US tax on Vietnam-source income' : `${treaty.country} taxpayers should consult a specialist on domestic unilateral relief provisions available in ${treaty.country}`}. Professional advice is strongly recommended.`,
        },
        {
          q: `What FBAR and FATCA obligations apply to Americans in Vietnam?`,
          a: `US citizens and green card holders in Vietnam must file an FBAR (FinCEN 114) if their foreign financial accounts exceed $10,000 at any point in the year. FATCA (Foreign Account Tax Compliance Act) requires reporting on Form 8938 if foreign assets exceed certain thresholds. Vietnamese banks are required to report US account holders' details to the IRS under FATCA. Penalties for non-compliance are severe.`,
        },
        {
          q: `Should I get a Certificate of Residency from Vietnam?`,
          a: `A Certificate of Tax Residency from Vietnam's tax authority can be useful even without a formal DTA. It proves your Vietnamese tax status to ${treaty.country} tax authorities and may support claims under domestic unilateral relief provisions. Vietnam Launchpad can assist with obtaining this document as part of our tax advisory services.`,
        },
      ];

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Vietnam–${treaty.country} Double Tax Agreement`,
    url: `${baseUrl}/tax-treaty/${treaty.slug}`,
    description: `Vietnam–${treaty.country} double taxation agreement: withholding tax rates, residency rules, and practical guidance for expats and investors.`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Tax Treaties', item: `${baseUrl}/tax-treaty` },
        {
          '@type': 'ListItem',
          position: 3,
          name: `Vietnam–${treaty.country} DTA`,
          item: `${baseUrl}/tax-treaty/${treaty.slug}`,
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white py-28 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/tax-treaty" className="hover:text-white/70 transition-colors">Tax Treaties</Link>
              <span>/</span>
              <span className="text-white/70">{treaty.country}</span>
            </nav>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{treaty.flag}</span>
                {treaty.inForce ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Treaty In Force since {treaty.inForceYear}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    No Treaty
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Vietnam–{treaty.country}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
                  Double Tax Agreement
                </span>
              </h1>

              <p className="text-xl text-white/60 max-w-2xl">
                {treaty.keyBenefit}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Reference Card */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {treaty.inForce ? (
                <>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
                    Withholding Tax Rates at a Glance
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                      <p className="text-sm font-medium text-gray-500 mb-2">Dividends WHT</p>
                      <RateCell rate={treaty.dividendRate} />
                      <p className="text-xs text-gray-400 mt-2">on dividend payments</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                      <p className="text-sm font-medium text-gray-500 mb-2">Interest WHT</p>
                      <RateCell rate={treaty.interestRate} />
                      <p className="text-xs text-gray-400 mt-2">on interest payments</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                      <p className="text-sm font-medium text-gray-500 mb-2">Royalties WHT</p>
                      <RateCell rate={treaty.royaltiesRate} />
                      <p className="text-xs text-gray-400 mt-2">on royalty payments</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { label: 'Treaty Signed', value: treaty.signedYear?.toString() ?? '—' },
                      { label: 'In Force Since', value: treaty.inForceYear?.toString() ?? '—' },
                      { label: 'Status', value: 'Active' },
                      { label: 'Model', value: 'OECD-based' },
                    ].map((item) => (
                      <div key={item.label} className="bg-primary-50 rounded-xl p-4">
                        <p className="text-xs text-primary-600 font-medium">{item.label}</p>
                        <p className="text-sm font-bold text-primary-900 mt-1">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{treaty.flag}</div>
                    <div>
                      <h2 className="text-xl font-display font-bold text-amber-900 mb-2">
                        No Double Tax Agreement with {treaty.country}
                      </h2>
                      <p className="text-amber-800">
                        {treaty.tieBreakerRules}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What it means for expats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                What This Means for Expats
              </h2>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Residency Tie-Breaker Rules</h3>
                <p className="text-gray-600 leading-relaxed">{treaty.tieBreakerRules}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Practical Context</h3>
                <p className="text-gray-600 leading-relaxed">{treaty.notes}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Provisions (treaty countries only) */}
        {treaty.inForce && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
                  Key Treaty Provisions Explained
                </h2>

                <div className="space-y-6">
                  {/* Dividends */}
                  <div className="rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-emerald-50 px-6 py-4 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Dividends</h3>
                      {treaty.dividendRate !== null && (
                        <span className="text-emerald-700 font-bold">{treaty.dividendRate}% cap</span>
                      )}
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {treaty.dividendRate !== null
                          ? `When a Vietnamese company pays dividends to a ${treaty.country} shareholder, Vietnam withholds ${treaty.dividendRate}% under this treaty — compared to Vietnam's standard domestic rate which may be higher. This applies to portfolio investors. Substantial shareholders may qualify for even lower rates in some treaties.`
                          : `This treaty does not specify a standard WHT rate on dividends, or one or both countries do not impose such withholding. Consult a qualified tax adviser for your specific situation.`}
                      </p>
                    </div>
                  </div>

                  {/* Interest */}
                  <div className="rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-blue-50 px-6 py-4 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Interest</h3>
                      {treaty.interestRate !== null && (
                        <span className="text-blue-700 font-bold">{treaty.interestRate}% cap</span>
                      )}
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {treaty.interestRate !== null
                          ? `Interest paid by a Vietnamese borrower to a ${treaty.country} lender is subject to a maximum ${treaty.interestRate}% withholding tax under this treaty. This is relevant for intercompany loans between ${treaty.country} parent companies and Vietnamese subsidiaries, as well as bonds and other debt instruments.`
                          : `This treaty does not specify a standard WHT rate on interest. Consult a qualified tax adviser for your specific situation.`}
                      </p>
                    </div>
                  </div>

                  {/* Royalties */}
                  <div className="rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-purple-50 px-6 py-4 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Royalties</h3>
                      {treaty.royaltiesRate !== null && (
                        <span className="text-purple-700 font-bold">{treaty.royaltiesRate}% cap</span>
                      )}
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {treaty.royaltiesRate !== null
                          ? `Royalties paid from Vietnam to ${treaty.country} for use of IP (patents, trademarks, software, know-how) are capped at ${treaty.royaltiesRate}% withholding tax. ${treaty.royaltiesRate <= 7 ? `This is a favorable rate compared to many other treaties — particularly advantageous for ${treaty.country} companies licensing technology to Vietnamese operations.` : `This rate applies to all qualifying royalty payments under the treaty.`}`
                          : `This treaty does not specify a standard WHT rate on royalties. Consult a qualified tax adviser for your specific situation.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* US-specific callout (no treaty only) */}
        {!treaty.inForce && treaty.slug === 'united-states' && (
          <section className="py-16 bg-blue-50 border-y border-blue-100">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Key Obligations for US Taxpayers in Vietnam
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'FBAR (FinCEN 114)',
                      desc: 'File annually if your foreign financial accounts exceed $10,000 USD at any point during the year. Covers all Vietnamese bank accounts.',
                      color: 'bg-white border-blue-100',
                    },
                    {
                      title: 'FATCA (Form 8938)',
                      desc: 'Report foreign financial assets exceeding $200,000 (single/abroad) or $400,000 (married/abroad) at year-end, or $300k/$600k during the year.',
                      color: 'bg-white border-blue-100',
                    },
                    {
                      title: 'Foreign Tax Credit (Form 1116)',
                      desc: 'Offset Vietnam PIT paid against your US tax liability. This is the primary mechanism to reduce double taxation in the absence of a treaty.',
                      color: 'bg-white border-blue-100',
                    },
                    {
                      title: 'FEIE (Form 2555)',
                      desc: 'The Foreign Earned Income Exclusion can exclude up to $126,500 (2024) of foreign earned income. Cannot be used with the Foreign Tax Credit on the same income.',
                      color: 'bg-white border-blue-100',
                    },
                  ].map((item) => (
                    <div key={item.title} className={`${item.color} rounded-2xl p-6 border shadow-sm`}>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  US tax law for Americans abroad is highly complex. We strongly recommend working with a US-qualified CPA or attorney with international experience.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Get Tax Advice for Vietnam
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Whether you need help with Vietnam PIT filing, applying treaty benefits, or
              cross-border tax planning, our team is here to help.
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
                Book a Consultation
              </Link>
            </div>
            <div className="mt-8">
              <Link
                href="/tax-treaty"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to all tax treaties
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
