import { getVietnamSectorTrend, SectorDataPoint } from '@/lib/open-data';

// ─── Static key-growth-sectors data ──────────────────────────────────────────

const KEY_SECTORS = [
  {
    name: 'Electronics & Manufacturing',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
      />
    ),
    color: 'bg-blue-50 border-blue-100 text-blue-700',
    badge: 'Largest FDI attractor',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: 'Samsung, Intel, LG assembly operations. Accounts for approximately 30% of Vietnam\'s total exports (Source: GSO). Anchor of the manufacturing boom.',
  },
  {
    name: 'Technology & Software',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
    color: 'bg-indigo-50 border-indigo-100 text-indigo-700',
    badge: 'Fastest growing by headcount',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    desc: '500,000+ IT workers (Source: VINASA). Vietnam is a leading offshore software development hub for Japanese, Korean, and Western tech firms.',
  },
  {
    name: 'Renewable Energy',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
      />
    ),
    color: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    badge: 'Government priority',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    desc: 'Aggressive solar and wind capacity additions. Government target: 47% renewables by 2030 (Source: Power Development Plan 8 / PDP8). Strong FDI pipeline in utility-scale projects.',
  },
  {
    name: 'Tourism & Hospitality',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M17 3.75a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0117 3.75z"
      />
    ),
    color: 'bg-amber-50 border-amber-100 text-amber-700',
    badge: 'Recovery complete',
    badgeColor: 'bg-amber-100 text-amber-700',
    desc: '17.5M international arrivals in 2024 (Source: VNAT), growing toward the pre-COVID 18M peak of 2019. Hospitality investment accelerating.',
  },
  {
    name: 'Real Estate & Construction',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
    color: 'bg-rose-50 border-rose-100 text-rose-700',
    badge: 'FDI-driven',
    badgeColor: 'bg-rose-100 text-rose-700',
    desc: 'Strong FDI inflows into industrial parks, logistics warehouses, and mixed-use developments. Supply chain diversification benefit.',
  },
  {
    name: 'Logistics & Ports',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
      />
    ),
    color: 'bg-teal-50 border-teal-100 text-teal-700',
    badge: 'Strategic location',
    badgeColor: 'bg-teal-100 text-teal-700',
    desc: 'Cai Mep deep-water port and Hai Phong expansion. Supply chain diversification beneficiary as global manufacturers de-risk from China.',
  },
];

// ─── Sector bar component ─────────────────────────────────────────────────────

interface SectorBarProps {
  label: string;
  value: number | null;
  color: string;
  bgColor: string;
  max: number;
}

function SectorBar({ label, value, color, bgColor, max }: SectorBarProps) {
  const pct = value && max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-gray-900">
          {value !== null ? `${value.toFixed(1)}%` : '-'}
        </span>
      </div>
      <div className={`w-full ${bgColor} rounded-full h-4 overflow-hidden`}>
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-400">% of GDP</p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default async function GrowingSectorsWidget() {
  const sectorTrend = await getVietnamSectorTrend();
  const latest: SectorDataPoint | undefined = sectorTrend[0];

  // Compute a sensible max for bars - services will be the largest (~40%+)
  const values = [latest?.services, latest?.industry, latest?.agriculture].filter(
    (v): v is number => typeof v === 'number'
  );
  const max = values.length > 0 ? Math.max(...values) : 50;

  const year = latest?.year ?? 'latest';

  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Vietnam Sector Breakdown &amp; Growth Industries</span>
        <span className="text-white/40 text-xs">World Bank + FDI data</span>
      </div>

      <div className="p-6 space-y-8">

        {/* GDP composition - CSS-width bars from World Bank */}
        <div>
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-800">GDP Composition by Sector ({year})</h3>
            <span className="text-xs text-gray-400">World Bank</span>
          </div>
          <div className="space-y-5">
            <SectorBar
              label="Services"
              value={latest?.services ?? null}
              color="bg-blue-500"
              bgColor="bg-blue-100"
              max={max}
            />
            <SectorBar
              label="Industry (incl. construction)"
              value={latest?.industry ?? null}
              color="bg-indigo-500"
              bgColor="bg-indigo-100"
              max={max}
            />
            <SectorBar
              label="Manufacturing (subset of industry)"
              value={latest?.manufacturing ?? null}
              color="bg-purple-500"
              bgColor="bg-purple-100"
              max={max}
            />
            <SectorBar
              label="Agriculture"
              value={latest?.agriculture ?? null}
              color="bg-emerald-500"
              bgColor="bg-emerald-100"
              max={max}
            />
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Source: World Bank Open Data (NV.SRV.TOTL.ZS, NV.IND.TOTL.ZS, NV.IND.MANF.ZS, NV.AGR.TOTL.ZS) - ({year})
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Key growth sectors - static curated data */}
        <div>
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Key Growth Sectors</h3>
            <span className="text-xs text-gray-400">FDI and sector growth data, 2024</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KEY_SECTORS.map((sector) => (
              <div
                key={sector.name}
                className={`rounded-xl border p-4 ${sector.color}`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-0.5 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {sector.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm leading-tight">{sector.name}</h4>
                    <span className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${sector.badgeColor}`}>
                      {sector.badge}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed opacity-80 pl-8">{sector.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Sector data, 2024. Sources: MPI, GSO, VNAT, VINASA, Power Development Plan 8 (PDP8). Individual statistics cited inline. Some figures are approximate or widely-reported estimates.
          </p>
        </div>

      </div>
    </div>
  );
}
