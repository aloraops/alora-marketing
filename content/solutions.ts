/**
 * Solutions Page Content
 *
 * Edit this file to update solutions page copy without touching the layout.
 * Includes content for the solutions carousel component.
 */

import { cta as sharedCta } from './shared';

export const hero = {
  title: 'What Alora does for you',
  description:
    'All tools are powered by the same AI risk engine that turns supply-chain events into ranked P/N risk and next moves. We start with three core modules and continuously add new workflows on top of the same engine.',
};

export const aiEngine = {
  label: 'The Core',
  title: 'AI Risk Engine',
  description:
    'Alora ingests data from your ERP, email, and supplier updates. Our AI engine analyzes every part number, scores risk, and delivers a prioritized action plan.',
  steps: [
    {
      step: '1',
      label: 'Ingest',
      icon: 'Database',
      desc: 'Pull data from ERP, email, and BOM sources',
    },
    {
      step: '2',
      label: 'Analyze',
      icon: 'BarChart3',
      desc: 'AI scores every part by risk and impact',
    },
    {
      step: '3',
      label: 'Prioritize',
      icon: 'ClipboardList',
      desc: 'Generate ranked worklist of actions',
    },
    {
      step: '4',
      label: 'Act',
      icon: 'Zap',
      desc: 'Get suggested next moves for each item',
    },
    {
      step: '5',
      label: 'Sync',
      icon: 'RefreshCw',
      desc: 'Push updates back to ERP automatically',
    },
  ],
};

// Keep carousel export for backward compatibility
export const carousel = {
  label: 'Solutions',
  title: 'Multiple modules, one engine',
  solutions: [] as any[],
};

/* ============================================
 * FEATURE SECTIONS — Rich detail for each module
 * ============================================ */

export const featureSections = [
  {
    id: 'po-risk',
    number: 1,
    icon: 'ClipboardList',
    title: 'PO Risk & Tracking',
    subtitle: 'Automatically turn open POs into a ranked TODO list, not a static report.',
    description:
      'Every PO line is scored by risk and business impact. Alora surfaces what needs attention first, suggests next moves, and tracks confirmation gaps — so your team works the right items, not just the loudest.',
    features: [
      {
        icon: 'BarChart3',
        title: 'Risk-Ranked Worklist',
        desc: 'Every PO line ordered by risk score and business impact — not just by date or vendor.',
      },
      {
        icon: 'Zap',
        title: 'Suggested Next Moves',
        desc: 'AI recommends actions for each risky line: follow-up, escalate, re-confirm, or split.',
      },
      {
        icon: 'Clock',
        title: 'Slip & Gap Detection',
        desc: 'Track confirmation gaps, date slips, and mismatched quantities automatically.',
      },
      {
        icon: 'Target',
        title: 'Build & Customer Impact',
        desc: 'See which builds and customers each PO line affects before it becomes a crisis.',
      },
    ],
    metric: { value: '85%', label: 'PO issues caught before impact', sublabel: 'avg across customers' },
    mockData: [
      { po: 'PO-4521', part: 'Motor Assembly X-200', vendor: 'Precision Parts Co', risk: 'Critical', dueDate: 'Feb 18', daysOverdue: 5, action: 'Escalate' },
      { po: 'PO-4518', part: 'Control Board CB-12', vendor: 'Global Electronics', risk: 'High', dueDate: 'Feb 22', daysOverdue: 0, action: 'Follow up' },
      { po: 'PO-4515', part: 'Housing Unit HU-8', vendor: 'Industrial Supply', risk: 'Medium', dueDate: 'Mar 1', daysOverdue: 0, action: 'Re-confirm' },
      { po: 'PO-4512', part: 'Sensor Module SM-3', vendor: 'TechSense Ltd', risk: 'Medium', dueDate: 'Mar 5', daysOverdue: 0, action: 'Monitor' },
      { po: 'PO-4509', part: 'Power Supply PS-50', vendor: 'Voltage Inc', risk: 'Low', dueDate: 'Mar 8', daysOverdue: 0, action: 'Monitor' },
    ],
  },
  {
    id: 'build-readiness',
    number: 2,
    icon: 'Package',
    title: 'CTB & Build Readiness',
    subtitle: 'Know if you can really build — before the line is exposed.',
    description:
      'Alora connects part availability and risk to your upcoming builds. See shortages at the BOM level, understand which customers are affected, and quantify revenue exposure — all before it becomes a fire.',
    features: [
      {
        icon: 'Database',
        title: 'BOM-Level Visibility',
        desc: 'Connect part availability and risk directly to upcoming builds and projects.',
      },
      {
        icon: 'AlertTriangle',
        title: 'Shortage Detection',
        desc: 'Highlight shortages and bottlenecks at the BOM level before they block production.',
      },
      {
        icon: 'Users',
        title: 'Customer Impact View',
        desc: 'See which orders and customers are at risk if nothing changes.',
      },
      {
        icon: 'TrendingUp',
        title: 'Revenue Exposure',
        desc: 'Quantify revenue at risk before it becomes a crisis — act while you still can.',
      },
    ],
    metric: { value: '$2.1M', label: 'Revenue protected per quarter', sublabel: 'avg across customers' },
    mockData: {
      summary: { atRisk: 3, onTrack: 8, review: 2 },
      builds: [
        { project: 'Project Alpha', customer: 'MedTech Inc', status: 'At Risk', partsReady: 12, partsTotal: 15, revenue: '$420K', missing: 'Motor Assembly, Control Board, Sensor' },
        { project: 'Project Beta', customer: 'RoboCorp', status: 'On Track', partsReady: 22, partsTotal: 22, revenue: '$680K', missing: '' },
        { project: 'Project Gamma', customer: 'DefenseCo', status: 'Review', partsReady: 18, partsTotal: 19, revenue: '$350K', missing: 'Power Supply PS-50' },
        { project: 'Project Delta', customer: 'AutoDrive', status: 'At Risk', partsReady: 8, partsTotal: 14, revenue: '$520K', missing: 'Housing Unit, Sensor Module, +4 more' },
      ],
    },
  },
  {
    id: 'vendor-scoring',
    number: 3,
    icon: 'Users',
    title: 'Vendor Behavior & Scoring',
    subtitle: "See how suppliers actually behave, not just what's written on the PO.",
    description:
      'Alora tracks real lead times vs. quoted, confirmation patterns, and slips. Each supplier gets a behavior-based score at the part level — so risky vendors surface first in your worklist.',
    features: [
      {
        icon: 'Clock',
        title: 'Real vs. Quoted Lead Times',
        desc: 'Track actual delivery performance against what was promised on the PO.',
      },
      {
        icon: 'BarChart3',
        title: 'Part-Level Scoring',
        desc: 'Score suppliers per part number — not just overall. One bad category surfaces clearly.',
      },
      {
        icon: 'RefreshCw',
        title: 'Feeds Into Prioritization',
        desc: 'Vendor scores feed directly into PO risk ranking — risky suppliers surface first.',
      },
      {
        icon: 'Shield',
        title: 'Pattern Recognition',
        desc: 'AI identifies deteriorating patterns before they become delivery failures.',
      },
    ],
    metric: { value: '92%', label: 'Prediction accuracy on delays', sublabel: 'based on vendor behavior' },
    mockData: [
      { vendor: 'Precision Parts Co', score: 94, onTime: '97%', avgDelay: '+1 day', trend: 'up', reliability: 'Excellent' },
      { vendor: 'Global Electronics', score: 72, onTime: '78%', avgDelay: '+5 days', trend: 'down', reliability: 'Needs attention' },
      { vendor: 'Industrial Supply', score: 86, onTime: '91%', avgDelay: '+1 day', trend: 'up', reliability: 'Good' },
      { vendor: 'TechSense Ltd', score: 58, onTime: '62%', avgDelay: '+7 days', trend: 'down', reliability: 'At risk' },
    ],
  },
];

