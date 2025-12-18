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

const team = [
  {
    name: 'Sharon Ilan',
    role: 'Co-Founder, CPO/COO',
    bio: 'Sharon brings deep supply chain expertise from building operations departments at surgical robotics companies and managing $200M in supplier deals at Better Place. She knows the customer pain firsthand.',
    highlights: [
      '$200M in supplier deals managed',
      'First employee at Better Place',
      'Built supply chain operations at Human Xtensions',
      'Unit 76 Intelligence, Operations Officer',
    ],
    education: 'Industrial Engineering and Management',
  },
  {
    name: 'Yuval Blyakhman',
    role: 'Co-Founder, CEO',
    bio: 'Yuval rose from first employee to VP R&D at Human Xtensions, a surgical robotics company. He brings product vision and engineering leadership experience from complex, regulated industries.',
    highlights: [
      'First employee → VP R&D at Human Xtensions',
      'Multiple patents in medical instruments',
      'Surgical robotics product development',
      'Unit 81 Intelligence, Mechanical Engineer',
    ],
    education: 'Mechanical + Biomedical Engineering',
  },
  {
    name: 'Idan Ben-Ami',
    role: 'Co-Founder, CTO',
    bio: "Idan completed his CS degree at 14.5 and brings PhD-level AI/ML expertise in graph neural networks — directly applicable to supply chain network modeling. He's built high-performance trading systems and cloud infrastructure at scale.",
    highlights: [
      'CS B.Sc. completed at age 14.5',
      "Master's in AI/ML (Graph Neural Networks)",
      'Built sub-100ns HFT systems',
      'Talpiot Program (top 50 of 10,000)',
    ],
    education: 'Computer Science, AI/ML Specialization',
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                The team behind Alora
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Alora was founded by people who have lived both the operational and
                technical sides of the problem. We&apos;re building the tool we wished
                we had.
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
                  Our Mission
                </h2>
              </div>
              <p className="mt-6 text-2xl font-medium text-foreground text-center leading-relaxed">
                Connect BOM and part-level reality to business income, so every
                decision — from a buyer&apos;s next action to a board-level discussion
                — is grounded in the same, trusted picture.
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
                Why this team?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We&apos;ve lived both sides of the supply chain problem — operations
                and technology.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                icon: Briefcase,
                title: 'Domain Expertise',
                desc: 'Deep understanding of supply chain pain points. Sharon managed $200M in supplier deals and knows the customer pain at scale.',
              },
              {
                icon: Lightbulb,
                title: 'Product Vision',
                desc: 'Experience building complex products in regulated industries, scaling teams from startup to mature product.',
              },
              {
                icon: Users,
                title: 'Technical Excellence',
                desc: 'AI/ML expertise with graph neural networks directly applicable to supply chain network modeling.',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
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
            {team.map((member) => (
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
                Shared Background
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Elite military intelligence
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                All three founders served in elite Israeli military intelligence units
                (Unit 81/8153, Unit 76). This background instilled a culture of
                innovation, problem-solving, and high-stakes decision-making.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                Talpiot Program Graduate (Top 50 of 10,000)
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
                  Our Vision
                </h2>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  From part-level risk to business outcome
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-12 space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In complex hardware, everything starts with a BOM and a part number
                  — and the risk attached to it. Alora is building a decision layer on
                  top of the BOM that connects each part, supplier, and BOM position
                  to:
                </p>
                <StaggerContainer className="grid gap-4 md:grid-cols-3" staggerDelay={0.1}>
                  {[
                    { label: 'Part-level risk', desc: 'Which parts are at risk?' },
                    {
                      label: 'Build readiness',
                      desc: 'Can we build this on time?',
                    },
                    {
                      label: 'Revenue impact',
                      desc: 'How much money is on the line?',
                    },
                  ].map((item) => (
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
                  Over time, this BOM-driven, risk-aware view will support wider
                  decisions in <strong>Sourcing</strong> (which suppliers to depend
                  on), <strong>Operations</strong> (which builds to protect), and{' '}
                  <strong>Finance</strong> (how risk flows to margin).
                </p>
                <p className="text-lg font-medium text-foreground">
                  Our direction is simple: connect BOM and part-level reality to
                  business income.
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
                Want to work with us?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We&apos;re always looking for talented people who share our passion
                for solving hard problems in supply chain operations.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get in Touch
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
