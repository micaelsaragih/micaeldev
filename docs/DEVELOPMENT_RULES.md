# DEVELOPMENT RULES — micaeldev

> **Document Status:** Draft v1.0  
> **Purpose:** Define the operating procedure that the AI coding agent (Antigravity) must follow when working on the project.  
> **Priority:** Protect project consistency, prevent accidental changes, and maintain code quality.

---

## 1. Core Rule

> **Understand first. Modify second. Verify third.**

The AI agent must not immediately edit code based only on a short request.

Before making a meaningful change, the agent should understand:

- Current project structure.
- Relevant components.
- Existing design decisions.
- Relevant documentation.
- Existing implementation behavior.
- The exact scope of the requested change.

---

## 2. Documentation Must Be Read Before Major Changes

Before a major implementation or structural change, review the relevant documents:

```text
PROJECT_CONTEXT.md
DESIGN_SYSTEM.md
CONTENT_GUIDELINES.md
ARCHITECTURE.md
DEVELOPMENT_RULES.md
DECISIONS.md
```

Do not blindly read or rewrite every document for a trivial change.

Read the documents relevant to the task.

---

## 3. Current User Instruction Has Highest Priority

When a user explicitly requests a change, follow the request unless it conflicts with a higher-level safety or technical constraint.

However, if the request materially conflicts with an existing FINAL project decision:

1. Identify the conflict.
2. Explain it briefly.
3. Apply the new direction only when the user clearly intends to replace the old decision.
4. Record the new decision in `DECISIONS.md`.

Do not silently override important project decisions.

---

## 4. Inspect Before Editing

Before editing code:

1. Inspect the relevant directory.
2. Locate the relevant file/component.
3. Read enough surrounding code to understand its behavior.
4. Identify dependencies.
5. Determine whether the requested change already partially exists.
6. Check relevant documentation.

Never assume the current implementation matches an imagined architecture.

---

## 5. Minimal Change Principle

> **Make the smallest change that correctly solves the requested problem.**

If the request is:

> "Change the button radius."

Only change the button radius or the smallest appropriate shared token/component.

Do not:

- Redesign the page.
- Change unrelated colors.
- Replace components.
- Rewrite routing.
- Refactor unrelated code.

A larger change is acceptable only when technically necessary or explicitly requested.

---

## 6. Preserve Working Functionality

Existing working functionality must be preserved unless the user explicitly asks for it to change.

Before removing or replacing behavior, determine:

- Why it exists.
- What depends on it.
- Whether another section uses it.
- Whether the replacement provides equivalent behavior.

Do not delete code simply because it appears unnecessary without understanding its purpose.

---

## 7. Do Not Introduce Unrequested Features

Do not automatically add:

- Blog systems.
- Authentication.
- Databases.
- CMS.
- Analytics.
- Contact backends.
- Complex animations.
- 3D graphics.
- Chatbots.
- Admin dashboards.
- Extra pages.

A feature may be suggested separately, but it should not be silently implemented.

---

## 8. Avoid Design Drift

The AI agent must preserve the approved visual identity.

The design direction is:

- Modern
- Minimal
- Clean
- Professional
- Personal
- Light blue / cyan oriented
- Gradient accents
- Selective transparency
- Selective glass-inspired surfaces

Do not introduce unrelated visual trends.

Especially avoid silently turning the website into:

- Cyberpunk
- Neon-heavy
- Excessive glassmorphism
- Excessive 3D
- Excessive particle effects
- Random colorful gradients
- Overly futuristic interfaces

Refer to `DESIGN_SYSTEM.md` for detailed visual rules.

---

## 9. Do Not Invent Content

Never fabricate information about Micael.

Do not invent:

- Skills
- Projects
- Experience
- Awards
- Certificates
- Organizations
- Clients
- Internships
- Employment
- Publication details
- Statistics
- User counts
- Performance numbers

Refer to `CONTENT_GUIDELINES.md`.

---

## 10. Do Not Assume Missing Information

When implementation requires information that is not available:

### If the information is optional:
Use a clean omission or placeholder.

### If the information is essential:
Ask the user.

### Never:
Invent a plausible value.

Examples of information that may require clarification:

- Project URLs.
- Certificate IDs.
- Exact dates.
- Professional photo.
- Exact color values.
- Social media links.
- Publication metadata.

---

## 11. Design Changes Must Be Scoped

When the user requests a visual change, identify the scope.

Example:

```text
User request:
"Make the hero background more dynamic."
```

The agent should determine whether this affects:

- Hero only.
- Global background.
- Animation system.
- Performance.

It should not automatically redesign all sections.

---

