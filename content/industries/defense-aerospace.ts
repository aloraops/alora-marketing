import { cta as sharedCta } from '../shared';

export const seo = {
  title: 'AI Supply Chain for Defense & Aerospace Manufacturing',
  description:
    'Low-volume, high-impact defense programs where every delay escalates across contracts, suppliers, and stakeholders. Alora brings part-level risk intelligence to defense supply chains.',
};

export const hero = {
  icon: 'Shield',
  title: 'Supply Chain Operations for Defense & Aerospace',
  description:
    'Defense and aerospace programs operate under extreme constraints: contractual milestones tied to part deliveries, ITAR and export control limitations on supplier alternatives, and long procurement cycles where visibility into in-flight POs is critical. Alora brings part-level risk intelligence to help program teams act early — before delays escalate into contract penalties.',
};

export const painPoints = [
  {
    icon: 'ClipboardList',
    title: 'Contract-Level Accountability',
    desc: 'Defense programs tie part deliveries to contract milestones. A single delayed component can trigger contractual penalties, reporting requirements, and stakeholder escalations that compound far beyond the cost of the part.',
  },
  {
    icon: 'Shield',
    title: 'ITAR & Export Compliance',
    desc: 'Supply chain decisions must consider export control regulations, limiting supplier alternatives and increasing risk from sole-source dependencies. Every sourcing change requires compliance review.',
  },
  {
    icon: 'Clock',
    title: 'Long Procurement Cycles',
    desc: 'Defense procurement cycles span months to years, with multiple approval gates. Visibility into in-flight POs across these extended timelines is critical for program management and budget planning.',
  },
  {
    icon: 'AlertTriangle',
    title: 'Sole-Source Dependencies',
    desc: 'Many defense components come from qualified single sources. When those suppliers slip, there are no quick alternatives — making early detection and proactive management essential.',
  },
];

export const capabilities = [
  {
    title: 'Program-Aware Risk Scoring',
    desc: 'PO lines are scored not just by delivery risk, but by their impact on program milestones. A delayed $200 connector that blocks a $2M contract milestone surfaces as Critical — not Low.',
    relatedModule: 'PO Risk & Tracking',
    moduleHref: '/solutions/po-risk-tracking',
  },
  {
    title: 'Build Readiness Across Programs',
    desc: 'See which programs and contract milestones are at risk from component shortages. Revenue exposure is calculated at the program level, connecting part-level delays to contract-level consequences.',
    relatedModule: 'CTB & Build Readiness',
    moduleHref: '/solutions/build-readiness',
  },
  {
    title: 'Sole-Source Supplier Monitoring',
    desc: 'Track performance of sole-source and qualified suppliers with heightened sensitivity. Deteriorating patterns on single-source components trigger early warnings so teams can engage before delays materialize.',
    relatedModule: 'Vendor Scoring',
    moduleHref: '/solutions/vendor-scoring',
  },
];

export const relevantModules = [
  {
    id: 'po-risk-tracking',
    title: 'PO Risk & Tracking',
    description: 'Program-aware PO risk scoring. See which contract milestones are affected by every delayed line item.',
    href: '/solutions/po-risk-tracking',
  },
  {
    id: 'build-readiness',
    title: 'CTB & Build Readiness',
    description: 'Connect part availability to program milestones and contract deliverables.',
    href: '/solutions/build-readiness',
  },
  {
    id: 'vendor-scoring',
    title: 'Vendor Scoring',
    description: 'Heightened monitoring for sole-source and qualified defense suppliers.',
    href: '/solutions/vendor-scoring',
  },
];

export const cta = {
  title: 'See Alora for Defense & Aerospace',
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
