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
  Mail,
  Database,
  RefreshCw,
  Clock,
  Cpu,
  Factory,
  HeartPulse,
  Radio,
  Package,
  Users,
  Target,
  TrendingUp,
  AlertTriangle,
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
  Package,
  Users,
  Target,
  TrendingUp,
  AlertTriangle,
} as const;

type IconName = keyof typeof icons;

/* ============================================
 * SHARED UI COMPONENTS
 * ============================================ */

import { POTable, type POItem } from '@/components/solutions/po-table';
import { BuildDashboard, type BuildData } from '@/components/solutions/build-dashboard';
import { VendorScoreCards, type VendorItem } from '@/components/solutions/vendor-score-cards';

/* ============================================
 * FEATURE SECTION COMPONENT
 * ============================================ */

function FeatureSection({
  section,
  index,
}: {
  section: typeof content.featureSections[0];
  index: number;
}) {
  const isDark = index % 2 === 0; // 0 and 2 are dark, 1 is light
  const isReversed = index === 1; // Middle section has reversed layout
  const Icon = icons[section.icon as IconName];

  return (
    <section
      id={section.id}
      className={`py-20 lg:py-28 ${isDark ? 'bg-[#011A0C] text-white' : 'bg-muted/30'}`}
    >
      {isDark && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid gap-12 lg:gap-16 lg:grid-cols-2 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content Side */}
          <div className={isReversed ? 'lg:col-start-2' : ''}>
            <FadeIn>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  isDark ? 'bg-[#51DABA]/15 text-[#51DABA]' : 'bg-primary text-primary-foreground'
                }`}>
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <span className={`text-sm font-semibold uppercase tracking-wide ${
                  isDark ? 'text-[#51DABA]' : 'text-primary'
                }`}>
                  Solution {section.number}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                isDark ? 'text-white' : 'text-foreground'
              }`}>
                {section.title}
              </h2>
              <p className={`mt-2 text-lg font-medium ${
                isDark ? 'text-[#51DABA]/80' : 'text-primary'
              }`}>
                {section.subtitle}
              </p>
              <p className={`mt-4 text-base leading-relaxed ${
                isDark ? 'text-white/60' : 'text-muted-foreground'
              }`}>
                {section.description}
              </p>
            </FadeIn>

            {/* Features */}
            <StaggerContainer className="mt-8 space-y-5" staggerDelay={0.1}>
              {section.features.map((feature) => {
                const FIcon = icons[feature.icon as IconName];
                return (
                  <StaggerItem key={feature.title}>
                    <div className="flex gap-4">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isDark ? 'bg-[#51DABA]/10 text-[#51DABA]' : 'bg-primary/10 text-primary'
                      }`}>
                        {FIcon && <FIcon className="h-4 w-4" />}
                      </div>
                      <div>
                        <h3 className={`text-sm font-semibold ${
                          isDark ? 'text-white' : 'text-foreground'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`mt-0.5 text-sm ${
                          isDark ? 'text-white/50' : 'text-muted-foreground'
                        }`}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Metric Card */}
            <FadeIn delay={0.4}>
              <div className={`mt-8 inline-flex items-center gap-4 rounded-xl px-5 py-3 ${
                isDark
                  ? 'bg-[#51DABA]/10 border border-[#51DABA]/20'
                  : 'bg-primary/5 border border-primary/20'
              }`}>
                <span className={`text-3xl font-bold ${
                  isDark ? 'text-[#51DABA]' : 'text-primary'
                }`}>
                  {section.metric.value}
                </span>
                <div>
                  <div className={`text-sm font-medium ${
                    isDark ? 'text-white' : 'text-foreground'
                  }`}>
                    {section.metric.label}
                  </div>
                  <div className={`text-xs ${
                    isDark ? 'text-white/40' : 'text-muted-foreground'
                  }`}>
                    {section.metric.sublabel}
                  </div>
                </div>
              </div>
              {/* Learn More Link */}
              <Link
                href={`/solutions/${section.id === 'po-risk' ? 'po-risk-tracking' : section.id}`}
                className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-[#51DABA] hover:text-[#51DABA]/80'
                    : 'text-primary hover:text-primary/80'
                }`}
              >
                Explore {section.title}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </FadeIn>
          </div>

          {/* Mock UI Side */}
          <div className={isReversed ? 'lg:col-start-1' : ''}>
            <FadeIn delay={0.2}>
              {section.id === 'po-risk' && (
                <POTable data={section.mockData as POItem[]} />
              )}
              {section.id === 'build-readiness' && (
                <BuildDashboard data={section.mockData as BuildData} />
              )}
              {section.id === 'vendor-scoring' && (
                <VendorScoreCards data={section.mockData as VendorItem[]} />
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
 * PAGE
 * ============================================ */

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
                  const StepIcon = icons[item.icon as IconName];
                  return (
                    <StaggerItem key={item.step}>
                      <div className="relative text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          {StepIcon && <StepIcon className="h-7 w-7" />}
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

      {/* Feature Sections */}
      {content.featureSections.map((section, index) => (
        <FeatureSection key={section.id} section={section} index={index} />
      ))}

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
              const IntIcon = icons[item.icon as IconName];
              return (
                <StaggerItem key={item.title}>
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {IntIcon && <IntIcon className="h-6 w-6" />}
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

      {/* Who We Serve / Industries Section */}
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
              const IndIcon = icons[industry.icon as IconName];
              return (
                <StaggerItem key={industry.name} className="h-full">
                  <div className="group rounded-lg border border-border/40 bg-card/50 p-6 hover:bg-card hover:border-border/60 hover:shadow-sm transition-all duration-300 text-center h-full flex flex-col">
                    {IndIcon && (
                      <IndIcon className="h-5 w-5 text-primary/50 group-hover:text-primary transition-colors duration-300 mb-3 mx-auto" />
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

      {/* Adoption Journey */}
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

          <div className="mx-auto mt-16 max-w-5xl">
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
