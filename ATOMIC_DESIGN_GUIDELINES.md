# Atomic Design Guidelines

## Non-Negotiables

- Pages must compose sections and pass data only; they must not contain large presentational blocks.
- Reusable UI must be split into `atoms`, `molecules`, `organisms`, and `templates`.
- Component folders must be lowercase.
- Component files must use PascalCase.
- Page data must live in `src/data/{pageName}.data.ts`.
- Page types must live in `src/types/{pageName}.types.ts`.
- Styling must use Tailwind CSS classes in JSX.
- Component CSS files must not be added.
- Global layout elements such as header and footer must live in templates or shared organisms.

## Component Boundaries

- Atoms must be small primitives with minimal layout responsibility.
- Molecules must combine atoms or simple markup into reusable repeated UI such as cards and metric items.
- Organisms must represent full page sections such as hero, service overview, portfolio, team, and footer.
- Templates must own global page chrome and route-level layout.

## Responsive And Motion

- Every component must include mobile, tablet, and desktop behavior at implementation time.
- Components must avoid horizontal overflow on mobile.
- Use `motion/react` for reusable scroll reveal and repeated animation.
- Use `ScrollReveal` for standard section entrance animation.

## Current Home Structure

- `HomePage` composes:
  - `HeroSection`
  - `ServiceOverviewSection`
  - `PortfolioSection`
  - `TeamSection`
  - `EducationSection`
- Repeated UI inside those sections is split into:
  - `ServiceCard`
  - `MetricItem`
  - `ShowcaseCard`
