# DESIGN SYSTEM — micaeldev

> **Document Status:** Draft v1.0  
> **Purpose:** Define the visual language and interaction principles of the micaeldev personal website.  
> **Primary Consumer:** AI coding agent (Antigravity) and human developer.

---

## 1. Design Objective

The design should communicate:

- Modernity
- Technical curiosity
- Personal identity
- Clean professionalism
- Approachability
- Adaptability
- A sense of continuous learning

The website should feel like a **modern personal technology portfolio**, not a generic corporate website and not an exaggerated "cyberpunk developer" template.

### Core design principle

> **Modern enough to feel memorable, restrained enough to remain professional.**

Visual effects must support the content and identity. They must never become the identity by themselves.

---

## 2. Visual Direction

The approved high-level direction is:

- Minimal
- Modern
- Clean
- Professional
- Personal
- Light-blue / cyan-oriented
- Gradient-based accents
- Subtle transparency
- Selective glass-inspired surfaces
- Soft visual depth
- Smooth, restrained motion

The visual language should create a feeling of:

> **clear technology + calm confidence + personal warmth**

---

## 3. Reference Interpretation

The owner provided a navigation screenshot as a visual reference.

The reference establishes the following ideas:

- Navigation is located in the upper-right area.
- Navigation is simple and horizontally arranged.
- Text is clean and easy to read.
- The header does not contain excessive visual decoration.
- The overall interface is minimal.

The reference is **not** a pixel-perfect implementation target.

Do not reproduce the screenshot exactly.

Do not copy its typography, dimensions, colors, or implementation unless explicitly requested.

---

## 4. Layout Philosophy

The layout should use strong hierarchy and generous whitespace.

Preferred principles:

- Clear content hierarchy.
- Comfortable horizontal margins.
- Consistent maximum content width.
- Sections should have breathing room.
- Avoid excessive content density.
- Avoid unnecessary full-width decorative elements.
- Maintain alignment between major sections.
- Keep important content visually dominant over decoration.

### Desktop

The main content should generally be centered within a controlled maximum width.

### Mobile

The design must be intentionally responsive rather than simply shrinking the desktop layout.

Navigation, typography, cards, spacing, and interactive elements must remain comfortable on smaller screens.

---

## 5. Navigation

### Position

The primary navigation belongs toward the **upper-right portion of the header** on desktop.

Initial navigation:

- Home
- Projects
- Certifications
- About
- Contact

### Behavior

The navigation should:

- Be visually lightweight.
- Have clear hover states.
- Have a clear active/current state.
- Maintain sufficient spacing between links.
- Avoid oversized buttons for ordinary navigation links.
- Remain readable against the background.

### Mobile

On mobile, the navigation may transform into a compact menu if required by the final layout.

Do not force desktop navigation into a cramped mobile row.

### Navigation rule

> Navigation should help users orient themselves, not become the primary visual attraction.

---

## 6. Color Direction

### Approved direction

The color system should be based around **light blue / cyan tones** with gradient accents.

The exact palette is intentionally **not finalized yet**.

Do not invent a final hex palette until the owner explicitly approves it.

### Desired characteristics

The final palette should support:

- Light and airy surfaces.
- Subtle blue/cyan gradients.
- Strong readable text.
- Good contrast.
- Modern technology aesthetics without looking overly futuristic.
- Professional appearance.

### Gradient philosophy

Gradients should be:

- Soft
- Controlled
- Purposeful
- Consistent

Gradients may be used for:

- Hero accents
- Buttons
- Highlights
- Borders
- Background glows
- Selected text effects
- Decorative visual depth

Do not apply gradients to every element.

### Important restriction

Do not introduce unrelated dominant colors such as purple, red, orange, or neon green as primary brand colors without an explicit design decision.

Small supporting colors may eventually be used for functional states such as success, warning, or error.

---

## 7. Transparency and Glass-Inspired Surfaces

Transparent and glass-inspired UI is approved as a **supporting visual technique**.

Use it selectively for elements such as:

