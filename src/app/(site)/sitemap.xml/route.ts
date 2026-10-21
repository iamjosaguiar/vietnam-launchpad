import { BASE_URL, getSitemapEntries, type SitemapEntry } from '@/lib/sitemap';

export const dynamic = 'force-static';
export const runtime = 'nodejs';

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// The HTML sitemap lists every other page, so it is added only here and
// does not appear in its own list. Its lastmod is the newest date it links to.
function withHtmlSitemap(entries: SitemapEntry[]): SitemapEntry[] {
  const lastmod = entries.reduce<string | undefined>(
    (newest, item) => (item.lastmod && (!newest || item.lastmod > newest) ? item.lastmod : newest),
    undefined,
  );
  return [
    ...entries,
    { path: '/sitemap', title: 'Sitemap', section: 'Pages', lastmod, changefreq: 'weekly', priority: 0.3 },
  ];
}

export function GET() {
  const urls = withHtmlSitemap(getSitemapEntries())
    .map((entry) => {
      const loc = xmlEscape(`${BASE_URL}${entry.path}`);
      const lastmod = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : '';
      return `  <url>\n    <loc>${loc}</loc>${lastmod}\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority.toFixed(2)}</priority>\n  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
