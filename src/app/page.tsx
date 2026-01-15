'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { brand } from '@content/shared';

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
  const [activeFaqGroup, setActiveFaqGroup] = useState(0);

  const toggleFaq = (groupIndex: number, itemIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`;
    setOpenFaqItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
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
              <h1 className="text-4xl font-semibold tracking-tight text-hero-text sm:text-5xl lg:text-6xl">
                {content.hero.headline}{' '}
                <span className="text-hero-accent">{content.hero.headlineAccent}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-hero-text-secondary sm:text-xl">
                {content.hero.subheading}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-sm font-medium text-hero-text-muted">
                {content.hero.icpLine}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex items-center justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-hero-button-bg text-hero-button-text hover:bg-hero-button-bg/90"
                >
                  <Link href="/solutions">
                    See How It Works
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
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
                <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  {content.hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Adoption Journey Section */}
      <section className="bg-gradient-to-b from-muted/40 via-muted/20 to-transparent py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.adoptionJourney.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.adoptionJourney.title}
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <div className="mx-auto mt-16 max-w-5xl">
            {/* Timeline line - visible on lg screens */}
            <div className="hidden lg:block relative">
              <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-border/60" />
              <div className="absolute top-6 left-[12.5%] w-2.5 h-2.5 -mt-[4px] rounded-full bg-primary shadow-sm" />
              <div className="absolute top-6 left-[37.5%] w-2.5 h-2.5 -mt-[4px] rounded-full bg-primary shadow-sm" />
              <div className="absolute top-6 left-[62.5%] w-2.5 h-2.5 -mt-[4px] rounded-full bg-primary shadow-sm" />
              <div className="absolute top-6 right-[12.5%] w-2.5 h-2.5 -mt-[4px] rounded-full bg-primary shadow-sm" />
            </div>
            <StaggerContainer className="grid gap-6 lg:grid-cols-4 lg:pt-12" staggerDelay={0.1}>
              {content.adoptionJourney.weeks.map((week) => (
                <StaggerItem key={week.period}>
                  <Card className="group h-full border border-border/40 bg-card/60 shadow-sm transition-all duration-200 hover:bg-card hover:border-border/60 hover:shadow-md">
                    <CardContent className="pt-6 text-center flex flex-col">
                      <span className="text-sm font-semibold text-primary">
                        {week.period}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-200">
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
                  <Card className="group text-center border border-border/40 shadow-none h-full bg-card/50 hover:bg-card hover:border-border/60 hover:shadow-sm transition-all duration-300">
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
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Built For
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.industries.title}
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                {content.industries.subtitle}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {content.industries.items.map((industry) => {
              const Icon = icons[industry.icon as IconName];
              return (
                <StaggerItem key={industry.name} className="h-full">
                  <div className="group rounded-lg border border-border/40 bg-card/50 p-6 hover:bg-card hover:border-border/60 hover:shadow-sm transition-all duration-300 text-center h-full flex flex-col">
                    {Icon && (
                      <Icon className="h-5 w-5 text-primary/50 group-hover:text-primary transition-colors duration-300 mb-3 mx-auto" />
                    )}
                    <h3 className="text-base font-semibold text-foreground">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {industry.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 via-muted/20 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.trustAndSecurity.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.trustAndSecurity.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.trustAndSecurity.description}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="mx-auto mt-12 grid max-w-2xl gap-3" staggerDelay={0.1}>
            {content.trustAndSecurity.items.map((item, i) => (
              <StaggerItem key={i}>
                <div className="group flex items-center gap-4 rounded-lg border border-border/40 bg-card/60 p-4 shadow-sm transition-all duration-200 hover:bg-card hover:border-border/60 hover:shadow-md">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors duration-200">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground italic">
              {content.trustAndSecurity.footnote}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                FAQ
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Got questions? We've got answers
              </p>
            </div>
          </FadeIn>

          {/* Category Tabs */}
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2">
              {content.faq.groups.map((group, index) => (
                <button
                  key={group.title}
                  onClick={() => setActiveFaqGroup(index)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeFaqGroup === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {group.title}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mx-auto mt-10 max-w-3xl relative animate-height overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeFaqGroup}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, position: 'absolute', top: 0, left: 0, right: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="space-y-3"
              >
                {content.faq.groups[activeFaqGroup]?.items.map((item, itemIndex) => {
                  const key = `${activeFaqGroup}-${itemIndex}`;
                  const isOpen = openFaqItems[key];
                  return (
                    <div
                      key={itemIndex}
                      className={`rounded-lg border overflow-hidden transition-all duration-300 ease-out ${
                        isOpen
                          ? 'border-border bg-card shadow-sm'
                          : 'border-border/50 bg-card/50 hover:border-border/80 hover:bg-card/80'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(activeFaqGroup, itemIndex)}
                        className="flex w-full items-center justify-between p-5 text-left group"
                      >
                        <span className={`font-medium pr-4 transition-colors duration-200 ${
                          isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                        }`}>
                          {item.question}
                        </span>
                        <div className={`rounded-full p-1 transition-all duration-300 ease-out ${
                          isOpen ? 'bg-primary/10' : 'bg-transparent'
                        }`}>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 transition-all duration-300 ease-out ${
                              isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                            }`}
                          />
                        </div>
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className={`transition-opacity duration-300 ease-out ${
                            isOpen ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Dark Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-hero-text sm:text-4xl">
                Talk to us
              </h2>
              <p className="mt-6 text-lg text-hero-text-secondary">
                {content.finalCta.description}
              </p>
              <div className="mt-10 flex items-center justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-hero-button-bg text-hero-button-text hover:bg-hero-button-bg/90"
                >
                  <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    {content.finalCta.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8">
                <p className="text-base font-medium text-hero-text-secondary">
                  Prefer email?
                </p>
                <p className="mt-2 text-sm text-hero-text-muted">
                  Reach out directly at{' '}
                  <Link href="/contact" className="text-hero-text-secondary hover:text-hero-text underline">
                    {brand.contactEmail}
                  </Link>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
