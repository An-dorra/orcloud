# Full-Bleed Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make five target sections full-bleed on wide screens while keeping a 1920px centered content column.

**Architecture:** Introduce a reusable full-bleed layout pattern (outer 100% width, inner 1920px centered). Apply it to header, hero, plans carousel, assistant, and footer. Keep other sections centered at 1920px to preserve the existing layout.

**Tech Stack:** Vue 3, Vite, TypeScript, TailwindCSS, scoped CSS.

---

## File Map

- Create: `src/components/layout/FullBleedSection.vue`
- Modify: `src/styles/main.css`
- Modify: `src/components/layout/SiteHeader.vue`
- Modify: `src/views/HomeView.vue`
- Modify: `src/components/layout/SiteFooter.vue`

---

### Task 1: Add Full-Bleed Layout Primitive

**Files:**
- Create: `src/components/layout/FullBleedSection.vue`
- Modify: `src/styles/main.css`

- [ ] **Step 1: Create the reusable layout component**

```vue
<template>
  <component :is="tag" class="full-bleed" :class="outerClass">
    <div class="full-bleed__inner" :class="innerClass">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
interface FullBleedSectionProps {
  tag?: keyof HTMLElementTagNameMap
  outerClass?: string
  innerClass?: string
}

const props = withDefaults(defineProps<FullBleedSectionProps>(), {
  tag: 'section',
  outerClass: '',
  innerClass: '',
})

const { tag, outerClass, innerClass } = props
</script>
```

- [ ] **Step 2: Add global full-bleed utility styles**

```css
.full-bleed {
  width: 100%;
}

.full-bleed__inner {
  width: 1920px;
  margin: 0 auto;
  position: relative;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/FullBleedSection.vue src/styles/main.css
git commit -m "feat: add full-bleed layout primitive"
```

---

### Task 2: Update Site Header to Full-Bleed

**Files:**
- Modify: `src/components/layout/SiteHeader.vue`

- [ ] **Step 1: Update template to include an inner wrapper**

```vue
<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="site-header__brand" to="/" aria-label="Origins Cloud home">
        <img class="site-header__symbol" :src="originsCloudSymbol" alt="" />
        <img class="site-header__wordmark" :src="originsCloudWordmark" alt="Origins Cloud" />
      </RouterLink>

      <nav class="site-header__nav" aria-label="Primary navigation">
        <RouterLink
          v-for="item in navigationItems"
          :key="item.label"
          class="site-header__link"
          :to="item.to"
        >
          {{ item.label }}
          <img class="site-header__caret" :src="iconCaretDown" alt="" aria-hidden="true" />
        </RouterLink>
      </nav>

      <div class="site-header__actions" aria-label="Account links">
        <button class="site-header__icon" type="button" aria-label="Language">
          <img :src="iconGlobe" alt="" aria-hidden="true" />
        </button>
        <button class="site-header__icon" type="button" aria-label="App menu">
          <img :src="iconApps" alt="" aria-hidden="true" />
        </button>
        <img class="site-header__divider" :src="iconVerticalDivider" alt="" aria-hidden="true" />
        <RouterLink class="site-header__plain-link site-header__plain-link--light" to="/">
          Console
        </RouterLink>
        <RouterLink class="site-header__plain-link site-header__plain-link--light" to="/">
          Login
        </RouterLink>
        <RouterLink class="site-header__register" to="/">Register</RouterLink>
      </div>
    </div>
  </header>
</template>
```

- [ ] **Step 2: Move layout sizing to the inner wrapper**

```css
.site-header {
  position: relative;
  z-index: 20;
  width: 100%;
  height: 80px;
  background: #ffffff;
  backdrop-filter: blur(15px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  width: 1920px;
  height: 80px;
  padding: 0 33px 0 40px;
  margin: 0 auto;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/SiteHeader.vue
git commit -m "feat: make header full-bleed with centered inner"
```

---

### Task 3: Update Home Page Sections (Hero, Plans, Assistant)

**Files:**
- Modify: `src/views/HomeView.vue`

- [ ] **Step 1: Wrap hero, plans, and assistant sections with inner containers**

```vue
<template>
  <div class="home-page">
    <section class="hero-section" :style="{ backgroundImage: `url(${heroCloudInfrastructure})` }">
      <div class="hero-section__inner">
        <div class="hero-section__content">
          <h1>
            The Infrastructure of
            <br />
            the Future
          </h1>
          <p>
            Origins Quantum delivers a next-generation neural
            <br />
            architecture designed for low-latency, high-availability
            <br />
            global operations.
          </p>
          <div class="hero-section__actions">
            <a href="#">Get Started</a>
            <a href="#" class="hero-section__secondary">Learn More</a>
          </div>
        </div>
        <div class="hero-section__value-row">
          <article v-for="item in valueCards" :key="item.title" class="hero-value">
            <div>
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
            <img class="hero-value__icon" :src="iconChevronRight" alt="" aria-hidden="true" />
          </article>
        </div>
      </div>
    </section>

    <section class="plans-section">
      <div class="plans-section__inner">
        <div class="section-heading">
          <h2>Stable, Secure, Credible</h2>
          <p>
            Select from our wide range of cloud hosting solutions optimized for various workloads and enterprise scales.
          </p>
        </div>
        <div class="plans-section__carousel">
          <ProductPlanCard
            v-for="(plan, index) in productPlans"
            :key="`${plan.title}-${plan.price}`"
            :class="`plan-card--pos-${index + 1}`"
            :plan="plan"
          />
        </div>
        <button class="more-button" type="button">
          <span>More</span>
          <img :src="iconMoreArrow" alt="" aria-hidden="true" />
        </button>
      </div>
    </section>

    <section class="assistant-section">
      <div class="assistant-section__inner">
        <img class="assistant-section__rings" :src="orclawRingBackground" alt="" />
        <img class="assistant-section__crab" :src="orclawAssistantCrab" alt="OrClaw assistant crab" />
        <div class="assistant-section__content">
          <h2>Meet "OrClaw"<br />Your Personal AI Assistant</h2>
          <p>Intelligent resource management, troubleshooting, and cloud optimization at your fingertips.</p>
          <a href="#">Click to jump →</a>
        </div>
      </div>
    </section>
  </div>
</template>
```

