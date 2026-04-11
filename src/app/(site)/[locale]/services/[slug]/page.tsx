import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceDetailContent from '@/components/ServiceDetailContent';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  return {
    title: service.title,
    description: service.shortDescription,
    keywords: [service.title, 'Vietnam', service.slug, 'expat services'],
    alternates: {
      canonical: `${baseUrl}/services/${slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/services/${slug}`,
    name: service.title,
    description: service.shortDescription,
    url: `${baseUrl}/services/${slug}`,
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    provider: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Vietnam Launchpad',
      url: baseUrl,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${baseUrl}/services/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        <Navigation />
        <ServiceDetailContent service={service} />
        <Footer />
      </main>
    </>
  );
}
