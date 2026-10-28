import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';

export const metadata: Metadata = {
  title: pageTitle('Get Started'),
  alternates: buildAlternates('/get-started'),
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
