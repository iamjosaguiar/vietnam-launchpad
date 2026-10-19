import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: buildAlternates('/tools/salary-calculator'),
};

export default function SalaryCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
