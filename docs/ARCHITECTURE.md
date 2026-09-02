# ARCHITECTURE — micaeldev

> **Document Status:** Draft v1.0  
> **Purpose:** Define the technical architecture and structural boundaries of the micaeldev website.  
> **Primary Consumer:** AI coding agent (Antigravity) and human developer.

---

## 1. Architecture Goal

The project should be:

- Maintainable
- Understandable
- Modular
- Responsive
- Easy to extend
- Appropriate for a student portfolio
- Ready for production deployment
- Resistant to unnecessary architectural changes

The architecture should remain simple enough for Micael to understand and continue developing after the initial implementation.

> **Do not introduce complexity unless the project actually needs it.**

---

## 2. Approved Technology Stack

The intended stack is:

| Layer | Technology |
|---|---|
| Framework | Next.js |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Version control | Git |
| Repository | GitHub |
| Deployment | Vercel |

### Routing

Use the **Next.js App Router**.

Do not migrate to the Pages Router unless explicitly requested.

---

## 3. Application Structure

The project should follow a structure broadly similar to:

```text
micaeldev/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── projects/
│   │   └── page.tsx
│   │
│   ├── certifications/
│   │   └── page.tsx
│   │
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
│
├── data/
│   ├── projects.ts
│   ├── certifications.ts
│   ├── experiences.ts
│   ├── skills.ts
│   └── social.ts
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── docs/
│   ├── PROJECT_CONTEXT.md
│   ├── DESIGN_SYSTEM.md
│   ├── CONTENT_GUIDELINES.md
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT_RULES.md
│   ├── DECISIONS.md
│   └── CHANGELOG.md
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

The exact structure may evolve if a concrete requirement justifies it.

Do not create directories merely for the sake of having more directories.

---

## 4. App Router

The `app/` directory is the routing and page-level application layer.

Expected responsibilities:

- Route definitions.
- Page composition.
- Global layout.
- Metadata.
- Global styles.
- Route-specific loading/error handling when needed.

Keep reusable UI components outside `app/` unless they are genuinely route-local.

---

## 5. Root Layout

`app/layout.tsx` should be responsible for application-wide concerns such as:

- HTML structure.
- Global metadata.
- Font setup.
- Global providers if eventually required.
- Shared site shell.

Do not put large page-specific UI inside the root layout.

---

## 6. Homepage

`app/page.tsx` represents the primary homepage.

The homepage should compose major sections rather than containing a large amount of implementation detail.

Conceptually:

```text
app/page.tsx
    │
    ├── Navbar
    ├── Hero
    ├── About
    ├── Focus
    ├── Projects
    ├── Certifications
    ├── Experience / Activities
    ├── Beyond Code
    └── Contact
```

The exact final section list remains subject to the product and design decisions.

---

## 7. Components

Components are divided into three conceptual categories.

### 7.1 UI Components

Reusable low-level interface elements:

```text
components/ui/
├── Button
├── Card
├── Badge
├── SectionHeading
└── ...
```

These should have minimal business/content knowledge.

---

### 7.2 Layout Components

Shared structural elements:

```text
components/layout/
├── Navbar
├── Footer
├── Container
└── ...
```

These control common page structure.

---

### 7.3 Section Components

Major homepage or page-specific content sections:

```text
components/sections/
├── Hero
├── About
├── Projects
├── Certifications
├── Experience
├── BeyondCode
└── Contact
```

Section components may compose reusable UI components.

---

## 8. Component Responsibility

Each component should have one clear primary responsibility.

Avoid giant components containing:

- Navigation
- Project data
- Project cards
- Animations
- Footer
- Multiple unrelated sections

If a component becomes difficult to understand, consider extracting a meaningful subcomponent.

Do not split tiny pieces into separate files solely to make the file tree larger.

---

## 9. Data Architecture

Structured portfolio content should be separated from presentation.

Preferred location:

```text
data/
```

Examples:

```text
data/projects.ts
data/certifications.ts
data/experiences.ts
data/skills.ts
data/social.ts
```

Example conceptual structure:

```ts
export const projects = [
  {
    title: "...",
    description: "...",
    technologies: [],
    status: "...",
    links: {},
  },
];
```

The exact schema should be established after the final content requirements are known.

---

## 10. Content vs UI

The following separation should be maintained:

```text
DATA
 ↓
SECTION
 ↓
UI COMPONENT
```

For example:

```text
projects.ts
    ↓
ProjectsSection
    ↓
