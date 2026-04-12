import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllSalaryRoleSlugs, getSalaryRole } from '@/data/salaryRoles';
import { Link } from '@/i18n/config';

export async function generateStaticParams() {
  const slugs = getAllSalaryRoleSlugs();
  return slugs.map((role) => ({ role }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role } = await params;
  const salaryRole = getSalaryRole(role);

  if (!salaryRole) {
    return { title: 'Role Not Found' };
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  const localMin = new Intl.NumberFormat('en-US').format(salaryRole.localMonthlyVnd.min);
  const localMax = new Intl.NumberFormat('en-US').format(salaryRole.localMonthlyVnd.max);
  const expatMin = salaryRole.expatMonthlyUsd.min.toLocaleString();
  const expatMax = salaryRole.expatMonthlyUsd.max.toLocaleString();

  return {
    title: `${salaryRole.title} Salary in Vietnam 2026 | Vietnam Launchpad`,
    description: `${salaryRole.title} salaries in Vietnam: local market rates ${localMin}–${localMax} VND/month, expat packages $${expatMin}–$${expatMax}/month USD. Work permit requirements and top employers.`,
    alternates: {
      canonical: `${baseUrl}/salary/${salaryRole.slug}`,
    },
    openGraph: {
      title: `${salaryRole.title} Salary in Vietnam 2026`,
      description: `${salaryRole.title} salaries in Vietnam: local market rates ${localMin}–${localMax} VND/month, expat packages $${expatMin}–$${expatMax}/month USD.`,
      type: 'article',
    },
  };
}

function formatVndFull(n: number): string {
  return new Intl.NumberFormat('en-US').format(n);
}

function formatVndShort(n: number): string {
  if (n >= 1_000_000) {
    return `${(n / 1_000_000).toFixed(0)}M`;
  }
  return new Intl.NumberFormat('en-US').format(n);
}

export default async function SalaryRolePage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const salaryRole = getSalaryRole(role);

  if (!salaryRole) {
    notFound();
  }

  const baseUrl = 'https://www.vietnamlaunchpad.com';

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${salaryRole.title} Salary in Vietnam 2026`,
    url: `${baseUrl}/salary/${salaryRole.slug}`,
    description: `${salaryRole.title} salaries in Vietnam: local market rates and expat packages with work permit guidance.`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Salary Guide', item: `${baseUrl}/salary` },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${salaryRole.title} Salary`,
          item: `${baseUrl}/salary/${salaryRole.slug}`,
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: salaryRole.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white py-28 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/salary" className="hover:text-white/70 transition-colors">Salary Guide</Link>
              <span>/</span>
              <span className="text-white/70">{salaryRole.title}</span>
            </nav>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">{salaryRole.icon}</span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-white/80 border border-white/20">
                  {salaryRole.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                {salaryRole.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
                  Salary in Vietnam 2026
                </span>
              </h1>

              <p className="text-xl text-white/60 max-w-2xl">
                Local market rates and expat packages, work permit requirements, and top employers
                for {salaryRole.title.toLowerCase()} roles in Vietnam.
              </p>
            </div>
          </div>
        </section>

        {/* Salary Range Cards */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
                Salary Ranges
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Local rate card */}
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm">🇻🇳</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Local Market Rate</p>
                      <p className="text-xs text-gray-400">Vietnamese national salary</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-1">Monthly Range (VND)</p>
                    <p className="text-3xl font-display font-bold text-gray-900">
                      {formatVndShort(salaryRole.localMonthlyVnd.min)}
                      <span className="text-gray-400 mx-2">–</span>
                      {formatVndShort(salaryRole.localMonthlyVnd.max)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">₫ per month</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Full range: ₫{formatVndFull(salaryRole.localMonthlyVnd.min)} – ₫{formatVndFull(salaryRole.localMonthlyVnd.max)} / month
                    </p>
                  </div>
                </div>

                {/* Expat package card */}
                <div className="bg-primary-50 rounded-3xl p-8 border border-primary-100">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center">
                      <span className="text-sm">✈️</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-800">Expat Package</p>
                      <p className="text-xs text-primary-500">Foreign national salary in USD</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-primary-500 mb-1">Monthly Range (USD)</p>
                    <p className="text-3xl font-display font-bold text-primary-900">
                      ${salaryRole.expatMonthlyUsd.min.toLocaleString()}
                      <span className="text-primary-400 mx-2">–</span>
                      ${salaryRole.expatMonthlyUsd.max.toLocaleString()}
                    </p>
                    <p className="text-sm text-primary-600 mt-1">USD per month</p>
                  </div>

                  <div className="pt-4 border-t border-primary-200">
                    <p className="text-xs text-primary-600">
                      Packages often include health insurance, housing allowance,
                      and annual flights home.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">
                Salary data for 2024–2026 Vietnam market. Ranges vary by experience, company size, and location.
              </p>
            </div>
          </div>
        </section>

        {/* About this role */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                About This Role in Vietnam
              </h2>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-6">
                <p className="text-gray-600 leading-relaxed text-base">{salaryRole.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Typical Employers
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{salaryRole.typicalEmployers}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Experience Required
                  </h3>
                  <p className="text-gray-600 text-sm">{salaryRole.yearsExpRequired}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Permit Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Work Permit Requirements
              </h2>

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Work Permit for {salaryRole.title}
                    </h3>
                    <p className="text-blue-800 text-sm leading-relaxed">{salaryRole.workPermitNote}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tools/work-permit-checker"
                  className="inline-flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Check Your Work Permit Eligibility
                </Link>
                <Link
                  href="/services/work-permit"
                  className="inline-flex items-center justify-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Work Permit Application Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Calculator Callout */}
        <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-display font-bold mb-2">
                  Calculate your take-home pay in Vietnam
                </h2>
                <p className="text-primary-100 text-sm">
                  Use our Vietnam PIT calculator to see your net salary after income tax
                  and social insurance deductions.
                </p>
              </div>
              <Link
                href="/tools/salary-calculator"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Open Salary Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {salaryRole.faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Need a work permit for this role?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Our team handles the full work permit application — from document preparation
              to submission and follow-up with Vietnamese authorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/work-permit"
                className="btn-primary inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-semibold"
              >
                Work Permit Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-300 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
            <div className="mt-8">
              <Link
                href="/salary"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to all salary guides
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
