'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/config';

// Vietnam PIT brackets (monthly VND, resident) — 5-bracket system per PIT Law 109/2025/QH15
// New brackets apply from 1 January 2026 (employer provisional withholding); full legal effect 1 July 2026
const PIT_BRACKETS = [
  { limit: 10_000_000, rate: 0.05 },
  { limit: 30_000_000, rate: 0.10 },
  { limit: 60_000_000, rate: 0.20 },
  { limit: 100_000_000, rate: 0.30 },
  { limit: Infinity, rate: 0.35 },
];

const BASIC_SALARY = 2_340_000; // VND/month (July 2024 onwards)
const SI_CAP = 20 * BASIC_SALARY; // 46,800,000 VND - SI/HI cap
const REGIONAL_MIN_WAGE = 4_960_000; // Zone 1 minimum wage
const UI_CAP = 20 * REGIONAL_MIN_WAGE; // 99,200,000 VND - UI cap
const PERSONAL_DEDUCTION = 15_500_000; // VND/month — updated per PIT Law 109/2025, effective 1 Jan 2026
const DEPENDENT_DEDUCTION = 6_200_000; // VND/month per dependent — updated per PIT Law 109/2025
const USD_TO_VND = 25_450; // approximate - user can see this note

function calcPIT(taxable: number): { total: number; breakdown: { rate: number; base: number; tax: number }[] } {
  const breakdown: { rate: number; base: number; tax: number }[] = [];
  let remaining = Math.max(0, taxable);
  let prev = 0;
  let total = 0;
  for (const b of PIT_BRACKETS) {
    if (remaining <= 0) break;
    const band = b.limit === Infinity ? remaining : b.limit - prev;
    const taxable = Math.min(remaining, band);
    const tax = taxable * b.rate;
    if (taxable > 0) breakdown.push({ rate: b.rate, base: taxable, tax });
    total += tax;
    remaining -= taxable;
    prev = b.limit;
  }
  return { total, breakdown };
}

function fmt(n: number, currency = '₫'): string {
  return `${new Intl.NumberFormat('en-US').format(Math.round(n))} ${currency}`;
}

function pct(n: number, total: number): string {
  if (total === 0) return '0%';
  return `${((n / total) * 100).toFixed(1)}%`;
}

