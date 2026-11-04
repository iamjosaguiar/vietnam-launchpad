// Runs after `npm run build`. Proves the 7 visa pages marked noindex in
// src/app/(site)/[locale]/visa/[country]/page.tsx are left out of the built
// sitemap.xml, and that the IndexNow script cannot send them.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { diffSnapshots, isNoindex, mapChanges, parseNameStatus, parseSitemap, ROUTES } from './indexnow.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const HOST = 'www.vietnamlaunchpad.com';
const O = `https://${HOST}`;
const NOINDEX = ['united-states', 'australia', 'canada', 'new-zealand', 'austria', 'portugal', 'greece'];
const NOINDEX_URLS = NOINDEX.map((s) => `${O}/visa/${s}`);
const SITEMAP_BODY = join(ROOT, '.next/server/app/sitemap.xml.body');

function builtSitemap() {
  assert.ok(existsSync(SITEMAP_BODY), `missing ${SITEMAP_BODY}; run npm run build first`);
  return parseSitemap(readFileSync(SITEMAP_BODY, 'utf8'), HOST).urls;
}

function findBuiltHtml(slug) {
  const want = `visa/${slug}.html`;
  const stack = [join(ROOT, '.next/server/app')];
  while (stack.length) {
    const dir = stack.pop();
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) stack.push(p);
      else if (p.endsWith(want)) return p;
    }
  }
  return null;
}

test('the page source still marks exactly these 7 visa pages noindex', () => {
  const src = readFileSync(join(ROOT, 'src/app/(site)/[locale]/visa/[country]/page.tsx'), 'utf8');
  const set = src.match(/NOINDEX_UNTIL_FIXED = new Set\(\[([\s\S]*?)\]\)/);
  assert.ok(set, 'NOINDEX_UNTIL_FIXED not found');
  const slugs = [...set[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  assert.deepEqual([...slugs].sort(), [...NOINDEX].sort());
});

test('each built noindex visa page renders robots noindex', () => {
  for (const slug of NOINDEX) {
    const file = findBuiltHtml(slug);
    assert.ok(file, `no built HTML for /visa/${slug}`);
    assert.ok(isNoindex(null, readFileSync(file, 'utf8')), `/visa/${slug} HTML has no robots noindex`);
  }
});

test('built sitemap.xml leaves out the 7 noindex visa pages and keeps the other visa pages', () => {
  const urls = Object.keys(builtSitemap());
  for (const u of NOINDEX_URLS) assert.ok(!urls.includes(u), `${u} is in the sitemap but is noindex`);
  const visa = urls.filter((u) => /\/visa\/[^/]+$/.test(u));
  assert.ok(visa.length > 0, 'no visa country pages left in the sitemap');
  assert.ok(urls.includes(`${O}/visa`), '/visa index missing');
  // Every indexable visa page that was built is still listed.
  for (const u of visa) assert.ok(!NOINDEX_URLS.includes(u));
});

test('IndexNow: a change to visa data or the visa template maps to no noindex URL', () => {
  const urls = Object.keys(builtSitemap());
  const changes = parseNameStatus(
    [
      'M\tsrc/data/visas.ts',
      'M\tsrc/data/visaCurated.ts',
      'M\tsrc/data/visa-copy.ts',
      'M\tsrc/app/(site)/[locale]/visa/[country]/page.tsx',
      'M\tsrc/app/(site)/visa/[country]/page.tsx',
    ].join('\n'),
  );
  const out = mapChanges(changes, urls, { rules: ROUTES, host: HOST });
  assert.ok(out.changed.some((u) => /\/visa\/[^/]+$/.test(u)), 'visa change should still map to indexable visa pages');
  for (const u of NOINDEX_URLS) {
    assert.ok(!out.changed.includes(u), `${u} would be sent as changed`);
    assert.ok(!out.removed.includes(u), `${u} would be sent as removed`);
  }
});

test('IndexNow: dropping them from the sitemap never lists them as added or changed', () => {
  const curr = builtSitemap();
  // The live sitemap before #26 listed them; pretend that was the previous snapshot.
  const prev = { ...curr, ...Object.fromEntries(NOINDEX_URLS.map((u) => [u, '2026-01-01'])) };
  const diff = diffSnapshots(prev, curr);
  for (const u of NOINDEX_URLS) {
    assert.ok(!diff.added.includes(u) && !diff.changed.includes(u), `${u} would be sent as live`);
  }
  // They show up only as removal candidates, which the script only sends when
  // the URL returns 404/410; these pages still return 200 (with noindex), so
  // they are dropped. And as live candidates the noindex check drops them:
  assert.deepEqual([...diff.removed].sort(), [...NOINDEX_URLS].sort());
  for (const slug of NOINDEX) {
    assert.ok(isNoindex(null, readFileSync(findBuiltHtml(slug), 'utf8')));
  }
});
