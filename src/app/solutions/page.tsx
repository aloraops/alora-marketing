'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/components/ui/motion';
import {
  ArrowRight,
  ClipboardList,
  Package,
  Users,
  Zap,
  Shield,
  BarChart3,
  Mail,
  Database,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Clock,
  Lock,
} from 'lucide-react';

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                What Alora does for you
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                All tools are powered by the same AI risk engine that turns
                supply-chain events into ranked P/N risk and next moves. We start with
                three core modules and continuously add new workflows on top of the
                same engine.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI Risk Engine Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                The Core
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                AI Risk Engine
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Alora ingests data from your ERP, email, and supplier updates. Our AI
                engine analyzes every part number, scores risk, and delivers a
                prioritized action plan.
              </p>
            </div>
          </FadeIn>

          {/* How it Works Flow */}
          <div className="mt-16">
            <div className="mx-auto max-w-4xl">
              <StaggerContainer className="grid gap-8 md:grid-cols-5" staggerDelay={0.1}>
                {[
                  {
                    step: '1',
                    label: 'Ingest',
                    icon: Database,
                    desc: 'Pull data from ERP, email, and BOM sources',
                  },
                  {
                    step: '2',
                    label: 'Analyze',
                    icon: BarChart3,
                    desc: 'AI scores every part by risk and impact',
                  },
                  {
                    step: '3',
                    label: 'Prioritize',
                    icon: ClipboardList,
                    desc: 'Generate ranked worklist of actions',
                  },
                  {
                    step: '4',
                    label: 'Act',
                    icon: Zap,
                    desc: 'Get suggested next moves for each item',
                  },
                  {
                    step: '5',
                    label: 'Sync',
                    icon: RefreshCw,
                    desc: 'Push updates back to ERP automatically',
                  },
                ].map((item, i) => (
                  <StaggerItem key={item.step}>
                    <div className="relative text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <item.icon className="h-7 w-7" />
                      </div>
                      <div className="mt-4">
                        <span className="text-xs font-medium text-primary">
                          Step {item.step}
                        </span>
                        <h3 className="mt-1 text-base font-semibold text-foreground">
                          {item.label}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                      {i < 4 && (
                        <div className="absolute right-0 top-7 hidden -translate-y-1/2 translate-x-1/2 md:block">
                          <ArrowRight className="h-5 w-5 text-border" />
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 1: PO Risk & Tracking */}
      <section id="po-risk" className="bg-muted/30 py-20 lg:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Solution 1
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  PO Risk & Tracking
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Turn open POs into a ranked TODO list, not a static report.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'See all PO lines ordered by risk and business impact',
                    'Understand which builds and customers each line affects',
                    'Get suggested next moves for risky lines (follow-up, escalate, re-confirm, split)',
                    'Track confirmation gaps, date slips, and mismatched lines',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <ScaleIn delay={0.2}>
              <div className="relative">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-4">
                        <span className="text-sm font-semibold text-foreground">
                          PO Lines by Risk
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Updated 2 min ago
                        </span>
                      </div>
                      {[
                        {
                          po: 'PO-4521',
                          part: 'Motor Assembly',
                          risk: 'High',
                          action: 'Follow up',
                        },
                        {
                          po: 'PO-4518',
                          part: 'Control Board',
                          risk: 'Medium',
                          action: 'Re-confirm',
                        },
                        {
                          po: 'PO-4515',
                          part: 'Housing Unit',
                          risk: 'Low',
                          action: 'Monitor',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-3 border-b last:border-0"
                        >
                          <div>
                            <div className="font-medium text-sm text-foreground">
                              {item.po}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.part}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded ${
                                item.risk === 'High'
                                  ? 'bg-red-100 text-red-700'
                                  : item.risk === 'Medium'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-green-100 text-green-700'
                              }`}
                            >
                              {item.risk}
                            </span>
                            <span className="text-xs text-primary font-medium">
                              {item.action}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Solution 2: CTB & Build Readiness */}
      <section id="build-readiness" className="py-20 lg:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScaleIn className="order-2 lg:order-1" delay={0.2}>
              <div className="relative">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-4">
                        <span className="text-sm font-semibold text-foreground">
                          Build Readiness
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Next 30 days
                        </span>
                      </div>
                      {[
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
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-3 border-b last:border-0"
                        >
                          <div>
                            <div className="font-medium text-sm text-foreground">
                              {item.build}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.customer}
                            </div>
                          </div>
                          <div className="text-right">
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded ${
                                item.status === 'At Risk'
                                  ? 'bg-red-100 text-red-700'
                                  : item.status === 'Review'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-green-100 text-green-700'
                              }`}
                            >
                              {item.status}
                            </span>
                            <div className="text-xs text-muted-foreground mt-1">
                              {item.parts}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScaleIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Package className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Solution 2
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  CTB & Build Readiness
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Know if you can really build — before the line is exposed.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Connect part availability and risk to upcoming builds and projects',
                    'Highlight shortages and bottlenecks at the BOM level',
                    'Show which orders and customers are at risk if nothing changes',
                    'See revenue exposure before it becomes a crisis',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Solution 3: Vendor Behavior & Scoring */}
      <section id="vendor-scoring" className="bg-muted/30 py-20 lg:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Solution 3
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Vendor Behavior & Scoring
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  See how suppliers actually behave, not just what&apos;s written on
                  the PO.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Track real lead times vs. quoted, confirmation patterns, and slips',
                    'Score suppliers at the part level based on behavior and risk',
                    'Feed vendor scores into prioritization so risky suppliers surface first',
                    'Identify patterns before they become problems',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <ScaleIn delay={0.2}>
              <div className="relative">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-4">
                        <span className="text-sm font-semibold text-foreground">
                          Vendor Performance
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Last 90 days
                        </span>
                      </div>
                      {[
                        {
                          vendor: 'Precision Parts Co',
                          score: 92,
                          trend: 'up',
                          metric: '+3 days avg',
                        },
                        {
                          vendor: 'Global Electronics',
                          score: 78,
                          trend: 'down',
                          metric: '-5 days avg',
                        },
                        {
                          vendor: 'Industrial Supply',
                          score: 85,
                          trend: 'stable',
                          metric: 'On target',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-3 border-b last:border-0"
                        >
                          <div>
                            <div className="font-medium text-sm text-foreground">
                              {item.vendor}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.metric}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp
                              className={`h-4 w-4 ${
                                item.trend === 'up'
                                  ? 'text-green-600'
                                  : item.trend === 'down'
                                    ? 'text-red-600 rotate-180'
                                    : 'text-yellow-600 rotate-90'
                              }`}
                            />
                            <span className="text-lg font-bold text-foreground">
                              {item.score}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ERP Integration */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Integration
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                No rip-and-replace
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Alora works with your existing ERP. We integrate, not replace.
                Bidirectional sync keeps both systems in harmony.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                icon: Database,
                title: 'Pull Data',
                desc: 'Open orders, items, vendor master data from Priority, SAP, and more',
              },
              {
                icon: RefreshCw,
                title: 'Map & Sync',
                desc: 'Configurable status mapping between systems, real-time updates',
              },
              {
                icon: Zap,
                title: 'Push Back',
                desc: 'Delivery dates and confirmations flow back to ERP automatically',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Email Intelligence */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Email Intelligence
                </h2>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  AI-powered email processing
                </p>
                <p className="mt-6 text-lg text-muted-foreground">
                  Our AI pipeline converts unstructured supplier communications into
                  structured data automatically.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: 'Automatic Classification',
                      desc: 'NEW_ORDER, UPDATE, RECEIPT, and more',
                    },
                    {
                      icon: BarChart3,
                      title: 'Data Extraction',
                      desc: 'Structured data from PDFs, Excel, and attachments',
                    },
                    {
                      icon: Clock,
                      title: 'Order Updates',
                      desc: 'Auto-create and update orders from supplier emails',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="space-y-4">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-4 flex items-center gap-4">
                      <Mail className="h-8 w-8 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">
                          supplier@vendor.com
                        </div>
                        <div className="text-xs text-muted-foreground">
                          RE: PO-4521 Delivery Update
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </CardContent>
                  </Card>
                  <div className="flex justify-center">
                    <div className="h-8 w-px bg-border" />
                  </div>
                  <Card className="border-0 shadow-sm bg-primary/5">
                    <CardContent className="p-4">
                      <div className="text-xs font-medium text-primary mb-2">
                        AI EXTRACTED
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Type:</span>{' '}
                          <span className="font-medium">UPDATE</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">PO:</span>{' '}
                          <span className="font-medium">4521</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">New Date:</span>{' '}
                          <span className="font-medium">Jan 15</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Qty:</span>{' '}
                          <span className="font-medium">150 units</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Security & Trust
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Security you can build on
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Alora works with sensitive BOM, PO, and supplier data, so security is
                built into the product. Your data stays your own and is never pooled
                or shared across customers.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                icon: Lock,
                title: 'Data Protection',
                desc: 'Enterprise-grade encryption at rest and in transit',
              },
              {
                icon: Shield,
                title: 'Access Control',
                desc: 'Role-based permissions and audit logging',
              },
              {
                icon: AlertTriangle,
                title: 'Isolated Tenants',
                desc: 'Complete data isolation between customers',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to transform your supply chain?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                See how Alora can turn your procurement chaos into clarity. Book a
                demo to see the platform in action.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
