# DECISIONS — micaeldev

> **Document Status:** Active Decision Log  
> **Purpose:** Record important product, design, content, and technical decisions so future iterations remain consistent.  
> **Primary Consumer:** AI coding agent (Antigravity) and human developer.

---

## How to Use This File

This document records decisions that materially affect the direction of the project.

A decision should be recorded when it changes or establishes:

- Product direction.
- Visual identity.
- Architecture.
- Technology stack.
- Navigation.
- Major content structure.
- Major interaction patterns.
- Deployment strategy.

Do not record every small implementation detail.

---

## Decision Status

Use one of these statuses:

- **PROPOSED** — under discussion.
- **APPROVED** — agreed direction but may still be refined.
- **FINAL** — should not be changed without an explicit new decision.
- **SUPERSEDED** — replaced by a newer decision.
- **REJECTED** — considered and intentionally not adopted.

---

# Product Decisions

## DD-001 — Personal Website Identity

**Status:** FINAL

**Decision:**

The website is the personal website and portfolio of Micael Zecsen Saragih.

The primary personal brand/display name is:

`micaeldev`

**Reason:**

The website should establish a recognizable personal identity rather than function only as a generic student CV.

---

## DD-002 — Primary Website Purpose

**Status:** FINAL

**Decision:**

The website will serve as:

1. Micael's personal web presence.
2. A portfolio of projects.
3. A representation of his technical and personal development.
4. A platform supporting professional and academic opportunities, including the Google Student Ambassador application.

**Reason:**

The website should remain useful beyond a single application and continue to grow with Micael.

---

## DD-003 — Authenticity Over Exaggeration

**Status:** FINAL

**Decision:**

The website must represent Micael accurately.

Unverified achievements, experience, statistics, skills, projects, certifications, or professional claims must not be invented.

**Reason:**

The website represents a real person and should build credibility through genuine evidence.

---

# Technology Decisions

## DD-004 — Primary Framework

**Status:** FINAL

**Decision:**

Use **Next.js** as the primary web framework.

**Reason:**

Next.js provides the required React-based application structure, routing, production capabilities, and a natural deployment path to Vercel.

---

## DD-005 — UI Library

**Status:** FINAL

**Decision:**

Use **React** as the UI layer through Next.js.

**Reason:**

The project is component-driven and benefits from React's reusable UI architecture.

---

## DD-006 — Programming Language

**Status:** FINAL

**Decision:**

Use **TypeScript**.

**Reason:**

Type safety improves maintainability and makes structured portfolio data safer to work with.

---

## DD-007 — Styling Framework

**Status:** FINAL

**Decision:**

Use **Tailwind CSS** as the primary styling approach.

**Reason:**

Tailwind supports a consistent design system and efficient iteration while keeping styling close to component implementation.

---

## DD-008 — Routing Architecture

**Status:** FINAL

**Decision:**

Use the **Next.js App Router**.

Do not migrate to the Pages Router unless explicitly decided later.

---

## DD-009 — Deployment Target

**Status:** FINAL

**Decision:**

The intended production deployment target is **Vercel**.

The source repository will be hosted on **GitHub**.

Target flow:

```text
Local Development
        ↓
Git
        ↓
GitHub
        ↓
Vercel
        ↓
Production
```

---

# Navigation Decisions

## DD-010 — Desktop Navigation Position

**Status:** APPROVED

**Decision:**

The primary navigation should be positioned toward the **upper-right area** of the desktop header.

**Reason:**

This follows the visual direction established from the owner's reference while keeping the interface minimal.

---

## DD-011 — Initial Navigation Items

**Status:** APPROVED

**Decision:**

The initial navigation direction is:

```text
Home
Projects
Certifications
About
Contact
```

The exact presentation and responsive behavior remain subject to the design system and implementation.

---

# Design Decisions

## DD-012 — Overall Visual Direction

**Status:** APPROVED

**Decision:**

The visual identity should be:

