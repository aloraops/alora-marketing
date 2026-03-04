import type { Metadata } from 'next';
import { seo } from '@content/industries/robotics-automation';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: seo.title,
  description: seo.description,
  url: 'https://aloraops.ai/industries/robotics-automation',
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
