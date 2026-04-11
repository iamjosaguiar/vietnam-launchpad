import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://vietnamlaunchpad.com/guides',
  },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
