<template>
  <article
    class="plan-card relative overflow-hidden rounded-[24px] border bg-white text-left"
    :class="[
      isHighlighted ? 'plan-card--highlighted plan-card--motion-highlighted z-[2]' : '',
      plan.contentAlign === 'center' && !isHighlighted ? 'plan-card--centered mx-auto' : '',
    ]"
    :style="cardStyle"
  >
    <div class="pointer-events-none absolute inset-0 rounded-[inherit]" :style="surfaceStyle" />
    <span
      v-if="isHighlighted && plan.featured"
      class="plan-card__badge absolute top-[-1px] right-[-1px] z-[2] rounded-tr-[24px] rounded-bl-[8px] bg-[#0168f0] px-6 py-[10px] pl-5 text-[18px] leading-[15px] font-semibold text-white"
    >
      BEST SELLER
    </span>

    <h3 class="plan-card__title plan-card__title--single-line plan-card__content-item plan-card__content-item--title relative z-[1] m-0 whitespace-nowrap text-left font-semibold text-[#1a1c1c]" :style="titleStyle">
      {{ plan.title }}
    </h3>

    <p class="plan-card__description plan-card__content-item plan-card__content-item--description relative z-[1] mt-0 whitespace-pre-line text-left font-[300] text-[#4e5969]" :style="descriptionStyle">
      {{ plan.description }}
    </p>

    <ul
      class="plan-card__content-item plan-card__content-item--specs relative z-[1] m-0 flex list-none flex-col p-0"
      :class="{ 'plan-card__specs--highlighted': isHighlighted }"
      :style="specsListStyle"
    >
      <li v-for="(spec, index) in plan.specs" :key="spec" class="flex items-center gap-2 text-[#1d2129]" :style="specItemStyle">
        <img
          class="plan-card__check block h-[15px] w-[15px]"
          :src="plan.featured && index === 1 ? iconSpecCheckAlt : iconSpecCheck"
          alt=""
          aria-hidden="true"
        />
        {{ spec }}
      </li>
    </ul>

    <div class="plan-card__divider plan-card__content-item plan-card__content-item--divider relative z-[1] mt-0" :style="dividerWrapStyle">
      <img class="block h-px w-full" :src="isHighlighted ? iconPlanDividerFeatured : iconPlanDivider" alt="" aria-hidden="true" />
    </div>

    <div class="plan-card__footer plan-card__content-item plan-card__content-item--footer relative z-[1] mt-0 flex items-end justify-between" :style="footerStyle">
      <div class="plan-card__price w-fit leading-none">
        <p class="plan-card__label m-0 mb-2 text-[#86909c]" :style="labelStyle">Starting from</p>
        <strong class="inline-block text-[#0168f0]" :style="priceStyle">{{ plan.price }}</strong>
        <span class="inline-block align-bottom font-medium text-[#86909c]" :style="periodStyle">{{ plan.period }}</span>
      </div>
      <button class="border-0 font-semibold text-white" type="button" :style="buttonStyle">Buy Now</button>
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
const isCentered = computed(() => props.plan.contentAlign === 'center' && !isHighlighted.value)

const contentWidth = computed(() => {
  if (isHighlighted.value) {
    return 346
  }

  if (isCentered.value) {
    return 356
  }

  return 334
})

const contentTopSpacing = computed(() => (isHighlighted.value ? 36 : 28))

const cardStyle = computed(() => {
  const resolvedHeight = isHighlighted.value ? props.plan.highlightedCardHeight ?? 475 : props.plan.cardHeight

  return {
    width: `${isHighlighted.value ? 440 : 420}px`,
    minHeight: `${isHighlighted.value ? 475 : 422}px`,
    height: resolvedHeight ? `${resolvedHeight}px` : undefined,
    padding: isHighlighted.value ? '40px 40px 44px' : '40px 32px 44px',
    borderColor: isHighlighted.value ? '#0d59ff' : '#e6e6e6',
    boxShadow: isHighlighted.value
      ? '0 24px 50px rgba(8, 23, 54, 0.14), 0 8px 22px rgba(13, 89, 255, 0.12)'
      : '0 0 20px rgba(0, 0, 0, 0.1)',
    transform: isHighlighted.value ? 'translateY(-10px)' : undefined,
    transition:
      'width 220ms ease, min-height 220ms ease, padding 220ms ease, border-color 220ms ease, box-shadow 220ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
  }
})

const surfaceStyle = computed(() => ({
  opacity: isHighlighted.value ? 1 : 0,
  background:
    'radial-gradient(circle at 50% -8%, rgba(93, 157, 255, 0.18), transparent 42%), linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0))',
  transition: 'opacity 420ms ease',
}))

const titleStyle = computed(() => ({
  width: `${contentWidth.value}px`,
  fontSize: isHighlighted.value ? '36px' : '32px',
  lineHeight: isHighlighted.value ? '44px' : '39px',
}))

const descriptionStyle = computed(() => ({
  width: `${props.plan.descriptionWidth ?? contentWidth.value}px`,
  minHeight: '44px',
  marginTop: `${contentTopSpacing.value}px`,
  fontSize: isHighlighted.value ? '20px' : '18px',
  lineHeight: isHighlighted.value ? '27px' : '22px',
}))

const specsListStyle = computed(() => ({
  width: `${contentWidth.value}px`,
  gap: '12px',
  marginTop: `${contentTopSpacing.value}px`,
}))

const specItemStyle = computed(() => ({
  fontSize: isHighlighted.value ? '18px' : '16px',
  fontWeight: isHighlighted.value ? 400 : 300,
  lineHeight: isHighlighted.value ? '22px' : '20px',
}))

const dividerWrapStyle = computed(() => ({
  width: `${contentWidth.value}px`,
  marginTop: `${contentTopSpacing.value}px`,
}))

const footerStyle = computed(() => ({
  width: `${contentWidth.value}px`,
  marginTop: `${contentTopSpacing.value}px`,
}))

const labelStyle = computed(() => ({
  fontSize: isHighlighted.value ? '14px' : '12px',
  lineHeight: isHighlighted.value ? '17px' : '24px',
}))

const priceStyle = computed(() => ({
  fontSize: isHighlighted.value ? '36px' : '32px',
  fontWeight: 700,
  lineHeight: isHighlighted.value ? '36px' : '32px',
}))

const periodStyle = computed(() => ({
  fontSize: isHighlighted.value ? '16px' : '14px',
  lineHeight: isHighlighted.value ? '25px' : '20px',
}))

const buttonStyle = computed(() => ({
  width: `${isHighlighted.value ? 130 : 120}px`,
  height: `${isHighlighted.value ? 44 : 40}px`,
  borderRadius: '8px',
  fontSize: `${isHighlighted.value ? 18 : 16}px`,
  background: isHighlighted.value ? 'linear-gradient(180deg, #0168f0 0%, #5d9dff 100%)' : '#1d2129',
  boxShadow: isHighlighted.value ? '0 12px 24px rgba(1, 104, 240, 0.2)' : undefined,
  transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 420ms ease',
}))
</script>
