'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { brand } from '@content/shared';
import {
  ArrowRight,
  ClipboardList,
  Shield,
  Database,
  Clock,
  Users,
  Target,
  AlertTriangle,
  RefreshCw,
  Cpu,
  Factory,
  HeartPulse,
} from 'lucide-react';

const icons = {
  ClipboardList, Shield, Database, Clock, Users, Target,
  AlertTriangle, RefreshCw, Cpu, Factory, HeartPulse,
} as const;

type IconName = keyof typeof icons;

const crossPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

interface IndustryPageProps {
  hero: {
    icon: string;
    title: string;
    description: string;
  };
  painPoints: {
    icon: string;
    title: string;
    desc: string;
  }[];
  capabilities: {
    title: string;
    desc: string;
    relatedModule: string;
    moduleHref: string;
  }[];
  relevantModules: {
    id: string;
    title: string;
    description: string;
    href: string;
  }[];
  cta: {
    title: string;
    description: string;
    primaryCta: string;
  };
}

export function IndustryPageTemplate({
  hero, painPoints, capabilities, relevantModules, cta,
}: IndustryPageProps) {
  const HeroIcon = icons[hero.icon as IconName];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: crossPattern }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              {HeroIcon && (
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#51DABA]/10 text-[#51DABA]">
                  <HeroIcon className="h-7 w-7" />
                </div>
              )}
              <h1 className="text-4xl font-semibold tracking-tight text-hero-text sm:text-5xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg text-hero-text-secondary leading-relaxed">
                {hero.description}
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-hero-button-bg text-hero-button-text hover:bg-hero-button-bg/90">
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

      {/* Pain Points Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Industry Challenges
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What makes this hard
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2" staggerDelay={0.1}>
            {painPoints.map((item) => {
              const Icon = icons[item.icon as IconName];
              return (
                <StaggerItem key={item.title}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities Section */}
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
                How Alora Helps
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-[#51DABA]/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for this environment
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 max-w-4xl space-y-8" staggerDelay={0.15}>
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="rounded-xl border border-[#51DABA]/20 bg-[#1a3a28] p-6">
                  <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{cap.desc}</p>
                  <Link
                    href={cap.moduleHref}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#51DABA] hover:text-[#51DABA]/80 transition-colors"
                  >
                    Explore {cap.relatedModule}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Relevant Modules */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Relevant Modules
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The tools your team needs
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3" staggerDelay={0.1}>
            {relevantModules.map((mod) => (
              <StaggerItem key={mod.id}>
                <Link href={mod.href} className="block group">
                  <Card className="h-full border border-border/40 shadow-sm transition-all duration-200 group-hover:border-border/60 group-hover:shadow-md">
                    <CardContent className="pt-6">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {mod.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{mod.description}</p>
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
