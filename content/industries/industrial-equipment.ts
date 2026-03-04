import { cta as sharedCta } from '../shared';

export const seo = {
  title: 'AI Supply Chain for Industrial Equipment Manufacturing',
  description:
    'Highly configurable products, supplier variability, and long execution cycles demand tight operational control. Alora brings AI-powered visibility to industrial equipment supply chains.',
};

export const hero = {
  icon: 'Factory',
  title: 'Supply Chain Operations for Industrial Equipment Manufacturers',
  description:
    'Industrial equipment manufacturing combines engineer-to-order complexity, broad supplier bases with varying reliability, and execution cycles measured in months. When every customer order can be a unique configuration, supply chain execution requires visibility and control that spreadsheets and standard ERP reports cannot provide. Alora brings part-level risk intelligence to keep complex builds on track.',
};

export const painPoints = [
  {
    icon: 'Database',
    title: 'Engineer-to-Order Complexity',
    desc: 'Every customer order can be a unique configuration, making BOM management and part planning exponentially harder than standard manufacturing. Each configuration generates its own procurement requirements.',
  },
  {
    icon: 'Users',
    title: 'Supplier Variability',
    desc: "Industrial equipment relies on a broad supplier base with varying reliability. Some deliver consistently; others are chronically late. Without systematic data, you can't tell the difference until it's too late.",
  },
  {
    icon: 'Clock',
    title: 'Long Execution Cycles',
    desc: 'Build cycles measured in months mean early detection of supply chain issues is the difference between on-time delivery and costly delays. Problems discovered late in the cycle have fewer — and more expensive — recovery options.',
  },
  {
    icon: 'RefreshCw',
    title: 'Frequent Engineering Change Orders',
    desc: 'ECOs are routine in configurable products. Each one ripples through procurement, creating re-planning work across dozens of PO lines and potentially invalidating existing supplier commitments.',
  },
];

export const capabilities = [
  {
    title: 'Configuration-Aware BOM Tracking',
    desc: 'Alora handles the complexity of engineer-to-order BOMs. Each customer configuration gets its own build readiness view, so teams see part availability and risk specific to that order — not averaged across the product line.',
    relatedModule: 'CTB & Build Readiness',
    moduleHref: '/solutions/build-readiness',
  },
  {
    title: 'ECO Impact Assessment',
    desc: 'When an engineering change order modifies a BOM, Alora immediately assesses the procurement impact: which PO lines are affected, which suppliers need updated orders, and which builds need re-planning.',
    relatedModule: 'PO Risk & Tracking',
    moduleHref: '/solutions/po-risk-tracking',
  },
  {
    title: 'Supplier Reliability Across Categories',
    desc: 'Score suppliers across different part categories and configurations. A supplier who delivers standard components on time but struggles with custom machined parts shows both patterns clearly.',
    relatedModule: 'Vendor Scoring',
    moduleHref: '/solutions/vendor-scoring',
  },
];

export const relevantModules = [
  {
    id: 'build-readiness',
    title: 'CTB & Build Readiness',
    description: 'Per-configuration build readiness for engineer-to-order manufacturing.',
    href: '/solutions/build-readiness',
  },
  {
    id: 'po-risk-tracking',
    title: 'PO Risk & Tracking',
    description: 'ECO-aware PO tracking that automatically reassesses risk when BOMs change.',
    href: '/solutions/po-risk-tracking',
  },
  {
    id: 'vendor-scoring',
    title: 'Vendor Scoring',
    description: 'Category-level supplier scoring for broad industrial supplier bases.',
    href: '/solutions/vendor-scoring',
  },
];

export const cta = {
  title: 'See Alora for Industrial Equipment',
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
