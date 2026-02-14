/**
 * Video Landing Page Content
 *
 * Storyboard-driven narrative for Alora explainer video.
 * Edit this file to update video page copy without touching the layout.
 */

import { cta as sharedCta } from './shared';

export const meta = {
  title: 'See Alora in Action',
  description:
    'Watch how Alora turns scattered part data into a clear, scored, and actionable worklist.',
};

export const hero = {
  label: 'Explainer Video',
  title: 'See how scattered part data becomes actionable',
  subtitle:
    'A short look at how Alora unifies everything you know about a part number — and tells you exactly what to do next.',
  videoUrl: '', // empty = show placeholder; set to YouTube/Vimeo embed URL when ready
};

export const painScene = {
  label: 'The Problem',
  title: 'Your part data is everywhere',
  subtitle: "And you don't see the full picture until it's too late.",
  items: [
    {
      icon: 'Mail',
      title: 'Supplier emails & confirmations',
      description:
        'Updates buried across email threads. Confirmations, date changes, and discrepancies scattered across dozens of conversations.',
    },
    {
      icon: 'Database',
      title: 'ERP, Excel, and legacy systems',
      description:
        'Critical information lives in three or more places — never synced, never connected.',
    },
    {
      icon: 'Cpu',
      title: 'Part intelligence is missing',
      description:
        'EOL status, part technology, manufacturing process — none of it is connected to your daily decisions.',
    },
    {
      icon: 'TrendingUp',
      title: 'Supplier behavior is a black box',
      description:
        'No historical view of reliability, actual lead times, confirmation patterns, or delivery trends.',
    },
    {
      icon: 'Package',
      title: 'BOM blind spots',
      description:
        "One delayed part cascades through assemblies, builds, and customer commitments — but you can't see which ones.",
    },
    {
      icon: 'AlertTriangle',
      title: 'Revenue exposure stays hidden',
      description:
        'Millions at risk accumulate silently across builds. By the time it surfaces, the damage is done.',
    },
  ],
};

export const turnScene = {
  title: 'What if every part number told you its full story — in real time?',
  description:
    'One platform that unifies all P/N data — EOL, technology, supplier behavior, manufacturing process — connects it to your BOM, customers, and cost, and scores risk as it changes.',
};

export const solutionScene = {
  label: 'The Solution',
  title: 'One place for every part number',
  steps: [
    {
      number: '1',
      icon: 'Database',
      title: 'Unify all P/N data',
      description:
        'EOL status, part technology, supplier behavior, manufacturing process, emails, ERP — all in one view per part number.',
    },
    {
      number: '2',
      icon: 'Package',
      title: 'Connect to BOM, customer & cost',
      description:
        'Every part linked to assemblies, builds, customer commitments, and revenue impact. See how one part affects the entire chain.',
    },
    {
      number: '3',
      icon: 'BarChart3',
      title: 'Score risk in real time',
      description:
        "Probability a part won't arrive on time — and exactly how much it will hurt the business. Updated continuously.",
    },
    {
      number: '4',
      icon: 'ClipboardList',
      title: 'Act before it breaks',
      description:
        'Ranked worklist with specific next actions: follow up, escalate, find alternative, split order. Every morning.',
    },
  ],
};

export const proofScene = {
  label: 'The Impact',
  title: 'Measurable results from day one',
  metrics: [
    { value: '10\u00d7', label: 'Faster Decisions', sublabel: 'From weeks to same-day' },
    { value: '50%', label: 'Less Manual Work', sublabel: 'Automated follow-ups & tracking' },
    { value: '80%', label: 'Fewer Blocked POs', sublabel: 'Early detection of gaps & slips' },
    { value: '5%', label: 'Revenue Protected', sublabel: 'Risk caught before it hits builds' },
  ],
  tagline:
    'Where every supply chain event becomes clear, ranked, and actionable.',
};

export const finalCta = {
  title: 'Ready to see it live?',
  description: sharedCta.description,
  supportingLine: sharedCta.supportingLine,
  primaryCta: sharedCta.primary,
};
