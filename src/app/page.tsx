'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import {
  ArrowRight,
  Radio,
  Layers,
  Scale,
  Zap,
  Clock,
  CheckCircle,
  Unlock,
  Shield,
  X,
} from 'lucide-react';

// Content imports
import * as content from '@content/home';
import { brand } from '@content/shared';

// Icon mapping for dynamic rendering
const icons = {
  Shield,
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
  const [activeStep, setActiveStep] = useState<string | null>(null);

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
                {content.hero.headlineRow1}
                <br />
                {content.hero.headlineRow2Start}{' '}
                <span className="text-hero-accent">{content.hero.headlineAccent1}</span>
                {' '}{content.hero.headlineMiddle}{' '}
                <span className="text-hero-accent">{content.hero.headlineAccent2}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-8 text-hero-text-secondary sm:text-xl">
                {content.hero.subheadingLine1}
                <br />
                {content.hero.subheadingLine2}
                <br />
                {content.hero.subheadingLine3}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
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

      {/* Execution Engine — Data Flow Visual */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#011A0C]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40L40 0M-10 10L10-10M30 50L50 30' stroke='%2351DABA' stroke-width='0.5'/%3E%3C/svg%3E")` }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.executionLoop.label}
              </h2>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.executionLoop.title}
              </p>
            </div>
          </FadeIn>

          {/* ===== DESKTOP: Data Flow Diagram ===== */}
          <div className="hidden lg:block mt-16">
            <div className="relative mx-auto max-w-5xl">
              {/* SVG flow lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 420" preserveAspectRatio="xMidYMid meet">
                <path d="M 160 100 Q 280 100 350 210" stroke="#51DABA" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M 160 210 L 350 210" stroke="#51DABA" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M 160 320 Q 280 320 350 210" stroke="#51DABA" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M 650 210 L 840 100" stroke="#4D996D" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M 650 210 L 840 210" stroke="#4D996D" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M 650 210 L 840 320" stroke="#4D996D" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>
                {/* Animated data dots */}
                <circle r="3" fill="#51DABA"><animateMotion dur="3s" repeatCount="indefinite" path="M 160 100 Q 280 100 350 210" /></circle>
                <circle r="3" fill="#51DABA"><animateMotion dur="2.5s" repeatCount="indefinite" path="M 160 210 L 350 210" /></circle>
                <circle r="3" fill="#51DABA"><animateMotion dur="3.5s" repeatCount="indefinite" path="M 160 320 Q 280 320 350 210" /></circle>
                <circle r="3" fill="#4D996D"><animateMotion dur="2.5s" repeatCount="indefinite" path="M 650 210 L 840 100" /></circle>
                <circle r="3" fill="#4D996D"><animateMotion dur="3s" repeatCount="indefinite" path="M 650 210 L 840 210" /></circle>
                <circle r="3" fill="#4D996D"><animateMotion dur="3.2s" repeatCount="indefinite" path="M 650 210 L 840 320" /></circle>
              </svg>

              <div className="relative grid grid-cols-[180px_1fr_300px_1fr_180px] items-center gap-0" style={{ minHeight: 420 }}>
                {/* LEFT: Data Sources */}
                <div className="flex flex-col gap-6">
                  {[
                    { label: 'ERP Data', sub: 'POs, Items, Vendors' },
                    { label: 'Supplier Email', sub: 'Updates, Confirmations' },
                    { label: 'Market Signals', sub: 'EOL, Shortages, Pricing' },
                  ].map((src) => (
                    <FadeIn key={src.label} direction="right">
                      <div className="rounded-lg border border-[#51DABA]/20 bg-[#51DABA]/5 px-4 py-3 text-center">
                        <div className="text-sm font-semibold text-[#51DABA]">{src.label}</div>
                        <div className="text-[10px] text-[#51DABA]/60 mt-0.5">{src.sub}</div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Arrow label: IN */}
                <div className="flex items-center justify-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#51DABA]/40">ingest</div>
                </div>

                {/* CENTER: AI Risk Engine */}
                <FadeIn>
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-3xl bg-[#51DABA]/5 blur-xl" />
                    <div className="relative rounded-2xl border-2 border-[#51DABA]/30 bg-gradient-to-br from-[#264C36] to-[#1a3a28] p-6 shadow-2xl shadow-[#51DABA]/10">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#51DABA]/10 px-3 py-1 mb-4">
                          <div className="h-2 w-2 rounded-full bg-[#51DABA] animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#51DABA]">Live</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">AI Risk Engine</h3>
                        <p className="mt-1 text-xs text-[#51DABA]/70">Part-Number level intelligence</p>
                      </div>
                      <div className="mt-5 space-y-2">
                        {[
                          { label: 'P/N Mapping', desc: 'Every change → exact item' },
                          { label: 'Risk Scoring', desc: 'Impact on builds & revenue' },
                          { label: 'Action Routing', desc: 'Prioritized next moves' },
                        ].map((layer) => (
                          <div key={layer.label} className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#51DABA]" />
                            <div>
                              <span className="text-xs font-semibold text-white/90">{layer.label}</span>
                              <span className="text-[10px] text-white/40 ml-2">{layer.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Arrow label: OUT */}
                <div className="flex items-center justify-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#4D996D]/40">connect</div>
                </div>

                {/* RIGHT: Business Impact */}
                <div className="flex flex-col gap-6">
                  {[
                    { label: 'BOMs', sub: 'Which assemblies hit' },
                    { label: 'Builds', sub: 'Which orders at risk' },
                    { label: 'Customers', sub: 'Revenue exposure' },
                  ].map((out) => (
                    <FadeIn key={out.label} direction="left">
                      <div className="rounded-lg border border-[#4D996D]/30 bg-[#4D996D]/10 px-4 py-3 text-center">
                        <div className="text-sm font-semibold text-[#7AB292]">{out.label}</div>
                        <div className="text-[10px] text-[#7AB292]/60 mt-0.5">{out.sub}</div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== MOBILE: Simplified vertical flow ===== */}
          <div className="lg:hidden mt-12">
            <FadeIn>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {['ERP Data', 'Supplier Email', 'Market Signals'].map((src) => (
                  <div key={src} className="rounded-lg border border-[#51DABA]/20 bg-[#51DABA]/5 px-2 py-2 text-center">
                    <div className="text-xs font-semibold text-[#51DABA]">{src}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <div className="flex justify-center mb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="h-8 w-px bg-gradient-to-b from-[#51DABA]/40 to-[#51DABA]/10" />
                <ArrowRight className="h-3 w-3 text-[#51DABA]/40 rotate-90" />
              </div>
            </div>
            <FadeIn>
              <div className="rounded-2xl border-2 border-[#51DABA]/30 bg-gradient-to-br from-[#264C36] to-[#1a3a28] p-5 mb-4">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#51DABA]/10 px-3 py-1 mb-3">
                    <div className="h-2 w-2 rounded-full bg-[#51DABA] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#51DABA]">Live</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">AI Risk Engine</h3>
                  <p className="text-xs text-[#51DABA]/70 mt-1">P/N level intelligence</p>
                </div>
                <div className="mt-4 space-y-1.5">
                  {['P/N Mapping', 'Risk Scoring', 'Action Routing'].map((l) => (
                    <div key={l} className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#51DABA]" />
                      <span className="text-xs font-medium text-white/80">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <div className="flex justify-center mb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="h-8 w-px bg-gradient-to-b from-[#4D996D]/40 to-[#4D996D]/10" />
                <ArrowRight className="h-3 w-3 text-[#4D996D]/40 rotate-90" />
              </div>
            </div>
            <FadeIn>
              <div className="grid grid-cols-3 gap-2 mb-8">
                {['BOMs', 'Builds', 'Customers'].map((out) => (
                  <div key={out} className="rounded-lg border border-[#4D996D]/30 bg-[#4D996D]/10 px-2 py-2 text-center">
                    <div className="text-xs font-semibold text-[#7AB292]">{out}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Execution Steps — what the engine drives */}
          <div className="mt-12 lg:mt-16">
            <FadeIn>
              <p className="text-center text-sm font-semibold uppercase tracking-widest text-white/30 mb-8">
                What the engine drives
              </p>
            </FadeIn>
            <StaggerContainer className="mx-auto grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4" staggerDelay={0.1}>
              {content.executionLoop.steps.map((step) => {
                const Icon = icons[step.icon as IconName];
                const isActive = activeStep === step.number;
                return (
                  <StaggerItem key={step.number}>
                    <button onClick={() => setActiveStep(isActive ? null : step.number)} className="w-full text-left">
                      <div className={`group relative rounded-xl border p-4 transition-all duration-300 ${
                        isActive
                          ? 'border-[#51DABA]/50 bg-[#51DABA]/10 shadow-lg shadow-[#51DABA]/5'
                          : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
                      }`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                            isActive ? 'bg-[#51DABA] text-[#011A0C]' : 'bg-white/10 text-white/60 group-hover:text-white/80'
                          }`}>
                            {Icon && <Icon className="h-4 w-4" />}
                          </div>
                          <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#51DABA]' : 'text-white/20'}`}>0{step.number}</span>
                        </div>
                        <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white/90'}`}>{step.title}</h3>
                        <p className={`mt-1 text-xs leading-relaxed transition-colors ${isActive ? 'text-white/60' : 'text-white/30 group-hover:text-white/40'}`}>{step.subtitle}</p>
                      </div>
                    </button>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Expanded detail */}
            <AnimatePresence mode="wait">
              {activeStep && (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="mx-auto mt-4 max-w-3xl"
                >
                  {content.executionLoop.steps.filter((s) => s.number === activeStep).map((step) => {
                    const Icon = icons[step.icon as IconName];
                    return (
                      <div key={step.number} className="relative rounded-xl border border-[#51DABA]/20 bg-[#51DABA]/[0.04] p-6">
                        <button onClick={() => setActiveStep(null)} className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full text-white/30 hover:text-white/60 hover:bg-white/10 transition-colors">
                          <X className="h-3.5 w-3.5" />
                        </button>
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#51DABA] text-[#011A0C]">
                            {Icon && <Icon className="h-5 w-5" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base font-semibold text-white">{step.title}</h4>
                            <p className="mt-2 text-sm text-white/50 leading-relaxed">{step.description}</p>
                            {(step.details || step.options) && (
                              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                                {(step.details || step.options)?.map((item, j) => (
                                  <li key={j} className="flex items-center gap-2 text-xs text-white/40">
                                    <CheckCircle className="h-3 w-3 text-[#51DABA] shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {step.emphasis && (
                              <p className="mt-3 text-xs font-medium text-[#51DABA] border-l-2 border-[#51DABA]/30 pl-3">{step.emphasis}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <FadeIn delay={0.5}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/30">
              {content.executionLoop.closingLine}
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="bg-[#51DABA] text-[#011A0C] hover:bg-[#51DABA]/90 font-semibold">
                <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  {content.hero.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact / KPIs Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.metrics.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.metrics.title}
              </p>
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

      {/* Partners Section — Scrolling Marquee */}
      <section className="py-16 lg:py-20 bg-[#0a1a12] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#51DABA]">
                {content.partners.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-[#51DABA]/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.partners.title}
              </p>
            </div>
          </FadeIn>
        </div>
        {/* Marquee container */}
        <div className="relative mt-12">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0a1a12] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0a1a12] to-transparent" />
          {/* Scrolling track */}
          <div className="flex animate-marquee gap-12 items-center">
            {[...Array(4)].flatMap((_, setIndex) =>
              content.partners.logos.map((partner) => (
                <div
                  key={`${setIndex}-${partner.name}`}
                  className="flex flex-col items-center gap-3 shrink-0"
                >
                  <div className={`flex h-20 w-[200px] items-center justify-center rounded-xl px-6 shadow-lg shadow-black/20 border ${
                    partner.lightLogo
                      ? 'bg-[#1a1a2e] border-white/10'
                      : 'bg-white/95 border-white/10'
                  }`}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={56}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-white/50 tracking-wide uppercase">
                    {partner.name}
                  </span>
                </div>
              ))
            )}
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
