import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Market Entry - Vietnam Launchpad',
  description: "Complete Vietnam market entry for founders, family offices, and institutional investors. Legal entity, banking, work permits, compliance, and residency. Operational in 90 days.",
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/enterprise',
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