- Modern.
- Minimal.
- Clean.
- Professional.
- Personal.
- Approachable.
- Technology-oriented without becoming overly futuristic.

---

## DD-013 — Primary Color Direction

**Status:** APPROVED

**Decision:**

The visual system will be based around a **light-blue / cyan-oriented direction**.

Gradient accents are encouraged.

The exact color palette has NOT yet been finalized.

**Important:**

Do not invent a final hex palette and treat it as approved.

---

## DD-014 — Transparency

**Status:** APPROVED

**Decision:**

Subtle transparency and glass-inspired surfaces may be used.

Glassmorphism is a supporting technique, not the entire design language.

---

## DD-015 — Background Evolution

**Status:** APPROVED

**Decision:**

The initial background should remain clean and readable.

Future iterations may introduce:

- Professional photography.
- Abstract visual backgrounds.
- Subtle animated backgrounds.
- Soft gradient lighting.

These enhancements must preserve readability and performance.

---

## DD-016 — Animation Philosophy

**Status:** APPROVED

**Decision:**

Animation may be used to improve interaction and visual quality, but it must remain:

- Subtle.
- Smooth.
- Purposeful.
- Performance-conscious.
- Accessible.

Excessive animation is not part of the approved design direction.

---

## DD-017 — Reference Screenshot

**Status:** FINAL

**Decision:**

The screenshot provided by the owner is a **visual reference**, not an exact design specification.

It establishes inspiration for:

- Minimal navigation.
- Upper-right navigation placement.
- Clean interface.
- Simple visual hierarchy.

It must not be copied pixel-for-pixel unless explicitly requested.

---

# Content Decisions

## DD-018 — Personal Story

**Status:** APPROVED

**Decision:**

The personal story about Micael's early interest in technology, limited access to technology, learning through a mobile phone, entering Computer Science at UNIMED, and eventually obtaining a second-hand laptop may be used as part of the personal narrative.

It should be presented with dignity and authenticity.

Do not exaggerate hardship or turn it into a pity narrative.

---

## DD-019 — Career Direction

**Status:** FINAL

**Decision:**

Micael's current career direction is:

**Programmer / Software Engineer**

The website should not present him as an already-established senior professional.

---

## DD-020 — Technology Interests

**Status:** FINAL

**Decision:**

Primary technology interests are:

- Web Development.
- AI / Machine Learning.
- Cybersecurity.
- Data.

These are interests/exploration areas and should not automatically be represented as professional expertise.

---

## DD-021 — Learning Identity

**Status:** APPROVED

**Decision:**

The website should communicate that Micael is actively learning and building.

Current learning includes:

- React.
- Arduino.
- English improvement.

The concept of continuous learning is an important part of the personal identity.

---

## DD-022 — Beyond-Code Identity

**Status:** APPROVED

**Decision:**

The website should include relevant aspects of Micael beyond programming, including:

- Communication.
- Leadership.
- Organizations.
- Event activities.
- Music / flute.
- Calisthenics / sports.
- Personal development.

**Reason:**

These experiences make the website more representative of Micael as a person and not merely as a list of technologies.

---

# Project Decisions

## DD-023 — Featured Project Candidates

**Status:** APPROVED

Known project candidates include:

1. SmartQBank.
2. Scientific Article Analyzer.
3. Sorting Algorithm Simulator.
4. HMJ Mathematics UNIMED Website.
5. Church Attendance Website.

Final ordering and selection may change after project evidence and visual presentation are reviewed.

---

## DD-024 — Project Presentation

**Status:** FINAL

**Decision:**

Projects should be presented with context rather than only a title and technology list.

Where information is available, project presentation should explain:

- Purpose.
- Problem.
- Micael's role.
- Technologies.
- Status.
- Outcome.
- Repository/demo.

---

# Architecture Decisions

## DD-025 — Data and Presentation Separation

**Status:** FINAL

**Decision:**

Structured portfolio content should be separated from UI presentation.

Preferred direction:

```text
data/
    ↓
sections/
    ↓
components/ui/
```

