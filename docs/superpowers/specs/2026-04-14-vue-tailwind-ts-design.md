# Vue Tailwind TypeScript Starter Design

## Goal

Create a Vue 3 project in the current directory with TypeScript, Tailwind CSS, Vue Router, reusable components, and English-only code comments.

## Architecture

The app will use Vite as the build tool, Vue 3 single-file components, Tailwind CSS through the official Vite plugin, and Vue Router with browser history. The UI will be split into reusable base, layout, and feature components, while route views stay focused on page composition.

## Component Boundaries

- `src/components/base/BaseButton.vue` exposes a small reusable button/link API.
- `src/components/layout/AppHeader.vue` owns top-level navigation and consumes shared navigation data.
- `src/components/feature/FeatureCard.vue` renders repeatable feature items from typed data.
- `src/views/HomeView.vue` composes the reusable components for the home route.
- `src/views/AboutView.vue` verifies the second route and keeps route setup visible.

## Data Flow

Static navigation and feature card data live in `src/data/` as typed arrays. Components receive only the props they need, which keeps repeated UI markup reusable and easy to replace later.

## Routing

The router will expose `/` as `home` and `/about` as `about`, using `createWebHistory()`. The root `App.vue` will render `RouterView` below a shared header.

## Testing

Vitest will verify that the router publishes the required named routes and that feature metadata is centralized in reusable data. The project will also be validated with a production build.
