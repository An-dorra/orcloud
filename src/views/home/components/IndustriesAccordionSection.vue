<template>
  <section class="industries-section">
    <div class="section-heading">
      <h2>Full-stack, 1000s of industries</h2>
      <p>
        Focusing on rich business scenarios, accumulating best practices from various industries, and providing
        solutions for diverse application scenarios.
      </p>
    </div>

    <div class="industries-section__grid" :style="gridStyle">
      <article
        v-for="(card, index) in resolvedCards"
        :key="card.title"
        class="industry-card"
        :class="{ 'industry-card--active': card.expanded }"
        role="button"
        tabindex="0"
        :aria-pressed="card.expanded"
        @click="setActiveIndex(index)"
        @keydown.enter.prevent="setActiveIndex(index)"
        @keydown.space.prevent="setActiveIndex(index)"
      >
        <img :src="card.image" :alt="card.title" />
        <div class="industry-card__overlay">
          <h3 :class="{ 'industry-card__title--single-line': card.expanded }">{{ getDisplayTitle(card.title, card.expanded) }}</h3>
          <p v-if="card.expanded && card.description" class="industry-card__description">{{ card.description }}</p>
          <button v-if="card.expanded" class="industry-card__cta" type="button">
            <img class="industry-card__cta-icon" :src="iconConsultNow" alt="" aria-hidden="true" />
            <span>{{ card.ctaLabel ?? 'Consult Now' }}</span>
          </button>
          <span v-else class="industry-card__link-icon" aria-hidden="true">
            <img :src="iconArrowCircleOutline" alt="" />
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import iconArrowCircleOutline from '@/assets/icons/icon-arrow-circle-outline.png'
import iconConsultNow from '@/assets/icons/icon-consult-now.png'
import { industryCards } from '@/data/home'

const initialActiveIndex = Math.max(
  0,
  industryCards.findIndex((card) => card.active),
)

const activeIndex = ref(initialActiveIndex)

const resolvedCards = computed(() =>
  industryCards.map((card, index) => ({
    ...card,
    expanded: index === activeIndex.value,
  })),
)

const gridStyle = computed(() => ({
  gridTemplateColumns: resolvedCards.value.map((card) => (card.expanded ? '520px' : '274px')).join(' '),
}))

const setActiveIndex = (index: number) => {
  activeIndex.value = index
}

const getDisplayTitle = (title: string, expanded: boolean) => {
  if (!expanded) {
    return title
  }

  return title.replace(/\s*\n\s*/g, ' ')
}
</script>

<style scoped>
.industries-section {
  min-height: 1030px;
  padding: 108px 120px 0;
  background: #ffffff;
}

.section-heading h2 {
  margin: 0;
  color: #1d2129;
  font-size: 58px;
  font-weight: 600;
  line-height: 1.18;
}

.section-heading p {
  width: 1220px;
  max-width: 1220px;
  margin: 16px 0 0;
  color: #7f8796;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.32;
}

.industries-section__grid {
  display: grid;
  gap: 16px;
  margin-top: 64px;
  transition: grid-template-columns 320ms ease;
}

.industry-card {
  position: relative;
  height: 560px;
  overflow: hidden;
  border: 0;
  padding: 0;
  background: #111827;
  cursor: pointer;
  transition: transform 320ms ease, filter 320ms ease;
}

.industry-card:focus-visible {
  outline: 2px solid #0168f0;
  outline-offset: 4px;
}

.industry-card:not(.industry-card--active) {
  filter: saturate(0.92);
}

.industry-card > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.industry-card::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.24) 38%, rgba(0, 0, 0, 0.58) 100%);
}

.industry-card--active::after {
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.28) 36%, rgba(0, 0, 0, 0.62) 100%),
    linear-gradient(90deg, rgba(1, 104, 240, 0.14) 0%, transparent 28%);
}

.industry-card__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 24px 18px 20px 18px;
}

.industry-card--active .industry-card__overlay {
  padding: 22px 24px 20px 24px;
}

.industry-card h3 {
  margin: 0;
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.18;
  white-space: pre-line;
}

.industry-card--active h3 {
  font-size: 24px;
}

.industry-card__title--single-line {
  white-space: nowrap;
}

.industry-card__description {
  width: 440px;
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 16px;
  font-weight: 300;
  line-height: 1.36;
}

.industry-card__cta {
  margin-top: auto;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px 10px 12px;
  border: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(8px);
}

.industry-card__cta-icon {
  width: 20px;
  height: 20px;
  display: block;
}

.industry-card__link-icon {
  display: block;
  margin-top: auto;
  padding: 0;
}

.industry-card__link-icon img {
  width: 48px;
  height: 48px;
  display: block;
}
</style>
