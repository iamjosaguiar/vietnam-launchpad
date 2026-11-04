import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  ROUTES,
  bulkGuard,
  canonicalOf,
  isDisallowed,
  main,
  parseRobots,
  sameUrl,
  changedSince,
  diffSnapshots,
  expandRoutes,
  fileRoute,
  isNoindex,
  mapChanges,
  normalisePath,
  parseNameStatus,
  parseSitemap,
  unionDiffs,
} from './indexnow.mjs';

const HOST = 'www.vietnamlaunchpad.com';
const O = `https://${HOST}`;

test('parseSitemap reads a sitemap index', () => {
  const xml = `<?xml version="1.0"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${O}/sitemap-0.xml</loc></sitemap>
  <sitemap>
    <loc> ${O}/sitemap-1.xml </loc>
    <lastmod>2026-11-01</lastmod>
  </sitemap>
</sitemapindex>`;
  const { sitemaps, urls } = parseSitemap(xml, HOST);
  assert.deepEqual(sitemaps, [`${O}/sitemap-0.xml`, `${O}/sitemap-1.xml`]);
  assert.deepEqual(urls, {});
});

test('parseSitemap reads a urlset, decodes entities and filters host', () => {
  const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${O}/</loc><lastmod>2026-11-01T00:00:00.000Z</lastmod></url>
  <url>
    <loc>
      ${O}/guides/a?x=1&amp;y=2
    </loc>
  </url>
  <url><loc><![CDATA[${O}/cdata/]]></loc><lastmod> 2026-10-01 </lastmod></url>
  <url><loc>https://other.example.com/page</loc></url>
  <url><loc>https://AMBRIT.com.au/apex</loc></url>
</urlset>`;
  const { sitemaps, urls } = parseSitemap(xml, HOST);
  assert.deepEqual(sitemaps, []);
  assert.deepEqual(urls, {
    [`${O}/`]: '2026-11-01T00:00:00.000Z',
    [`${O}/guides/a?x=1&y=2`]: '',
    [`${O}/cdata/`]: '2026-10-01',
  });
});

test('diffSnapshots finds added, changed and removed', () => {
  const prev = { [`${O}/a`]: '2026-01-01', [`${O}/b`]: '2026-01-01', [`${O}/c`]: '', [`${O}/gone`]: '2026-01-01' };
  const curr = { [`${O}/a`]: '2026-01-01', [`${O}/b`]: '2026-02-01', [`${O}/c`]: '2026-02-01', [`${O}/new`]: '' };
  assert.deepEqual(diffSnapshots(prev, curr), {
    added: [`${O}/new`],
    changed: [`${O}/b`],
    removed: [`${O}/gone`],
  });
});

test('diffSnapshots ignores lastmod changes on IGNORE_LASTMOD paths', () => {
  const prev = { [`${O}/blog/x`]: '2026-01-01', [`${O}/about`]: '2026-01-01' };
  const curr = { [`${O}/blog/x`]: '2026-02-01', [`${O}/about`]: '2026-02-01' };
  const diff = diffSnapshots(prev, curr, [/^\/blog\//]);
  assert.deepEqual(diff.changed, [`${O}/about`]);
  assert.deepEqual(diff.added, []);
  assert.deepEqual(diff.removed, []);
});

test('changedSince keeps only lastmod strictly after since', () => {
  const curr = {
    [`${O}/old`]: '2026-10-01T00:00:00Z',
    [`${O}/same`]: '2026-11-01T00:00:00Z',
    [`${O}/new`]: '2026-11-02',
    [`${O}/none`]: '',
    [`${O}/bad`]: 'not a date',
  };
  assert.deepEqual(changedSince(curr, '2026-11-01T00:00:00Z'), [`${O}/new`]);
  assert.deepEqual(changedSince(curr, 'garbage'), []);
  assert.deepEqual(changedSince(curr, '2026-11-01T00:00:00Z', [/^\/new$/]), []);
});

test('bulkGuard trips only above 50 and above half the site', () => {
  assert.equal(bulkGuard(50, 60), false);
  assert.equal(bulkGuard(51, 60), true);
  assert.equal(bulkGuard(51, 102), false);
  assert.equal(bulkGuard(51, 101), true);
  assert.equal(bulkGuard(10, 12), false);
});

test('isNoindex checks X-Robots-Tag and robots meta tags', () => {
  assert.equal(isNoindex('noindex, nofollow', ''), true);
  assert.equal(isNoindex('bingbot: noindex', ''), true);
  assert.equal(isNoindex('none', ''), true);
  assert.equal(isNoindex('max-image-preview:large', ''), false);
  assert.equal(isNoindex(null, '<meta name="robots" content="noindex">'), true);
  assert.equal(isNoindex(null, `<META CONTENT='NOINDEX,follow' NAME='Robots'>`), true);
  assert.equal(isNoindex(null, '<meta content="index, noindex" name="googlebot" />'), true);
  assert.equal(isNoindex(null, '<meta name=bingbot content=noindex>'), true);
  assert.equal(isNoindex(null, '<meta name="robots" content="index, follow">'), false);
  assert.equal(isNoindex(null, '<meta name="description" content="noindex is a word">'), false);
  assert.equal(isNoindex(null, '<p>noindex</p>'), false);
});

test('normalisePath uses the sitemap form when the URL exists', () => {
  const locs = [`${O}/`, `${O}/guides/`, `${O}/sitemap`];
  assert.equal(normalisePath('/guides', HOST, locs), `${O}/guides/`);
  assert.equal(normalisePath('/sitemap/', HOST, locs), `${O}/sitemap`);
  assert.equal(normalisePath(`${O}/guides`, HOST, locs), `${O}/guides/`);
});

test('normalisePath infers trailing slash style from the sitemap', () => {
  const slashed = [`${O}/`, `${O}/a/`, `${O}/b/`, `${O}/c`];
  assert.equal(normalisePath('/new', HOST, slashed), `${O}/new/`);
  assert.equal(normalisePath('new', HOST, slashed), `${O}/new/`);
  assert.equal(normalisePath('/feed.xml', HOST, slashed), `${O}/feed.xml`);
  const bare = [`${O}/`, `${O}/a`, `${O}/b`, `${O}/c/`];
  assert.equal(normalisePath('/new/', HOST, bare), `${O}/new`);
});

test('normalisePath uses the root form from the sitemap', () => {
  assert.equal(normalisePath('/', HOST, [O, `${O}/a`]), O);
  assert.equal(normalisePath('/', HOST, [`${O}/`, `${O}/a`]), `${O}/`);
  assert.equal(normalisePath('/', HOST, []), `${O}/`);
});

test('normalisePath rejects other hosts', () => {
  assert.throws(() => normalisePath('https://example.com/a', HOST, []), /not on/);
});

test('fileRoute maps astro pages', () => {
  const astro = { router: 'astro', dir: 'src/pages', exts: ['.astro', '.md', '.mdx'] };
  assert.equal(fileRoute('src/pages/index.astro', astro), '/');
  assert.equal(fileRoute('src/pages/about.astro', astro), '/about');
  assert.equal(fileRoute('src/pages/guides/index.astro', astro), '/guides');
  assert.equal(fileRoute('src/pages/guides/foo.mdx', astro), '/guides/foo');
  assert.equal(fileRoute('src/pages/vpp/[slug].astro', astro), '/vpp/[slug]');
  assert.equal(fileRoute('src/pages/docs/[...slug].astro', astro), '/docs/[...slug]');
  assert.equal(fileRoute('src/pages/_draft.astro', astro), null);
  assert.equal(fileRoute('src/pages/_parts/x.astro', astro), null);
  assert.equal(fileRoute('src/pages/suburbs/[postcode].json.ts', astro), null);
  assert.equal(fileRoute('src/pages/rss.xml.js', astro), null);
  assert.equal(fileRoute('src/pages/api/lead.ts', astro), null);
  assert.equal(fileRoute('src/components/Faq.astro', astro), null);
});

test('fileRoute maps next-app pages', () => {
  const next = { router: 'next-app', dir: 'app' };
  assert.equal(fileRoute('app/page.tsx', next), '/');
  assert.equal(fileRoute('app/blog/[slug]/page.mdx', next), '/blog/[slug]');
  assert.equal(fileRoute('app/(marketing)/pricing/page.js', next), '/pricing');
  assert.equal(fileRoute('app/(shop)/[[...cat]]/page.tsx', next), '/[[...cat]]');
  assert.equal(fileRoute('app/blog/layout.tsx', next), null);
  assert.equal(fileRoute('app/@modal/login/page.tsx', next), null);
  assert.equal(fileRoute('app/_lib/page.tsx', next), null);
  assert.equal(fileRoute('app/api/hook/page.ts', next), null);
  assert.equal(fileRoute('app/feed/(.)photo/page.tsx', next), null);
});

test('expandRoutes matches static, dynamic and catch-all patterns', () => {
  const urls = [`${O}/`, `${O}/guides/`, `${O}/guides/a/`, `${O}/vpp/x/`, `${O}/vpp/x/y/`, `${O}/docs`, `${O}/docs/a/b`];
  assert.deepEqual(expandRoutes(['/'], urls), [`${O}/`]);
  assert.deepEqual(expandRoutes(['/guides/a', '/guides/a/'], urls), [`${O}/guides/a/`]);
  assert.deepEqual(expandRoutes(['/vpp/[slug]'], urls), [`${O}/vpp/x/`]);
  assert.deepEqual(expandRoutes(['/docs/[...p]'], urls), [`${O}/docs/a/b`]);
  assert.deepEqual(expandRoutes(['/docs/[[...p]]'], urls), [`${O}/docs`, `${O}/docs/a/b`]);
  assert.deepEqual(expandRoutes(['/nope'], urls), []);
  assert.deepEqual(expandRoutes(['/'], [O]), [O]);
});

// The site's own sitemap shape: bare paths, root without a trailing slash.
const SITE_URLS = [
  O,
  `${O}/about`,
  `${O}/sitemap`,
  `${O}/visa`,
  `${O}/visa/australia`,
  `${O}/visa/canada`,
  `${O}/services`,
  `${O}/services/work-permit`,
  `${O}/services/trc`,
  `${O}/guides`,
  `${O}/guides/living-in-vietnam`,
  `${O}/blog`,
  `${O}/blog/some-post`,
  `${O}/tax-treaty`,
  `${O}/tax-treaty/australia`,
  `${O}/salary`,
  `${O}/salary/software-engineer`,
  `${O}/convert`,
  `${O}/convert/usd-to-vnd`,
];

test('mapChanges uses ROUTES, strips route groups and [locale], and flags deleted static pages', () => {
  const changes = parseNameStatus(
    'M\tsrc/app/(site)/[locale]/page.tsx\nM\tsrc/components/Navigation.tsx\nM\tsrc/app/(site)/[locale]/layout.tsx\n' +
      'D\tsrc/app/(site)/[locale]/old-page/page.tsx\nM\tsrc/app/(site)/[locale]/about/page.tsx\n' +
      'M\tsrc/app/(site)/visa/page.tsx\n',
  );
  assert.equal(changes.length, 6);
  const out = mapChanges(changes, SITE_URLS, { rules: ROUTES, host: HOST });
  assert.deepEqual(out.changed, [O, `${O}/about`, `${O}/visa`]);
  assert.deepEqual(out.removed, [`${O}/old-page`]);
});

test('ROUTES maps visa/[country] data to the visa country pages', () => {
  for (const file of ['src/data/visaCurated.ts', 'src/data/visa-copy.ts']) {
    const out = mapChanges([{ status: 'M', file }], SITE_URLS, { rules: ROUTES, host: HOST });
    assert.deepEqual(out.changed, [`${O}/visa/australia`, `${O}/visa/canada`]);
  }
  const out = mapChanges([{ status: 'M', file: 'src/data/visas.ts' }], SITE_URLS, { rules: ROUTES, host: HOST });
  assert.deepEqual(out.changed, [`${O}/visa`, `${O}/visa/australia`, `${O}/visa/canada`]);
});

test('ROUTES maps content data files to their listings and detail pages', () => {
  const cases = [
    ['src/data/services.ts', [`${O}/services`, `${O}/services/work-permit`, `${O}/services/trc`]],
    ['src/data/guidesSeo.ts', [`${O}/guides`, `${O}/guides/living-in-vietnam`]],
    ['src/data/blog.ts', [`${O}/blog`, `${O}/blog/some-post`]],
    ['src/data/taxTreaties.ts', [`${O}/tax-treaty`, `${O}/tax-treaty/australia`]],
    ['src/data/salaryRoles.ts', [`${O}/salary`, `${O}/salary/software-engineer`]],
    ['src/data/aboutCopy.ts', [`${O}/about`]],
    ['src/data/homeCopy.ts', [O, `${O}/about`, `${O}/visa`]],
  ];
  for (const [file, expected] of cases) {
    const out = mapChanges([{ status: 'M', file }], SITE_URLS, { rules: ROUTES, host: HOST });
    assert.deepEqual(out.changed.sort(), [...expected].sort(), file);
  }
});

test('ROUTES maps dynamic page files without the locale segment', () => {
  const changes = parseNameStatus(
    'M\tsrc/app/(site)/[locale]/visa/[country]/page.tsx\nM\tsrc/app/(site)/[locale]/convert/[pair]/page.tsx\n' +
      'M\tsrc/app/(site)/[locale]/blog/[slug]/page.tsx\n',
  );
  const out = mapChanges(changes, SITE_URLS, { rules: ROUTES, host: HOST });
  assert.deepEqual(out.changed.sort(), [
    `${O}/blog/some-post`,
    `${O}/convert/usd-to-vnd`,
    `${O}/visa/australia`,
    `${O}/visa/canada`,
  ]);
});

test('ROUTES ignores infra files, API routes, unlisted pages and the sitemap generators', () => {
  const changes = parseNameStatus(
    'M\tsrc/lib/sitemap.ts\nM\tsrc/app/(site)/sitemap.xml/route.ts\nM\tsrc/app/(site)/[locale]/api/contact/route.ts\n' +
      'M\tsrc/app/(site)/api/get-started/route.ts\nM\tsrc/app/(site)/[locale]/enterprise/page.tsx\n' +
      'D\tsrc/app/(site)/[locale]/get-started/page.tsx\nM\tsrc/lib/site.ts\nM\tsrc/lib/sitemap-lastmod.json\n' +
      'M\tsrc/components/Footer.tsx\nM\tsrc/middleware.ts\nM\tpublic/robots.txt\nM\tsrc/app/icon.svg\n',
  );
  const out = mapChanges(changes, SITE_URLS, { rules: ROUTES, host: HOST });
  assert.deepEqual(out.changed, []);
  assert.deepEqual(out.removed, []);
});

test('mapChanges honours rule hosts', () => {
  const rules = [{ file: /^x$/, to: '/a', hosts: ['other.example'] }];
  assert.deepEqual(mapChanges([{ status: 'M', file: 'x' }], [`${O}/a`], { rules, host: HOST }).changed, []);
});

test('unionDiffs dedups and keeps added URLs in added only', () => {
  const site = { added: [`${O}/a`], changed: [`${O}/b`], removed: [`${O}/gone`] };
  const git = { changed: [`${O}/a`, `${O}/b`, `${O}/c`], removed: [`${O}/gone`, `${O}/old`] };
  assert.deepEqual(unionDiffs(site, git), {
    added: [`${O}/a`],
    changed: [`${O}/b`, `${O}/c`],
    removed: [`${O}/gone`, `${O}/old`],
  });
});

test('canonicalOf reads the HTML link tag and the Link header', () => {
  const base = 'https://example.com/a';
  assert.equal(canonicalOf(null, '<link rel="canonical" href="/b">', base), 'https://example.com/b');
  assert.equal(canonicalOf(null, "<link href='https://example.com/a?x=1&amp;y=2' rel='Canonical'>", base), 'https://example.com/a?x=1&y=2');
  assert.equal(canonicalOf('<https://example.com/c>; rel="canonical"', '', base), 'https://example.com/c');
  assert.equal(canonicalOf('<https://cdn.example.com/x.css>; rel=preload, <https://example.com/d>; rel=canonical', '', base), 'https://example.com/d');
  assert.equal(canonicalOf(null, '<link rel="alternate" href="/fr">', base), null);
  assert.equal(canonicalOf(null, '', base), null);
});

test('sameUrl flags a foreign canonical but not a self canonical', () => {
  assert.equal(sameUrl('https://EXAMPLE.com/a', 'https://example.com/a#top'), true);
  assert.equal(sameUrl('https://example.com/a', 'https://example.com/a/'), false);
  assert.equal(sameUrl('https://example.com/a', 'https://other.example/a'), false);
});

test('parseRobots keeps only user-agent * groups, including grouped agents', () => {
  const rules = parseRobots(
    'User-agent: Googlebot\nDisallow: /g-only\n\nUser-agent: Bingbot\nUser-agent: *\nDisallow: /api/ # comment\nAllow: /api/public\nDisallow:\n\nUser-agent: GPTBot\nDisallow: /',
  );
  assert.deepEqual(rules, [
    { allow: false, pattern: '/api/' },
    { allow: true, pattern: '/api/public' },
  ]);
});

test('isDisallowed uses longest match, Allow on ties, wildcards and $', () => {
  const rules = parseRobots(
    'User-agent: *\nDisallow: /training\nDisallow: /auth/\nDisallow: /profit-first/thank-you\nDisallow: /*.pdf$\nDisallow: /shop\nAllow: /shop/\nDisallow: /tie\nAllow: /tie',
  );
  const d = (p) => isDisallowed(`https://example.com${p}`, rules);
  assert.equal(d('/training'), true);
  assert.equal(d('/training/module-1'), true);
  assert.equal(d('/auth/login'), true);
  assert.equal(d('/auth'), false);
  assert.equal(d('/profit-first/thank-you'), true);
  assert.equal(d('/guide.pdf'), true);
  assert.equal(d('/guide.pdf?x=1'), false);
  assert.equal(d('/shop'), true);
  assert.equal(d('/shop/item'), false);
  assert.equal(d('/tie'), false);
  assert.equal(d('/'), false);
  assert.equal(isDisallowed('https://example.com/x', []), false);
});

