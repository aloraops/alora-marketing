# SEO Strategy — Alora Marketing Site

**Last updated:** March 2026
**Domain:** www.aloraops.ai
**Status:** Phase 1 complete (foundation + page expansion)

---

## Current State (March 2026)

### What's Working
- **Branded search:** #1 for "Alora supply chain"
- **Technical SEO:** All foundational issues fixed (robots.txt, sitemap, metadata, JSON-LD, canonical domain)
- **Page count:** Expanded from 5 to 14 indexable pages

### Key Metrics to Track
| Metric | Tool | Baseline (March 2026) |
|--------|------|-----------------------|
| Indexed pages | Google Search Console | ~5 |
| Impressions (weekly) | Google Search Console | TBD |
| Clicks (weekly) | Google Search Console | TBD |
| Average position for target keywords | Google Search Console | TBD |
| Domain Authority | Ahrefs / Moz | TBD |

---

## Page Architecture (14 Indexable Pages)

| URL | Priority | Primary Keywords | Type |
|-----|----------|-----------------|------|
| `/` | 1.0 | Alora, AI supply chain operations | Homepage |
| `/solutions` | 0.9 | supply chain solutions, procurement AI | Overview |
| `/solutions/po-risk-tracking` | 0.85 | PO risk management, purchase order tracking, AI PO tracking | Solution |
| `/solutions/build-readiness` | 0.85 | build readiness manufacturing, CTB planning, BOM shortage detection | Solution |
| `/solutions/vendor-scoring` | 0.85 | vendor scoring, supplier performance tracking, supplier behavior AI | Solution |
| `/industries` | 0.8 | manufacturing supply chain solutions by industry | Index |
| `/industries/medical-devices` | 0.75 | medical device supply chain AI, regulated BOM management | Industry |
| `/industries/defense-aerospace` | 0.75 | defense supply chain AI, aerospace procurement | Industry |
| `/industries/robotics-automation` | 0.75 | robotics supply chain, automation manufacturing AI | Industry |
| `/industries/industrial-equipment` | 0.75 | industrial equipment supply chain, engineer-to-order AI | Industry |
| `/company` | 0.7 | Alora team, about Alora | Company |
| `/resources` | 0.7 | supply chain resources, procurement guides | Content hub |
| `/faq` | 0.6 | Alora FAQ, supply chain AI questions | FAQ |
| `/contact` | 0.5 | contact Alora | Contact |

---

## Keyword Strategy

### Tier 1: Branded (already winning)
- "Alora supply chain" — #1
- "Alora ops" — #1
- "aloraops" — #1

### Tier 2: Long-tail product keywords (achievable)
These keywords have lower search volume but much less competition. Our dedicated landing pages target these directly.

| Keyword Cluster | Target Page | Competition |
|-----------------|-------------|-------------|
| "AI PO tracking tool" / "purchase order risk management" | `/solutions/po-risk-tracking` | Low |
| "BOM risk management software" / "build readiness manufacturing" | `/solutions/build-readiness` | Low |
| "supplier behavior scoring" / "vendor performance AI" | `/solutions/vendor-scoring` | Low |
| "medical device supply chain AI" | `/industries/medical-devices` | Low-Medium |
| "defense aerospace procurement AI" | `/industries/defense-aerospace` | Low |
| "robotics supply chain management" | `/industries/robotics-automation` | Low |
| "engineer to order supply chain" | `/industries/industrial-equipment` | Low |

### Tier 3: Competitive keywords (long-term)
These are dominated by IBM, McKinsey, SAP, etc. We compete via content depth + backlinks over time.

| Keyword | Current Leaders | Strategy |
|---------|----------------|----------|
| "AI for supply chain" | IBM, McKinsey, SAP | Blog content, thought leadership, Google Ads |
| "supply chain AI software" | SAP, Oracle | Product comparisons, case studies |
| "procurement AI" | Coupa, Jaggaer | Blog + landing pages |

---

## Content Roadmap

### Phase 2: Blog Content (Next)
When real blog content replaces mock data:

1. **Operational insights** (2-3 posts/month)
   - "How to calculate BOM risk exposure"
   - "PO tracking beyond ERP: what you're missing"
   - "Supplier scoring that reflects reality"

2. **Industry perspectives** (1-2 posts/month)
   - "Medical device supply chain: 5 risks you're not tracking"
   - "Defense procurement: why sole-source visibility matters"

3. **Product updates** (as needed)
   - Feature announcements
   - Customer success stories (anonymized initially)

### Phase 3: Case Studies
When customer permission allows:
- Quantified outcomes (% improvement in on-time delivery, reduction in manual work)
- Industry-specific stories
- Each case study links to relevant solution + industry pages

---

## Off-Site Strategy

### LinkedIn (see `social-media-guidelines.md`)
- Founders post 2-3x/week
- Mix: 40% operational insights, 25% industry, 20% product, 15% founder stories
- Every post naturally links back to aloraops.ai where relevant
- Advisors mention Alora ~1 in 4 posts

### Backlink Building
1. **Guest posts** on supply chain publications (Supply Chain Dive, MFG.com blog)
2. **Podcast appearances** — founders on manufacturing/supply chain podcasts
3. **Industry directory listings** — G2, Capterra, Product Hunt
4. **Partner co-marketing** — joint content with integration partners

### Google Ads (Complement)
- Budget: TBD
- Target: Tier 2 long-tail keywords initially
- Goal: Capture demand while organic rankings build
- Landing pages: solution sub-pages (already optimized)

