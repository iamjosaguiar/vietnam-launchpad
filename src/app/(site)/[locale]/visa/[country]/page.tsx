import { Metadata } from 'next';
import { buildAlternates, ogImages, twitterDefaults } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HolaflyCallout from '@/components/HolaflyCallout';
import CuratedVisaPage from '@/components/CuratedVisaPage';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import ChecklistCard from '@/components/ui/ChecklistCard';
import Icon from '@/components/ui/Icon';
import {
  CHECKLIST_COUNT,
  PathwayCard,
  VisaCard,
  VisaColumns,
  VisaHero,
  visaH2,
} from '@/components/visa/VisaShell';
import { curatedVisaPages } from '@/data/visaCurated';
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

  const curated = curatedVisaPages[slug];
  if (curated) {
    return {
      ...(NOINDEX_UNTIL_FIXED.has(slug)
        ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } }
        : {}),
      title: curated.metaTitle,
      description: curated.metaDescription,
      alternates: buildAlternates(`/visa/${slug}`),
      openGraph: {
        title: curated.metaTitle,
        description: curated.metaDescription,
        type: 'article',
        url: `${baseUrl}/visa/${slug}`,
        images: ogImages,
      },
      twitter: twitterDefaults,
    };
  }

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

  const curatedPage = curatedVisaPages[slug];
  if (curatedPage) {
    return <CuratedVisaPage page={curatedPage} />;
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

        <VisaHero
          breadcrumb={data.country}
          flag={data.flag}
          flagLabel={data.country}
          badge={
            data.visaFree && data.visaFreeDays
              ? `${data.visaFreeDays} Days Visa-Free`
              : data.evisaEligible
              ? data.visaFreeCheck
                ? 'Check current visa-free rules'
                : 'E-Visa Required'
              : 'Consulate Visa Required'
          }
          title={`Vietnam Visa for ${data.nationality} Citizens`}
          lead={data.notes}
          notice={PRIVATE_LINE}
        />

        <VisaColumns
          asideLabel="Need help with your visa"
          aside={
            <div className="rounded-panel border border-hairline bg-white p-6 shadow-soft">
              <h2 className="mb-3 font-display text-step-1 font-semibold text-ink">
                Need Help with Your Vietnam Visa or Residency?
              </h2>
              <p className="mb-3 text-[0.95rem] text-muted">
                Our consultants handle e-visas, business visas, work permits, and TRC applications
                for {data.nationality} nationals. Book a free consultation today.
              </p>
              <p className="mb-5 flex items-start gap-2 text-sm text-muted">
                <Icon name="shield" className="mt-0.5 h-[18px] w-[18px] flex-none text-success" />
                {PRIVATE_LINE}
              </p>
              <div className="grid gap-2">
                <Button href="/contact" block icon="arrow">
                  Book a Free Consultation
                </Button>
                <Button href="/services/trc-application" variant="secondary" block>
                  TRC Application Service
                </Button>
              </div>
            </div>
          }
        >
          {/* Disclaimer */}
          <p className="m-0 flex items-start gap-3 rounded-card border border-hairline bg-sand px-4 py-3 text-sm text-ink">
            <Icon name="info" className="mt-0.5 h-5 w-5 flex-none text-navy" />
            <span className="max-w-measure">
              <strong>Disclaimer:</strong> Visa policies change frequently. This information
              reflects Vietnam&apos;s policy as of {formatVerifiedDate(data.verifiedOn)} and is provided for general guidance
              only. Always verify with the Vietnam Immigration Department or your nearest Vietnamese
              embassy before travel.
            </span>
          </p>

          {/* Quick Facts */}
          <VisaCard>
            <h2 className={`${visaH2} flex items-start gap-3`}>
              <Icon name="document" className="mt-1 h-6 w-6 flex-none text-navy" />
              Quick Facts for {data.nationality} Passport Holders
            </h2>
            <dl className="m-0">
              <div className="flex flex-col gap-1 border-t border-hairline py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-sm text-muted">Visa-free entry</dt>
                <dd className="m-0 text-sm font-bold text-ink sm:text-right">
                  {data.visaFreeCheck
                    ? 'Not confirmed'
                    : data.visaFree && data.visaFreeDays
                    ? `Yes - ${data.visaFreeDays} days${data.tourismOnly ? ' (tourism only, passport valid 6 months)' : ''}`
                    : 'No'}
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-t border-hairline py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-sm text-muted">E-visa available</dt>
                <dd className="m-0 text-sm font-bold text-ink sm:text-right">
                  {data.evisaEligible ? 'Yes' : 'No'}
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-t border-hairline py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-sm text-muted">Max visa-free stay</dt>
                <dd className="m-0 text-sm font-bold text-ink sm:text-right">
                  {data.visaFreeCheck
                    ? 'Not confirmed'
                    : data.visaFreeDays
                    ? `${data.visaFreeDays} days`
                    : 'N/A'}
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-t border-hairline py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-sm text-muted">E-visa duration</dt>
                <dd className="m-0 text-sm font-bold text-ink sm:text-right">
                  {data.evisaEligible ? `${data.evisaDays} days maximum` : 'N/A'}
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-y border-hairline py-3 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-sm text-muted">Recommended for long stays</dt>
                <dd className="m-0 text-sm font-bold text-ink sm:max-w-[55%] sm:text-right">
                  {data.recommendedLongStay}
                </dd>
              </div>
            </dl>
            <div className="mt-4 space-y-1 text-sm text-muted">
              <p className="m-0 font-bold text-ink">{lastVerified}</p>
              <p className="m-0 [overflow-wrap:anywhere]">
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
                      className="font-medium text-navy underline underline-offset-[3px] hover:text-navy-deep"
                    >
                      {src.label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </VisaCard>

          {/* Entry summary */}
          <div className={`grid gap-4 ${data.visaFree && data.visaFreeDays ? 'sm:grid-cols-2' : ''}`}>
            {data.visaFreeCheck ? (
              <div className="rounded-card border border-gold-line bg-gold-soft p-6">
                <h3 className="mb-2 font-display text-step-1 font-semibold text-ink">Visa-Free Entry</h3>
                <p className="m-0 max-w-measure text-[0.95rem] leading-relaxed text-ink">
                  {INDONESIA_CHECK_LINE} The e-visa is available to {data.nationality}{' '}
                  passport holders.
                </p>
              </div>
            ) : data.visaFree && data.visaFreeDays ? (
              <div className="rounded-card border border-[#BFDCCB] bg-success-soft p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Icon name="check" className="h-5 w-5 flex-none text-success" />
                  <h3 className="m-0 font-display text-step-1 font-semibold text-ink">Visa-Free Entry</h3>
                </div>
                <p className="m-0 text-[0.95rem] leading-relaxed text-ink">
                  As a {data.nationality} passport holder, you can enter Vietnam without
                  a visa for up to <strong>{data.visaFreeDays} days</strong> per visit. No
                  application required - just a valid passport with at least 6 months
                  validity.
                  {data.tourismOnly ? ' This visa-free entry is for tourism only.' : ''}
                </p>
              </div>
            ) : (
              <div className="rounded-card border border-gold-line bg-gold-soft p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Icon name="info" className="h-5 w-5 flex-none text-navy" />
                  <h3 className="m-0 font-display text-step-1 font-semibold text-ink">Visa Required Before Arrival</h3>
                </div>
                <p className="m-0 max-w-measure text-[0.95rem] leading-relaxed text-ink">
                  You need an e-visa. Not visa-free. {data.nationality} passport holders are
                  not eligible for visa-free entry to Vietnam and can apply for the e-visa
                  online before the trip.
                </p>
              </div>
            )}

            {data.visaFree && data.visaFreeDays && (
              <div className="rounded-card border border-hairline bg-white p-6">
                <div className="mb-2 flex items-center gap-2">
                  <Icon name="calendar" className="h-5 w-5 flex-none text-navy" />
                  <h3 className="m-0 font-display text-step-1 font-semibold text-ink">
                    Staying Longer than {data.visaFreeDays} Days?
                  </h3>
                </div>
                <p className="m-0 text-[0.95rem] leading-relaxed text-ink">
                  For stays beyond {data.visaFreeDays} days,{' '}
                  {data.evisaEligible
                    ? `apply for the e-visa (valid up to 90 days) before your trip. It is the most popular option for digital nomads and short-term workers.`
                    : 'you will need to apply for a visa at a Vietnamese embassy or consulate.'}
                </p>
              </div>
            )}
          </div>
          {!data.evisaEligible && <HolaflyCallout variant="visa" />}

          {/* E-Visa Section */}
          {data.evisaEligible && (
            <>
              <VisaCard>
                <h2 className={visaH2}>Applying for a Vietnam E-Visa</h2>
                <p className="mb-6 max-w-measure text-ink">
                  The e-visa is the simplest way to extend your stay beyond the visa-free period
                  or to enter Vietnam if you are not visa-exempt. Here is everything you need to
                  know.
                </p>
                <h3 className="mb-3 font-display text-step-1 font-semibold text-ink">E-Visa Key Details</h3>
                <ul className="m-0 grid max-w-measure list-none gap-3 p-0 text-[0.95rem] text-ink">
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-1 h-4 w-4 flex-none text-success" />
                    <span>
                      {E_VISA_FACTS}{' '}
                      <a
                        href={EVISA_PORTAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-navy underline underline-offset-[3px] hover:text-navy-deep"
                      >
                        evisa.gov.vn
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-1 h-4 w-4 flex-none text-success" />
                    Apply online - no embassy visit required
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="mt-1 h-4 w-4 flex-none text-success" />
                    Accepted at Vietnam&apos;s designated e-visa border gates
                  </li>
                </ul>
              </VisaCard>

              <ChecklistCard
                title="Documents Needed"
                headingAs="h3"
                countLabel={CHECKLIST_COUNT}
                items={[
                  { label: 'Valid passport (minimum 6 months validity)' },
                  { label: 'Digital passport photo (4x6cm, white background)' },
                  { label: 'Credit or debit card for payment' },
                  { label: 'Accommodation address in Vietnam' },
                ]}
                footer={
                  <p className="m-0 text-sm text-muted">
                    <strong className="text-ink">Where to apply:</strong> Use the official portal at{' '}
                    <a
                      href={EVISA_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-navy underline underline-offset-[3px] hover:text-navy-deep"
                    >
                      evisa.gov.vn
                    </a>
                    .
                  </p>
                }
              />
              <HolaflyCallout variant="visa" />
            </>
          )}

          {/* Long-Stay Options */}
          <VisaCard>
            <h2 className={visaH2}>Long-Stay Options for {data.nationality} Expats</h2>
            <p className="mb-6 max-w-measure text-ink">
              If you plan to live and work in Vietnam beyond a short visit, here are the
              recommended pathways based on your situation.
            </p>
            <div className="grid gap-4 lg:grid-cols-2">
              <PathwayCard
                number={1}
                title="Business Visa"
                text="The business visa is suitable for freelancers, entrepreneurs, and business visitors planning stays of 3 to 12 months. It requires a sponsor letter from a Vietnamese company or your own registered entity. Single or multiple entry options available."
                bullets={['Valid for 3 to 12 months', 'Single or multiple entry', 'Requires Vietnamese company sponsor']}
                href="/services/business-visa"
                linkText="Learn about Business Visa"
              />
              <PathwayCard
                number={2}
                title="Temporary Residence Card (TRC)"
                text="The TRC is Vietnam's primary long-term residency document for foreign nationals. It is valid for 1 to 2 years and is renewable. A TRC eliminates the need for repeated visa renewals and is the most stable residency option for long-term expats."
                bullets={['Valid for 1 to 2 years (renewable)', 'Requires work permit or business entity', 'Replaces the need for visa extensions']}
                href="/services/trc-application"
                linkText="Learn about TRC Application"
              />
            </div>
          </VisaCard>

          {/* FAQ Section */}
          <VisaCard>
            <h2 className={visaH2}>Frequently Asked Questions</h2>
            <Accordion
              questionAs="h3"
              items={data.topQueries.map((query, i) => ({
                question: `${query.charAt(0).toUpperCase() + query.slice(1)}?`,
                answer: <p className="m-0">{getFaqAnswer(i)}</p>,
              }))}
            />
          </VisaCard>

          {/* Related pages */}
          <VisaCard>
            <h3 className="mb-4 font-display text-step-1 font-semibold text-ink">Related Resources</h3>
            <div className="flex flex-wrap gap-2">
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
                  className="inline-flex min-h-[44px] items-center rounded-full border border-hairline bg-paper px-4 text-sm font-bold text-navy transition-colors hover:border-navy motion-reduce:transition-none"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </VisaCard>
        </VisaColumns>

        <Footer />
      </main>
    </>
  );
}
