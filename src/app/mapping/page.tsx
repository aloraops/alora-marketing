'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { ArrowRight } from 'lucide-react';

// Content imports — shared with the Where to Start page
import * as content from '@content/where-to-start';
import { brand } from '@content/shared';

export default function MappingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.mappingHero.label}
              </h2>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-hero-text sm:text-5xl">
                {content.mappingHero.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-base leading-7 text-hero-text-secondary sm:mt-6 sm:text-lg sm:leading-8">
                {content.mappingHero.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stories, not questionnaires */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden bg-[#011A0C]">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.stories.label}
              </h2>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.stories.title}
              </p>
              <p className="mt-4 text-base text-white/50">{content.stories.subtitle}</p>
            </div>
          </FadeIn>
          {/* Scrolling strip of story archetypes */}
          <div className="mt-10 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
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
      </section>

      {/* What the map captures — ownership routing + parallel data track */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden bg-[#0a1a12]">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.mapCaptures.label}
              </h2>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.mapCaptures.title}
              </p>
            </div>
          </FadeIn>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
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
      </section>

      {/* Who leads + ownership arc */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden bg-[#011A0C]">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#51DABA]">
                {content.leaders.label}
              </h2>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {content.leaders.title}
              </p>
              <p className="mt-4 text-sm sm:text-base text-white/50 leading-relaxed">
                {content.leaders.body}
              </p>
            </div>
          </FadeIn>

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

          {/* The output — conclusion */}
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base font-medium text-[#51DABA]/80">
              {content.mappingProcess.closing}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-hero-text sm:text-4xl">
                {content.cta.title}
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-hero-text-secondary">
                {content.cta.description}
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
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
