import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: buildAlternates('/guides'),
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
