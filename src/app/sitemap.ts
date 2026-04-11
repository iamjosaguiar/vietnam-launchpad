import { MetadataRoute } from 'next';
import { getAllGuideSlugs } from '@/data/guides';
import { getAllBlogSlugs } from '@/data/blog';
import { getAllServiceSlugs } from '@/data/services';

const baseUrl = 'https://www.vietnamlaunchpad.com';

// 0 = static pages, 1 = services, 2 = guides, 3 = blog
export function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const now = new Date();

  if (id === 0) {
    return [
      { url: baseUrl, priority: 1.0, changeFrequency: 'daily', lastModified: now },
      { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly', lastModified: now },
      { url: `${baseUrl}/guides`, priority: 0.9, changeFrequency: 'weekly', lastModified: now },
      { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly', lastModified: now },
      { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly', lastModified: now },
      { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: 'monthly', lastModified: now },
      { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: 'monthly', lastModified: now },
    ];
  }

  if (id === 1) {
    return getAllServiceSlugs().map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      priority: 0.9,
      changeFrequency: 'monthly' as const,
      lastModified: now,
    }));
  }

  if (id === 2) {
    return getAllGuideSlugs().map((slug) => ({
      url: `${baseUrl}/guides/${slug}`,
      priority: 0.85,
      changeFrequency: 'monthly' as const,
      lastModified: now,
    }));
  }

  if (id === 3) {
    return getAllBlogSlugs().map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      priority: 0.75,
      changeFrequency: 'monthly' as const,
      lastModified: now,
    }));
  }

  return [];
}
