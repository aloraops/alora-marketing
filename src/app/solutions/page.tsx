'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { SolutionsCarousel } from '@/components/solutions/solutions-carousel';
import {
  ArrowRight,
  ClipboardList,
  Zap,
  Shield,
  BarChart3,
  Mail,
  Database,
  RefreshCw,
  AlertTriangle,
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

      {/* Solutions Carousel */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Core Solutions
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Three modules, one engine
              </p>
            </div>
          </FadeIn>
          <SolutionsCarousel />
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
