import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SALARY_ROLES, getAllSalaryCategories } from '@/data/salaryRoles';
import { Link } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Expat Salary Guide Vietnam 2026 | Salaries by Role | Vietnam Launchpad',
  description:
    'Vietnam expat salary guide 2026. Local VND market rates and USD expat packages for 12 key roles — software engineers, teachers, managers, and more.',
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/salary',
  },
  openGraph: {
    title: 'Expat Salary Guide Vietnam 2026 | Salaries by Role | Vietnam Launchpad',
    description:
      'Vietnam expat salary guide 2026. Local VND market rates and USD expat packages for 12 key roles.',
    type: 'website',
  },
};

function formatVnd(n: number): string {
  if (n >= 1_000_000) {
    return `${(n / 1_000_000).toFixed(0)}M`;
  }
  return new Intl.NumberFormat('en-US').format(n);
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Technology: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100' },
  Education: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100' },
  Business: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100' },
  Finance: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100' },
  Hospitality: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-100' },
  Operations: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100' },
  Creative: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-100' },
};

export default function SalaryListPage() {
  const categories = getAllSalaryCategories();

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vietnam Expat Salary Guide 2026',
    url: 'https://www.vietnamlaunchpad.com/salary',
    description: 'Vietnam expat salary guide 2026 — local VND market rates and USD expat packages by role.',
    hasPart: SALARY_ROLES.map((role) => ({
      '@type': 'WebPage',
      name: `${role.title} Salary in Vietnam 2026`,
      url: `https://www.vietnamlaunchpad.com/salary/${role.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white py-32 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-white/70">2026 Salary Data</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Vietnam Expat
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400">
                Salary Guide 2026
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12">
              Real salary ranges for expats in Vietnam — local VND market rates and
              USD expat packages, with work permit guidance for each role.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: `${SALARY_ROLES.length}`, label: 'Roles Covered' },
                { value: categories.length.toString(), label: 'Job Categories' },
                { value: '2026', label: 'Data Year' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick tools links */}
        <section className="bg-primary-50 border-b border-primary-100 py-5">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="text-primary-700 font-medium">Salary tools:</span>
              <Link
                href="/tools/salary-calculator"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-primary-200 text-primary-700 hover:bg-primary-100 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Take-Home Salary Calculator
              </Link>
              <Link
                href="/tools/work-permit-checker"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-primary-200 text-primary-700 hover:bg-primary-100 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Work Permit Eligibility Checker
              </Link>
            </div>
          </div>
        </section>

        {/* Roles by Category */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            {categories.map((category) => {
              const roles = SALARY_ROLES.filter((r) => r.category === category);
              const colors = categoryColors[category] ?? { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-100' };

              return (
                <div key={category} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-3 mb-8">
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {category}
                    </span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roles.map((role) => (
                      <Link
                        key={role.slug}
                        href={`/salary/${role.slug}`}
                        className="group bg-gray-50 hover:bg-white rounded-3xl p-6 border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <span className="text-3xl">{role.icon}</span>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                            {role.category}
                          </span>
                        </div>

                        <h2 className="text-lg font-display font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-snug">
                          {role.title}
                        </h2>

                        <div className="space-y-3 mt-auto">
                          <div className="flex items-center justify-between py-2.5 px-3 bg-white rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-500 font-medium">Local (VND/mo)</span>
                            <span className="text-sm font-bold text-gray-900">
                              {formatVnd(role.localMonthlyVnd.min)}–{formatVnd(role.localMonthlyVnd.max)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between py-2.5 px-3 bg-primary-50 rounded-xl border border-primary-100">
                            <span className="text-xs text-primary-600 font-medium">Expat (USD/mo)</span>
                            <span className="text-sm font-bold text-primary-700">
                              ${role.expatMonthlyUsd.min.toLocaleString()}–${role.expatMonthlyUsd.max.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-xs text-gray-400">{role.yearsExpRequired}</span>
                          <span className="text-primary-600 font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                            View details
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <p className="text-xs text-gray-400 max-w-3xl mx-auto text-center">
              <strong>Indicative estimates only.</strong> All salary ranges are based on publicly available
              job postings and industry surveys for 2024–2026 and are not derived from a single authoritative
              statistical source. Individual salaries vary significantly by company size, location, language
              skills, experience, and negotiation. For authoritative Vietnam labour market data, see the{' '}
              <a href="https://www.gso.gov.vn" target="_blank" rel="noopener noreferrer" className="underline">
                Vietnam General Statistics Office (gso.gov.vn)
              </a>{' '}
              or{' '}
              <a href="https://www.molisa.gov.vn" target="_blank" rel="noopener noreferrer" className="underline">
                MOLISA (molisa.gov.vn)
              </a>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Ready to work in Vietnam?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Our team handles work permits, TRC applications, and tax compliance —
              so you can focus on your new role.
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
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
