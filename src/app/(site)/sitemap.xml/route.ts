import { getAllGuideSlugs } from '@/data/guides';
import { getAllBlogSlugs } from '@/data/blog';
import { getAllServiceSlugs } from '@/data/services';
import { getAllVisaSlugs } from '@/data/visas';
import { getAllTreatyCountrySlugs } from '@/data/taxTreaties';
import { getAllSalaryRoleSlugs } from '@/data/salaryRoles';

const baseUrl = 'https://www.vietnamlaunchpad.com';

function url(path: string, priority: number, changefreq: string): string {
  return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`;
}

export async function GET() {
  const CONVERT_PAIRS = ['usd','eur','gbp','aud','cad','sgd','jpy','krw','hkd','thb','myr','nzd','chf','sek','nok','dkk','cny','twd','inr'];

  const staticPages = [
    url('', 1.0, 'daily'),
    url('/services', 0.9, 'weekly'),
    url('/guides', 0.9, 'weekly'),
    url('/blog', 0.8, 'weekly'),
    url('/contact', 0.8, 'monthly'),
    url('/faq', 0.7, 'monthly'),
    url('/about', 0.6, 'monthly'),
    url('/vietnam-exchange-rates', 0.85, 'daily'),
    url('/vietnam-statistics', 0.85, 'daily'),
    url('/vietnam-compliance-calendar', 0.85, 'monthly'),
    url('/tools/salary-calculator', 0.85, 'monthly'),
    url('/tools/work-permit-checker', 0.85, 'monthly'),
    url('/visa', 0.9, 'weekly'),
    url('/convert', 0.85, 'daily'),
    url('/tax-treaty', 0.85, 'monthly'),
    url('/salary', 0.85, 'monthly'),
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

  const visaUrls = getAllVisaSlugs().map((slug) =>
    url(`/visa/${slug}`, 0.85, 'monthly')
  );

  const convertUrls = CONVERT_PAIRS.map((code) =>
    url(`/convert/${code}-to-vnd`, 0.85, 'daily')
  );

  const treatyUrls = getAllTreatyCountrySlugs().map((slug) =>
    url(`/tax-treaty/${slug}`, 0.8, 'monthly')
  );

  const salaryUrls = getAllSalaryRoleSlugs().map((slug) =>
    url(`/salary/${slug}`, 0.8, 'monthly')
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...serviceUrls, ...guideUrls, ...blogUrls, ...visaUrls, ...convertUrls, ...treatyUrls, ...salaryUrls].join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
