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
  AlertTriangle,
  Clock,
  Lock,
} from 'lucide-react';

// Content imports
import * as content from '@content/solutions';

// Icon mapping for dynamic rendering
const icons = {
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

      {/* Security */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.security.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.security.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.security.description}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {content.security.items.map((item) => {
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
    </>
  );
}
