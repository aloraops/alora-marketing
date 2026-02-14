'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import {
  ArrowRight,
  Play,
  Mail,
  Database,
  Cpu,
  TrendingUp,
  Package,
  AlertTriangle,
  BarChart3,
  ClipboardList,
} from 'lucide-react';

// Content imports
import * as content from '@content/video';
import { brand } from '@content/shared';

// Icon mapping for dynamic rendering
const icons = {
  Mail,
  Database,
  Cpu,
  TrendingUp,
  Package,
  AlertTriangle,
  BarChart3,
  ClipboardList,
} as const;

type IconName = keyof typeof icons;

// SVG pattern used across dark sections
const crossPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

export default function VideoPage() {
  return (
    <>
      {/* ============================================
       * SECTION 1: Hero + Video Player
       * ============================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{ backgroundImage: crossPattern }}
        />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-hero-accent">
                {content.hero.label}
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-hero-text sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
              <p className="mt-4 text-base text-hero-text-secondary sm:text-xl">
                {content.hero.subtitle}
              </p>
            </FadeIn>
          </div>

          {/* Video Player / Placeholder */}
          <FadeIn delay={0.2}>
            <div className="mx-auto mt-10 sm:mt-14 max-w-4xl">
              {content.hero.videoUrl ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src={content.hero.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Alora Explainer Video"
                  />
                </div>
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl backdrop-blur-sm">
                  {/* Subtle grid pattern on placeholder */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(81,218,186,0.3) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-transform hover:scale-110">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                    <p className="mt-4 text-sm text-white/40">Video coming soon</p>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================
       * SECTION 2: The Pain
       * ============================================ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#011A0C]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{ backgroundImage: crossPattern }}
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
                {content.painScene.label}
              </p>
              <div className="mx-auto mt-4 h-px w-12 bg-red-400/40" />
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.painScene.title}
              </h2>
              <p className="mt-2 text-base text-white/50">
                {content.painScene.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="mx-auto mt-12 sm:mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.1}
          >
            {content.painScene.items.map((item) => {
              const Icon = icons[item.icon as IconName];
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 h-full hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15">
                      {Icon && <Icon className="h-5 w-5 text-red-400" />}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================
       * SECTION 3: The Turn
       * ============================================ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScaleIn>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {content.turnScene.title}
              </h2>
            </ScaleIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {content.turnScene.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-10 flex justify-center">
                <Image
                  src="/images/alora_logo_full.svg"
                  alt="Alora"
                  width={160}
                  height={42}
                  className="opacity-80"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================
       * SECTION 4: The Solution
       * ============================================ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#011A0C]" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{ backgroundImage: crossPattern }}
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.solutionScene.label}
              </p>
              <div className="mx-auto mt-4 h-px w-12 bg-[#51DABA]/40" />
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.solutionScene.title}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer
            className="mx-auto mt-12 sm:mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.15}
          >
            {content.solutionScene.steps.map((step) => {
              const Icon = icons[step.icon as IconName];
              return (
                <StaggerItem key={step.number}>
                  <div className="rounded-xl border border-[#51DABA]/15 bg-[#51DABA]/[0.04] p-6 h-full hover:bg-[#51DABA]/[0.08] hover:border-[#51DABA]/25 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#51DABA]/15">
                        {Icon && <Icon className="h-5 w-5 text-[#51DABA]" />}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#51DABA]/40">
                        0{step.number}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================
       * SECTION 5: The Proof (Metrics)
       * ============================================ */}
      <section className="py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.proofScene.label}
              </p>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.proofScene.title}
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer
            className="mx-auto mt-10 sm:mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4"
            staggerDelay={0.1}
          >
            {content.proofScene.metrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <Card className="group text-center border border-border/40 shadow-none h-full bg-card/50 hover:bg-card hover:border-border/60 hover:shadow-sm transition-all duration-300">
                  <CardContent className="pt-8 pb-8 flex flex-col h-full items-center">
                    <p className="text-4xl font-bold text-primary sm:text-5xl">
                      {metric.value}
                    </p>
                    <h3 className="mt-3 text-base font-semibold text-foreground">
                      {metric.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {metric.sublabel}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-foreground/80 italic">
              &ldquo;{content.proofScene.tagline}&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================
       * SECTION 6: Final CTA
       * ============================================ */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{ backgroundImage: crossPattern }}
        />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-hero-text sm:text-4xl">
                {content.finalCta.title}
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-hero-text-secondary">
                {content.finalCta.description}
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-hero-button-bg text-hero-button-text hover:bg-hero-button-bg/90 w-full sm:w-auto"
                >
                  <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    {content.finalCta.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-hero-text-muted">
                {content.finalCta.supportingLine}
              </p>
              <div className="mt-6">
                <p className="text-base font-medium text-hero-text-secondary">
                  Prefer email?
                </p>
                <p className="mt-2 text-sm text-hero-text-muted">
                  Reach out directly at{' '}
                  <Link
                    href="/contact"
                    className="text-hero-text-secondary hover:text-hero-text underline"
                  >
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
