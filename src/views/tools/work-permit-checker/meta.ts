import type { Metadata } from '@/lib/metadata';

import { buildAlternates } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';

export const metadata: Metadata = {
  title: pageTitle('Vietnam Work Permit Checker'),
  alternates: buildAlternates('/tools/work-permit-checker'),
};
