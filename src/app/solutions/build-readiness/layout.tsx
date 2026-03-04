import type { Metadata } from 'next';
import { seo } from '@content/solutions/build-readiness';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Alora - CTB & Build Readiness',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: seo.description,
  url: 'https://aloraops.ai/solutions/build-readiness',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing',
  },
  isPartOf: {
    '@type': 'SoftwareApplication',
    name: 'Alora',
    url: 'https://aloraops.ai',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