---

## DD-026 — Server Components by Default

**Status:** FINAL

**Decision:**

Next.js Server Components should be used by default.

Client Components should be introduced only when client-side behavior requires them.

---

## DD-027 — Minimal Dependencies

**Status:** FINAL

**Decision:**

Dependencies should be kept minimal and justified by actual requirements.

Do not add libraries solely because they are popular or fashionable.

---

## DD-028 — No Unnecessary Backend

**Status:** FINAL

**Decision:**

The initial website does not require a database, authentication, or custom backend.

These may be considered later only when a real feature requires them.

---

# Change Management Decisions

## DD-029 — Minimal Change Principle

**Status:** FINAL

**Decision:**

When making an iteration, modify the smallest reasonable scope required to achieve the requested result.

A local change must not trigger an unrelated redesign or refactor.

---

## DD-030 — Significant Changes Must Be Recorded

**Status:** FINAL

**Decision:**

Significant changes to product, design, content architecture, technology, or deployment should be recorded in this file.

---

## DD-031 — Explicit User Direction Can Supersede Older Decisions

**Status:** FINAL

**Decision:**

If the owner explicitly decides to change a finalized decision, the new decision may supersede the previous one.

The old decision should be marked:

`SUPERSEDED`

and the new decision should reference the previous decision when useful.

---

# Design Foundation Decisions (Phase 2)

## DD-032 — Color Palette

**Status:** APPROVED

**Decision:**

The color system uses a sky-blue / cyan palette on a slate neutral scale:

| Token | Value | Purpose |
|-------|-------|---------|
| Primary | `#0284c7` (sky-600) | Buttons, links, accents |
| Primary Hover | `#0369a1` (sky-700) | Hover state |
| Primary Light | `#e0f2fe` (sky-100) | Badges, soft backgrounds |
| Accent | `#06b6d4` (cyan-500) | Gradient endpoints, highlights |
| Background | `#f8fafc` (slate-50) | Page background |
| Surface | `#ffffff` | Cards, surfaces |
| Text | `#0f172a` (slate-900) | Primary text |
| Text Muted | `#64748b` (slate-500) | Secondary text |
| Border | `#e2e8f0` (slate-200) | Borders, dividers |
| Border Hover | `#cbd5e1` (slate-300) | Hover borders |

Primary gradient: `#0284c7 → #06b6d4`

**Reason:**

Sky-600 is approachable and professional without being corporate. The cyan accent creates a cohesive blue family. Slate neutrals provide clean cool-toned backgrounds.

**Related:** Resolves OD-001.

---

## DD-033 — Typography

**Status:** APPROVED

**Decision:**

Use **Inter** loaded via `next/font/google` with `display: swap`.

Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold).

Type scale uses Tailwind defaults: `text-xs` through `text-6xl`.

**Reason:**

Inter is a modern sans-serif optimized for screens with excellent readability and professional character. Next.js built-in font optimization means zero extra dependencies.

**Related:** Resolves OD-002.

---

## DD-034 — Card Language

**Status:** APPROVED

**Decision:**

Cards use: `12px` radius (`--radius-md`), 1px border (`--color-border`), soft shadow (`--shadow-sm`), white background. Hover state: darker border + elevated shadow with 150ms ease transition.

**Related:** Resolves OD-004.

---

## DD-035 — Motion Foundations

**Status:** APPROVED

**Decision:**

Three-tier transition timing: `--transition-fast` (150ms), `--transition-base` (250ms), `--transition-slow` (350ms). All use `ease` easing. Entrance animations and background animation remain open until Phase 6.

Reduced-motion is respected via `prefers-reduced-motion` media query in globals.css.

**Related:** Partially resolves OD-005 (timing/easing established; entrance and background animation remain open).

---

# Homepage Decisions (Phase 3)

## DD-036 — Navbar Architecture & Brand Placement

**Status:** APPROVED

**Decision:**

