'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { getAllBlogPosts } from '@/data/blog';
import { Link } from '@/i18n/config';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Vietnam Launchpad Blog',
    url: 'https://www.vietnamlaunchpad.com/blog',
    description: 'Practical guides and articles for expats living and working in Vietnam.',
    publisher: {
      '@type': 'Organization',
      name: 'Vietnam Launchpad',
      url: 'https://www.vietnamlaunchpad.com',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://www.vietnamlaunchpad.com/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-wash py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <div className="max-w-[760px]">
            <div className="hero-badge mb-4 inline-flex min-h-[32px] items-center gap-2 rounded-full border border-gold-line bg-gold-soft px-3 py-1 text-sm font-bold text-navy">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Expert guides & insights</span>
            </div>
            <h1 className="hero-title mb-4 font-display text-step-3 font-semibold leading-tight text-ink nav:text-step-5">
              Vietnam Immigration
              <span className="block text-navy">
                & Business Blog
              </span>
            </h1>
            <p className="hero-subtitle max-w-measure text-lead text-muted">
              Expert guides and insights for expats living and working in Vietnam
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-paper py-12 nav:py-16">
        <div className="mx-auto w-full max-w-site px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <AnimateOnScroll key={post.slug} delay={index * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-white transition-shadow duration-150 hover:shadow-soft motion-reduce:transition-none">
                  {/* Image placeholder - gradient */}
                  <div className="relative h-32 overflow-hidden bg-sand">
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full border border-gold-line bg-gold-soft px-3 py-1 text-sm font-bold text-navy">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted mb-4">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="mb-3 font-display text-step-1 font-semibold leading-snug text-ink group-hover:text-navy">
                      <Link href={`/blog/${post.slug}`} className="inline-block py-1">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-muted mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-hairline">
                      <div className="text-sm">
                        <p className="font-medium text-ink">{post.author}</p>
                        <p className="text-muted">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex min-h-[44px] items-center gap-2 font-bold text-navy hover:gap-4 transition-all"
                      >
                        Read
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}
