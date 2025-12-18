'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import {
  ArrowRight,
  ClipboardList,
  Package,
  Users,
  Zap,
  Shield,
  BarChart3,
  Cpu,
  Factory,
  HeartPulse,
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(145deg, #1a3a28 0%, #2b553c 35%, #3d6b4f 65%, #4d8060 100%)',
          }}
        />
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Where every supply-chain event becomes{' '}
                <span className="text-white/80">clear, ranked, and actionable</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
                Every change triggers impact. Alora captures it, measures it, ranks it,
                and drives the next move — so your teams always know what to handle
                first.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-sm font-medium text-white/50">
                Built for complex, BOM-driven hardware manufacturers.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/contact">
                    Book a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/solutions">Learn More</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                The Problem
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The daily gap between data and decisions
              </p>
            </div>
          </FadeIn>
          <div className="mx-auto mt-12 max-w-3xl">
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Even with ERP, reports, and spreadsheets, procurement and planning
                teams still struggle to answer basic questions at the start of the
                day:
              </p>
            </FadeIn>
            <StaggerContainer className="mt-8 space-y-4" staggerDelay={0.1}>
              {[
                'Which lines should we focus on first?',
                'Can we really build this order on time?',
                'Which customers are at risk if certain parts slip?',
              ].map((question, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3 text-foreground font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                      ?
                    </span>
                    {question}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <FadeIn delay={0.4}>
              <p className="mt-8 text-muted-foreground">
                Data is spread across ERP, Excel, and email. Deep, multi-level BOMs
                make it hard to see which specific part really blocks a build.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                The Solution
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From any event to clear impact and action
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Alora ingests ERP, email, and BOM signals and runs an AI engine that
                scores every part number. See which builds and customers are affected,
                how much is at risk, and who owns the next move.
              </p>
            </div>
          </FadeIn>

          {/* Flow Diagram */}
          <StaggerContainer className="mt-16 flex flex-wrap items-center justify-center gap-4" staggerDelay={0.1}>
            {[
              { label: 'Ingest', icon: Package, desc: 'ERP, Email, BOM' },
              { label: 'Analyze', icon: BarChart3, desc: 'AI Risk Engine' },
              { label: 'Prioritize', icon: ClipboardList, desc: 'Ranked Worklist' },
              { label: 'Act', icon: Zap, desc: 'Clear Next Steps' },
              { label: 'Sync', icon: Shield, desc: 'Update ERP' },
            ].map((step, i) => (
              <StaggerItem key={step.label} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <span className="mt-2 text-sm font-semibold text-foreground">
                    {step.label}
                  </span>
                  <span className="text-xs text-muted-foreground">{step.desc}</span>
                </div>
                {i < 4 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground hidden sm:block" />
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Measurable Impact
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Results that matter
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4" staggerDelay={0.1}>
            {[
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
            ].map((stat) => (
              <StaggerItem key={stat.metric}>
                <Card className="text-center border-0 shadow-sm h-full">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary lg:text-5xl">
                      {stat.metric}
                    </div>
                    <div className="mt-1 text-lg font-semibold text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.desc}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {stat.detail}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Solutions
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What Alora does for you
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                title: 'PO Risk & Tracking',
                desc: 'Turn open POs into a ranked TODO list, not a static report. See all PO lines ordered by risk and business impact.',
                icon: ClipboardList,
                href: '/solutions#po-risk',
              },
              {
                title: 'CTB & Build Readiness',
                desc: 'Know if you can really build — before the line is exposed. Connect part availability and risk to upcoming builds.',
                icon: Package,
                href: '/solutions#build-readiness',
              },
              {
                title: 'Vendor Behavior & Scoring',
                desc: "See how suppliers actually behave, not just what's written on the PO. Track real lead times vs. quoted.",
                icon: Users,
                href: '/solutions#vendor-scoring',
              },
            ].map((feature) => (
              <StaggerItem key={feature.title}>
                <Card className="border-0 shadow-sm transition-shadow hover:shadow-md h-full">
                  <CardContent className="pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                    <Link
                      href={feature.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Built For
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Complex, BOM-driven hardware manufacturers
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Where a single part can put a whole build at risk
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4" staggerDelay={0.1}>
            {[
              {
                name: 'Medical Devices',
                icon: HeartPulse,
                desc: 'Regulated, multi-discipline assemblies',
              },
              {
                name: 'Robotics',
                icon: Cpu,
                desc: 'Multi-level BOMs, tightly sequenced',
              },
              {
                name: 'Defense',
                icon: Shield,
                desc: 'Complex assemblies, strict compliance',
              },
              {
                name: 'Industrial',
                icon: Factory,
                desc: 'Engineer-to-order, high-value parts',
              },
            ].map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <industry.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{industry.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                The Team
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Built by people who&apos;ve lived the problem
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                Our founders bring 20+ years of combined experience in supply chain
                operations, AI/ML, and enterprise software. We&apos;ve managed $200M in
                supplier deals, built surgical robotics, and created AI systems for
                high-frequency trading.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/company">
                    Meet the Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                See Alora on your own data
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We usually start with a focused pilot around active POs and upcoming
                builds — enough to prove value for procurement and planning without
                heavy IT work.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Request a Pilot</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
