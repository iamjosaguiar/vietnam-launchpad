import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Script from 'next/script';

import MessagingWidget from '@/components/MessagingWidget';
import MobileStickyBar from '@/components/MobileStickyBar';
import { routing } from '@/i18n/config';

import '../globals.css';

type LayoutParams = {
  locale?: string;
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
};

async function resolveLocale(params: Promise<LayoutParams>) {
  const { locale } = await params;
  return locale ?? routing.defaultLocale;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://vietnamlaunchpad.com'),
    title: {
      default: t('title'),
      template: `%s | ${t('siteName')}`
    },
    description: t('description'),
    keywords: t('keywords').split(',').map((k: string) => k.trim()),
    authors: [{ name: 'Vietnam Launchpad' }],
    creator: 'Vietnam Launchpad',
    publisher: 'Vietnam Launchpad',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'vi' ? 'vi_VN' : locale === 'zh' ? 'zh_CN' : 'ko_KR',
      url: `https://vietnamlaunchpad.com${locale === 'en' ? '' : `/${locale}`}`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: 'Vietnam Launchpad',
      images: [
        {
          url: '/og-image.jpg',
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
      images: ['/og-image.jpg']
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
      canonical: `https://vietnamlaunchpad.com${locale === 'en' ? '' : `/${locale}`}`,
      languages: {
        en: 'https://vietnamlaunchpad.com',
        vi: 'https://vietnamlaunchpad.com/vi',
        zh: 'https://vietnamlaunchpad.com/zh',
        ko: 'https://vietnamlaunchpad.com/ko'
      }
    }
  };
}

export default async function SiteLayout({ children, params }: LayoutProps) {
  const locale = await resolveLocale(params);
  const messages = await getMessages({ locale });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vietnam Launchpad',
    description: 'Professional immigration and business consulting services for Vietnam',
    url: 'https://vietnamlaunchpad.com',
    logo: 'https://vietnamlaunchpad.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-28-1234-5678',
      contactType: 'Customer Service',
      areaServed: 'VN',
      availableLanguage: ['English', 'Vietnamese', 'Chinese', 'Korean']
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ho Chi Minh City',
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
    '@id': 'https://vietnamlaunchpad.com',
    name: 'Vietnam Launchpad',
    image: 'https://vietnamlaunchpad.com/logo.png',
    description:
      'Licensed immigration and business consulting services in Vietnam. Specializing in TRC applications, work permits, and company registration.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ho Chi Minh City',
      addressCountry: 'Vietnam'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.8231,
      longitude: 106.6297
    },
    telephone: '+84-28-1234-5678',
    email: 'jos@iamjosaguiar.com',
    priceRange: '$$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127'
    }
  };

  return (
    <html lang={locale}>
      <head>
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <MobileStickyBar />
          <MessagingWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
