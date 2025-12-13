# Alora Marketing Website

Marketing website for Alora - AI-powered supply chain operations platform for complex hardware manufacturers.

**Live Site:** https://aloraops.ai

## Overview

This is the static marketing website for Alora, built with vanilla HTML, CSS, and TypeScript. The site is designed to be fast, accessible, and easy to maintain.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with modern features
- **TypeScript** - Type-safe JavaScript
- **Font Awesome** - Icons
- **Google Fonts** - Sora & Open Sans typography

## Project Structure

```
alora-marketing/
├── index.html           # Main HTML page
├── styles.css           # Global styles
├── script.ts            # TypeScript source
├── script.js            # Compiled JavaScript
├── favicon.svg          # Site favicon
├── fv/                  # Favicon variants
├── CNAME                # GitHub Pages domain config
└── package.json         # Dependencies and scripts
```

## Development

### Prerequisites

- Node.js 18+ and npm

### Local Development

```bash
# Install dependencies
npm install

# Run local development server (opens at http://localhost:3000)
npm run dev

# Compile TypeScript
npm run build
```

### Making Changes

1. Edit `index.html` for structure changes
2. Edit `styles.css` for styling
3. Edit `script.ts` for functionality (then run `npm run build`)

## Deployment

The site is deployed via **GitHub Pages** to `aloraops.ai`.

### Automatic Deployment

Any push to the `main` branch automatically deploys to production.

### Manual Deployment

1. Commit changes to `main` branch
2. Push to GitHub
3. GitHub Pages will automatically deploy

## Content Source

Website copy and messaging is maintained in the central docs repository:
- **Primary Source:** `alora-docs/company/website-copy-wip/`
- **Company Brief:** `alora-docs/company/website-copy-wip/COMPANY_BRIEF.md`

## Branch Strategy

- `main` - Production (auto-deploys to aloraops.ai)
- `dev` - Development and staging
- Feature branches: `feature/[name]` or `content/[name]`

## Related Repositories

| Repository | Description |
|------------|-------------|
| [alora-backend](https://github.com/aloraops/alora-backend) | Python FastAPI backend |
| [alora-frontend](https://github.com/aloraops/alora-frontend) | Next.js 14+ frontend app |
| [alora-docs](https://github.com/aloraops/alora-docs) | Centralized documentation |

## Contact

For questions about the marketing site or content updates, contact the team via the repository issues.

---

**Built with ❤️ by the Alora team**
