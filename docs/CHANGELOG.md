# CHANGELOG — micaeldev

> **Purpose:** Record meaningful changes and milestones in the micaeldev personal website project.

---

## [0.8.0] — 2026-09-03

### Verified
- Executed comprehensive Phase 7 Quality Assurance audit.
- TypeScript & Linting: Zero errors, zero warnings.
- Production Build: Turbopack compiled and verified; all 5 routes (`/`, `/projects`, `/certifications`, `/about`, `/contact`) prerendered as static HTML.
- Live Route Verification: Verified all 5 routes load successfully with proper titles, metadata, and shared Navbar/Footer.
- Content Authenticity: Confirmed 100% genuine information with zero fabricated projects, certifications, metrics, or links.
- Accessibility & Usability: Validated semantic hierarchy, visible focus rings, ARIA states, reduced motion compliance, and touch targets.
- Security & Secrets: Clean repository state, appropriate `.gitignore` rules, zero leaked credentials.

### Documentation
- Recorded DD-042 (Final Quality Assurance Sign-Off) in `DECISIONS.md`.

---

## [0.7.0] — 2026-09-03

### Improved
- Added active route indication in `Navbar` via `usePathname()` with `aria-current="page"` accessibility.
- Updated Hero CTA links from homepage anchors to dedicated routes (`/projects`, `/about`).
- Added `scroll-behavior: smooth` to `html` (respects existing `prefers-reduced-motion` rule).
- Added `scroll-margin-top: 5rem` on `section[id]` to prevent sticky navbar from obscuring anchor targets.
- Tightened container padding on mobile (`px-4 sm:px-6`) for better edge spacing on narrow viewports.
- Increased mobile navigation touch targets from `py-2` to `py-2.5` for comfortable tappability.

### Documentation
- Recorded DD-041 (Responsive & Interaction Refinement) in `DECISIONS.md`.

### Verified
- `npm run lint` — passed with zero errors and zero warnings.
- `npm run build` — compiled successfully; prerendered all 5 routes as static content.

---

## [0.6.0] — 2026-09-03

### Added
- Created dedicated App Router routes:
  - `/projects`: Dedicated projects showcase consuming `data/projects.ts`.
  - `/certifications`: Honest empty-state placeholder ("Segera Hadir") without fabricated certificates.
  - `/about`: Expanded personal narrative, skills, community, and personal interests consuming existing data modules.
  - `/contact`: Dedicated contact page with verified GitHub and LinkedIn links.
- Updated `Navbar` links to route to dedicated pages (`/`, `/projects`, `/certifications`, `/about`, `/contact`).
- Moved `Footer` into root layout (`app/layout.tsx`) for global site consistency across all routes.
- Added descriptive metadata to each dedicated page route.

### Documentation
- Recorded DD-040 (Dedicated Route Architecture) in `DECISIONS.md`.
- Resolved open decision OD-006 (Final Page Structure).

### Verified
- `npm run lint` — passed with zero errors and zero warnings.
- `npm run build` — compiled successfully; prerendered all 5 routes (`/`, `/about`, `/certifications`, `/contact`, `/projects`) as static content.

---

## [0.5.0] — 2026-09-03

### Added
- Created typed static data modules in `data/`:
  - `data/projects.ts`: `Project` model and 5 verified projects.
  - `data/skills.ts`: `SkillGroup` model, categorized skills, and shared `interests` array.
  - `data/community.ts`: `CommunityItem` model for organizations/communities and `activityHighlights`.
  - `data/social.ts`: `SocialLink` model with verified GitHub and LinkedIn URLs.
- Refactored section components (`FeaturedProjects`, `Skills`, `Community`, `Contact`, `Footer`, `Hero`) to consume static data directly.
- Removed `data/.gitkeep`.

### Documentation
- Recorded DD-039 (Static TypeScript Data Layer Separation) in `DECISIONS.md`.

### Verified
- `npm run lint` — passed with zero errors and zero warnings.
- `npm run build` — compiled and generated static pages successfully in Turbopack.

---

## [0.4.0] — 2026-09-03

