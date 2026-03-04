'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { brand } from '@content/shared';
import {
  ArrowRight,
  ClipboardList,
  Zap,
  Shield,
  BarChart3,
  Database,
  RefreshCw,
  Clock,
  Package,
  Users,
  Target,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

const icons = {
  ClipboardList, Zap, Shield, BarChart3, Database, RefreshCw,
  Clock, Package, Users, Target, TrendingUp, AlertTriangle,
} as const;

type IconName = keyof typeof icons;

const crossPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

interface SolutionPageProps {
  hero: { label: string; title: string; description: string };
  challenges: { icon: string; title: string; desc: string }[];
  features: { icon: string; title: string; desc: string }[];
  howItWorks: { step: string; title: string; desc: string }[];
  useCases: { title: string; scenario: string; outcome: string }[];
  metric: { value: string; label: string; sublabel: string };
  crossLinks: { id: string; title: string; subtitle: string; href: string }[];
  cta: { title: string; description: string; primaryCta: string };
  mockUI: React.ReactNode;
}

export function SolutionPageTemplate({
  hero, challenges, features, howItWorks, useCases, metric, crossLinks, cta, mockUI,
}: SolutionPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                {hero.label}
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {hero.description}
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    Book a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-[#011A0C] py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#51DABA]">
                The Challenge
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-[#51DABA]/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What teams deal with today
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2" staggerDelay={0.1}>
            {challenges.map((item) => {
              const Icon = icons[item.icon as IconName];
              return (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#51DABA]/10 text-[#51DABA]">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Features + Demo Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                How Alora Solves This
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Built for this exact problem
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            <div>
              <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                {features.map((feature) => {
                  const FIcon = icons[feature.icon as IconName];
                  return (
                    <StaggerItem key={feature.title}>
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {FIcon && <FIcon className="h-5 w-5" />}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
              {/* Metric Card */}
              <FadeIn delay={0.4}>
                <div className="mt-8 inline-flex items-center gap-4 rounded-xl px-5 py-3 bg-primary/5 border border-primary/20">
                  <span className="text-3xl font-bold text-primary">{metric.value}</span>
                  <div>
                    <div className="text-sm font-medium text-foreground">{metric.label}</div>
                    <div className="text-xs text-muted-foreground">{metric.sublabel}</div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.2}>{mockUI}</FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                How It Works
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From data to action
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {howItWorks.map((step) => (
              <StaggerItem key={step.step}>
                <Card className="h-full border border-border/40 shadow-sm">
                  <CardContent className="pt-6 text-center flex flex-col h-full">
                    <span className="inline-flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                      {step.step}
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{step.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[#011A0C] py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#51DABA]">
                Real Scenarios
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-[#51DABA]/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                How this plays out in practice
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2" staggerDelay={0.15}>
            {useCases.map((uc) => (
              <StaggerItem key={uc.title}>
                <div className="rounded-xl border border-[#51DABA]/20 bg-[#1a3a28] p-6">
                  <h3 className="text-lg font-semibold text-white">{uc.title}</h3>
                  <div className="mt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">Scenario</span>
                    <p className="mt-1 text-sm text-white/60 leading-relaxed">{uc.scenario}</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51DABA]/60">With Alora</span>
                    <p className="mt-1 text-sm text-[#51DABA]/80 leading-relaxed">{uc.outcome}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cross-Links */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Related Modules
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Works together
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2" staggerDelay={0.1}>
            {crossLinks.map((link) => (
              <StaggerItem key={link.id}>
                <Link href={link.href} className="block group">
                  <Card className="h-full border border-border/40 shadow-sm transition-all duration-200 group-hover:border-border/60 group-hover:shadow-md">
                    <CardContent className="pt-6">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{link.subtitle}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: crossPattern }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-hero-text sm:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-hero-text-secondary">
                {cta.description}
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center">
                <Button asChild size="lg" className="bg-hero-button-bg text-hero-button-text hover:bg-hero-button-bg/90 w-full sm:w-auto">
                  <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    {cta.primaryCta}
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