ProjectCard
```

This allows content to be updated without redesigning the component.

---

## 11. Server and Client Components

Use React Server Components by default where compatible with Next.js.

Use `"use client"` only when client-side behavior is genuinely required.

Typical reasons may include:

- Interactive state.
- Browser APIs.
- Event-driven UI requiring client state.
- Client-only animation behavior when required.

Do not mark entire sections as client components simply because one small child component requires client-side behavior.

Prefer keeping the client boundary as small as practical.

---

## 12. Animation Architecture

Animation should be isolated where practical.

If a library such as Framer Motion is introduced, use it intentionally.

Do not make the entire application client-rendered solely to support animations.

Prefer:

```text
Server Section
      ↓
Client Animation Component
```

when that architecture satisfies the requirement.

Animation implementation must follow `DESIGN_SYSTEM.md`.

---

## 13. Styling Architecture

Tailwind CSS is the primary styling approach.

Prefer:

- Reusable utility patterns.
- Design tokens.
- Consistent spacing.
- Consistent typography.
- Reusable component classes where appropriate.

Avoid:

- Large amounts of duplicated CSS.
- Arbitrary values everywhere.
- Inline style objects when Tailwind or a reusable abstraction is appropriate.
- Multiple competing styling systems without justification.

Global CSS should be reserved for truly global behavior, base styles, custom properties, and cases where utility classes are not appropriate.

---

## 14. Design Tokens

When the visual system is finalized, reusable design values should be centralized where practical.

Potential categories:

```text
Color
Typography
Spacing
Radius
Shadow
Blur
Gradient
Motion
Breakpoint
Container
```

The implementation should make it possible to update the visual system without hunting through unrelated components.

---

## 15. Assets

Publicly accessible static assets should generally live under:

```text
public/
```

Suggested organization:

```text
public/
├── images/
├── icons/
└── fonts/
```

Use descriptive filenames.

Avoid names such as:

```text
image1.png
final-final2.png
newphoto.png
test.png
```

Prefer meaningful names such as:

```text
micael-profile.webp
smartqbank-preview.webp
sorting-simulator.webp
```

---

## 16. Image Strategy

Use Next.js image optimization when applicable.

Personal photographs and project screenshots should be optimized for web delivery.

Avoid unnecessarily large original files in production.

Do not load large background images or video unless they provide meaningful value.

---

## 17. Routing Strategy

Initial route direction:

```text
/
├── /projects
├── /certifications
├── /about
└── /contact
```

Potential future routes:

```text
/projects/[slug]
/blog
/blog/[slug]
```

Do not create dynamic routes until they are actually needed.

---

## 18. Homepage and Dedicated Pages

The homepage should provide a coherent overview.

Dedicated pages should be used when content benefits from additional depth.

Examples:

- A project with a detailed case study.
- A long-form article.
- A detailed certification collection.

Do not create a dedicated page merely because a section exists.

---

## 19. SEO Architecture

The application should support:

- Page metadata.
- Descriptive titles.
- Descriptions.
- Open Graph metadata.
- Appropriate heading hierarchy.
- Sitemap.
- Robots configuration where needed.
- Descriptive URLs.

SEO should describe the actual content of the website.

Do not use keyword stuffing.

Do not make unsupported SEO claims.

---

## 20. Accessibility Architecture

Accessibility should be considered at the component level.

Requirements include:

- Semantic HTML.
- Keyboard accessibility.
- Visible focus states.
- Appropriate labels.
- Meaningful alt text.
- Proper heading hierarchy.
- Sufficient color contrast.
- Reduced-motion consideration.

Interactive elements should use semantic elements such as buttons and links rather than clickable generic containers.

---

## 21. Responsive Architecture

Responsive behavior should be implemented using the established Tailwind responsive system.

Do not create separate desktop and mobile applications.

Prefer a shared component structure with responsive styling and behavior.

Components should adapt rather than duplicate entire interfaces.

---

## 22. Dependency Philosophy

Keep dependencies minimal.

Before adding a package, determine:

1. Is the functionality actually required?
2. Can the requirement be implemented cleanly with existing tools?
3. Does the package introduce unnecessary complexity?
4. Is the package maintained and appropriate for the project?
5. Does it significantly increase client-side JavaScript?

Do not add libraries simply because they are popular.

---

## 23. State Management

The initial project does not require global state management unless a real requirement appears.

Avoid introducing Redux, Zustand, or similar libraries without a concrete need.

Simple local state should remain local.

---

## 24. Backend Direction

The initial website is primarily a frontend/content-driven personal website.

Do not introduce a database, authentication system, or custom backend unless a future feature actually requires it.

Potential future backend features may be evaluated independently.

---

## 25. Forms

If a contact form is introduced, the implementation should be evaluated based on the actual deployment and email-handling requirements.

Do not create a fake contact form that appears functional but does not deliver messages.

A simple email/social-link contact section is acceptable for the initial version.

---

## 26. Error Handling

The application should provide sensible behavior for:

- Missing project data.
- Invalid links.
- Missing images.
- Unknown routes.
- Build-time errors.
- Runtime errors where relevant.

Do not silently hide serious errors.

---

## 27. TypeScript Rules

Use TypeScript consistently.

Prefer explicit types for:

- Structured data.
- Component props.
- Reusable interfaces.
- API responses when APIs are introduced.

Avoid excessive use of `any`.

If `any` is unavoidable temporarily, document why and replace it when practical.

---

## 28. Naming Conventions

Use consistent naming.

Recommended:

- React components: `PascalCase`
- Functions/variables: `camelCase`
- Constants: project-consistent convention
- Routes: lowercase URL-friendly names
- Data files: descriptive lowercase names
- Types/interfaces: `PascalCase`

Avoid inconsistent naming such as:

```text
projectcard.tsx
Project_card.tsx
PROJECTCARD.tsx
```

within the same architecture.

---

## 29. Import Boundaries

Prefer clear dependency direction:

```text
Page
 ↓
