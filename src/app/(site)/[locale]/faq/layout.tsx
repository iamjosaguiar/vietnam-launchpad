import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: buildAlternates('/faq'),
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
