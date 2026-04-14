# Full-Bleed Sections With 1920px Centered Content

## Context
The home page uses a fixed 1920px layout for 1:1 Figma fidelity. For screens wider than 1920px, specific sections should keep backgrounds full-bleed while centering the 1920px content area with left/right whitespace.

Target sections:
1. Site header
2. Hero (The Infrastructure background image)
3. Plans carousel (Stable, Secure, Credible)
4. Assistant (Meet "OrClaw")
5. Site footer

## Goals
- Full-bleed backgrounds across the viewport for the five target sections.
- Content stays 1920px wide and centered on viewports wider than 1920px.
- Preserve existing <1920 scaling behavior.
- Keep componentization and reuse intact.

## Non-Goals
- No design changes to typography, spacing, or assets beyond layout wrappers.
- No behavior changes to existing scaling plugin.

## Proposed Approach (Recommended)
Create a reusable “full-bleed with centered inner” pattern and apply it to the five sections.

Implementation shape:
- **Outer wrapper**: `width: 100%`, background applied here.
- **Inner wrapper**: `width: 1920px`, `margin: 0 auto`, contains the existing content.

We can implement this as:
- A small reusable Vue component `FullBleedSection` **or**
- A pair of reusable CSS utility classes (e.g., `.section-bleed` and `.section-inner`) used consistently.

Given the requirement for componentization and reuse, we will prefer a **component** for layout wrappers where practical (header/footer can embed their own inner wrapper as well).

## Component and File Changes
- **SiteHeader.vue**
  - Add outer full-bleed wrapper (header) and inner 1920px container.
- **HomeView.vue**
  - Hero section: apply full-bleed background to outer hero section, wrap existing content in inner container.
  - Plans section: add inner wrapper for section heading, carousel, and button.
  - Assistant section: add inner wrapper for rings, crab, and content.
- **SiteFooter.vue**
  - Add inner wrapper for footer content while keeping footer background on the outer element.

## Styling Details
- Outer wrappers: `width: 100%`, preserve current height and background styles.
- Inner wrappers: `width: 1920px`, `margin: 0 auto`, `position: relative` where needed.
- Existing positioning and spacing remain anchored to the inner wrapper.

## Data Flow
No data changes. Only layout container structure is adjusted.

## Error Handling
No new runtime errors expected. Layout-only change.

## Testing / Verification
- Visual check at 1920px: layout unchanged.
- Visual check at >1920px (e.g., 2560px): backgrounds stretch full width; content centered with equal whitespace.
- Check at <1920px: scaling behavior remains correct.

## Rollout
Single change set; no migration required.
