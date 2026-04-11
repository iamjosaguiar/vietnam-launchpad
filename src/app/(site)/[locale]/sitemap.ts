import { MetadataRoute } from 'next';
import { getAllGuideSlugs } from '@/data/guides';
import { getAllBlogSlugs } from '@/data/blog';
import { getAllServiceSlugs } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vietnamlaunchpad.com';

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/guides`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
  ];

  const serviceRoutes = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    priority: 0.9,
    changeFrequency: 'monthly' as const,
  }));

  const guideRoutes = getAllGuideSlugs().map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }));

  const blogRoutes = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...guideRoutes,
    ...blogRoutes,
  ].map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
