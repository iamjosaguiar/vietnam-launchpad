'use client';

import { useState, useEffect } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';
import MarkdownBlocks from '@/components/MarkdownBlocks';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
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
      items.push({ id: slugify(text), text, level: 2 });
    } else if (h3) {
      const text = h3[1].trim();
      items.push({ id: slugify(text), text, level: 3 });
    }
  }
  return items;
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const toc = extractToc(post.content);
  const [activeId, setActiveId] = useState<string>('');
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headings = toc.map((item) => document.getElementById(item.id)).filter(Boolean);
      let current = '';
      for (const el of headings) {
        if (el && el.getBoundingClientRect().top <= 120) current = el.id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

  const mdComponents = {
    h2: ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => {
      const id = slugify(String(children));
      return <h2 id={id} {...props}>{children}</h2>;
    },
    h3: ({ children, ...props }: React.ComponentPropsWithoutRef<'h3'>) => {
      const id = slugify(String(children));
      return <h3 id={id} {...props}>{children}</h3>;
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-wash py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <Link
            href="/blog"
            className="hero-badge mb-6 inline-flex min-h-[44px] items-center gap-2 font-bold text-navy hover:underline underline-offset-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>

          <div className="max-w-[760px]">
            <div className="hero-badge mb-4 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="inline-flex min-h-[32px] items-center rounded-full border border-gold-line bg-gold-soft px-3 py-1 text-sm font-bold text-navy">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <h1 className="hero-title mb-4 font-display text-step-3 font-semibold leading-tight text-ink nav:text-step-5">
              {post.title}
            </h1>

            <p className="hero-subtitle mb-8 max-w-measure text-lead text-muted">{post.excerpt}</p>

            <div className="hero-cta flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy font-display text-step-1 font-semibold text-white">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="m-0 font-bold text-ink">{post.author}</p>
                <p className="m-0 text-sm text-muted">Immigration Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-paper py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <div className="flex gap-12 items-start">

            {/* Sticky TOC - Desktop */}
            {toc.length > 0 && (
              <aside className="hidden xl:block w-64 shrink-0 sticky top-28">
                <div className="bg-sand rounded-card p-6 border border-hairline">
                  <p className="text-sm font-bold text-muted uppercase tracking-[0.08em] mb-4">In This Article</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm transition-colors leading-snug py-1 ${
                          item.level === 3 ? 'pl-4' : ''
                        } ${
                          activeId === item.id
                            ? 'text-navy font-bold'
                            : 'text-muted hover:text-ink'
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
                    className="w-full flex min-h-[48px] items-center justify-between bg-sand border border-hairline rounded-card px-5 py-3 text-sm font-bold text-ink"
                    aria-expanded={tocOpen}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="mt-2 bg-sand border border-hairline rounded-card px-5 py-3">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={() => setTocOpen(false)}
                          className={`block py-3 text-sm text-muted hover:text-navy transition-colors ${
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

              <MarkdownBlocks
                markdown={post.content}
                className="prose prose-lg max-w-measure
                prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink
                prose-h1:text-4xl prose-h1:mb-6 prose-h1:hidden
                prose-h2:text-step-3 prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-hairline
                prose-h3:text-step-1 prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-ink
                prose-p:text-muted prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-navy prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-navy-deep
                prose-strong:text-ink prose-strong:font-semibold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                prose-li:text-muted prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-6 prose-blockquote:not-italic prose-blockquote:bg-gold-soft prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-card prose-blockquote:my-8
                prose-code:text-navy prose-code:bg-sand prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-hr:my-12 prose-hr:border-hairline
                prose-table:my-8 prose-table:w-full prose-table:border-collapse prose-table:rounded-card prose-table:overflow-hidden
                prose-thead:bg-navy
                prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-sm prose-th:text-white
                prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-hairline
                prose-tr:even:bg-sand"
                components={mdComponents}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-paper pb-12 nav:pb-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <AnimateOnScroll animation="scale">
            <div className="grid gap-6 rounded-panel bg-navy-deep px-6 py-8 text-white nav:grid-cols-[1fr_auto] nav:items-center nav:p-12">
              <div>
                <h2 className="m-0 font-display text-step-2 font-semibold text-white nav:text-step-4">
                  Need Help with Your Work Permit or Visa?
                </h2>
                <p className="mb-0 mt-2 max-w-measure text-[#D6E2F0]">
                  Our expert team can guide you through the entire process and ensure everything is done correctly.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row nav:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-gold px-6 font-bold text-ink hover:bg-gold-hover"
                >
                  Get Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services/work-permit"
                  className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border-2 border-white/60 px-6 font-bold text-white hover:bg-white/10"
                >
                  View Work Permit Service
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="bg-sand py-8">
        <div className="mx-auto w-full max-w-site px-4 md:px-6 text-center">
          <AnimateOnScroll>
            <Link
              href="/blog"
              className="inline-flex min-h-[44px] items-center gap-2 text-navy hover:text-navy-deep font-bold text-lg hover:gap-4 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to All Articles
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
