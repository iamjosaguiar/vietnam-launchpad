import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: buildAlternates('/services'),
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
