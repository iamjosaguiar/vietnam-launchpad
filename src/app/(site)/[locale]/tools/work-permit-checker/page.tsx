'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/config';

type Result = {
  type: 'exempt' | 'likely-exempt' | 'permit-required' | 'consult';
  headline: string;
  body: string;
  action: string;
  actionHref: string;
  secondaryAction?: string;
  secondaryHref?: string;
  caveats?: string[];
};

type Step = {
  id: string;
  question: string;
  subtext?: string;
  options: { label: string; value: string; next: string | Result }[];
};

const RESULTS: Record<string, Result> = {
  exempt_marriage: {
    type: 'exempt',
    headline: 'Exempt - Marriage TRC Qualifies for Work Permit Exemption',
    body: 'Spouses of Vietnamese citizens holding a marriage-based TRC qualify for a Work Permit Exemption in Vietnam. You do not need a full work permit. Instead, you apply for a Work Permit Exemption Certificate through DOLISA (Department of Labour, Invalids and Social Affairs). This is faster and simpler than a standard work permit and covers both employment and running a business.',
    action: 'Get Your Work Permit Exemption',
    actionHref: '/contact',
    secondaryAction: 'Marriage TRC Service',
    secondaryHref: '/services/marriage-registration',
    caveats: [
      'You must hold a valid marriage-based TRC (not just a tourist or business visa)',
      'Apply for the exemption certificate through DOLISA before starting work',
      'The exemption certificate should be renewed when your TRC is renewed',
    ],
  },
  exempt_short: {
    type: 'exempt',
    headline: 'Likely Exempt from Work Permit',
    body: 'Short-term specialist visits (under 30 days per trip, fewer than 3 trips per year with total stay under 90 days) are generally exempt from work permit requirements under Decree 152/2020.',
    action: 'Confirm Your Eligibility',
    actionHref: '/contact',
    caveats: [
      'You must still hold a valid visa for each entry (Business Visa or e-Visa)',
      'Your employer must keep records of your visits',
      'If your stay pattern changes, reassess immediately',
    ],
  },
  exempt_student: {
    type: 'exempt',
    headline: 'Exempt as Student/Intern',
    body: 'Foreign students completing internships as part of their official academic program are exempt from the work permit requirement. The internship must be connected to your course of study.',
    action: 'Confirm Your Eligibility',
    actionHref: '/contact',
    caveats: [
      'Must be enrolled at a recognized institution',
      'Internship must be formally tied to your academic curriculum',
      'Should have a letter from your institution',
    ],
  },
  exempt_owner: {
    type: 'likely-exempt',
    headline: 'Potentially Exempt as Capital Owner',
    body: "Capital-contributing members and owners of Vietnamese companies may be exempt from work permit requirements if they meet the minimum capital contribution thresholds set by Vietnamese law. The threshold and conditions changed under recent amendments - this is worth confirming.",
    action: 'Book a Free Confirmation Call',
    actionHref: '/contact',
    secondaryAction: 'Company Setup Service',
    secondaryHref: '/services/company-setup',
    caveats: [
      'You must be a registered legal member/owner in company documents',
      'There is a minimum capital contribution threshold',
      "A TRC through the investment route is still strongly recommended for long-term stays",
    ],
  },
  exempt_director: {
    type: 'likely-exempt',
    headline: 'Potentially Exempt as Board Member',
    body: 'Members of the Board of Directors or Members Council of a Vietnamese company may qualify for a work permit exemption. However, you will still need appropriate visa status (TRC recommended for stays over 30 days).',
    action: 'Confirm Your Status',
    actionHref: '/contact',
    secondaryAction: 'TRC Application',
    secondaryHref: '/services/trc-application',
    caveats: [
      'Must be formally appointed and listed in company registration documents',
      'Work permit exemption does not replace visa requirements',
      'TRC is strongly recommended for residence purposes',
    ],
  },
  ict_short: {
    type: 'likely-exempt',
    headline: 'May Qualify for ICT Exemption',
    body: 'Intra-Company Transfer (ICT) specialists coming to Vietnam for under 3 months may qualify for a work permit exemption. You will typically need an exemption letter from your company and relevant work authorization documents.',
    action: 'Check Your Eligibility',
    actionHref: '/contact',
    caveats: [
      'Must be employed by the overseas parent/affiliated company for at least 12 months',
      'Role must be manager, executive, or specialist',
      'Duration limit applies - longer assignments need a full work permit',
    ],
  },
  permit_required: {
    type: 'permit-required',
    headline: 'Work Permit Required',
    body: 'Based on your situation, you will need a Vietnam Work Permit. Most foreign workers employed by Vietnamese companies or working in Vietnam for extended periods need one. The process takes approximately 2 months and requires qualification documents.',
    action: 'Start Work Permit Application',
    actionHref: '/services/work-permit',
    secondaryAction: 'Free Consultation',
    secondaryHref: '/contact',
    caveats: [
      'Valid for 2 years, renewable',
      "You'll need a university degree or 5+ years experience in your field",
      'Your employer must sponsor the application',
    ],
  },
  consult: {
    type: 'consult',
    headline: 'Your Situation Needs Expert Review',
    body: "Your circumstances don't fit a standard category cleanly. Vietnam work permit rules have nuances around sector, role, employer type, and investment status. Our consultants review cases like yours daily - a free 15-minute call can give you a clear answer.",
    action: 'Book Free Consultation',
    actionHref: '/contact',
    secondaryAction: 'View Work Permit Service',
    secondaryHref: '/services/work-permit',
  },
};

