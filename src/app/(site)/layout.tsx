import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { DM_Sans, Source_Serif_4 } from 'next/font/google';
import Script from 'next/script';

import AnalyticsEvents from '@/components/AnalyticsEvents';
import MobileStickyBar from '@/components/MobileStickyBar';
import { routing } from '@/i18n/config';
import { OG_IMAGE_URL } from '@/lib/seo';
import { CONTACT_EMAILS, PHONE_E164 } from '@/lib/site';

import '../globals.css';

// Self-hosted at build time, replaces the render-blocking Google Fonts CSS @import.
const fontBody = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-sans',
});
const fontDisplay = Source_Serif_4({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-source-serif',
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale = routing.defaultLocale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://www.vietnamlaunchpad.com'),
    title: {
      default: t('title'),
      template: `%s | ${t('siteName')}`
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
      telephone: false
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'vi' ? 'vi_VN' : locale === 'zh' ? 'zh_CN' : 'ko_KR',
      url: `https://www.vietnamlaunchpad.com${locale === 'en' ? '' : `/${locale}`}`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: 'Vietnam Launchpad',
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: t('ogImageAlt')
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [OG_IMAGE_URL]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      // No canonical or hreflang here: every page sets its own via buildAlternates() in src/lib/seo.ts.
      types: {
        'application/rss+xml': 'https://www.vietnamlaunchpad.com/feed.xml',
      },
    }
  };
}

export default async function SiteLayout({ children, params }: LayoutProps) {
  const { locale = routing.defaultLocale } = await params;
  const messages = await getMessages({ locale });

  const logoUrl = 'https://www.vietnamlaunchpad.com/vietnam-launchpad-logo.png';
  const baseUrl = 'https://www.vietnamlaunchpad.com';

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

  const jsonLd = {
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
      availableLanguage: ['English', 'Vietnamese', 'Chinese', 'Korean']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5th floor, No.7, Alley 3, Lieu Giai Street, Ngoc Ha Ward',
      addressLocality: 'Hanoi',
      addressCountry: 'VN'
    },
    sameAs: [
      'https://facebook.com/vietnamlaunchpad',
      'https://linkedin.com/company/vietnamlaunchpad'
    ]
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
      addressCountry: 'Vietnam'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.0285,
      longitude: 105.8542
    },
    telephone: PHONE_E164,
    email: CONTACT_EMAILS[0],
    openingHours: 'Mo-Fr 09:00-18:00'
  };

  return (
    <html lang={locale} className={`${fontBody.variable} ${fontDisplay.variable}`}>
      <head>
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-2 top-2 z-[100] inline-flex min-h-[44px] -translate-y-[300%] items-center rounded-input bg-navy px-5 font-body font-bold text-white focus:translate-y-0"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <MobileStickyBar />
          <AnalyticsEvents />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
