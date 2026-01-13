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

This repo uses direct commits to `main`. After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Language:** TypeScript
- **Package Manager:** npm