const STEPS: Record<string, Step> = {
  start: {
    id: 'start',
    question: 'What best describes why you are working in Vietnam?',
    options: [
      { label: 'Married to a Vietnamese citizen (marriage-based TRC)', value: 'married', next: RESULTS.exempt_marriage },
      { label: 'Employed by a Vietnamese company or organization', value: 'employed', next: 'q_employed' },
      { label: "Transferred here by my overseas employer (intra-company)", value: 'ict', next: 'q_ict' },
      { label: 'Investor, company owner, or director', value: 'owner', next: 'q_owner' },
      { label: 'Short-term specialist, consultant, or trainer', value: 'specialist', next: 'q_specialist' },
      { label: 'Student doing an internship or work placement', value: 'student', next: RESULTS.exempt_student },
      { label: "Something else / not sure", value: 'other', next: RESULTS.consult },
    ],
  },
  q_employed: {
    id: 'q_employed',
    question: 'How long will you be working in Vietnam?',
    options: [
      { label: 'Under 30 days total (one visit)', value: 'short', next: 'q_short_visits' },
      { label: '1-3 months', value: 'medium', next: 'q_employed_qual' },
      { label: '3+ months (or ongoing)', value: 'long', next: 'q_employed_qual' },
    ],
  },
  q_short_visits: {
    id: 'q_short_visits',
    question: 'How many times per year do you visit Vietnam for work?',
    subtext: 'This affects whether the short-term exemption applies.',
    options: [
      { label: 'Fewer than 3 times, total stay under 90 days/year', value: 'rare', next: RESULTS.exempt_short },
      { label: '3 or more times, or total over 90 days/year', value: 'frequent', next: 'q_employed_qual' },
    ],
  },
  q_employed_qual: {
    id: 'q_employed_qual',
    question: 'Do you have a university degree OR at least 5 years of relevant professional experience?',
    subtext: 'This is the minimum qualification requirement for a standard work permit.',
    options: [
      { label: 'Yes, I have a degree or 5+ years experience', value: 'qualified', next: RESULTS.permit_required },
      { label: 'No / not sure', value: 'unqualified', next: RESULTS.consult },
    ],
  },
  q_ict: {
    id: 'q_ict',
    question: 'How long is your assignment in Vietnam?',
    options: [
      { label: 'Under 3 months', value: 'short', next: RESULTS.ict_short },
      { label: '3 months to 3 years', value: 'long', next: RESULTS.permit_required },
    ],
  },
  q_owner: {
    id: 'q_owner',
    question: 'What is your role in the Vietnamese company?',
    options: [
      { label: 'Capital-contributing member / shareholder', value: 'owner', next: RESULTS.exempt_owner },
      { label: 'Board of Directors / Members Council member', value: 'director', next: RESULTS.exempt_director },
      { label: 'Legal representative / General Director', value: 'legal_rep', next: RESULTS.consult },
      { label: "Still setting up the company", value: 'setup', next: RESULTS.exempt_owner },
    ],
  },
  q_specialist: {
    id: 'q_specialist',
    question: 'How long is your engagement in Vietnam?',
    options: [
      { label: 'Under 30 days per visit, fewer than 3 visits per year', value: 'short', next: RESULTS.exempt_short },
      { label: 'Longer or more frequent than that', value: 'long', next: 'q_employed_qual' },
    ],
  },
};

const RESULT_STYLES = {
  exempt: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: '✓', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-700', heading: 'text-emerald-800' },
  'likely-exempt': { bg: 'bg-blue-50', border: 'border-blue-200', icon: '~', iconBg: 'bg-blue-100', iconColor: 'text-blue-700', heading: 'text-blue-800' },
  'permit-required': { bg: 'bg-amber-50', border: 'border-amber-200', icon: '!', iconBg: 'bg-amber-100', iconColor: 'text-amber-700', heading: 'text-amber-800' },
  consult: { bg: 'bg-gray-50', border: 'border-gray-200', icon: '?', iconBg: 'bg-gray-100', iconColor: 'text-gray-700', heading: 'text-gray-800' },
};

