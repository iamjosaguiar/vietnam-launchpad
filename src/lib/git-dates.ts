import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Last-modified dates from git, used when a page has no content date.
 * A shallow clone (fewer than 20 commits) is ignored so a one-commit
 * checkout cannot stamp every file with the deploy date.
 */

const root = process.cwd();

export const PAGE_SOURCES: Record<string, string> = {
  '': 'src/app/(site)/[locale]/page.tsx',
  '/services': 'src/app/(site)/[locale]/services/page.tsx',
  '/guides': 'src/app/(site)/[locale]/guides/page.tsx',
  '/blog': 'src/app/(site)/[locale]/blog/page.tsx',
  '/contact': 'src/app/(site)/[locale]/contact/page.tsx',
  '/faq': 'src/app/(site)/[locale]/faq/page.tsx',
  '/about': 'src/app/(site)/[locale]/about/page.tsx',
  '/vietnam-exchange-rates': 'src/app/(site)/[locale]/vietnam-exchange-rates/page.tsx',
  '/vietnam-statistics': 'src/app/(site)/[locale]/vietnam-statistics/page.tsx',
  '/vietnam-compliance-calendar': 'src/app/(site)/[locale]/vietnam-compliance-calendar/page.tsx',
  '/tools/salary-calculator': 'src/app/(site)/[locale]/tools/salary-calculator/page.tsx',
  '/tools/work-permit-checker': 'src/app/(site)/[locale]/tools/work-permit-checker/page.tsx',
  '/visa': 'src/app/(site)/[locale]/visa/page.tsx',
  '/convert': 'src/app/(site)/[locale]/convert/page.tsx',
  '/tax-treaty': 'src/app/(site)/[locale]/tax-treaty/page.tsx',
  '/salary': 'src/app/(site)/[locale]/salary/page.tsx',
};

export const BLOCK_FILES = {
  services: 'src/data/services.ts',
  visas: 'src/data/visas.ts',
  treaties: 'src/data/taxTreaties.ts',
  salary: 'src/data/salaryRoles.ts',
  convert: 'src/app/(site)/[locale]/convert/[pair]/page.tsx',
} as const;

export type LastmodSnapshot = {
  files: Record<string, string>;
  blocks: Record<string, string>;
};

function git(args: string[]): string | undefined {
  try {
    const out = execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}

export function repoIsDeep(): boolean {
  const count = Number(git(['rev-list', '--count', 'HEAD']));
  return Number.isFinite(count) && count >= 20;
}

function isoDate(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const day = value.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : undefined;
}

export function fileLastmod(file: string): string | undefined {
  return isoDate(git(['log', '-1', '--format=%cs', '--', file]));
}

const blameCache = new Map<string, string[]>();

function blameDates(file: string): string[] {
  const cached = blameCache.get(file);
  if (cached) return cached;
  let dates: string[] = [];
  try {
    const out = execFileSync('git', ['blame', '-w', '--date=short', '--', file], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    dates = out
      .split('\n')
      .filter((line) => line.length > 0)
      .map((line) => isoDate(line.match(/(\d{4}-\d{2}-\d{2})/)?.[1]) ?? '');
  } catch {
    dates = [];
  }
  blameCache.set(file, dates);
  return dates;
}

function maxDate(dates: string[]): string | undefined {
  let best: string | undefined;
  for (const date of dates) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(date) && (!best || date > best)) best = date;
  }
  return best;
}

/** Latest commit that touched one record inside a shared source file. */
export function blockLastmod(file: string, marker: string): string | undefined {
  const lines = readFileSync(resolve(root, file), 'utf8').split('\n');
  const start = lines.findIndex((line) => line.includes(marker));
  if (start < 0) return fileLastmod(file);

  const kind = marker.startsWith('from:') ? "from: '" : "slug: '";
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i].includes(kind)) {
      end = i;
      break;
    }
  }

  const dates = blameDates(file);
  return maxDate(dates.slice(start, Math.min(end, dates.length))) ?? fileLastmod(file);
}

function sortRecord(record: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(record).sort(([a], [b]) => a.localeCompare(b)));
}

export function buildSnapshot(): LastmodSnapshot {
  const files: Record<string, string> = {};
  for (const file of new Set(Object.values(PAGE_SOURCES))) {
    const date = fileLastmod(file);
    if (date) files[file] = date;
  }

  const blocks: Record<string, string> = {};
  for (const file of [BLOCK_FILES.services, BLOCK_FILES.visas, BLOCK_FILES.treaties, BLOCK_FILES.salary]) {
    const text = readFileSync(resolve(root, file), 'utf8');
    for (const match of text.matchAll(/slug: '([^']+)'/g)) {
      const slug = match[1];
      const date = blockLastmod(file, `slug: '${slug}'`);
      if (date) blocks[`${file}#${slug}`] = date;
    }
  }

  const convertText = readFileSync(resolve(root, BLOCK_FILES.convert), 'utf8');
  for (const match of convertText.matchAll(/from: '([A-Z]{3})'/g)) {
    const code = match[1];
    const date = blockLastmod(BLOCK_FILES.convert, `from: '${code}'`);
    if (date) blocks[`${BLOCK_FILES.convert}#${code}`] = date;
  }

  return { files: sortRecord(files), blocks: sortRecord(blocks) };
}

let cached: LastmodSnapshot | undefined;

export function loadLastmods(fallback: LastmodSnapshot): LastmodSnapshot {
  if (cached) return cached;
  if (repoIsDeep()) {
    try {
      cached = buildSnapshot();
      return cached;
    } catch {
      // Use the committed snapshot when git cannot be read.
    }
  }
  cached = fallback;
  return cached;
}

const entry = process.argv[1];
if (entry && resolve(entry) === resolve(root, 'src/lib/git-dates.ts')) {
  const snapshot = buildSnapshot();
  const target = resolve(root, 'src/lib/sitemap-lastmod.json');
  writeFileSync(target, `${JSON.stringify(snapshot, null, 2)}\n`);
  const dates = new Set([...Object.values(snapshot.files), ...Object.values(snapshot.blocks)]);
  console.log(
    `Wrote ${Object.keys(snapshot.files).length} files and ${Object.keys(snapshot.blocks).length} blocks, ${dates.size} distinct dates`,
  );
}