- [ ] **Step 2: Update layout styles for full-bleed + centered inner**

```css
.home-page {
  width: 100%;
  background: #ffffff;
  color: #1d2129;
  font-family: Montserrat, Inter, Arial, sans-serif;
}

.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 920px;
  margin-top: -80px;
  overflow: hidden;
  background: #02010f;
  background-repeat: no-repeat;
  background-position: center -6px;
  background-size: 1920px 926px;
}

.hero-section__inner {
  width: 1920px;
  margin: 0 auto;
  padding: 192px 0 0 120px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.hero-section__value-row {
  margin-top: auto;
  margin-left: -120px;
  width: 1920px;
}

.plans-section {
  width: 100%;
  position: relative;
  height: 1000px;
  padding-top: 108px;
  overflow: hidden;
  background: #ffffff;
}

.plans-section__inner {
  width: 1920px;
  margin: 0 auto;
  position: relative;
  height: 100%;
}

.plans-section .section-heading {
  margin-left: 120px;
}

.plans-section__carousel {
  position: relative;
  width: 2016px;
  height: 475px;
  margin-top: 90px;
  margin-left: -48px;
}

.plans-section > .more-button {
  position: absolute;
  left: 830px;
  top: 853px;
}

.plans-section__inner > .more-button {
  position: absolute;
  left: 830px;
  top: 853px;
}

.assistant-section {
  width: 100%;
}

.assistant-section__inner {
  width: 1920px;
  margin: 0 auto;
  position: relative;
}
```

- [ ] **Step 3: Keep non-full-bleed sections centered**

```css
.industries-section,
.market-section,
.network-section,
.news-section {
  width: 1920px;
  margin: 0 auto;
}
```

- [ ] **Step 4: Commit**

```bash
git add src/views/HomeView.vue
git commit -m "feat: center hero, plans, and assistant content at 1920px"
```

---

### Task 4: Update Site Footer to Full-Bleed

**Files:**
- Modify: `src/components/layout/SiteFooter.vue`

- [ ] **Step 1: Add an inner wrapper to the footer template**

```vue
<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__promises">
        <span v-for="item in promises" :key="item" class="site-footer__promise">
          <span class="site-footer__promise-icon"></span>
          {{ item }}
        </span>
      </div>
      <div class="site-footer__main">
        <div class="site-footer__intro">
          <img class="site-footer__logo" :src="originsCloudLogo" alt="Origins Cloud" />
          <p>
            Strengthening digital infrastructure with secure, reliable, and scalable cloud computing solutions
            worldwide.
          </p>
        </div>
        <div class="site-footer__columns">
          <div v-for="column in footerColumns" :key="column.title" class="site-footer__column">
            <h3>{{ column.title }}</h3>
            <RouterLink v-for="link in column.links" :key="link" to="/">{{ link }}</RouterLink>
          </div>
        </div>
      </div>
      <div class="site-footer__bottom">
        <p>© 2024 Origins Cloud. All rights reserved.</p>
        <div class="site-footer__legal">
          <RouterLink to="/">Privacy Policy</RouterLink>
          <RouterLink to="/">Terms of Service</RouterLink>
          <RouterLink to="/">Cookies</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
```

- [ ] **Step 2: Add inner wrapper styles**

```css
.site-footer {
  width: 100%;
}

.site-footer__inner {
  width: 1920px;
  margin: 0 auto;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/SiteFooter.vue
git commit -m "feat: make footer full-bleed with centered inner"
```

---

### Task 5: Visual Verification

**Files:** none

- [ ] **Step 1: Run the dev server (if not already running)**

```bash
npm run dev
```

Expected: Vite dev server starts without errors.

- [ ] **Step 2: Visual check at 1920px**

Expected: Layout matches current 1:1 design.

- [ ] **Step 3: Visual check at 2560px**

Expected: Backgrounds for header, hero, plans, assistant, footer stretch full width; content centered at 1920px with equal left/right whitespace.

- [ ] **Step 4: Visual check at <1920px**

Expected: Existing scaling behavior remains correct.

---

## Self-Review

- **Spec coverage:** All five sections (header, hero, plans, assistant, footer) are covered by Tasks 2–4. Centering for other sections included in Task 3.
- **Placeholder scan:** No TBD/TODO placeholders in plan steps.
- **Type consistency:** Classes and component names remain consistent across tasks.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-14-full-bleed-sections.md`. Two execution options:

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration  
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints  

Which approach?
