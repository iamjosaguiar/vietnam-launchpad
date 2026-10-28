import { getVietnamEconomicData } from '@/lib/open-data';

function StatCard({
  label,
  value,
  sub,
  color = 'blue',
}: {
  label: string;
  value: string;
  sub?: string;
  color?: 'blue' | 'green' | 'amber' | 'purple';
}) {
  const colors = {
    blue: 'bg-primary-50 text-navy border-primary-100',
    green: 'bg-success-soft text-success border-success',
    amber: 'bg-gold-soft text-ink border-gold-line',
    purple: 'bg-sand text-ink border-hairline',
  };
  return (
    <div className={`rounded-xl border p-4 ${colors[color]}`}>
      <div className="text-xs font-medium mb-1 opacity-90">{label}</div>
      <div className="text-xl font-bold">{value}</div>
      {sub && <div className="text-xs opacity-90 mt-0.5">{sub}</div>}
    </div>
  );
}

function fmt(n: number, decimals = 1): string {
  return n.toFixed(decimals);
}

function fmtBillions(n: number): string {
  if (n >= 1_000_000_000_000) return `$${(n / 1_000_000_000_000).toFixed(1)}T`;
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(0)}B`;
  return `$${n.toFixed(0)}`;
}

export default async function EconomicSnapshotWidget() {
  const data = await getVietnamEconomicData();
  const year = data.year ?? 'latest';

  return (
    <div className="not-prose my-8 rounded-2xl border border-hairline overflow-hidden">
      <div className="px-5 py-4 bg-navy-deep flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Vietnam Economic Snapshot</span>
        <span className="text-white/75 text-xs">World Bank data ({year})</span>
      </div>
      <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard
          label="GDP"
          value={data.gdpUsd !== null ? fmtBillions(data.gdpUsd) : '-'}
          sub="Total economy size"
          color="blue"
        />
        <StatCard
          label="GDP per Capita"
          value={data.gdpPerCapitaUsd !== null ? `$${Math.round(data.gdpPerCapitaUsd).toLocaleString()}` : '-'}
          sub="Per person, USD"
          color="green"
        />
        <StatCard
          label="Inflation"
          value={data.inflationPercent !== null ? `${fmt(data.inflationPercent)}%` : '-'}
          sub="Consumer price index"
          color="amber"
        />
        <StatCard
          label="Population"
          value={data.populationMillions !== null ? `${fmt(data.populationMillions, 0)}M` : '-'}
          sub="Total population"
          color="purple"
        />
        <StatCard
          label="FDI Inflows"
          value={data.fdiPctGdp !== null ? `${fmt(data.fdiPctGdp)}% of GDP` : '-'}
          sub="Foreign direct investment"
          color="blue"
        />
        <div className="rounded-xl border border-hairline bg-sand p-4 flex flex-col justify-center">
          <div className="text-xs text-muted mb-2">Source</div>
          <a
            href="https://data.worldbank.org/country/vietnam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-xs font-medium text-primary-600 hover:underline"
          >
            World Bank Open Data
          </a>
          <div className="text-xs text-muted mt-1">Auto-refreshes daily</div>
        </div>
      </div>
    </div>
  );
}
