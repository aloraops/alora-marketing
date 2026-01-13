# Alora Company Brief for Marketing Site
*Compiled: 2025-12-13*

This document synthesizes key information from Alora's internal documentation to inform marketing website copy and positioning.

---

## Mission & Problem Statement

### The Problem We Solve

Manufacturing companies waste **tens of millions of dollars** due to:
- Dead stock from poor inventory management
- Blocked invoices and payment delays
- Lack of automation in procurement processes
- Manual work overload (emails, Excel spreadsheets, etc.)
- Inability to convert unstructured data into actionable insights

**The daily gap:** Even with ERP, reports, and spreadsheets, procurement and planning teams struggle to answer basic questions:
- Which lines should we focus on first?
- Can we really build this order on time?
- Which customers are at risk if certain parts slip?

**Why it's hard:** Data is spread across ERP, Excel, and email. Deep, multi-level BOMs make it hard to see which specific part really blocks a build.

### Our Solution

Alora tracks communication between clients and their vendors regarding manufacturing orders, converting **unstructured data (primarily emails) into structured, actionable information**.

We raise intelligent alerts and set priorities for:
- Procurement buyers
- Supply chain managers
- Operations leadership

**The core insight:** In complex hardware, everything starts with a BOM and a part number — and the risk attached to it.

---

## What Makes Alora Different

### 1. BOM-Driven Intelligence

We connect every part number to the full business context:
- **Part-level risk** → Which parts are at risk?
- **Build readiness** → Can we actually build this on time?
- **Revenue impact** → How much money is on the line?
- **Customer exposure** → Which customers are affected?

### 2. AI-Powered Email Processing

Our AI pipeline converts unstructured supplier communications into structured data:

```
Email Received
    ↓
Relevance Filter → Is this procurement-related?
    ↓
Triage → Classify: NEW_ORDER, UPDATE, RECEIPT, etc.
    ↓
Order Analyzer → Extract structured data from attachments
    ↓
Order Updater → Update database, create audit log
```

### 3. Risk-Based Prioritization

Not just a report — a **ranked TODO list** showing:
- Which PO lines need attention first (by risk score)
- Which builds are at risk (and which customers)
- How much revenue is exposed
- Who owns the next action

### 4. ERP Integration (No Rip-and-Replace)

Bidirectional sync with Priority ERP (expandable to SAP, others):
- Pull open orders, items, vendor data
- Map statuses between systems
- Push delivery dates back to ERP
- Keep both systems in sync automatically

---

## Technology Stack

### AI & Intelligence
- **LangGraph** - AI agent orchestration for email processing
- **Pydantic AI** - Structured AI outputs
- **Future:** Graph Convolutional Networks (GCNs) for supply chain network modeling

### Backend
- **FastAPI** - High-performance Python API
- **SQLModel** - Type-safe ORM (SQLAlchemy + Pydantic)
- **PostgreSQL** - Primary database with audit logging
- **Redis** - Pub/sub, caching, task queues

### Frontend
- **Next.js 14+** - App Router, Server Components
- **shadcn/ui** - Enterprise-grade component library
- **TanStack Query** - Server state management
- **Tailwind CSS** - Modern styling system

### Infrastructure
- **GCP** - Cloud platform
- **OpenTofu/Terraform** - Infrastructure as Code
- **Multi-tenant architecture** - Isolated processes per tenant
- **Cloud SQL & Memorystore** - Managed PostgreSQL and Redis

---

## Target Market (ICP)

### Industries
- **Medical devices** - Regulated, multi-discipline assemblies where build readiness and traceability are critical
- **Robotics & automation** - Multi-level BOMs, long-lead motion/control components, tightly sequenced builds
- **Defense** - Complex assemblies, long procurement cycles, strict compliance
- **Industrial equipment** - Engineer-to-order, configurable BOMs, high-value parts, frequent ECOs
- **Electronics & systems** - Many suppliers, global lead times, design changes that ripple through BOMs

### Company Profile
- Multi-level BOMs and sub-assemblies
- Many suppliers and long lead times
- **Already have ERP** (e.g., SAP, Priority) in place
- **But still track real-life risk in Excel and email** ← This is the key insight

### Key Characteristic
**Complex, BOM-driven hardware manufacturers where a single part can stop a build and BOMs are too deep to manage in spreadsheets.**

