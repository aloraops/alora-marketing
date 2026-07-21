'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import {
  ArrowRight,
  ArrowDown,
  Headphones,
  Network,
  Calculator,
  Target,
  Rocket,
  CheckCircle,
  Sparkles,
  X,
} from 'lucide-react';

// Content imports
import * as content from '@content/how-we-work';
import { brand } from '@content/shared';

// Icon mapping for dynamic rendering
const icons = {
  Headphones,
  Network,
  Calculator,
  Target,
  Rocket,
} as const;

type IconName = keyof typeof icons;

/**
 * Interactive pain finder: visitors select the symptoms they recognize and a
 * live panel shows which workstream AI typically starts with in their case.
 */
function PainFinder() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const { primary, others } = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of content.painFinder.symptoms) {
      if (selected.has(s.id)) {
        counts.set(s.workstream, (counts.get(s.workstream) || 0) + 1);
      }
    }
    const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    return {
      primary: ranked.length ? ranked[0][0] : null,
      others: ranked.slice(1).map(([k]) => k),
    };
  }, [selected]);

  const primaryData = primary ? content.painFinder.workstreams[primary] : null;

  return (
    <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
      {/* Symptom chips */}
      <StaggerContainer className="grid gap-3 sm:grid-cols-2" staggerDelay={0.06}>
        {content.painFinder.symptoms.map((symptom) => {
          const isOn = selected.has(symptom.id);
          return (
            <StaggerItem key={symptom.id}>
              <button onClick={() => toggle(symptom.id)} className="w-full text-left h-full">
                <div
                  className={`flex h-full items-center gap-3 rounded-xl border p-4 transition-all duration-300 ${
                    isOn
                      ? 'border-[#51DABA]/60 bg-[#51DABA]/10 shadow-lg shadow-[#51DABA]/5'
                      : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOn ? 'border-[#51DABA] bg-[#51DABA]' : 'border-white/25'
                    }`}
                  >
                    {isOn && <CheckCircle className="h-3.5 w-3.5 text-[#011A0C]" />}
                  </div>
                  <span className={`text-sm leading-snug transition-colors ${isOn ? 'text-white' : 'text-white/60'}`}>
                    {symptom.text}
                  </span>
                </div>
              </button>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Live result panel */}
      <div className="lg:sticky lg:top-24">
        <div className="rounded-2xl border-2 border-[#51DABA]/30 bg-gradient-to-br from-[#264C36] to-[#1a3a28] p-6 shadow-2xl shadow-[#51DABA]/10">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#51DABA]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#51DABA]">
              {content.painFinder.resultHeader}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!primaryData ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-sm text-white/40 leading-relaxed"
              >
                {content.painFinder.emptyState}
              </motion.p>
            ) : (
              <motion.div
                key={primary}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="mt-4 text-lg font-bold text-white">{primaryData.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{primaryData.why}</p>
                <div className="mt-4 rounded-lg bg-white/5 p-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#51DABA]/70">
                    What a first step looks like
                  </span>
                  <p className="mt-1.5 text-xs text-white/55 leading-relaxed">{primaryData.phase1}</p>
                </div>
                {others.length > 0 && (
                  <p className="mt-3 text-xs text-white/40">
                    {content.painFinder.alsoRelevant}:{' '}
                    {others.map((k) => content.painFinder.workstreams[k].title).join(' · ')}
                  </p>
                )}
                <p className="mt-4 text-xs font-medium text-[#51DABA] border-l-2 border-[#51DABA]/30 pl-3">
                  {content.painFinder.aiNote}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-[11px] text-white/35">{content.painFinder.disclaimer}</p>
            <Button
              asChild
              size="sm"
              className="mt-3 w-full bg-[#51DABA] text-[#011A0C] hover:bg-[#51DABA]/90 font-semibold"
            >
              <Link href={brand.calendlyUrl} target="_blank" rel="noopener noreferrer">
                {content.painFinder.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive concentric-circles visual: tactical execution at the core,
 * strategic decision-making at the outer ring. Click a ring (or its card)
 * to highlight the layer; a ripple pulses outward from the core to show
 * how tactical value compounds into strategic value.
 */
function TacticalToStrategyCircle({
  activeRing,
  onSelect,
}: {
  activeRing: string;
  onSelect: (n: string) => void;
}) {
  // Drawn outer-first so inner rings sit on top and clicks land on the right layer
  const rings = [
    { number: '4', r: 300, fill: 'rgba(81,218,186,0.05)', label: 'Strategic', sub: 'decision-making', labelY: -252, bright: false },
    { number: '3', r: 224, fill: 'rgba(81,218,186,0.12)', label: 'Master Data', sub: 'heals', labelY: -178, bright: false },
    { number: '2', r: 148, fill: '#3d7a57', label: 'Exception', sub: 'management', labelY: -102, bright: true },
    { number: '1', r: 76, fill: '#51DABA', label: 'Tactical', sub: 'execution', labelY: 4, bright: false },
  ];

  return (
    <svg
      viewBox="-330 -330 660 660"
      className="w-full max-w-lg mx-auto select-none"
      role="img"
      aria-label="Concentric circles: tactical execution at the core, then exception management, master data, and strategic decision-making at the outer ring"
    >
      {/* Ripple pulsing from the core outward */}
      <motion.circle
        cx="0"
        cy="0"
        fill="none"
        stroke="#51DABA"
        strokeWidth="1.5"
        initial={{ r: 76, opacity: 0.6 }}
        animate={{ r: 310, opacity: 0 }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
      />
      {rings.map((ring) => {
        const isActive = activeRing === ring.number;
        return (
          <motion.circle
            key={ring.number}
            cx="0"
            cy="0"
            r={ring.r}
            fill={ring.fill}
            stroke={isActive ? '#51DABA' : 'rgba(81,218,186,0.25)'}
            strokeWidth={isActive ? 3 : 1.5}
            className="cursor-pointer"
            style={{ filter: isActive ? 'drop-shadow(0 0 12px rgba(81,218,186,0.45))' : 'none' }}
            onClick={() => onSelect(ring.number)}
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * (4 - Number(ring.number)) }}
          />
        );
      })}
      {rings.map((ring) => {
        const isActive = activeRing === ring.number;
        const isCore = ring.number === '1';
        const onSolid = isCore || ring.number === '2';
        const titleFill = isCore ? '#011A0C' : onSolid ? '#ffffff' : isActive ? '#51DABA' : 'rgba(255,255,255,0.85)';
        const subFill = isCore ? 'rgba(1,26,12,0.7)' : onSolid ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.45)';
        return (
          <g key={`${ring.number}-text`} className="cursor-pointer pointer-events-none">
            <text x="0" y={ring.labelY - 4} textAnchor="middle" fontSize="22" fontWeight="700" fill={titleFill}>
              {ring.label}
            </text>
            <text x="0" y={ring.labelY + 18} textAnchor="middle" fontSize="14" fontStyle="italic" fill={subFill}>
              {ring.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function HowWeWorkPage() {
  const [activeStep, setActiveStep] = useState<string | null>('1');
  const [activeRing, setActiveRing] = useState<string>('1');
  const stepRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleStepClick = useCallback(
    (stepNumber: string) => {
      const isClosing = activeStep === stepNumber;
      setActiveStep(isClosing ? null : stepNumber);
      if (!isClosing) {
        setTimeout(() => {
          stepRefs.current[stepNumber]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    },
    [activeStep]
  );

  return (
    <>
      {/* Hero Section — two doors */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h1 className="text-3xl font-semibold tracking-tight text-hero-text sm:text-5xl">
                {content.hero.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-base leading-7 text-hero-text-secondary sm:mt-6 sm:text-lg sm:leading-8">
                {content.hero.description}
              </p>
            </FadeIn>
          </div>
          <StaggerContainer className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2" staggerDelay={0.15}>
            {content.hero.doors.map((door) => (
              <StaggerItem key={door.title}>
                <a href={door.target} className="block h-full group">
                  <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#51DABA]/50 hover:bg-white/[0.1]">
                    <h2 className="text-lg font-semibold text-hero-text">{door.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-hero-text-secondary leading-relaxed">{door.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#51DABA]">
                      <span>Show me</span>
                      <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Manifesto — the point of view */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl leading-tight">
                {content.manifesto.statement}{' '}
                <span className="text-primary">{content.manifesto.statementAccent}</span>
              </p>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {content.manifesto.body}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3" staggerDelay={0.12}>
            {content.manifesto.principles.map((principle, i) => (
              <StaggerItem key={principle.title}>
                <div className="h-full rounded-xl border border-border/40 bg-card/50 p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-300">
                  <span className="text-xs font-mono font-bold text-primary/60">0{i + 1}</span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{principle.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pain Finder — interactive diagnostic */}
      <section id="pain-finder" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden bg-[#011A0C] scroll-mt-16">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40L40 0M-10 10L10-10M30 50L50 30' stroke='%2351DABA' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.painFinder.label}
              </h2>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.painFinder.title}
              </p>
              <p className="mt-4 text-base text-white/50">{content.painFinder.subtitle}</p>
            </div>
          </FadeIn>
          <PainFinder />
        </div>
      </section>

      {/* Mapping Process — interactive timeline */}
      <section id="mapping" className="relative py-14 sm:py-20 lg:py-28 overflow-hidden bg-[#0a1a12] scroll-mt-16">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.mappingProcess.label}
              </h2>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.mappingProcess.title}
              </p>
              <p className="mt-4 text-base text-white/50">{content.mappingProcess.subtitle}</p>
            </div>
          </FadeIn>

          {/* DESKTOP: horizontal timeline with animated connector */}
          <div className="hidden lg:block mt-16">
            <div className="relative mx-auto max-w-6xl">
              {/* Animated connector line behind the cards */}
              <svg
                className="absolute left-0 right-0 top-[52px] w-full pointer-events-none"
                height="4"
                viewBox="0 0 1000 4"
                preserveAspectRatio="none"
              >
                <path d="M 0 2 L 1000 2" stroke="#51DABA" strokeWidth="1.5" fill="none" opacity="0.25" strokeDasharray="6 6">
                  <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.5s" repeatCount="indefinite" />
                </path>
                <circle r="3" cy="2" fill="#51DABA">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M 0 2 L 1000 2" />
                </circle>
              </svg>

              <StaggerContainer className="relative grid grid-cols-5 gap-3" staggerDelay={0.1}>
                {content.mappingProcess.steps.map((step) => {
                  const Icon = icons[step.icon as IconName];
                  const isActive = activeStep === step.number;
                  return (
                    <StaggerItem key={step.number}>
                      <button onClick={() => setActiveStep(isActive ? null : step.number)} className="w-full text-left">
                        <div
                          className={`group relative rounded-xl border p-4 transition-all duration-300 ${
                            isActive
                              ? 'border-[#51DABA]/50 bg-[#51DABA]/10 shadow-lg shadow-[#51DABA]/5'
                              : 'border-white/10 bg-[#0d2b1c] hover:bg-[#10321f] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                                isActive ? 'bg-[#51DABA] text-[#011A0C]' : 'bg-white/10 text-white/60 group-hover:text-white/80'
                              }`}
                            >
                              {Icon && <Icon className="h-4 w-4" />}
                            </div>
                            <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#51DABA]' : 'text-white/20'}`}>
                              0{step.number}
                            </span>
                          </div>
                          <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white/90'}`}>
                            {step.title}
                          </h3>
                          <p className={`mt-1 text-xs leading-relaxed transition-colors ${isActive ? 'text-white/60' : 'text-white/30 group-hover:text-white/40'}`}>
                            {step.subtitle}
                          </p>
                        </div>
                      </button>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              {/* Desktop expanded detail */}
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
                    {content.mappingProcess.steps
                      .filter((s) => s.number === activeStep)
                      .map((step) => {
                        const Icon = icons[step.icon as IconName];
                        return (
                          <div key={step.number} className="relative rounded-xl border border-[#51DABA]/20 bg-[#51DABA]/[0.04] p-6">
                            <button
                              onClick={() => setActiveStep(null)}
                              className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full text-white/30 hover:text-white/60 hover:bg-white/10 transition-colors"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                            <div className="flex items-start gap-4">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#51DABA] text-[#011A0C]">
                                {Icon && <Icon className="h-5 w-5" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-base font-semibold text-white">{step.title}</h4>
                                <p className="mt-2 text-sm text-white/50 leading-relaxed">{step.description}</p>
                                <ul className="mt-3 grid gap-1.5 grid-cols-2">
                                  {step.details.map((item, j) => (
                                    <li key={j} className="flex items-center gap-2 text-xs text-white/40">
                                      <CheckCircle className="h-3 w-3 text-[#51DABA] shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                                <p className="mt-3 text-xs font-medium text-[#51DABA] border-l-2 border-[#51DABA]/30 pl-3">
                                  {step.emphasis}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE: vertical steps with inline expandable detail */}
          <div className="lg:hidden mt-10">
            <div className="mx-auto max-w-xl flex flex-col gap-3">
              {content.mappingProcess.steps.map((step) => {
                const Icon = icons[step.icon as IconName];
                const isActive = activeStep === step.number;
                return (
                  <div key={step.number} ref={(el) => { stepRefs.current[step.number] = el; }} className="scroll-mt-4">
                    <button onClick={() => handleStepClick(step.number)} className="w-full text-left">
                      <div
                        className={`group relative rounded-xl border p-4 transition-all duration-300 ${
                          isActive
                            ? 'border-[#51DABA]/50 bg-[#51DABA]/10 shadow-lg shadow-[#51DABA]/5'
                            : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                              isActive ? 'bg-[#51DABA] text-[#011A0C]' : 'bg-white/10 text-white/60'
                            }`}
                          >
                            {Icon && <Icon className="h-4 w-4" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#51DABA]' : 'text-white/20'}`}>0{step.number}</span>
                              <h3 className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-white/70'}`}>{step.title}</h3>
                            </div>
                            <p className={`text-xs ${isActive ? 'text-white/60' : 'text-white/30'}`}>{step.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`detail-${step.number}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="relative rounded-xl border border-[#51DABA]/20 bg-[#51DABA]/[0.04] p-5 mt-3">
                            <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                            <ul className="mt-3 grid gap-1.5">
                              {step.details.map((item, j) => (
                                <li key={j} className="flex items-center gap-2 text-xs text-white/40">
                                  <CheckCircle className="h-3 w-3 text-[#51DABA] shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <p className="mt-3 text-xs font-medium text-[#51DABA] border-l-2 border-[#51DABA]/30 pl-3">{step.emphasis}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stories, not questionnaires */}
          <div className="mx-auto mt-16 max-w-5xl border-t border-white/10 pt-14">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                  {content.stories.label}
                </h3>
                <p className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-3xl">
                  {content.stories.title}
                </p>
                <p className="mt-4 text-sm sm:text-base text-white/50 leading-relaxed">
                  {content.stories.subtitle}
                </p>
              </div>
            </FadeIn>
            <StaggerContainer className="mx-auto mt-8 grid gap-4 lg:grid-cols-3" staggerDelay={0.12}>
              {content.stories.items.map((story) => (
                <StaggerItem key={story.name}>
                  <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#51DABA]/30 transition-all duration-300">
                    <h4 className="text-base font-semibold text-white">{story.name}</h4>
                    <p className="mt-2 flex-1 text-sm text-white/50 leading-relaxed">{story.what}</p>
                    <p className="mt-4 border-t border-white/10 pt-3 text-xs font-medium text-[#51DABA]/80">
                      {story.cost}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            {/* Scrolling strip of additional stories */}
            <FadeIn delay={0.2}>
              <p className="mt-10 text-center text-xs font-semibold uppercase tracking-widest text-white/30">
                {content.stories.moreIntro}
              </p>
            </FadeIn>
            <div className="mt-5 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex animate-marquee gap-4 w-max">
                {[...content.stories.more, ...content.stories.more].map((story, i) => (
                  <div
                    key={`${story.name}-${i}`}
                    className="w-[280px] shrink-0 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-[#51DABA]/30 transition-colors"
                  >
                    <h4 className="text-sm font-semibold text-white">{story.name}</h4>
                    <p className="mt-1.5 text-xs text-white/45 leading-relaxed">{story.hook}</p>
                  </div>
                ))}
              </div>
            </div>
            <FadeIn delay={0.3}>
              <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-white/40 italic">
                {content.stories.moreNote} {content.stories.closing}
              </p>
            </FadeIn>
          </div>

          {/* What the map captures — ownership routing + parallel data track */}
          <div className="mx-auto mt-16 max-w-5xl border-t border-white/10 pt-14">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                  {content.mapCaptures.label}
                </h3>
                <p className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-3xl">
                  {content.mapCaptures.title}
                </p>
              </div>
            </FadeIn>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Ownership routing */}
              <FadeIn delay={0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h4 className="text-lg font-semibold text-white">{content.mapCaptures.ownership.title}</h4>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">
                    {content.mapCaptures.ownership.desc}
                  </p>
                  {/* Trigger pill */}
                  <div className="mt-5 rounded-lg border border-[#51DABA]/30 bg-[#51DABA]/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#51DABA] animate-pulse" />
                      <span className="text-sm font-semibold text-[#51DABA]">
                        {content.mapCaptures.ownership.trigger}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-white/40">{content.mapCaptures.ownership.triggerExamples}</p>
                  </div>
                  {/* Connector */}
                  <div className="ml-5 h-4 w-px bg-gradient-to-b from-[#51DABA]/60 to-[#51DABA]/10" />
                  {/* Role rows */}
                  <div className="space-y-2">
                    {content.mapCaptures.ownership.roles.map((r) => (
                      <div key={r.role} className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2.5">
                        <span className="w-28 shrink-0 text-xs font-bold uppercase tracking-wide text-[#51DABA]">
                          {r.role}
                        </span>
                        <span className="text-xs text-white/55">{r.q}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-medium text-[#51DABA]/80 border-l-2 border-[#51DABA]/30 pl-3">
                    {content.mapCaptures.ownership.note}
                  </p>
                </div>
              </FadeIn>

              {/* Parallel data track */}
              <FadeIn delay={0.2}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h4 className="text-lg font-semibold text-white">{content.mapCaptures.dataParallel.title}</h4>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">
                    {content.mapCaptures.dataParallel.desc}
                  </p>
                  <div className="mt-5 space-y-4">
                    {content.mapCaptures.dataParallel.lanes.map((lane, i) => (
                      <div key={lane.name} className="rounded-lg bg-white/5 p-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold uppercase tracking-widest ${i === 0 ? 'text-[#51DABA]' : 'text-[#7AB292]'}`}>
                            {lane.name}
                          </span>
                        </div>
                        {/* Animated lane line */}
                        <svg className="mt-2 w-full" height="8" viewBox="0 0 400 8" preserveAspectRatio="none">
                          <path
                            d="M 0 4 L 400 4"
                            stroke={i === 0 ? '#51DABA' : '#4D996D'}
                            strokeWidth="1.5"
                            opacity="0.3"
                            strokeDasharray="5 5"
                          >
                            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1.5s" repeatCount="indefinite" />
                          </path>
                          <circle r="3" cy="4" fill={i === 0 ? '#51DABA' : '#4D996D'}>
                            <animateMotion dur={i === 0 ? '4s' : '5.5s'} repeatCount="indefinite" path="M 0 4 L 400 4" />
                          </circle>
                        </svg>
                        <p className="mt-2 text-xs text-white/45 leading-relaxed">{lane.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-medium text-[#51DABA]/80 border-l-2 border-[#51DABA]/30 pl-3">
                    {content.mapCaptures.dataParallel.note}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* The output of the mapping — section conclusion */}
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base font-medium text-[#51DABA]/80">
              {content.mappingProcess.closing}
            </p>
          </FadeIn>

          {/* Who leads the mapping */}
          <div className="mx-auto mt-16 max-w-5xl border-t border-white/10 pt-14">
            <FadeIn>
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                  {content.leaders.label}
                </h3>
                <p className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-3xl">
                  {content.leaders.title}
                </p>
                <p className="mt-4 text-sm sm:text-base text-white/50 leading-relaxed">
                  {content.leaders.body}
                </p>
              </div>
            </FadeIn>
            <StaggerContainer className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2" staggerDelay={0.12}>
              {content.leaders.credentials.map((cred) => (
                <StaggerItem key={cred.title}>
                  <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <h4 className="text-sm font-semibold text-white">{cred.title}</h4>
                    <p className="mt-2 text-xs text-white/45 leading-relaxed">{cred.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Ownership arc */}
          <div className="mx-auto mt-14 max-w-4xl">
            <FadeIn>
              <p className="text-center text-lg font-semibold text-white">{content.ownership.title}</p>
            </FadeIn>
            <StaggerContainer className="mt-6 grid gap-3 sm:grid-cols-3" staggerDelay={0.12}>
              {content.ownership.phases.map((phase, i) => (
                <StaggerItem key={phase.stage}>
                  <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      {phase.stage}
                    </span>
                    <p
                      className={`mt-1 text-base font-bold ${
                        i === content.ownership.phases.length - 1 ? 'text-[#51DABA]' : 'text-white/80'
                      }`}
                    >
                      {phase.who}
                    </p>
                    <p className="mt-2 text-xs text-white/40 leading-relaxed">{phase.desc}</p>
                    {i < content.ownership.phases.length - 1 && (
                      <ArrowRight className="absolute -right-2.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[#51DABA]/40 sm:block" />
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Tactical → Strategy Circle — interactive */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden bg-[#011A0C]">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.circle.label}
              </h2>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.circle.title}
              </p>
              <p className="mt-4 text-base text-white/50">{content.circle.subtitle}</p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-12 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            {/* Ring selector cards */}
            <div className="order-2 lg:order-1">
              <div className="flex flex-col gap-3">
                {content.circle.rings.map((ring) => {
                  const isActive = activeRing === ring.number;
                  return (
                    <button key={ring.number} onClick={() => setActiveRing(ring.number)} className="w-full text-left">
                      <div
                        className={`group relative rounded-xl border p-4 transition-all duration-300 ${
                          isActive
                            ? 'border-[#51DABA]/50 bg-[#51DABA]/10 shadow-lg shadow-[#51DABA]/5'
                            : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-mono font-bold transition-all duration-300 ${
                              isActive ? 'bg-[#51DABA] text-[#011A0C]' : 'bg-white/10 text-white/50'
                            }`}
                          >
                            {ring.number}
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white/90'}`}>
                              {ring.title}
                            </h3>
                            <p className={`text-xs transition-colors ${isActive ? 'text-white/60' : 'text-white/30'}`}>{ring.short}</p>
                          </div>
                        </div>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="mt-3 text-sm text-white/50 leading-relaxed overflow-hidden"
                            >
                              {ring.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* The circle itself */}
            <div className="order-1 lg:order-2">
              <TacticalToStrategyCircle activeRing={activeRing} onSelect={setActiveRing} />
              <p className="mt-2 text-center text-xs text-white/30">Tap the rings to explore each layer</p>
            </div>
          </div>

          <FadeIn delay={0.3}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base font-medium text-[#51DABA]/80">
              {content.circle.closing}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
                <Button
                  asChild
                  size="lg"
                  className="bg-hero-button-bg text-hero-button-text hover:bg-hero-button-bg/90 w-full sm:w-auto"
                >
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
