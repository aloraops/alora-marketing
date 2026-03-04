import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Alora — building AI-powered supply chain operations for complex hardware manufacturers.',
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