---

## The Founding Team

### Complementary Expertise

**Sharon Ilan - Co-Founder, CPO/COO**
- **Domain Expert:** Built supply chain operations from scratch at Human Xtensions (surgical robotics)
- **Scale Experience:** First employee at Better Place - managed $200M in supplier deals, $80-100M charging station project
- **Operations Background:** 10+ years in supply chain across automotive/EV, fleet management, medical devices
- **Education:** Industrial Engineering and Management
- **Military:** Unit 76 Intelligence, Operations Officer

**Yuval Blyakhman - Co-Founder, CEO**
- **Product Leader:** First employee → VP R&D at Human Xtensions (surgical robotics)
- **Engineering Background:** Mechanical + Biomedical Engineering
- **Innovation Track Record:** Filed multiple patents in medical instruments and surgical robotics
- **Startup Scaling:** Witnessed company growth from first employee to mature product
- **Military:** Unit 81 (Unit 8153) Intelligence, Mechanical Engineer

**Idan Ben-Ami - Co-Founder, CTO**
- **AI/ML Expert:** Master's thesis on Graph Convolutional Networks - directly applicable to supply chain network modeling
- **Cloud Architect:** Migrated trading infrastructure from Terraform to Pulumi at scale
- **High-Performance Systems:** Sub-100ns latency HFT systems, FPGA programming
- **Full-Stack:** FastAPI, modern SaaS architecture, algorithmic trading bots
- **Education:** CS B.Sc. at 14.5 years old, AI/ML M.Sc. (GCN specialization)
- **Military:** Talpiot Program (top 50 of 10,000), Unit 81 Intelligence

### Shared Background
- **All three founders** served in elite Israeli military intelligence units (Unit 81/8153, Unit 76)
- Culture of innovation, problem-solving, high-stakes decision-making
- **They've lived both sides:** Operations/manufacturing (Sharon, Yuval) + Technical/AI (Idan)

### Why This Team?
1. **Domain Expertise (Sharon):** Deep understanding of supply chain pain points - has managed $200M in deals, knows the customer's pain at scale
2. **Product Vision (Yuval):** Experience building complex products in regulated industries, scaling teams from startup to mature product
3. **Technical Excellence (Idan):** AI/ML expertise with graph neural networks directly applicable to supply chain network modeling (suppliers, orders, relationships = graph structure)

---

## Key Value Propositions

### For Procurement Buyers
- **Risk-based worklist** instead of static reports
- Automated follow-ups and confirmations
- Early alerts on confirmation gaps, date slips, mismatched lines
- See which builds each PO line affects

### For Supply Chain Managers
- **Build readiness visibility** before the line is exposed
- Part availability mapped to upcoming builds
- Shortage and bottleneck highlighting at BOM level
- Which customers are at risk if nothing changes

### For Operations Leadership
- **Simple executive view:**
  - Which builds and customers are at risk
  - How much revenue is on the line
  - Who owns the follow-up
- Track vendor behavior and performance at part level
- Real lead times vs. quoted, confirmation patterns, slips

### For Finance
- Revenue risk quantification (5% reduction target)
- See how BOM-level risk flows through to income and margin
- Prevent delays that hit revenue and margin

---

## Measurable Impact (Target Outcomes)

Based on pilot customers and product goals:

| Metric | Target | Description |
|--------|--------|-------------|
| **10× Faster Decision Making** | From weeks to same-day | Weekly spreadsheet reviews → same-day, risk-based worklists |
| **5% Reduction in Revenue Risk** | 5% | Identify and mitigate part-level risk before it delays builds and shipments |
| **50% Less Manual Work** | 50% | Automated follow-ups, confirmations, discrepancy tracking instead of inbox chasing |
| **80% Fewer Blocked POs** | 80% | Early alerts on confirmation gaps, date slips, mismatched lines across BOM and PO |

---

## Product Features (Current)

### 1. PO Risk & Tracking
**One-liner:** Turn open POs into a ranked TODO list, not a static report.

- See all PO lines ordered by risk and business impact
- Understand which builds and customers each line affects
- Get suggested next moves for risky lines (follow-up, escalate, re-confirm, split)

### 2. CTB & Build Readiness
**One-liner:** Know if you can really build — before the line is exposed.