### Added
- Created `Introduction` section (`components/sections/Introduction.tsx`) with verified biographical context in Bahasa Indonesia.
- Created `FeaturedProjects` section (`components/sections/FeaturedProjects.tsx`) with 5 verified projects from `PROJECT_CONTEXT.md`.
- Created `Skills` section (`components/sections/Skills.tsx`) with three categories: Technologies Used, Currently Learning, Areas of Interest.
- Created `Community` section (`components/sections/Community.tsx`) with verified organizations, communities, and activity highlights.
- Created `Contact` section (`components/sections/Contact.tsx`) with verified GitHub and LinkedIn links.
- Created `Footer` component (`components/sections/Footer.tsx`) with brand identity, copyright, and social links.
- Composed all sections into a cohesive homepage (`app/page.tsx`).

### Verified
- `npm run lint` — passed with zero errors.
- `npm run build` — compiled and generated static pages successfully.

---

## [0.3.0] — 2026-09-03

### Added
- Created `Navbar` component (`components/layout/Navbar.tsx`) with brand identity, desktop navigation links, and responsive mobile toggle.
- Created `Hero` component (`components/sections/Hero.tsx`) with verified personal information in Bahasa Indonesia, gradient text headline, interest badges, and primary/secondary CTAs.
- Integrated `Navbar` into root layout (`app/layout.tsx`).
- Replaced temporary Phase 2 preview page with homepage structure in `app/page.tsx`.
- Added subtle CSS background gradient orbs for depth without heavy assets or script libraries.

### Documentation
- Recorded DD-036 (Navbar Architecture & Brand Placement) and DD-037 (Hero Composition & Content Hierarchy) in `DECISIONS.md`.
- Resolved open decision OD-003 (Hero Composition).

### Verified
- `npm run lint` — passed with zero errors and zero warnings.
- `npm run build` — compiled and generated static pages successfully.

---

## [0.2.0] — 2026-09-03

### Added
- Established color system: sky-blue/cyan primary palette on slate neutrals (`globals.css` @theme).
- Configured Inter font via `next/font/google` in root layout.
- Created design tokens: colors, border radius, shadows, gradients, transitions.
- Added base styles: body colors, focus-visible ring, selection color, reduced-motion support.
- Created UI primitives: `Button` (primary/outline), `Card` (hover/static), `Badge`.
- Created layout primitives: `Container` (max-width + padding), `SectionWrapper` (section spacing).
- Added design system preview page for token and component verification.

### Documentation
- Recorded DD-032 (Color Palette), DD-033 (Typography), DD-034 (Card Language), DD-035 (Motion Foundations) in DECISIONS.md.
- Resolved open decisions OD-001, OD-002, OD-004. Partially resolved OD-005.

### Verified
- `npm run lint` — passed with no errors.
- `npm run build` — compiled and generated static pages successfully.

---

## [0.1.0] — 2026-09-03

### Added
- Initialized Next.js 16.3.4 project with App Router.
- Configured TypeScript, Tailwind CSS 4, ESLint, and PostCSS.
- Created minimal root layout (`app/layout.tsx`) with project metadata.
- Created minimal verification page (`app/page.tsx`).
- Created `globals.css` with Tailwind import.
- Created `.gitignore` for Next.js project.
- Created `README.md` with tech stack and development commands.
- Established project directory structure: `app/`, `components/{ui,layout,sections}/`, `data/`, `public/{fonts,icons,images}/`, `docs/`.

### Verified
- `npm run lint` — passed with no errors.
- `npm run build` — compiled and generated static pages successfully.

---

## [Unreleased]

### Project Planning
- Established `micaeldev` as the personal brand/display identity.
- Defined the website as a personal portfolio and professional web presence.
- Established the website's role in supporting future academic and professional opportunities.
- Documented Micael's personal narrative, interests, projects, activities, and career direction.
- Established authenticity and no-fabrication principles for AI-generated content.

### Design Direction
- Established a modern, minimal, clean, professional, and personal visual direction.
- Established light-blue / cyan as the primary visual direction.
- Established soft gradient accents.
- Approved selective transparency and glass-inspired surfaces.
- Established upper-right desktop navigation as the initial navigation direction.
- Identified professional photography and subtle animated backgrounds as possible future enhancements.
- Explicitly rejected uncontrolled visual drift toward excessive cyberpunk, neon, 3D, particles, or glassmorphism.

