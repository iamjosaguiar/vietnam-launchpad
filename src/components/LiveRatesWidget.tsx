import { getExchangeRates, vndPerCurrency, formatVnd } from '@/lib/open-data';

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'JPY', name: 'Japanese Yen (per 100)', symbol: '¥', multiplier: 100 },
  { code: 'KRW', name: 'South Korean Won (per 1,000)', symbol: '₩', multiplier: 1000 },
  { code: 'THB', name: 'Thai Baht', symbol: '฿' },
];

interface LiveRatesWidgetProps {
  compact?: boolean;
}

export default async function LiveRatesWidget({ compact = false }: LiveRatesWidgetProps) {
  const data = await getExchangeRates();

  const updatedAt = data?.time_last_update_utc
    ? new Date(data.time_last_update_utc).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  if (compact) {
    return (
      <div className="not-prose my-8 rounded-2xl border border-hairline bg-success-soft overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-success">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
            </span>
            <span className="text-sm font-semibold text-success">Live Exchange Rates</span>
          </div>
          <div className="text-xs text-muted">
            {updatedAt ? `Updated ${updatedAt}` : 'Source: open.er-api.com'}
          </div>
        </div>

        {!data ? (
          <p className="px-5 py-4 text-sm text-muted">Rates temporarily unavailable.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-hairline">
            {CURRENCIES.slice(0, 6).map((cur) => {
              const raw = vndPerCurrency(data.rates, cur.code);
              const rate = raw !== null && cur.multiplier ? raw * cur.multiplier : raw;
              return (
                <div key={cur.code} className="bg-white px-4 py-3">
                  <div className="text-xs text-muted mb-0.5">
                    {cur.symbol}1 {cur.code === 'JPY' ? '/ ¥100' : cur.code === 'KRW' ? '/ ₩1K' : ''}
                  </div>
                  <div className="text-base font-bold text-ink">
                    {rate !== null ? `${formatVnd(rate)} ₫` : '-'}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="px-5 py-1 bg-success-soft flex items-center justify-between">
          <p className="text-xs text-muted">Indicative rates. Bank rates will vary.</p>
          <a
            href="/vietnam-exchange-rates"
            className="inline-flex min-h-[44px] items-center text-xs font-semibold text-success hover:text-ink transition-colors"
          >
            Full rates table →
          </a>
        </div>
      </div>
    );
  }

  // Full widget
  return (
    <div className="rounded-2xl border border-hairline overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 bg-navy-deep">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
          </span>
          <span className="text-white font-semibold">Live Exchange Rates (→ VND)</span>
        </div>
        <div className="text-xs text-white/50">
          {updatedAt ? `Updated ${updatedAt}` : 'open.er-api.com'}
        </div>
      </div>

      {!data ? (
        <div className="px-6 py-8 text-center text-muted text-sm">
          Exchange rate data is temporarily unavailable.
        </div>
      ) : (
        <>
          <div className="divide-y divide-hairline">
            {CURRENCIES.map((cur, i) => {
              const raw = vndPerCurrency(data.rates, cur.code);
              const rate = raw !== null && cur.multiplier ? raw * cur.multiplier : raw;
              return (
                <div
                  key={cur.code}
                  className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-sand/50'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-sm font-bold text-primary-700">
                      {cur.symbol}
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">{cur.code}</div>
                      <div className="text-xs text-muted">{cur.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-ink">
                      {rate !== null ? `${formatVnd(rate)} ₫` : '-'}
                    </div>
                    <div className="text-xs text-muted">per {cur.multiplier ? `${cur.multiplier.toLocaleString()} ${cur.code}` : `1 ${cur.code}`}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-6 py-3 bg-sand border-t border-hairline">
            <p className="text-xs text-muted">
              Indicative mid-market rates. Actual bank and exchange rates will differ. Source: open.er-api.com - refreshed every 6 hours.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
