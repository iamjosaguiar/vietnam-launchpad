import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';
import { getAllVisaSlugs, getVisaCountry } from '@/data/visas';

export async function generateStaticParams() {
  return getAllVisaSlugs().map((slug) => ({ country: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const data = getVisaCountry(slug);

  if (!data) {
    return { title: 'Visa Information Not Found' };
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  const descriptionParts: string[] = [];
  if (data.visaFree && data.visaFreeDays) {
    descriptionParts.push(
      `${data.nationality} citizens enjoy ${data.visaFreeDays}-day visa-free entry to Vietnam.`
    );
  } else {
    descriptionParts.push(
      `${data.nationality} citizens need a Vietnam e-visa before arrival.`
    );
  }
  if (data.evisaEligible) {
    descriptionParts.push(
      `E-visa available online for 90 days. Long-stay options: ${data.recommendedLongStay}.`
    );
  }

  return {
    title: `Vietnam Visa for ${data.nationality} Citizens 2026 | Vietnam Launchpad`,
    description: descriptionParts.join(' '),
    keywords: [
      `vietnam visa ${data.country.toLowerCase()}`,
      `${data.nationality.toLowerCase()} vietnam visa`,
      `vietnam entry requirements ${data.country.toLowerCase()}`,
      `vietnam e-visa ${data.nationality.toLowerCase()}`,
      `${data.country.toLowerCase()} passport vietnam`,
    ],
    alternates: {
      canonical: `${baseUrl}/visa/${slug}`,
    },
    openGraph: {
      title: `Vietnam Visa for ${data.nationality} Citizens 2026`,
      description: descriptionParts.join(' '),
      type: 'article',
      url: `${baseUrl}/visa/${slug}`,
    },
  };
}

export default async function VisaCountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const maybeData = getVisaCountry(slug);

  if (!maybeData) {
    notFound();
  }

  // After notFound(), TypeScript still sees maybeData as potentially undefined in closures.
  // Use a const assertion to tell TypeScript it is defined from here on.
  const data = maybeData;

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  // Generate FAQ answers for topQueries
  const nat = data.nationality;
  const faqAnswers: Record<string, string> = {
    [`do ${nat.toLowerCase()} need a visa for vietnam`]: data.visaFree
      ? `No. ${nat} passport holders can enter Vietnam visa-free for up to ${data.visaFreeDays} days. For stays longer than ${data.visaFreeDays} days, an e-visa (90 days, multiple entry) is the most convenient option.`
      : `Yes. ${nat} nationals are not eligible for visa-free entry to Vietnam. ${data.evisaEligible ? 'However, you can apply for a 90-day e-visa online before departure.' : 'You will need to obtain a visa through a Vietnamese embassy or consulate.'}`,
    [`vietnam e-visa for ${nat.toLowerCase()} passport`]: data.evisaEligible
      ? `Yes, ${nat} passport holders are eligible for Vietnam's online e-visa. It is valid for 90 days with multiple entries. You can apply at the official Vietnam Immigration Department portal (evisa.xuatnhapcanh.gov.vn). Processing typically takes around 3 business days and costs approximately $25 USD.`
      : `${nat} nationals are not currently eligible for the Vietnam online e-visa. Please contact a Vietnamese embassy or consulate for visa options.`,
    [`how long can ${nat.toLowerCase()} stay in vietnam`]: data.visaFree
      ? `${nat} passport holders can stay in Vietnam for up to ${data.visaFreeDays} days without a visa. If you hold an e-visa, you can stay for up to 90 days. For longer stays, a business visa or Temporary Residence Card (TRC) is required.`
      : data.evisaEligible
      ? `${nat} nationals require a visa to enter Vietnam. With the 90-day e-visa, you can stay for up to 90 days. For longer stays, a business visa or TRC is required.`
      : `${nat} nationals need to obtain a visa through a Vietnamese embassy. Stay duration depends on the visa type issued.`,
  };

  // Generic fallback answer builder - uses captured variables so no closure over `data`
  const genericFallback =
    data.visaFree && data.visaFreeDays
      ? `${nat} passport holders enjoy ${data.visaFreeDays}-day visa-free entry to Vietnam. ${data.evisaEligible ? 'For longer stays, apply for the 90-day e-visa at evisa.xuatnhapcanh.gov.vn.' : 'For longer stays, contact a Vietnamese embassy or consulate.'} For long-term residency, ${data.recommendedLongStay} is recommended.`
      : `${nat} nationals ${data.evisaEligible ? 'need to apply for a Vietnam e-visa online before arrival. The e-visa is valid for 90 days, multiple entry.' : 'need to obtain a visa through a Vietnamese embassy or consulate before travel.'} For long-term stays, ${data.recommendedLongStay} is recommended.`;

  function getFaqAnswer(query: string): string {
    const lowerQuery = query.toLowerCase();
    for (const [key, answer] of Object.entries(faqAnswers)) {
      if (lowerQuery.includes(key) || key.includes(lowerQuery)) {
        return answer;
      }
    }
    return genericFallback;
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Vietnam Visa for ${data.nationality} Citizens 2026`,
    url: `${baseUrl}/visa/${slug}`,
    description: data.notes,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Vietnam Visa Requirements',
          item: `${baseUrl}/visa`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${data.country} Visa Requirements`,
          item: `${baseUrl}/visa/${slug}`,
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.topQueries.map((query) => ({
      '@type': 'Question',
      name: query.charAt(0).toUpperCase() + query.slice(1) + '?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: getFaqAnswer(query),
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
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">
                Home
              </Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/visa" className="hover:text-white/70 transition-colors">
                Vietnam Visa
              </Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white/60">{data.country}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Flag + badge row */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl" role="img" aria-label={data.country}>
                  {data.flag}
                </span>
                {data.visaFree && data.visaFreeDays ? (
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {data.visaFreeDays} Days Visa-Free
                  </span>
                ) : data.evisaEligible ? (
                  <span className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3"
                      />
                    </svg>
                    E-Visa Required
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Consulate Visa Required
                  </span>
                )}
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Vietnam Visa for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-primary-400">
                  {data.nationality} Citizens
                </span>
              </h1>

              <p className="hero-subtitle text-xl text-white/60 max-w-2xl">{data.notes}</p>
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
                <strong>Disclaimer:</strong> Visa policies change frequently. This information
                reflects Vietnam&apos;s policy as of April 2026 and is provided for general guidance
                only. Always verify with the Vietnam Immigration Department or your nearest Vietnamese
                embassy before travel.
              </span>
            </p>
          </div>
        </section>

        {/* Quick Facts Card */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Quick Facts */}
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                      Quick Facts for {data.nationality} Passport Holders
                    </h2>
                    <dl className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-50">
                        <dt className="text-sm text-gray-500">Visa-free entry</dt>
                        <dd className="text-sm font-semibold text-gray-900">
                          {data.visaFree && data.visaFreeDays
                            ? `Yes - ${data.visaFreeDays} days`
                            : 'No'}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-50">
                        <dt className="text-sm text-gray-500">E-visa available</dt>
                        <dd className="text-sm font-semibold text-gray-900">
                          {data.evisaEligible ? `Yes - ${data.evisaDays} days` : 'No'}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-50">
                        <dt className="text-sm text-gray-500">Max visa-free stay</dt>
                        <dd className="text-sm font-semibold text-gray-900">
                          {data.visaFreeDays ? `${data.visaFreeDays} days` : 'N/A'}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-50">
                        <dt className="text-sm text-gray-500">E-visa duration</dt>
                        <dd className="text-sm font-semibold text-gray-900">
                          {data.evisaEligible ? `${data.evisaDays} days (multiple entry)` : 'N/A'}
                        </dd>
                      </div>
                      <div className="flex justify-between items-start py-3">
                        <dt className="text-sm text-gray-500">Recommended for long stays</dt>
                        <dd className="text-sm font-semibold text-gray-900 text-right max-w-[55%]">
                          {data.recommendedLongStay}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Entry summary */}
                  <div className="space-y-4">
                    {data.visaFree && data.visaFreeDays ? (
                      <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <svg
                            className="w-5 h-5 text-emerald-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <h3 className="font-semibold text-emerald-800">Visa-Free Entry</h3>
                        </div>
                        <p className="text-sm text-emerald-700 leading-relaxed">
                          As a {data.nationality} passport holder, you can enter Vietnam without
                          a visa for up to <strong>{data.visaFreeDays} days</strong> per visit. No
                          application required - just a valid passport with at least 6 months
                          validity.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <h3 className="font-semibold text-blue-800">Visa Required Before Arrival</h3>
                        </div>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          {data.nationality} passport holders are not eligible for visa-free entry
                          to Vietnam.{' '}
                          {data.evisaEligible
                            ? 'You can apply for a 90-day e-visa online before your trip.'
                            : 'You will need to obtain a visa through a Vietnamese embassy or consulate.'}
                        </p>
                      </div>
                    )}

                    {data.visaFree && data.visaFreeDays && (
                      <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <h3 className="font-semibold text-blue-800">
                            Staying Longer than {data.visaFreeDays} Days?
                          </h3>
                        </div>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          For stays beyond {data.visaFreeDays} days,{' '}
                          {data.evisaEligible
                            ? `apply for the 90-day e-visa before your trip. It allows multiple entries and is the most popular option for digital nomads and short-term workers.`
                            : 'you will need to apply for a visa at a Vietnamese embassy or consulate.'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* E-Visa Section */}
        {data.evisaEligible && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-4xl mx-auto">
                <AnimateOnScroll>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                    Applying for a Vietnam E-Visa
                  </h2>
                  <p className="text-gray-600 mb-8">
                    The e-visa is the simplest way to extend your stay beyond the visa-free period
                    or to enter Vietnam if you are not visa-exempt. Here is everything you need to
                    know.
                  </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">E-Visa Key Details</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Valid for <strong>90 days</strong>, multiple entry
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Apply online - no embassy visit required
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Processing: approximately <strong>3 business days</strong>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Cost: approximately <strong>$25 USD</strong>
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Accepted at all international airports, seaports, and land borders
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Documents Needed</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Valid passport (minimum 6 months validity)
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Digital passport photo (4x6cm, white background)
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Credit or debit card for payment
                          </li>
                          <li className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Accommodation address in Vietnam
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-sm text-gray-500">
                        <strong>Where to apply:</strong> Use the official Vietnam Immigration Department
                        portal at{' '}
                        <span className="font-medium text-gray-700">
                          evisa.xuatnhapcanh.gov.vn
                        </span>
                        . Be cautious of third-party sites that charge higher fees for the same service.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>
        )}

        {/* Long-Stay Options */}
        <section className={`py-16 ${data.evisaEligible ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                  Long-Stay Options for {data.nationality} Expats
                </h2>
                <p className="text-gray-600 mb-8">
                  If you plan to live and work in Vietnam beyond a short visit, here are the
                  recommended pathways based on your situation.
                </p>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimateOnScroll animation="fade-up">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <h3 className="font-semibold text-gray-900">Business Visa</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      The business visa is suitable for freelancers, entrepreneurs, and business
                      visitors planning stays of 3–12 months. It requires a sponsor letter from a
                      Vietnamese company or your own registered entity. Single or multiple entry
                      options available.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500 mb-5">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        Valid for 3–12 months
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        Single or multiple entry
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        Requires Vietnamese company sponsor
                      </li>
                    </ul>
                    <Link
                      href="/services/business-visa"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1 mt-auto"
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
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <h3 className="font-semibold text-gray-900">Temporary Residence Card (TRC)</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      The TRC is Vietnam&apos;s primary long-term residency document for foreign
                      nationals. It is valid for 1–2 years and is renewable. A TRC eliminates the
                      need for repeated visa renewals and is the most stable residency option for
                      long-term expats.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500 mb-5">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        Valid for 1–2 years (renewable)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        Requires work permit or business entity
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        Replaces the need for visa extensions
                      </li>
                    </ul>
                    <Link
                      href="/services/trc-application"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1 mt-auto"
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

        {/* FAQ Section */}
        <section className={`py-16 ${data.evisaEligible ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
              </AnimateOnScroll>

              <div className="space-y-4">
                {data.topQueries.map((query, i) => (
                  <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                    <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="font-semibold text-gray-900 pr-4 text-base">
                          {query.charAt(0).toUpperCase() + query.slice(1)}?
                        </h3>
                        <svg
                          className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {getFaqAnswer(query)}
                      </div>
                    </details>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimateOnScroll>
                <h3 className="text-base font-semibold text-gray-700 mb-4">Related Resources</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'All Visa Requirements by Nationality', href: '/visa' },
                    { name: 'TRC Application Service', href: '/services/trc-application' },
                    { name: 'Business Visa Service', href: '/services/business-visa' },
                    { name: 'Work Permit Service', href: '/services/work-permit' },
                    { name: 'Cost of Living in Vietnam', href: '/guides/cost-of-living' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-full transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </AnimateOnScroll>
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
                Our consultants handle e-visas, business visas, work permits, and TRC applications
                for {data.nationality} nationals. Book a free consultation today.
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
