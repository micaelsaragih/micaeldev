# VISUAL_DIRECTION.md

> **Purpose:** A compact visual reference for the micaeldev website.
> This file exists to reduce design drift without creating unnecessary documentation overhead.
>
> **Important:** This is a visual direction document, not a final pixel-perfect design specification.
> If a newer explicit user instruction conflicts with this file, follow the newer instruction and update the relevant decision afterward.

---

## 1. Core Visual Identity

The website should feel:

- Modern
- Minimal
- Clean
- Professional
- Personal
- Approachable
- Technically capable without looking overly "techy"

The visual identity should communicate a real student/developer who is actively learning, building projects, participating in communities, and developing communication and leadership skills.

### Avoid

Do not turn the website into:

- A generic developer portfolio template
- A cyberpunk/neon interface
- An excessively futuristic UI
- An overly glassmorphic website
- An excessively 3D website
- A page full of particles or decorative effects
- A page dominated by random gradients
- A page with excessive animation

---

## 2. Color Direction

### Current direction

Use a **light visual foundation** with **blue/cyan as the primary visual family**.

The color system should contain:

- Primary blue
- Cyan/light-blue accent
- Light neutral background
- White or near-white surfaces
- Dark readable text
- Muted secondary text
- Subtle borders
- Controlled gradient usage

### Gradient philosophy

Gradients may be used to create visual identity and depth, especially in:

- Hero areas
- Large background accents
- Selected buttons
- Decorative shapes
- Highlight elements

Gradients should remain controlled and purposeful.

**Do not use a new gradient for every section.**

### Exact colors

The final HEX palette is **not yet finalized**.

Do not invent a permanent palette and treat it as approved. Propose a palette first when the visual system is being finalized.

---

## 3. Layout Philosophy

Prioritize:

- Strong visual hierarchy
- Generous whitespace
- Clear section separation
- Comfortable reading width
- Consistent spacing
- Responsive composition
- Visual balance rather than maximum content density

The page should feel spacious, but not empty.

Avoid unnecessarily complex layouts when a simpler layout communicates the same information better.

---

## 4. Navigation

Desktop navigation should generally be positioned toward the **upper-right area** of the page.

Initial navigation:

`Home · Projects · Certifications · About · Contact`

The navigation should feel:

- Clean
- Lightweight
- Easy to scan
- Consistent with the rest of the interface

On smaller screens, use an appropriate compact/mobile navigation pattern.

The previously shared screenshot is a **visual reference only**. Do not copy it literally.

---

## 5. Typography

Typography should prioritize:

1. Readability
2. Clear hierarchy
3. Professional appearance
4. Personality without excessive decoration

Use a modern sans-serif approach unless a later design decision establishes another typeface.

Typical hierarchy:

- Large, expressive hero heading
- Clear section headings
- Comfortable body text
- Smaller muted metadata

Avoid excessive font sizes, excessive font weights, or decorative typography that reduces readability.

The final font family and exact type scale remain open decisions.

---

## 6. Cards and Surfaces

Cards should be visually simple and useful.

Preferred characteristics:

- Subtle border
- Soft depth/shadow when useful
- Moderate corner radius
- Clear spacing
- Strong content hierarchy
- Optional restrained transparency

Glass/transparency can be used selectively, but it should not become the defining visual treatment of every component.

A card should support the content, not compete with it.

---

## 7. Hero Direction

The hero should quickly communicate:

- Who Micael is
- What he is pursuing
- What he builds/learns
- A sense of personality

The hero should feel visually strong without becoming overloaded.

Possible future visual elements:

- Professional personal photo
- Abstract background
- Subtle animated background
- Controlled gradient lighting

These are **future possibilities**, not requirements for the first implementation.

---

## 8. Motion

Animation should be:

- Smooth
- Subtle
- Purposeful
- Fast enough to preserve responsiveness

Good uses:

- Entrance transitions
- Hover feedback
- Small navigation interactions
- Section reveal
- Button/card feedback

Avoid:

- Constant movement
- Excessive parallax
- Large distracting transformations
- Animation on every element
- Motion that harms accessibility or performance

Respect reduced-motion preferences where applicable.

---

## 9. Responsive Design

The design must work naturally across:

- Desktop
- Tablet
- Mobile

Do not simply shrink the desktop layout.

Instead, allow:

- Navigation restructuring
- Typography scaling
- Grid-to-stack transitions
- Adjusted spacing
- Repositioning of visual elements
- Simplified decorative effects

Mobile should remain intentional and polished.

---

## 10. Design Decision Rule

When implementing a new visual element, ask:

1. Does it support the content?
2. Does it fit the existing visual language?
3. Is it necessary?
4. Is it restrained enough?
5. Does it work responsively?
6. Does it preserve accessibility and performance?

If the answer is mostly no, do not add it.

---

## 11. Priority Order

When visual decisions conflict, prioritize:

**Clarity → Usability → Consistency → Personality → Decoration**

The website should never sacrifice clarity merely to look impressive.

---

## 12. Source of Truth

Use this file together with:

- `PROJECT_CONTEXT.md`
- `DESIGN_SYSTEM.md`
- `DECISIONS.md`
- `DEVELOPMENT_RULES.md`

Do **not** create another Markdown file for every small visual decision.

Small implementation choices should normally stay in the code.

Only meaningful changes to the overall visual direction should be recorded in `DECISIONS.md`.

---

## 13. Agent Instruction

Before making substantial visual changes:

1. Read this file.
2. Check `DECISIONS.md` for approved decisions.
3. Follow `DEVELOPMENT_RULES.md`.
4. Inspect the current implementation before editing.
5. Make the smallest change that achieves the requested result.
6. Do not invent content or permanently approved design decisions.
7. Verify the result visually and technically.

**Do not introduce a new visual style simply because it looks impressive in isolation.**

The goal is not to make every section spectacular.

The goal is to make the entire website feel like **one coherent personal identity: micaeldev**.
