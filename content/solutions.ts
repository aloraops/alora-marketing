/**
 * Solutions Page Content
 *
 * Edit this file to update solutions page copy without touching the layout.
 * Includes content for the solutions carousel component.
 */

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

export const carousel = {
  label: 'Core Solutions',
  title: 'Three modules, one engine',
  solutions: [
    {
      id: 'po-risk',
      number: 1,
      icon: 'ClipboardList',
      title: 'PO Risk & Tracking',
      subtitle: 'Turn open POs into a ranked TODO list, not a static report.',
      features: [
        'See all PO lines ordered by risk and business impact',
        'Understand which builds and customers each line affects',
        'Get suggested next moves for risky lines (follow-up, escalate, re-confirm, split)',
        'Track confirmation gaps, date slips, and mismatched lines',
      ],
      mockData: [
        { po: 'PO-4521', part: 'Motor Assembly', risk: 'High', action: 'Follow up' },
        { po: 'PO-4518', part: 'Control Board', risk: 'Medium', action: 'Re-confirm' },
        { po: 'PO-4515', part: 'Housing Unit', risk: 'Low', action: 'Monitor' },
      ],
      cardTitle: 'PO Lines by Risk',
      cardSubtitle: 'Updated 2 min ago',
    },
    {
      id: 'build-readiness',
      number: 2,
      icon: 'Package',
      title: 'CTB & Build Readiness',
      subtitle: 'Know if you can really build — before the line is exposed.',
      features: [
        'Connect part availability and risk to upcoming builds and projects',
        'Highlight shortages and bottlenecks at the BOM level',
        'Show which orders and customers are at risk if nothing changes',
        'See revenue exposure before it becomes a crisis',
      ],
      mockData: [
        {
          build: 'Project Alpha',
          customer: 'MedTech Inc',
          status: 'At Risk',
          parts: '3 parts missing',
        },
        {
          build: 'Project Beta',
          customer: 'RoboCorp',
          status: 'On Track',
          parts: 'All parts confirmed',
        },
        {
          build: 'Project Gamma',
          customer: 'DefenseCo',
          status: 'Review',
          parts: '1 part delayed',
        },
      ],
      cardTitle: 'Build Readiness',
      cardSubtitle: 'Next 30 days',
    },
    {
      id: 'vendor-scoring',
      number: 3,
      icon: 'Users',
      title: 'Vendor Behavior & Scoring',
      subtitle: "See how suppliers actually behave, not just what's written on the PO.",
      features: [
        'Track real lead times vs. quoted, confirmation patterns, and slips',
        'Score suppliers at the part level based on behavior and risk',
        'Feed vendor scores into prioritization so risky suppliers surface first',
        'Identify patterns before they become problems',
      ],
      mockData: [
        { vendor: 'Precision Parts Co', score: 92, trend: 'up', metric: '+3 days avg' },
        { vendor: 'Global Electronics', score: 78, trend: 'down', metric: '-5 days avg' },
        { vendor: 'Industrial Supply', score: 85, trend: 'stable', metric: 'On target' },
      ],
      cardTitle: 'Vendor Performance',
      cardSubtitle: 'Last 90 days',
    },
  ],
};

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
  // Demo email card content
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
  title: 'Ready to transform your supply chain?',
  description:
    'See how Alora can turn your procurement chaos into clarity. Book a demo to see the platform in action.',
  primaryCta: 'Book a Demo',
};
