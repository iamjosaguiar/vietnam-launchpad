import Container from './Container';

export type SectionTone = 'paper' | 'sand' | 'white' | 'wash';

const tones: Record<SectionTone, string> = {
  paper: 'bg-paper',
  sand: 'bg-sand',
  white: 'bg-white',
  wash: 'bg-hero-wash',
};

type HeadingLevel = 'h1' | 'h2' | 'h3';

/** Eyebrow, serif heading and muted intro used at the top of a section. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  as: Heading = 'h2',
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  as?: HeadingLevel;
  className?: string;
}) {
  return (
    <div className={`mb-6 max-w-[640px] ${className}`}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.08em] text-navy">{eyebrow}</p>}
      <Heading id={id} className="mb-3 font-display text-step-2 font-semibold text-ink nav:text-step-4">
        {title}
      </Heading>
      {intro && <div className="max-w-measure text-muted">{intro}</div>}
    </div>
  );
}

/** Page section: 48px vertical padding, 64px from 900px, inside the site container. */
export default function Section({
  children,
  id,
  tone = 'paper',
  className = '',
  containerClassName = '',
  labelledBy,
  label,
  bordered = false,
}: {
  children: React.ReactNode;
  id?: string;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
  label?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={label}
      className={`py-12 nav:py-16 ${tones[tone]} ${bordered ? 'border-y border-hairline' : ''} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
