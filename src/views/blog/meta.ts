import type { Metadata } from '@/lib/metadata';

import { buildAlternates } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';

export const metadata: Metadata = {
  title: pageTitle('Vietnam Visa and Expat Blog'),
  alternates: buildAlternates('/blog'),
};
