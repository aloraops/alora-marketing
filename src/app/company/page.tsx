'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import {
  ArrowRight,
  Linkedin,
} from 'lucide-react';

// Content imports
import * as content from '@content/company';
import { brand } from '@content/shared';

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
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.mission.label}
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-2xl font-medium text-foreground text-center leading-relaxed">
                {content.mission.statement}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Bios */}
      <section className="bg-muted/30 py-20 lg:py-28">
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
                <Card className="border border-border/40 shadow-sm h-full hover:border-border/60 hover:shadow-md transition-all duration-200">
                  <CardContent className="pt-6 text-center flex flex-col h-full">
                    {/* Profile Image */}
                    <div className="mx-auto h-32 w-32 rounded-full overflow-hidden ring-4 ring-border/20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                      {member.bio}
                    </p>
                    <div className="mt-6 flex justify-center">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          {/* Credibility one-liner */}
          <FadeIn delay={0.3}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              {content.credibilityLine}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Advisory Board
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Guided by industry leaders
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2" staggerDelay={0.15}>
            {content.advisoryBoard.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="border border-border/40 shadow-sm h-full hover:border-border/60 hover:shadow-md transition-all duration-200">
                  <CardContent className="pt-6 text-center flex flex-col h-full">
                    {/* Profile Image */}
                    <div className="mx-auto h-32 w-32 rounded-full overflow-hidden ring-4 ring-border/20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                      {member.bio}
                    </p>
                    <div className="mt-6 flex justify-center">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {content.vision.label}
                </h2>
                <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
                <p className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
