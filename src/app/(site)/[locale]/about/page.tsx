import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Card from '@/components/ui/Card';
import Chip from '@/components/ui/Chip';
import ClosingBand from '@/components/ui/ClosingBand';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import Section, { SectionHeader } from '@/components/ui/Section';
import StepCard from '@/components/ui/StepCard';
import { Link } from '@/i18n/config';
import { PHONE_E164 } from '@/lib/site';
import { aboutCopy as c } from '@/data/aboutCopy';
import { homeCopy } from '@/data/homeCopy';

const aboutSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com/about',
    description: c.schemaDescription,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    url: 'https://www.vietnamlaunchpad.com',
    logo: 'https://www.vietnamlaunchpad.com/vietnam-launchpad-logo.png',
    telephone: PHONE_E164,
    email: 'info@vietnamlaunchpad.com',
    description: homeCopy.orgDescription,
    address: { '@type': 'PostalAddress', addressCountry: 'VN', addressLocality: 'Hanoi' },
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Navigation />
      <main id="main" tabIndex={-1} className="min-h-screen bg-paper">
        {/* Hero */}
        <section
          aria-labelledby="about-title"
          className="bg-hero-wash pb-12 pt-[calc(var(--header-h)+32px)] nav:pb-16 nav:pt-[calc(var(--header-h)+64px)]"
        >
          <Container>
            <Chip as="p" className="mb-4">
              {c.eyebrow}
            </Chip>
            <h1 id="about-title" className="mb-4 max-w-[22ch] font-display text-step-3 font-semibold text-ink nav:text-step-5">
              {c.h1}
            </h1>
            <p className="m-0 max-w-[60ch] text-lead text-muted">{c.intro}</p>
          </Container>
        </section>

        {/* Our story and fact cards */}
        <Section
          labelledBy="about-story"
          tone="white"
          bordered
          containerClassName="grid gap-8 nav:grid-cols-[1.2fr_1fr] nav:items-start nav:gap-16"
        >
          <div>
            <SectionHeader id="about-story" title={c.storyH2} />
            {c.story.map((p) => (
              <p key={p} className="mb-4 max-w-measure text-muted last:mb-0">
                {p}
              </p>
            ))}
          </div>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {c.facts.map((fact) => (
              <li key={fact.title} className="rounded-card border border-hairline bg-sand p-5">
                <p className="mb-1 font-display text-step-1 font-semibold text-ink">{fact.title}</p>
                <p className="m-0 text-[0.95rem] text-muted">{fact.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* How we work */}
        <Section labelledBy="about-how">
          <SectionHeader id="about-how" title={c.howH2} intro={<p className="m-0">{c.howIntro}</p>} />
          <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-4 nav:gap-6">
            {c.steps.map((step, i) => (
              <StepCard key={step.title} step={i + 1} title={step.title} text={step.text} />
            ))}
          </ol>
        </Section>

        {/* What you can expect */}
        <Section labelledBy="about-values" tone="sand" bordered>
          <SectionHeader id="about-values" title={c.valuesH2} />
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 nav:gap-6">
            {c.values.map((value) => (
              <li key={value.title} className="rounded-card border border-hairline bg-white p-6">
                <h3 className="mb-2 flex items-center gap-3 font-display text-step-1 font-semibold text-ink">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-success-soft text-success">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {value.title}
                </h3>
                <p className="m-0 max-w-measure text-muted">{value.text}</p>
              </li>
            ))}
          </ul>
          <p className="mb-0 mt-6 flex max-w-[72ch] items-start gap-3 rounded-card border border-gold-line bg-gold-soft px-4 py-3 text-[0.95rem] leading-relaxed text-ink">
            <Icon name="shield" className="mt-0.5 h-[22px] w-[22px] flex-none text-navy" />
            <span>{c.private}</span>
          </p>
        </Section>

        {/* Offices and closing band */}
        <Section labelledBy="about-offices">
          <SectionHeader id="about-offices" title={c.officesH2} />
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2 nav:gap-6">
            {c.offices.map((office) => (
              <Card as="li" key={office.name}>
                <p className="mb-2 flex items-center gap-3 font-display text-step-1 font-semibold text-ink">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-input bg-gold-soft text-navy">
                    <Icon name="pin" className="h-[22px] w-[22px]" />
                  </span>
                  {office.name}
                </p>
                <p className="mb-1 font-medium text-ink">{office.address}</p>
                <p className="m-0 text-[0.95rem] text-muted">{office.description}</p>
              </Card>
            ))}
          </ul>
          <ClosingBand
            className="mt-12"
            title={c.cta.h2}
            text={c.cta.text}
            button={{ label: c.cta.button.text, href: c.cta.button.href }}
          />
          <p className="mb-0 mt-4">
            <Link
              href={c.secondary.href}
              className="inline-flex min-h-[44px] items-center gap-2 font-bold text-navy underline underline-offset-[3px]"
            >
              {c.secondary.text}
            </Link>
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
