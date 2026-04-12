export interface ExchangeRates {
  result: string;
  base_code: string;
  rates: Record<string, number>;
  time_last_update_utc: string;
  time_next_update_utc: string;
}

export interface WorldBankEntry {
  indicator: { id: string; value: string };
  country: { id: string; value: string };
  value: number | null;
  date: string;
}

export interface VietnamEconomicData {
  gdpUsd: number | null;
  gdpPerCapitaUsd: number | null;
  inflationPercent: number | null;
  populationMillions: number | null;
  fdiPctGdp: number | null;
  year: string | null;
}

export async function getExchangeRates(): Promise<ExchangeRates | null> {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 21600 }, // 6 hours
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function fetchWorldBankIndicator(indicator: string): Promise<WorldBankEntry | null> {
  try {
    const res = await fetch(
      `https://api.worldbank.org/v2/country/VN/indicator/${indicator}?format=json&mrv=1`,
      { next: { revalidate: 86400 } } // daily
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (Array.isArray(data) && Array.isArray(data[1]) && data[1].length > 0) {
      return data[1][0] as WorldBankEntry;
    }
    return null;
  } catch {
    return null;
  }
}

export async function getVietnamEconomicData(): Promise<VietnamEconomicData> {
  const [gdp, gdpPerCapita, inflation, population, fdi] = await Promise.all([
    fetchWorldBankIndicator('NY.GDP.MKTP.CD'),
    fetchWorldBankIndicator('NY.GDP.PCAP.CD'),
    fetchWorldBankIndicator('FP.CPI.TOTL.ZG'),
    fetchWorldBankIndicator('SP.POP.TOTL'),
    fetchWorldBankIndicator('BX.KLT.DINV.WD.GD.ZS'),
  ]);

  return {
    gdpUsd: gdp?.value ?? null,
    gdpPerCapitaUsd: gdpPerCapita?.value ?? null,
    inflationPercent: inflation?.value ?? null,
    populationMillions: population?.value ? population.value / 1_000_000 : null,
    fdiPctGdp: fdi?.value ?? null,
    year: gdp?.date ?? null,
  };
}

// Helper: get VND per 1 unit of a given currency
// The API returns rates relative to USD (rates[X] = X per 1 USD)
// So VND/X = rates['VND'] / rates[X]
export function vndPerCurrency(rates: Record<string, number>, currency: string): number | null {
  const vndPerUsd = rates['VND'];
  const xPerUsd = rates[currency];
  if (!vndPerUsd || !xPerUsd) return null;
  return vndPerUsd / xPerUsd;
}

export function formatVnd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

// ─── Multi-year series helper ─────────────────────────────────────────────────

async function fetchWorldBankSeries(indicator: string, years: number = 5): Promise<WorldBankEntry[]> {
  try {
    const res = await fetch(
      `https://api.worldbank.org/v2/country/VN/indicator/${indicator}?format=json&mrv=${years}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (Array.isArray(data) && Array.isArray(data[1])) {
      const entries = (data[1] as WorldBankEntry[]).filter((e) => e.value !== null);
      return entries.sort((a, b) => Number(b.date) - Number(a.date));
    }
    return [];
  } catch {
    return [];
  }
}

// ─── Tourism ──────────────────────────────────────────────────────────────────

export interface TourismDataPoint {
  year: string;
  arrivals: number | null;
  receiptsUsd: number | null;
}

export async function getVietnamTourismTrend(): Promise<TourismDataPoint[]> {
  const [arrivalsData, receiptsData] = await Promise.all([
    fetchWorldBankSeries('ST.INT.ARVL', 6),
    fetchWorldBankSeries('ST.INT.RCPT.CD', 6),
  ]);

  // Build a year-keyed map
  const byYear: Record<string, TourismDataPoint> = {};

  for (const entry of arrivalsData) {
    byYear[entry.date] = {
      year: entry.date,
      arrivals: entry.value,
      receiptsUsd: null,
    };
  }
  for (const entry of receiptsData) {
    if (byYear[entry.date]) {
      byYear[entry.date].receiptsUsd = entry.value;
    } else {
      byYear[entry.date] = { year: entry.date, arrivals: null, receiptsUsd: entry.value };
    }
  }

  return Object.values(byYear).sort((a, b) => Number(b.year) - Number(a.year));
}

// ─── Sector breakdown ─────────────────────────────────────────────────────────

export interface SectorDataPoint {
  year: string;
  services: number | null;
  industry: number | null;
  manufacturing: number | null;
  agriculture: number | null;
}

export async function getVietnamSectorTrend(): Promise<SectorDataPoint[]> {
  const [servicesData, industryData, manufacturingData, agricultureData] = await Promise.all([
    fetchWorldBankSeries('NV.SRV.TOTL.ZS', 5),
    fetchWorldBankSeries('NV.IND.TOTL.ZS', 5),
    fetchWorldBankSeries('NV.IND.MANF.ZS', 5),
    fetchWorldBankSeries('NV.AGR.TOTL.ZS', 5),
  ]);

  const byYear: Record<string, SectorDataPoint> = {};

  const merge = (entries: WorldBankEntry[], key: keyof Omit<SectorDataPoint, 'year'>) => {
    for (const entry of entries) {
      if (!byYear[entry.date]) {
        byYear[entry.date] = { year: entry.date, services: null, industry: null, manufacturing: null, agriculture: null };
      }
      byYear[entry.date][key] = entry.value;
    }
  };

  merge(servicesData, 'services');
  merge(industryData, 'industry');
  merge(manufacturingData, 'manufacturing');
  merge(agricultureData, 'agriculture');

  return Object.values(byYear).sort((a, b) => Number(b.year) - Number(a.year));
}
