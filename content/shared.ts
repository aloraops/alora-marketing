/**
 * Shared Content
 *
 * Common content used across multiple pages: navigation, footer, CTAs, etc.
 */

export const brand = {
  name: 'Alora',
  tagline: 'AI-powered supply chain operations for complex hardware manufacturers.',
  domain: 'aloraops.ai',
  appUrl: 'https://app.aloraops.com',
  contactEmail: 'contact@aloraops.com',
  adminEmail: 'admin@aloraops.com',
  calendlyUrl: 'https://calendly.com/sharon-aloraops',
};

/**
 * Primary CTA - used across site
 * Single source of truth for main call-to-action text
 */
export const cta = {
  primary: 'Book a Demo',
  secondary: 'Learn More',
  description: "A focused conversation about execution — we'll walk through how it actually works.",
  supportingLine: "We'll start with one real execution flow and see if Alora is a fit.",
};

export const navigation = {
  main: [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Company', href: '/company' },
  ],
  signIn: { name: 'Sign In', href: 'https://app.aloraops.com' },
};

export const footer = {
  solutions: [
    { name: 'PO Risk & Tracking', href: '/solutions#core-solution' },
    { name: 'Build Readiness', href: '/solutions#core-solution' },
    { name: 'Vendor Scoring', href: '/solutions#core-solution' },
  ],
  company: [
    { name: 'About Us', href: '/company' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  copyright: 'Alora. All rights reserved.',
};

/**
 * Icon name mapping
 *
 * Components should import icons from lucide-react based on these string names.
 * This allows content files to reference icons by name without importing React components.
 */
export const iconNames = [
  'ArrowRight',
  'BarChart3',
  'Briefcase',
  'CheckCircle2',
  'ClipboardList',
  'Clock',
  'Cpu',
  'Database',
  'Factory',
  'HeartPulse',
  'Lightbulb',
  'Lock',
  'Mail',
  'Package',
  'RefreshCw',
  'Shield',
  'TrendingUp',
  'Users',
  'Zap',
  'AlertTriangle',
  'Award',
  'GraduationCap',
  'Target',
] as const;

export type IconName = (typeof iconNames)[number];
