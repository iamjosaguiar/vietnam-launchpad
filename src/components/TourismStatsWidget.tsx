import { getVietnamTourismTrend, TourismDataPoint } from '@/lib/open-data';

// ─── Static origin-market data ───────────────────────────────────────────────
// The 17.5M total arrivals figure is VNAT's published 2024 annual result.
// Country-level breakdown figures are approximate, based on VNAT reported top
// source markets for 2024. Individual country totals are rounded estimates
// and should be treated as indicative order-of-magnitude figures only.
// Source: Vietnam National Administration of Tourism (VNAT).

const ORIGIN_MARKETS = [
  { country: 'South Korea', arrivals: 4.0 },
  { country: 'China', arrivals: 3.6 },
  { country: 'Taiwan', arrivals: 1.2 },
  { country: 'Malaysia', arrivals: 1.1 },
  { country: 'USA', arrivals: 0.9 },
  { country: 'Japan', arrivals: 0.8 },
  { country: 'Thailand', arrivals: 0.6 },
  { country: 'Australia', arrivals: 0.4 },
  { country: 'India', arrivals: 0.4 },
  { country: 'UK', arrivals: 0.3 },
  { country: 'Other', arrivals: 4.2 },
];

const TOTAL_ARRIVALS_M = 17.5;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtMillions(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  return n.toLocaleString();
}

function fmtBillions(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  return `$${(n / 1_000_000).toFixed(0)}M`;
}

function yoyChange(current: number, previous: number): string {
  const pct = ((current - previous) / previous) * 100;
  const sign = pct >= 0 ? '+' : '';
  return `${sign}${pct.toFixed(1)}%`;
}

// ─── Trend bar row ────────────────────────────────────────────────────────────

