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

// Content imports
import * as content from '@content/home';

// Icon mapping for dynamic rendering
const icons = {
  ClipboardList,
  Package,
  Users,
  Zap,
  Shield,
  BarChart3,
  Cpu,
  Factory,
  HeartPulse,
} as const;

type IconName = keyof typeof icons;

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
                {content.hero.headline}{' '}
                <span className="text-white/80">{content.hero.headlineAccent}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
                {content.hero.subheading}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-sm font-medium text-white/50">
                {content.hero.icpLine}
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
                    {content.hero.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/solutions">{content.hero.secondaryCta}</Link>
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
                {content.problem.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.problem.title}
              </p>
            </div>
          </FadeIn>
          <div className="mx-auto mt-12 max-w-3xl">
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.problem.intro}
              </p>
            </FadeIn>
            <StaggerContainer className="mt-8 space-y-4" staggerDelay={0.1}>
              {content.problem.questions.map((question, i) => (
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
                {content.problem.outro}
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
                {content.solution.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.solution.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.solution.description}
              </p>
            </div>
          </FadeIn>

          {/* Flow Diagram */}
          <StaggerContainer className="mt-16 flex flex-wrap items-center justify-center gap-4" staggerDelay={0.1}>
            {content.solution.steps.map((step, i) => {
              const Icon = icons[step.icon as IconName];
              return (
                <StaggerItem key={step.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                      {Icon && <Icon className="h-8 w-8" />}
                    </div>
                    <span className="mt-2 text-sm font-semibold text-foreground">
                      {step.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{step.desc}</span>
                  </div>
                  {i < content.solution.steps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground hidden sm:block" />
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.metrics.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.metrics.title}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4" staggerDelay={0.1}>
            {content.metrics.items.map((stat) => (
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
                {content.features.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.features.title}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3" staggerDelay={0.15}>
            {content.features.items.map((feature) => {
              const Icon = icons[feature.icon as IconName];
              return (
                <StaggerItem key={feature.title}>
                  <Card className="border-0 shadow-sm transition-shadow hover:shadow-md h-full">
                    <CardContent className="pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {Icon && <Icon className="h-6 w-6" />}
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
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.industries.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.industries.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.industries.subtitle}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4" staggerDelay={0.1}>
            {content.industries.items.map((industry) => {
              const Icon = icons[industry.icon as IconName];
              return (
                <StaggerItem key={industry.name}>
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {industry.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{industry.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.teamTeaser.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.teamTeaser.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.teamTeaser.description}
              </p>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/company">
                    {content.teamTeaser.cta}
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
                {content.finalCta.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.finalCta.description}
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    {content.finalCta.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">{content.finalCta.secondaryCta}</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
