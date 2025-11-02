import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locales = ['en', 'vi', 'zh', 'ko'];
  const resolvedLocale = locale && locales.includes(locale) ? locale : 'en';
  if (!locales.includes(resolvedLocale)) notFound();

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
