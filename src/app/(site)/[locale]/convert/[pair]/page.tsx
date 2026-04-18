import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/config';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { getExchangeRates, vndPerCurrency, formatVnd } from '@/lib/open-data';

export const revalidate = 21600;

const CURRENCY_PAIRS = [
  {
    from: 'USD',
    name: 'US Dollar',
    symbol: '$',
    country: 'United States',
    flag: '🇺🇸',
    expat:
      'Most USD-earning expats in Vietnam receive salaries or freelance income in dollars. USD is the de facto reference currency.',
    tips: [
      {
        title: 'USD Is the Expat Reference Currency',
        body: 'Most landlords in Vietnam quote rent in USD. International schools, service businesses, and high-end hospitality all invoice in USD. You will frequently hold and spend USD directly.',
      },
      {
        title: 'Best Transfer Services',
        body: 'Wise and Revolut consistently deliver USD→VND close to mid-market rates with low fees. Traditional bank wires typically add 2-4% in hidden exchange costs.',
      },
      {
        title: 'Opening a VND Account',
        body: 'To settle day-to-day expenses in VND, open a local account at Vietcombank, BIDV, or Techcombank. Most accept foreigners with a passport and visa. Some branches require an additional document like a TRC.',
      },
      {
        title: 'Large Conversions (Apartment Deposits)',
        body: 'For large USD→VND conversions like apartment deposits (often 2-3 months rent), compare rates at a reputable gold shop / money changer in Binh Tay or the licensed exchangers near Ben Thanh market - they often beat bank rates for large amounts.',
      },
    ],
  },
  {
    from: 'EUR',
    name: 'Euro',
    symbol: '€',
    country: 'Eurozone',
    flag: '🇪🇺',
    expat:
      'Euro is the primary currency for European expats. Remittances from EU countries arrive quickly via Wise or Revolut.',
    tips: [
      {
        title: 'EUR→VND via Wise Is Cost-Effective',
        body: 'Wise supports EUR→VND directly. EU SEPA transfers to Wise are fast (often same-day) and the exchange to VND is near mid-market.',
      },
      {
        title: 'European Bank Cards in Vietnam',
        body: 'Major EU bank cards (N26, Bunq, Revolut) work at Vietnamese ATMs. Revolut cardholders can withdraw VND at mid-market rates up to their plan limit. Watch for local ATM surcharges of 20,000-50,000 VND per transaction.',
      },
      {
        title: 'EUR Is Not Widely Quoted Locally',
        body: 'Unlike USD, EUR is not commonly used for local pricing. You will convert EUR to VND or USD before making large payments. Keep some VND on hand for daily expenses.',
      },
      {
        title: 'Tax Residency for EU Expats',
        body: 'If you spend 183+ days in Vietnam, you become a Vietnamese tax resident. EU countries have varying double-taxation treaty status with Vietnam. Confirm your obligations with a tax adviser.',
      },
    ],
  },
  {
    from: 'GBP',
    name: 'British Pound',
    symbol: '£',
    country: 'United Kingdom',
    flag: '🇬🇧',
    expat:
      'GBP to VND conversions are common for UK expats sending money home or receiving UK pension payments.',
    tips: [
      {
        title: 'Wise for GBP→VND',
        body: 'Wise is the dominant choice for UK expats transferring pounds to Vietnam. Faster and cheaper than UK bank international wires. Monzo and Starling cardholders also get good rates at Vietnamese ATMs.',
      },
      {
        title: 'UK Pension Payments',
        body: 'UK state pension and private pension payments arrive in GBP. You can instruct Wise to auto-convert incoming GBP to VND, giving you a steady monthly VND balance.',
      },
      {
        title: 'Post-Brexit Banking',
        body: 'Some UK fintech services (Revolut, etc.) have shifted EU operations post-Brexit. Confirm your specific card issuer\'s ATM and FX policies apply to Vietnam before relying on them.',
      },
      {
        title: 'GBP Is Not Available Locally',
        body: 'Very few Vietnamese exchange services stock GBP notes. Convert GBP to VND digitally via Wise or use a USD intermediary step at local exchangers.',
      },
    ],
  },
  {
    from: 'AUD',
    name: 'Australian Dollar',
    symbol: 'A$',
    country: 'Australia',
    flag: '🇦🇺',
    expat:
      'Australia is one of the top sources of expats in Vietnam. AUD transfers are straightforward via most major remittance services.',
    tips: [
      {
        title: 'Wise and OFX for AUD Transfers',
        body: 'Wise and OFX (an Australian-founded service) both handle AUD→VND well. OFX has a strong Australian customer base and competitive rates for larger transfers.',
      },
      {
        title: 'Australian Superannuation',
        body: 'If you leave Australia permanently, you may be able to access your superannuation under the Departing Australia Superannuation Payment (DASP) scheme. Take tax advice - withholding rates apply.',
      },
      {
        title: 'AUD at Vietnamese ATMs',
        body: 'Australian bank cards work fine at Vietnamese ATMs. Commbank and ANZ have relatively reasonable international ATM fees, but always check your card\'s specific international transaction costs.',
      },
      {
        title: 'Vietnam–Australia Tax Treaty',
        body: 'Australia and Vietnam have a double taxation agreement. Australian expats resident in Vietnam for 183+ days should understand which country has primary taxing rights over their income.',
      },
    ],
  },
  {
    from: 'CAD',
    name: 'Canadian Dollar',
    symbol: 'C$',
    country: 'Canada',
    flag: '🇨🇦',
    expat:
      'CAD transfers to Vietnam work well through Wise. Canada has a growing Vietnam expat community.',
    tips: [
      {
        title: 'Wise for CAD→VND',
        body: 'Wise supports direct CAD→VND transfers at near mid-market rates. Interac e-Transfer to a Wise CAD wallet is a fast funding method for Canadians.',
      },
      {
        title: 'Canadian Pension Abroad',
        body: 'CPP and OAS pension payments can be received abroad. Have them deposited into a CAD account and convert via Wise. CRA reporting obligations continue for Canadians abroad.',
      },
      {
        title: 'CERB and CRA Compliance',
        body: 'Canadian expats who received COVID-era benefits should confirm they were eligible as non-residents. CRA audits of expats receiving domestic benefits do occur.',
      },
      {
        title: 'Opening a VND Account',
        body: 'Canadian passport holders can open accounts at most major Vietnamese banks with a passport and valid visa. Vietcombank and Techcombank are the most accessible for foreigners.',
      },
    ],
  },
  {
    from: 'SGD',
    name: 'Singapore Dollar',
    symbol: 'S$',
    country: 'Singapore',
    flag: '🇸🇬',
    expat:
      'SGD is relevant for expats working across Singapore and Vietnam. Many regional companies pay in SGD.',
    tips: [
      {
        title: 'SGD→VND via Wise or YouTrip',
        body: 'Wise and YouTrip (Singapore-based travel card) both handle SGD→VND well. YouTrip is convenient for Singapore residents managing a Vietnam budget.',
      },
      {
        title: 'Singapore–Vietnam Business Corridor',
        body: 'Many Singapore-headquartered companies have Vietnam offices. Salaries may be paid in SGD but local expenses are in VND. Set up a Wise multi-currency account to manage both.',
      },
      {
        title: 'DBS/OCBC International Transfers',
        body: 'Singapore banks (DBS, OCBC, UOB) support online international transfers to Vietnam. Rates and fees vary but direct bank transfers are fully traceable - useful for large amounts.',
      },
      {
        title: 'Short SGD→VND Spreads',
        body: 'SGD/VND is an actively traded pair given Singapore\'s strong trade relationship with Vietnam. Spreads tend to be tighter than less common pairs.',
      },
    ],
  },
  {
    from: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
    country: 'Japan',
    flag: '🇯🇵',
    expat:
      "Japan is Vietnam's #2 tourism source. Many Vietnamese workers in Japan send remittances home in yen.",
    tips: [
      {
        title: 'JPY Remittances Are High Volume',
        body: 'Over 400,000 Vietnamese workers are in Japan. Wise, SBI Remit, and Japan Post Bank all handle JPY→VND. SBI Remit is particularly popular in the Vietnamese worker community in Japan.',
      },
      {
        title: 'Japanese Expats in Vietnam',
        body: 'Vietnam has a large Japanese expat community (especially HCMC District 7 and Hanoi). Japanese companies often pay local Vietnam salaries in USD or VND - not JPY.',
      },
      {
        title: 'JPY Notes Are Not Accepted Locally',
        body: 'Vietnamese exchange services rarely deal in JPY cash. Convert JPY digitally before arriving. USD cash is far more useful as a physical currency backup in Vietnam.',
      },
      {
        title: 'Wise for JPY',
        body: 'Wise supports JPY→VND. For large transfers, check whether your Japanese bank\'s international transfer fee is competitive. Many Japanese banks charge high flat-fee wire costs.',
      },
    ],
  },
  {
    from: 'KRW',
    name: 'South Korean Won',
    symbol: '₩',
    country: 'South Korea',
    flag: '🇰🇷',
    expat:
      "South Korea is Vietnam's #1 tourism and FDI source. KRW transfers are high-volume.",
    tips: [
      {
        title: 'KRW→VND Is a High-Volume Corridor',
        body: "South Korea is Vietnam's largest foreign direct investor. Multiple Korean banks (KB Kookmin, Shinhan, Woori) operate in Vietnam and offer KRW→VND transfers.",
      },
      {
        title: 'Shinhan Vietnam Bank',
        body: "Shinhan Bank has a significant Vietnam presence. Korean expats can use Shinhan's Vietnam branches and app for KRW→VND conversions with competitive rates for account holders.",
      },
      {
        title: 'Korean Expat Communities',
        body: 'HCMC District 7 (Phu My Hung) and the Thu Duc area have large Korean communities. Many Korean businesses operate in Vietnam, particularly in manufacturing, tech, and retail.',
      },
      {
        title: 'Wise and Kakao Pay',
        body: 'Wise handles KRW→VND. Kakao Pay and Toss support international transfers - check current Vietnam support status as offerings evolve rapidly.',
      },
    ],
  },
  {
    from: 'HKD',
    name: 'Hong Kong Dollar',
    symbol: 'HK$',
    country: 'Hong Kong',
    flag: '🇭🇰',
    expat:
      'HKD is common for expats working for Hong Kong companies with Vietnam operations.',
    tips: [
      {
        title: 'Wise for HKD→VND',
        body: 'Wise supports HKD→VND. HSBC Hong Kong account holders can also use HSBC Vietnam for international transfers, though spreads at traditional banks may be less competitive than Wise.',
      },
      {
        title: 'FPS (Faster Payment System)',
        body: "Hong Kong's FPS can fund a Wise HKD wallet quickly. This is the most efficient flow for HK-based expats sending money to Vietnam.",
      },
      {
        title: 'HKD Pegged to USD',
        body: 'The HKD is pegged to the USD (7.75-7.85 range). HKD/VND movements largely track USD/VND. This makes HKD→VND planning relatively predictable.',
      },
      {
        title: 'HSBC Bridge',
        body: 'HSBC has significant operations in both Hong Kong and Vietnam. Existing HSBC HK customers can sometimes open HSBC Vietnam accounts with a streamlined process.',
      },
    ],
  },
  {
    from: 'THB',
    name: 'Thai Baht',
    symbol: '฿',
    country: 'Thailand',
    flag: '🇹🇭',
    expat:
      'THB conversions are relevant for expats living between Thailand and Vietnam, a common nomad circuit.',
    tips: [
      {
        title: 'Thailand–Vietnam Nomad Circuit',
        body: 'Chiang Mai → Da Nang → Hoi An is a well-traveled nomad route. Managing THB↔VND conversions via Wise minimizes friction. Wise supports both currencies.',
      },
      {
        title: 'THB at Vietnamese Exchangers',
        body: 'Thai Baht is occasionally accepted at exchange counters in border areas and tourist zones (particularly Da Nang and HCMC), but USD cash or digital transfer via Wise is simpler.',
      },
      {
        title: 'Kasikorn and Bangkok Bank',
        body: 'Thai banks offer international transfer options. Bangkok Bank has relationships with Vietnamese correspondent banks. Fees vary - compare with Wise for your transfer amount.',
      },
      {
        title: 'Both Currencies Cash-Heavy',
        body: 'Thailand and Vietnam are both cash-heavy economies. Maintain local currency cash reserves for each country. USD acts as a useful bridge for large transactions in either country.',
      },
    ],
  },
  {
    from: 'MYR',
    name: 'Malaysian Ringgit',
    symbol: 'RM',
    country: 'Malaysia',
    flag: '🇲🇾',
    expat:
      'MYR is relevant for Malaysian expats and cross-border business with Vietnam.',
    tips: [
      {
        title: 'Wise for MYR→VND',
        body: 'Wise supports MYR→VND transfers. Malaysian expats in Vietnam often maintain a Wise multi-currency account to manage both MYR and VND alongside USD.',
      },
      {
        title: 'Maybank International',
        body: 'Maybank has operations in Vietnam. Malaysian account holders can initiate MYR→VND transfers, though rates and fees should be compared with Wise.',
      },
      {
        title: 'ASEAN Business Context',
        body: 'Malaysia is a significant trade partner with Vietnam. Many Malaysia-Vietnam business transactions settle in USD rather than MYR/VND directly - check what currency your counterpart prefers.',
      },
      {
        title: 'MYR Is Rarely Exchanged Locally',
        body: 'Malaysian Ringgit is not commonly stocked at Vietnamese exchange counters. Convert MYR digitally before arrival in Vietnam.',
      },
    ],
  },
  {
    from: 'NZD',
    name: 'New Zealand Dollar',
    symbol: 'NZ$',
    country: 'New Zealand',
    flag: '🇳🇿',
    expat:
      'NZD to VND conversions needed for NZ expats and retirees in Vietnam.',
    tips: [
      {
        title: 'Wise for NZD→VND',
        body: 'Wise supports NZD and is the most cost-effective option for NZ expats transferring to Vietnam. OFX also supports NZD and has a good track record for Australasia→Southeast Asia transfers.',
      },
      {
        title: 'NZ Superannuation Abroad',
        body: 'New Zealand Superannuation can be paid overseas. Have payments deposited into an NZD account, then convert via Wise. Confirm IRD obligations as an overseas recipient.',
      },
      {
        title: 'ANZ New Zealand Cards in Vietnam',
        body: 'ANZ NZ cards work at Vietnamese ATMs. Fees vary by account type. Wise or Revolut are more cost-effective for regular ATM use.',
      },
      {
        title: 'NZD Rarely Available at Local Exchangers',
        body: 'Like AUD and CAD, NZD cash is rarely stocked at Vietnamese exchange counters. Digital transfer via Wise is the standard approach for NZ expats.',
      },
    ],
  },
  {
    from: 'CHF',
    name: 'Swiss Franc',
    symbol: 'Fr',
    country: 'Switzerland',
    flag: '🇨🇭',
    expat:
      'Swiss expats in Vietnam often work in international business or finance. CHF is a stable base currency.',
    tips: [
      {
        title: 'CHF Is a Safe-Haven Currency',
        body: 'The Swiss Franc is one of the world\'s most stable currencies. CHF/VND movements are generally driven by USD/VND since VND tracks the USD closely. CHF holders benefit when USD strengthens.',
      },
      {
        title: 'Wise for CHF→VND',
        body: 'Wise supports CHF and provides near mid-market rates. Swiss banks (UBS, Credit Suisse successor entities, PostFinance) charge high international wire fees by comparison.',
      },
      {
        title: 'Swiss International Expats',
        body: 'Switzerland has one of the highest proportions of citizens living abroad globally. The Swiss community in Vietnam is small but established, particularly in HCMC and Da Nang.',
      },
      {
        title: 'Swiss Pillar System and Foreign Residency',
        body: 'Swiss expats leaving Switzerland should review their AHV/AVS contributions and whether voluntary continued participation is worthwhile during years abroad.',
      },
    ],
  },
  {
    from: 'SEK',
    name: 'Swedish Krona',
    symbol: 'kr',
    country: 'Sweden',
    flag: '🇸🇪',
    expat:
      "Nordic expats are growing in Vietnam's tech and startup scene. SEK transfers via Wise are cost-effective.",
    tips: [
      {
        title: 'Wise for SEK→VND',
        body: 'Wise supports SEK and is the clear best option for Swedish expats. Swish (Swedish bank transfer) can fund a Wise SEK wallet quickly for seamless conversion.',
      },
      {
        title: 'Scandinavian Nomads in Vietnam',
        body: 'Da Nang and Hoi An have growing Scandinavian expat communities, particularly in tech and creative industries. The timezone overlap with Europe makes these cities workable for remote workers serving EU clients.',
      },
      {
        title: 'Swedish Bank Cards Abroad',
        body: 'Handelsbanken, SEB, and Nordea cards work at Vietnamese ATMs but typically carry foreign transaction fees. Revolut (EU-issued) is popular among Swedish expats for daily spending.',
      },
      {
        title: 'Skatteverket and Foreign Residency',
        body: 'Swedish expats should understand the rules around Swedish tax residency (väsentlig anknytning) before assuming they are non-resident. Sweden has strict rules about maintaining significant ties to Sweden.',
      },
    ],
  },
  {
    from: 'NOK',
    name: 'Norwegian Krone',
    symbol: 'kr',
    country: 'Norway',
    flag: '🇳🇴',
    expat:
      'Norwegian expats and oil/gas workers receiving NOK income need regular VND conversion.',
    tips: [
      {
        title: 'Wise for NOK→VND',
        body: 'Wise supports NOK and is the best value option. Vipps (Norway\'s payment app) does not directly support international transfers, but you can fund Wise via a Norwegian bank transfer.',
      },
      {
        title: 'Oil and Gas Workers',
        body: 'Vietnam\'s offshore oil and gas industry (Vietsovpetro, PVEP) has historically employed Norwegian and other Western oil industry professionals. Salaries are typically in USD.',
      },
      {
        title: 'Norwegian Pension Abroad',
        body: 'Norwegian pension (NAV) payments can be received overseas. Convert NOK→VND via Wise for living expenses in Vietnam.',
      },
      {
        title: 'Nordea and DNB International',
        body: 'Norwegian banks support international wires but fees are high compared to Wise. For regular monthly transfers, Wise is significantly more cost-effective.',
      },
    ],
  },
  {
    from: 'DKK',
    name: 'Danish Krone',
    symbol: 'kr',
    country: 'Denmark',
    flag: '🇩🇰',
    expat:
      'Danish expats benefit from Vietnam\'s 45-day visa-free entry and growing Scandinavian community.',
    tips: [
      {
        title: 'Wise for DKK→VND',
        body: 'Wise supports DKK and provides near mid-market rates. MobilePay (Denmark) does not support international transfers, but you can fund Wise from any Danish bank account.',
      },
      {
        title: 'DKK Soft-Pegged to EUR',
        body: 'The Danish Krone is pegged to the Euro within a narrow band (ERM II). DKK/VND movements track EUR/VND very closely. If you track EUR rates, DKK will be similar.',
      },
      {
        title: 'Scandinavian Community in Vietnam',
        body: 'The Nordic community in Da Nang and Hoi An is growing. Denmark has strong diplomatic ties with Vietnam going back to the 1970s aid relationship.',
      },
      {
        title: 'Skat and Overseas Residency',
        body: 'Danish expats should clarify their Danish tax residency status with Skat before relying on foreign-only tax filing. Full tax residency exits require formal deregistration.',
      },
    ],
  },
  {
    from: 'CNY',
    name: 'Chinese Yuan',
    symbol: '¥',
    country: 'China',
    flag: '🇨🇳',
    expat:
      'CNY is highly relevant for Chinese investors and business operators in Vietnam.',
    tips: [
      {
        title: 'CNY Transfers Are Regulated',
        body: 'China has capital controls limiting outbound CNY transfers. WeChat Pay and Alipay international features can help with smaller amounts, but larger transfers require official bank channels.',
      },
      {
        title: 'Chinese Business Presence',
        body: 'China is one of Vietnam\'s top trading partners. Many Chinese-owned manufacturing and trading operations are in Vietnam\'s industrial zones (Binh Duong, Dong Nai, Long An, Bac Ninh).',
      },
      {
        title: 'UnionPay in Vietnam',
        body: 'UnionPay cards work at many Vietnamese ATMs and some point-of-sale terminals in major cities. This is the most practical option for Chinese visitors managing smaller amounts.',
      },
      {
        title: 'USD as Bridge Currency',
        body: 'For Chinese business operators in Vietnam, maintaining a USD business account is often more practical than direct CNY→VND flows given Chinese capital controls.',
      },
    ],
  },
  {
    from: 'TWD',
    name: 'Taiwan Dollar',
    symbol: 'NT$',
    country: 'Taiwan',
    flag: '🇹🇼',
    expat:
      'Taiwan is a major FDI source for Vietnam manufacturing. TWD transfers are common for business purposes.',
    tips: [
      {
        title: 'Taiwan→Vietnam Manufacturing',
        body: 'Taiwanese companies are among the largest manufacturers in Vietnam (Foxconn, Pou Chen, etc.). TWD→VND transfers for payroll and operational costs are routine in this sector.',
      },
      {
        title: 'Wise for TWD→VND',
        body: 'Wise supports TWD. For Taiwanese expats managing regular transfers, Wise is the most cost-effective option versus Taiwanese bank international wire fees.',
      },
      {
        title: 'Taiwanese Expat Community',
        body: 'Vietnam has a sizable Taiwanese expat community concentrated in industrial zones and HCMC. Taiwanese social clubs and business associations are active in Ho Chi Minh City.',
      },
      {
        title: 'Bank of Taiwan and CTBC',
        body: 'Several Taiwanese banks (CTBC, Cathay United Bank) have Vietnam branches, making account-to-account transfers between Taiwan and Vietnam accounts more straightforward.',
      },
    ],
  },
  {
    from: 'INR',
    name: 'Indian Rupee',
    symbol: '₹',
    country: 'India',
    flag: '🇮🇳',
    expat:
      "India's tech sector has a growing presence in Vietnam. INR to VND conversions via Wise or bank transfer.",
    tips: [
      {
        title: 'INR Transfers Have Regulatory Nuance',
        body: "India's FEMA (Foreign Exchange Management Act) governs overseas remittances. The Liberalised Remittance Scheme (LRS) allows individuals to remit up to USD 250,000 per year abroad.",
      },
      {
        title: 'Wise for INR→VND',
        body: 'Wise supports INR and is the most cost-effective transfer method. UPI and IMPS can fund a Wise INR wallet. SBI, HDFC, and ICICI international wires are an alternative but typically more expensive.',
      },
      {
        title: 'Indian Tech Community in Vietnam',
        body: 'Vietnam\'s tech sector - particularly in HCMC - has a growing Indian professional community. Salary payments are often in USD, with personal remittances in INR or USD.',
      },
      {
        title: 'INR Notes Are Not Exchanged Locally',
        body: 'Vietnamese exchange counters do not deal in INR. All INR→VND conversions should be done electronically. USD cash is the recommended physical backup currency.',
      },
    ],
  },
];

