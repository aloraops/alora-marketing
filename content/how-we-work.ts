/**
 * How We Work Page Content
 *
 * Edit this file to update the "How we work" page copy without touching the layout.
 * Covers the AI-journey framing, the interactive pain finder, the mapping process
 * (pre-pilot discovery), and the tactical-to-strategy circle.
 */

export const hero = {
  title: 'Start AI where it actually pays',
  description:
    'Every operations team is under pressure to bring AI in. Few know where it should start. We map how execution actually works in your operation, find where the pain is, and give you a grounded first step — before you commit to anything.',
  doors: [
    {
      title: 'I have a specific pain',
      desc: 'You already know what breaks. See how we scope it into one contained first step.',
      target: '#mapping',
    },
    {
      title: 'I need to bring AI in — but where?',
      desc: "You're expected to deliver on AI. See where it should start in your operation.",
      target: '#pain-finder',
    },
  ],
};

export const manifesto = {
  statement: "AI in operations doesn't start with a platform.",
  statementAccent: 'It starts with the workstream that hurts.',
  body: "Most AI initiatives stall at the starting point, not the technology — they start where it demos well, not where it pays. We've mapped execution inside complex, BOM-driven manufacturers: the failure patterns repeat, and so do the places where AI actually earns its keep. And we don't automate the 80% that already works — we go after the 20% of exceptions that break it.",
  principles: [
    {
      title: 'Start where it hurts',
      desc: 'Not where it demos well. The first workstream must pay for itself.',
    },
    {
      title: 'Sequence beats speed',
      desc: 'The right first step makes every next step faster. The wrong one stalls the whole program.',
    },
    {
      title: 'Owned, not outsourced',
      desc: 'We map, you decide. Your team ends up running it — not depending on us.',
    },
  ],
};

export const painFinder = {
  label: 'Find Your Starting Point',
  title: 'Where does your execution break?',
  subtitle:
    "Select what sounds familiar. We'll show you where AI typically starts in operations like yours.",
  symptoms: [
    { id: 'chase-emails', text: 'We chase supplier confirmations and updates by email', workstream: 'po-tracking' },
    { id: 'oc-mismatch', text: "Confirmations don't match the PO — and we find out late", workstream: 'discrepancies' },
    { id: 'blocked-invoices', text: 'Invoices get blocked because PO, confirmation, and invoice disagree', workstream: 'discrepancies' },
    { id: 'price-surprises', text: 'Price increases surprise us after the money is spent', workstream: 'cost' },
    { id: 'shipment-slips', text: 'Shipments slip without warning', workstream: 'asn' },
    { id: 'bad-master-data', text: 'Our part master data is stale or untrustworthy', workstream: 'master-data' },
    { id: 'late-part-build', text: 'A late part put a whole build at risk — and we saw it too late', workstream: 'build-readiness' },
    { id: 'dead-stock', text: 'We keep buying material for builds that changed', workstream: 'build-readiness' },
  ],
  workstreams: {
    'po-tracking': {
      title: 'PO Tracking & Supplier Confirmations',
      why: 'The data spine of execution — every other workstream feeds it or consumes from it. The most common first step.',
      phase1:
        'Alora reads supplier emails and confirmations, tracks every open PO line, and flags the ones that need attention — read-only, no IT project.',
    },
    discrepancies: {
      title: 'Discrepancy Detection',
      why: 'PO, confirmation, and invoice mismatches quietly block approvals, stop lines, and burn hours in reconciliation.',
      phase1:
        'Alora compares confirmations and invoices against POs as they arrive and surfaces mismatches early, ranked by impact.',
    },
    cost: {
      title: 'Cost & Price Change Monitoring',
      why: 'Margin is usually lost before anyone sees the change — the signal was in an email nobody connected to the spend.',
      phase1:
        'Price shifts are extracted from supplier communications and flagged against agreed costs before the money goes out.',
    },
    asn: {
      title: 'Shipment Visibility',
      why: 'Most late surprises were announced — in messages nobody tied to the affected order and build.',
      phase1:
        'Ship notices and delivery signals are tied to PO lines and builds, so slips show up early instead of at the dock.',
    },
    'master-data': {
      title: 'Master Data Trust',
      why: 'Bad data quietly breaks every decision downstream. It heals as a byproduct of working daily exceptions — not as a cleanup project.',
      phase1:
        'Alora detects drift between supplier reality and system data while processing daily execution, and proposes corrections.',
    },
    'build-readiness': {
      title: 'Build Readiness',
      why: 'The strategic layer — part-level risk rolled up through BOMs to builds. It needs the execution spine underneath it.',
      phase1:
        'Start with the spine (PO tracking), then roll part-level risk up through BOMs to show which builds and orders are actually at risk.',
    },
  } as Record<string, { title: string; why: string; phase1: string }>,
  resultHeader: 'Your likely starting point',
  alsoRelevant: 'Also surfaced',
  emptyState: 'Select what sounds familiar — your likely starting point will appear here.',
  disclaimer: 'This is a rough signal. The mapping makes it precise — and puts your numbers on it.',
  ctaLabel: 'Map it with us',
  aiNote: 'This is where AI starts paying in your operation — not with a platform. With one contained workstream.',
};

