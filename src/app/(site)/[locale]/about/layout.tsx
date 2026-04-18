import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Vietnam Launchpad',
  description: "Vietnam specialists, not generalists. Six years building the firm serious investors trust to enter Vietnam. Meet our team and methodology.",
  alternates: {
    canonical: 'https://www.vietnamlaunchpad.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
