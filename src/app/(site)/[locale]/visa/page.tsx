import { Metadata } from 'next';
import { buildAlternates, ogImages, twitterDefaults } from '@/lib/seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HolaflyCallout from '@/components/HolaflyCallout';
import Button from '@/components/ui/Button';
import Chip from '@/components/ui/Chip';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import PassportPicker from '@/components/ui/PassportPicker';
import Section, { SectionHeader } from '@/components/ui/Section';
import { PathwayCard } from '@/components/visa/VisaShell';
import { Link } from '@/i18n/config';
import { homeCopy } from '@/data/homeCopy';
import { SRC_EVISA_FEES, SRC_MOFA_LIST, VISA_COUNTRIES } from '@/data/visas';
import {
  E_VISA_FACTS,
  EVISA_PORTAL_URL,
  PRIVATE_LINE,
  formatVerifiedDate,
  lastVerifiedLine,
} from '@/data/visa-copy';

const verifiedDates = VISA_COUNTRIES.map((c) => c.verifiedOn).sort();
const verifiedOn = verifiedDates[verifiedDates.length - 1] ?? '2026-10-27';
const lastVerified = lastVerifiedLine(verifiedOn);

export const metadata: Metadata = {
  title: 'Vietnam Visa Requirements by Nationality 2026 | Vietnam Launchpad',
  description: `Check Vietnam visa requirements for your nationality: who is visa-free and who needs an e-visa. E-visa available to citizens of all countries and territories. ${lastVerified}.`,
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
  alternates: buildAlternates('/visa'),
  openGraph: {
    title: 'Vietnam Visa Requirements by Nationality 2026',
    description:
      'Who is visa-free and who needs an e-visa. E-visa available to citizens of all countries and territories. Check your nationality.',
    type: 'website',
    url: 'https://www.vietnamlaunchpad.com/visa',
    images: ogImages,
  },
  twitter: twitterDefaults,
};