The Navbar is a sticky header with `z-50`, backdrop blur (`bg-bg/80 backdrop-blur-md`), and a subtle bottom border (`border-border/60`).
- Left: `micaeldev` brand text linking to `/`.
- Right: Desktop nav items (Home, Projects, Certifications, About, Contact) using `text-text-muted` and hover state `hover:text-primary`.
- Mobile: Lightweight collapsible menu toggled via an inline accessible SVG button, avoiding external icon dependencies.

**Reason:**

Preserves clean, lightweight aesthetics without bulky UI frameworks or third-party icon libraries. Ensures consistent alignment via the `Container` primitive.

**Related decisions:** DD-011, DD-012, DD-027.

---

## DD-037 — Hero Composition & Content Hierarchy

**Status:** APPROVED

**Decision:**

The Hero establishes a clear hierarchy using verified facts from `PROJECT_CONTEXT.md` in Bahasa Indonesia:
1. Greeting: "Halo, saya" in primary color.
2. Main Heading: "Micael Zecsen Saragih" with primary-to-accent gradient text fill (`var(--gradient-primary)`).
3. Display Tag: "micaeldev" as secondary brand identifier.
4. Summary Copy: Explaining current study in Mathematics — Computer Science at Universitas Negeri Medan and software engineering direction.
5. Tech Interest Badges: Web Development, AI/ML, Cybersecurity, Data using `Badge`.
6. CTAs: "Lihat Projek" (primary Button) and "Tentang Saya" (outline Button).
7. Background: Subtle, restrained CSS radial/gradient orbs (`opacity-20` and `opacity-10`) with heavy blur to add depth without cyberpunk drift or performance penalties.

**Reason:**

Honest communication of growth without fabricated claims (no fake titles, awards, or statistics). Retains modern restrained aesthetics aligned with Phase 2 foundation.

**Related decisions:** DD-001, DD-002, DD-004, DD-006, DD-007, DD-032. Resolves OD-003.

---

## DD-038 — Homepage Content Sections & Authenticity Boundary

**Status:** APPROVED

**Decision:**

Homepage sections are composed as modular components under `components/sections/`:
- `Introduction.tsx`: Scannable two-column overview of academic focus and learning philosophy.
- `FeaturedProjects.tsx`: Highlights 5 verified projects from `PROJECT_CONTEXT.md` using `Card` and `Badge` primitives with verified prototype tags (no fake metrics, dates, or broken links).
- `Skills.tsx`: Categorized into "Pernah Digunakan", "Sedang Dipelajari", and "Area Ketertarikan" without artificial percentage bars or mastery claims.
- `Community.tsx`: Documents verified campus organizations (HMJ, UKMKP, IKBKM), communities (Calisthenics Medan, Kefas), and activity highlights.
- `Contact.tsx`: Minimal outreach section with verified GitHub and LinkedIn URLs.
- `Footer.tsx`: Semantic footer with copyright and verified social links outside `<main>`.

All user-facing copy uses natural Bahasa Indonesia while keeping technical terms in standard English.

**Reason:**

Preserves authenticity, prevents developer template drift, and strictly enforces the no-fabrication rule.

**Related decisions:** DD-001, DD-003, DD-004, DD-005, DD-006, DD-007, DD-036, DD-037.

---

## DD-039 — Static TypeScript Data Layer Separation

**Status:** APPROVED

**Decision:**

Extracted structured, list-based content from presentation components into lightweight static TypeScript files in `data/`:
- `data/projects.ts`: Defines `Project` model (`title`, `description`, `tags`, optional `status`).
- `data/skills.ts`: Defines `SkillGroup` model (`label`, `items`) and shared `interests` array reused by Hero badges.
- `data/community.ts`: Defines `CommunityItem` model (`name`, `description`) for organizations and communities, plus `activityHighlights`.
- `data/social.ts`: Defines `SocialLink` model (`label`, `href`) shared between Contact and Footer.