test('main drops robots-disallowed and foreign-canonical explicit paths (mocked fetch, dry run)', async (t) => {
  const origin = `https://${HOST}`;
  const pages = {
    '/': '<html><head><link rel="canonical" href="/"></head></html>',
    '/fixture-foreign-canonical': '<html><head><link rel="canonical" href="https://elsewhere.example/page"></head></html>',
  };
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (input, init = {}) => {
    const url = new URL(String(input));
    if (init.method === 'POST') throw new Error('dry run must not POST');
    if (url.pathname === '/robots.txt') return new Response('User-agent: *\nDisallow: /fixture-disallowed\n', { status: 200 });
    if (/sitemap/.test(url.pathname)) {
      const locs = ['/', '/fixture-disallowed', '/fixture-foreign-canonical'].map((p) => `<url><loc>${origin}${p}</loc></url>`);
      return new Response(`<urlset>${locs.join('')}</urlset>`, { status: 200 });
    }
    const html = pages[url.pathname] ?? '<html></html>';
    return new Response(html, { status: 200, headers: { 'content-type': 'text/html' } });
  };
  const logs = [];
  const realLog = console.log;
  console.log = (...a) => logs.push(a.join(' '));
  t.after(() => {
    globalThis.fetch = realFetch;
    console.log = realLog;
  });
  const code = await main(['--dry-run', '/', '/fixture-disallowed', '/fixture-foreign-canonical']);
  console.log = realLog;
  assert.equal(code, 0);
  const out = logs.join('\n');
  assert.match(out, /Dropped https:\/\/[^ ]+\/fixture-disallowed: robots\.txt disallow/);
  assert.match(out, /Dropped https:\/\/[^ ]+\/fixture-foreign-canonical: non-canonical -> https:\/\/elsewhere\.example\/page/);
  assert.match(out, /1 URLs to send/);
});
