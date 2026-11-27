import type { Metadata } from '@/lib/metadata';
import { buildAlternates, ogImages, twitterDefaults } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';
import { notFound } from '@/lib/not-found';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  return {
    title: pageTitle(post.metaTitle ?? post.title),
    description: post.excerpt,
    keywords: [post.category, 'Vietnam', 'expat', 'guide'],
    alternates: buildAlternates(`/blog/${slug}`),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: ogImages,
    },
    twitter: twitterDefaults,
  };
}

/** `article` is the interactive post body (BlogPostContent), hydrated by the Astro page. */
export default function BlogPostPage({ slug, article }: { slug: string; article?: React.ReactNode }) {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/blog/${post.slug}`,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: post.author,
      affiliation: {
        '@type': 'Organization',
        name: 'Vietnam Launchpad',
        url: baseUrl,
      },
    },
    datePublished: post.date,
    dateModified: post.lastUpdated ?? post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Vietnam Launchpad',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/vietnam-launchpad-logo.png`,
      },
    },
    keywords: `${post.category}, Vietnam expat, ${post.title}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${baseUrl}/blog/${post.slug}` },
    ],
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen">
        <main id="main" tabIndex={-1}>
          {article}
        </main>
      </div>
    </>
  );
}
