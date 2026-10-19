import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About - Vietnam Launchpad',
  description: "Vietnam specialists, not generalists. Six years building the firm serious investors trust to enter Vietnam. Meet our team and methodology.",
  alternates: buildAlternates('/about'),
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
