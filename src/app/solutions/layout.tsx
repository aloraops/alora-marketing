import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'See how Alora handles PO risk tracking, build readiness, and vendor scoring — with AI-powered intelligence at the part-number level.',
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
