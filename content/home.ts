/**
 * Homepage Content
 *
 * Updated: 2026-01-02 Design Spec (v1)
 * Previous version: v1.0-original-copy tag
 *
 * Edit this file to update homepage copy without touching the layout.
 */

import { cta as sharedCta } from './shared';

export const hero = {
  // Primary headline option (can swap between alternatives)
  headline: 'Where supply-chain risks become',
  headlineAccent: 'clear, ranked, and actionable',
  // Alternative headlines (for A/B testing or future use):
  // - "Prevent supply-chain issues before they break execution"
  // - "Prevent execution breakdowns by making supply-chain risk clear and actionable"
  // - "Prevent supply-chain issues by turning every signal into action"

  subheading:
    'Alora continuously evaluates execution signals at the part and BOM level, connects them to business impact, and guides teams to the right actions before issues escalate.',
  // Alternative subheadings:
  // - "Every change creates risk. Alora captures it, measures its impact across BOMs, and drives the next best action – so teams always know what to handle first"
  // - "Alora detects and prioritizes execution risk across parts, BOMs, and customer commitments – so teams act early, not in firefighting mode."

  icpLine: 'Built for complex, BOM-driven manufacturers where small changes cascade fast',
  primaryCta: sharedCta.primary,
  secondaryCta: sharedCta.secondary,
};

export const executionLoop = {
  label: 'The Execution Loop',
  title: 'How execution actually works (when it works)',
  steps: [
    {
      number: '1',
      title: 'Changes are captured early — wherever they appear',
      description:
        "Changes don't need to be hunted. Supplier updates, EOL notices, price shifts, shortages, logistics disruptions, internal changes, market events — they're continuously captured as they happen, across the execution surface.",
      emphasis: 'Execution starts early — by default.',
      icon: 'Radio',
    },
    {
      number: '2',
      title: 'Context and risk are built automatically, in minutes',
      description:
        'Every change is immediately analyzed at the part level, then grounded upward:',
      emphasis: 'Impact is clear — in minutes, not weeks.',
      details: [
        'Which BOMs are affected',
        'Which builds and customers are exposed',
        'What the execution risk actually is',
      ],
      icon: 'Layers',
    },
    {
      number: '3',
      title: 'Decisions are evaluated, not guessed',
      description:
        'With context and risk understood, teams can finally work the problem — not just react to it. Options are evaluated:',
      emphasis: 'Not everything is urgent — but the right things become obvious.',
      options: [
        'Expedite or wait',
        'Use inventory or reallocate',
        'Split builds or adjust schedules',
        'Switch suppliers or absorb cost',
      ],
      icon: 'Scale',
    },
    {
      number: '4',
      title: 'Execution moves — with leverage',
      description: "From there, execution doesn't stall. Teams get:",
      details: [
        'Clearly prioritized actions',
        'Suggested resolution paths',
        'And the ability to act immediately',
      ],
      closing: [
        'Whether that means: Triggering supplier outreach, Routing work internally or Coordinating next steps.',
        'Actions can be executed automatically — always with a human in control.',
      ],
      icon: 'Zap',
    },
  ],
  closingLine:
    "That's the execution loop Alora runs continuously — so teams act early, confidently, and at scale.",
};

export const adoptionJourney = {
  label: 'Time to Value',
  title: 'From first connection to running smoothly',
  weeks: [
    {
      period: 'Week 1',
      title: 'Connect & calibrate',
      description:
        'Connect supplier emails, docs, and ERP (read-only). Alora aligns parts and suppliers, and starts surfacing execution signals with BOM context.',
    },
    {
      period: 'Week 2',
      title: 'Context & prioritization emerge',
      description:
        'Alora builds part-level context across BOMs and business impact. Noise drops, priorities sharpen, and teams see what actually matters.',
    },
    {
      period: 'Week 3',
      title: 'Assisted execution',
      description:
        'Write options unlock where approved. Teams execute faster — email, ERP, or internal workflows — always with human control.',
    },
    {
      period: 'Always on',
      title: 'Execution that keeps learning',
      description:
        'As execution changes, Alora adapts. Teams expand usage and add automation where it proves value.',
    },
  ],
};

