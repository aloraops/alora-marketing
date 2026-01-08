/**
 * Homepage Content
 *
 * Edit this file to update homepage copy without touching the layout.
 * All text content is centralized here for easy updates.
 */

export const hero = {
  headline: 'Where every supply-chain event becomes',
  headlineAccent: 'clear, ranked, and actionable',
  subheading:
    'Every change triggers impact. Alora captures it, measures it, ranks it, and drives the next move — so your teams always know what to handle first.',
  icpLine: 'Built for complex, BOM-driven hardware manufacturers.',
  primaryCta: 'Book a Demo',
  secondaryCta: 'Learn More',
};

export const problem = {
  label: 'The Problem',
  title: 'The daily gap between data and decisions',
  intro:
    'Even with ERP, reports, and spreadsheets, procurement and planning teams still struggle to answer basic questions at the start of the day:',
  questions: [
    'Which lines should we focus on first?',
    'Can we really build this order on time?',
    'Which customers are at risk if certain parts slip?',
  ],
  outro:
    'Data is spread across ERP, Excel, and email. Deep, multi-level BOMs make it hard to see which specific part really blocks a build.',
};

export const solution = {
  label: 'The Solution',
  title: 'From any event to clear impact and action',
  description:
    'Alora ingests ERP, email, and BOM signals and runs an AI engine that scores every part number. See which builds and customers are affected, how much is at risk, and who owns the next move.',
  steps: [
    { label: 'Ingest', desc: 'ERP, Email, BOM', icon: 'Package' },
    { label: 'Analyze', desc: 'AI Risk Engine', icon: 'BarChart3' },
    { label: 'Prioritize', desc: 'Ranked Worklist', icon: 'ClipboardList' },
    { label: 'Act', desc: 'Clear Next Steps', icon: 'Zap' },
    { label: 'Sync', desc: 'Update ERP', icon: 'Shield' },
  ],
};

export const metrics = {
  label: 'Measurable Impact',
  title: 'Results that matter',
  items: [
    {
      metric: '10×',
      label: 'Faster',
      desc: 'Decision Making',
      detail: 'From weeks to same-day responses',
    },
    {
      metric: '5%',
      label: 'Reduction',
      desc: 'in Revenue Risk',
      detail: 'Act before delays hit production',
    },
    {
      metric: '50%',
      label: 'Less',
      desc: 'Manual Work',
      detail: 'Automated follow-ups and tracking',
    },
    {
      metric: '80%',
      label: 'Fewer',
      desc: 'Blocked POs',
      detail: 'Early confirmations + discrepancy flags',
    },
  ],
};

export const features = {
  label: 'Solutions',
  title: 'What Alora does for you',
  items: [
    {
      title: 'PO Risk & Tracking',
      desc: 'Turn open POs into a ranked TODO list, not a static report. See all PO lines ordered by risk and business impact.',
      icon: 'ClipboardList',
      href: '/solutions#po-risk',
    },
    {
      title: 'CTB & Build Readiness',
      desc: 'Know if you can really build — before the line is exposed. Connect part availability and risk to upcoming builds.',
      icon: 'Package',
      href: '/solutions#build-readiness',
    },
    {
      title: 'Vendor Behavior & Scoring',
      desc: "See how suppliers actually behave, not just what's written on the PO. Track real lead times vs. quoted.",
      icon: 'Users',
      href: '/solutions#vendor-scoring',
    },
  ],
};

export const industries = {
  label: 'Built For',
  title: 'Complex, BOM-driven hardware manufacturers',
  subtitle: 'Where a single part can put a whole build at risk',
  items: [
    {
      name: 'Medical Devices',
      icon: 'HeartPulse',
      desc: 'Regulated, multi-discipline assemblies',
    },
    {
      name: 'Robotics',
      icon: 'Cpu',
      desc: 'Multi-level BOMs, tightly sequenced',
    },
    {
      name: 'Defense',
      icon: 'Shield',
      desc: 'Complex assemblies, strict compliance',
    },
    {
      name: 'Industrial',
      icon: 'Factory',
      desc: 'Engineer-to-order, high-value parts',
    },
  ],
};

export const teamTeaser = {
  label: 'The Team',
  title: "Built by people who've lived the problem",
  description:
    "Our founders bring 20+ years of combined experience in supply chain operations, AI/ML, and enterprise software. We've managed $200M in supplier deals, built surgical robotics, and created AI systems for high-frequency trading.",
  cta: 'Meet the Team',
};

export const finalCta = {
  title: 'See Alora on your own data',
  description:
    'We usually start with a focused pilot around active POs and upcoming builds — enough to prove value for procurement and planning without heavy IT work.',
  primaryCta: 'Book a Demo',
  secondaryCta: 'Request a Pilot',
};
