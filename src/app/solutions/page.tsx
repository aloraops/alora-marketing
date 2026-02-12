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
  ChevronRight,
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
 * MOCK UI COMPONENTS
 * ============================================ */

function POTable({ data }: { data: any[] }) {
  return (
    <div className="rounded-xl bg-[#1a3a28] border border-[#51DABA]/20 overflow-hidden shadow-2xl shadow-[#51DABA]/5">
      {/* Header */}
      <div className="px-5 py-3 border-b border-[#51DABA]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#51DABA] animate-pulse" />
          <span className="text-sm font-semibold text-white">PO Lines by Risk</span>
        </div>
        <span className="text-xs text-white/40">Updated 2 min ago</span>
      </div>
      {/* Column Headers */}
      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-5 py-2.5 border-b border-white/5 text-[10px] font-medium text-white/30 uppercase tracking-wider">
        <span>PO / Part</span>
        <span className="text-center w-16">Risk</span>
        <span className="text-center w-16">Due</span>
        <span className="text-right w-20">Action</span>
      </div>
      {/* Rows */}
      {data.map((item: any, i: number) => (
        <div
          key={i}
          className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-5 py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
        >
          <div>
            <div className="text-sm font-medium text-white">{item.po}</div>
            <div className="text-xs text-white/40 mt-0.5">{item.part}</div>
            <div className="text-[10px] text-white/25 mt-0.5">{item.vendor}</div>
          </div>
          <div className="flex items-center justify-center w-16">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              item.risk === 'Critical' ? 'bg-red-500/20 text-red-400' :
              item.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
              item.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {item.risk}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-16">
            <span className="text-xs text-white/60">{item.dueDate}</span>
            {item.daysOverdue > 0 && (
              <span className="text-[10px] text-red-400">+{item.daysOverdue}d late</span>
            )}
          </div>
          <div className="flex items-center justify-end w-20">
            <span className={`text-[10px] font-medium px-2 py-1 rounded-md cursor-default ${
              item.action === 'Escalate' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
              item.action === 'Follow up' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
              item.action === 'Re-confirm' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
              'bg-white/5 text-white/40 border border-white/10'
            }`}>
              {item.action}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function BuildDashboard({ data }: { data: any }) {
  return (
    <div className="rounded-xl bg-white border border-border/60 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border/40 flex items-center justify-between bg-muted/30">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-semibold text-foreground">Build Readiness</span>
        </div>
        <span className="text-xs text-muted-foreground">This quarter</span>
      </div>
      {/* Summary Bar */}
      <div className="flex gap-3 px-5 py-4 border-b border-border/30">
        <div className="flex-1 rounded-lg bg-red-50 border border-red-200 p-3 text-center">
          <div className="text-2xl font-bold text-red-600">{data.summary.atRisk}</div>
          <div className="text-[10px] uppercase text-red-500/70 font-medium tracking-wide">At Risk</div>
        </div>
        <div className="flex-1 rounded-lg bg-green-50 border border-green-200 p-3 text-center">
          <div className="text-2xl font-bold text-green-600">{data.summary.onTrack}</div>
          <div className="text-[10px] uppercase text-green-500/70 font-medium tracking-wide">On Track</div>
        </div>
        <div className="flex-1 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-center">
          <div className="text-2xl font-bold text-yellow-600">{data.summary.review}</div>
          <div className="text-[10px] uppercase text-yellow-500/70 font-medium tracking-wide">Review</div>
        </div>
      </div>
      {/* Build Cards */}
      <div className="px-5 py-2">
        {data.builds.map((build: any, i: number) => (
          <div key={i} className="py-3.5 border-b border-border/30 last:border-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-sm font-semibold text-foreground">{build.project}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{build.customer}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">{build.revenue}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  build.status === 'At Risk' ? 'bg-red-100 text-red-700' :
                  build.status === 'Review' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {build.status}
                </span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all ${
                  build.partsReady === build.partsTotal ? 'bg-green-500' :
                  build.partsReady / build.partsTotal > 0.8 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${(build.partsReady / build.partsTotal) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-muted-foreground">
                {build.partsReady}/{build.partsTotal} parts ready
              </span>
              {build.missing && (
                <span className="text-[10px] text-red-600">{build.missing}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VendorScoreCards({ data }: { data: any[] }) {
  return (
    <div className="rounded-xl bg-[#1a3a28] border border-[#51DABA]/20 overflow-hidden shadow-2xl shadow-[#51DABA]/5">
      {/* Header */}
      <div className="px-5 py-3 border-b border-[#51DABA]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#51DABA] animate-pulse" />
          <span className="text-sm font-semibold text-white">Vendor Performance</span>
        </div>
        <span className="text-xs text-white/40">Last 90 days</span>
      </div>
      {/* Vendor Rows */}
      {data.map((item: any, i: number) => (
        <div key={i} className="px-5 py-4 border-b border-white/5 last:border-0">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm font-medium text-white">{item.vendor}</div>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                item.reliability === 'Excellent' ? 'bg-green-500/15 text-green-400' :
                item.reliability === 'Good' ? 'bg-blue-500/15 text-blue-400' :
                item.reliability === 'Needs attention' ? 'bg-yellow-500/15 text-yellow-400' :
                'bg-red-500/15 text-red-400'
              }`}>
                {item.reliability}
              </span>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5">
                <span className={`text-3xl font-bold ${
                  item.score >= 90 ? 'text-green-400' :
                  item.score >= 80 ? 'text-blue-400' :
                  item.score >= 70 ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {item.score}
                </span>
                <TrendingUp className={`h-4 w-4 ${
                  item.trend === 'up' ? 'text-green-400' :
                  item.trend === 'down' ? 'text-red-400 rotate-180' :
                  'text-yellow-400 rotate-90'
                }`} />
              </div>
            </div>
          </div>
          {/* Metrics Bar */}
          <div className="flex gap-4 mt-2">
            <div className="flex-1">
              <div className="text-[10px] text-white/30 uppercase tracking-wide">On-Time</div>
              <div className="text-xs font-medium text-white/70">{item.onTime}</div>
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-white/30 uppercase tracking-wide">Avg Delay</div>
              <div className="text-xs font-medium text-white/70">{item.avgDelay}</div>
            </div>
            {/* Mini score bar */}
            <div className="flex-1">
              <div className="text-[10px] text-white/30 uppercase tracking-wide">Score</div>
              <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.score >= 90 ? 'bg-green-400' :
                    item.score >= 80 ? 'bg-blue-400' :
                    item.score >= 70 ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

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
            </FadeIn>
          </div>

          {/* Mock UI Side */}
          <div className={isReversed ? 'lg:col-start-1' : ''}>
            <FadeIn delay={0.2}>
              {section.id === 'po-risk' && (
                <POTable data={section.mockData as any[]} />
              )}
              {section.id === 'build-readiness' && (
                <BuildDashboard data={section.mockData} />
              )}
              {section.id === 'vendor-scoring' && (
                <VendorScoreCards data={section.mockData as any[]} />
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
