import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';

export const metadata: Metadata = {
  title: pageTitle('Vietnam Work Permit Checker'),
  alternates: buildAlternates('/tools/work-permit-checker'),
};

export default function WorkPermitCheckerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