## 12. Content Changes Must Be Scoped

If the user requests:

> "Update the SmartQBank description."

Only update the relevant content.

Do not simultaneously rewrite:

- About section.
- Hero copy.
- Skills.
- Other project descriptions.

---

## 13. Architecture Changes Require Caution

The following are considered significant:

- Changing frameworks.
- Changing routing systems.
- Replacing Tailwind CSS.
- Replacing TypeScript.
- Introducing a backend.
- Introducing global state.
- Large dependency additions.
- Major folder restructuring.
- Making large portions of the app client-side.

Before performing such changes without an explicit request:

1. Explain why.
2. Identify impact.
3. Consider simpler alternatives.
4. Ask for approval when appropriate.
5. Record the approved decision.

---

## 14. Dependency Discipline

Before adding a package:

1. Confirm the feature requires it.
2. Check whether existing tools can solve the problem.
3. Check whether the dependency creates unnecessary client-side code.
4. Consider maintenance and complexity.
5. Add only when justified.

Do not install packages just because they are popular.

---

## 15. Client Component Discipline

Use Server Components by default.

When `"use client"` is needed:

1. Confirm that client-side behavior is actually required.
2. Keep the client boundary as small as possible.
3. Avoid converting an entire page into a client component for one interactive child.

---

## 16. Animation Discipline

Animations should follow `DESIGN_SYSTEM.md`.

Before adding animation, ask:

- Does it improve the experience?
- Is it necessary?
- Could a simpler transition work?
- Does it affect performance?
- Does it affect accessibility?
- Does it distract from content?

Avoid adding animation simply because the page feels "too empty".

---

## 17. Responsive-First Thinking

Every UI change must consider:

- Desktop.
- Tablet.
- Mobile.

Do not fix desktop layouts while knowingly breaking mobile.

When modifying:

- Navigation
- Hero
- Cards
- Grids
- Typography
- Buttons
- Images

check the responsive consequences.

---

## 18. Accessibility Is Part of Implementation

Do not treat accessibility as a final optional step.

When creating UI:

- Use semantic HTML.
- Use real buttons for actions.
- Use real links for navigation.
- Provide accessible labels.
- Provide meaningful image alt text.
- Maintain focus visibility.
- Maintain adequate contrast.
- Consider reduced motion.

---

## 19. TypeScript Discipline

Prefer strong types.

Avoid:

```ts
any
```

unless there is a documented reason.

Use types for structured portfolio data and reusable component props.

Do not create overly complicated generic types for simple UI.

---

## 20. Data-Driven Content

When content is repetitive and structured, use the data layer.

Example:

```text
data/projects.ts
       ↓
ProjectsSection
       ↓
ProjectCard
```

Do not duplicate the same project structure manually across multiple components.

---

## 21. Naming Consistency

Follow the conventions in `ARCHITECTURE.md`.

Do not introduce a new naming style just because another style is personally preferred.

Consistency is more important than personal preference.

---

## 22. Error Handling

When a build, runtime, or dependency error occurs:

1. Read the actual error.
2. Identify the root cause.
3. Fix the smallest relevant issue.
4. Re-run the relevant check.
5. Confirm the result.

Do not randomly change multiple files until the error disappears.

---

## 23. Verification After Changes

After meaningful code changes, verify the project.

At minimum, when applicable:

```bash
npm run build
```

Also use:

```bash
npm run lint
```

if the project provides a lint script.

For UI changes, perform a visual review in the development environment.

---

## 24. Build Failure Protocol

If the build fails:

1. Stop introducing unrelated changes.
2. Read the error message.
3. Locate the affected file.
4. Fix the root issue.
5. Run the build again.
6. Only continue once the project is stable.

Do not hide errors by disabling checks or weakening configuration unless explicitly justified.

---

## 25. Visual QA Protocol

For visual changes, inspect:

### Desktop
- Overall composition.
- Navbar placement.
- Hero hierarchy.
- Section spacing.
- Card alignment.
- Typography.
- Background.

### Mobile
- Navigation.
- Text wrapping.
- Button sizing.
- Card stacking.
- Image cropping.
- Horizontal overflow.
- Touch target sizes.

A visually correct desktop page is not considered complete if mobile is broken.

---

## 26. Git Discipline

Before committing:

1. Review changed files.
2. Remove temporary files.
3. Confirm no secrets are included.
4. Confirm unrelated changes were not introduced.
5. Verify the application still works.

Use meaningful commit messages.

Examples:

```text
feat: add projects section
feat: add responsive navigation
style: refine hero gradient
fix: correct mobile project layout
docs: update design decisions
```

Avoid:

