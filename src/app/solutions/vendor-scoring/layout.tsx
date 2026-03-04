import type { Metadata } from 'next';
import { seo } from '@content/solutions/vendor-scoring';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Alora - Vendor Behavior & Scoring',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: seo.description,
  url: 'https://aloraops.ai/solutions/vendor-scoring',
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
