import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Last-modified dates from git, used when a page has no content date.
 * A shallow clone (fewer than 20 commits) is ignored so a one-commit
 * checkout cannot stamp every file with the deploy date.
 *
 * Commits whose message has the trailer `Lastmod-Skip: true` are structural
 * (a move, a framework migration, a formatting pass) and never count as a
 * content change. A file moved by such a commit keeps the date of its last
 * content change at the old path.
 */

const root = process.cwd();

export const PAGE_SOURCES: Record<string, string> = {
  '': 'src/views/page.tsx',
  '/services': 'src/views/services/page.tsx',
  '/guides': 'src/views/guides/page.tsx',
  '/blog': 'src/views/blog/page.tsx',
  '/contact': 'src/views/contact/page.tsx',
  '/faq': 'src/views/faq/page.tsx',
  '/about': 'src/views/about/page.tsx',
  '/vietnam-exchange-rates': 'src/views/vietnam-exchange-rates/page.tsx',
  '/vietnam-statistics': 'src/views/vietnam-statistics/page.tsx',
  '/vietnam-compliance-calendar': 'src/views/vietnam-compliance-calendar/page.tsx',
  '/tools/salary-calculator': 'src/views/tools/salary-calculator/page.tsx',
  '/tools/work-permit-checker': 'src/views/tools/work-permit-checker/page.tsx',
  '/visa': 'src/views/visa/page.tsx',
  '/convert': 'src/views/convert/page.tsx',
  '/tax-treaty': 'src/views/tax-treaty/page.tsx',
  '/salary': 'src/views/salary/page.tsx',
};

export const BLOCK_FILES = {
  services: 'src/data/services.ts',
  visas: 'src/data/visas.ts',
  treaties: 'src/data/taxTreaties.ts',
  salary: 'src/data/salaryRoles.ts',
  convert: 'src/views/convert/[pair]/page.tsx',
} as const;

export type LastmodSnapshot = {
  files: Record<string, string>;
  blocks: Record<string, string>;
};

/** Commit message trailer that marks a commit as structural, not a content change. */
export const LASTMOD_SKIP_TRAILER = 'Lastmod-Skip: true';
const SKIP_GREP = `^${LASTMOD_SKIP_TRAILER}$`;

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

let skipCache: string[] | undefined;

/** Full hashes of structural commits. */
function skipCommits(): string[] {
  skipCache ??= (git(['log', '--format=%H', `--grep=${SKIP_GREP}`]) ?? '').split('\n').filter(Boolean);
  return skipCache;
}

/** Where a structural commit moved `file` from, if that is how the file got its current path. */
function movedFrom(file: string, rev: string): { sha: string; path: string } | undefined {
  const sha = git(['log', '-1', '--no-renames', '--diff-filter=A', '--format=%H', rev, '--', file]);
  if (!sha || !skipCommits().includes(sha)) return undefined;
  for (const line of (git(['show', '-M', '--name-status', '--format=', sha]) ?? '').split('\n')) {
    const [status, from, to] = line.split('\t');
    if (status?.startsWith('R') && to === file) return { sha, path: from };
  }
  return undefined;
}

/**
 * Newest commit that touched the file (`git log -1 -- file`, merges included as git
 * shows them), skipping structural commits. When only a structural move touched the
 * current path, the history continues at the path the file had before the move.
 */
export function fileLastmod(file: string): string | undefined {
  let path = file;
  let rev = 'HEAD';
  for (let moves = 0; moves < 10; moves += 1) {
    const date = isoDate(git(['log', '-1', '--invert-grep', `--grep=${SKIP_GREP}`, '--format=%cs', rev, '--', path]));
    if (date) return date;
    const moved = movedFrom(path, rev);
    if (!moved) return undefined;
    path = moved.path;
    rev = `${moved.sha}^`;
  }
  return undefined;
}

/** YYYY-MM-DD in the commit's own time zone, like `git blame --date=short`. */
function blameDay(epoch: number, tz: string): string {
  const offset = (tz.startsWith('-') ? -1 : 1) * (Number(tz.slice(1, 3)) * 60 + Number(tz.slice(3, 5)));
  return new Date((epoch + offset * 60) * 1000).toISOString().slice(0, 10);
}

const blameCache = new Map<string, string[]>();

/**
 * Author date of each line. Structural commits are ignored (`--ignore-rev`), so a
 * line they only touched keeps its earlier date, and a line they added counts as undated.
 */
function blameDates(file: string): string[] {
  const cached = blameCache.get(file);
  if (cached) return cached;
  let dates: string[] = [];
  try {
    const skip = skipCommits();
    const out = execFileSync('git', ['blame', '-w', '--line-porcelain', ...skip.flatMap((sha) => ['--ignore-rev', sha]), '--', file], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
      maxBuffer: 64 * 1024 * 1024,
    });
    const skipped = new Set(skip);
    let sha = '';
    let time = 0;
    for (const line of out.split('\n')) {
      const header = line.match(/^([0-9a-f]{40}) \d+ \d+/);
      if (header) sha = header[1];
      else if (line.startsWith('author-time ')) time = Number(line.slice(12));
      else if (line.startsWith('author-tz ')) {
        dates.push(skipped.has(sha) ? '' : blameDay(time, line.slice(10)));
      }
    }
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
