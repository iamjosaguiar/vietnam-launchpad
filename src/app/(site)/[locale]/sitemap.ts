import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vietnamlaunchpad.com';

  // Define all routes
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/faq',
    '/services/trc-application',
    '/services/work-permit',
    '/services/company-setup',
    '/services/marriage-registration',
    '/services/drivers-license',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/services/') ? 0.9 : 0.8,
  }));
}