export const mappingProcess = {
  label: 'The Mapping Process',
  title: 'From first conversation to a scoped pilot',
  subtitle:
    'A short, structured discovery — built to surface where execution risk actually lives, what it costs you today, and where your first AI step lands.',
  steps: [
    {
      number: '1',
      icon: 'Headphones',
      title: 'Listen',
      subtitle: 'Sessions with your team',
      description:
        'Focused sessions with the people who own execution — procurement, planning, supply chain. No integration, no IT involvement. Just how work actually happens today.',
      details: [
        'Short working sessions, not workshops',
        'The people who live the process, not slideware',
        'We play back what we heard — you never repeat yourself',
      ],
      emphasis: 'IT gets involved only when you decide to move forward.',
    },
    {
      number: '2',
      icon: 'Network',
      title: 'Map',
      subtitle: 'Workstreams tied to parts',
      description:
        'Together we map your execution workstreams — supplier confirmations, discrepancies, order tracking, cost changes — and tie each one to parts, BOMs, and the builds they put at risk. And for every change: who owns it, who needs to know, who acts.',
      details: [
        'Each workstream traced end to end',
        'Grounded to parts, BOMs, and builds',
        'First pass runs on your email + Excel exports — no integration',
      ],
      emphasis: 'The map is yours — it has value even if we never work together.',
    },
    {
      number: '3',
      icon: 'Calculator',
      title: 'Quantify',
      subtitle: "Today's loss, in ranges",
      description:
        "We put ranges on what today's gaps cost — manual hours, blocked approvals, late escalations, margin leaks. Conservative ranges, agreed with your team, not vendor math.",
      details: [
        'Ranges, not point estimates',
        'Your numbers, validated by your team',
        'Cost of doing nothing made explicit',
      ],
      emphasis: 'If the numbers don’t justify it, we’ll say so.',
    },
    {
      number: '4',
      icon: 'Target',
      title: 'Prioritize',
      subtitle: 'One contained starting point',
      description:
        'Not everything deserves a pilot. We score the mapped workstreams together and select one contained starting point with clear success metrics.',
      details: [
        'Workstreams scored side by side',
        'Impact and effort weighed openly',
        'Success metrics agreed upfront',
      ],
      emphasis: 'One workstream. Clear metrics. No sprawling scope.',
    },
    {
      number: '5',
      icon: 'Rocket',
      title: 'Pilot',
      subtitle: 'Scoped, measured, expandable',
      description:
        'A scoped, paid pilot on the selected workstream — read-only first, measured against the metrics we agreed. Expand only where value is proven.',
      details: [
        'Read-only before any write access',
        'Measured against agreed metrics',
        'Expansion is earned, not assumed',
      ],
      emphasis: 'You see value in the first weeks — or we both know why.',
    },
  ],
  closing:
    'The output is a findings report your team can stand behind internally: what breaks, what it costs, and where AI should start.',
};

export const mapCaptures = {
  label: 'What The Map Captures',
  title: 'Two things most process maps miss',
  ownership: {
    title: 'Every change gets an owner',
    desc: 'For every trigger — a slipped date, a price change, a mismatch — the map answers four questions. Execution breaks in the handoffs; the map makes them explicit.',
    trigger: 'A change happens',
    triggerExamples: 'date slips · price rises · quantities mismatch',
    roles: [
      { role: 'Owns', q: 'Whose problem is this change?' },
      { role: 'Needs to know', q: 'Who must hear about it — immediately?' },
      { role: 'Acts', q: 'Who executes the resolution?' },
      { role: 'Prioritizes', q: 'Who decides what comes first today?' },
    ],
    note: 'When Alora runs, every trigger is routed to these four answers automatically.',
  },
  dataParallel: {
    title: 'Data connects in parallel to action',
    desc: "We don't run a data project first and act later. From day one, two tracks run side by side — and each one feeds the other.",
    lanes: [
      {
        name: 'Action track',
        desc: 'Your team acts on prioritized changes from the first week — chasing what matters, ignoring what doesn’t.',
      },
      {
        name: 'Data track',
        desc: 'Underneath, parts, BOMs, suppliers, and orders connect into one grounded picture — as a byproduct of the work.',
      },
    ],
    note: 'Every action makes the data better. Better data makes the next action faster.',
  },
};

