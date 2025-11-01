import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locales = ['en', 'vi', 'zh', 'ko'];
  if (!locale || !locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});