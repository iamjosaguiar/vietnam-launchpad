import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HolaflyCallout from '@/components/HolaflyCallout';
import MarkdownBlocks from '@/components/MarkdownBlocks';
import { Link } from '@/i18n/config';
import type { CuratedVisaPage as CuratedData } from '@/data/visaCurated';

const BASE_URL = 'https://www.vietnamlaunchpad.com';

const proseClasses = `prose prose-lg prose-blue max-w-none
  prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900
  prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
  prose-a:text-primary-600 prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary-700
  prose-strong:text-gray-900 prose-strong:font-semibold
  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2`;

export default function CuratedVisaPage({ page }: { page: CuratedData }) {
  const country = page.h1.replace('Vietnam Visa for ', '');

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

  const badgeClass =
    page.badgeTone === 'emerald'
      ? 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300'
      : 'bg-blue-500/20 border-blue-400/30 text-blue-300';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen">
        <Navigation />

        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/visa" className="hover:text-white/70 transition-colors">Vietnam Visa</Link>
              <span>/</span>
              <span className="text-white/60">{country}</span>
            </nav>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl" role="img" aria-label={country}>{page.flag}</span>
                <span className={`inline-flex items-center gap-1.5 border text-sm font-semibold px-4 py-2 rounded-full ${badgeClass}`}>
                  {page.badge}
                </span>
              </div>
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                {page.h1}
              </h1>
              <p className="hero-subtitle text-xl text-white/60 max-w-2xl">{page.heroText}</p>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-b border-amber-100 py-4">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <p className="text-sm text-amber-800">{page.lastVerified}</p>
            <p className="text-sm text-amber-800 mt-2">{page.privateLine}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-12">
                <h2 className="text-lg font-semibold text-gray-900 mb-5">{page.factsHeading}</h2>
                <dl className="space-y-3">
                  {page.facts.map(([label, value]) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:gap-4 border-b border-gray-50 pb-3 last:border-0">
                      <dt className="text-sm text-gray-500 sm:w-56 flex-shrink-0">{label}</dt>
                      <dd className="text-sm font-medium text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {page.blocks.map((block, i) => {
                if (block.t === 'h2') {
                  return (
                    <h2 key={i} className="text-3xl font-display font-bold text-gray-900 mt-14 mb-6 pb-3 border-b border-gray-200">
                      {block.text}
                    </h2>
                  );
                }
                if (block.t === 'md') {
                  return <MarkdownBlocks key={i} markdown={block.text} className={proseClasses} />;
                }
                if (block.t === 'buttons') {
                  return (
                    <div key={i} className="flex flex-col sm:flex-row gap-4 my-8">
                      <Link
                        href={block.primary.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full text-sm font-semibold hover:bg-primary-500 transition-colors"
                      >
                        {block.primary.text}
                      </Link>
                      <Link
                        href={block.secondary.href}
                        className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-800 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
                      >
                        {block.secondary.text}
                      </Link>
                    </div>
                  );
                }
                return <HolaflyCallout key={i} variant="visa" />;
              })}

              <h2 className="text-3xl font-display font-bold text-gray-900 mt-14 mb-6 pb-3 border-b border-gray-200">
                {page.faqHeading}
              </h2>
              <div className="space-y-8">
                {page.faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-xl font-display font-bold text-gray-800 mb-3">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