const visaFreeCountries45 = VISA_COUNTRIES.filter(
  (c) => c.visaFree && c.visaFreeDays === 45
);
const visaFreeCountries30 = VISA_COUNTRIES.filter(
  (c) => c.visaFree && c.visaFreeDays === 30
);
const visaFreeCountriesShorter = VISA_COUNTRIES.filter(
  (c) => c.visaFree && c.visaFreeDays !== 45 && c.visaFreeDays !== 30
);
const evisaOnlyCountries = VISA_COUNTRIES.filter((c) => !c.visaFree);
const visaFreeTotal = VISA_COUNTRIES.filter((c) => c.visaFree).length;

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Vietnam Visa Requirements by Nationality 2026',
  url: 'https://www.vietnamlaunchpad.com/visa',
  description:
    'Check Vietnam visa requirements for your nationality: who is visa-free and who needs an e-visa. E-visa available to citizens of all countries and territories.',
  publisher: {
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
  },
  hasPart: VISA_COUNTRIES.map((c) => ({
    '@type': 'WebPage',
    name: `Vietnam Visa for ${c.nationality} Citizens`,
    url: `https://www.vietnamlaunchpad.com/visa/${c.slug}`,
    description: c.visaFreeCheck
      ? 'Check current visa-free rules.'
      : c.visaFree
      ? `${c.nationality} passport holders enjoy ${c.visaFreeDays}-day visa-free entry to Vietnam.`
      : `${c.nationality} passport holders need an e-visa for Vietnam.`,
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

const passportOptions = VISA_COUNTRIES.map((c) => ({ slug: c.slug, name: c.country })).sort((a, b) =>
  a.name.localeCompare(b.name)
);

/** Functional picker labels, the same wording as the home page picker. */
const pickerLabel = 'Choose your nationality';
const pickerEmptyOption = 'Select a nationality';
const pickerSubmit = 'Check your visa';

const sourceLink = 'font-medium text-navy underline underline-offset-[3px] hover:text-navy-deep';

function CountryCard({
  slug,
  flag,
  country,
  visaFree,
  visaFreeDays,
  evisaEligible,
  visaFreeCheck,
}: {
  slug: string;
  flag: string;
  country: string;
  visaFree: boolean;
  visaFreeDays: number | null;
  evisaEligible: boolean;
  visaFreeCheck?: boolean;
}) {
  return (
    <Link
      href={`/visa/${slug}`}
      className="group flex min-h-[72px] items-center gap-4 rounded-card border border-hairline bg-white px-4 py-3 text-ink no-underline transition-colors hover:border-navy motion-reduce:transition-none"
    >
      <span className="flex-shrink-0 text-3xl leading-none" role="img" aria-label={country}>
        {flag}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-bold text-ink">{country}</span>
        {visaFreeCheck ? (
          <span className="mt-0.5 block text-sm font-medium text-navy">Check current visa-free rules</span>
        ) : visaFree && visaFreeDays ? (
          <span className="mt-0.5 block text-sm font-medium text-success">{visaFreeDays}-day visa-free</span>
        ) : evisaEligible ? (
          <span className="mt-0.5 block text-sm font-medium text-navy">E-visa available</span>
        ) : (
          <span className="mt-0.5 block text-sm font-medium text-muted">Consulate visa required</span>
        )}
      </span>
      <Icon name="arrow" className="h-4 w-4 flex-shrink-0 text-navy" />
    </Link>
  );
}

function CountryGroup({
  id,
  tone,
  chip,
  chipTone,
  title,
  intro,
  countries,
}: {
  id?: string;
  tone: 'paper' | 'sand' | 'white';
  chip: string;
  chipTone: 'success' | 'navy';
  title: string;
  intro: React.ReactNode;
  countries: typeof VISA_COUNTRIES;
}) {
  return (
    <Section id={id} tone={tone} className="scroll-mt-[var(--header-h)]">
      <Chip variant="outline" className="mb-3">
        <span
          aria-hidden="true"
          className={`inline-block h-2 w-2 rounded-full ${chipTone === 'success' ? 'bg-success' : 'bg-navy'}`}
        />
        {chip}
      </Chip>
      <h2 className="mb-3 font-display text-step-2 font-semibold text-ink nav:text-step-3">{title}</h2>
      <p className="mb-6 max-w-measure text-muted">{intro}</p>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 nav:grid-cols-3 lg:grid-cols-4">
        {countries.map((c) => (
          <li key={c.slug} className="min-w-0">
            <CountryCard {...c} />
          </li>
        ))}
      </ul>
    </Section>
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
      <div className="min-h-screen">
        <Navigation />
        <main id="main" tabIndex={-1}>

          {/* Hero */}
          <section className="bg-hero-wash pb-12 pt-[calc(var(--header-h)+32px)] nav:pb-16 nav:pt-[calc(var(--header-h)+64px)]">
            <Container className="grid gap-8 nav:grid-cols-[1.1fr_0.9fr] nav:items-center nav:gap-16">
              <div>
                <Chip as="p" icon="check" className="mb-4">
                  {lastVerified}
                </Chip>

                <h1 className="mb-4 font-display text-step-3 font-semibold text-ink nav:text-step-5">
                  Vietnam Visa Requirements 2026
                </h1>

                <p className="mb-6 max-w-[52ch] text-lead text-muted">
                  Find out if you need a visa for Vietnam, how long you can stay, and the best options
                  for longer-term residency, by nationality.
                </p>

                <ul className="m-0 grid list-none gap-3 p-0 text-[0.95rem] font-medium text-ink">
                  {(
                    [
                      ['shield', 'Visa-free entry for listed nationalities'],
                      ['passport', 'E-visa available to all countries and territories'],
                      ['info', 'Always verify with official sources before travel'],
                    ] as const
                  ).map(([icon, text]) => (
                    <li key={text} className="flex items-center gap-3">
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-input bg-gold-soft text-navy">
                        <Icon name={icon} className="h-[22px] w-[22px]" />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <PassportPicker
                options={passportOptions}
                label={pickerLabel}
                emptyOption={pickerEmptyOption}
                submitLabel={pickerSubmit}
                allLink={{ label: homeCopy.s2.links[0].name, href: '#all-nationalities' }}
              />
            </Container>
          </section>

          {/* Quick stats bar */}
          <div className="border-y border-hairline bg-white">
            <Container>
              <div className="grid grid-cols-2 gap-6 py-6 text-center md:grid-cols-4">
                <div>
                  <div className="font-display text-step-2 font-semibold text-ink">{VISA_COUNTRIES.length}</div>
                  <div className="mt-0.5 text-sm text-muted">Nationalities covered on this page</div>
                </div>
                <div>
                  <div className="font-display text-step-2 font-semibold text-ink">{visaFreeTotal}</div>
                  <div className="mt-0.5 text-sm text-muted">Visa-free nationalities listed</div>
                </div>
                <div>
                  <div className="font-display text-step-2 font-semibold text-ink">Up to 90 days</div>
                  <div className="mt-0.5 text-sm text-muted">E-visa duration</div>
                </div>
                <div>
                  <div className="font-display text-step-2 font-semibold text-ink">All</div>
                  <div className="mt-0.5 text-sm text-muted">countries and territories eligible for the e-visa</div>
                </div>
              </div>
            </Container>
          </div>

          {/* Disclaimer, verification and sources */}
          <div className="bg-paper py-8">
            <Container className="grid gap-4">
              <p className="m-0 flex items-start gap-3 rounded-card border border-hairline bg-sand px-4 py-3 text-sm text-ink">
                <Icon name="info" className="mt-0.5 h-5 w-5 flex-none text-navy" />
                <span className="max-w-measure">
                  <strong>Disclaimer:</strong> Visa policies change frequently. This page reflects Vietnam&apos;s
                  visa policy as of {formatVerifiedDate(verifiedOn)} and is provided for general
                  guidance only. Always verify current requirements with the{' '}
                  <span className="font-medium">
                    Vietnam Immigration Department or your nearest Vietnamese embassy
                  </span>{' '}
                  before travel.
                </span>
              </p>
              <div className="max-w-measure space-y-1 text-sm text-muted [overflow-wrap:anywhere]">
                <p className="m-0 font-bold text-ink">{lastVerified}</p>
                <p className="m-0">
                  Official source:{' '}
                  {[
                    SRC_MOFA_LIST,
                    SRC_EVISA_FEES,
                    { label: 'evisa.gov.vn', url: EVISA_PORTAL_URL },
                  ].map((src, i) => (
                    <span key={src.url}>
                      {i > 0 && ' | '}
                      <a href={src.url} target="_blank" rel="noopener noreferrer" className={sourceLink}>
                        {src.label}
                      </a>
                    </span>
                  ))}
                </p>
                <p className="m-0 flex items-start gap-2">
                  <Icon name="shield" className="mt-0.5 h-[18px] w-[18px] flex-none text-success" />
                  {PRIVATE_LINE}
                </p>
              </div>
            </Container>
          </div>

          {/* 45-day Visa-Free Countries */}
          <CountryGroup
            id="all-nationalities"
            tone="white"
            chip="45-Day Visa-Free Entry"
            chipTone="success"
            title="Visa-Free Countries (45 Days)"
            intro={
              <>
                Vietnam grants 45 days visa-free to citizens of 24 countries, tourism only for 12
                of them. This page covers {visaFreeCountries45.length} of them. Extended stays
                require an e-visa or long-term visa.
              </>
            }
            countries={visaFreeCountries45}
          />

          {/* 30-day Visa-Free Countries */}
          <CountryGroup
            tone="sand"
            chip="30-Day Visa-Free Entry"
            chipTone="success"
            title="Visa-Free Countries (30 Days)"
            intro="Citizens of these countries can enter Vietnam without a visa for up to 30 days per visit. An e-visa is available for longer stays."
            countries={visaFreeCountries30}
          />

          {/* Shorter visa-free stays */}
          {visaFreeCountriesShorter.length > 0 && (
            <CountryGroup
              tone="white"
              chip="Shorter Visa-Free Stays"
              chipTone="success"
              title="Shorter Visa-Free Stays"
              intro="Citizens of these countries can enter Vietnam without a visa for the number of days shown on each card. An e-visa is available for longer stays."
              countries={visaFreeCountriesShorter}
            />
          )}

          {/* E-Visa Only Countries */}
          <CountryGroup
            tone="sand"
            chip="E-Visa"
            chipTone="navy"
            title="E-Visa Countries"
            intro={
              <>
                Citizens of these countries need an e-visa to enter Vietnam, unless a card says to
                check current visa-free rules. {E_VISA_FACTS}{' '}
                <a href={EVISA_PORTAL_URL} target="_blank" rel="noopener noreferrer" className={sourceLink}>
                  evisa.gov.vn
                </a>
              </>
            }
            countries={evisaOnlyCountries}
          />

          {/* How it works / explainer */}
          <Section tone="paper">
            <SectionHeader
              title="Vietnam Entry Options Explained"
              intro="Understanding the different ways to enter and stay in Vietnam legally."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {(
                [
                  {
                    icon: 'shield',
                    title: 'Visa-Free Entry',
                    description:
                      'Citizens of some countries can enter without a visa. The number of days depends on the country and is shown on each country page. No application needed - just a valid passport.',
                  },
                  {
                    icon: 'passport',
                    title: 'E-Visa (Up to 90 Days)',
                    description: (
                      <>
                        {E_VISA_FACTS}{' '}
                        <a href={EVISA_PORTAL_URL} target="_blank" rel="noopener noreferrer" className={sourceLink}>
                          evisa.gov.vn
                        </a>
                      </>
                    ),
                  },
                  {
                    icon: 'home',
                    title: 'Long-Stay Options',
                    description:
                      'For stays beyond 90 days, a Business Visa or Temporary Residence Card (TRC) is required. The TRC is Vietnam\'s main long-term residency document for expats, valid for 1 to 2 years.',
                  },
                ] as const
              ).map((item) => (
                <div key={item.title} className="rounded-card border border-hairline bg-white p-6">
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-input bg-gold-soft text-navy">
                    <Icon name={item.icon} className="h-[22px] w-[22px]" />
                  </span>
                  <h3 className="mb-2 font-display text-step-1 font-semibold text-ink">{item.title}</h3>
                  <p className="m-0 text-[0.95rem] leading-relaxed text-ink">{item.description}</p>
                </div>
              ))}
            </div>
            <HolaflyCallout variant="visa" />
          </Section>

          {/* Long-stay pathway */}
          <Section tone="sand" bordered>
            <SectionHeader
              title="Planning a Long-Term Stay?"
              intro="If you plan to live and work in Vietnam long-term, here are the most common pathways for expats."
            />
            <div className="grid max-w-[880px] gap-4 md:grid-cols-2">
              <PathwayCard
                number={1}
                title="Business Visa"
                text="Suitable for freelancers, entrepreneurs, and short-term business visitors. Available for 3 to 12 months with single or multiple entry. Requires sponsorship from a Vietnamese company or business entity."
                href="/services/business-visa"
                linkText="Learn about Business Visa"
              />
              <PathwayCard
                number={2}
                title="Temporary Residence Card (TRC)"
                text="The TRC is Vietnam's main long-term residency document for foreign nationals. Valid for 1 to 2 years (renewable). Requires a valid work permit or business entity. Replaces the need for visa renewals."
                href="/services/trc-application"
                linkText="Learn about TRC Application"
              />
            </div>
          </Section>

          {/* CTA */}
          <Section tone="paper">
            <div className="grid gap-6 rounded-panel bg-navy-deep px-6 py-8 text-white nav:grid-cols-[1fr_auto] nav:items-center nav:p-12">
              <div>
                <h2 className="m-0 font-display text-step-2 font-semibold text-white nav:text-step-4">
                  Need Help with Your Vietnam Visa or Residency?
                </h2>
                <p className="mb-0 mt-2 max-w-measure text-[#D6E2F0]">
                  Our consultants handle e-visas, business visas, work permits, and TRC
                  applications, so you can focus on building your life in Vietnam.
                </p>
                <p className="mb-0 mt-2 max-w-measure text-sm text-[#D6E2F0]">{PRIVATE_LINE}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row nav:flex-col">
                <Button href="/contact" variant="gold" icon="arrow" track={{ label: 'book_consultation', location: 'visa_page' }}>
                  Book a Free Consultation
                </Button>
                <Link
                  href="/services/trc-application"
                  data-track="cta_click" data-track-label="service_cta" data-track-location="visa_page"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white px-6 font-bold text-white transition-colors hover:bg-white/10 motion-reduce:transition-none"
                >
                  TRC Application Service
                </Link>
              </div>
            </div>
          </Section>

        </main>
        <Footer />
      </div>
    </>
  );
}