function TrendBar({ point, maxArrivals }: { point: TourismDataPoint; maxArrivals: number }) {
  const pct = point.arrivals && maxArrivals > 0 ? Math.round((point.arrivals / maxArrivals) * 100) : 0;
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="text-xs text-muted w-10 shrink-0 text-right">{point.year}</span>
      <div className="flex-1 bg-sand rounded-full h-4 overflow-hidden">
        <div
          className="h-full bg-navy rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-ink w-16 shrink-0">
        {point.arrivals ? fmtMillions(point.arrivals) : '-'}
      </span>
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface TourismStatsWidgetProps {
  compact?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default async function TourismStatsWidget({ compact = false }: TourismStatsWidgetProps) {
  const trend = await getVietnamTourismTrend();

  const latest = trend[0] ?? null;
  const previous = trend[1] ?? null;

  const latestYear = latest?.year ?? 'latest';
  const latestArrivals = latest?.arrivals ?? null;
  const receiptsVal = latest?.receiptsUsd ?? null;

  const maxArrivals = trend.reduce((m, p) => (p.arrivals && p.arrivals > m ? p.arrivals : m), 0);

  // Top 5 markets by arrivals share
  const topMarkets = ORIGIN_MARKETS.slice(0, 5);

  if (compact) {
    return (
      <div className="rounded-card border border-hairline bg-white p-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <h3 className="font-display font-semibold text-ink text-base">International Tourism</h3>
          <span className="text-xs text-muted">VNAT 2024 data</span>
        </div>

        {/* Headline stat */}
        <div className="mb-4">
          <div className="text-3xl font-display font-semibold text-ink">
            {latestArrivals ? fmtMillions(latestArrivals) : '17.5M'}
          </div>
          <div className="text-sm text-muted mt-0.5">
            International arrivals ({latestYear})
            {latestArrivals && previous?.arrivals && (
              <span className="ml-2 text-success font-bold">
                {yoyChange(latestArrivals, previous.arrivals)} YoY
              </span>
            )}
          </div>
        </div>

        {/* Top 5 source markets */}
        <div>
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-2">Top Source Markets</p>
          {topMarkets.map((m) => {
            const pct = Math.round((m.arrivals / TOTAL_ARRIVALS_M) * 100);
            return (
              <div key={m.country} className="flex items-center gap-2 py-1">
                <span className="text-xs text-ink w-24 shrink-0">{m.country}</span>
                <div className="flex-1 bg-sand rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full bg-navy rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-ink w-10 text-right shrink-0">~{m.arrivals}M</span>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-muted mt-4">
          Total arrivals: Source: VNAT (published 2024 annual figure). Country breakdown: approximate figures based on VNAT reported top markets. Individual country totals are rounded estimates.
        </p>
      </div>
    );
  }

  // ── Full mode ──────────────────────────────────────────────────────────────
  return (
    <div className="rounded-card border border-hairline bg-white overflow-hidden">
      {/* Widget header */}
      <div className="px-6 py-4 bg-navy-deep flex flex-wrap items-center justify-between gap-2">
        <span className="text-white font-semibold text-sm">Vietnam Tourism Statistics</span>
        <span className="text-[#E6EDF4] text-xs">World Bank + VNAT data</span>
      </div>

      <div className="p-6 space-y-8">

        {/* Headline KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-sand border border-hairline p-5">
            <p className="text-xs font-bold text-muted mb-1">International Arrivals ({latestYear})</p>
            <p className="text-3xl font-display font-semibold text-navy">
              {latestArrivals ? fmtMillions(latestArrivals) : '17.5M'}
            </p>
            {latestArrivals && previous?.arrivals && (
              <p className="text-sm text-navy mt-1">
                {yoyChange(latestArrivals, previous.arrivals)} vs {previous.year}
              </p>
            )}
            <p className="text-xs text-muted mt-1">World Bank ST.INT.ARVL</p>
          </div>

          <div className="rounded-xl bg-success-soft border border-hairline p-5">
            <p className="text-xs font-bold text-success mb-1">
              Tourism Receipts ({latestYear})
            </p>
            <p className="text-3xl font-display font-semibold text-success">
              {receiptsVal ? fmtBillions(receiptsVal) : '-'}
            </p>
            <p className="text-xs text-success mt-1">World Bank ST.INT.RCPT.CD</p>
            <p className="text-sm text-success mt-1">USD total receipts</p>
          </div>
        </div>

        {/* Arrivals trend bars */}
        {trend.length > 0 && (
          <div>
            <h3 className="text-base font-display font-semibold text-ink mb-3">Arrivals Trend (World Bank)</h3>
            <div className="space-y-0.5">
              {trend.map((pt) => (
                <TrendBar key={pt.year} point={pt} maxArrivals={maxArrivals} />
              ))}
            </div>
            <p className="text-xs text-muted mt-2">Source: World Bank Open Data (ST.INT.ARVL)</p>
          </div>
        )}

        {/* Origin market breakdown */}
        <div>
          <h3 className="text-base font-display font-semibold text-ink mb-3">
            International Arrivals by Origin Market (2024)
          </h3>
          <div className="rounded-xl border border-hairline overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-sand border-b border-hairline">
                  <th className="text-left px-4 py-2.5 text-xs font-bold text-muted uppercase tracking-wide">Country</th>
                  <th className="px-4 py-2.5 text-xs font-bold text-muted uppercase tracking-wide text-right">Arrivals</th>
                  <th className="px-4 py-2.5 text-xs font-bold text-muted uppercase tracking-wide text-right hidden sm:table-cell">Share</th>
                  <th className="hidden sm:table-cell px-4 py-2.5 w-36"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {ORIGIN_MARKETS.map((m, i) => {
                  const pct = Math.round((m.arrivals / TOTAL_ARRIVALS_M) * 100);
                  const isOther = m.country === 'Other';
                  return (
                    <tr key={m.country} className={i % 2 === 0 ? 'bg-white' : 'bg-paper'}>
                      <td className="px-4 py-2.5 font-medium text-ink text-sm">
                        {isOther ? <span className="text-muted">{m.country}</span> : m.country}
                      </td>
                      <td className="px-4 py-2.5 text-right font-semibold text-ink">~{m.arrivals}M</td>
                      <td className="px-4 py-2.5 text-right text-muted hidden sm:table-cell">{pct}%</td>
                      <td className="hidden sm:table-cell px-4 py-2.5">
                        <div className="w-full bg-sand rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${isOther ? 'bg-stone-300' : 'bg-navy'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {/* Total row */}
                <tr className="bg-gold-soft border-t-2 border-gold-line">
                  <td className="px-4 py-2.5 font-bold text-ink">Total</td>
                  <td className="px-4 py-2.5 text-right font-bold text-ink">~{TOTAL_ARRIVALS_M}M</td>
                  <td className="px-4 py-2.5 text-right font-bold text-ink hidden sm:table-cell">100%</td>
                  <td className="hidden sm:table-cell"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">
            Source: Vietnam National Administration of Tourism (VNAT). Total 17.5M arrivals is VNAT&apos;s published 2024 annual figure. Country-level breakdown figures are approximate estimates based on VNAT reported top source markets - individual country totals are rounded and indicative.
          </p>
        </div>

      </div>
    </div>
  );
}
