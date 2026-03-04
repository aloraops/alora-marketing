import { cta as sharedCta } from '../shared';

export const seo = {
  title: 'AI Supply Chain for Medical Device Manufacturing',
  description:
    'Manage regulated, multi-level BOMs where late part changes cascade into production, compliance, and delivery risk. Alora brings part-level visibility to medical device supply chains.',
};

export const hero = {
  icon: 'HeartPulse',
  title: 'Supply Chain Operations for Medical Device Manufacturers',
  description:
    'Medical device supply chains combine regulatory pressure, multi-level BOMs, and long lead time components into one of the most demanding execution environments in manufacturing. Alora brings part-level risk intelligence so your team can act before compliance events, shortages, or delivery failures cascade through production.',
};

export const painPoints = [
  {
    icon: 'Shield',
    title: 'Regulatory Cascades',
    desc: 'A single part change can trigger re-validation across multiple assemblies, turning a routine ECO into a months-long compliance event. Without early detection, these cascades block entire production lines.',
  },
  {
    icon: 'Database',
    title: 'Multi-Level BOM Complexity',
    desc: 'Medical devices combine mechanical, electronic, and software components across 5-10 BOM levels. Visibility into part availability at each level is critical — and impossible with spreadsheets.',
  },
  {
    icon: 'ClipboardList',
    title: 'Traceability Requirements',
    desc: 'FDA and ISO requirements demand full traceability from raw materials through finished goods. Manual tracking across email, ERP, and spreadsheets creates compliance gaps that surface during audits.',
  },
  {
    icon: 'Clock',
    title: 'Long Lead Time Components',
    desc: 'Specialty sensors, custom machined parts, and biocompatible materials have lead times measured in months, not weeks. When these components slip, there are no quick alternatives.',
  },
];

export const capabilities = [
  {
    title: 'Compliance-Ready BOM Tracking',
    desc: 'Connect part availability and risk directly to regulated assemblies. When a component slips, Alora immediately shows which validated BOMs are affected and what the compliance impact could be.',
    relatedModule: 'CTB & Build Readiness',
    moduleHref: '/solutions/build-readiness',
  },
  {
    title: 'Part-Level Risk for Regulated Components',
    desc: 'Every PO line for a regulated component is scored by both delivery risk and compliance impact. Qualified-supplier components with no alternatives are automatically flagged as higher priority.',
    relatedModule: 'PO Risk & Tracking',
    moduleHref: '/solutions/po-risk-tracking',
  },
  {
    title: 'Qualified Supplier Performance',
    desc: 'Track delivery performance of qualified suppliers at the part level. When a validated supplier starts slipping, early detection gives your team time to address the issue before it becomes a compliance event.',
    relatedModule: 'Vendor Scoring',
    moduleHref: '/solutions/vendor-scoring',
  },
];

export const relevantModules = [
  {
    id: 'build-readiness',
    title: 'CTB & Build Readiness',
    description: 'Connect part availability to validated BOMs. See which builds and customers are at risk from component shortages.',
    href: '/solutions/build-readiness',
  },
  {
    id: 'po-risk-tracking',
    title: 'PO Risk & Tracking',
    description: 'Risk-scored PO lines with compliance context. Regulated components are automatically prioritized.',
    href: '/solutions/po-risk-tracking',
  },
  {
    id: 'vendor-scoring',
    title: 'Vendor Scoring',
    description: 'Part-level supplier performance for qualified sources. Detect deteriorating patterns before they impact compliance.',
    href: '/solutions/vendor-scoring',
  },
];

export const cta = {
  title: 'See Alora for Medical Device Manufacturing',
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