### Technical Direction
- Selected Next.js.
- Selected React.
- Selected TypeScript.
- Selected Tailwind CSS.
- Selected Next.js App Router.
- Selected GitHub for source hosting.
- Selected Vercel as the intended deployment target.
- Established a preference for minimal dependencies and maintainable architecture.

### Documentation
- Created `PROJECT_CONTEXT.md`.
- Created `DESIGN_SYSTEM.md`.
- Created `CONTENT_GUIDELINES.md`.
- Created `ARCHITECTURE.md`.
- Created `DEVELOPMENT_RULES.md`.
- Created `DECISIONS.md`.

---

## Versioning Guidelines

Use this changelog for meaningful project milestones.

Recommended categories:

### Added
New functionality, sections, pages, components, or major capabilities.

### Changed
Meaningful changes to existing behavior, design, architecture, or content.

### Fixed
Bug fixes or corrections.

### Removed
Features, dependencies, or content intentionally removed.

### Documentation
Meaningful updates to project documentation.

### Deployment
Production deployment, domain, hosting, or release milestones.

---

## Entry Format

Future entries should generally follow:

```text
## [Version or Date]

### Added
- ...

### Changed
- ...

### Fixed
- ...

### Removed
- ...

### Documentation
- ...

### Deployment
- ...
```

Only include categories that contain meaningful changes.

---

## Milestone Roadmap

The following is a planning reference rather than a claim that these milestones are already complete.

### Milestone 0 — Foundation
- [x] Personal identity established.
- [x] Website purpose established.
- [x] Initial content direction established.
- [x] Initial design direction established.
- [x] Technology stack selected.
- [x] Project documentation foundation created.

### Milestone 1 — Visual System
- [x] Final color palette.
- [x] Final typography.
- [x] Final spacing system.
- [x] Final radius system.
- [x] Final shadow/border system.
- [x] Final gradient system.
- [x] Final motion principles.
- [ ] Final responsive design rules.

### Milestone 2 — Project Initialization
- [x] Initialize Next.js project.
- [x] Configure TypeScript.
- [x] Configure Tailwind CSS.
- [x] Establish source structure.
- [x] Establish linting/formatting.
- [x] Establish base application shell.

### Milestone 3 — Core UI
- [x] Navbar.
- [x] Hero.
- [x] About.
- [x] Projects.
- [ ] Certifications.
- [x] Activities / Experience.
- [ ] Beyond Code.
- [x] Contact.
- [x] Footer.

### Milestone 4 — Responsive & Interaction
- [x] Desktop QA.
- [x] Tablet QA.
- [x] Mobile QA.
- [x] Navigation behavior.
- [x] Hover states.
- [x] Focus states.
- [x] Approved animations.

### Milestone 5 — Content & Assets
- [x] Verified project content.
- [ ] Verified certification data.
- [x] Verified activity data.
- [ ] Approved personal photography, if used.
- [ ] Optimized project images.
- [ ] Favicon and metadata assets.

### Milestone 6 — Production Readiness
- [x] SEO metadata.
- [ ] Open Graph metadata.
- [ ] Sitemap.
- [ ] Robots configuration.
- [x] Accessibility review.
- [x] Performance review.
- [x] Production build verification.

### Milestone 7 — Deployment
- [ ] Git repository finalized.
- [ ] GitHub repository published.
- [ ] Vercel project configured.
- [ ] Production deployment completed.
- [ ] Live website reviewed.
- [ ] Production issues resolved.

### Milestone 8 — Future Evolution
Potential future work:

- [ ] Project detail pages.
- [ ] Blog / Notes.
- [ ] Professional photography.
- [ ] Subtle animated background.
- [ ] Additional achievements.
- [ ] Additional certifications.
- [ ] Custom domain.
- [ ] Other features based on real needs.

---

## Changelog Integrity

The AI agent must not mark an item as completed unless the work has actually been completed and verified.

Do not write:

```text
- [x] Production deployment
```

until the production deployment has actually occurred.

Likewise, do not claim:

- Successful builds that were not run.
- Completed pages that were not implemented.
- Verified links that were not checked.
- Published projects that were not verified.

The changelog is a historical record and must remain factual.

---

## Final Principle

> **The changelog records what actually happened, not what we intended to happen.**
