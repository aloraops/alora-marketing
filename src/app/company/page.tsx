'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  Users,
  Lightbulb,
} from 'lucide-react';

// Content imports
import * as content from '@content/company';

// Icon mapping for dynamic rendering
const icons = {
  Briefcase,
  Lightbulb,
  Users,
} as const;

type IconName = keyof typeof icons;

export default function CompanyPage() {
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

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3 justify-center">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {content.mission.label}
                </h2>
              </div>
              <p className="mt-6 text-2xl font-medium text-foreground text-center leading-relaxed">
                {content.mission.statement}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why This Team */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.whyThisTeam.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.whyThisTeam.subtitle}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {content.whyThisTeam.items.map((item) => {
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

      {/* Team Bios */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Meet the founders
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3" staggerDelay={0.15}>
            {content.team.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="border-0 shadow-sm h-full">
                  <CardContent className="pt-6">
                    {/* Avatar placeholder */}
                    <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl font-semibold text-primary">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary">{member.role}</p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="mt-6">
                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2">
                        <GraduationCap className="h-4 w-4" />
                        {member.education}
                      </div>
                      <ul className="space-y-2">
                        {member.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <Award className="h-3 w-3 shrink-0 mt-0.5 text-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Shared Background */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.sharedBackground.label}
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.sharedBackground.title}
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.sharedBackground.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                {content.sharedBackground.badge}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {content.vision.label}
                </h2>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {content.vision.title}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-12 space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content.vision.intro}
                </p>
                <StaggerContainer className="grid gap-4 md:grid-cols-3" staggerDelay={0.1}>
                  {content.vision.pillars.map((item) => (
                    <StaggerItem key={item.label}>
                      <Card className="border-0 shadow-sm h-full">
                        <CardContent className="p-4 text-center">
                          <div className="font-semibold text-foreground">
                            {item.label}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {item.desc}
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p className="text-muted-foreground">
                  {content.vision.expansion}
                </p>
                <p className="text-lg font-medium text-foreground">
                  {content.vision.summary}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.cta.title}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {content.cta.description}
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
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