```text
update
changes
fix stuff
asdf
```

---

## 27. Secrets and Environment Variables

Never commit:

- API keys.
- Access tokens.
- Passwords.
- Private credentials.
- Production secrets.

Use environment variables when required.

Provide `.env.example` without real secret values when appropriate.

---

## 28. Temporary Code

Temporary implementation should not silently become permanent architecture.

If a placeholder is required:

- Make it obvious.
- Keep it isolated.
- Document it when necessary.
- Replace it once real content is available.

Do not publish fake content as if it were real.

---

## 29. Working With Placeholders

Placeholders are allowed during development.

Examples:

```text
[Project description pending]
[Professional photo pending]
[Certificate details pending]
```

However, placeholders should not remain in production unless intentionally designed.

Do not replace missing content with invented information.

---

## 30. Refactoring Rule

Refactoring is allowed when:

- It directly improves the requested implementation.
- It fixes a clear structural problem.
- It reduces meaningful duplication.
- It is necessary for maintainability.

Avoid opportunistic refactoring during unrelated tasks.

Example:

User asks:

> "Change the project card hover."

Do not simultaneously rewrite the entire component architecture unless necessary.

---

## 31. Documentation Updates

Update documentation when a change affects:

- Project purpose.
- Design system.
- Architecture.
- Development rules.
- Final design decisions.
- Major project milestones.

Not every tiny CSS adjustment requires documentation changes.

---

## 32. Decision Recording

If the user makes a significant project decision, record it in:

```text
docs/DECISIONS.md
```

Examples:

- Final color palette.
- Final typography.
- Navigation architecture.
- New major page.
- Framework change.
- Major animation strategy.
- New data architecture.

Do not record every trivial implementation detail.

---

## 33. Changelog

Record meaningful milestones in:

```text
docs/CHANGELOG.md
```

Examples:

- Initial project setup.
- Initial homepage.
- First complete responsive version.
- Project section release.
- Production deployment.
- Major redesign.

---

## 34. Agent Communication

When reporting completed work, the AI agent should clearly state:

1. What changed.
2. Which files changed.
3. Why the change was made.
4. What was verified.
5. Any remaining issue.
6. Any decision requiring owner approval.

Do not claim that something was tested if it was not actually tested.

---

## 35. Before/After Summary

For significant changes, provide a concise summary:

```text
Changed:
- ...

Preserved:
- ...

Verified:
- ...

Needs decision:
- ...
```

This helps the owner maintain control over the project.

---

## 36. Stop Conditions

The AI agent should stop and ask for clarification when:

- Requirements conflict.
- Required factual information is missing.
- A major design decision is ambiguous.
- A major architecture change appears necessary but was not requested.
- A change could materially alter the project's identity.
- The implementation would require inventing information.
- Multiple valid approaches have substantially different product consequences.

Do not guess when the decision is important.

---

## 37. Do Not Over-Optimize

Avoid premature optimization.

For a personal portfolio, prioritize:

1. Correctness.
2. User experience.
3. Visual consistency.
4. Accessibility.
5. Maintainability.
6. Performance.
7. Complexity reduction.

Do not add complex infrastructure to solve hypothetical future problems.

---

## 38. Final Review Checklist

Before considering a meaningful milestone complete:

### Product
- [ ] Represents Micael accurately.
- [ ] Content is truthful.
- [ ] Main purpose is clear.
- [ ] Important sections are present.

### Design
- [ ] Matches `DESIGN_SYSTEM.md`.
- [ ] Blue/cyan visual direction remains consistent.
- [ ] No accidental design drift.
- [ ] Typography is readable.
- [ ] Navigation remains consistent.

### Technical
- [ ] Architecture remains consistent.
- [ ] TypeScript is valid.
- [ ] No unnecessary dependencies were introduced.
- [ ] No secrets are committed.
- [ ] Build passes.
- [ ] Lint passes when available.

### Responsive
- [ ] Desktop reviewed.
- [ ] Tablet reviewed.
- [ ] Mobile reviewed.
- [ ] No horizontal overflow.
- [ ] Interactive elements remain usable.

### Documentation
- [ ] Significant decisions recorded.
- [ ] Changelog updated when appropriate.

---

## 39. Final Operating Principle

> **Do not be clever at the expense of consistency.**

The AI agent's job is not to continuously reinvent the website.

Its job is to:

- Understand the existing system.
- Respect established decisions.
- Make deliberate changes.
- Preserve working functionality.
- Verify its work.
- Ask when important information is missing.
- Keep the project aligned with Micael's identity.

The best implementation is not the one with the most changes.

It is the one that achieves the requested result with the least unnecessary disruption.