export const metrics = {
  label: 'Execution Impact',
  title: 'Execution impact',
  items: [
    {
      metric: '',
      label: 'Decisions that stick',
      desc: '',
      detail:
        'Execution signals grounded to BOM and business impact replace alignment loops with confident decisions teams can act on immediately.',
      icon: 'CheckCircle',
    },
    {
      metric: '~50%',
      label: 'Less manual work',
      desc: '',
      detail:
        'Automated tracking, follow-ups, and data alignment drive ~50% less manual execution work and materially shorten execution cycle times.',
      icon: 'Clock',
    },
    {
      metric: '',
      label: 'Execution unblocked',
      desc: '',
      detail:
        'Early detection of PO–OC–Invoice discrepancies prevents blocked approvals, last-minute expedites, and avoidable production stops.',
      icon: 'Unlock',
    },
    {
      metric: '~4%',
      label: 'Revenue protected',
      desc: 'of revenue at risk',
      detail:
        'Early reaction to what actually matters helps preserve ~4% of revenue at risk by avoiding late execution failures.',
      icon: 'Shield',
    },
  ],
};

// Keeping features for solutions page reference, but homepage now uses executionLoop
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
      desc: 'Regulated, multi-level BOMs where late part changes cascade into production, compliance, and delivery risk.',
    },
    {
      name: 'Robotics & Automation',
      icon: 'Cpu',
      desc: 'Tight tolerances, long lead times, and complex assemblies with zero slack for execution errors.',
    },
    {
      name: 'Defense & Aerospace',
      icon: 'Shield',
      desc: 'Low-volume, high-impact programs where every delay escalates across contracts, suppliers, and stakeholders.',
    },
    {
      name: 'Industrial Equipment',
      icon: 'Factory',
      desc: 'Highly configurable products, supplier variability, and long execution cycles that demand tight operational control.',
    },
  ],
};

export const trustAndSecurity = {
  label: 'Trust & Control',
  title: 'Built for sensitive operations',
  description:
    'Alora is designed for environments where data control, traceability, and execution authority matter.',
  items: [
    'Read-only by default during onboarding',
    'Isolated customer environments and strict access boundaries',
    'No model training on customer data',
    'Human approval required for execution actions',
  ],
  footnote: 'Security and architecture details available on request.',
};

// Removed old teamTeaser - can add back if needed for a different page

export const finalCta = {
  title: sharedCta.primary,
  description: sharedCta.description,
  supportingLine: sharedCta.supportingLine,
  primaryCta: sharedCta.primary,
  secondaryCta: sharedCta.secondary,
};

