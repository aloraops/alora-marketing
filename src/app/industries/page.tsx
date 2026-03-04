'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { brand } from '@content/shared';
import * as content from '@content/industries/index';
import {
  ArrowRight,
  HeartPulse,
  Shield,
  Cpu,
  Factory,
} from 'lucide-react';

const icons = { HeartPulse, Shield, Cpu, Factory } as const;
type IconName = keyof typeof icons;

const crossPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: crossPattern }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-hero-text sm:text-5xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 text-lg text-hero-text-secondary leading-relaxed">
                {content.hero.description}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2" staggerDelay={0.1}>
            {content.industries.map((industry) => {
              const Icon = icons[industry.icon as IconName];
              return (
                <StaggerItem key={industry.slug}>
                  <Link href={industry.href} className="block group">
                    <Card className="h-full border border-border/40 shadow-sm transition-all duration-200 group-hover:border-border/60 group-hover:shadow-md">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {Icon && <Icon className="h-5 w-5" />}
                          </div>
                          <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {industry.name}
                          </h2>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {industry.summary}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                          Learn more <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
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
                {content.cta.title}
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-hero-text-secondary">
                {content.cta.description}
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center">
                <Button asChild size="lg" className="bg-hero-button-bg text-hero-button-text hover:bg-hero-button-bg/90 w-full sm:w-auto">
                  <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    {content.cta.primaryCta}
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
