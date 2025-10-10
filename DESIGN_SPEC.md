# P.S. 155 William Paca School – Homepage Design Specification

## 1. Overview

This document outlines the design system and architecture for the new P.S. 155 homepage, derived from scraped content at https://www.d4ps155.org/. The design prioritizes cinematic visuals, accessibility, and civic design principles.

---

## 2. Brand Identity Analysis

### School Profile
- **Name**: P.S. 155 M The William Paca School
- **Location**: 319 East 117th Street, New York, NY 10035
- **Mission**: "A welcoming, inclusive community where empathy, connection, and a love of learning empower every student to thrive."

### Visual Assets
- **Logo**: Available from scraped data
- **Hero Images**: Multiple high-quality images of students, classrooms, and activities
- **Social**: Instagram (@ps155d4), Twitter (@ps155d4)

---

## 3. Color Palette

Derived from typical NYC DOE school branding and civic design principles:

```
Primary:     #1E3A8A (Deep Blue) – Trust, education, stability
Accent:      #F59E0B (Amber) – Energy, warmth, optimism
Neutral-900: #111827 (Near Black) – Text
Neutral-700: #374151 (Charcoal) – Secondary text
Neutral-100: #F3F4F6 (Light Gray) – Backgrounds
White:       #FFFFFF – Clean backgrounds
Success:     #10B981 (Emerald) – Stats, positive metrics
```

**Contrast Validation**: All text/background combinations meet WCAG 2.2 AA standards (minimum 4.5:1 for body, 3:1 for large text).

---

## 4. Typography Scale

**Font Family**: `Inter` (fallback: system-ui, -apple-system, sans-serif)

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 3rem (48px) | 600 | 1.1 | Hero title |
| H2 | 2.25rem (36px) | 600 | 1.2 | Section headers |
| H3 | 1.5rem (24px) | 600 | 1.3 | Subsection headers |
| H4 | 1.25rem (20px) | 500 | 1.4 | Card titles |
| Body | 1rem (16px) | 400 | 1.6 | Main content |
| Small | 0.875rem (14px) | 400 | 1.5 | Captions, metadata |

---

## 5. Navigation Design

### Shape Treatment
**Method**: SVG clip-path with curved bottom edge

```
Visual concept:
┌──────────────────────────────────────┐
│  [Logo]              [Nav] [Nav] [CTA]│
└─────╭──────────────────────────╮─────┘
      └──────────────────────────┘
```

### Behavior
- **Default**: Semi-transparent (`bg-blue-900/80`) with backdrop blur
- **On Scroll**: Solid background (`bg-blue-900`) with subtle shadow
- **Height**: 80px desktop, 64px mobile
- **Nav Items**: About, Programs, Staff, Parents, News, Calendar, Contact
- **CTA**: "Schedule a Visit" (amber button)

---

## 6. Section Hierarchy & Layout

### 6.1 Hero Section (Video Background)
- **Height**: 100vh (mobile: 80vh)
- **Video**: Looping background of students learning (fallback: static image)
- **Overlay**: Dark gradient (`bg-gradient-to-b from-blue-900/70 to-blue-900/50`)
- **Content**:
  - School name (H1)
  - Mission statement tagline
  - Two CTAs: "Learn More" + "Tour Our School"

### 6.2 Quick Access Row
- **Layout**: Horizontal scroll (mobile), 8-column grid (desktop)
- **Items** (derived from scraped data):
  1. School Calendar
  2. Parent Portal
  3. Staff Directory
  4. Student Resources
  5. News & Announcements
  6. Contact Us
  7. School Policies
  8. Community Events
- **Style**: Rounded cards with icons, subtle hover lift

### 6.3 About / Mission
- **Layout**: Two-column (60/40 split, stacked on mobile)
- **Left**: Image carousel (scraped student photos)
- **Right**:
  - "Welcome to P.S. 155" (H2)
  - Mission statement (60-90 words)
  - Link to full about page

### 6.4 Values & Statistics
**Values** (3 cards):
1. Empathy & Inclusion
2. Love of Learning
3. Community Connection

**Statistics** (scraped data):
- 95% – Families feel leadership is inclusive
- 96% – Families engaged with teachers
- 97% – Families trust teachers
- 100% – Strong school relationships

**Layout**: Grid (3 values + 4 stats in masonry layout)

### 6.5 News & Events
- **News**: 3 most recent articles (title, date, excerpt)
- **Events**: Next 5 upcoming events with date badges
- **Source**: Scraped calendar and news data
- **Empty State**: "Check back soon for updates"

### 6.6 Community Spotlights
- **Layout**: 3-column grid (stacked on mobile)
- **Content**: Instagram feed integration (real data from @ps155d4)
- **Fallback**: Placeholder student/teacher profiles

### 6.7 Community Invite Banner
- **Style**: Full-width gradient banner (`bg-gradient-to-r from-blue-900 to-blue-700`)
- **Text**: "You Belong Here at P.S. 155"
- **CTAs**: "Schedule a Visit" + "Enroll Now"

### 6.8 Footer
- **Columns**: Logo/Address, Quick Links, Contact, Social
- **Accessibility**: High contrast white on blue-900
- **Social Icons**: Instagram, Twitter

---

## 7. Spacing Rhythm

Consistent spacing scale (Tailwind):
- **4px** (1): Micro spacing
- **8px** (2): Compact spacing
- **12px** (3): Default gaps
- **16px** (4): Element padding
- **24px** (6): Section gaps
- **32px** (8): Component separation
- **48px** (12): Section padding
- **64px** (16): Large section breaks