// FAQ section - new for homepage
export const faq = {
  label: 'FAQ',
  groups: [
    {
      title: 'Execution & intelligence',
      items: [
        {
          question: 'What does Alora actually do day to day?',
          answer:
            "Alora helps teams mitigate supply-chain issues as they emerge. It organizes supplier communications, confirmations, changes, and discrepancies, ties them to parts and BOMs, and prioritizes what to act on based on business impact. Teams then use it to execute the fastest resolution — replying to suppliers, expediting or splitting orders, escalating internally, or updating systems — without chasing context.",
        },
        {
          question: 'How do you know which issues matter most?',
          answer:
            'Prioritization is driven by risk evaluation. Alora evaluates each issue based on probability (likelihood the issue will materialize) and impact (effect on builds, delivery, revenue, or cost). That risk is calculated at the part and BOM level, so teams focus on the few issues that truly threaten execution — not the loudest signals.',
        },
        {
          question: 'What kinds of discrepancies do you detect?',
          answer:
            'Common examples include: price and quantity changes, date and lead-time shifts, PO–OC–Invoice mismatches, and missing or conflicting confirmations. Thresholds can be tuned so teams only see what truly matters.',
        },
        {
          question: 'Can you handle different supplier formats?',
          answer:
            'Yes. Alora is built to extract and reconcile information across varied supplier formats and documents — without requiring per-supplier setup. When confidence is low, it flags items for human review.',
        },
      ],
    },
    {
      title: 'Decision transparency & reliability',
      items: [
        {
          question: 'Can we see where decisions come from?',
          answer:
            "Yes. Every task, recommendation, or priority includes the source signals (emails, documents, ERP), the BOM and part context, and the reasoning logic behind the prioritization. This allows teams to understand why something surfaced, not just what to do — which is critical in sensitive execution environments.",
        },
        {
          question: "How reliable are Alora's recommendations?",
          answer:
            "Alora operates at over 95% reliability in surfacing and prioritizing execution issues. Each recommendation includes its source signals, context, and reasoning history, so teams can understand why it surfaced and validate it quickly. When confidence is lower, Alora flags the issue and escalates it for human review rather than guessing.",
        },
      ],
    },
    {
      title: 'Autonomy & control',
      items: [
        {
          question: 'Is Alora fully autonomous?',
          answer:
            "No — and intentionally so. Alora is autonomous where speed matters (detecting issues, assembling context, evaluating risk, preparing actions), and human-controlled where judgment matters. Think of it as an execution control tower: the system works continuously in the background, humans decide how much autonomy to allow, and critical actions are approved, adjusted, or overridden by your team.",
        },
        {
          question: 'When does Alora take action on our behalf?',
          answer:
            "Write actions (emails, ERP updates) are enabled only when your team is comfortable, typically around week 3, and always in coordination with IT. Some teams enable earlier; others stay read-only longer. It's your call.",
        },
        {
          question: 'Can we control alert sensitivity?',
          answer:
            'Yes. Teams can define thresholds and escalation rules to avoid noise and focus on meaningful execution risk.',
        },
      ],
    },
    {
      title: 'Integration & workflow impact',
      items: [
        {
          question: 'What do you connect to first?',
          answer:
            'Supplier email inboxes + key docs (OCs, invoices, PDFs), and optionally ERP via API — read-only first.',
        },
        {
          question: 'What systems can Alora connect to?',
          answer:
            "Alora connects to the systems teams already use — without rip-and-replace. This includes any ERP (via API, read-only initially), procurement systems (e.g., Coupa), supplier emails, and Excel files, PDFs, and documents. Most customers start with email, documents, and ERP in read-only.",
        },
        {
          question: 'Do we need to change how our team works?',
          answer:
            "No. Alora fits into how execution already happens today. Teams keep working with the same tools and workflows — Alora just makes sense of the noise and surfaces what actually needs attention.",
        },
      ],
    },
    {
      title: 'Time to value & rollout',
      items: [
        {
          question: 'How quickly do we see value?',
          answer:
            'Customers start seeing value within the first week after initial integration. Signals begin appearing immediately, with context and prioritization improving as more data is ingested.',
        },
        {
          question: 'Who needs to be involved from our side?',
          answer:
            'Typically 1–2 execution owners (procurement / supply chain) and an IT or security contact to approve access. Most teams start with a small pilot group, then expand once value is clear.',
        },
        {
          question: 'How does a pilot work?',
          answer:
            "Pilots typically run 1–2 months, scoped to your environment. They're paid and measured against clear metrics such as decision cycle time, blocked execution reduction, and manual workload reduction.",
        },
        {
          question: 'How do you define pilot success?',
          answer:
            'Typical success metrics include: faster execution decisions (weeks → same day), reduced manual reconciliation and follow-ups, fewer missed discrepancies and late escalations, and clearer prioritization of execution risk. We align on success criteria upfront.',
        },
        {
          question: 'What happens after the pilot?',
          answer:
            "Teams usually expand usage to additional workflows or sites once value is clear. Alora continues adapting automatically as suppliers, volumes, and priorities change. The Alora team remains available for support, questions, and guidance as needed — but the system does not require ongoing coordination or maintenance to stay effective.",
        },
      ],
    },
    {
      title: 'Security & data access',
      items: [
        {
          question: 'Are you reading all our emails?',
          answer:
            'No. Alora only reads relevant supplier communications, based on controlled rules you define. Internal, personal, or unrelated emails are ignored.',
        },
        {
          question: 'How is customer data isolated?',
          answer:
            'Each customer operates in a logically isolated tenant context, with tenant-scoped databases and queues, isolated credentials and secrets, and strict access controls and audit logging. There is no cross-customer data access.',
        },
        {
          question: 'Do you train AI models on our data?',
          answer:
            'No. Customer data is not used to train shared models. AI is used strictly for structured extraction and execution analysis, with no persistent data retention in external model providers.',
        },
        {
          question: 'How is Alora hosted?',
          answer:
            'Alora is hosted on Google Cloud Platform (GCP) in the US (us-east1) region. The system is designed with tenant isolation, least-privilege access, and private networking as defaults.',
        },
        {
          question: 'Are you SOC 2 compliant?',
          answer:
            'We are currently undergoing SOC 2 certification with EY, expected to complete in the coming months. Our security architecture already follows SOC-aligned best practices, and we can share details during security review.',
        },
      ],
    },
  ],
};

// Legacy exports for backwards compatibility (can be removed once pages are updated)
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

export const teamTeaser = {
  label: 'The Team',
  title: "Built by people who've lived the problem",
  description:
    "Our founders bring 20+ years of combined experience in supply chain operations, AI/ML, and enterprise software. We've managed $200M in supplier deals, built surgical robotics, and created AI systems for high-frequency trading.",
  cta: 'Meet the Team',
};
