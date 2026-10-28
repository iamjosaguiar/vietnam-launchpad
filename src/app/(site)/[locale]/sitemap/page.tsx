import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { buildAlternates } from '@/lib/seo';
import { getSitemapEntries, SITEMAP_SECTIONS } from '@/lib/sitemap';

export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Every public page on Vietnam Launchpad, grouped by section.',
  alternates: buildAlternates('/sitemap'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SitemapPage() {
  const entries = getSitemapEntries();
  const sections = SITEMAP_SECTIONS.map((name) => ({
    name,
    links: entries
      .filter((entry) => entry.section === name)
      .sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' })),
  })).filter((section) => section.links.length > 0);

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main id="main" tabIndex={-1}>

        <section className="relative bg-gradient-to-br from-stone-950 via-primary-950 to-stone-950 text-white pt-36 pb-16 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-4">Sitemap</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Every public page on Vietnam Launchpad, grouped by section.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            {sections.map((section) => (
              <div key={section.name} className="mb-12">
                <h2 className="text-3xl font-display text-stone-950 mb-4">{section.name}</h2>
                <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
                  {section.links.map((link) => (
                    <li key={link.path || '/'}>
                      <a
                        href={link.path || '/'}
                        className="text-stone-800 underline decoration-stone-300 underline-offset-4 hover:text-primary-700 hover:decoration-primary-600"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <p className="mt-4 pt-8 border-t border-stone-200">
              <a
                href="/sitemap.xml"
                className="text-primary-700 underline decoration-primary-300 underline-offset-4 hover:text-primary-900"
              >
                XML sitemap
              </a>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
