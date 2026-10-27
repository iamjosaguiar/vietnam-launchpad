import { Metadata } from 'next';
import { buildAlternates, ogImages, twitterDefaults } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import HolaflyCallout from '@/components/HolaflyCallout';
import { Link } from '@/i18n/config';
import { getAllVisaSlugs, getVisaCountry, SRC_EVISA_FEES } from '@/data/visas';
import {
  E_VISA_FACTS,
  E_VISA_LINE_TEXT,
  EVISA_PORTAL_URL,
  INDONESIA_CHECK_LINE,
  PRIVATE_LINE,
  formatVerifiedDate,
  lastVerifiedLine,
} from '@/data/visa-copy';

const NOINDEX_UNTIL_FIXED = new Set([
  'united-states',
  'australia',
  'canada',
  'new-zealand',
  'austria',
  'portugal',
  'greece',
]);

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
  if (data.visaFreeCheck) {
    descriptionParts.push(INDONESIA_CHECK_LINE);
  } else if (data.visaFree && data.visaFreeDays) {
    descriptionParts.push(
      `${data.nationality} citizens enjoy ${data.visaFreeDays}-day visa-free entry to Vietnam${data.tourismOnly ? ' for tourism only, with a passport valid for at least 6 months' : ''}.`
    );
  } else {
    descriptionParts.push(
      `${data.nationality} citizens need an e-visa for Vietnam.`
    );
  }
  if (data.evisaEligible) {
    descriptionParts.push(
      `E-visa: US$25 single entry, US$50 multiple entry, 3 working days, valid up to 90 days. Long-stay options: ${data.recommendedLongStay}.`
    );
  }

  const robots = NOINDEX_UNTIL_FIXED.has(slug)
    ? { index: false, follow: true, googleBot: { index: false, follow: true } }
    : undefined;

  return {
    ...(robots ? { robots } : {}),
    title: `Vietnam Visa for ${data.nationality} Citizens 2026 | Vietnam Launchpad`,
    description: descriptionParts.join(' '),
    keywords: [
      `vietnam visa ${data.country.toLowerCase()}`,
      `${data.nationality.toLowerCase()} vietnam visa`,
      `vietnam entry requirements ${data.country.toLowerCase()}`,
      `vietnam e-visa ${data.nationality.toLowerCase()}`,
      `${data.country.toLowerCase()} passport vietnam`,
    ],
    alternates: buildAlternates(`/visa/${slug}`),
    openGraph: {
      title: `Vietnam Visa for ${data.nationality} Citizens 2026`,
      description: descriptionParts.join(' '),
      type: 'article',
      url: `${baseUrl}/visa/${slug}`,
      images: ogImages,
    },
    twitter: twitterDefaults,
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
  const hasVisaFreeDays = data.visaFree && !!data.visaFreeDays;
  const lastVerified = lastVerifiedLine(data.verifiedOn);
  const tourismNote = data.tourismOnly
    ? ' This visa-free entry is for tourism only and needs a passport valid for at least 6 months.'
    : '';
  const needsVisaAnswer = data.visaFreeCheck
    ? INDONESIA_CHECK_LINE
    : hasVisaFreeDays
    ? `No. ${nat} passport holders can enter Vietnam visa-free for up to ${data.visaFreeDays} days.${tourismNote} For longer stays, an e-visa (valid up to 90 days) is the most convenient option.`
    : `Yes. ${nat} nationals are not eligible for visa-free entry to Vietnam and need an e-visa. ${E_VISA_LINE_TEXT}`;
  const eVisaAnswer = `Yes, ${nat} passport holders are eligible for Vietnam's online e-visa. ${E_VISA_LINE_TEXT}`;
  const howLongAnswer = data.visaFreeCheck
    ? `${INDONESIA_CHECK_LINE} With an e-visa you can stay for up to 90 days. For longer stays, a business visa or Temporary Residence Card (TRC) is required.`
    : hasVisaFreeDays
    ? `${nat} passport holders can stay in Vietnam for up to ${data.visaFreeDays} days without a visa.${tourismNote} If you hold an e-visa, you can stay for up to 90 days. For longer stays, a business visa or Temporary Residence Card (TRC) is required.`
    : `${nat} nationals need an e-visa to enter Vietnam. With the e-visa, you can stay for up to 90 days. For longer stays, a business visa or TRC is required.`;
  const longStayAnswer = `For long-term residency, ${data.recommendedLongStay} is recommended for ${nat} passport holders. An e-visa lets you stay up to 90 days at a time. A business visa or Temporary Residence Card (TRC) covers longer stays.`;
  const requirementsAnswer = data.visaFreeCheck
    ? `${INDONESIA_CHECK_LINE} ${nat} passport holders can apply for the e-visa. ${E_VISA_LINE_TEXT}`
    : hasVisaFreeDays
    ? `${nat} passport holders enjoy ${data.visaFreeDays}-day visa-free entry to Vietnam.${tourismNote} For longer stays, apply for the e-visa. ${E_VISA_LINE_TEXT}`
    : `${nat} nationals are not eligible for visa-free entry and need an e-visa before travel. ${E_VISA_LINE_TEXT}`;

  // Pick a different answer for each question on the page: match by topic first,
  // then hand any unmatched question the next answer that has not been used yet.
  const faqTopics: { test: RegExp; answer: string }[] = [
    { test: /how long|how many days|stay in|can stay/i, answer: howLongAnswer },
    { test: /long[- ]?stay|living|live in|resid|retire|long[- ]term|\bwork\b/i, answer: longStayAnswer },
    { test: /e-?visa|evisa|online visa/i, answer: eVisaAnswer },
    { test: /do .*need|need (a )?visa|visa free|visa-free|without a visa/i, answer: needsVisaAnswer },
    { test: /requirement|entry/i, answer: requirementsAnswer },
  ];
  const faqPool = [needsVisaAnswer, requirementsAnswer, eVisaAnswer, howLongAnswer, longStayAnswer];
  const usedAnswers = new Set<string>();
  const faqAnswerList: (string | undefined)[] = data.topQueries.map((query) => {
    const topic = faqTopics.find((t) => t.test.test(query) && !usedAnswers.has(t.answer));
    if (topic) usedAnswers.add(topic.answer);
    return topic?.answer;
  });
  for (let i = 0; i < faqAnswerList.length; i += 1) {
    if (faqAnswerList[i] === undefined) {
      const next = faqPool.find((a) => !usedAnswers.has(a)) ?? requirementsAnswer;
      usedAnswers.add(next);
      faqAnswerList[i] = next;
    }
  }
  function getFaqAnswer(index: number): string {
    return faqAnswerList[index] ?? requirementsAnswer;
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
    mainEntity: data.topQueries.map((query, i) => ({
      '@type': 'Question',
      name: query.charAt(0).toUpperCase() + query.slice(1) + '?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: getFaqAnswer(i),
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
                    {data.visaFreeCheck ? 'Check current visa-free rules' : 'E-Visa Required'}
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
                reflects Vietnam&apos;s policy as of {formatVerifiedDate(data.verifiedOn)} and is provided for general guidance
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
                          {data.visaFreeCheck
                            ? 'Not confirmed'
                            : data.visaFree && data.visaFreeDays
                            ? `Yes - ${data.visaFreeDays} days${data.tourismOnly ? ' (tourism only, passport valid 6 months)' : ''}`
                            : 'No'}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-50">
                        <dt className="text-sm text-gray-500">E-visa available</dt>
                        <dd className="text-sm font-semibold text-gray-900">
                          {data.evisaEligible ? 'Yes' : 'No'}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-50">
                        <dt className="text-sm text-gray-500">Max visa-free stay</dt>
                        <dd className="text-sm font-semibold text-gray-900">
                          {data.visaFreeCheck
                            ? 'Not confirmed'
                            : data.visaFreeDays
                            ? `${data.visaFreeDays} days`
                            : 'N/A'}
                        </dd>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-50">
                        <dt className="text-sm text-gray-500">E-visa duration</dt>
                        <dd className="text-sm font-semibold text-gray-900">
                          {data.evisaEligible ? `${data.evisaDays} days maximum` : 'N/A'}
                        </dd>
                      </div>
                      <div className="flex justify-between items-start py-3">
                        <dt className="text-sm text-gray-500">Recommended for long stays</dt>
                        <dd className="text-sm font-semibold text-gray-900 text-right max-w-[55%]">
                          {data.recommendedLongStay}
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-5 pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-1">
                      <p className="font-medium text-gray-700">{lastVerified}</p>
                      <p>
                        Official source:{' '}
                        {[...data.sources, SRC_EVISA_FEES]
                          .filter((src, idx, all) => all.findIndex((x) => x.url === src.url) === idx)
                          .map((src, i) => (
                          <span key={src.url}>
                            {i > 0 && ' | '}
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700 underline"
                            >
                              {src.label}
                            </a>
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Entry summary */}
                  <div className="space-y-4">
                    {data.visaFreeCheck ? (
                      <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                        <h3 className="font-semibold text-blue-800 mb-3">Visa-Free Entry</h3>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          {INDONESIA_CHECK_LINE} The e-visa is available to {data.nationality}{' '}
                          passport holders.
                        </p>
                      </div>
                    ) : data.visaFree && data.visaFreeDays ? (
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
                          {data.tourismOnly ? ' This visa-free entry is for tourism only.' : ''}
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
                          You need an e-visa. Not visa-free. {data.nationality} passport holders are
                          not eligible for visa-free entry to Vietnam and can apply for the e-visa
                          online before the trip.
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
                            ? `apply for the e-visa (valid up to 90 days) before your trip. It is the most popular option for digital nomads and short-term workers.`
                            : 'you will need to apply for a visa at a Vietnamese embassy or consulate.'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
              {!data.evisaEligible && (
                <div className="mt-8">
                  <HolaflyCallout variant="visa" />
                </div>
              )}
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
                            <span>
                              {E_VISA_FACTS}{' '}
                              <a
                                href={EVISA_PORTAL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-700 underline font-medium"
                              >
                                evisa.gov.vn
                              </a>
                            </span>
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
                            Accepted at Vietnam's 42 designated e-visa border gates
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
                        <strong>Where to apply:</strong> Use the official portal at{' '}
                        <a
                          href={EVISA_PORTAL_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-600 hover:text-primary-700 underline"
                        >
                          evisa.gov.vn
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
                <HolaflyCallout variant="visa" />
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
                      visitors planning stays of 3 to 12 months. It requires a sponsor letter from a
                      Vietnamese company or your own registered entity. Single or multiple entry
                      options available.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500 mb-5">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        Valid for 3 to 12 months
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
                      nationals. It is valid for 1 to 2 years and is renewable. A TRC eliminates the
                      need for repeated visa renewals and is the most stable residency option for
                      long-term expats.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500 mb-5">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        Valid for 1 to 2 years (renewable)
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
                        {getFaqAnswer(i)}
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
              <p className="text-sm text-white/60 mb-8 -mt-4">{PRIVATE_LINE}</p>
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
