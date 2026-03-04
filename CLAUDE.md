# CLAUDE.md - Marketing Site

Guidance for Claude Code when working on the Alora marketing website.

## Project Overview

This is a **Next.js 14** marketing website for Alora, a supply chain operations SaaS platform.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The site runs at **http://localhost:3000**

## Project Structure

```
alora-marketing/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   └── styles/           # CSS/styling
├── public/               # Static assets (images, fonts)
├── content/              # Content files
├── docs/                 # Documentation and reference materials
│   ├── README.md         # Documentation index
│   ├── SETUP-GUIDE.md    # Employee onboarding guide
│   ├── COMPANY_BRIEF.md  # Brand voice and messaging
│   └── source-docx/      # Original Word documents (archive)
└── scripts/              # Utility scripts
```

## Documentation

All reference docs are in `docs/`:

| Document | Use For |
|----------|---------|
| `COMPANY_BRIEF.md` | Brand voice, messaging, company facts |
| `2026_01_02_web_design.md` | Design specifications |
| `version-2-alternative.md` | Selected website copy structure |

**Always read `COMPANY_BRIEF.md` before writing marketing copy** to ensure messaging consistency.

## Working with Word Documents

Word documents (`.docx`) are stored in `docs/source-docx/` as archives. Convert them to markdown for editing:

### Converting .docx to Markdown

**Cross-platform command (Windows/Mac/Linux):**

```bash
# Install dependency (one-time)
pip install python-docx

# Convert a single file
python scripts/docx_to_md.py docs/source-docx/filename.docx

# Convert all .docx files in a directory
python scripts/docx_to_md.py docs/source-docx/

# With custom output location
python scripts/docx_to_md.py docs/source-docx/file.docx docs/output.md
```

**Note:** The script uses Python's `pathlib` and is fully cross-platform. It preserves:
- Headings, bold, italic, underline
- Lists (ordered and unordered, with nesting)
- Tables
- Hyperlinks
- Images (extracted to `*_assets/` folder)

## Common Tasks

### Changing Copy/Text

1. Read `docs/COMPANY_BRIEF.md` for tone and messaging guidelines
2. Find the relevant component in `src/`
3. Make changes
4. Verify at localhost:3000 (hot reload will show changes)

### Adding New Sections

1. Check `docs/version-2-alternative.md` for the original copy structure
2. Create component in `src/components/`
3. Add to the relevant page in `src/app/`

### Updating Images

Place images in `public/` and reference them with `/image-name.png`

## Git Workflow

This repo uses direct commits to `main`.

### CRITICAL: Always Build Before Committing

**You MUST run `npm run build` and verify it passes before committing.** This is deployed to Vercel which will fail on TypeScript errors.

```bash
# 1. ALWAYS run build first
npm run build

# 2. Only if build succeeds, then commit
git add .
git commit -m "Description of changes"
git push
```

If the build fails, fix the errors before committing. Common issues:
- TypeScript type errors (missing properties, wrong types)
- Import errors (missing files, wrong paths)
- Unused variables or imports

## SEO

### Background: March 2026 Audit & Fixes

An SEO audit was performed against `www.aloraops.ai` (equivalent to what tools like OptimizeBear, Lighthouse, or PageSpeed Insights check). The audit revealed several gaps that were all fixed in commits `28f3f06` through `0004638`.

**What was checked and findings:**

| Check | Before | After |
|-------|--------|-------|
| `robots.txt` | 404 (missing) | Proper `robots.txt` via `src/app/robots.ts` |
| `sitemap.xml` | 404 (missing) | Dynamic sitemap via `src/app/sitemap.ts` (6 URLs) |
| Per-page `<title>` tags | Only homepage had unique title | All pages have unique titles via `layout.tsx` files |
| Meta descriptions | Missing on most pages | All pages have descriptions via `layout.tsx` files |
| Structured data (JSON-LD) | None | Organization + SoftwareApplication (root), FAQPage (FAQ), Article (blog posts) |
| Canonical domain | Both `.com` and `.ai` serving same content (duplicate) | All `.com` domains 301 redirect to `www.aloraops.ai` |
| Open Graph tags | Present (via Next.js `metadataBase`) | No change needed — already correct |
| Blog content quality | 62 mock posts indexed by search engines | Noindexed + removed from sitemap |
| Heading hierarchy | Proper `<h1>` → `<h2>` structure | No change needed |
| Image alt attributes | Present on all images | No change needed |
| ARIA/accessibility | Proper labels and roles | No change needed |
| Mobile responsive | Fully responsive | No change needed |

