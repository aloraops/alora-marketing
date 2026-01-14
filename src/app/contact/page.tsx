'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { cta, brand } from '@content/shared';

// Note: Metadata must be in a separate file for client components
// or use generateMetadata in a parent layout

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      // Formspree submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              See Alora on your own data
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We usually start with a focused pilot around active POs and upcoming
              builds — enough to prove value for procurement and planning without
              heavy IT work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Calendly - Talk to Us */}
            <div>
              <Card className="border-0 shadow-sm h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{cta.primary}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Schedule a time that works for you
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Calendly Embed Widget */}
                  <div
                    className="calendly-inline-widget"
                    data-url={brand.calendlyUrl}
                    style={{ minWidth: '320px', height: '630px' }}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - Request a Pilot */}
            <div>
              <Card className="border-0 shadow-sm h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Send className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Request a Pilot</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Tell us about your needs
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {formState === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-status-success-bg text-status-success-text mb-4">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Message sent!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => setFormState('idle')}
                      >
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your supply chain challenges and what you're looking for..."
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      {formState === 'error' && (
                        <p className="text-sm text-destructive">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={formState === 'loading'}
                      >
                        {formState === 'loading' ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Prefer email?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out directly at{' '}
              <a
                href={`mailto:${brand.contactEmail}`}
                className="font-medium text-primary hover:text-primary/80"
              >
                {brand.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
