import { getAllGuideSlugs } from '@/data/guides';
import { getAllBlogSlugs } from '@/data/blog';
import { getAllServiceSlugs } from '@/data/services';

const baseUrl = 'https://www.vietnamlaunchpad.com';

function url(path: string, priority: number, changefreq: string): string {
  return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const staticPages = [
    url('', 1.0, 'daily'),
    url('/services', 0.9, 'weekly'),
    url('/guides', 0.9, 'weekly'),
    url('/blog', 0.8, 'weekly'),
    url('/contact', 0.8, 'monthly'),
    url('/faq', 0.7, 'monthly'),
    url('/about', 0.6, 'monthly'),
  ];

  const serviceUrls = getAllServiceSlugs().map((slug) =>
    url(`/services/${slug}`, 0.9, 'monthly')
  );

  const guideUrls = getAllGuideSlugs().map((slug) =>
    url(`/guides/${slug}`, 0.85, 'monthly')
  );

  const blogUrls = getAllBlogSlugs().map((slug) =>
    url(`/blog/${slug}`, 0.75, 'monthly')
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...serviceUrls, ...guideUrls, ...blogUrls].join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
