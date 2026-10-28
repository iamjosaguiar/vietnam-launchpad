import type { Metadata } from 'next';

import { buildAlternates } from '@/lib/seo';
import { pageTitle } from '@/lib/pageTitle';

export const metadata: Metadata = {
  title: pageTitle('Vietnam Salary Calculator'),
  alternates: buildAlternates('/tools/salary-calculator'),
};

export default function SalaryCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
