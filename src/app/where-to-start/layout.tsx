import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where to Start',
  description:
    'Where should AI start in your operation? Alora maps how execution actually works, finds where the pain is, quantifies it, and scopes a grounded first step — before you commit.',
};

export default function WhereToStartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