export default function WorkPermitCheckerPage() {
  const [history, setHistory] = useState<string[]>(['start']);
  const [result, setResult] = useState<Result | null>(null);

  const current = STEPS[history[history.length - 1]];

  function handleOption(next: string | Result) {
    if (typeof next === 'string') {
      setHistory([...history, next]);
    } else {
      setResult(next);
    }
  }

  function reset() {
    setHistory(['start']);
    setResult(null);
  }

  function goBack() {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setResult(null);
    }
  }

  const progressPct = result ? 100 : Math.min(90, (history.length / 5) * 100);

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-white/70 mb-6">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Free Eligibility Checker
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 leading-tight">
              Do I Need a Vietnam Work Permit?
            </h1>
            <p className="text-xl text-white/60 mb-2">
              Answer 3-5 questions to find out if you need a work permit, or if you qualify for an exemption.
            </p>
            <p className="text-sm text-white/40">
              Based on Decree 152/2020 and 2025 amendments. For binding legal advice, consult our team.
            </p>
          </div>
        </div>
      </section>

      {/* Checker */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Progress</span>
                <span>{result ? 'Complete' : `Step ${history.length}`}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {result ? (
              /* Result */
              <div>
                <div className={`rounded-2xl border-2 ${RESULT_STYLES[result.type].bg} ${RESULT_STYLES[result.type].border} p-6 mb-6`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full ${RESULT_STYLES[result.type].iconBg} flex items-center justify-center text-xl font-bold ${RESULT_STYLES[result.type].iconColor} shrink-0`}>
                      {RESULT_STYLES[result.type].icon}
                    </div>
                    <div>
                      <h2 className={`text-xl font-bold mb-2 ${RESULT_STYLES[result.type].heading}`}>
                        {result.headline}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">{result.body}</p>
                    </div>
                  </div>

                  {result.caveats && result.caveats.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-current border-opacity-10">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Keep in mind</p>
                      <ul className="space-y-1.5">
                        {result.caveats.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-gray-400 mt-0.5">-</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link
                    href={result.actionHref}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
                  >
                    {result.action}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  {result.secondaryAction && result.secondaryHref && (
                    <Link
                      href={result.secondaryHref}
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-all"
                    >
                      {result.secondaryAction}
                    </Link>
                  )}
                </div>

                <button
                  onClick={reset}
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Start over
                </button>
              </div>
            ) : (
              /* Question */
              <div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{current.question}</h2>
                  {current.subtext && (
                    <p className="text-sm text-gray-500 mb-4">{current.subtext}</p>
                  )}
                  <div className="space-y-2 mt-4">
                    {current.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleOption(opt.next)}
                        className="w-full text-left px-5 py-4 rounded-xl border border-gray-200 hover:border-primary-400 hover:bg-primary-50 text-sm text-gray-700 hover:text-primary-700 font-medium transition-all group flex items-center justify-between"
                      >
                        <span>{opt.label}</span>
                        <svg className="w-4 h-4 text-gray-300 group-hover:text-primary-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                {history.length > 1 && (
                  <button
                    onClick={goBack}
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                )}
              </div>
            )}

            {/* Not sure CTA */}
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-slate-900 to-primary-900 p-6 flex flex-col sm:flex-row items-center gap-5 justify-between">
              <div>
                <p className="text-white font-semibold mb-1">Not 100% sure? Talk to an expert.</p>
                <p className="text-white/60 text-sm">Work permit rules are nuanced. Our consultants have seen it all - book a free 15-min call.</p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-primary-700 px-5 py-3 rounded-full text-sm font-bold hover:scale-105 transition-all whitespace-nowrap"
              >
                Free Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key exemption categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Work Permit Exemption Categories</h2>
            <p className="text-gray-500 text-sm mb-8">Under Decree 152/2020 and subsequent amendments, these groups may be exempt from Vietnam work permit requirements:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { cat: 'Spouses of Vietnamese Citizens', desc: 'Foreign nationals married to Vietnamese citizens and holding a marriage-based TRC qualify for a Work Permit Exemption Certificate - no full work permit required' },
                { cat: 'Capital Owners', desc: 'Foreign individuals who are legal capital-contributing members of a Vietnamese company (subject to minimum contribution threshold)' },
                { cat: 'Board Members', desc: 'Members of the Board of Directors or Members Council who are appointed in official company documents' },
                { cat: 'Short-Stay Specialists', desc: 'Specialists visiting Vietnam for under 30 days per trip, with no more than 3 visits and under 90 total days per year' },
                { cat: 'Intra-Company Transfers', desc: 'Managers, executives, and specialists transferred within a multinational for assignments under 3 months' },
                { cat: 'Students/Interns', desc: 'Foreign students completing internships that are formally part of their academic program' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-5">
                  <p className="font-semibold text-gray-900 text-sm mb-1.5">{item.cat}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-6">This is a summary only. Exact conditions, thresholds and documentation requirements apply. Always verify your specific situation with a qualified advisor before proceeding.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
