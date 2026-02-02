# Changelog

All notable changes to the Alora marketing website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-01

### Summary
First production release of the Alora marketing website. This release establishes the baseline V1.0 snapshot with a complete, production-ready marketing site featuring design system, content pages, blog, and contact integration.

### Added

**Homepage**
- Hero section with brand gradient and primary CTA
- Execution Loop section explaining how Alora works (4 steps)
- Time to Value / Adoption Journey timeline (Week 1-3 + Always on)
- Execution Impact metrics section (4 key benefits)
- Industries section highlighting target verticals (Medical Devices, Robotics, Defense, Industrial)
- Trust & Security section with compliance and data handling details
- Comprehensive FAQ with 6 categories and 25+ questions
- Final CTA section with contact options

**Solutions Page**
- PO Risk & Tracking solution details
- CTB & Build Readiness solution details
- Vendor Behavior & Scoring solution details
- Solution-specific features and benefits

**Company Page**
- Team section with 3 founder profiles (photos and bios)
- Company mission and values
- Contact information

**Contact Page**
- Production contact form with validation
- Email integration via Resend API
- Rate limiting via Upstash Redis
- Success/error handling

**Blog**
- 62 generated blog posts across multiple categories
- Blog listing page with search and filtering
- Individual blog post pages with reading time
- Responsive blog layout

**Design System**
- Brand color tokens and gradients
- Custom Tailwind configuration with design tokens
- Consistent typography scale
- shadcn/ui component library integration
- Framer Motion animations (FadeIn, StaggerContainer)
- Lucide React icons

**SEO & Social**
- Open Graph meta tags
- Twitter card meta tags
- Custom OG images with Alora logo (opengraph-image.png, twitter-image.png)
- Proper metadata configuration

**Infrastructure**
- Next.js 16.0.10 with App Router
- TypeScript 5.9.3 with strict mode
- ESLint configuration
- Vercel deployment integration
- Environment variable management
- Rate limiting for contact form

### Technical Details
- **Framework:** Next.js 16.0.10 (App Router, Turbopack)
- **UI Library:** React 19.2.1
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Components:** shadcn/ui with Radix UI primitives
- **Animations:** Framer Motion 12.23.26
- **Content:** MDX with next-mdx-remote
- **Email:** Resend API integration
- **Rate Limiting:** Upstash Redis
- **Icons:** Lucide React
- **Deployment:** Vercel (auto-deploy from main)

### Documentation
- CLAUDE.md with project instructions
- SETUP-GUIDE.md for employee onboarding
- COMPANY_BRIEF.md with brand voice and messaging
- Design specifications in docs/
- Content versioning (version-1-original.md, version-2-alternative.md)

### Notes
This V1.0 release serves as a stable baseline. Future V2 work can proceed on main while V1.0 remains accessible via the `v1.0.0` tag and `release/v1.0` branch for hotfixes.

---

## [0.1.0-pre-yuval] - 2026-01-18

Initial pre-release version with basic marketing site structure and documentation.

[1.0.0]: https://github.com/aloraops/alora-marketing/releases/tag/v1.0.0
[0.1.0-pre-yuval]: https://github.com/aloraops/alora-marketing/releases/tag/v0.1.0-pre-yuval