- Connect part availability and risk to upcoming builds and projects
- Highlight shortages and bottlenecks at the BOM level
- Show which orders and customers are at risk if nothing changes

### 3. Vendor Behavior & Scoring
**One-liner:** See how suppliers actually behave, not just what's written on the PO.

- Track real lead times vs. quoted, confirmation patterns, and slips
- Score suppliers at the part level based on behavior and risk
- Feed vendor scores into prioritization so risky suppliers surface first

### 4. Email Intelligence Pipeline
- Automatic email classification (NEW_ORDER, UPDATE, RECEIPT, etc.)
- Extract structured data from attachments (PDFs, Excel, etc.)
- Auto-create and update orders from supplier communications
- Track conversation history per order

### 5. ERP Sync (Priority, expandable)
- Bidirectional sync with Priority ERP
- Pull open orders, items, vendor master data
- Map statuses between systems (configurable)
- Push delivery dates back to ERP via ZGEV_AIAPI table

---

## Product Vision (The North Star)

### From Part-Level Risk to Business Outcome

**Current Focus:** Procurement and planning (where part-level decisions matter most)

**Long-Term Vision:** A decision layer on top of the BOM that connects each part, supplier, and BOM position to:
- Part-level risk
- Build readiness
- Revenue and margin impact

**Over time, this BOM-driven, risk-aware view will support wider decisions in:**

1. **Sourcing** – Which suppliers and parts to depend on, where to add options
2. **Operations** – Which builds to protect or re-sequence when constraints hit
3. **Finance** – How BOM-level risk and changes flow through to income and margin

**Our direction is simple:** Connect BOM and part-level reality to business income, so every decision — from a buyer's next action to a board-level discussion — is grounded in the same, trusted picture.

---

## Key Differentiators

### vs. Traditional ERP
- **ERP:** Static data, reports lag reality, no risk scoring, manual prioritization
- **Alora:** Live updates from emails, AI-driven risk scoring, automatic prioritization, actionable worklists

### vs. Generic Supply Chain Tools
- **Generic tools:** Dashboard-focused, generic workflows, one-size-fits-all
- **Alora:** BOM-driven intelligence, purpose-built for complex hardware, part-level granularity

### vs. Building In-House
- **In-house:** Months/years to build, ongoing maintenance, hard to scale
- **Alora:** Deploy in weeks, continuous AI improvements, expertise built-in

### Technical Moat (Future)
- Graph Convolutional Networks for supply chain network modeling (CTO's PhD-level expertise)
- Multi-tenant AI agent architecture (LangGraph + Pydantic AI)
- Domain-specific training data and models
- Deep ERP integration knowledge

---

## Messaging Hierarchy

### Level 1: Hero Message (10 seconds)
**Where every supply-chain event becomes clear, ranked, and actionable.**

Every change triggers impact. Alora captures it, measures it, ranks it, and drives the next move — so your teams always know what to handle first.

### Level 2: Problem → Solution (30 seconds)
Even with ERP and reports, buyers and planners still spend hours reconciling updates across email, Excel, and systems. Deep BOMs make it impossible to see which specific part blocks a build.

Alora turns unstructured supplier communications into a risk-based worklist — connecting every part to the builds, customers, and revenue it affects.

### Level 3: How It Works (1 minute)
1. **Ingest:** Pull data from ERP, email, and supplier updates
2. **Analyze:** AI scores every part by risk and business impact
3. **Prioritize:** See ranked worklist of what needs attention today
4. **Act:** Get suggested next moves (follow-up, escalate, split)
5. **Sync:** Push updates back to ERP automatically

### Level 4: Why Now (2 minutes)
AI has finally made it possible to convert unstructured supplier communications (emails, PDFs, calls) into structured, actionable data at scale. What used to require armies of coordinators can now be automated — but only if you understand both the technology AND the domain.

We're uniquely positioned: our founding team combines deep supply chain operations expertise (Sharon managed $200M in supplier deals) with cutting-edge AI/ML capability (Idan's GCN research directly applicable to network modeling). We've lived the pain and built the solution.

---

## Objection Handling

### "We already have an ERP system"
**Response:** That's exactly why Alora works. We integrate with your ERP (Priority, SAP, etc.) and add the intelligence layer on top. You keep your ERP, but now it's connected to real-time supplier communications and AI-driven prioritization. No rip-and-replace.

