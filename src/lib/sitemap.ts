import { getAllBlogSlugs, getBlogPostBySlug } from '@/data/blog';
import { getAllGuideSlugs, getGuideBySlug } from '@/data/guides';
import { getAllSalaryRoleSlugs, getSalaryRole } from '@/data/salaryRoles';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';
import { getAllTreatyCountrySlugs, getTreatyCountry } from '@/data/taxTreaties';
import { getAllVisaSlugs, getVisaCountry } from '@/data/visas';
import { BLOCK_FILES, PAGE_SOURCES, loadLastmods, type LastmodSnapshot } from '@/lib/git-dates';
import snapshotJson from '@/lib/sitemap-lastmod.json';

export const BASE_URL = 'https://www.vietnamlaunchpad.com';

export const SITEMAP_SECTIONS = [
  'Pages',
  'Services',
  'Guides',
  'Blog',
  'Tools',
  'Visa requirements',
  'Currency converter',
  'Tax treaties',
  'Salary guide',
] as const;

export type SitemapSection = (typeof SITEMAP_SECTIONS)[number];

type ChangeFreq = 'daily' | 'weekly' | 'monthly';

export type SitemapEntry = {
  path: string;
  title: string;
  section: SitemapSection;
  lastmod?: string;
  changefreq: ChangeFreq;
  priority: number;
};

const CONVERT_PAIRS: readonly (readonly [string, string])[] = [
  ['usd', 'US Dollar'],
  ['eur', 'Euro'],
  ['gbp', 'British Pound'],
  ['aud', 'Australian Dollar'],
  ['cad', 'Canadian Dollar'],
  ['sgd', 'Singapore Dollar'],
  ['jpy', 'Japanese Yen'],
  ['krw', 'South Korean Won'],
  ['hkd', 'Hong Kong Dollar'],
  ['thb', 'Thai Baht'],
  ['myr', 'Malaysian Ringgit'],
  ['nzd', 'New Zealand Dollar'],
  ['chf', 'Swiss Franc'],
  ['sek', 'Swedish Krona'],
  ['nok', 'Norwegian Krone'],
  ['dkk', 'Danish Krone'],
  ['cny', 'Chinese Yuan'],
  ['twd', 'Taiwan Dollar'],
  ['inr', 'Indian Rupee'],
];

