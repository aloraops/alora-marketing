import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AccessibilityWidget } from '@/components/accessibility/accessibility-widget';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aloraops.ai'),
  title: {
    default: 'Alora | AI-Powered Supply Chain Operations',
    template: '%s | Alora',
  },
  description:
    'Where every supply-chain event becomes clear, ranked, and actionable. AI-powered operations platform for complex hardware manufacturers.',
  keywords: [
    'supply chain',
    'procurement',
    'manufacturing',
    'AI',
    'ERP integration',
    'BOM',
    'inventory management',
  ],
  authors: [{ name: 'Alora' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aloraops.ai',
    siteName: 'Alora',
    title: 'Alora | AI-Powered Supply Chain Operations',
    description:
      'Where every supply-chain event becomes clear, ranked, and actionable. AI-powered operations platform for complex hardware manufacturers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alora | AI-Powered Supply Chain Operations',
    description:
      'Where every supply-chain event becomes clear, ranked, and actionable.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Alora',
  url: 'https://aloraops.ai',
  logo: 'https://aloraops.ai/images/alora_logo_full.svg',
  description:
    'AI-powered supply chain operations platform for complex hardware manufacturers.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@aloraops.com',
    contactType: 'sales',
  },
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Alora',
  url: 'https://aloraops.ai',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'AI-powered operations platform that continuously evaluates supply chain signals at the part and BOM level, prioritizing risks and driving execution.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <div className="flex min-h-screen flex-col pt-16">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AccessibilityWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