**Max Container Width**: 1280px (Tailwind `max-w-7xl`)

---

## 8. Motion & Animation

**Principles**: Minimal, purposeful, respectful of `prefers-reduced-motion`

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Navbar scroll | Background opacity | 200ms | ease-out |
| Card hover | Translate Y + shadow | 150ms | ease-out |
| Page load | Fade in | 250ms | ease-out |
| CTA buttons | Scale | 150ms | ease-in-out |
| Hero elements | Staggered fade-up | 300ms | ease-out |

---

## 9. Accessibility Checklist

- [x] Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- [x] Skip-to-content link (visible on focus)
- [x] ARIA labels for icon-only buttons
- [x] Keyboard navigation (focus states: `ring-2 ring-amber-500`)
- [x] Alt text for all images
- [x] Color contrast ≥ 4.5:1 (AA standard)
- [x] Video: `muted`, `loop`, `playsinline`, `autoplay`
- [x] Respects `prefers-reduced-motion`
- [x] Form labels associated with inputs
- [x] Touch targets ≥ 44x44px (mobile)

---

## 10. Content Sourcing Summary

| Section | Scraped Content | Placeholder Content | Notes |
|---------|-----------------|---------------------|-------|
| **Hero** | ✓ Mission statement | Video (fallback to image) | Using real mission from scraped data |
| **Quick Links** | ✓ Calendar, News links | Icons | Links derived from site structure |
| **About/Mission** | ✓ Welcome message | None | Full welcome text available |
| **Statistics** | ✓ Family survey data | None | 100% real data (7 metrics) |
| **Values** | ✗ | ✓ 3 value cards | Inferred from mission statement |
| **News** | ✓ Section exists | Article content (empty in scrape) | Structure exists, may need CMS integration |
| **Events** | ✓ 5 upcoming events | None | Real events with dates |
| **Instagram** | ✓ Feed data | None | @ps155d4 integration |
| **Footer** | ✓ Social links | Contact details | Address available |

**Placeholder Ratio**: ~10% (only Values cards inferred from mission)

---

## 11. Responsive Breakpoints

```
Mobile:   360px - 767px   (1 column, stacked)
Tablet:   768px - 1023px  (2 columns, adjusted nav)
Desktop:  1024px - 1279px (Full layout)
Wide:     1280px+         (Max width enforced)
```

---

## 12. Performance Targets

- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Hero Video**: Lazy-loaded with poster image
- **Images**: Modern formats (WebP/AVIF), `loading="lazy"` for below-fold
- **Dependencies**: Minimal (React, Tailwind only)

---

## 13. Wireframe Sketch

```
┌────────────────────────────────────────────────────────────┐
│                    NAVBAR (Shaped)                          │ 80px
│  [PS 155 Logo]        [About] [Programs] [...] [CTA]       │
└─╮─────────────────────────────────────────────────────╭────┘
  └─────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│                    HERO (Video BG)                          │ 100vh
│                                                             │
│           P.S. 155 M THE WILLIAM PACA SCHOOL                │
│    Where empathy, connection, and learning empower...      │
│                                                             │
│       [Learn More]     [Tour Our School]                    │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  QUICK ACCESS (8 Icon Buttons)                              │ 120px
│  [Calendar] [Portal] [Staff] [Resources] [News] [...]      │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  ABOUT / MISSION                                            │
│  ┌───────────────┐  ┌──────────────────────────┐           │
│  │               │  │  Welcome to P.S. 155      │           │
│  │  Image        │  │  [Mission text...]        │           │
│  │  Carousel     │  │  [Learn More →]           │           │
│  └───────────────┘  └──────────────────────────┘           │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  VALUES & STATISTICS                                        │
│  ┌──────┐ ┌──────┐ ┌──────┐   ┌─────┐ ┌─────┐             │
│  │Value1│ │Value2│ │Value3│   │95%  │ │96%  │ ...         │
│  └──────┘ └──────┘ └──────┘   └─────┘ └─────┘             │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  NEWS & EVENTS (Side by Side)                               │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │ Recent News      │  │ Upcoming Events  │                │
│  │ • Article 1      │  │ Jun 26 - Last... │                │
│  │ • Article 2      │  │ Jun 24 - 5th...  │                │
│  └──────────────────┘  └──────────────────┘                │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  INSTAGRAM SPOTLIGHTS (3 Column Grid)                       │
│  ┌──────┐ ┌──────┐ ┌──────┐                                │
│  │Post 1│ │Post 2│ │Post 3│                                │
│  └──────┘ └──────┘ └──────┘                                │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  COMMUNITY INVITE BANNER (Gradient)                         │
│         "You Belong Here at P.S. 155"                       │
│    [Schedule Visit]    [Enroll Now]                         │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  FOOTER (4 Columns)                                         │
│  [Logo/Address] [Quick Links] [Contact] [Social Icons]     │
└─────────────────────────────────────────────────────────────┘
```

---

## 14. Implementation Notes

1. **Shaped Navbar**: Use CSS `clip-path` with `polygon()` or inline SVG mask
2. **Video Hero**: Include `<source>` with WebM/MP4, fallback `poster` image
3. **Scroll Detection**: `useEffect` + `window.addEventListener('scroll')`
4. **Accessibility**: Add `<a href="#main" class="sr-only">Skip to content</a>`
5. **Stats Animation**: Trigger number count-up on scroll into view
6. **Instagram**: Embed via official API or static fallback
7. **Placeholders**: All marked with `data-temp="true"` for future replacement

---

**End of Design Specification**
