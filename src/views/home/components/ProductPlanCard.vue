<template>
  <article
    class="plan-card"
    :class="{
      'plan-card--highlighted': isHighlighted,
      'plan-card--motion-highlighted': isHighlighted,
      'plan-card--centered': plan.contentAlign === 'center' && !isHighlighted,
    }"
    :style="cardStyle"
  >
    <span v-if="isHighlighted && plan.featured" class="plan-card__badge">BEST SELLER</span>
    <h3 class="plan-card__title plan-card__title--single-line plan-card__content-item plan-card__content-item--title">
      {{ plan.title }}
    </h3>
    <p
      class="plan-card__description plan-card__content-item plan-card__content-item--description"
      :style="descriptionStyle"
    >
      {{ plan.description }}
    </p>
    <ul
      class="plan-card__content-item plan-card__content-item--specs"
      :class="{ 'plan-card__specs--highlighted': isHighlighted }"
    >
      <li v-for="(spec, index) in plan.specs" :key="spec">
        <img
          class="plan-card__check"
          :src="plan.featured && index === 1 ? iconSpecCheckAlt : iconSpecCheck"
          alt=""
          aria-hidden="true"
        />
        {{ spec }}
      </li>
    </ul>
    <div class="plan-card__divider plan-card__content-item plan-card__content-item--divider">
      <img :src="isHighlighted ? iconPlanDividerFeatured : iconPlanDivider" alt="" aria-hidden="true" />
    </div>
    <div class="plan-card__footer plan-card__content-item plan-card__content-item--footer">
      <div class="plan-card__price">
        <p class="plan-card__label">Starting from</p>
        <strong>{{ plan.price }}</strong>
        <span>{{ plan.period }}</span>
      </div>
      <button type="button">Buy Now</button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ProductPlan } from '@/data/home'
import iconPlanDivider from '@/assets/icons/icon-plan-divider.svg'
import iconPlanDividerFeatured from '@/assets/icons/icon-plan-divider-featured.svg'
import iconSpecCheck from '@/assets/icons/icon-spec-check.svg'
import iconSpecCheckAlt from '@/assets/icons/icon-spec-check-alt.svg'

const props = defineProps<{
  plan: ProductPlan
  highlighted?: boolean
}>()

const isHighlighted = computed(() => props.highlighted ?? props.plan.featured ?? false)
const cardStyle = computed(() => {
  const resolvedHeight = isHighlighted.value ? props.plan.highlightedCardHeight ?? 475 : props.plan.cardHeight

  return resolvedHeight ? { height: `${resolvedHeight}px` } : undefined
})
const descriptionStyle = computed(() => (props.plan.descriptionWidth ? { width: `${props.plan.descriptionWidth}px` } : undefined))
</script>

<style scoped>
.plan-card {
  position: relative;
  width: 420px;
  min-height: 422px;
  padding: 40px 32px 44px;
  border: 1px solid #e6e6e6;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    width 220ms ease,
    min-height 220ms ease,
    padding 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
  text-align: left;
}

.plan-card--highlighted {
  z-index: 2;
  width: 440px;
  min-height: 475px;
  padding: 40px 40px 44px;
  border-color: #0d59ff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
}

.plan-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(circle at 50% -8%, rgba(93, 157, 255, 0.18), transparent 42%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0));
  opacity: 0;
  pointer-events: none;
  transition: opacity 420ms ease;
}

.plan-card--motion-highlighted {
  transform: translateY(-10px);
  box-shadow:
    0 24px 50px rgba(8, 23, 54, 0.14),
    0 8px 22px rgba(13, 89, 255, 0.12);
}

.plan-card--motion-highlighted::before {
  opacity: 1;
}

.plan-card__badge {
  position: absolute;
  top: -1px;
  right: -1px;
  padding: 10px 24px 10px 20px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 8px;
  background: #0168f0;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 15px;
}

.plan-card__title {
  margin: 0;
  color: #1a1c1c;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  width: 334px;
  text-align: left;
}

.plan-card__title--single-line {
  white-space: nowrap;
}

.plan-card--highlighted .plan-card__title {
  width: 346px;
  font-size: 36px;
  line-height: 44px;
}

.plan-card--centered:not(.plan-card--highlighted) .plan-card__title {
  width: 356px;
}

.plan-card__description {
  width: 334px;
  min-height: 44px;
  margin: 28px 0 0;
  color: #4e5969;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
  text-align: left;
  white-space: pre-line;
}

.plan-card__content-item {
  position: relative;
  z-index: 1;
}

.plan-card--motion-highlighted .plan-card__content-item {
  animation: plan-card-content-rise 520ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.plan-card--motion-highlighted .plan-card__content-item--title {
  animation-delay: 40ms;
}

.plan-card--motion-highlighted .plan-card__content-item--description {
  animation-delay: 100ms;
}

.plan-card--motion-highlighted .plan-card__content-item--specs {
  animation-delay: 160ms;
}

.plan-card--motion-highlighted .plan-card__content-item--divider {
  animation-delay: 220ms;
}

.plan-card--motion-highlighted .plan-card__content-item--footer {
  animation-delay: 260ms;
}

.plan-card--highlighted .plan-card__description {
  width: 346px;
  font-size: 20px;
  margin-top: 36px;
  line-height: 27px;
}

.plan-card--centered:not(.plan-card--highlighted) .plan-card__description {
  width: 356px;
}

.plan-card ul {
  width: 334px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
}

.plan-card--highlighted ul {
  width: 346px;
  margin-top: 36px;
}

.plan-card li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1d2129;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
}

.plan-card__specs--highlighted li {
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
}

.plan-card__check {
  width: 15px;
  height: 15px;
  display: block;
}

.plan-card__divider {
  width: 334px;
  margin-top: 28px;
}

.plan-card--centered:not(.plan-card--highlighted) .plan-card__divider {
  width: 356px;
}

.plan-card--highlighted .plan-card__divider {
  width: 346px;
  margin-top: 36px;
}

.plan-card__divider img {
  width: 100%;
  height: 1px;
  display: block;
}

.plan-card__footer {
  width: 334px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 28px;
}

.plan-card__price {
  width: fit-content;
  line-height: 0;
}

.plan-card--centered:not(.plan-card--highlighted) .plan-card__footer {
  width: 356px;
}

.plan-card--highlighted .plan-card__footer {
  width: 346px;
  margin-top: 36px;
}
.plan-card__label {
  margin: 0 0 8px;
  color: #86909c;
  font-size: 12px;
  line-height: 24px;
}

.plan-card--highlighted .plan-card__label {
  font-size: 14px;
  line-height: 17px;
}

.plan-card strong {
  display: inline-block;
  color: #0168f0;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
}

.plan-card--highlighted strong {
  font-size: 36px;
  line-height: 36px;
}

.plan-card__price span {
  display: inline-block;
  color: #86909c;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  vertical-align: bottom;
}

.plan-card--highlighted .plan-card__price span {
  font-size: 16px;
  line-height: 25px;
}

.plan-card button {
  width: 120px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background: #1d2129;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 420ms ease;
}

.plan-card--highlighted button {
  width: 130px;
  height: 44px;
  background: linear-gradient(180deg, #0168f0 0%, #5d9dff 100%);
  font-size: 18px;
  box-shadow: 0 12px 24px rgba(1, 104, 240, 0.2);
}

.plan-card--motion-highlighted button {
  animation: plan-card-cta-breathe 2200ms ease-in-out 360ms infinite;
}

@keyframes plan-card-content-rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes plan-card-cta-breathe {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }
}
</style>
