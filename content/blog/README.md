# Blog Content Guide

This guide explains how to create and manage blog posts for the Alora website.

## Quick Start: Creating a New Post

1. Create a new file in this folder (`content/blog/`)
2. Name it with a URL-friendly slug: `my-article-title.mdx`
3. Copy the template below and fill in your content

## File Template

```mdx
---
title: "Your Article Title Here"
description: "A brief summary of the article (1-2 sentences, shown in previews)"
date: "2024-12-15"
author: "Sharon Ilan"
category: "Supply Chain"
image: "/images/blog/your-thumbnail.png"
---

Your article content goes here...

## Section Heading

More content...
```

> **Note:** The `image` field is optional. If omitted, a subtle gradient placeholder will be shown on the blog listing page.

## Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | The article headline |
| `description` | Yes | Brief summary (shown in article cards) |
| `date` | Yes | Publication date in YYYY-MM-DD format |
| `author` | Yes | Author name (see options below) |
| `category` | Yes | Article category (see options below) |
| `image` | No | Card thumbnail image (see below) |

### Adding a Card Thumbnail Image

The `image` field sets the thumbnail shown on blog listing cards. If not provided, a subtle gradient placeholder is used.

**Step 1:** Upload your image to `public/images/blog/`

**Step 2:** Add to frontmatter:
```yaml
---
title: "Your Article Title"
description: "Brief summary..."
date: "2024-12-15"
author: "Sharon Ilan"
category: "Supply Chain"
image: "/images/blog/your-thumbnail.png"
---
```

**Thumbnail Guidelines:**
- Recommended size: 800×500px (16:10 aspect ratio)
- Keep under 200KB for fast loading
- Use `.png` for graphics/illustrations, `.jpg` for photos
- Simple, clean visuals work best at small sizes

### Available Categories

Choose ONE from:
- `Supply Chain`
- `AI & Technology`
- `Procurement`
- `Manufacturing`
- `Industry Trends`
- `Best Practices`
- `Case Studies`
- `Product Updates`

### Available Authors

- `Sharon Ilan`
- `Yuval Blyakhman`
- `Idan Ben-Ami`
- `Alora Team`

## Writing Content (Markdown Basics)

### Headings
```markdown
## Main Section (use this most)
### Subsection
#### Smaller subsection
```

### Text Formatting
```markdown
**bold text**
*italic text*
[link text](https://example.com)
```

### Lists
```markdown
Bullet list:
- Item one
- Item two
- Item three

Numbered list:
1. First step
2. Second step
3. Third step
```

### Quotes
```markdown
> This is a blockquote. Great for highlighting key insights or customer quotes.
```

### Code
```markdown
Inline `code` looks like this.

Code blocks:
\`\`\`
Multiple lines
of code here
\`\`\`
```

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

---

## Adding Images

### Step 1: Upload the Image

1. Put your image file in: `public/images/blog/`
2. Use a descriptive filename: `supply-chain-dashboard.png`
3. Recommended formats: `.png`, `.jpg`, `.webp`
4. Keep images under 500KB for fast loading (compress if needed)

### Step 2: Add to Your Article

```markdown
![Description of the image](/images/blog/your-image-name.png)
```

### Image Examples

**Basic image:**
```markdown
![Alora dashboard showing PO tracking](/images/blog/po-tracking-dashboard.png)
```

**Image with caption (use italics below):**
```markdown
![Supply chain visibility dashboard](/images/blog/visibility-dashboard.png)
*The Alora dashboard provides real-time visibility into your supply chain.*
```

### Image Tips

- Use descriptive alt text (the part in square brackets) - it helps with SEO and accessibility
- Recommended width: 1200px (will be resized automatically)
- Use PNG for screenshots, JPG for photos
- Compress images at [tinypng.com](https://tinypng.com) before uploading

---

## Complete Article Example

```mdx
---
title: "5 Ways AI is Transforming Procurement in 2024"
description: "Discover how artificial intelligence is revolutionizing procurement operations, from automated supplier communication to predictive risk assessment."
date: "2024-12-15"
author: "Idan Ben-Ami"
category: "AI & Technology"
---

The procurement landscape is evolving rapidly. Here's what you need to know about AI's impact.

## 1. Automated Email Processing

Gone are the days of manually reading hundreds of supplier emails.

![AI email processing flow](/images/blog/email-processing-flow.png)
*How AI extracts structured data from unstructured supplier communications.*

Modern NLP models can:
- Classify email intent automatically
- Extract PO numbers, dates, and quantities
- Flag discrepancies for human review

> "We reduced our email processing time by 80% in the first month." — Operations Manager, Medical Device Company

## 2. Predictive Risk Assessment

AI doesn't just react to problems—it predicts them.

| Risk Factor | Traditional | AI-Powered |
|-------------|-------------|------------|
| Detection Time | Days/Weeks | Hours |
| Accuracy | ~60% | ~95% |
| Coverage | Sample-based | All orders |

## Conclusion

The future of procurement is intelligent, automated, and proactive.

---

*Want to see AI-powered procurement in action? [Book a demo](/contact) to learn more.*
```

---

## Publishing Workflow

1. **Create** your `.mdx` file with content
2. **Add images** to `public/images/blog/` if needed
3. **Review** by opening the local dev site (ask developer)
4. **Commit** changes to git (ask developer to push)
5. **Live** — Vercel automatically deploys on push

## File Naming Convention

Use lowercase, hyphen-separated names:
- `why-spreadsheets-fail-supply-chains.mdx`
- `ai-procurement-trends-2024.mdx`
- `case-study-medical-device-company.mdx`

**Avoid:**
- Spaces in filenames
- Special characters (except hyphens)
- Very long names (keep under 50 characters)

---

## Need Help?

- **Categories/Authors**: Edit `_config.yaml` in this folder
- **Technical issues**: Contact the development team
- **Content questions**: The marketing team can help with tone and style
