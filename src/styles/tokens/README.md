# Alora Design Tokens

This directory contains the design token system for the Alora marketing site.

## Architecture

```
tokens/
├── primitives.css   # Raw color values (from Figma)
├── semantic.css     # Theme-aware tokens (light/dark/high-contrast)
├── components.css   # Component-specific tokens
├── index.css        # Main entry point (imports all)
└── README.md        # This file
```

## Token Layers

### 1. Primitives (`primitives.css`)

Raw color values from the Figma design system. **Never use these directly in components.**

```css
/* Example */
--primitive-green-500: #4D996D;
--primitive-cyan-500: #51DABA;
```

**Palette Groups:**
- Green (50-1000) - Brand primary
- Cyan (300, 500, 800) - Accent
- Pink (300, 600) - Accent
- Status colors (success, warning, danger, info)
- Gradient stops

### 2. Semantic Tokens (`semantic.css`)

Theme-aware tokens that reference primitives. **Use these in components.**

```css
/* Light mode */
--primary: var(--primitive-green-600);

/* Dark mode */
.dark {
  --primary: var(--primitive-green-500);
}
```

**Token Categories:**
- Core: `--background`, `--foreground`, `--card`, `--popover`
- Brand: `--primary`, `--secondary`, `--accent`
- Feedback: `--success`, `--warning`, `--destructive`, `--info`
- Status badges: `--status-success-bg`, `--status-warning-text`, etc.
- Borders: `--border`, `--input`, `--ring`
- Charts: `--chart-1` through `--chart-5`
- Overlays: `--backdrop`, `--gradient-hero`

### 3. Component Tokens (`components.css`)

Component-specific tokens for buttons, cards, inputs, etc.

```css
--button-inverted-bg: var(--primitive-white);
--card-bg-subtle: color-mix(in srgb, var(--card) 60%, transparent);
```

## Usage in Components

### Tailwind Classes (Preferred)

```tsx
// Using Tailwind utilities mapped to tokens
<div className="bg-primary text-primary-foreground" />
<div className="bg-card border-border" />
<span className="badge-success" />
```

### Direct CSS Variables

```tsx
// When Tailwind doesn't have a utility
<div style={{ background: 'var(--gradient-hero)' }} />
```

### Custom Utility Classes

Available in `globals.css`:

```tsx
// Hero gradient
<div className="bg-hero-gradient" />

// Status badges
<span className="badge-success">On Track</span>
<span className="badge-warning">Review</span>
<span className="badge-danger">At Risk</span>

// Card variants
<div className="card-subtle" />

// Blog placeholders
<div className="blog-placeholder-1" />
```

## Theme Support

### Light Mode (Default)

Applied to `:root` - no class needed.

### Dark Mode

Add `.dark` class to `<html>` or a parent element.

```tsx
<html className="dark">
```

### High Contrast Mode

Add `.high-contrast` class for accessibility.

```tsx
<html className="high-contrast">
```

### Reduced Motion

Add `.reduce-motion` class to disable animations.

```tsx
<html className="reduce-motion">
```

## Adding New Tokens

1. **Primitive** (raw value): Add to `primitives.css`
2. **Semantic** (theme-aware): Add to `semantic.css` with light/dark variants
3. **Component** (specific use): Add to `components.css`
4. **Tailwind mapping**: Add to `@theme inline` block in `globals.css`

## Figma Sync

Primitives are exported from Figma and stored in:
- `shared/Mode 1.tokens.json` - Primitive palette
- `shared/Tokens/Light mode.tokens.json` - Light theme mapping
- `shared/Tokens/Dark mode.tokens.json` - Dark theme mapping

When updating from Figma:
1. Export new JSON files
2. Update `primitives.css` with new values
3. Update `semantic.css` if mappings changed

## Color Reference

### Brand Greens
| Token | Hex | Usage |
|-------|-----|-------|
| `green-50` | #F0F7F3 | Backgrounds, muted |
| `green-300` | #D1EDDC | Borders, subtle |
| `green-500` | #4D996D | Primary (dark mode) |
| `green-600` | #3A7352 | Primary (light mode) |
| `green-800` | #264C36 | Text secondary |
| `green-1000` | #011A0C | Text primary, dark bg |

### Accents
| Token | Hex | Usage |
|-------|-----|-------|
| `cyan-500` | #51DABA | Charts, highlights |
| `pink-600` | #CC707C | Charts, warnings |

### Status
| Type | Background | Text |
|------|------------|------|
| Success | #DCFCE7 | #166534 |
| Warning | #FFFBEB | #B45309 |
| Danger | #FEF2F2 | #B91C1C |
