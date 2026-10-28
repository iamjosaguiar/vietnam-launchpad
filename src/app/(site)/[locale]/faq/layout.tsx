import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';

export const metadata: Metadata = {
  title: pageTitle('Frequently Asked Questions'),
  alternates: buildAlternates('/faq'),
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