export default function SalaryCalculatorPage() {
  const [grossInput, setGrossInput] = useState('3000');
  const [currency, setCurrency] = useState<'USD' | 'VND'>('USD');
  const [residency, setResidency] = useState<'resident' | 'non-resident'>('resident');
  const [dependents, setDependents] = useState(0);

  const result = useMemo(() => {
    const raw = parseFloat(grossInput.replace(/,/g, '')) || 0;
    const grossVND = currency === 'USD' ? raw * USD_TO_VND : raw;

    if (!grossVND) return null;

    if (residency === 'non-resident') {
      const pit = grossVND * 0.20;
      return {
        gross: grossVND,
        si: 0, hi: 0, ui: 0, totalSI: 0,
        personalDed: 0, dependentDed: 0,
        taxableIncome: grossVND,
        pit, pitBreakdown: [{ rate: 0.20, base: grossVND, tax: pit }],
        net: grossVND - pit,
        effectiveRate: 0.20,
      };
    }

    // Resident
    const siBase = Math.min(grossVND, SI_CAP);
    const uiBase = Math.min(grossVND, UI_CAP);
    const si = siBase * 0.08;
    const hi = siBase * 0.015;
    const ui = uiBase * 0.01;
    const totalSI = si + hi + ui;

    const personalDed = PERSONAL_DEDUCTION;
    const dependentDed = DEPENDENT_DEDUCTION * dependents;
    const taxableIncome = Math.max(0, grossVND - totalSI - personalDed - dependentDed);

    const { total: pit, breakdown: pitBreakdown } = calcPIT(taxableIncome);
    const net = grossVND - totalSI - pit;
    const effectiveRate = grossVND > 0 ? (totalSI + pit) / grossVND : 0;

    return { gross: grossVND, si, hi, ui, totalSI, personalDed, dependentDed, taxableIncome, pit, pitBreakdown, net, effectiveRate };
  }, [grossInput, currency, residency, dependents]);

  const usdGross = result ? (currency === 'USD' ? parseFloat(grossInput) : result.gross / USD_TO_VND) : 0;

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-white/70 mb-6">
              <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Free Tool
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 leading-tight">
              Vietnam Salary Calculator
            </h1>
            <p className="text-xl text-white/60 mb-2">
              Calculate your gross-to-net salary, PIT (personal income tax), and social insurance deductions in Vietnam.
            </p>
            <p className="text-sm text-white/40">
              Updated for 2026: new 5-bracket PIT system + revised deductions (PIT Law 109/2025). Basic salary: 2,340,000 VND/month. For individual advice, consult our team.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Inputs */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Your Details</h2>

              {/* Residency */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tax Residency Status</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['resident', 'non-resident'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setResidency(r)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                        residency === r
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      {r === 'resident' ? 'Tax Resident' : 'Non-Resident'}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {residency === 'resident'
                    ? 'Present in Vietnam 183+ days/year. Progressive PIT with deductions.'
                    : 'Under 183 days/year. Flat 20% PIT on gross. No deductions.'}
                </p>
              </div>

              {/* Gross Salary */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Gross Monthly Salary</label>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                      {currency === 'USD' ? '$' : '₫'}
                    </span>
                    <input
                      type="number"
                      value={grossInput}
                      onChange={(e) => setGrossInput(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                      placeholder="3000"
                      min="0"
                    />
                  </div>
                  <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1">
                    {(['USD', 'VND'] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          currency === c ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                {currency === 'USD' && result && (
                  <p className="text-xs text-gray-400 mt-1">
                    = {fmt(result.gross)} (at ~{USD_TO_VND.toLocaleString()} VND/USD)
                  </p>
                )}
              </div>

              {/* Dependents (resident only) */}
              {residency === 'resident' && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registered Dependents
                  </label>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        onClick={() => setDependents(n)}
                        className={`w-10 h-10 rounded-xl text-sm font-semibold border transition-all ${
                          dependents === n
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    6,200,000 ₫/month deduction per registered dependent (spouse, children, etc.)
                  </p>
                </div>
              )}

              {/* Quick reference */}
              <div className="rounded-xl bg-white border border-gray-100 p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Reference</p>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <div className="flex justify-between"><span>Personal deduction</span><span className="font-medium">15,500,000 ₫/mo</span></div>
                  <div className="flex justify-between"><span>Per dependent</span><span className="font-medium">6,200,000 ₫/mo</span></div>
                  <div className="flex justify-between"><span>SI contribution (employee)</span><span className="font-medium">8% (capped at 46.8M ₫)</span></div>
                  <div className="flex justify-between"><span>HI contribution</span><span className="font-medium">1.5% (same cap)</span></div>
                  <div className="flex justify-between"><span>UI contribution</span><span className="font-medium">1% (capped at 99.2M ₫)</span></div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              {!result ? (
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-10 text-center text-gray-400">
                  Enter a salary to see your breakdown
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Net salary highlight */}
                  <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-white">
                    <p className="text-sm text-white/70 mb-1">Estimated Net Monthly Salary</p>
                    <p className="text-4xl font-bold">{fmt(result.net)}</p>
                    {currency === 'USD' && (
                      <p className="text-white/60 text-sm mt-1">
                        ~${Math.round(result.net / USD_TO_VND).toLocaleString()} USD
                      </p>
                    )}
                    <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-sm">
                      <span className="text-white/70">Total deductions</span>
                      <span className="font-semibold">{pct(result.totalSI + result.pit, result.gross)} of gross</span>
                    </div>
                  </div>

                  {/* Deductions breakdown */}
                  <div className="rounded-2xl border border-gray-100 bg-white divide-y divide-gray-50">
                    <div className="px-5 py-3 bg-gray-50 rounded-t-2xl">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Monthly Breakdown</p>
                    </div>

                    {/* Gross */}
                    <div className="flex justify-between items-center px-5 py-3">
                      <span className="text-sm text-gray-600">Gross Salary</span>
                      <span className="font-semibold text-gray-900">{fmt(result.gross)}</span>
                    </div>

                    {residency === 'resident' && (
                      <>
                        <div className="flex justify-between items-center px-5 py-3">
                          <span className="text-sm text-gray-600">Social Insurance (8%)</span>
                          <span className="text-sm font-medium text-red-600">- {fmt(result.si)}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3">
                          <span className="text-sm text-gray-600">Health Insurance (1.5%)</span>
                          <span className="text-sm font-medium text-red-600">- {fmt(result.hi)}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3">
                          <span className="text-sm text-gray-600">Unemployment Insurance (1%)</span>
                          <span className="text-sm font-medium text-red-600">- {fmt(result.ui)}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3 bg-red-50/50">
                          <span className="text-sm font-medium text-gray-700">Total SI Deductions</span>
                          <span className="font-semibold text-red-600">- {fmt(result.totalSI)}</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-3">
                          <span className="text-sm text-gray-500">Personal Deduction</span>
                          <span className="text-sm text-emerald-600">- {fmt(result.personalDed)}</span>
                        </div>
                        {result.dependentDed > 0 && (
                          <div className="flex justify-between items-center px-5 py-3">
                            <span className="text-sm text-gray-500">Dependent Deduction ({dependents}x)</span>
                            <span className="text-sm text-emerald-600">- {fmt(result.dependentDed)}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center px-5 py-3">
                          <span className="text-sm text-gray-600">PIT Taxable Income</span>
                          <span className="text-sm font-medium text-gray-900">{fmt(result.taxableIncome)}</span>
                        </div>
                      </>
                    )}

                    {/* PIT breakdown */}
                    {result.pitBreakdown.map((b, i) => (
                      <div key={i} className="flex justify-between items-center px-5 py-2.5">
                        <span className="text-sm text-gray-500">
                          PIT at {(b.rate * 100).toFixed(0)}%
                          <span className="text-xs ml-1 text-gray-400">(on {fmt(b.base)})</span>
                        </span>
                        <span className="text-sm font-medium text-red-600">- {fmt(b.tax)}</span>
                      </div>
                    ))}

                    <div className="flex justify-between items-center px-5 py-3 bg-red-50/50">
                      <span className="text-sm font-medium text-gray-700">Total PIT</span>
                      <span className="font-semibold text-red-600">- {fmt(result.pit)}</span>
                    </div>

                    <div className="flex justify-between items-center px-5 py-4 bg-primary-50 rounded-b-2xl">
                      <span className="font-semibold text-gray-900">Net Monthly Take-Home</span>
                      <span className="text-xl font-bold text-primary-700">{fmt(result.net)}</span>
                    </div>
                  </div>

                  {/* Annual */}
                  <div className="rounded-xl border border-gray-100 bg-white px-5 py-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Annual Equivalent</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-base font-bold text-gray-900">{fmt(result.gross * 12)}</div>
                        <div className="text-xs text-gray-400">Gross</div>
                      </div>
                      <div>
                        <div className="text-base font-bold text-red-600">- {fmt((result.totalSI + result.pit) * 12)}</div>
                        <div className="text-xs text-gray-400">Deductions</div>
                      </div>
                      <div>
                        <div className="text-base font-bold text-primary-700">{fmt(result.net * 12)}</div>
                        <div className="text-xs text-gray-400">Net</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer + CTA */}
          <div className="max-w-5xl mx-auto mt-10">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4 text-sm text-amber-800 mb-8">
              <strong>Disclaimer:</strong> This calculator provides indicative estimates only. It does not account for additional income, investment income, PIT finalization adjustments, specific exempt income categories, or employer PIT obligations. USD conversion uses an approximate rate. For accurate PIT compliance, consult a qualified tax advisor.
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-primary-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Need help with PIT filing or payroll?</h3>
                <p className="text-white/60 text-sm">Our team handles monthly PIT withholding, annual finalization, and social insurance registration.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/services/tax-filing"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-5 py-3 rounded-full text-sm font-bold hover:scale-105 transition-all whitespace-nowrap"
                >
                  PIT Filing Service
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all whitespace-nowrap"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIT Rate Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Vietnam PIT Rate Table (2024)</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Monthly Taxable Income (VND)</th>
                    <th className="px-4 py-3 text-right font-semibold">Tax Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Up to 5,000,000', '5%'],
                    ['5,000,001 - 10,000,000', '10%'],
                    ['10,000,001 - 18,000,000', '15%'],
                    ['18,000,001 - 32,000,000', '20%'],
                    ['32,000,001 - 52,000,000', '25%'],
                    ['52,000,001 - 80,000,000', '30%'],
                    ['Above 80,000,000', '35%'],
                  ].map(([range, rate], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-gray-700">{range}</td>
                      <td className="px-4 py-3 text-right font-semibold text-primary-700">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">Source: Law on Personal Income Tax No. 04/2007/QH12 (as amended). Rates apply to employment income for tax residents. Non-residents: flat 20%.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
