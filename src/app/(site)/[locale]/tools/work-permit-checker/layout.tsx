import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: buildAlternates('/tools/work-permit-checker'),
};

export default function WorkPermitCheckerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
