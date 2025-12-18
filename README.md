# Alora Marketing Website

The public-facing marketing website for Alora.

**Live Site:** https://aloraops.com (or your Vercel URL)
**Repository:** https://github.com/aloraops/alora-marketing

---

## Quick Links

| Task | Guide |
|------|-------|
| Add a blog post | [Blog Content Guide](#adding-blog-posts) |
| Update contact settings | [Configuration](#configuration) |
| Request a site change | [How to Request Changes](#requesting-changes) |

---

## Site Structure

```
/ (Home)           → Main landing page with value proposition
/solutions         → Product features and capabilities
/company           → Team bios and company story
/contact           → Demo booking + pilot request form
/blog              → Articles and insights
/blog/[slug]       → Individual blog posts
```

---

## Adding Blog Posts

Blog posts are written in Markdown files and automatically appear on the site.

**Quick Start:**
1. Create a new `.mdx` file in `content/blog/`
2. Add the required frontmatter (title, description, date, author, category)
3. Write your content in Markdown
4. Commit and push — the site deploys automatically

**Detailed instructions:** See [`content/blog/README.md`](./content/blog/README.md) for:
- Complete file template
- Available categories and authors
- How to add images
- Markdown formatting guide
- Thumbnail image guidelines

**Pre-made thumbnail images** (use in `image` frontmatter field):
- `/images/blog/thumb-supply-chain.svg`
- `/images/blog/thumb-ai-technology.svg`
- `/images/blog/thumb-procurement.svg`
- `/images/blog/thumb-manufacturing.svg`
- `/images/blog/thumb-best-practices.svg`
- `/images/blog/thumb-analytics.svg`

---

## Configuration

These settings require code changes. Contact the development team to update them.

### Contact Page Settings

| Setting | Current Value | File Location |
|---------|---------------|---------------|
| Calendly Link | `YOUR_CALENDLY_LINK` (placeholder) | `src/app/contact/page.tsx` line 105 |
| Formspree Form ID | `YOUR_FORM_ID` (placeholder) | `src/app/contact/page.tsx` line 30 |
| Contact Email | `hello@aloraops.ai` | `src/app/contact/page.tsx` line 254 |

**To set up Calendly:**
1. Create a Calendly event type for demos
2. Get the link (e.g., `calendly.com/alora-team/demo`)
3. Ask dev team to update the link in the code

**To set up Formspree:**
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get the form ID
3. Ask dev team to update the form ID in the code

### Header Links

| Link | Destination | File Location |
|------|-------------|---------------|
| Sign In | `https://app.aloraops.com/login` | `src/components/layout/header.tsx` |
| Logo | Home page (`/`) | `src/components/layout/header.tsx` |

### Site Metadata

SEO titles, descriptions, and social sharing images are configured in:
- `src/app/layout.tsx` — Global defaults
- Individual page files — Page-specific overrides

---

## Deployment

The site is hosted on **Vercel** and deploys automatically when changes are pushed to the `main` branch.

**Deployment workflow:**
1. Changes are committed to git
2. Push to `main` branch
3. Vercel automatically builds and deploys
4. Live in ~1-2 minutes

**Preview deployments:** Pull requests automatically get preview URLs for testing before merging.

---

## Requesting Changes

For changes that require development work:

### Content Changes (Non-Technical)
- **Blog posts:** Follow the [Blog Content Guide](./content/blog/README.md) — you can do this yourself!
- **Text updates:** Provide the exact text and where it should go
- **Image updates:** Provide the image file and specify the location

### Feature Requests
Describe what you want to achieve, not how to implement it. Examples:
- "Add a newsletter signup to the blog page"
- "Change the hero section headline"
- "Add a new team member to the company page"

### Bug Reports
Include:
- What you expected to happen
- What actually happened
- Screenshot if possible
- Browser/device you're using

---

## File Structure Overview

```
alora-marketing/
├── content/
│   └── blog/              # Blog post MDX files
│       ├── README.md      # Blog content guide
│       ├── _config.yaml   # Categories & authors
│       └── *.mdx          # Individual posts
├── public/
│   └── images/
│       ├── blog/          # Blog images & thumbnails
│       └── *.svg          # Logo files
├── src/
│   ├── app/               # Pages (Home, Solutions, etc.)
│   ├── components/        # Reusable UI components
│   └── lib/               # Utilities (blog parsing, etc.)
└── README.md              # This file
```

---

## Brand Assets

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary Green | `#2b553c` | CTAs, links, accents |
| Foreground | `#1a2720` | Main text |
| Secondary | `#4e6056` | Muted text |
| Background | `#FCFDFC` | Page background |

### Logo Files
Located in `public/images/`:
- `alora_logo_full.svg` — Full logo with wordmark (header)
- `alora_logo_symbol.svg` — Symbol only (favicon)
- `alora_logo_type.svg` — Wordmark only

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Blog:** MDX with gray-matter
- **Forms:** Formspree
- **Hosting:** Vercel

---

## Local Development

For developers only:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check
```

The dev server runs at `http://localhost:3000` (or next available port).