Presentation components (`FeaturedProjects`, `Skills`, `Community`, `Contact`, `Footer`, `Hero`) consume these modules directly. Narrative prose in `Hero` and `Introduction` remains component-level.

**Reason:**

Improves content maintainability and type safety while strictly adhering to the no-over-engineering principle (no CMS, no database, no state libraries).

**Related decisions:** DD-001, DD-003, DD-007, DD-036, DD-037, DD-038.

---

## DD-040 — Dedicated Route Architecture

**Status:** APPROVED

**Decision:**

Established dedicated App Router page routes while preserving the primary landing page at `/`:
- `/projects`: Dedicated projects showcase consuming `data/projects.ts`.
- `/certifications`: Honest empty-state placeholder ("Segera Hadir") without fabricated certificates.
- `/about`: Expanded personal narrative, skills, community, and personal interests consuming existing data modules.
- `/contact`: Focused connection page using `data/social.ts` (GitHub and LinkedIn).

The root layout (`app/layout.tsx`) houses both the sticky `Navbar` and shared `Footer`, providing consistent framing across all routes. Navigation links in `Navbar` point to these dedicated routes.

**Reason:**

Gives dedicated spaces for content depth without fragmenting the site identity, duplicating data, or requiring a backend/CMS.

**Related decisions:** DD-011, DD-012, DD-027, DD-036, DD-038, DD-039. Resolves OD-006.

---

## DD-041 — Responsive & Interaction Refinement

**Status:** APPROVED

**Decision:**

Refined the existing design for cross-device usability and interaction consistency:
- **Active route indication**: `usePathname()` used in `Navbar` to highlight the current route. Desktop shows primary-color text; mobile shows `bg-primary-light` background. `aria-current="page"` added for accessibility.
- **Hero CTA links**: Updated from homepage anchors (`#projects`, `#about`) to dedicated routes (`/projects`, `/about`) to align with Phase 5 route architecture.
- **Scroll offset**: `scroll-margin-top: 5rem` on `section[id]` prevents the sticky navbar from obscuring anchored sections.
- **Smooth scrolling**: `scroll-behavior: smooth` on `html` with automatic disable via existing `prefers-reduced-motion` rule.
- **Responsive container padding**: Tightened from `px-6` to `px-4 sm:px-6` for improved mobile edge spacing.
- **Mobile touch targets**: Mobile nav links increased from `py-2` to `py-2.5` for comfortable 44px+ tappability.

**Reason:**

Ensures polished cross-device behavior without introducing new dependencies, redesigns, or visual language changes.

**Related decisions:** DD-035, DD-036, DD-040.

---

## DD-042 — Final Quality Assurance Sign-Off

**Status:** APPROVED

**Decision:**

Successfully completed comprehensive production QA audit:
- **Code Quality & Build**: Zero ESLint errors, zero TypeScript errors, successful Turbopack production build with all 5 static routes (`/`, `/projects`, `/certifications`, `/about`, `/contact`) prerendered.
- **Route & Navigation**: Verified all 5 routes resolve with proper titles, metadata, and shared Navbar/Footer layout.
- **Content Authenticity**: Confirmed zero fabricated projects, certificates, dates, metrics, or links. Verified genuine GitHub and LinkedIn profile links.
- **Accessibility & Usability**: Validated semantic HTML hierarchy, visible focus rings, ARIA states, reduced-motion compatibility, and mobile touch targets.
- **Security & Secrets**: Clean repository state, appropriate `.gitignore` rules, zero leaked credentials or environment variables.

**Reason:**

Confirms the codebase meets all production quality standards and is fully ready for Git repository initialization and Vercel deployment.

**Related decisions:** DD-001 through DD-041.

---

# Iteration 2A — Hero & Visual Identity Refinement

## DD-043 — Hero Two-Column Layout & Profile Photo Integration

**Status:** APPROVED

**Decision:**

Refined the Hero section into a two-column composition on desktop (≥ md breakpoint):

