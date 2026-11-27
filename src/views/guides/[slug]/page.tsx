import React from 'react';
import type { Metadata } from '@/lib/metadata';
import { buildAlternates, ogImages, twitterDefaults } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';
import { notFound } from '@/lib/not-found';
import LiveRatesWidget from '@/components/LiveRatesWidget';
import EconomicSnapshotWidget from '@/components/EconomicSnapshotWidget';
import { getGuideBySlug, getAllGuideSlugs } from '@/data/guides';
import { getExchangeRates, getVietnamEconomicData, type ExchangeRates, type VietnamEconomicData } from '@/lib/open-data';

/** Guides that open with live data widgets. */
const RATES_GUIDES = new Set(['cost-of-living']);
const ECONOMY_GUIDES = new Set(['cost-of-living', 'company-setup-vietnam']);

export function hasTopWidget(slug: string): boolean {
  return ECONOMY_GUIDES.has(slug);
}

/** Data for the guide's live widgets, fetched at build time (see src/lib/open-data.ts). */
export async function loadData(slug: string) {
  const [rates, economicData] = await Promise.all([
    RATES_GUIDES.has(slug) ? getExchangeRates() : null,
    ECONOMY_GUIDES.has(slug) ? getVietnamEconomicData() : null,
  ]);
  return { rates, economicData };
}

/** Live data widgets injected at the top of relevant guides, rendered into GuideContent's topWidget slot. */
export function GuideTopWidget({
  slug,
  rates,
  economicData,
}: {
  slug: string;
  rates: ExchangeRates | null;
  economicData: VietnamEconomicData | null;
}) {
  if (!economicData) return null;
  if (RATES_GUIDES.has(slug)) {
    return (
      <>
        <LiveRatesWidget data={rates} compact />
        <EconomicSnapshotWidget data={economicData} />
      </>
    );
  }
  return <EconomicSnapshotWidget data={economicData} />;
}

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  return {
    title: pageTitle(guide.metaTitle ?? guide.title),
    description: guide.metaDescription ?? guide.excerpt,
    keywords: [guide.category, 'Vietnam', 'expat', 'guide', 'living in Vietnam'],
    alternates: buildAlternates(`/guides/${slug}`),
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: 'article',
      publishedTime: guide.date,
      modifiedTime: guide.lastUpdated,
      authors: [guide.author],
      images: ogImages,
    },
    twitter: twitterDefaults,
  };
}

/**
 * `article` is the interactive guide body (GuideContent), hydrated by the Astro page
 * with the live widgets passed into it.
 */
export default function GuidePage({ slug, article }: { slug: string; article?: React.ReactNode }) {
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    url: `${baseUrl}/guides/${guide.slug}`,
    inLanguage: 'en',
    author: {
      '@type': 'Organization',
      name: 'Vietnam Launchpad',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vietnam Launchpad',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/vietnam-launchpad-logo.png`,
      },
    },
    datePublished: guide.date,
    dateModified: guide.lastUpdated,
    about: {
      '@type': 'Thing',
      name: guide.category,
    },
    keywords: `${guide.title}, ${guide.category}, Vietnam expat, living in Vietnam 2026`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/guides/${guide.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: `${baseUrl}/guides`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.breadcrumbName ?? guide.title,
        item: `${baseUrl}/guides/${guide.slug}`,
      },
    ],
  };

  const faqSchema = guide.faqs && guide.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq: { q: string; a: string }) => ({
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