- Navigation container
- Cards
- Floating UI
- Secondary panels
- Decorative overlays

Preferred characteristics:

- Subtle transparency
- Soft borders
- Moderate blur
- Controlled contrast
- Clear readability

Avoid excessive glassmorphism.

Do not create every element as a translucent floating glass card.

### Principle

> Glass is an accent, not the entire interface.

---

## 8. Background Direction

The initial background should remain visually clean enough to preserve readability.

Future background possibilities include:

1. Professional personal photography.
2. Carefully designed abstract visual backgrounds.
3. Subtle animated backgrounds.
4. Soft gradient lighting.
5. Minimal technological visual elements.

These are optional future enhancements.

### Background rule

A background must never reduce readability of text or make the website feel visually noisy.

If a professional photo is introduced later:

- It must support the personal identity.
- Text contrast must remain strong.
- Overlay treatment may be used.
- The image must not dominate the entire page unnecessarily.

If animation is introduced:

- It must be subtle.
- It must not distract from content.
- It should not significantly harm performance.

---

## 9. Typography

The typography system is not fully finalized yet.

The final typeface should prioritize:

- Modern appearance
- Excellent readability
- Professional character
- Strong hierarchy
- Good support for desktop and mobile

### Hierarchy

The design should clearly distinguish:

- Display / Hero heading
- Section heading
- Subheading
- Body text
- Metadata
- Navigation
- Buttons / interactive labels

Avoid using too many font families.

Prefer a small, consistent type system.

---

## 10. Cards

Cards may be used for:

- Projects
- Certifications
- Skills
- Activities
- Other structured information

Cards should generally have:

- Clear hierarchy
- Controlled radius
- Subtle border or surface separation
- Comfortable internal spacing
- Clear hover behavior where interactive
- Consistent dimensions within the same card group

### Card rule

Cards should organize information, not hide it behind excessive decoration.

Avoid:

- Huge shadows
- Excessive glow
- Overly rounded "bubble" designs
- Random card sizes without purpose
- Too many decorative elements

---

## 11. Buttons and Calls to Action

Primary CTAs should be visually identifiable but not aggressive.

Examples may include:

- View Projects
- Explore My Work
- Contact Me
- View GitHub

Preferred behavior:

- Clear label
- Good contrast
- Comfortable click/tap area
- Subtle hover feedback
- Consistent styling

Avoid using multiple competing primary CTA styles on the same section.

---

## 12. Icons

Icons should be used to improve comprehension or provide visual personality.

Rules:

- Use a consistent icon style.
- Avoid mixing unrelated icon styles.
- Do not use icons merely to fill empty space.
- Prefer recognizable symbols.
- Keep icons subordinate to the associated content.

---

## 13. Photography

Photography is not required for the first version.

A professional photo may be introduced later, particularly in:

- Hero
- About section
- Personal profile area

If used, the image treatment should remain consistent with the overall blue/light/translucent visual direction.

Do not distort or excessively stylize a personal photograph without explicit instruction.

---

## 14. Animation Philosophy

Animation is allowed and encouraged **only when it improves the experience**.

Preferred animation characteristics:

- Subtle
- Smooth
- Short
- Purposeful
- Consistent

Good uses:

- Navigation hover
- Button interaction
- Section entrance
- Card hover
- Small background motion
- Page transitions where appropriate

Avoid:

- Constant movement everywhere.
- Large bouncing elements.
- Excessive parallax.
- Distracting particle systems.
- Long loading animations.
- Animation that blocks interaction.
- Animation that significantly harms accessibility or performance.

### Motion principle

> If removing an animation makes the interface clearer, remove the animation.

---

## 15. Hero Section

The Hero is the most important visual area of the homepage.

It should quickly communicate:

1. `micaeldev`
2. Who Micael is.
3. His general technology direction.
4. A clear path to explore his work.

The Hero should feel personal and confident, but not boastful.

Potential content directions include:

- Name / identity
- Computer Science student identity
- Short personal statement
- Technology interests
- CTA to projects or contact