**Why these matter:**
- **robots.txt**: Tells search engines what to crawl. Without it, crawlers guess, and some pages may be missed or over-crawled.
- **sitemap.xml**: Explicitly lists all pages for Google Search Console. Critical for new sites with few inbound links.
- **Per-page metadata**: Google uses `<title>` and `<meta description>` to build search result snippets. Without unique metadata, Google generates its own (often poorly).
- **JSON-LD structured data**: Enables rich search results (FAQ dropdowns, software info cards, article previews). FAQPage schema is especially valuable — it can make FAQ answers appear directly in Google results.
- **Canonical domain**: Having the same content on multiple domains (`.com` and `.ai`) splits SEO authority. 301 redirects consolidate all link equity to one domain.
- **Blog noindex**: Mock/placeholder content damages domain credibility with Google. Low-quality pages can drag down the entire domain's ranking.

### Current SEO Architecture

| Asset | File | Purpose |
|-------|------|---------|
| robots.txt | `src/app/robots.ts` | Allows all crawlers, references sitemap |
| sitemap.xml | `src/app/sitemap.ts` | Lists all indexable pages (currently 6) |
| Root metadata | `src/app/layout.tsx` | `metadataBase`, default title template (`%s \| Alora`), OG defaults |
| Organization JSON-LD | `src/app/layout.tsx` | Company info for Google Knowledge Panel |
| SoftwareApplication JSON-LD | `src/app/layout.tsx` | Product info for software-related searches |
| Solutions metadata | `src/app/solutions/layout.tsx` | Title + description for Solutions page |
| Company metadata | `src/app/company/layout.tsx` | Title + description for About page |
| FAQ metadata + JSON-LD | `src/app/faq/layout.tsx` | Title + description + FAQPage schema (22 questions from `content/home.ts`) |
| Contact metadata | `src/app/contact/layout.tsx` | Title + description for Contact page |
| Blog listing metadata | `src/app/blog/page.tsx` | Title + description + **noindex** |
| Blog post metadata + JSON-LD | `src/app/blog/[slug]/page.tsx` | Per-post title/description + Article schema + **noindex** |

**Why `layout.tsx` for metadata:** The page components for Solutions, Company, FAQ, and Contact are all `'use client'` (they use React hooks). Client components cannot export `metadata` in Next.js App Router — only server components can. The `layout.tsx` files in each route directory are server components by default, so metadata is exported from there instead.

**Title template:** Root layout sets `title: { template: '%s | Alora', default: 'Alora | ...' }`. Child pages only set the page-specific part (e.g., `title: 'Solutions'` renders as "Solutions | Alora"). Do NOT include "| Alora" in child page titles — it gets appended automatically.

### Blog: Currently Noindexed (Mock Content)

The blog infrastructure is fully built and functional but contains **placeholder/mock content** (62 posts generated from templates). All blog pages are:
- Hidden from site navigation (no link in header/footer)
- Marked `robots: { index: false, follow: false }` (tells Google not to index)
- Excluded from `sitemap.xml`
- Still have Article JSON-LD structured data (ready for when content is real)

**Why noindexed:** Google penalizes domains with thin/low-quality content. Mock blog posts with generic text would signal low quality and could hurt the ranking of real pages (homepage, solutions, FAQ). The blog is kept hidden but structurally intact so it can be enabled instantly when real content is ready.

### Enabling the Blog (When Real Content Is Ready)

When real blog posts replace the mock data, follow these exact steps:

#### Step 1: Replace mock content
- Blog posts are markdown files in `content/blog/` (managed via `src/lib/blog.ts`)
- Replace mock `.md` files with real posts
- Each post needs frontmatter: `title`, `description`, `date`, `author`, `category`, `readingTime`

#### Step 2: Remove noindex from blog listing
**File:** `src/app/blog/page.tsx`
**Action:** Delete the `robots` block from the metadata export:
```ts
// DELETE these lines:
robots: {
  index: false,
  follow: false,
},
```

#### Step 3: Remove noindex from blog posts
**File:** `src/app/blog/[slug]/page.tsx`
**Action:** Delete the `robots` block from the return value of `generateMetadata()`:
```ts
// DELETE these lines from the return object:
robots: {
  index: false,
  follow: false,
},
```

#### Step 4: Re-add blog to sitemap
**File:** `src/app/sitemap.ts`
**Action:** Add import and blog URLs:
```ts
import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog';  // ADD this import

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aloraops.ai';

  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/solutions`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/company`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    // ADD these blog entries:
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    ...getAllSlugs().map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
```

