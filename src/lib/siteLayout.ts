import { routing } from '@/i18n/config';
import { getTranslator } from '@/i18n/messages';
import type { Metadata } from '@/lib/metadata';
import { OG_IMAGE_URL } from '@/lib/seo';
import { CONTACT_EMAILS, PHONE_E164 } from '@/lib/site';

/**
 * Site-wide <head> defaults and structured data, rendered by src/layouts/BaseLayout.astro.
 * Each page's own metadata is merged over layoutMetadata (see src/lib/metadata.ts).
 */
const baseUrl = 'https://www.vietnamlaunchpad.com';
const logoUrl = `${baseUrl}/vietnam-launchpad-logo.png`;

export function layoutMetadata(locale: string = routing.defaultLocale): Metadata {
  const t = getTranslator('metadata');

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('description'),
    keywords: t('keywords').split(',').map((k: string) => k.trim()),
    authors: [{ name: 'Vietnam Launchpad' }],
    creator: 'Vietnam Launchpad',
    publisher: 'Vietnam Launchpad',
    icons: {
      icon: '/icon.svg',
      shortcut: '/icon.svg',
      apple: '/icon.svg',
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'vi' ? 'vi_VN' : locale === 'zh' ? 'zh_CN' : 'ko_KR',
      url: `${baseUrl}${locale === 'en' ? '' : `/${locale}`}`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: 'Vietnam Launchpad',
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [OG_IMAGE_URL],
    },
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
    alternates: {
      // No canonical or hreflang here: every page sets its own via buildAlternates() in src/lib/seo.ts.
      types: {
        'application/rss+xml': `${baseUrl}/feed.xml`,
      },
    },
  };
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  name: 'Vietnam Launchpad',
  url: baseUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/guides?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: 'Vietnam Launchpad',
  description: 'Professional immigration and business consulting services for Vietnam',
  url: baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: logoUrl,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE_E164,
    contactType: 'Customer Service',
    areaServed: 'VN',
    availableLanguage: ['English', 'Vietnamese', 'Chinese', 'Korean'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th floor, No.7, Alley 3, Lieu Giai Street, Ngoc Ha Ward',
    addressLocality: 'Hanoi',
    addressCountry: 'VN',
  },
  sameAs: ['https://facebook.com/vietnamlaunchpad', 'https://linkedin.com/company/vietnamlaunchpad'],
};

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': baseUrl,
  name: 'Vietnam Launchpad',
  image: logoUrl,
  description:
    'Visa, residency and business support for expats and visitors in Vietnam, including TRC applications, work permits and company registration. A private company, not a government agency.',
  url: baseUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5th floor, No.7, Alley 3, Lieu Giai Street, Ngoc Ha Ward',
    addressLocality: 'Hanoi',
    addressCountry: 'Vietnam',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.0285,
    longitude: 105.8542,
  },
  telephone: PHONE_E164,
  email: CONTACT_EMAILS[0],
  openingHours: 'Mo-Fr 09:00-18:00',
};

/** Structured data on every page, in this order. */
export const siteSchemas = [
  { id: 'schema-website', data: websiteLd },
  { id: 'schema-organization', data: organizationLd },
  { id: 'schema-local-business', data: localBusinessLd },
];

/** JSON for an inline <script type="application/ld+json">, with `<` escaped so the text cannot close the tag. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
