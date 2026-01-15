'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

// Note: Metadata must be in a separate file for client components
// or use generateMetadata in a parent layout

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '', // Honeypot field - see explanation below
  });

  /**
   * Handle form submission
   *
   * Sends form data to our API route which handles:
   * - Rate limiting (prevents spam)
   * - Honeypot validation (catches bots)
   * - Email sending via Resend
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 429) {
          // Rate limited
          setErrorMessage(
            data.retryAfter
              ? `Too many submissions. Please try again in ${data.retryAfter} minutes.`
              : 'Too many submissions. Please try again later.'
          );
        } else {
          setErrorMessage(data.error || 'Something went wrong. Please try again.');
        }
        setFormState('error');
        return;
      }

      // Success!
      setFormState('success');
      setFormData({ name: '', email: '', company: '', message: '', website: '' });
    } catch {
      // Network error or other unexpected failure
      setErrorMessage('Unable to send message. Please check your connection and try again.');
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

      {/* Contact Form */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {/* Contact Form - Reach Out */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Reach Out</CardTitle>
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
                    {/*
                      Honeypot Field

                      This is a spam protection technique. The field is:
                      - Hidden from real users (visually hidden + negative tabIndex)
                      - NOT using display:none or visibility:hidden (bots detect that)
                      - Named something bots love to fill (like "website" or "url")

                      How it works:
                      - Real users never see it, so they never fill it
                      - Bots auto-fill all fields, including this hidden one
                      - Server rejects submissions where this field has a value

                      Note: We use CSS to hide it instead of display:none because
                      sophisticated bots check for display:none and skip those fields.
                    */}
                    <div
                      aria-hidden="true"
                      className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
                      style={{ position: 'absolute', left: '-9999px' }}
                    >
                      <Label htmlFor="website">Website</Label>
                      <Input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

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

                    {/* Error Message */}
                    {formState === 'error' && (
                      <div className="flex items-start gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                        <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
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
      </section>
    </>
  );
}
