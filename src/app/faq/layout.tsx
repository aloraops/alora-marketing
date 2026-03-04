import type { Metadata } from 'next';
import { faq } from '@content/home';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Alora — how it works, what it connects to, and how teams use it to manage supply chain execution.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.groups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
