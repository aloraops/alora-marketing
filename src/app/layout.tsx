import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AccessibilityWidget } from '@/components/accessibility/accessibility-widget';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AccessibilityWidget />
      </body>
    </html>
  );
}
