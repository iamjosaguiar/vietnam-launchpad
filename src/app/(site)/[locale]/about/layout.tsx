import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';
import { aboutCopy } from '@/data/aboutCopy';

export const metadata: Metadata = {
  title: { absolute: aboutCopy.title },
  description: aboutCopy.description,
  alternates: buildAlternates('/about'),
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