export const stories = {
  label: 'How We Map',
  title: 'Stories, not questionnaires',
  subtitle:
    'The map is built from concrete stories — each owner walks us through real cases from last week. Every story gets the same treatment: what actually happens, and what it costs. A few we hear almost everywhere:',
  items: [
    {
      name: 'The unconfirmed PO',
      what: 'A PO goes out. Two weeks pass — no confirmation. The buyer chases, or planning quietly assumes the delivery date is real.',
      cost: 'Daily chase time · a wrong date reaching planning',
    },
    {
      name: 'The buried Excel confirmation',
      what: 'A supplier confirms 20 line changes in an Excel attachment. Someone opens the ERP and re-types every line by hand.',
      cost: '~40 minutes per PO · multiplied across buyers, every week',
    },
    {
      name: 'The morning rebuild',
      what: 'Every cycle, a planner pulls ERP reports and rebuilds the priority Excel by hand. By afternoon it is already stale.',
      cost: 'A full working day per cycle · decisions made on stale data',
    },
  ],
  closing: 'If one of these sounds like last week — that recognition is exactly how the mapping starts.',
  moreIntro: 'A few more we hear every week:',
  more: [
    { name: 'The stale delivery date', hook: 'A supplier confirms a 3-week slip by email. Nobody updates the ERP — planning promises on the old date.' },
    { name: "The 'on-time' that isn't", hook: 'The ERP says on-time. The supplier flagged a slip two days ago — nobody connected the two.' },
    { name: 'The PDF that doesn’t match', hook: 'Two prices and a quantity off versus the ERP — caught by eye, while the shipment is already moving.' },
    { name: 'The allocation conflict', hook: 'Two builds need the same part. Who wins gets decided manually — project by project, week after week.' },
    { name: 'The MRP email marathon', hook: 'MRP spits out recommendations; buyers compose supplier emails one by one, by hand.' },
    { name: 'The missed priority email', hook: 'The priority list goes out by email. One team opens it late and works on the wrong parts for two days.' },
    { name: 'The forwarder without an API', hook: 'Tracking arrives as a PDF. Someone retypes it — into a tracking sheet, then into the ERP.' },
    { name: 'The config change that ripples', hook: 'One customer changes a configuration. It ripples down the BOM tree — and a wrong build ships.' },
    { name: 'The tender spike', hook: 'A big tender lands and demand jumps overnight. Purchasing finds out when stock is already short.' },
    { name: 'The big-new-order question', hook: '"This new order — what does it do to us?" Assembling the answer takes days. The decision waits.' },
  ],
  moreNote: 'Examples, not a menu — the mapping surfaces yours.',
};

export const leaders = {
  label: 'Who Sits With Your Team',
  title: 'Led by people who owned execution',
  body: "The mapping isn't run by analysts with a questionnaire. It's led by operators who spent 20+ years inside complex hardware supply chains — managing global suppliers, hundreds of millions in commitments, and the builds that depended on them. We've sat on your side of the table. That's why the mapping moves fast: we recognize the patterns, ask the right questions, and know what a workstream costs before the spreadsheet proves it.",
  credentials: [
    {
      title: 'Supply chain operators',
      desc: '20+ years leading global supply chains from the ground up — supplier negotiations, ERP integrations, and $200M in supplier deals.',
    },
    {
      title: 'Complex hardware product leaders',
      desc: '20+ years building regulated, BOM-driven products — surgical robotics, medical devices, complex assemblies with zero slack.',
    },
  ],
};

export const ownership = {
  title: 'From Alora-led to yours — by design',
  phases: [
    {
      stage: 'Mapping',
      who: 'Alora-led',
      desc: 'We drive the sessions, the analysis, and the findings report.',
    },
    {
      stage: 'Pilot',
      who: 'Co-led',
      desc: 'Your team works the workstream; we tune, measure, and support.',
    },
    {
      stage: 'Run',
      who: 'Yours',
      desc: 'The map, the numbers, and the working workstream are yours. Expansion is your call.',
    },
  ],
};

export const circle = {
  label: 'Why Start Tactical',
  title: 'From tactical execution to strategic decisions',
  subtitle:
    'Every engagement starts where the pain is — daily execution. Each layer feeds the next, so the strategic value compounds.',
  rings: [
    {
      number: '1',
      title: 'Tactical execution',
      short: 'Where the pain lives',
      desc: 'Where the pain lives today: teams chasing emails, exceptions invisible to the system, master data drifting, margin impact caught only after the spend.',
    },
    {
      number: '2',
      title: 'Exception management',
      short: 'Captured and prioritized',
      desc: 'Every supplier update, confirmation, discrepancy, and price change is captured and prioritized — handled early instead of hunted.',
    },
    {
      number: '3',
      title: 'Master data heals',
      short: 'Clean data as byproduct',
      desc: 'As exceptions are worked, part and supplier data gets cleaner as a byproduct — and forward-looking signals start to emerge.',
    },
    {
      number: '4',
      title: 'Strategic decision-making',
      short: 'Decisions move upstream',
      desc: 'With trusted data and early signals, decisions move upstream: margin protected before commitment, revenue at risk visible early — proactive, not reactive.',
    },
  ],
  closing:
    "You don't have to buy the strategy layer on day one. It's earned — built on execution that already works.",
};

export const cta = {
  title: 'Talk to us',
  description:
    "A focused conversation about execution — we'll walk through how the mapping works and where AI would start in your operation.",
  primaryCta: 'Talk to us',
};
