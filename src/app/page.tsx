'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import {
  ArrowRight,
  Cpu,
  Factory,
  HeartPulse,
  Shield,
  Radio,
  Layers,
  Scale,
  Zap,
  Clock,
  CheckCircle,
  Unlock,
  ChevronDown,
} from 'lucide-react';

// Content imports
import * as content from '@content/home';

// Icon mapping for dynamic rendering
const icons = {
  Shield,
  Cpu,
  Factory,
  HeartPulse,
  Radio,
  Layers,
  Scale,
  Zap,
  Clock,
  CheckCircle,
  Unlock,
} as const;

type IconName = keyof typeof icons;

export default function HomePage() {
  const [openFaqItems, setOpenFaqItems] = useState<Record<string, boolean>>({});

  const toggleFaq = (groupIndex: number, itemIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`;
    setOpenFaqItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
              <div className="mt-10 flex items-center justify-center">
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
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Execution Loop Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.executionLoop.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.executionLoop.title}
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-16 max-w-4xl space-y-12">
            {content.executionLoop.steps.map((step, i) => {
              const Icon = icons[step.icon as IconName];
              return (
                <FadeIn key={step.number} delay={i * 0.1}>
                  <div className="relative flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-lg">
                        {step.number}
                      </div>
                      {i < content.executionLoop.steps.length - 1 && (
                        <div className="mt-4 h-full w-px bg-border" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3">
                        {Icon && <Icon className="h-5 w-5 text-primary" />}
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      {step.details && (
                        <ul className="mt-4 space-y-2">
                          {step.details.map((detail, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.options && (
                        <ul className="mt-4 space-y-2">
                          {step.options.map((option, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.actions && (
                        <ul className="mt-4 space-y-2">
                          {step.actions.map((action, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.closing && (
                        <div className="mt-4 space-y-2">
                          {step.closing.map((line, j) => (
                            <p key={j} className="text-muted-foreground leading-relaxed">
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                      {step.emphasis && (
                        <p className="mt-4 text-sm font-medium text-primary">
                          {step.emphasis}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.5}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-muted-foreground">
              {content.executionLoop.closingLine}
            </p>
          </FadeIn>

          {/* CTA after execution loop per spec */}
          <FadeIn delay={0.6}>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  {content.hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Adoption Journey Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.adoptionJourney.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.adoptionJourney.title}
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <div className="mx-auto mt-16 max-w-5xl">
            {/* Timeline line - visible on lg screens */}
            <div className="hidden lg:block relative">
              <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
              <div className="absolute top-6 left-[12.5%] w-2 h-2 -mt-[3px] rounded-full bg-primary" />
              <div className="absolute top-6 left-[37.5%] w-2 h-2 -mt-[3px] rounded-full bg-primary" />
              <div className="absolute top-6 left-[62.5%] w-2 h-2 -mt-[3px] rounded-full bg-primary" />
              <div className="absolute top-6 right-[12.5%] w-2 h-2 -mt-[3px] rounded-full bg-primary" />
            </div>
            <StaggerContainer className="grid gap-6 lg:grid-cols-4 lg:pt-12" staggerDelay={0.1}>
              {content.adoptionJourney.weeks.map((week) => (
                <StaggerItem key={week.period}>
                  <Card className="h-full border-0 shadow-sm">
                    <CardContent className="pt-6 text-center flex flex-col">
                      <span className="text-sm font-semibold text-primary">
                        {week.period}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">
                        {week.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                        {week.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Impact / KPIs Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.metrics.title}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4" staggerDelay={0.1}>
            {content.metrics.items.map((stat) => {
              const Icon = icons[stat.icon as IconName];
              return (
                <StaggerItem key={stat.label}>
                  <Card className="group text-center border border-border/40 shadow-none h-full bg-white/50 hover:bg-white hover:border-border/60 hover:shadow-sm transition-all duration-300">
                    <CardContent className="pt-8 pb-8 flex flex-col h-full">
                      {Icon && (
                        <div className="mx-auto mb-5">
                          <Icon className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                        </div>
                      )}
                      <h3 className="text-base font-semibold text-foreground">
                        {stat.label}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                        {stat.detail}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Serve / Industries Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.industries.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {content.industries.subtitle}
              </p>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {content.industries.items.map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="group rounded-lg border border-border/40 bg-white/50 p-6 hover:bg-white hover:border-border/60 hover:shadow-sm transition-all duration-300">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.trustAndSecurity.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.trustAndSecurity.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.trustAndSecurity.description}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="mx-auto mt-12 grid max-w-2xl gap-4" staggerDelay={0.1}>
            {content.trustAndSecurity.items.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.5}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
              {content.trustAndSecurity.footnote}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.faq.label}
              </h2>
            </div>
          </FadeIn>

          <div className="mx-auto mt-12 max-w-3xl space-y-10">
            {content.faq.groups.map((group, groupIndex) => (
              <FadeIn key={group.title} delay={groupIndex * 0.1}>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {group.title}
                  </h3>
                  <div className="space-y-2">
                    {group.items.map((item, itemIndex) => {
                      const key = `${groupIndex}-${itemIndex}`;
                      const isOpen = openFaqItems[key];
                      return (
                        <div
                          key={itemIndex}
                          className="rounded-lg border bg-background"
                        >
                          <button
                            onClick={() => toggleFaq(groupIndex, itemIndex)}
                            className="flex w-full items-center justify-between p-4 text-left"
                          >
                            <span className="font-medium text-foreground pr-4">
                              {item.question}
                            </span>
                            <ChevronDown
                              className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-4">
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
              <p className="mt-2 text-sm text-muted-foreground italic">
                {content.finalCta.supportingLine}
              </p>
              <div className="mt-10 flex items-center justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    {content.finalCta.primaryCta}
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
