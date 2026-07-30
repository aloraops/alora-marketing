import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Mapping',
  description:
    'How the Alora mapping works: story-based discovery, trigger ownership routing, data connected in parallel to action, and a findings report your team can stand behind.',
};

export default function MappingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
