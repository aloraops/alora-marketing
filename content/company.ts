/**
 * Company Page Content
 *
 * Edit this file to update company/team page copy without touching the layout.
 * Includes team bios, mission, vision, and company information.
 */

export const hero = {
  title: 'The team behind Alora',
  description:
    "Alora was founded by people who have lived both the operational and technical sides of the problem. We're building the tool we wished we had.",
};

export const mission = {
  label: 'Our Mission',
  statement:
    "Connect BOM and part-level reality to business income, so every decision — from a buyer's next action to a board-level discussion — is grounded in the same, trusted picture.",
};

export const whyThisTeam = {
  title: 'Why this team?',
  subtitle: "We've lived both sides of the supply chain problem — operations and technology.",
  items: [
    {
      icon: 'Briefcase',
      title: 'Domain Expertise',
      desc: 'Deep understanding of supply chain pain points. Sharon managed $200M in supplier deals and knows the customer pain at scale.',
    },
    {
      icon: 'Lightbulb',
      title: 'Product Vision',
      desc: 'Experience building complex products in regulated industries, scaling teams from startup to mature product.',
    },
    {
      icon: 'Users',
      title: 'Technical Excellence',
      desc: 'AI/ML expertise with graph neural networks directly applicable to supply chain network modeling.',
    },
  ],
};

export const team = [
  {
    name: 'Sharon Ilan',
    role: 'Co-Founder, CEO',
    bio: 'Sharon brings deep supply chain expertise from building operations departments at surgical robotics companies and managing $200M in supplier deals at Better Place. She knows the customer pain firsthand.',
    highlights: [
      '$200M in supplier deals managed',
      'First employee at Better Place',
      'Built supply chain operations at Human Xtensions',
      'Unit 76 Intelligence, Operations Officer',
    ],
    education: 'Economics and Management',
  },
  {
    name: 'Yuval Blyakhman',
    role: 'Co-Founder, CPO',
    bio: 'Yuval rose from first employee to VP R&D at Human Xtensions, a surgical robotics company. He brings product vision and engineering leadership experience from complex, regulated industries.',
    highlights: [
      'First employee → VP R&D at Human Xtensions',
      'Multiple patents in medical instruments',
      'Surgical robotics product development',
      'Unit 81 Intelligence, Mechanical Engineer',
    ],
    education: 'Mechanical + Biomedical Engineering',
  },
  {
    name: 'Idan Ben-Ami',
    role: 'Co-Founder, CTO',
    bio: "Idan completed his CS degree at 14.5 and brings PhD-level AI/ML expertise in graph neural networks — directly applicable to supply chain network modeling. He's built high-performance trading systems and cloud infrastructure at scale.",
    highlights: [
      'CS B.Sc. completed at age 14.5',
      "Master's in AI/ML (Graph Neural Networks)",
      'Built sub-100ns HFT systems',
      'Talpiot Program (top 50 of 10,000)',
    ],
    education: 'Computer Science, AI/ML Specialization',
  },
];

export const sharedBackground = {
  label: 'Shared Background',
  title: 'Elite military intelligence',
  description:
    'All three founders served in elite Israeli military intelligence units (Unit 81/8153, Unit 76). This background instilled a culture of innovation, problem-solving, and high-stakes decision-making.',
  badge: 'Talpiot Program Graduate (Top 50 of 10,000)',
};

export const vision = {
  label: 'Our Vision',
  title: 'From part-level risk to business outcome',
  intro:
    'In complex hardware, everything starts with a BOM and a part number — and the risk attached to it. Alora is building a decision layer on top of the BOM that connects each part, supplier, and BOM position to:',
  pillars: [
    { label: 'Part-level risk', desc: 'Which parts are at risk?' },
    { label: 'Build readiness', desc: 'Can we build this on time?' },
    { label: 'Revenue impact', desc: 'How much money is on the line?' },
  ],
  expansion:
    'Over time, this BOM-driven, risk-aware view will support wider decisions in Sourcing (which suppliers to depend on), Operations (which builds to protect), and Finance (how risk flows to margin).',
  summary: 'Our direction is simple: connect BOM and part-level reality to business income.',
};

export const cta = {
  title: 'Want to work with us?',
  description:
    "We're always looking for talented people who share our passion for solving hard problems in supply chain operations.",
  primaryCta: 'Get in Touch',
};
