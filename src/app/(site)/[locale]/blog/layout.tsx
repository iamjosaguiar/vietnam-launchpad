import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: buildAlternates('/blog'),
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
