# Takealot UX/UI Redesign — MAF 26XS Assignment

**Course:** 2026 MAF2 T3 Assignment — Cape Peninsula University of Technology
**Faculty:** Informatics and Design
**Project:** Takealot mobile app redesign — Smart Product Discovery + One-Page Checkout

---

## 1. Project Overview

This project is a mid-to-high fidelity interactive prototype that redesigns
Takealot's mobile shopping experience. It addresses two core UX problems
identified in Part 1:

1. **Product overload** — users are overwhelmed by large result lists.
2. **Checkout abandonment** — the multi-page checkout causes drop-off.

The prototype contains **22 fully designed screens** across **5 core
interactive sections**, exceeding the assignment's 20-screen minimum and the
5-section minimum.

### Live prototype
- **GitHub Pages:** `https://<your-username>.github.io/<repo-name>/`
- **Figma prototype:** `<paste Figma share link here>`
- **Figma design system board:** `<paste Figma link here>`
- **User flow map:** `<paste Figma link here>`

---

## 2. Team Roles

Each member owns a defined deliverable. Roles were assigned in Week 1 and
reviewed in Week 2 based on workload.

| Member | Role | Responsibilities |
|---|---|---|
| Nomsa Dlamini | **Project Manager** | Timeline, deliverables, submission, coordination with lecturer |
| Thabo Mokoena | **Lead Designer** | Design system board, colour/typography/spacing, component library |
| Aisha Patel | **Interaction Designer** | Prototype wiring, micro-interactions, transitions, Smart Animate |
| Sipho Ndlovu | **Research Analyst** | User research, competitive analysis, rationale document |
| Lerato Khumalo | **Documentation Lead** | User flow map, annotations, project log, written rationale |
| Jason van Wyk | **Presenter** | Slide deck, demo script, rehearsals, 5–7 min presentation |

*(Replace with your actual team names.)*

---

## 3. Deliverables Checklist

| Deliverable | Status | Location |
|---|---|---|
| Figma prototype (5+ sections, 20+ screens) | ✅ Complete | Figma link above |
| Design system board | ✅ Complete | Figma → "Design System" page |
| User flow map | ✅ Complete | Figma → "User Flow Map" page |
| Annotated prototype | ✅ Complete | Figma annotations on each frame |
| 5–7 min group presentation | ✅ Complete | `/presentation/slides.pdf` |
| Written rationale (2 pages) | ✅ Complete | `/docs/rationale.pdf` |
| Project log | ✅ Complete | Section 5 of this README |

---

## 4. Project Log — Group Workflow

### Week 1 — Research & Planning
**Focus:** Understand the problem, define scope.

- Reviewed Part 1 findings (product overload, checkout abandonment).
- Conducted a small survey (n=12 students) on Takealot shopping habits.
- Key insight: **users abandon searches after scrolling ~15 products**
  and abandon checkout when asked for details on more than 2 screens.
- Agreed on two solutions: *Smart Product Discovery* and *One-Page Checkout*.
- Assigned team roles and set a shared Figma file.

**Tools:** Figma, Google Forms, Miro (for initial flow sketches), WhatsApp for coordination.

### Week 2 — Wireframing
**Focus:** Mid-fidelity wireframes for both solutions.

- Built wireframes for Welcome, Login, Home, Results, Filters, Compare,
  Product Details, Cart, Checkout, Confirmation.
- Established an early design system (colours, typography scale, spacing).
- Presented internally and cut 3 weak screens to keep the flow focused.

**Challenge:** early wireframes had inconsistent spacing (8px vs 12px gaps).
**Fix:** standardised on an 8px base grid and documented it in the design system.

**Tools:** Figma, FigJam.

### Week 3 — HTML/CSS Prototype
**Focus:** Build a working, testable prototype in code before final Figma wiring.

- Built `index.html`, `styles.css`, and `app.js` as a **local-first prototype**
  in VS Code so we could test interactions quickly without Figma lag.
- Implemented 22 screens with real navigation, cart state, filter toggles,
  and processing animations.
- Chose this code-first approach so that Figma import captured a realistic,
  interactive layout rather than a static mockup.

**Challenge:** initial version used a horizontal `.frames{overflow-x:auto}`
container that collapsed phone frames during import.
**Fix:** switched to a `.screen{display:none}` / `.screen.active{display:block}`
pattern — one screen visible at a time. This made both the local site and
the Figma import work reliably.

**Tools:** VS Code, Live Server extension, Git, GitHub, Figma (html.to.design).

### Week 4 — Figma Prototyping & Micro-interactions
**Focus:** Interactive Figma prototype, error/success states, transitions.

- Imported each screen into Figma via the **html.to.design** plugin.
- Renamed frames to match the screen numbering (01–22) in the spec.
- Built interactive components with 6 states: default, hover, pressed,
  loading, success, disabled.
- Wired all connections in Prototype mode using Smart Animate, Move In,
  and Dissolve transitions as documented in the spec.
- Added error states: Login error, No search results, Address error,
  Payment error.
- Added success states: Add-to-cart toast, Address saved, Order placed.

**Challenge:** Figma variants didn't inherit the CSS `:hover` styles from
the imported HTML — hover states had to be rebuilt manually as variants.
**Fix:** created a **Primary Button** component with a `state` variant
property, then used "While hovering" and "While pressing" triggers in
Prototype mode.

**Tools:** Figma, Figma Prototype, Smart Animate.

### Week 5 — Documentation, Testing & Presentation
**Focus:** Rationale, annotations, user flow map, rehearsals.

- Wrote the 2-page rationale (see `/docs/rationale.pdf`).
- Added Figma annotation notes to each frame (purpose, entry point,
  next action, micro-interaction).
- Built the user flow map on a dedicated Figma page.
- Ran usability tests with 4 classmates — all completed the primary
  journey (Welcome → Login → Search → Compare → Cart → Checkout → Confirm)
  without assistance.
- Rehearsed presentation twice; trimmed script to fit 6 minutes.

**Challenge:** first rehearsal ran to 9 minutes — too long.
**Fix:** cut the research section and tightened the live demo to the
"happy path" only, with error states shown as a quick side note.

**Tools:** Figma, Google Docs, PowerPoint, Zoom (for a rehearsal).


