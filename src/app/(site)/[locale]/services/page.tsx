'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Link } from '@/i18n/config';

// ─── Pricing map (starting-from figures, updated manually) ───────────────────

const pricing: Record<string, string> = {
  'trc-application': 'from $350',
  'work-permit': 'from $650',
  'company-setup': 'from $1,500',
  'business-visa': 'from $150',
  'evisa': 'from $99',
  'marriage-registration': 'from $800',
  'permanent-residency': 'from $1,500',
  'drivers-license': 'from $150',
  'property-registration': 'from $500',
  'consultation': 'from $150/hr',
  'tax-filing': 'from $200',
  'accounting-bookkeeping': 'from $200/mo',
  'social-insurance': 'from $150/mo',
  'apostille-services': 'from $150/doc',
  'relocation-assistance': 'from $500',
};

// ─── Service categories ───────────────────────────────────────────────────────

const categories = [
  {
    id: 'residency',
    label: 'Residency & Visas',
    headline: 'Live in Vietnam legally',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
    accentColor: 'bg-blue-600',
    services: [
      {
        slug: 'trc-application',
        title: 'TRC Application',
        description: 'Temporary Residence Card via investment, work permit, or marriage. 1 to 3 years validity.',
        features: ['Investment TRC: DT4 (1 yr) or DT3 (3 yrs)', 'Work permit-based TRC: 2 years', 'Marriage TRC: up to 3 years', '2-3 weeks processing'],
        duration: '2-3 weeks',
        badge: 'Most Popular',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        ),
      },
      {
        slug: 'work-permit',
        title: 'Work Permit',
        description: 'Legal authorization to work in Vietnam. 2-year validity, employer-specific. Includes TRC sponsorship.',
        features: ['2-year validity', 'Document preparation included', 'Health check coordination', 'Renewal reminders'],
        duration: '2 months',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
          </svg>
        ),
      },
      {
        slug: 'evisa',
        title: 'eVisa & Entry Visa',
        description: '90-day eVisa for first arrivals, property viewings, and business exploration. Fast approval.',
        features: ['90-day single or multiple entry', '2-3 business day approval', 'All ports of entry', '80+ nationalities eligible'],
        duration: '2-3 business days',
        badge: 'Quick',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        ),
      },
      {
        slug: 'business-visa',
        title: 'Business Visa',
        description: '3-month business visa for meetings, property viewings, and exploring opportunities before committing.',
        features: ['3-month validity', 'Single or multiple entry', 'Fast processing', 'Extendable in-country'],
        duration: '3-5 days',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
          </svg>
        ),
      },
      {
        slug: 'marriage-registration',
        title: 'Marriage Registration & TRC',
        description: 'Register your marriage in Vietnam and get TRC through marriage to a Vietnamese citizen.',
        features: ['Legal marriage certificate', 'TRC up to 3 years', 'No investment required', 'Path to permanent residency'],
        duration: '1-2 months',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        ),
      },
      {
        slug: 'permanent-residency',
        title: 'Permanent Residency',
        description: 'Apply for Vietnam PR after 3+ years of TRC-based residence. Live and work indefinitely.',
        features: ['No annual renewals', 'Work without a work permit', 'Sponsor family members', 'Path to citizenship (optional)'],
        duration: '3-6 months',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'business',
    label: 'Business & Compliance',
    headline: 'Run a compliant business',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    accentColor: 'bg-indigo-600',
    services: [
      {
        slug: 'company-setup',
        title: 'Company Registration',
        description: 'Full LLC registration for foreign investors. Includes banking setup, seals, and first-year compliance calendar.',
        features: ['100% foreign ownership', 'Free 1:1 consultation included', 'Banking account setup', '6 months post-registration support'],
        duration: '2-4 months',
        badge: 'Includes free consult',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>
        ),
      },
      {
        slug: 'accounting-bookkeeping',
        title: 'Accounting & Bookkeeping',
        description: 'Monthly bookkeeping, VAT returns, CIT declarations, and annual financial statements for foreign-owned companies.',
        features: ['Monthly transaction recording', 'VAT & CIT filings', 'Annual financial statements', 'Payroll accounting (up to 5 staff)'],
        duration: 'Ongoing monthly',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v4.875c0 .621-.504 1.125-1.125 1.125H9.375A1.125 1.125 0 018.25 10.875V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.756 4.5 4.89V21a.75.75 0 001.5 0V4.89c0-.424.277-.787.686-.87A48.659 48.659 0 0112 3.75c1.592 0 3.17.07 4.73.212a.75.75 0 00.054-1.498A50.14 50.14 0 0012 2.25z" />
          </svg>
        ),
      },
      {
        slug: 'tax-filing',
        title: 'Personal Tax Filing (PIT)',
        description: 'Annual PIT returns for expat residents. We calculate your liability, identify deductions, and file on time.',
        features: ['Tax residency assessment', 'Worldwide income calculation', 'Deductions applied (dependants, insurance)', 'Double taxation treaty review'],
        duration: '1-2 weeks',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        ),
      },
      {
        slug: 'social-insurance',
        title: 'Social Insurance Enrollment',
        description: 'Mandatory SI, HI, and UI enrollment for your employees. Monthly declarations and ongoing compliance.',
        features: ['Employee eligibility assessment', 'VSS registration', 'Health insurance card issuance', 'Monthly contribution filings'],
        duration: '1-2 weeks setup',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'documents',
    label: 'Documents & Legal',
    headline: 'Authentication done right',
    color: 'bg-amber-50 text-amber-700 border-amber-100',
    accentColor: 'bg-amber-600',
    services: [
      {
        slug: 'apostille-services',
        title: 'Apostille & Authentication',
        description: 'Get your foreign documents apostilled, legalized, and certified for use in Vietnamese immigration, marriage, and business processes.',
        features: ['Full authentication chain managed', 'Vietnamese consulate submission', 'Certified Vietnamese translation', 'Country-specific guidance'],
        duration: '2-4 weeks',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
      },
      {
        slug: 'consultation',
        title: '1:1 Expert Consultation',
        description: 'Personalized 1-hour session covering tax, immigration, company setup, or any Vietnam business question.',
        features: ['1 hour video call', 'Written action plan summary', 'Any topic: tax, visas, business', 'Free if you proceed with company setup'],
        duration: 'Within 48 hours',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'property',
    label: 'Property & Lifestyle',
    headline: 'Put down roots',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    accentColor: 'bg-emerald-600',
    services: [
      {
        slug: 'property-registration',
        title: 'Property Registration',
        description: 'Register and secure ownership of your Vietnam apartment. Full due diligence, contract review, and Pink Book issuance.',
        features: ['30% quota check', 'Legal due diligence', '50-year ownership (renewable)', 'Pink Book / Red Book issuance'],
        duration: '1-2 months',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
          </svg>
        ),
      },
      {
        slug: 'drivers-license',
        title: "Driver's License",
        description: 'IDL for short-term visitors. Vietnamese license conversion for TRC holders. No driving test required (70+ countries).',
        features: ['IDL assistance for tourists', 'Conversion for TRC holders', 'No driving test for 70+ countries', 'Motorbike & car license classes'],
        duration: '1-2 weeks',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        ),
      },
      {
        slug: 'relocation-assistance',
        title: 'Relocation & Settling In',
        description: 'End-to-end relocation: housing search, airport pickup, bank account, SIM, police registration, and 30-day support.',
        features: ['Housing search & lease review', 'Airport pickup available', 'Bank account + SIM setup', 'Police registration (mandatory)'],
        duration: '1-2 weeks',
        badge: 'New',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
        ),
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Vietnam Expat Services',
  url: 'https://www.vietnamlaunchpad.com/services',
  description: 'Professional visa, immigration and business services for expats in Vietnam.',
  provider: { '@type': 'Organization', name: 'Vietnam Launchpad', url: 'https://www.vietnamlaunchpad.com' },
  offers: categories.flatMap((cat) =>
    cat.services.map((s) => ({
      '@type': 'Offer',
      name: s.title,
      url: `https://www.vietnamlaunchpad.com/services/${s.slug}`,
      description: s.description,
    }))
  ),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-white/70">15 services - transparent pricing</span>
          </div>
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
              Services
            </span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12">
            Everything you need to live, work, and build a business in Vietnam - under one roof
          </p>

          {/* Quick-nav pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/20 hover:text-white transition-all"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing transparency banner */}
      <section className="bg-primary-600 py-4">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Prices shown are starting-from figures. Final pricing depends on your situation - contact us for an exact quote within 24 hours.</span>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 text-sm font-semibold underline underline-offset-2 hover:text-white/80 transition-colors whitespace-nowrap"
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service categories */}
      {categories.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-24 md:py-32 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${cat.color}`}>
                  {cat.label}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                {cat.headline}
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cat.services.map((service, idx) => (
                <AnimateOnScroll key={service.slug} delay={idx * 100}>
                  <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Card header */}
                    <div className="p-6 pb-0">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${cat.accentColor} text-white flex items-center justify-center flex-shrink-0`}>
                          {service.icon}
                        </div>
                        {service.badge && (
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 border border-accent-100">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="px-6 pb-4 flex-grow">
                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm">
                            <svg className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card footer */}
                    <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-sm text-gray-400 min-w-0">
                        <span className="font-semibold text-gray-900 text-base">{pricing[service.slug]}</span>
                        <span className="text-gray-300">·</span>
                        <span className="truncate">{service.duration}</span>
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-shrink-0 inline-flex items-center gap-1.5 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Labour law depth banner */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-primary-400 mb-2">98%</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">Application Approval Rate</div>
            </div>
            <div className="border-x border-white/10">
              <div className="text-4xl font-display font-bold text-primary-400 mb-2">6+</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">Years Advising Expats</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary-400 mb-2">24h</div>
              <div className="text-sm text-white/50 uppercase tracking-wider">Quote Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="scale" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Book a free 30-minute call. We will map out exactly what you need and give you a transparent quote - no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                Book a Free Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/84765805294"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}