type CurrencyPair = typeof CURRENCY_PAIRS[number];

function getPairData(pairSlug: string): CurrencyPair | null {
  const match = pairSlug.match(/^([a-z]+)-to-vnd$/);
  if (!match) return null;
  const fromCode = match[1].toUpperCase();
  return CURRENCY_PAIRS.find((p) => p.from === fromCode) ?? null;
}

export async function generateStaticParams() {
  return CURRENCY_PAIRS.map((p) => ({
    pair: `${p.from.toLowerCase()}-to-vnd`,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pair: string; locale: string }>;
}): Promise<Metadata> {
  const { pair } = await params;
  const pairData = getPairData(pair);
  if (!pairData) return {};

  const fromCode = pairData.from;
  const fromName = pairData.name;

  return {
    title: `${fromCode} to VND Exchange Rate Today (${fromName} to Vietnamese Dong) | Vietnam Launchpad`,
    description: `Live ${fromCode} to VND exchange rate. Convert ${fromName} to Vietnamese Dong. Updated every 6 hours. Expat tips for converting ${fromName} in Vietnam.`,
    alternates: {
      canonical: `https://www.vietnamlaunchpad.com/convert/${pair}`,
    },
    openGraph: {
      title: `${fromCode} to VND Exchange Rate - Live Rate`,
      description: `Current ${fromCode} to VND exchange rate with conversion table. Expat money tips for Vietnam.`,
      type: 'website',
    },
  };
}

const COMMON_FROM_AMOUNTS = [100, 500, 1000, 5000, 10000];
const COMMON_VND_AMOUNTS = [1_000_000, 5_000_000, 10_000_000, 50_000_000, 100_000_000];

function formatFromCurrency(amount: number, symbol: string, from: string): string {
  // For JPY, KRW, IDR - no decimal needed
  const noDecimal = ['JPY', 'KRW', 'IDR'];
  const opts: Intl.NumberFormatOptions = noDecimal.includes(from)
    ? { maximumFractionDigits: 0 }
    : { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  return `${symbol}${new Intl.NumberFormat('en-US', opts).format(amount)}`;
}

function formatVndAmount(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(2)}B ₫`;
  }
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(2)}M ₫`;
  }
  return `${formatVnd(amount)} ₫`;
}

