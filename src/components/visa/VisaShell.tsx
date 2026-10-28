import { Link } from '@/i18n/config';
import Container from '@/components/ui/Container';
import Chip from '@/components/ui/Chip';
import Icon from '@/components/ui/Icon';

/** Shared Design D pieces for the visa country pages: breadcrumbs, hero, two column layout. */

/** Ready count on the requirements checklists. */
export const CHECKLIST_COUNT = '{done} of {total} ready';

/** Body copy rendered from markdown inside the main column cards. */
export const visaProse = `prose max-w-measure text-ink [overflow-wrap:anywhere]
  prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink
  prose-p:text-ink prose-p:leading-relaxed
  prose-a:font-medium prose-a:text-navy prose-a:underline prose-a:underline-offset-[3px] hover:prose-a:text-navy-deep
  prose-strong:font-semibold prose-strong:text-ink
  prose-li:text-ink
  prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6`;

export function VisaBreadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
      <ol className="m-0 flex list-none flex-wrap items-center p-0">
        <li className="flex items-center">
          <Link href="/" className="inline-flex min-h-[44px] min-w-[44px] items-center text-muted underline underline-offset-[3px] hover:text-ink">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">/</span>
        </li>
        <li className="flex items-center">
          <Link href="/visa" className="inline-flex min-h-[44px] items-center text-muted underline underline-offset-[3px] hover:text-ink">
            Vietnam Visa
          </Link>
          <span aria-hidden="true" className="mx-2">/</span>
        </li>
        <li aria-current="page" className="inline-flex min-h-[44px] items-center text-ink">
          {current}
        </li>
      </ol>
    </nav>
  );
}

/** Country hero: breadcrumbs, flag chip, H1, lead and the private service notice. */
export function VisaHero({
  breadcrumb,
  flag,
  flagLabel,
  badge,
  title,
  lead,
  notice,
}: {
  breadcrumb: string;
  flag: string;
  flagLabel: string;
  badge: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  notice?: React.ReactNode;
}) {
  return (
    <section className="bg-hero-wash pb-8 pt-[calc(var(--header-h)+8px)] nav:pb-12">
      <Container>
        <VisaBreadcrumbs current={breadcrumb} />
        <Chip variant="outline" className="mb-4">
          <span className="text-lg leading-none" role="img" aria-label={flagLabel}>
            {flag}
          </span>
          {badge}
        </Chip>
        <h1 className="mb-4 max-w-[22ch] font-display text-step-3 font-semibold text-ink nav:text-step-5">{title}</h1>
        <p className="m-0 max-w-measure text-lead text-muted">{lead}</p>
        {notice && (
          <p className="mb-0 mt-6 flex max-w-[62ch] items-start gap-3 rounded-card border border-gold-line bg-gold-soft px-4 py-3 text-[0.95rem] leading-normal text-ink">
            <Icon name="shield" className="mt-px h-[22px] w-[22px] flex-none text-navy" />
            <span>{notice}</span>
          </p>
        )}
      </Container>
    </section>
  );
}

/** Main column plus a sidebar that sticks below the header from 900px. */
export function VisaColumns({
  children,
  aside,
  asideLabel,
  asideClassName = '',
}: {
  children: React.ReactNode;
  aside: React.ReactNode;
  asideLabel: string;
  asideClassName?: string;
}) {
  return (
    <div className="bg-paper pb-12 pt-2 nav:pb-16">
      <Container className="grid gap-6 nav:grid-cols-[minmax(0,1fr)_300px] nav:gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="grid min-w-0 content-start gap-6">{children}</div>
        <aside
          aria-label={asideLabel}
          className={`nav:sticky nav:top-[calc(var(--header-h)+24px)] nav:self-start ${asideClassName}`}
        >
          {aside}
        </aside>
      </Container>
    </div>
  );
}

/** White panel used for each block of the main column. */
export function VisaCard({
  children,
  className = '',
  as: Tag = 'section',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'div';
}) {
  return <Tag className={`min-w-0 rounded-panel border border-hairline bg-white p-6 nav:p-8 ${className}`}>{children}</Tag>;
}

export const visaH2 = 'mb-4 font-display text-step-2 font-semibold text-ink';

/** Numbered long stay option with a link to the matching service page. */
export function PathwayCard({
  number,
  title,
  text,
  bullets,
  href,
  linkText,
}: {
  number: number;
  title: string;
  text: React.ReactNode;
  bullets?: string[];
  href: string;
  linkText: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-card border border-hairline bg-white p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-8 w-8 flex-none place-items-center rounded-input bg-navy text-sm font-bold text-white">
          {number}
        </span>
        <h3 className="m-0 font-display text-step-1 font-semibold text-ink">{title}</h3>
      </div>
      <p className="mb-4 text-[0.95rem] leading-relaxed text-ink">{text}</p>
      {bullets && (
        <ul className="mb-4 grid list-none gap-2 p-0 text-[0.95rem] text-muted">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <Icon name="check" className="mt-1 h-4 w-4 flex-none text-success" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        data-track="cta_click"
        data-track-label="service_cta"
        data-track-location="visa_page"
        className="mt-auto inline-flex min-h-[44px] items-center gap-2 self-start font-bold text-navy underline underline-offset-[3px] hover:text-navy-deep"
      >
        {linkText}
        <Icon name="arrow" className="h-4 w-4 flex-none" />
      </Link>
    </div>
  );
}
