import { cta as sharedCta } from '../shared';
import { featureSections } from '../solutions';

const source = featureSections[1];

export const seo = {
  title: 'CTB & Build Readiness Assessment',
  description:
    'Know if you can really build before the line is exposed. Alora connects part availability and risk to your upcoming builds, highlights shortages at the BOM level, and quantifies revenue exposure.',
};

export const hero = {
  label: 'CTB & Build Readiness',
  title: 'Know If You Can Build — Before It\'s Too Late',
  description:
    "Build readiness shouldn't be a weekly meeting where someone updates a spreadsheet. Alora continuously connects part availability, supplier risk, and BOM structure to your upcoming builds — so you see shortages, at-risk customers, and revenue exposure in real time, not after the damage is done.",
};

export const challenges = [
  {
    icon: 'Database',
    title: 'BOMs Are Too Deep for Spreadsheets',
    desc: 'Multi-level BOMs with hundreds of parts across 5-10 levels make it impossible to manually track which parts block which builds. Spreadsheets break at this complexity.',
  },
  {
    icon: 'Clock',
    title: 'Shortages Surface Too Late',
    desc: 'By the time a shortage is discovered in a weekly review, the build schedule is already compromised. Recovery options shrink with every day of delay.',
  },
  {
    icon: 'TrendingUp',
    title: 'Revenue Exposure Is Invisible',
    desc: "Teams know a build is at risk but can't quantify how much revenue is on the line. Without revenue context, every at-risk build gets the same priority.",
  },
  {
    icon: 'Users',
    title: 'Customer Impact Is Disconnected',
    desc: "A part shortage affects multiple builds and customers, but this cascading impact is invisible in traditional ERP views. Teams don't see the full blast radius until it's too late.",
  },
];

export const features = source.features;

export const howItWorks = [
  {
    step: '1',
    title: 'Map Your BOMs',
    desc: 'Alora ingests your full BOM structure — every level, every part, every relationship. Multi-level BOMs with hundreds of components are handled automatically.',
  },
  {
    step: '2',
    title: 'Connect to Supply Risk',
    desc: 'Part availability and supplier risk data flow into each BOM node. When a PO line slips or a supplier scores poorly, the affected BOMs update immediately.',
  },
  {
    step: '3',
    title: 'Assess Build Readiness',
    desc: 'For each upcoming build, Alora calculates: which parts are ready, which are at risk, which customers are affected, and how much revenue is exposed.',
  },
  {
    step: '4',
    title: 'Act on What Matters',
    desc: 'Teams see at-risk builds ranked by revenue exposure — not by build date or project name. The highest-impact shortages get attention first.',
  },
];

export const useCases = [
  {
    title: 'Hidden shortage cascades through 3 builds',
    scenario:
      'A capacitor supplier signals a 4-week delay on a standard component. The ERP shows the PO update, but nobody connects it to the 3 different assemblies that need this part.',
    outcome:
      'Alora immediately shows that 3 builds across 2 customers are impacted, with $1.4M in combined revenue at risk. The operations team reallocates existing inventory from a lower-priority build to protect the critical customer delivery.',
  },
  {
    title: 'Weekly build review replaced by real-time visibility',
    scenario:
      'The operations team spends 4 hours every Monday compiling build readiness data from ERP, spreadsheets, and email threads. By the time the picture is clear, half the week is gone.',
    outcome:
      'Alora provides a continuously updated build readiness dashboard. The Monday meeting drops to 30 minutes of decision-making instead of 4 hours of data gathering.',
  },
];

export const metric = source.metric;

export const mockData = source.mockData;

export const crossLinks = [
  {
    id: 'po-risk-tracking',
    title: 'PO Risk & Tracking',
    subtitle: 'Risk-scored PO lines feed directly into build readiness assessment.',
    href: '/solutions/po-risk-tracking',
  },
  {
    id: 'vendor-scoring',
    title: 'Vendor Behavior & Scoring',
    subtitle: 'Supplier reliability data informs which builds are truly at risk.',
    href: '/solutions/vendor-scoring',
  },
];

export const cta = {
  title: 'See Build Readiness in Action',
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
