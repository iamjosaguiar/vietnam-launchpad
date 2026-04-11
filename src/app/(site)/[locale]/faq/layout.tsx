import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://vietnamlaunchpad.com/faq',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