---

## Action Items

Everything that's pending on the marketing site, in priority order.

### Immediate (Do This Week)

- [ ] **Google Search Console** — Submit updated sitemap at `https://aloraops.ai/sitemap.xml`. Request reindexing of homepage to force favicon refresh (currently showing Vercel logo).
- [ ] **Share industry pages with partners for review** — Pages are live at direct URLs but hidden from navigation and sitemap. Share these links:
  - `https://www.aloraops.ai/industries/medical-devices`
  - `https://www.aloraops.ai/industries/defense-aerospace`
  - `https://www.aloraops.ai/industries/robotics-automation`
  - `https://www.aloraops.ai/industries/industrial-equipment`
- [ ] **Share social media guidelines** — Send `docs/social-media-guidelines.md` to founders and advisors. Key ask: start posting 2-3x/week per the content pillars.

### After Partner Review

- [ ] **Enable industry pages** — Uncomment 3 blocks:
  1. Header nav in `src/components/layout/header.tsx` (line with `Industries`)
  2. Footer column in `src/components/layout/footer.tsx` (Industries block)
  3. Sitemap URLs in `src/app/sitemap.ts` (5 industry URLs)
  Then run `npm run build` and deploy.

### When Real Blog Content Is Ready

The blog infrastructure is fully built (62 mock posts) but noindexed and hidden from navigation. To enable:

1. Replace mock markdown files in `content/blog/` with real posts
2. Remove `robots: { index: false, follow: false }` from `src/app/blog/page.tsx`
3. Remove `robots: { index: false, follow: false }` from `src/app/blog/[slug]/page.tsx`
4. Add blog URLs to `src/app/sitemap.ts` (import `getAllSlugs` from `@/lib/blog`)
5. Add "Blog" link to header navigation in `src/components/layout/header.tsx`
6. Run `npm run build` and deploy
7. Submit updated sitemap in Google Search Console

See detailed steps in `CLAUDE.md` under "Enabling the Blog".

### Ongoing

- [ ] **LinkedIn posting** — Founders: 2-3x/week. Advisors: mention Alora ~1 in 4 posts. Link to landing pages ~1 in 3 posts.
- [ ] **Edit previous LinkedIn posts** — Add links to new solution/industry pages on 3-5 high-performing past posts (see `docs/social-media-guidelines.md`).
- [ ] **Google Ads** — Set up campaigns targeting Tier 2 long-tail keywords. Landing pages: solution sub-pages.
- [ ] **Directory listings** — Submit Alora to G2, Capterra, Product Hunt.
- [ ] **Guest content** — Pitch guest posts to Supply Chain Dive, MFG.com, IndustryWeek.
- [ ] **Case studies** — Write and publish when customer permission allows. Link from relevant solution + industry pages.
- [ ] **Monitor Search Console** — Check weekly for first month, then quarterly. Track impressions, clicks, indexed pages.

---

## Technical SEO Checklist

### Already Done
- [x] robots.txt via `src/app/robots.ts`
- [x] Dynamic sitemap via `src/app/sitemap.ts` (14 URLs)
- [x] Per-page unique `<title>` and `<meta description>`
- [x] JSON-LD structured data (Organization, SoftwareApplication, FAQPage, WebPage)
- [x] Canonical domain consolidation (all → www.aloraops.ai via 301)
- [x] Mock blog noindexed
- [x] apple-icon.png for Google favicon
- [x] Open Graph images

### TODO
- [ ] Submit updated sitemap in Google Search Console
- [ ] Request reindexing of homepage (force favicon refresh)
- [ ] Set up Google Search Console performance tracking
- [ ] Add internal linking from blog posts to solution/industry pages (when blog is live)
- [ ] Implement breadcrumb JSON-LD on sub-pages
- [ ] Monitor Core Web Vitals in Search Console

---

## Quarterly Review Cadence

Every quarter, review:
1. **Search Console data** — impressions, clicks, average position for target keywords
2. **Indexed pages** — confirm all 14 (and any new) pages are indexed
3. **Keyword movements** — which Tier 2 keywords are we ranking for?
4. **Backlink growth** — new domains linking to us
5. **Content gaps** — new keyword opportunities from Search Console query data
6. **Competitor movements** — are competitors targeting our long-tail keywords?

---

## How to Add New Pages

### Adding a New Solution Sub-Page
1. Create `content/solutions/[slug].ts` with hero, challenges, features, howItWorks, useCases, metric, crossLinks, cta, seo
2. Create `src/app/solutions/[slug]/layout.tsx` — export metadata from content, add JSON-LD
3. Create `src/app/solutions/[slug]/page.tsx` — use `SolutionPageTemplate`
4. Add URL to `src/app/sitemap.ts`
5. Add link to footer navigation in `src/components/layout/footer.tsx`
6. Update cross-links in other solution content files
7. Run `npm run build` to verify

### Adding a New Industry Page
1. Create `content/industries/[slug].ts` with hero, painPoints, capabilities, relevantModules, cta, seo
2. Create `src/app/industries/[slug]/layout.tsx` — export metadata from content, add JSON-LD
3. Create `src/app/industries/[slug]/page.tsx` — use `IndustryPageTemplate`
4. Add to `content/industries/index.ts` industries array
5. Add URL to `src/app/sitemap.ts`
6. Add link to footer navigation
7. Run `npm run build` to verify
