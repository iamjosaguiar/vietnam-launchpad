import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: buildAlternates('/contact'),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
