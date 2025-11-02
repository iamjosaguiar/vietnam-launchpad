import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import MobileStickyBar from '@/components/MobileStickyBar'
import MessagingWidget from '@/components/MessagingWidget'

export const metadata: Metadata = {
  metadataBase: new URL('https://vietnamlaunchpad.com'),
  title: {
    default: 'Vietnam Launchpad - TRC, Work Permits & Company Setup in Vietnam',
    template: '%s | Vietnam Launchpad'
  },
  description: 'Professional Vietnam immigration services: TRC application ($350), work permits ($180), and company registration ($3,500). Fast, transparent, licensed. 500+ successful applications.',
  keywords: [
    'Vietnam TRC',
    'Vietnam temporary residence card',
    'Vietnam work permit',
    'Vietnam company registration',
    'Vietnam business setup',
    'Vietnam immigration services',
    'expat Vietnam',
    'relocate to Vietnam',
    'Vietnam visa services',
    'register company Vietnam'
  ],
  authors: [{ name: 'Vietnam Launchpad' }],
  creator: 'Vietnam Launchpad',
  publisher: 'Vietnam Launchpad',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vietnamlaunchpad.com',
    title: 'Vietnam Launchpad - Professional Immigration & Business Services',
    description: 'Get your Vietnam TRC in 7 days. Licensed immigration services for expats and businesses. Transparent pricing, no hidden fees.',
    siteName: 'Vietnam Launchpad',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vietnam Launchpad - Immigration Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vietnam Launchpad - TRC, Work Permits & Company Setup',
    description: 'Professional Vietnam immigration services. Fast TRC applications, work permits, and company registration.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
    description: 'Licensed immigration and business consulting services in Vietnam. Specializing in TRC applications, work permits, and company registration.',
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
    <html lang="en">
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
        {children}
        <MobileStickyBar />
        <MessagingWidget />
      </body>
    </html>
  )
}