import { cta as sharedCta } from '../shared';
import { featureSections } from '../solutions';

const source = featureSections[2];

export const seo = {
  title: 'Vendor Behavior & Performance Scoring',
  description:
    "See how suppliers actually behave, not just what's on the PO. Alora tracks real lead times vs. quoted, confirmation patterns, and delivery slips to score suppliers at the part level.",
};

export const hero = {
  label: 'Vendor Behavior & Scoring',
  title: 'Measure What Suppliers Actually Do, Not What They Promise',
  description:
    "Your vendor master data says a supplier has a 6-week lead time. Reality says 9 weeks. Alora tracks actual delivery performance against quoted lead times, monitors confirmation patterns and slips, and scores each supplier at the part level — so risky vendors surface first in your worklist, not after they've already caused a delay.",
};

export const challenges = [
  {
    icon: 'Clock',
    title: 'Quoted vs. Actual Lead Times Diverge',
    desc: 'Supplier lead times in ERP are often outdated or optimistic. Without tracking actual performance, procurement plans are built on unreliable assumptions.',
  },
  {
    icon: 'BarChart3',
    title: 'Vendor Performance Is a Black Box',
    desc: 'Most teams rely on gut feel to judge supplier reliability. There is no systematic scoring, and the same unreliable suppliers cause repeated delays.',
  },
  {
    icon: 'AlertTriangle',
    title: 'Deteriorating Patterns Go Undetected',
    desc: "A supplier doesn't go from reliable to unreliable overnight. The warning signs are subtle — slightly longer confirmations, occasional quantity mismatches — and invisible without trend data.",
  },
  {
    icon: 'Shield',
    title: 'Overall Scores Hide Part-Level Problems',
    desc: 'A supplier may perform well overall but consistently fail on specific part categories. Aggregate scorecards miss these targeted weaknesses.',
  },
];

export const features = source.features;

export const howItWorks = [
  {
    step: '1',
    title: 'Track Every Interaction',
    desc: 'Alora monitors every PO confirmation, date change, quantity adjustment, and delivery event across all your suppliers — automatically, from ERP and email data.',
  },
  {
    step: '2',
    title: 'Score at the Part Level',
    desc: 'Each supplier gets a behavior score per part number — not just an overall rating. A supplier who delivers motors on time but consistently delays control boards shows both clearly.',
  },
  {
    step: '3',
    title: 'Detect Trends and Patterns',
    desc: "Alora's AI identifies deteriorating patterns before they become delivery failures. Gradually increasing lead times, more frequent re-confirmations, or growing confirmation gaps all trigger early warnings.",
  },
  {
    step: '4',
    title: 'Feed Into Risk Prioritization',
    desc: 'Vendor scores flow directly into PO risk ranking. When a poorly-scoring supplier has an open PO line for a critical build, it automatically surfaces higher in the worklist.',
  },
];

export const useCases = [
  {
    title: 'Hidden pattern reveals at-risk supplier',
    scenario:
      'A long-standing supplier gradually extends their average lead time from 4 weeks to 6 weeks over 6 months. No single PO is late enough to trigger an alarm, but the trend is clear in the data.',
    outcome:
      "Alora detects the deteriorating pattern and flags the supplier's score as declining. The procurement team opens a conversation with the supplier before the next critical order is placed, avoiding a potential 2-week delay on a $600K build.",
  },
  {
    title: 'Part-level scoring reveals hidden weakness',
    scenario:
      "A supplier has a 91% on-time rate overall — above threshold. But their on-time rate for a specific connector family is just 62%. The aggregate score masks the problem.",
    outcome:
      'Alora\'s part-level scoring surfaces the connector weakness immediately. The team qualifies a secondary source for that part family while keeping the supplier for their strong categories.',
  },
];

export const metric = source.metric;

export const mockData = source.mockData;

export const crossLinks = [
  {
    id: 'po-risk-tracking',
    title: 'PO Risk & Tracking',
    subtitle: 'Vendor scores feed directly into PO risk ranking for smarter prioritization.',
    href: '/solutions/po-risk-tracking',
  },
  {
    id: 'build-readiness',
    title: 'CTB & Build Readiness',
    subtitle: 'Supplier reliability informs which builds are truly at risk.',
    href: '/solutions/build-readiness',
  },
];

export const cta = {
  title: 'See Vendor Scoring in Action',
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
