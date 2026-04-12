import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/config';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Vietnam Business Compliance Calendar 2026 | Tax & Filing Deadlines',
  description:
    'Complete Vietnam business compliance calendar for 2026. Monthly tax deadlines, PIT withholding, VAT, social insurance, and annual filing dates for foreign-owned companies.',
  keywords: [
    'Vietnam tax deadline 2026',
    'Vietnam compliance calendar',
    'Vietnam VAT filing deadline',
    'Vietnam PIT withholding deadline',
    'Vietnam social insurance deadline',
    'Vietnam CIT annual filing',
    'Vietnam business compliance',
    'Vietnam accounting deadlines',
  ],
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/vietnam-compliance-calendar',
  },
};

type ObligationFreq = 'monthly' | 'quarterly' | 'annual' | 'one-off';
type ObligationTag = 'tax' | 'hr' | 'company' | 'pit';

interface Obligation {
  deadline: string;
  title: string;
  detail: string;
  freq: ObligationFreq;
  tags: ObligationTag[];
}

const MONTHS = [
  {
    month: 'January',
    obligations: [
      {
        deadline: '20 Jan',
        title: 'Monthly VAT Declaration - December',
        detail: 'Submit VAT return for December (monthly filers). Payment due same day.',
        freq: 'monthly',
        tags: ['tax'],
      },
      {
        deadline: '20 Jan',
        title: 'Monthly PIT Withholding - December',
        detail: 'Declare and pay PIT withheld from employee salaries paid in December.',
        freq: 'monthly',
        tags: ['pit'],
      },
      {
        deadline: '31 Jan',
        title: 'Business License Tax (Patente)',
        detail: 'Annual business registration tax due. Amount depends on charter capital (VND 3M for capital over 10B VND; VND 2M for 5B-10B; VND 1.5M under 5B).',
        freq: 'annual',
        tags: ['company', 'tax'],
      },
      {
        deadline: '31 Jan',
        title: 'Social Insurance - December Payment',
        detail: 'Final monthly SI/HI/UI contribution payment for December employees.',
        freq: 'monthly',
        tags: ['hr'],
      },
    ] as Obligation[],
  },
  {
    month: 'February',
    obligations: [
      {
        deadline: '20 Feb',
        title: 'Monthly VAT Declaration - January',
        detail: 'VAT return for January (monthly filers).',
        freq: 'monthly',
        tags: ['tax'],
      },
      {
        deadline: '20 Feb',
        title: 'Monthly PIT Withholding - January',
        detail: 'Declare and pay PIT withheld for January.',
        freq: 'monthly',
        tags: ['pit'],
      },
      {
        deadline: '28 Feb',
        title: 'Social Insurance - January Payment',
        detail: 'Monthly SI/HI/UI contributions for January.',
        freq: 'monthly',
        tags: ['hr'],
      },
    ] as Obligation[],
  },
  {
    month: 'March',
    obligations: [
      {
        deadline: '20 Mar',
        title: 'Monthly VAT Declaration - February',
        detail: 'VAT return for February (monthly filers).',
        freq: 'monthly',
        tags: ['tax'],
      },
      {
        deadline: '20 Mar',
        title: 'Monthly PIT Withholding - February',
        detail: 'Declare and pay PIT withheld for February.',
        freq: 'monthly',
        tags: ['pit'],
      },
      {
        deadline: '31 Mar',
        title: 'Annual PIT Finalization (Year-End)',
        detail: 'Employers must finalize and submit annual PIT returns for employees who authorize the company to finalize on their behalf. Individuals who self-finalize have the same deadline.',
        freq: 'annual',
        tags: ['pit'],
      },
      {
        deadline: '31 Mar',
        title: 'Annual Corporate Income Tax (CIT) Finalization',
        detail: 'Submit annual CIT return for the prior fiscal year. Provisional CIT payments (quarterly) are reconciled. Any shortfall is payable by this date.',
        freq: 'annual',
        tags: ['tax'],
      },
      {
        deadline: '31 Mar',
        title: 'Audited Financial Statements (FDI companies)',
        detail: 'Foreign-invested companies must submit audited financial statements to the tax authority within 90 days of fiscal year end. For a standard 31 December year-end, this falls on 31 March.',
        freq: 'annual',
        tags: ['company'],
      },
      {
        deadline: '31 Mar',
        title: 'Social Insurance - February Payment',
        detail: 'Monthly SI/HI/UI contributions for February.',
        freq: 'monthly',
        tags: ['hr'],
      },
    ] as Obligation[],
  },
  {
    month: 'April',
    obligations: [
      {
        deadline: '20 Apr',
        title: 'Monthly VAT Declaration - March',
        detail: 'VAT return for March (monthly filers). Q1 VAT due same date for quarterly filers.',
        freq: 'monthly',
        tags: ['tax'],
      },
      {
        deadline: '20 Apr',
        title: 'Q1 VAT Declaration (Quarterly filers)',
        detail: 'Businesses qualifying as small taxpayers file quarterly. Q1 VAT due by 20 April.',
        freq: 'quarterly',
        tags: ['tax'],
      },
      {
        deadline: '20 Apr',
        title: 'Q1 PIT Withholding (Quarterly filers)',
        detail: 'Businesses that qualify for quarterly PIT filing must submit Q1 PIT by 20 April.',
        freq: 'quarterly',
        tags: ['pit'],
      },
      {
        deadline: '30 Apr',
        title: 'Q1 CIT Provisional Payment',
        detail: 'Quarterly provisional CIT payment for Q1. Based on estimated annual taxable profit.',
        freq: 'quarterly',
        tags: ['tax'],
      },
      {
        deadline: '31 Mar',
        title: 'Audited Financial Statements (FDI companies)',
        detail: 'Foreign-invested companies must submit audited financial statements within 90 days of fiscal year end. For a 31 Dec fiscal year end, the statutory deadline is 31 March. This obligation is listed in April as a reminder to confirm submission — if you missed the March deadline, act immediately.',
        freq: 'annual',
        tags: ['company'],
      },
      {
        deadline: '30 Apr',
        title: 'Social Insurance - March Payment',
        detail: 'Monthly SI/HI/UI contributions for March.',
        freq: 'monthly',
        tags: ['hr'],
      },
    ] as Obligation[],
  },
  {
    month: 'May - June',
    obligations: [
      {
        deadline: '20 May / 20 Jun',
        title: 'Monthly VAT & PIT Withholding',
        detail: 'VAT and PIT withholding declarations for April and May respectively (monthly filers). Due by the 20th of the following month.',
        freq: 'monthly',
        tags: ['tax', 'pit'],
      },
      {
        deadline: '31 May / 30 Jun',
        title: 'Monthly Social Insurance',
        detail: 'SI/HI/UI contributions for April and May respectively.',
        freq: 'monthly',
        tags: ['hr'],
      },
    ] as Obligation[],
  },
  {
    month: 'July',
    obligations: [
      {
        deadline: '20 Jul',
        title: 'Monthly VAT Declaration - June / Q2 VAT (Quarterly filers)',
        detail: 'VAT return for June (monthly) or Q2 (quarterly filers). Q2 PIT withholding due same date for quarterly filers.',
        freq: 'monthly',
        tags: ['tax'],
      },
      {
        deadline: '31 Jul',
        title: 'Q2 CIT Provisional Payment',
        detail: 'Quarterly provisional CIT payment for Q2.',
        freq: 'quarterly',
        tags: ['tax'],
      },
      {
        deadline: '31 Jul',
        title: 'Social Insurance - June Payment',
        detail: 'Monthly SI/HI/UI contributions for June.',
        freq: 'monthly',
        tags: ['hr'],
      },
    ] as Obligation[],
  },
  {
    month: 'August - September',
    obligations: [
      {
        deadline: '20 Aug / 20 Sep',
        title: 'Monthly VAT & PIT Withholding',
        detail: 'Monthly declarations for July and August. Due 20th of the following month.',
        freq: 'monthly',
        tags: ['tax', 'pit'],
      },
      {
        deadline: '31 Aug / 30 Sep',
        title: 'Monthly Social Insurance',
        detail: 'SI/HI/UI contributions for July and August.',
        freq: 'monthly',
        tags: ['hr'],
      },
    ] as Obligation[],
  },
  {
    month: 'October',
    obligations: [
      {
        deadline: '20 Oct',
        title: 'Monthly VAT Declaration - September / Q3 VAT (Quarterly filers)',
        detail: 'VAT return for September (monthly) or Q3 (quarterly filers). Q3 PIT withholding due same date for quarterly filers.',
        freq: 'monthly',
        tags: ['tax'],
      },
      {
        deadline: '31 Oct',
        title: 'Q3 CIT Provisional Payment',
        detail: 'Quarterly provisional CIT payment for Q3.',
        freq: 'quarterly',
        tags: ['tax'],
      },
      {
        deadline: '31 Oct',
        title: 'Social Insurance - September Payment',
        detail: 'Monthly SI/HI/UI contributions for September.',
        freq: 'monthly',
        tags: ['hr'],
      },
    ] as Obligation[],
  },
  {
    month: 'November - December',
    obligations: [
      {
        deadline: '20 Nov / 20 Dec',
        title: 'Monthly VAT & PIT Withholding',
        detail: 'Monthly declarations for October and November. Due 20th of the following month.',
        freq: 'monthly',
        tags: ['tax', 'pit'],
      },
      {
        deadline: '30 Nov / 31 Dec',
        title: 'Monthly Social Insurance',
        detail: 'SI/HI/UI contributions for October and November.',
        freq: 'monthly',
        tags: ['hr'],
      },
      {
        deadline: '31 Dec',
        title: 'Q4 CIT Provisional Payment',
        detail: 'Quarterly provisional CIT payment for Q4. Note: at least 80% of the annual CIT liability must be covered by provisional payments; a penalty applies on any shortfall.',
        freq: 'quarterly',
        tags: ['tax'],
      },
    ] as Obligation[],
  },
];

