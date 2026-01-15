/**
 * Contact Form API Route
 *
 * Handles contact form submissions with multiple layers of protection:
 * 1. Honeypot field - catches basic bots that auto-fill hidden fields
 * 2. Rate limiting - prevents spam/abuse from single IP addresses
 * 3. Server-side validation - ensures all required fields are present
 *
 * Sends emails via Resend (https://resend.com)
 *
 * Required environment variables:
 * - RESEND_API_KEY: Your Resend API key (get from https://resend.com/api-keys)
 * - UPSTASH_REDIS_REST_URL: Upstash Redis URL (get from https://console.upstash.com)
 * - UPSTASH_REDIS_REST_TOKEN: Upstash Redis token
 */

import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const RATE_LIMIT = {
  requests: 3,        // Maximum number of submissions
  window: '1 h',      // Time window (e.g., '1 h', '10 m', '1 d')
} as const;

// Recipient email - where contact form submissions are sent
// Configured via CONTACT_FORM_RECIPIENT env var (defaults to contact@aloraops.com)
const RECIPIENT_EMAIL = process.env.CONTACT_FORM_RECIPIENT || 'contact@aloraops.com';

// Sender must use the verified subdomain (contact.aloraops.com)
// Recipient can be any email - this is where form submissions go
const SENDER_EMAIL = 'Alora Contact Form <noreply@contact.aloraops.com>';

// ---------------------------------------------------------------------------
// Initialize Services (Lazy)
// ---------------------------------------------------------------------------
// Services are initialized lazily to avoid errors during build time when
// environment variables may not be available.

let _resend: Resend | null = null;
let _ratelimit: Ratelimit | null = null;

function getResend(): Resend {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

/**
 * Rate limiter using Upstash Redis
 *
 * Upstash provides serverless Redis - perfect for Vercel/Next.js edge functions.
 * Free tier: 10,000 requests/day, which is plenty for a contact form.
 *
 * Sliding window algorithm: smoothly limits requests over time rather than
 * hard-resetting at fixed intervals (which can allow burst abuse).
 */
function getRatelimit(): Ratelimit {
  if (!_ratelimit) {
    _ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(RATE_LIMIT.requests, RATE_LIMIT.window),
      analytics: true, // Track rate limit hits in Upstash dashboard
    });
  }
  return _ratelimit;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  website?: string; // Honeypot field - should always be empty
}

// ---------------------------------------------------------------------------
// API Handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    // -------------------------------------------------------------------------
    // Step 1: Rate Limiting
    // -------------------------------------------------------------------------
    // Get client IP from headers (Vercel/Cloudflare set x-forwarded-for)
    // Fall back to 'anonymous' if not available (shouldn't happen in production)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim() ?? 'anonymous';

    const { success, remaining, reset } = await getRatelimit().limit(ip);

    if (!success) {
      // Calculate when the rate limit resets for the error message
      const resetDate = new Date(reset);
      const minutesUntilReset = Math.ceil((reset - Date.now()) / 1000 / 60);

      return Response.json(
        {
          error: 'Too many submissions. Please try again later.',
          retryAfter: minutesUntilReset,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((reset - Date.now()) / 1000)),
            'X-RateLimit-Remaining': String(remaining),
            'X-RateLimit-Reset': resetDate.toISOString(),
          },
        }
      );
    }

    // -------------------------------------------------------------------------
    // Step 2: Parse and Validate Request Body
    // -------------------------------------------------------------------------
    const body: ContactFormData = await request.json();

    // -------------------------------------------------------------------------
    // Step 3: Honeypot Check
    // -------------------------------------------------------------------------
    // The "website" field is hidden via CSS and has tabIndex={-1}
    // Real users will never see or fill it. Bots often auto-fill all fields.
    // If this field has any value, it's almost certainly a bot.
    if (body.website) {
      // Return success to not tip off the bot that we detected it
      // But don't actually send the email
      console.warn(`[Contact] Honeypot triggered from IP: ${ip}`);
      return Response.json({ success: true });
    }

    // -------------------------------------------------------------------------
    // Step 4: Server-side Validation
    // -------------------------------------------------------------------------
    // Never trust client-side validation alone - always validate on server
    const { name, email, company, message } = body;

    if (!name?.trim() || !email?.trim() || !company?.trim() || !message?.trim()) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------------------
    // Step 5: Send Email via Resend
    // -------------------------------------------------------------------------
    const { error: sendError } = await getResend().emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email, // When you hit "reply", it goes to the submitter
      subject: `[Alora Contact] Pilot Request from ${company}`,
      text: formatPlainTextEmail({ name, email, company, message }),
      html: formatHtmlEmail({ name, email, company, message }),
    });

    if (sendError) {
      console.error('[Contact] Failed to send email:', sendError);
      return Response.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    // -------------------------------------------------------------------------
    // Success!
    // -------------------------------------------------------------------------
    console.log(`[Contact] Email sent successfully from ${email} (${company})`);

    return Response.json(
      { success: true },
      {
        headers: {
          'X-RateLimit-Remaining': String(remaining - 1),
        },
      }
    );
  } catch (error) {
    console.error('[Contact] Unexpected error:', error);
    return Response.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// Email Formatting Helpers
// ---------------------------------------------------------------------------

interface EmailData {
  name: string;
  email: string;
  company: string;
  message: string;
}

function formatPlainTextEmail({ name, email, company, message }: EmailData): string {
  return `
New contact form submission from aloraops.com

Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}

---
This email was sent from the Alora marketing website contact form.
  `.trim();
}

function formatHtmlEmail({ name, email, company, message }: EmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #1a5c45; margin-bottom: 24px;">New Contact Form Submission</h2>

  <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 100px;">Name</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(name)}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #eee;">
        <a href="mailto:${escapeHtml(email)}" style="color: #1a5c45;">${escapeHtml(email)}</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Company</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(company)}</td>
    </tr>
  </table>

  <h3 style="color: #1a5c45; margin-bottom: 12px;">Message</h3>
  <div style="background: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>

  <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
  <p style="color: #666; font-size: 12px;">
    This email was sent from the Alora marketing website contact form.
  </p>
</body>
</html>
  `.trim();
}

/**
 * Escape HTML special characters to prevent XSS in email
 */
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}
