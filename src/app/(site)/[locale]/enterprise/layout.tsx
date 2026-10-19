import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Enterprise Market Entry - Vietnam Launchpad',
  description: "Complete Vietnam market entry for founders, family offices, and institutional investors. Legal entity, banking, work permits, compliance, and residency. Operational in 90 days.",
  alternates: buildAlternates('/enterprise'),
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