### "Our procurement team is doing fine with Excel"
**Response:** We hear that a lot. But how many hours per week do they spend reconciling updates, chasing confirmations, and figuring out which PO line to focus on first? How often do build delays surprise you? Our pilots typically save 50% of manual work and catch 80% of potential blockers before they impact production.

### "AI doesn't understand our business"
**Response:** You're right — generic AI doesn't. That's why our co-founder Sharon spent 10+ years in supply chain operations at companies like Better Place and Human Xtensions. Our AI is trained on procurement workflows, not generic tasks. It speaks your language: BOMs, POs, lead times, confirmations.

### "This sounds expensive"
**Response:** What's expensive is dead stock, blocked builds, and expedited shipping when a $50 part holds up a $500K order. Our pilots show 5% reduction in revenue risk and 10× faster decision-making. The ROI is typically under 3 months.

### "How is this different from [competitor]?"
**Response:** Most supply chain tools focus on dashboards and analytics. Alora is about **action** — a ranked worklist of what needs attention today, with suggested next moves. We're purpose-built for complex hardware manufacturers with deep BOMs, not generic supply chain monitoring.

---

## Tone & Voice Guidelines

### Tone
- **Confident but not arrogant** - We know supply chain, we've lived it
- **Technical but accessible** - Explain AI without jargon overload
- **Problem-focused first** - Lead with pain, then solution
- **Results-driven** - Metrics matter (10×, 5%, 50%, 80%)

### Voice
- **Direct and clear** - No marketing fluff
- **Authoritative** - Backed by deep expertise (Sharon's $200M experience)
- **Practical** - Focus on outcomes, not features
- **Empathetic** - We understand the daily frustration

### What to Avoid
- ❌ Generic "AI-powered" claims without substance
- ❌ Overpromising ("eliminate all risk")
- ❌ Jargon without explanation (define BOM, CTB, MRP on first use)
- ❌ Feature lists without context (always tie to outcome)
- ❌ Comparisons that sound defensive

### What to Emphasize
- ✅ Specific metrics (10×, 5%, 50%, 80%)
- ✅ Real-world scenarios (buyer's daily pain)
- ✅ Team credibility (Sharon's experience, Idan's AI expertise)
- ✅ No rip-and-replace (integrates with existing ERP)
- ✅ Fast time-to-value (pilots in weeks, not months)

---

## Competitive Landscape Notes

### Current Position
- **Not an ERP replacement** - Integration layer
- **Not generic supply chain analytics** - Purpose-built for complex hardware
- **Not just email automation** - AI-driven intelligence and prioritization

### Future Position
- **Decision layer for supply chain** - Every stakeholder uses same trusted view
- **BOM-to-revenue intelligence** - Connect part-level reality to business outcome
- **AI-native supply chain platform** - Built for LLM/GCN era, not retrofitted

---

## Call to Action Hierarchy

### Primary CTA: Book a demo
**Use when:** Main pages (hero, features, team)
**Why:** Direct path to sales conversation

### Secondary CTA: Request a pilot
**Use when:** After explaining value (impact section, case studies)
**Why:** Lower commitment, shows we're confident in quick wins

### Tertiary CTA: See it in action / Watch demo
**Use when:** Early funnel, educational content
**Why:** Educate before asking for meeting

---

## Key Statistics to Highlight

**Team Background:**
- $200M in supplier deals managed (Sharon)
- 10+ years supply chain operations (Sharon)
- PhD-level AI/ML expertise in graph networks (Idan)
- Elite military intelligence backgrounds (all three)

**Product Impact:**
- 10× faster decision making
- 5% reduction in revenue risk
- 50% less manual work
- 80% fewer blocked POs

**Market Context:**
- Tens of millions wasted annually on dead stock, blocked invoices
- Even with ERP, teams still rely on Excel and email
- Deep BOMs make it impossible to see which part blocks a build

---

## Domain & Branding

**Primary Domain:** aloraops.ai
- Note: alora.ai is owned by a different company (personal AI assistant, Mountain View, CA)
- Decision: Build brand on aloraops.ai vs. attempting acquisition

**Positioning:** AI-powered supply chain operations platform for complex hardware manufacturers

---

*This brief should be updated as the company evolves, particularly after customer feedback, VC conversations, and product iterations.*
