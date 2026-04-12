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
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    purple: 'bg-purple-50 text-purple-700 border-purple-100',
  };
  return (
    <div className={`rounded-xl border p-4 ${colors[color]}`}>
      <div className="text-xs font-medium mb-1 opacity-70">{label}</div>
      <div className="text-xl font-bold">{value}</div>
      {sub && <div className="text-xs opacity-60 mt-0.5">{sub}</div>}
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
    <div className="not-prose my-8 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Vietnam Economic Snapshot</span>
        <span className="text-white/40 text-xs">World Bank data ({year})</span>
      </div>
      <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard
          label="GDP"
          value={data.gdpUsd !== null ? fmtBillions(data.gdpUsd) : '—'}
          sub="Total economy size"
          color="blue"
        />
        <StatCard
          label="GDP per Capita"
          value={data.gdpPerCapitaUsd !== null ? `$${Math.round(data.gdpPerCapitaUsd).toLocaleString()}` : '—'}
          sub="Per person, USD"
          color="green"
        />
        <StatCard
          label="Inflation"
          value={data.inflationPercent !== null ? `${fmt(data.inflationPercent)}%` : '—'}
          sub="Consumer price index"
          color="amber"
        />
        <StatCard
          label="Population"
          value={data.populationMillions !== null ? `${fmt(data.populationMillions, 0)}M` : '—'}
          sub="Total population"
          color="purple"
        />
        <StatCard
          label="FDI Inflows"
          value={data.fdiPctGdp !== null ? `${fmt(data.fdiPctGdp)}% of GDP` : '—'}
          sub="Foreign direct investment"
          color="blue"
        />
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 flex flex-col justify-center">
          <div className="text-xs text-gray-500 mb-2">Source</div>
          <a
            href="https://data.worldbank.org/country/vietnam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary-600 hover:underline"
          >
            World Bank Open Data
          </a>
          <div className="text-xs text-gray-400 mt-1">Auto-refreshes daily</div>
        </div>
      </div>
    </div>
  );
}
