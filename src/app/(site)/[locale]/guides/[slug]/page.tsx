import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GuideContent from '@/components/GuideContent';
import LiveRatesWidget from '@/components/LiveRatesWidget';
import EconomicSnapshotWidget from '@/components/EconomicSnapshotWidget';
import { getGuideBySlug, getAllGuideSlugs } from '@/data/guides';

export const revalidate = 21600; // ISR: re-render every 6 hours for live data

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
    title: `${guide.title} | Vietnam Launchpad`,
    description: guide.excerpt,
    keywords: [guide.category, 'Vietnam', 'expat', 'guide', 'living in Vietnam'],
    alternates: {
      canonical: `${baseUrl}/guides/${slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: 'article',
      publishedTime: guide.date,
      modifiedTime: guide.lastUpdated,
      authors: [guide.author],
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
        name: guide.title,
        item: `${baseUrl}/guides/${guide.slug}`,
      },
    ],
  };

  // Inject live data widgets into relevant guides
  let topWidget: React.ReactNode = undefined;
  if (slug === 'cost-of-living') {
    topWidget = (
      <>
        <LiveRatesWidget compact />
        <EconomicSnapshotWidget />
      </>
    );
  } else if (slug === 'company-setup-vietnam') {
    topWidget = <EconomicSnapshotWidget />;
  }

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
      <main className="min-h-screen">
        <Navigation />
        <GuideContent guide={guide} topWidget={topWidget} />
        <Footer />
      </main>
    </>
  );
}