const STATIC_PAGES: readonly {
  path: string;
  title: string;
  priority: number;
  changefreq: ChangeFreq;
}[] = [
  { path: '', title: 'Home', priority: 1.0, changefreq: 'daily' },
  { path: '/services', title: 'Our Services', priority: 0.9, changefreq: 'weekly' },
  { path: '/guides', title: 'The Vietnam Expat Reference Library', priority: 0.9, changefreq: 'weekly' },
  { path: '/blog', title: 'Vietnam Immigration & Business Blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/contact', title: 'Request a Private Consultation', priority: 0.8, changefreq: 'monthly' },
  { path: '/faq', title: 'Frequently Asked Questions', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', title: 'About', priority: 0.6, changefreq: 'monthly' },
  {
    path: '/vietnam-exchange-rates',
    title: 'USD to VND Exchange Rate Today | Vietnam Dong Rates',
    priority: 0.85,
    changefreq: 'daily',
  },
  {
    path: '/vietnam-statistics',
    title: 'Vietnam Economic Statistics & Market Data 2026',
    priority: 0.85,
    changefreq: 'daily',
  },
  {
    path: '/vietnam-compliance-calendar',
    title: 'Vietnam Business Compliance Calendar 2026 | Tax & Filing Deadlines',
    priority: 0.85,
    changefreq: 'monthly',
  },
  { path: '/tools/salary-calculator', title: 'Vietnam Salary Calculator', priority: 0.85, changefreq: 'monthly' },
  {
    path: '/tools/work-permit-checker',
    title: 'Do I Need a Vietnam Work Permit?',
    priority: 0.85,
    changefreq: 'monthly',
  },
  { path: '/visa', title: 'Vietnam Visa Requirements by Nationality 2026', priority: 0.9, changefreq: 'weekly' },
  {
    path: '/convert',
    title: 'VND Currency Converter - Convert to Vietnamese Dong',
    priority: 0.85,
    changefreq: 'daily',
  },
  {
    path: '/tax-treaty',
    title: 'Vietnam Double Tax Agreements by Country',
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    path: '/salary',
    title: 'Expat Salary Guide Vietnam 2026 | Salaries by Role',
    priority: 0.85,
    changefreq: 'monthly',
  },
];

const snapshot = snapshotJson as LastmodSnapshot;

function isoDate(value: string | undefined | null): string | undefined {
  if (!value) return undefined;
  const day = value.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : undefined;
}

function fileDate(path: string): string | undefined {
  const file = PAGE_SOURCES[path];
  if (!file) return undefined;
  return isoDate(loadLastmods(snapshot).files[file]);
}

function blockDate(file: string, id: string): string | undefined {
  return isoDate(loadLastmods(snapshot).blocks[`${file}#${id}`]);
}

export function sectionFor(path: string): SitemapSection {
  const segment = path.split('/').filter(Boolean)[0] ?? '';
  switch (segment) {
    case 'services':
      return 'Services';
    case 'guides':
      return 'Guides';
    case 'blog':
      return 'Blog';
    case 'tools':
      return 'Tools';
    case 'visa':
      return 'Visa requirements';
    case 'convert':
      return 'Currency converter';
    case 'tax-treaty':
      return 'Tax treaties';
    case 'salary':
      return 'Salary guide';
    default:
      return 'Pages';
  }
}

function entry(
  path: string,
  title: string,
  priority: number,
  changefreq: ChangeFreq,
  lastmod: string | undefined,
): SitemapEntry {
  return {
    path,
    title: title.replace(/\u2014/g, '-').replace(/\u2013/g, '-'),
    section: sectionFor(path),
    lastmod,
    changefreq,
    priority,
  };
}

/**
 * Shared URL list for sitemap.xml and the HTML sitemap.
 * Image and video entries are intentionally absent: this site has no unique
 * content images or embedded video. The logo, the default social card, and
 * the repeated landscape background are not content images.
 */
export function getSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = STATIC_PAGES.map((page) =>
    entry(page.path, page.title, page.priority, page.changefreq, fileDate(page.path)),
  );

  for (const slug of getAllServiceSlugs()) {
    const service = getServiceBySlug(slug);
    entries.push(
      entry(
        `/services/${slug}`,
        service?.title ?? slug,
        0.9,
        'monthly',
        blockDate(BLOCK_FILES.services, slug),
      ),
    );
  }

  for (const slug of getAllGuideSlugs()) {
    const guide = getGuideBySlug(slug);
    entries.push(
      entry(`/guides/${slug}`, guide?.title ?? slug, 0.85, 'monthly', isoDate(guide?.lastUpdated)),
    );
  }

  for (const slug of getAllBlogSlugs()) {
    const post = getBlogPostBySlug(slug);
    entries.push(entry(`/blog/${slug}`, post?.title ?? slug, 0.75, 'monthly', isoDate(post?.date)));
  }

  for (const slug of getAllVisaSlugs()) {
    const visa = getVisaCountry(slug);
    const title = visa
      ? `Vietnam Visa for ${visa.nationality} Citizens 2026`
      : slug;
    entries.push(entry(`/visa/${slug}`, title, 0.85, 'monthly', blockDate(BLOCK_FILES.visas, slug)));
  }

  for (const [code, name] of CONVERT_PAIRS) {
    entries.push(
      entry(
        `/convert/${code}-to-vnd`,
        `${code.toUpperCase()} to VND Exchange Rate Today (${name} to Vietnamese Dong)`,
        0.85,
        'daily',
        blockDate(BLOCK_FILES.convert, code.toUpperCase()),
      ),
    );
  }

  for (const slug of getAllTreatyCountrySlugs()) {
    const treaty = getTreatyCountry(slug);
    const title = treaty ? `Vietnam ${treaty.country} Double Tax Agreement (DTA)` : slug;
    entries.push(
      entry(`/tax-treaty/${slug}`, title, 0.8, 'monthly', blockDate(BLOCK_FILES.treaties, slug)),
    );
  }

  for (const slug of getAllSalaryRoleSlugs()) {
    const role = getSalaryRole(slug);
    const title = role ? `${role.title} Salary in Vietnam 2026` : slug;
    entries.push(
      entry(`/salary/${slug}`, title, 0.8, 'monthly', blockDate(BLOCK_FILES.salary, slug)),
    );
  }

  const paths = entries.map((item) => item.path);
  if (new Set(paths).size !== paths.length) {
    throw new Error('Sitemap entries contain a duplicate path');
  }

  return entries;
}