The exact copy is governed by `CONTENT_GUIDELINES.md`.

---

## 16. Section Rhythm

Sections should feel like parts of one continuous visual story.

Use consistent:

- Vertical spacing
- Heading treatment
- Container width
- Alignment
- Surface language

Avoid making every section look like a completely different website.

---

## 17. Responsive Design

Responsive behavior is a first-class requirement.

The website must be usable on:

- Desktop
- Laptop
- Tablet
- Mobile

Important areas to test:

- Navigation
- Hero
- Project cards
- Certification cards
- Text wrapping
- Buttons
- Images
- Background effects
- Footer/contact area

Do not consider the desktop version complete until mobile behavior has been reviewed.

---

## 18. Accessibility and Readability

Visual design must maintain usability.

Requirements:

- Sufficient text contrast.
- Clear focus states.
- Keyboard-accessible interactive elements.
- Buttons and links must be distinguishable.
- Decorative effects must not interfere with reading.
- Avoid relying solely on color to communicate important information.
- Respect reduced-motion preferences where practical.

---

## 19. Performance Principles

Visual quality must not come at the expense of performance.

Be cautious with:

- Large background images
- Video backgrounds
- Heavy animation
- Excessive blur
- Large client-side libraries
- Unnecessary JavaScript
- Too many simultaneous effects

Prefer optimized assets and native/browser capabilities when possible.

---

## 20. Design Drift Prevention

This section is a critical instruction for AI agents.

### The AI agent MUST NOT:

- Redesign the website without explicit instruction.
- Replace the approved visual direction with a different trend.
- Introduce a new dominant color system without approval.
- Convert the design into cyberpunk/neon aesthetics.
- Add excessive glassmorphism.
- Add excessive 3D effects.
- Add excessive particles.
- Add random gradients.
- Change navigation placement without approval.
- Change typography direction without approval.
- Introduce unrelated visual patterns because they are "modern".
- Rewrite unrelated sections while implementing a small visual change.

### When a requested change is local:

Make the smallest reasonable visual change.

Example:

> "Make the project cards less rounded."

Expected behavior:

- Adjust card radius.

Not expected:

- Redesign the entire project section.
- Change the color palette.
- Replace the card system.
- Introduce a new animation style.

---

## 21. Design Hierarchy of Authority

When making visual decisions, use this order:

1. Explicit current user instruction.
2. `DECISIONS.md` entries marked FINAL.
3. This `DESIGN_SYSTEM.md`.
4. `PROJECT_CONTEXT.md`.
5. Existing implementation.
6. General design conventions.

If a new request intentionally changes a previously finalized design decision, the new explicit request may supersede it and should be recorded in `DECISIONS.md`.

---

## 22. Design Tokens

Exact design tokens will be finalized after visual exploration.

Planned token categories:

```text
Colors
Typography
Spacing
Border Radius
Shadows
Borders
Blur
Gradients
Motion
Breakpoints
Container Width
```

Do not hard-code arbitrary values throughout the application when a reusable design token is appropriate.

---

## 23. Current Design Decisions

Currently approved:

- Modern visual direction.
- Minimal and clean interface.
- Light-blue / cyan visual direction.
- Gradient accents.
- Selective transparency.
- Selective glass-inspired surfaces.
- Navbar toward the upper-right on desktop.
- Initial navigation: Home, Projects, Certifications, About, Contact.
- Professional and approachable visual tone.
- Future possibility of professional photography.
- Future possibility of subtle animated backgrounds.

Not yet finalized:

- Exact colors / hex values.
- Final typography.
- Exact border radius.
- Exact shadow system.
- Exact gradient definitions.
- Exact animation durations.
- Exact Hero layout.
- Exact card style.
- Final responsive breakpoints.
- Final design tokens.

---

## 24. Non-Negotiable Principle

> **Do not optimize the design for visual novelty at the expense of Micael's identity, readability, consistency, performance, or professionalism.**

A design change is successful only when it improves the website while remaining recognizably `micaeldev`.
