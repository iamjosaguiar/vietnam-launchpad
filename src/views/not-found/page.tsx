import type { Metadata } from '@/lib/metadata';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

/** Same title and robots as the Next.js not-found page. */
export const metadata: Metadata = {
  title: { absolute: '404: This page could not be found.' },
  robots: 'noindex',
};

/** Served with status 404 for any URL that has no page. */
export default function NotFoundPage() {
  return (
    <main id="main" tabIndex={-1} className="min-h-screen bg-paper pt-header">
      <Section labelledBy="not-found-title">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.08em] text-navy">404</p>
        <h1 id="not-found-title" className="mb-3 font-display text-step-3 font-semibold text-ink nav:text-step-4">
          This page could not be found.
        </h1>
        <p className="mb-6 max-w-measure text-muted">
          The link may be out of date, or the page may have moved. These are good places to start.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/" icon="arrow">
            Home
          </Button>
          <Button href="/visa" variant="secondary">
            Visa requirements
          </Button>
          <Button href="/guides" variant="secondary">
            Guides
          </Button>
          <Button href="/sitemap" variant="secondary">
            Sitemap
          </Button>
        </div>
      </Section>
    </main>
  );
}