export default async function CurrencyPairPage({
  params,
}: {
  params: Promise<{ pair: string; locale: string }>;
}) {
  const { pair } = await params;
  const pairData = getPairData(pair);
  if (!pairData) notFound();

  const { from, name, symbol, flag, expat, tips } = pairData;

  const ratesData = await getExchangeRates();
  const rate = ratesData ? vndPerCurrency(ratesData.rates, from) : null;

  const updatedAt = ratesData?.time_last_update_utc
    ? new Date(ratesData.time_last_update_utc).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      })
    : null;

  const inverseRate = rate ? (1 / rate) : null;

  // Related pairs - pick 4 others excluding current
  const relatedPairs = CURRENCY_PAIRS.filter((p) => p.from !== from).slice(0, 5);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${from} to VND Exchange Rate`,
    url: `https://www.vietnamlaunchpad.com/convert/${pair}`,
    description: `Live ${from} to VND exchange rate. ${name} to Vietnamese Dong conversion with expat tips.`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vietnamlaunchpad.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Currency Converter',
          item: 'https://www.vietnamlaunchpad.com/convert',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${from} to VND`,
          item: `https://www.vietnamlaunchpad.com/convert/${pair}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
                <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/convert" className="hover:text-white/70 transition-colors">Currency Converter</Link>
                <span>/</span>
                <span className="text-white/60">{from} to VND</span>
              </nav>

              <div className="hero-badge flex items-center gap-3 mb-8">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm text-emerald-400 font-medium">Live data - refreshes every 6 hours</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="mr-4">{flag}</span>
                {from} to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-primary-400">
                  VND
                </span>
              </h1>

              <p className="hero-subtitle text-xl text-white/60 mb-8 max-w-2xl">
                Live {name} to Vietnamese Dong exchange rate. Updated every 6 hours from open.er-api.com.
              </p>

              {rate !== null && (
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <span className="text-2xl font-bold text-white">
                    1 {from} = {formatVnd(rate)} ₫
                  </span>
                  {updatedAt && (
                    <span className="text-sm text-white/40 border-l border-white/20 pl-3">
                      {updatedAt}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Live Rate Card */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <AnimateOnScroll>
                <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-900 to-primary-900">
                    <div className="flex items-center gap-3">
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span className="text-white font-semibold">Live {from}/VND Rate</span>
                    </div>
                    <div className="text-xs text-white/50">open.er-api.com</div>
                  </div>

                  {!rate ? (
                    <div className="px-6 py-8 text-center text-gray-500 text-sm">
                      Exchange rate data is temporarily unavailable.
                    </div>
                  ) : (
                    <div className="p-6">
                      {/* Big rate display */}
                      <div className="text-center py-8">
                        <div className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-2">
                          {formatVnd(rate)}
                          <span className="text-3xl text-gray-400 ml-2">₫</span>
                        </div>
                        <div className="text-lg text-gray-500 mb-4">per 1 {from} ({name})</div>
                        <div className="text-sm text-gray-400">
                          Inverse: 1,000,000 ₫ ={' '}
                          <span className="font-semibold text-gray-600">
                            {symbol}{inverseRate !== null ? (inverseRate * 1_000_000).toFixed(2) : '-'} {from}
                          </span>
                        </div>
                      </div>

                      {/* Rate details */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">Last Updated</div>
                          <div className="text-sm font-semibold text-gray-700">{updatedAt ?? '-'}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">Update Frequency</div>
                          <div className="text-sm font-semibold text-gray-700">Every 6 hours</div>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                        <p className="text-xs text-amber-700 text-center">
                          Indicative mid-market rate. Bank and exchange rates will differ. Not financial advice.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>

              {/* Rate context */}
              <AnimateOnScroll animation="fade-up">
                <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h2 className="font-display font-bold text-gray-900 text-lg mb-3">
                    {from} and Vietnam: Expat Context
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{expat}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    The Vietnamese Dong (VND) is managed within a controlled floating band against the USD by the
                    State Bank of Vietnam. Since {from} rates generally reflect USD cross rates, {from}/VND
                    movements tend to be gradual rather than volatile.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    For most expat needs - rent (commonly USD-denominated), daily spending in VND, and occasional
                    large transfers - understanding the {from}/VND rate helps you plan realistic monthly budgets
                    and optimise when to convert larger sums.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Conversion Table */}
        {rate !== null && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto">
                <AnimateOnScroll>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2 text-center">
                    {from} to VND Conversion Table
                  </h2>
                  <p className="text-gray-500 text-center mb-8 text-sm">
                    Based on current rate: 1 {from} = {formatVnd(rate)} ₫
                  </p>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* FROM → VND */}
                  <AnimateOnScroll animation="fade-up">
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                      <div className="px-5 py-3 bg-primary-900 text-white text-sm font-semibold">
                        {from} → Vietnamese Dong
                      </div>
                      <div className="divide-y divide-gray-100">
                        {COMMON_FROM_AMOUNTS.map((amount) => (
                          <div key={amount} className="flex items-center justify-between px-5 py-3">
                            <span className="text-sm font-medium text-gray-700">
                              {formatFromCurrency(amount, symbol, from)}
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              {formatVndAmount(amount * rate)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>

                  {/* VND → FROM */}
                  <AnimateOnScroll animation="fade-up">
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                      <div className="px-5 py-3 bg-slate-800 text-white text-sm font-semibold">
                        Vietnamese Dong → {from}
                      </div>
                      <div className="divide-y divide-gray-100">
                        {COMMON_VND_AMOUNTS.map((amount) => (
                          <div key={amount} className="flex items-center justify-between px-5 py-3">
                            <span className="text-sm font-medium text-gray-700">
                              {formatVndAmount(amount)}
                            </span>
                            <span className="text-sm font-bold text-gray-900">
                              {inverseRate !== null
                                ? formatFromCurrency(
                                    parseFloat((amount * inverseRate).toFixed(2)),
                                    symbol,
                                    from
                                  )
                                : '-'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Expat Money Tips */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                  Expat Money Tips: {from} in Vietnam
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Practical guidance for managing {name} conversions and finances as an expat in Vietnam.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {tips.map((tip, i) => (
                <AnimateOnScroll key={i} animation="fade-up">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                        {i + 1}
                      </div>
                      <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Related Currencies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <AnimateOnScroll>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
                Other Currency Converters
              </h2>
            </AnimateOnScroll>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {relatedPairs.map((p) => (
                <Link
                  key={p.from}
                  href={`/convert/${p.from.toLowerCase()}-to-vnd`}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-700 transition-colors shadow-sm"
                >
                  <span>{p.flag}</span>
                  {p.from} to VND
                </Link>
              ))}
              <Link
                href="/convert"
                className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-100 transition-colors"
              >
                View all →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/backgrounds/vietnam-landscape.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-slate-900/95" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <AnimateOnScroll animation="scale" className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Moving to Vietnam?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Our team helps with banking setup, TRC (Temporary Residence Card), company registration, and
                financial planning - so your move goes smoothly.
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
                  href="/vietnam-exchange-rates"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/20 transition-all duration-300"
                >
                  All Exchange Rates
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
