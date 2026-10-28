import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';

export const metadata: Metadata = {
  title: pageTitle('Vietnam Visa and Expat Blog'),
  alternates: buildAlternates('/blog'),
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
