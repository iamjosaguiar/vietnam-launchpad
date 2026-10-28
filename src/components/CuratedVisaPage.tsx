import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HolaflyCallout from '@/components/HolaflyCallout';
import MarkdownBlocks from '@/components/MarkdownBlocks';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import ChecklistCard, { type ChecklistItem } from '@/components/ui/ChecklistCard';
import Icon from '@/components/ui/Icon';
import {
  CHECKLIST_COUNT,
  VisaCard,
  VisaColumns,
  VisaHero,
  visaH2,
  visaProse,
} from '@/components/visa/VisaShell';
import { ctaLabelForHref } from '@/lib/analytics';
import type { CuratedBlock, CuratedVisaPage as CuratedData } from '@/data/visaCurated';

const BASE_URL = 'https://www.vietnamlaunchpad.com';

type BlockGroup = { heading?: string; blocks: CuratedBlock[] };

/** Splits the copy into one group per H2 so each renders as its own card. */
function groupByHeading(blocks: CuratedBlock[]): BlockGroup[] {
  const groups: BlockGroup[] = [];
  for (const block of blocks) {
    if (block.t === 'h2') {
      groups.push({ heading: block.text, blocks: [] });
    } else if (groups.length === 0) {
      groups.push({ blocks: [block] });
    } else {
      groups[groups.length - 1].blocks.push(block);
    }
  }
  return groups;
}

/**
 * A markdown block that opens with a plain bullet list (no links) becomes the requirements
 * checklist. The first sentence of each bullet is the label and the rest is the hint, so the
 * wording stays exactly as written.
 */
function leadingChecklist(markdown: string): { items: ChecklistItem[]; rest: string } | null {
  const lines = markdown.split('\n');
  let end = 0;
  while (end < lines.length && lines[end].startsWith('- ')) end += 1;
  const bullets = lines.slice(0, end).map((line) => line.slice(2).trim());
  if (bullets.length < 2 || bullets.some((text) => /\]\(|https?:\/\//.test(text))) return null;
  const items = bullets.map((text) => {
    const split = text.indexOf('. ');
    return split > 0 ? { label: text.slice(0, split + 1), hint: text.slice(split + 2) } : { label: text };
  });
  return { items, rest: lines.slice(end).join('\n').trim() };
}

function BlockContent({ block }: { block: CuratedBlock }) {
  if (block.t === 'md') {
    return <MarkdownBlocks markdown={block.text} className={visaProse} />;
  }
  if (block.t === 'buttons') {
    return (
      <div className="my-6 flex flex-col gap-3 sm:flex-row">
        <Button href={block.primary.href} icon="arrow" track={{ label: ctaLabelForHref(block.primary.href), location: 'visa_page' }}>
          {block.primary.text}
        </Button>
        <Button href={block.secondary.href} variant="secondary" track={{ label: ctaLabelForHref(block.secondary.href), location: 'visa_page' }}>
          {block.secondary.text}
        </Button>
      </div>
    );
  }
  if (block.t === 'affiliate') {
    return <HolaflyCallout variant="visa" />;
  }
  return null;
}

function GroupCard({ group }: { group: BlockGroup }) {
  const [first, ...others] = group.blocks;
  const checklist = group.heading && first?.t === 'md' ? leadingChecklist(first.text) : null;

  if (group.heading && checklist) {
    return (
      <ChecklistCard
        title={group.heading}
        items={checklist.items}
        countLabel={CHECKLIST_COUNT}
        footer={
          checklist.rest || others.length ? (
            <>
              {checklist.rest && <MarkdownBlocks markdown={checklist.rest} className={visaProse} />}
              {others.map((block, i) => (
                <BlockContent key={i} block={block} />
              ))}
            </>
          ) : undefined
        }
      />
    );
  }

  return (
    <VisaCard>
      {group.heading && <h2 className={visaH2}>{group.heading}</h2>}
      {group.blocks.map((block, i) => (
        <BlockContent key={i} block={block} />
      ))}
    </VisaCard>
  );
}

export default function CuratedVisaPage({ page }: { page: CuratedData }) {
  const country = page.h1.replace('Vietnam Visa for ', '');
  const help = page.blocks.find((block) => block.t === 'buttons');
  const helpIndex = help ? page.blocks.indexOf(help) : -1;
  const helpHeading = page.blocks
    .slice(0, helpIndex)
    .reverse()
    .find((block): block is Extract<CuratedBlock, { t: 'h2' }> => block.t === 'h2');

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.metaTitle,
    url: `${BASE_URL}/visa/${page.slug}`,
    description: page.metaDescription,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Vietnam Visa Requirements', item: `${BASE_URL}/visa` },
        { '@type': 'ListItem', position: 3, name: page.h1, item: `${BASE_URL}/visa/${page.slug}` },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen">
        <Navigation />
        <main>

          <VisaHero
            breadcrumb={country}
            flag={page.flag}
            flagLabel={country}
            badge={page.badge}
            title={page.h1}
            lead={page.heroText}
            notice={page.privateLine}
          />

          <VisaColumns
            asideLabel={helpHeading?.text ?? page.factsHeading}
            asideClassName="hidden nav:block"
            aside={
              help?.t === 'buttons' ? (
                <div className="rounded-panel border border-hairline bg-white p-6 shadow-soft">
                  {helpHeading && (
                    <p className="mb-4 font-display text-step-1 font-semibold text-ink">{helpHeading.text}</p>
                  )}
                  <div className="grid gap-2">
                    <Button href={help.primary.href} block icon="arrow" track={{ label: ctaLabelForHref(help.primary.href), location: 'visa_page' }}>
                      {help.primary.text}
                    </Button>
                    <Button href={help.secondary.href} variant="secondary" block track={{ label: ctaLabelForHref(help.secondary.href), location: 'visa_page' }}>
                      {help.secondary.text}
                    </Button>
                  </div>
                  <p className="mb-0 mt-4 flex items-start gap-2 border-t border-hairline pt-4 text-sm text-muted">
                    <Icon name="shield" className="mt-0.5 h-[18px] w-[18px] flex-none text-success" />
                    {page.privateLine}
                  </p>
                </div>
              ) : null
            }
          >
            <VisaCard>
              <h2 className={visaH2}>{page.factsHeading}</h2>
              <dl className="m-0">
                {page.facts.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 border-t border-hairline py-3 last:border-b sm:flex-row sm:gap-4"
                  >
                    <dt className="flex-shrink-0 text-sm text-muted sm:w-56">{label}</dt>
                    <dd className="m-0 text-sm font-bold text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mb-0 mt-4 max-w-measure text-sm text-muted">{page.lastVerified}</p>
            </VisaCard>

            {groupByHeading(page.blocks).map((group, i) => (
              <GroupCard key={group.heading ?? i} group={group} />
            ))}

            <VisaCard>
              <h2 className={visaH2}>{page.faqHeading}</h2>
              <Accordion
                questionAs="h3"
                items={page.faqs.map((f) => ({ question: f.q, answer: <p className="m-0">{f.a}</p> }))}
              />
            </VisaCard>
          </VisaColumns>

        </main>
        <Footer />
      </div>
    </>
  );
}
