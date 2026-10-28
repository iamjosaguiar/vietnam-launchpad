import { Link } from '@/i18n/config';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ClosingBand from '@/components/ui/ClosingBand';
import Icon, { type IconName } from '@/components/ui/Icon';
import Section, { SectionHeader } from '@/components/ui/Section';
import ServiceGroups from '@/components/ui/ServiceGroups';
import StepCard from '@/components/ui/StepCard';
import { homeCopy as c } from '@/data/homeCopy';
import { VISA_COUNTRIES } from '@/data/visas';
import { PHONE_E164 } from '@/lib/site';
import { buildAlternates } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: buildAlternates('/'),
};

const homepageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
    logo: 'https://www.vietnamlaunchpad.com/vietnam-launchpad-logo.png',
    telephone: PHONE_E164,
    email: 'info@vietnamlaunchpad.com',
    description: c.orgDescription,
    address: { '@type': 'PostalAddress', addressCountry: 'VN', addressLocality: 'Hanoi' },
    areaServed: 'Vietnam',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
    description: c.webDescription,
    inLanguage: c.webLang,
  },
];

const passportOptions = VISA_COUNTRIES.map((country) => ({ slug: country.slug, name: country.country })).sort((a, b) =>
  a.name.localeCompare(b.name)
);

/** One icon per start card, in the order of c.s1.cards. */
const startIcons: IconName[] = ['passport', 'home', 'calendar'];

type CopyLink = { readonly name: string; readonly href: string };

/** Hairline separated rows with an arrow, for short link lists inside cards. */
function LinkRows({ links }: { links: readonly CopyLink[] }) {
  return (
    <ul className="m-0 list-none p-0">
      {links.map((link) => (
        <li key={link.href + link.name} className="border-t border-hairline">
          <Link
            href={link.href}
            className="group flex min-h-[48px] items-center justify-between gap-3 py-2 font-bold text-ink no-underline"
          >
            <span className="group-hover:underline">{link.name}</span>
            <Icon name="arrow" className="h-4 w-4 flex-none text-navy" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Paragraphs({ text, className = 'mb-4 max-w-measure text-muted' }: { text: readonly string[]; className?: string }) {
  return (
    <>
      {text.map((p) => (
        <p key={p} className={className}>
          {p}
        </p>
      ))}
    </>
  );
}

const cardH2 = 'mb-3 font-display text-step-2 font-semibold text-ink nav:text-step-3';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />
      <Navigation />
      <main id="main" tabIndex={-1} className="min-h-screen bg-paper">
        <HeroSection passportOptions={passportOptions} />

        {/* Section 1: where do you want to start */}
        <Section labelledBy="home-start">
          <SectionHeader id="home-start" title={c.s1.h2} intro={<p className="m-0">{c.s1.intro}</p>} />
          <ul className="m-0 grid list-none gap-4 p-0 nav:grid-cols-3 nav:gap-6">
            {c.s1.cards.map((card, index) => (
              <StepCard key={card.Link} title={card.Title} text={card.Text} icon={startIcons[index % startIcons.length]}>
                <Button href={card.Link} variant="secondary" size="sm" icon="arrow">
                  {card.Button}
                </Button>
              </StepCard>
            ))}
          </ul>
        </Section>

        {/* Section 2: visas */}
        <Section labelledBy="home-visas" tone="white" bordered>
          <SectionHeader
            id="home-visas"
            title={c.s2.h2}
            intro={<Paragraphs text={c.s2.text} className="mb-4 last:mb-0" />}
          />
          <ul className="m-0 grid list-none gap-3 p-0 md:grid-cols-3">
            {c.s2.popular.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[64px] items-center justify-between gap-3 rounded-card border border-hairline bg-white px-4 py-3 font-bold text-ink no-underline hover:border-navy"
                >
                  <span className="flex items-center gap-3">
                    <Icon name="passport" className="h-5 w-5 flex-none text-navy" />
                    {link.name}
                  </span>
                  <Icon name="arrow" className="h-4 w-4 flex-none text-navy" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="m-0 mt-4 flex list-none flex-wrap gap-x-6 p-0">
            {c.s2.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center gap-2 font-bold text-navy underline underline-offset-[3px]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* Sections 3 and 4: living in Vietnam, staying longer */}
        <Section containerClassName="grid gap-4 nav:grid-cols-2 nav:gap-6">
          <Card as="section" className="nav:p-8" id="living">
            <h2 className={cardH2}>{c.s3.h2}</h2>
            <Paragraphs text={c.s3.text} />
            <LinkRows links={c.s3.links} />
          </Card>
          <Card as="section" className="nav:p-8" id="staying-longer">
            <h2 className={cardH2}>{c.s4.h2}</h2>
            <Paragraphs text={c.s4.text} />
            <LinkRows links={c.s4.links} />
          </Card>
        </Section>

        {/* Section 5: all 16 services in four groups */}
        <Section id="services" labelledBy="home-services" className="pt-0 nav:pt-0">
          <SectionHeader
            id="home-services"
            title={c.s5.h2}
            intro={<Paragraphs text={c.s5.text} className="mb-4 last:mb-0" />}
          />
          <ServiceGroups groups={c.s5.groups} />
          <div className="mt-6">
            <Button href={c.s5.all.href} variant="secondary" icon="arrow">
              {c.s5.all.name}
            </Button>
          </div>
        </Section>

        {/* Sections 6 and 7: for business, who we are */}
        <Section tone="sand" bordered containerClassName="grid gap-4 nav:grid-cols-2 nav:gap-6">
          <Card as="section" className="nav:p-8">
            <h2 className={cardH2}>{c.s6.h2}</h2>
            <Paragraphs text={c.s6.text} />
            <LinkRows links={c.s6.links} />
          </Card>
          <Card as="section" className="flex flex-col nav:p-8">
            <h2 className={cardH2}>{c.s7.h2}</h2>
            <Paragraphs text={c.s7.text} />
            <div className="mt-auto">
              <Button href={c.s7.link.href} variant="secondary" icon="arrow">
                {c.s7.link.name}
              </Button>
            </div>
          </Card>
        </Section>

        {/* FAQ (visible text only, no FAQPage schema on the home page) and closing band */}
        <Section labelledBy="home-faq">
          <SectionHeader id="home-faq" title={c.faq.h2} />
          <Accordion
            items={c.faq.items.map((item) => ({ question: item.q, answer: <p className="m-0">{item.a}</p> }))}
            questionAs="h3"
            defaultOpenIndex={0}
          />
          <ClosingBand
            className="mt-12"
            title={c.cta.h2}
            text={c.cta.text}
            button={{ label: c.cta.button.text, href: c.cta.button.href }}
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