#### Step 5: Add blog link to navigation
Add a "Blog" link to the site header/footer navigation so users can discover blog content.

#### Step 6: Verify
1. Run `npm run build` — must pass
2. Check `localhost:3000/blog` renders correctly
3. Check page source for absence of `noindex` meta tag
4. Check `localhost:3000/sitemap.xml` includes blog URLs
5. After deploy: submit updated sitemap in Google Search Console

### Domain Configuration (Vercel Dashboard)

**Canonical domain:** `www.aloraops.ai` — chosen because `.ai` is the primary brand identity.

| Domain | Role |
|--------|------|
| `www.aloraops.ai` | **Production** (serves the site) |
| `aloraops.ai` | 301 → `www.aloraops.ai` |
| `aloraops.com` | 301 → `www.aloraops.ai` |
| `www.aloraops.com` | 301 → `www.aloraops.ai` |

**Why 301 (not 307):** 301 is a permanent redirect. It tells Google to transfer all SEO authority (link equity, PageRank) from the old URL to the new one. Browsers cache 301s, reducing server load. 307 is temporary — Google keeps both URLs in its index and doesn't transfer authority, which splits SEO value.

**This is configured in the Vercel dashboard, not in code.** The `next.config.ts` has no redirect rules — Vercel handles domain-level redirects before the Next.js app is invoked.

## SEO Growth (March 2026)

The site has been expanded from 5 to 14 indexable pages to target long-tail keywords. Full strategy documented in `docs/seo-strategy.md`.

### Page Architecture

| Page | URL | Content File |
|------|-----|-------------|
| Homepage | `/` | `content/home.ts` |
| Solutions Overview | `/solutions` | `content/solutions.ts` |
| PO Risk & Tracking | `/solutions/po-risk-tracking` | `content/solutions/po-risk-tracking.ts` |
| Build Readiness | `/solutions/build-readiness` | `content/solutions/build-readiness.ts` |
| Vendor Scoring | `/solutions/vendor-scoring` | `content/solutions/vendor-scoring.ts` |
| Industries Index | `/industries` | `content/industries/index.ts` |
| Medical Devices | `/industries/medical-devices` | `content/industries/medical-devices.ts` |
| Defense & Aerospace | `/industries/defense-aerospace` | `content/industries/defense-aerospace.ts` |
| Robotics & Automation | `/industries/robotics-automation` | `content/industries/robotics-automation.ts` |
| Industrial Equipment | `/industries/industrial-equipment` | `content/industries/industrial-equipment.ts` |
| Company | `/company` | `content/company.ts` |
| Resources | `/resources` | `content/resources.ts` |
| FAQ | `/faq` | `content/home.ts` (faq section) |
| Contact | `/contact` | inline |

### Adding New Solution/Industry Pages

**Solution sub-page checklist:**
1. Create `content/solutions/[slug].ts` (hero, challenges, features, howItWorks, useCases, metric, crossLinks, cta, seo)
2. Create `src/app/solutions/[slug]/layout.tsx` (metadata + JSON-LD)
3. Create `src/app/solutions/[slug]/page.tsx` (use `SolutionPageTemplate`)
4. Add URL to `src/app/sitemap.ts`
5. Update footer in `src/components/layout/footer.tsx`
6. Update cross-links in other solution content files
7. `npm run build`

**Industry page checklist:**
1. Create `content/industries/[slug].ts` (hero, painPoints, capabilities, relevantModules, cta, seo)
2. Create `src/app/industries/[slug]/layout.tsx` (metadata + JSON-LD)
3. Create `src/app/industries/[slug]/page.tsx` (use `IndustryPageTemplate`)
4. Add to industries array in `content/industries/index.ts`
5. Add URL to `src/app/sitemap.ts`
6. Update footer
7. `npm run build`

### Shared Components

| Component | File | Used By |
|-----------|------|---------|
| `SolutionPageTemplate` | `src/components/solutions/solution-page-template.tsx` | All solution sub-pages |
| `IndustryPageTemplate` | `src/components/industries/industry-page-template.tsx` | All industry sub-pages |
| `POTable` | `src/components/solutions/po-table.tsx` | Solutions overview + PO Risk page |
| `BuildDashboard` | `src/components/solutions/build-dashboard.tsx` | Solutions overview + Build Readiness page |
| `VendorScoreCards` | `src/components/solutions/vendor-score-cards.tsx` | Solutions overview + Vendor Scoring page |

### Social Media Guidelines

See `docs/social-media-guidelines.md` for LinkedIn posting playbook for founders and advisors.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Language:** TypeScript
- **Package Manager:** npm
