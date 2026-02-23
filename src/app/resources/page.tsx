'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { ArrowRight, Linkedin, Play } from 'lucide-react';

// Content imports
import * as content from '@content/resources';
import { brand } from '@content/shared';

// SVG pattern used across dark sections
const crossPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

function VideoCard({ interview }: { interview: typeof content.interviews[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Video Player */}
      <div className="relative aspect-video bg-black cursor-pointer group" onClick={handlePlay}>
        <video
          ref={videoRef}
          src={interview.videoUrl}
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          playsInline
          poster=""
        />
      </div>

      {/* Info Section */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Interviewee Photo */}
          <div className="h-14 w-14 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-border/20">
            <Image
              src={interview.image}
              alt={interview.name}
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-foreground">{interview.name}</h3>
              <Link
                href={interview.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={`${interview.name} on LinkedIn`}
              >
                <Linkedin className="h-3 w-3" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">{interview.role}</p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-base font-semibold text-foreground">
            {interview.topic}
          </h4>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {interview.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
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
        </div>
      </section>

      {/* Video Interviews Section */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Video Interviews
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-primary/40" />
              <p className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Conversations with supply chain leaders
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="mx-auto mt-10 sm:mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2"
            staggerDelay={0.15}
          >
            {content.interviews.map((interview) => (
              <StaggerItem key={interview.id}>
                <VideoCard interview={interview} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
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
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
