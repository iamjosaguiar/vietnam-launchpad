import type { Metadata } from '@/lib/metadata';

import { buildAlternates } from '@/lib/seo';
import { aboutCopy } from '@/data/aboutCopy';

export const metadata: Metadata = {
  title: { absolute: aboutCopy.title },
  description: aboutCopy.description,
  alternates: buildAlternates('/about'),
};