- **Left column:** Existing text content (greeting, gradient name heading, `micaeldev` tag, biography, interest badges, CTAs). A subtle radial gradient using deep navy (`#0c1929`) at ~7% opacity behind the text area improves readability without introducing a visible dark rectangle or altering the light theme.
- **Right column:** User-provided profile photo (`/images/profile.jpg`) displayed via Next.js `<Image>` component with `priority` flag for LCP optimization. Photo frame uses `rounded-2xl`, `shadow-md`, and a very subtle blue glow (`rgba(2, 132, 199, 0.12)`) derived from the existing primary color token.
- **Mobile (< md):** Single column, text first, photo below at a comfortable size.
- **Desktop (≥ md → ≥ lg):** Two-column grid with `grid-cols-[1fr_auto]`, photo progressively sized from 280×340 to 330×400.
- An additional subtle atmospheric gradient orb was added behind the right column (primary blue at 15% opacity) for depth.

No new dependencies were introduced. All existing verified content, design tokens, and color system were preserved.

**Reason:**

The user's profile photo needed natural integration into the Hero while improving text readability. The two-column layout gives the photo visual presence without overpowering the text content hierarchy. The subtle navy gradient enhances contrast against the existing decorative gradient orbs.

**Related decisions:** DD-032, DD-037, DD-015.

# Iteration 2B — Project Identity & Showcase

## DD-044 — Project Identity & Showcase Architecture

**Status:** APPROVED

**Decision:**

Established the project showcase presentation and data structure:
1. **Four Verified Projects Scope**:
   - SIMPAI — Sistem Pembimbing Artikel Ilmiah (Featured)
   - SmartQBank — Sistem Antrean Bank Digital
   - Website HMJ Matematika UNIMED
   - Sorting Visualizer
   Unverified projects (such as Website Absensi Gereja) were removed from the active projects showcase.
2. **Visual Hierarchy (Featured vs. Other)**:
   - SIMPAI is presented as the initial featured project using a visually prominent layout (`FeaturedProjectCard`) with a large screenshot preview (`aspect-[21/10]` / `aspect-[16/9]`), priority loading, hierarchy badge (`01 · Projek Unggulan`), status indicator, and direct CTA.
   - Other projects are presented in a balanced responsive grid (`ProjectCard`) with `aspect-[16/10]` screenshots, status indicator, verified technology badges, and live demo links.
3. **Authenticity Boundaries**:
   - Only verified live demo URLs are linked; no speculative GitHub repositories or fabricated metrics/claims are included.
   - Project statuses truthfully distinguish "Dalam Pengembangan" from "Projek Akademik".
   - Technologies are restricted to verified domains without fabricated tech stacks.
4. **Cohesive Page Experience**:
   - Homepage (`FeaturedProjects.tsx`) provides a curated presentation with the featured card, 3 other project cards, and a navigation link to the full `/projects` page.
   - Dedicated `/projects` route (`app/projects/page.tsx`) provides the complete project portfolio and context on self-directed learning.

**Reason:**

To transform the project portfolio into a credible, visual, and understandable presentation of real work without exaggerating accomplishments or resorting to generic templates.

**Related decisions:** DD-023, DD-024, DD-025, DD-034, DD-038, DD-040.

---

# Current Open Decisions

The following decisions are intentionally **not finalized yet**:

### OD-005 — Motion System (Partial)

Status: PARTIALLY RESOLVED

Resolved:

- Transition durations (DD-035).
- Easing (DD-035).

Still open:

- Entrance animations.
- Background animation rules.

---

# Decision Log Maintenance

When adding a new decision:

Use this structure:

```text
## DD-XXX — Decision Title

Status: PROPOSED / APPROVED / FINAL / SUPERSEDED / REJECTED

Decision:
...

Reason:
...

Impact:
...

Related decisions:
...
```

Keep decisions concise and factual.

---

# Final Principle

> **A decision exists to preserve intentionality.**

Do not treat the decision log as bureaucracy.

Its purpose is to prevent future iterations, AI agents, and contributors from accidentally changing decisions that were deliberately made.
