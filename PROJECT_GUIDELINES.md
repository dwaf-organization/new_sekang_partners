# Project Guidelines

## Structure

- Use Atomic Design for reusable UI: `src/components/atoms`, `src/components/molecules`, `src/components/organisms`, and add `templates` only when page layouts become reusable.
- Keep page components in `src/pages/{PageName}`.
- Page components must compose section components and pass data; they must not contain large presentational JSX blocks.
- Keep page-specific types in `src/types/{pageName}.types.ts`.
- Keep page-specific dummy or mock data in `src/data/{pageName}.data.ts`.
- Split reusable components out of pages early when they are likely to be shared or maintained independently.
- Component folders must be lowercase, such as `button`, `herointro`, or `resourcelinks`.
- Component file names must start with an uppercase letter and use PascalCase, such as `Button.tsx` or `HeroIntro.tsx`.
- Repeated cards, metric rows, and list items must be molecules; full sections must be organisms.

## Imports

- Use the `@/` alias for imports from `src`.
- Prefer explicit imports from the owning file, such as `@/router/routes` or `@/components/atoms/button/Button`.

## Tailwind CSS

- Do not create or use separate component CSS files for styling. Style UI with Tailwind CSS classes in JSX.
- Keep `src/index.css` only for Tailwind entry imports and shared Tailwind tokens.
- Define Tailwind color tokens as CSS variables in `src/index.css` using `@theme`.
- Use shared names such as `gray-100`, `primary-100`, `primary`, `secondary-100`, `surface-base`, `surface-muted`, and `text-primary` so colors are available anywhere through Tailwind utilities.
- The primary brand color must be `#0E51D5` and must be consumed through the `primary` token.
- Add new colors as variables first, then consume them through Tailwind classes.
- Prefer Tailwind transition utilities for simple hover and focus polish.
- Use `motion/react` for scroll-triggered animation, repeated animation, or complex choreography when it improves maintainability over hand-written observers or ad hoc CSS.
- Reusable scroll reveal behavior must live in `src/components/atoms/scrollreveal/ScrollReveal.tsx`.

## Routing

- Define route path constants in `src/router/routes.ts`.
- Wrap the application with `BrowserRouter` in `src/main.tsx`.
- Declare routes directly in `src/App.tsx` with React Router's `<Routes>` and `<Route>` components.
- Import route constants from `src/router/routes.ts` into `src/App.tsx`.
- Import the page component into `src/App.tsx` and assign it to the matching route with the `element` prop.
- Global UI that appears on every page, such as the header, must live in a shared layout component, not inside an individual page.
- Global footer content must also live in the shared layout and use separated footer data.
- Header navigation must route to page paths with React Router links. Do not use section hash links for primary menu navigation when each menu has its own page.
- Keep global navigation data separate from page-specific mock data.

## Responsive

- Every page and reusable component must be designed for mobile, tablet, and desktop from the first implementation.
- Header navigation must provide a usable mobile menu below the desktop breakpoint.
- Use Tailwind responsive variants such as `max-md`, `max-lg`, and `lg` instead of separate CSS files.
- Mobile layouts must avoid horizontal overflow, clipped text, and unreachable interactive controls.
- Interactive controls must remain keyboard accessible across breakpoints.

## Formatting

- Use Prettier for project formatting.
- Run `pnpm format` before larger handoffs and `pnpm format:check` in verification when needed.
