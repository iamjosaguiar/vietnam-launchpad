'use client';

import { useState, useEffect } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// ─── Inline CTA components ────────────────────────────────────────────────────

function SoftCta() {
  return (
    <div className="not-prose my-10 rounded-2xl border border-primary-100 bg-primary-50 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-primary-800 mb-0.5">Have questions while reading?</p>
        <p className="text-sm text-primary-700/80">Our consultants answer these questions every day. Book a free 15-min call.</p>
      </div>
      <Link
        href="/contact"
        className="shrink-0 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
      >
        Book free call
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

function ServiceCta({ title, body, href, linkText }: { title: string; body: string; href: string; linkText: string }) {
  return (
    <div className="not-prose my-10 rounded-2xl bg-gradient-to-br from-slate-900 to-primary-900 px-6 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-white mb-1">{title}</p>
        <p className="text-sm text-white/70">{body}</p>
      </div>
      <Link
        href={href}
        className="shrink-0 inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 text-sm font-bold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
      >
        {linkText}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

interface Guide {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  lastUpdated: string;
  readTime: string;
  category: string;
  ctaTitle: string;
  ctaBody: string;
  ctaLink: string;
  ctaLinkText: string;
  ctaSecondaryLink?: string;
  ctaSecondaryText?: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractToc(content: string): TocItem[] {
  const lines = content.split('\n');
  const items: TocItem[] = [];
  for (const line of lines) {
    const h2 = line.match(/^## (.+)$/);
    const h3 = line.match(/^### (.+)$/);
    if (h2) {
      const text = h2[1].trim();
      if (text !== '---') items.push({ id: slugify(text), text, level: 2 });
    } else if (h3) {
      const text = h3[1].trim();
      items.push({ id: slugify(text), text, level: 3 });
    }
  }
  return items;
}

const categoryColors: Record<string, string> = {
  'Finance & Money': 'bg-emerald-100 text-emerald-800',
  'Visas & Residency': 'bg-blue-100 text-blue-800',
  'Health & Wellbeing': 'bg-rose-100 text-rose-800',
  'Housing & Real Estate': 'bg-amber-100 text-amber-800',
  'Daily Life': 'bg-purple-100 text-purple-800',
  'Work & Business': 'bg-indigo-100 text-indigo-800',
  'Family & Education': 'bg-pink-100 text-pink-800',
  'City Guides': 'bg-teal-100 text-teal-800',
};

const proseClasses = `prose prose-lg prose-blue max-w-none
  prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900
  prose-h1:text-4xl prose-h1:mb-6 prose-h1:hidden
  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
  prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800
  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
  prose-a:text-primary-600 prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary-700
  prose-strong:text-gray-900 prose-strong:font-semibold
  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
  prose-li:text-gray-600 prose-li:leading-relaxed
  prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-6 prose-blockquote:not-italic prose-blockquote:bg-primary-50 prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-xl prose-blockquote:my-8
  prose-code:text-primary-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
  prose-hr:my-12 prose-hr:border-gray-200
  prose-table:my-8 prose-table:w-full prose-table:border-collapse prose-table:rounded-xl prose-table:overflow-hidden
  prose-thead:bg-primary-600
  prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-sm prose-th:text-white
  prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-gray-100
  prose-tr:even:bg-gray-50`;

const mdComponents = (slugifyFn: (t: string) => string) => ({
  h2: ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => {
    const id = slugifyFn(String(children));
    return <h2 id={id} {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }: React.ComponentPropsWithoutRef<'h3'>) => {
    const id = slugifyFn(String(children));
    return <h3 id={id} {...props}>{children}</h3>;
  },
});

export default function GuideContent({ guide, topWidget }: { guide: Guide; topWidget?: React.ReactNode }) {
  const toc = extractToc(guide.content);
  const [activeId, setActiveId] = useState<string>('');
  const [tocOpen, setTocOpen] = useState(false);

  // Split content at --- section dividers and inject CTAs at ~33% and ~65%
  const sections = guide.content.split(/\n{0,2}---\n{0,2}/);
  const total = sections.length;
  const cta1At = Math.max(1, Math.floor(total * 0.33));
  const cta2At = Math.max(cta1At + 1, Math.floor(total * 0.65));

  useEffect(() => {
    const handleScroll = () => {
      const headings = toc.map((item) => document.getElementById(item.id)).filter(Boolean);
      let current = '';
      for (const el of headings) {
        if (el && el.getBoundingClientRect().top <= 120) {
          current = el.id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  const categoryColor = categoryColors[guide.category] || 'bg-gray-100 text-gray-800';

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link
            href="/guides"
            className="hero-badge inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Guides
          </Link>

          <div className="max-w-4xl">
            <div className="hero-badge flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
                {guide.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {guide.readTime}
              </span>
              <span className="text-sm text-white/60 flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Updated {new Date(guide.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
              {guide.title}
            </h1>

            <p className="hero-subtitle text-lg text-white/50 mb-4 font-medium">{guide.subtitle}</p>
            <p className="text-xl text-white/60 mb-8">{guide.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex gap-12 items-start">

            {/* Sticky TOC - Desktop */}
            {toc.length > 0 && (
              <aside className="hidden xl:block w-64 shrink-0 sticky top-28">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">In This Guide</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm transition-colors leading-snug py-1 ${
                          item.level === 3 ? 'pl-4' : ''
                        } ${
                          activeId === item.id
                            ? 'text-primary-600 font-semibold'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className="flex-1 min-w-0">

              {/* Mobile TOC Toggle */}
              {toc.length > 0 && (
                <div className="xl:hidden mb-8">
                  <button
                    onClick={() => setTocOpen(!tocOpen)}
                    className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm font-semibold text-gray-700"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
                      </svg>
                      Table of Contents
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${tocOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {tocOpen && (
                    <div className="mt-2 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 space-y-2">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={() => setTocOpen(false)}
                          className={`block text-sm text-gray-600 hover:text-primary-600 transition-colors ${
                            item.level === 3 ? 'pl-4' : ''
                          }`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {topWidget}

              <div>
                {sections.map((section, i) => (
                  <div key={i}>
                    <div className={proseClasses}>
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={mdComponents(slugify)}
                      >
                        {section}
                      </ReactMarkdown>
                    </div>
                    {i === cta1At - 1 && <SoftCta />}
                    {i === cta2At - 1 && (
                      <ServiceCta
                        title={guide.ctaTitle}
                        body={guide.ctaBody}
                        href={guide.ctaLink}
                        linkText={guide.ctaLinkText}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Last Updated Footer */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
                <span>
                  Last updated:{' '}
                  {new Date(guide.lastUpdated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {guide.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="scale" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {guide.ctaTitle}
            </h2>
            <p className="text-xl text-white/70 mb-10">{guide.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={guide.ctaLink}
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                {guide.ctaLinkText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {guide.ctaSecondaryLink && guide.ctaSecondaryText && (
                <Link
                  href={guide.ctaSecondaryLink}
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  {guide.ctaSecondaryText}
                </Link>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back to Guides */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimateOnScroll>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg hover:gap-4 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to All Guides
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
