import { cta as sharedCta } from '../shared';
import { featureSections } from '../solutions';

const source = featureSections[0];

export const seo = {
  title: 'PO Risk Tracking & Management',
  description:
    'Turn open purchase orders into a risk-ranked action list. Alora scores every PO line by risk and business impact, surfaces what needs attention first, and suggests next moves.',
};

export const hero = {
  label: 'PO Risk & Tracking',
  title: 'Stop Chasing POs. Start Managing Risk.',
  description:
    "Your buyers shouldn't spend their mornings digging through ERP reports and email threads to figure out which PO lines need attention. Alora's AI risk engine scores every open PO line by probability of delay and business impact, then delivers a prioritized worklist with suggested next moves — so your team works the right items, not just the loudest.",
};

export const challenges = [
  {
    icon: 'AlertTriangle',
    title: 'Confirmation Gaps Go Unnoticed',
    desc: "Suppliers don't always confirm. Without systematic tracking, missed confirmations become surprise delays weeks later — when it's too late to react.",
  },
  {
    icon: 'Clock',
    title: 'Everything Feels Urgent',
    desc: 'Without risk scoring, buyers treat every overdue line the same. The real fires get the same attention as routine delays, and the important things slip.',
  },
  {
    icon: 'Database',
    title: 'No Build Context on PO Lines',
    desc: "A PO line is just a line item until you know which builds, customers, and revenue it affects. ERPs don't connect these dots — so teams can't prioritize by business impact.",
  },
  {
    icon: 'Users',
    title: 'Manual Follow-up at Scale',
    desc: "With hundreds of open PO lines, following up on every one is impossible. The team focuses on the loudest vendors, not the riskiest lines — and critical issues slip through.",
  },
];

export const features = source.features;

export const howItWorks = [
  {
    step: '1',
    title: 'Ingest Open POs',
    desc: 'Alora pulls all open purchase orders from your ERP — line items, dates, quantities, and vendor data. No manual data entry.',
  },
  {
    step: '2',
    title: 'Score Every Line',
    desc: 'Each PO line is scored by risk (probability of delay) and impact (which builds, customers, and revenue it affects). Scoring updates continuously.',
  },
  {
    step: '3',
    title: 'Surface the Worklist',
    desc: 'Your team gets a ranked worklist every morning — not sorted by date or vendor, but by actual business risk. The top items are the ones that matter most.',
  },
  {
    step: '4',
    title: 'Suggest Next Moves',
    desc: 'For each risky line, Alora recommends the right action: follow up, escalate, re-confirm, split the order, or switch suppliers. Teams act faster with clear guidance.',
  },
];

export const useCases = [
  {
    title: 'Critical motor assembly delayed',
    scenario:
      'A key motor assembly supplier pushes delivery by 3 weeks on a $12K line item. The line sits in the ERP with an updated date — no alert, no escalation.',
    outcome:
      'Alora flags the PO line as Critical within minutes. It shows that 2 builds worth $940K in combined revenue depend on this part, and suggests escalation with an alternative supplier recommendation.',
  },
  {
    title: 'Silent confirmation gap',
    scenario:
      "A supplier confirms 80% of an order but goes silent on the remaining 20%. The buyer assumes everything is on track because most lines look fine.",
    outcome:
      'Alora detects the confirmation gap on the missing lines, calculates the BOM-level impact, and surfaces the gap in the buyer\'s morning worklist — before anyone noticed the silence.',
  },
];

export const metric = source.metric;

export const mockData = source.mockData;

export const crossLinks = [
  {
    id: 'build-readiness',
    title: 'CTB & Build Readiness',
    subtitle: 'See which builds and customers are affected when PO lines slip.',
    href: '/solutions/build-readiness',
  },
  {
    id: 'vendor-scoring',
    title: 'Vendor Behavior & Scoring',
    subtitle: 'Vendor reliability scores feed directly into PO risk ranking.',
    href: '/solutions/vendor-scoring',
  },
];

export const cta = {
  title: 'See PO Risk Tracking in Action',
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
