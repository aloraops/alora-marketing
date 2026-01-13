# Marketing Site Documentation

This folder contains all reference materials for the Alora marketing website.

## Getting Started

**New team members:** Start with [SETUP-GUIDE.md](./SETUP-GUIDE.md) to set up your development environment.

## Document Index

| Document | Description |
|----------|-------------|
| [SETUP-GUIDE.md](./SETUP-GUIDE.md) | Employee onboarding guide (Windows + Claude Code) |
| [COMPANY_BRIEF.md](./COMPANY_BRIEF.md) | Company overview, messaging, and brand voice |
| [2026_01_02_web_design.md](./2026_01_02_web_design.md) | Current website design specifications |
| [version-1-original.md](./version-1-original.md) | Website copy - version 1 |
| [version-2-alternative.md](./version-2-alternative.md) | Website copy - version 2 (selected) |

## Source Files

Original Word documents are stored in [`source-docx/`](./source-docx/). These are kept as archives.

### Converting Word Documents to Markdown

When new `.docx` files are added, convert them to markdown for easier editing:

```bash
# Install dependency (one-time)
pip install python-docx

# Convert a single file
python scripts/docx_to_md.py docs/source-docx/filename.docx

# Convert all docx files in the source folder
python scripts/docx_to_md.py docs/source-docx/
```

The converted `.md` file will be created in the same folder as the source. Move it to `docs/` after conversion.

---

## Copy Implementation History

**Status: ✅ Completed** (December 2024)

The marketing site was built using **Version 2 (Alternative)** as the primary structure, with messaging aligned to **COMPANY_BRIEF.md**.

### What Was Implemented

| Copy Element | Source | Location in Site |
|--------------|--------|------------------|
| Hero headline | Version 2 | `src/app/page.tsx` |
| "Event → Impact → Action" flow | Version 2 | Home + Solutions pages |
| KPIs (10×, 5%, 50%, 80%) | Both versions | Home page metrics section |
| 3 Core Modules | Version 2 | Solutions carousel |
| Industries (Medical, Robotics, etc.) | Both versions | Home page industries section |
| Team bios | COMPANY_BRIEF.md | Company page |
| Security messaging | Version 2 | Solutions page |

### Versions Overview

**Version 1 (Original)**
- Traditional website structure with 8 sections
- Multiple headline variations
- Notes from Yuval and reference links

**Version 2 (Alternative) ← Selected**
- Structured flow: Event → Impact → Action
- Emphasizes the AI risk engine concept
- Focus on "ranked, actionable" messaging

## Key Resource

**COMPANY_BRIEF.md** remains the canonical reference for:
- Mission and problem statement
- Technology stack and architecture
- Founding team backgrounds
- Target market (ICP) and industries
- Value propositions by stakeholder
- Measurable impact targets
- Messaging hierarchy and tone guidelines
- Competitive positioning

**Use this brief for all future marketing materials.**
