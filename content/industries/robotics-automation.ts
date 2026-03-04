import { cta as sharedCta } from '../shared';

export const seo = {
  title: 'AI Supply Chain for Robotics & Automation Manufacturing',
  description:
    'Tight tolerances, long lead times, and complex assemblies with zero slack for execution errors. Alora brings AI-powered risk intelligence to robotics supply chains.',
};

export const hero = {
  icon: 'Cpu',
  title: 'Supply Chain Operations for Robotics & Automation',
  description:
    'Robotics manufacturing demands precision at every level — from motion control components and custom actuators to precision bearings and specialized sensors. With deeply interconnected BOMs and lead times stretching 12-20 weeks for critical components, there is zero slack for execution errors. Alora brings part-level risk intelligence to help engineering and procurement teams stay ahead of supply chain disruptions.',
};

export const painPoints = [
  {
    icon: 'Target',
    title: 'Zero-Tolerance Precision',
    desc: "Motion control components, precision bearings, and custom actuators must meet exact specifications. A wrong or late part doesn't just delay a build — it can cause field failures in deployed systems.",
  },
  {
    icon: 'Database',
    title: 'Interdependent Assemblies',
    desc: "Robotics BOMs are deeply interconnected. A delayed motor controller doesn't just affect one sub-assembly — it cascades through the entire system integration timeline, blocking testing and calibration.",
  },
  {
    icon: 'Clock',
    title: 'Rapid Iteration vs. Long Lead Times',
    desc: 'Engineering teams iterate quickly while critical components have 12-20 week lead times. This tension creates constant execution risk as design changes outpace procurement cycles.',
  },
  {
    icon: 'Users',
    title: 'Global Supplier Base',
    desc: 'Key components often come from specialized suppliers across Asia, Europe, and North America. Coordinating across time zones, languages, and communication styles adds friction to every interaction.',
  },
];

export const capabilities = [
  {
    title: 'Cascade-Aware Risk Scoring',
    desc: 'Alora understands BOM interdependencies. When a motor controller is delayed, risk scoring reflects the cascade impact across every assembly and integration milestone that depends on it.',
    relatedModule: 'CTB & Build Readiness',
    moduleHref: '/solutions/build-readiness',
  },
  {
    title: 'Long Lead Time Component Tracking',
    desc: 'Components with 12-20 week lead times get dedicated tracking. PO confirmation gaps, date slips, and supplier silence on long-lead items are flagged early — when there is still time to act.',
    relatedModule: 'PO Risk & Tracking',
    moduleHref: '/solutions/po-risk-tracking',
  },
  {
    title: 'Specialized Supplier Intelligence',
    desc: 'Track performance of niche robotics component suppliers at the part level. Precision bearing vendors, motor manufacturers, and sensor specialists each get granular reliability scores.',
    relatedModule: 'Vendor Scoring',
    moduleHref: '/solutions/vendor-scoring',
  },
];

export const relevantModules = [
  {
    id: 'build-readiness',
    title: 'CTB & Build Readiness',
    description: 'Cascade-aware build assessment for deeply interconnected robotics BOMs.',
    href: '/solutions/build-readiness',
  },
  {
    id: 'po-risk-tracking',
    title: 'PO Risk & Tracking',
    description: 'Dedicated tracking for long lead time precision components.',
    href: '/solutions/po-risk-tracking',
  },
  {
    id: 'vendor-scoring',
    title: 'Vendor Scoring',
    description: 'Part-level scoring for specialized robotics component suppliers.',
    href: '/solutions/vendor-scoring',
  },
];

export const cta = {
  title: 'See Alora for Robotics Manufacturing',
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