Section
 ↓
UI Component
```

Data may be consumed by sections/components as appropriate.

Low-level UI components should not import page-specific sections.

Avoid circular dependencies.

---

## 30. No Unnecessary Refactoring

When implementing a requested change:

1. Identify the smallest affected area.
2. Modify only what is necessary.
3. Preserve unrelated working code.
4. Avoid broad refactors unless requested or clearly required.
5. Test the affected functionality.

A small UI request should not trigger an unrelated architecture rewrite.

---

## 31. Architecture Change Protocol

A significant architectural change includes:

- Changing framework.
- Changing router architecture.
- Replacing styling systems.
- Introducing a database.
- Introducing global state.
- Reorganizing the entire source tree.
- Adding a major dependency.
- Converting a large portion of server components to client components.

Before such a change, the AI agent should:

1. Explain why the change is needed.
2. Identify affected areas.
3. Explain alternatives if relevant.
4. Request approval when the change is not explicitly requested.
5. Record an approved architectural decision in `DECISIONS.md`.

---

## 32. Development Environment

The project should be runnable using the standard Next.js development workflow.

Expected commands will generally include:

```bash
npm install
npm run dev
npm run build
npm run start
```

Additional scripts may be added when needed, such as linting or formatting.

Do not assume commands exist without checking `package.json`.

---

## 33. Git Architecture

Git should track source code and project configuration.

Do not commit:

- `node_modules/`
- Build output.
- Environment secrets.
- Local IDE files when inappropriate.
- Temporary generated files.

Sensitive environment variables must not be committed.

---

## 34. Environment Variables

If environment variables are required:

- Use `.env.local` for local secrets.
- Provide a safe `.env.example` containing variable names but no secrets.
- Never commit secret API keys.
- Never expose server-only secrets to client-side code.

---

## 35. Deployment Architecture

Target deployment:

```text
Local Development
       ↓
Git
       ↓
GitHub
       ↓
Vercel
       ↓
Production Website
```

The application should remain compatible with the chosen Vercel deployment strategy.

---

## 36. Architecture and Design Separation

Architecture decisions must not automatically change the visual identity.

For example:

> Migrating a component internally must not change its visual appearance unless explicitly requested.

Similarly:

> A visual redesign must not trigger unnecessary framework or folder restructuring.

Keep technical concerns and visual concerns separate.

---

## 37. Architecture Authority

When architectural decisions conflict, use this order:

1. Explicit current user instruction.
2. `DECISIONS.md` entries marked FINAL.
3. This `ARCHITECTURE.md`.
4. `PROJECT_CONTEXT.md`.
5. Existing implementation.
6. General framework conventions.

A significant change should be recorded when approved.

---

## 38. Architecture Anti-Drift Rules

The AI agent MUST NOT:

- Migrate away from Next.js without explicit approval.
- Replace TypeScript with JavaScript without approval.
- Replace Tailwind CSS without approval.
- Replace App Router with Pages Router without approval.
- Introduce unnecessary backend infrastructure.
- Introduce unnecessary state management.
- Add large dependencies for trivial functionality.
- Rewrite the project structure to solve a small local issue.
- Make the entire app client-side without a clear reason.
- Duplicate desktop/mobile applications.
- Remove working architecture without justification.

---

## 39. Final Architecture Principle

> **Keep the architecture boring where it should be boring, and make the user experience memorable where it matters.**

The technical architecture exists to support the product.

Do not add complexity merely to demonstrate technical sophistication.
