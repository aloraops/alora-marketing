import type { Metadata } from 'next';
import { seo } from '@content/industries/medical-devices';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: seo.title,
  description: seo.description,
  url: 'https://aloraops.ai/industries/medical-devices',
  isPartOf: {
    '@type': 'WebSite',
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
