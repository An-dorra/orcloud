# Vue Tailwind TypeScript Starter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vue 3, TypeScript, Tailwind CSS, and Vue Router starter project in the current directory.

**Architecture:** Vite will provide the build pipeline. Vue Router owns top-level routes, reusable components live under `src/components/`, and typed static data lives under `src/data/`.

**Tech Stack:** Vue 3, TypeScript, Vite, Tailwind CSS via `@tailwindcss/vite`, Vue Router, Vitest.

---

### Task 1: Project Configuration And Failing Tests

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `src/vite-env.d.ts`
- Create: `src/router/router.spec.ts`
- Create: `src/data/features.spec.ts`

- [ ] **Step 1: Create build and TypeScript configuration**

Add npm scripts for dev, test, typecheck, and build. Configure Vite with Vue and Tailwind plugins.

- [ ] **Step 2: Write failing tests**

Add a router test that expects `home` and `about` route names. Add a feature data test that expects reusable feature card metadata.

- [ ] **Step 3: Run tests to verify red**

Run: `npm test -- --run`
Expected: FAIL because `src/router/index.ts` and `src/data/features.ts` do not exist yet.

### Task 2: Router, Data, And Components

**Files:**
- Create: `src/main.ts`
- Create: `src/App.vue`
- Create: `src/router/index.ts`
- Create: `src/data/features.ts`
- Create: `src/data/navigation.ts`
- Create: `src/components/base/BaseButton.vue`
- Create: `src/components/layout/AppHeader.vue`
- Create: `src/components/feature/FeatureCard.vue`
- Create: `src/views/HomeView.vue`
- Create: `src/views/AboutView.vue`
- Create: `src/styles/main.css`

- [ ] **Step 1: Implement minimal router and data**

Add named `home` and `about` routes and typed feature/navigation data.

- [ ] **Step 2: Implement reusable components**

Create a small base button, a header that reuses navigation data, and a feature card component that receives typed props.

- [ ] **Step 3: Compose route views**

Render the home view from reusable components and add an about view for the second route.

- [ ] **Step 4: Run tests to verify green**

Run: `npm test -- --run`
Expected: PASS.

### Task 3: Quality Gate

**Files:**
- Verify: all project files

- [ ] **Step 1: Run typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: PASS and generate `dist/`.