export const erpIntegration = {
  label: 'Integration',
  title: 'No rip-and-replace',
  description:
    'Alora works with your existing ERP. We integrate, not replace. Bidirectional sync keeps both systems in harmony.',
  items: [
    {
      icon: 'Database',
      title: 'Pull Data',
      desc: 'Open orders, items, vendor master data from Priority, SAP, and more',
    },
    {
      icon: 'RefreshCw',
      title: 'Map & Sync',
      desc: 'Configurable status mapping between systems, real-time updates',
    },
    {
      icon: 'Zap',
      title: 'Push Back',
      desc: 'Delivery dates and confirmations flow back to ERP automatically',
    },
  ],
};

export const emailIntelligence = {
  label: 'Email Intelligence',
  title: 'AI-powered email processing',
  description:
    'Our AI pipeline converts unstructured supplier communications into structured data automatically.',
  features: [
    {
      icon: 'Mail',
      title: 'Automatic Classification',
      desc: 'NEW_ORDER, UPDATE, RECEIPT, and more',
    },
    {
      icon: 'BarChart3',
      title: 'Data Extraction',
      desc: 'Structured data from PDFs, Excel, and attachments',
    },
    {
      icon: 'Clock',
      title: 'Order Updates',
      desc: 'Auto-create and update orders from supplier emails',
    },
  ],
  demoEmail: {
    from: 'supplier@vendor.com',
    subject: 'RE: PO-4521 Delivery Update',
  },
  demoExtracted: {
    label: 'AI EXTRACTED',
    fields: [
      { label: 'Type', value: 'UPDATE' },
      { label: 'PO', value: '4521' },
      { label: 'New Date', value: 'Jan 15' },
      { label: 'Qty', value: '150 units' },
    ],
  },
};

export const security = {
  label: 'Security & Trust',
  title: 'Security you can build on',
  description:
    'Alora works with sensitive BOM, PO, and supplier data, so security is built into the product. Your data stays your own and is never pooled or shared across customers.',
  items: [
    {
      icon: 'Lock',
      title: 'Data Protection',
      desc: 'Enterprise-grade encryption at rest and in transit',
    },
    {
      icon: 'Shield',
      title: 'Access Control',
      desc: 'Role-based permissions and audit logging',
    },
    {
      icon: 'AlertTriangle',
      title: 'Isolated Tenants',
      desc: 'Complete data isolation between customers',
    },
  ],
};

export const cta = {
  title: sharedCta.primary,
  description: sharedCta.description,
  primaryCta: sharedCta.primary,
};
