import type { Metadata } from '@/lib/metadata';

import { buildAlternates } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';

export const metadata: Metadata = {
  title: pageTitle('Enterprise Market Entry'),
  description: "Complete Vietnam market entry for founders, family offices, and institutional investors. Legal entity, banking, work permits, compliance, and residency. Operational in 90 days.",
  alternates: buildAlternates('/enterprise'),
};