const TAG_STYLES: Record<ObligationTag, string> = {
  tax: 'bg-blue-100 text-blue-700',
  hr: 'bg-purple-100 text-purple-700',
  company: 'bg-amber-100 text-amber-700',
  pit: 'bg-emerald-100 text-emerald-700',
};

const TAG_LABELS: Record<ObligationTag, string> = {
  tax: 'VAT / CIT',
  hr: 'HR / SI',
  company: 'Company',
  pit: 'PIT',
};

const FREQ_STYLES: Record<ObligationFreq, string> = {
  monthly: 'bg-gray-100 text-gray-600',
  quarterly: 'bg-indigo-50 text-indigo-600',
  annual: 'bg-rose-50 text-rose-600',
  'one-off': 'bg-orange-50 text-orange-600',
};

const complianceCalendarSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Vietnam Compliance Calendar 2026',
  url: 'https://www.vietnamlaunchpad.com/vietnam-compliance-calendar',
  description:
    'Monthly compliance deadlines for businesses operating in Vietnam: VAT, PIT, CIT, social insurance, and annual filings.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vietnamlaunchpad.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vietnam Compliance Calendar',
        item: 'https://www.vietnamlaunchpad.com/vietnam-compliance-calendar',
      },
    ],
  },
};

export default function ComplianceCalendarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(complianceCalendarSchema) }}
      />
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-white/70 mb-6">
              <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Free Resource
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 leading-tight">
              Vietnam Business<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-primary-400">
                Compliance Calendar 2026
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-6">
              Every tax, HR, and filing deadline your Vietnam business needs to hit. Updated for 2026.
            </p>

            {/* Legend */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(TAG_LABELS) as ObligationTag[]).map((tag) => (
                <span key={tag} className={`px-3 py-1 rounded-full text-xs font-semibold ${TAG_STYLES[tag]}`}>
                  {TAG_LABELS[tag]}
                </span>
              ))}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">Annual</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Quarterly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="bg-amber-50 border-b border-amber-100">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> Monthly filers are businesses with prior year revenue over 50B VND or FDI companies. Quarterly filers are smaller businesses. Deadlines that fall on weekends or public holidays shift to the next working day. All times are Vietnam local time (ICT, UTC+7).
          </p>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {MONTHS.map((m) => (
              <AnimateOnScroll key={m.month}>
                <div>
                  <h2 className="text-xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    {m.month}
                  </h2>
                  <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-50">
                    {m.obligations.map((ob, i) => (
                      <div key={i} className={`flex gap-4 p-5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <div className="shrink-0 w-20 text-center">
                          <span className="text-sm font-bold text-primary-700 bg-primary-50 px-2 py-1 rounded-lg block">
                            {ob.deadline}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-sm font-semibold text-gray-900">{ob.title}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${FREQ_STYLES[ob.freq]}`}>
                              {ob.freq}
                            </span>
                            {ob.tags.map((tag) => (
                              <span key={tag} className={`px-2 py-0.5 rounded-full text-xs font-medium ${TAG_STYLES[tag]}`}>
                                {TAG_LABELS[tag]}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed">{ob.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing monthly obligations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Ongoing Monthly Obligations</h2>
              <p className="text-gray-500 text-sm mb-6">These apply every month for most businesses in Vietnam.</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'VAT Declaration', deadline: '20th of following month', desc: 'Submit VAT return and pay any balance due. Monthly filers: 5B+ VND revenue. Quarterly: smaller businesses.', tag: 'tax' as ObligationTag },
                { title: 'PIT Withholding', deadline: '20th of following month', desc: 'Declare and remit PIT withheld from employee salaries. Quarterly option available for qualifying small businesses.', tag: 'pit' as ObligationTag },
                { title: 'Social Insurance', deadline: 'Last day of month', desc: 'Pay SI (17.5% employer + 8% employee), HI (3% + 1.5%), and UI (1% + 1%) for each enrolled employee.', tag: 'hr' as ObligationTag },
                { title: 'Provisional CIT', deadline: 'Last day of Q+1', desc: 'Quarterly provisional corporate income tax payment. Must cover 80%+ of annual CIT to avoid penalties.', tag: 'tax' as ObligationTag },
                { title: 'Payroll Records', deadline: 'Ongoing', desc: 'Maintain monthly payroll records, labor contracts, and timesheets. Required for audit and SI compliance.', tag: 'hr' as ObligationTag },
                { title: 'Invoice Management', deadline: 'Ongoing', desc: 'Issue and receive VAT invoices (e-invoices mandatory for most businesses). Report issued invoices monthly.', tag: 'tax' as ObligationTag },
              ].map((item, i) => (
                <AnimateOnScroll key={i} animation="fade-up">
                  <div className="bg-white rounded-xl border border-gray-100 p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${TAG_STYLES[item.tag]}`}>
                        {TAG_LABELS[item.tag]}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-primary-700 mb-2">Due: {item.deadline}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimateOnScroll animation="scale" className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Let Us Handle Your Compliance
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Never miss a deadline. Our accounting team files your monthly VAT, PIT, and social insurance - and handles your annual CIT finalization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-full text-base font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services/accounting-bookkeeping"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/20 transition-all duration-300"
              >
                Accounting Service
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}
