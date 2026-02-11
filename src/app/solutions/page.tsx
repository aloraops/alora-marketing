'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { SolutionsCarousel } from '@/components/solutions/solutions-carousel';
import { brand } from '@content/shared';
import {
  ArrowRight,
  ClipboardList,
  Zap,
  Shield,
  BarChart3,
  Mail,
  Database,
  RefreshCw,
  Clock,
  Cpu,
  Factory,
  HeartPulse,
  Radio,
} from 'lucide-react';

// Content imports
import * as content from '@content/solutions';
import { adoptionJourney, industries } from '@content/home';

// Icon mapping for dynamic rendering
const icons = {
  ClipboardList,
  Zap,
  Shield,
  BarChart3,
  Mail,
  Database,
  RefreshCw,
  Clock,
  Cpu,
  Factory,
  HeartPulse,
  Radio,
} as const;

type IconName = keyof typeof icons;

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.hero.description}
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
                {content.aiEngine.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.aiEngine.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.aiEngine.description}
              </p>
            </div>
          </FadeIn>

          {/* How it Works Flow */}
          <div className="mt-16">
            <div className="mx-auto max-w-4xl">
              <StaggerContainer className="grid gap-8 md:grid-cols-5" staggerDelay={0.1}>
                {content.aiEngine.steps.map((item, i) => {
                  const Icon = icons[item.icon as IconName];
                  return (
                    <StaggerItem key={item.step}>
                      <div className="relative text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          {Icon && <Icon className="h-7 w-7" />}
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
                        {i < content.aiEngine.steps.length - 1 && (
                          <div className="absolute right-0 top-7 hidden -translate-y-1/2 translate-x-1/2 md:block">
                            <ArrowRight className="h-5 w-5 text-border" />
                          </div>
                        )}
                      </div>
                    </StaggerItem>
                  );
                })}
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
                {content.carousel.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.carousel.title}
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
                {content.erpIntegration.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.erpIntegration.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.erpIntegration.description}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {content.erpIntegration.items.map((item) => {
              const Icon = icons[item.icon as IconName];
              return (
                <StaggerItem key={item.title}>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Serve / Industries Section (moved from homepage) */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Built For
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {industries.title}
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                {industries.subtitle}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {industries.items.map((industry) => {
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

      {/* Adoption Journey / Time to Value (moved from homepage) */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {adoptionJourney.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {adoptionJourney.title}
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
              {adoptionJourney.weeks.map((week) => (
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

          {/* CTA */}
          <FadeIn delay={0.5}>
            <div className="mt-16 flex justify-center">
              <Button asChild size="lg">
                <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
