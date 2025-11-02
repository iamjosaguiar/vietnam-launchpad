import { routing } from '@/i18n/config';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleBoundary({ children }: { children: React.ReactNode }) {
  return children;
}
