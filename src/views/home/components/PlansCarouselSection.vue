<template>
  <FullBleedSection
    class="overflow-hidden bg-white min-[1921px]:overflow-y-hidden min-[1921px]:overflow-x-visible"
    content-class="h-[1000px] pt-[108px]"
  >
    <div class="ml-[120px]">
      <h2 class="reveal-on-scroll m-0 text-[56px] leading-[1.22] font-semibold text-[#1d2129]">Stable, Secure, Credible</h2>
      <p class="reveal-on-scroll reveal-delay-100 mt-4 w-[1076px] text-[28px] leading-[1.22] font-[300] text-[#4e5969]">
        Select from our wide range of cloud hosting solutions optimized for various workloads and enterprise scales.
      </p>
    </div>

    <div class="plans-carousel-section__carousel reveal-on-scroll reveal-delay-200 mt-[84px]">
      <FixedSlotCarousel
        :items="productPlans"
        :initial-index="featuredPlanIndex"
        :slot-layouts="slotLayouts"
        :viewport-width="1920"
        :viewport-height="475"
        :autoplay-ms="3500"
      >
        <template #default="{ item, active }">
          <ProductPlanCard :plan="item as ProductPlan" :highlighted="active" />
        </template>
      </FixedSlotCarousel>
    </div>

    <button
      class="reveal-on-scroll reveal-delay-300 mt-[33px] ml-[835px] inline-flex h-10 w-[250px] items-center justify-center border-0 bg-transparent p-0"
      type="button"
      aria-label="More plans"
    >
      <span class="sr-only">More</span>
      <img class="block h-10 w-[250px]" :src="buttonMorePill" alt="" aria-hidden="true" />
    </button>
  </FullBleedSection>
</template>

<script setup lang="ts">
import FixedSlotCarousel from '@/components/base/FixedSlotCarousel.vue'
import FullBleedSection from '@/components/layout/FullBleedSection.vue'

import buttonMorePill from '@/assets/icons/button-more-pill.png'
import { productPlans, type ProductPlan } from '@/data/home'

import ProductPlanCard from './ProductPlanCard.vue'
import type { FixedSlotLayout } from '@/components/base/fixed-slot-carousel'

const featuredPlanIndex = Math.max(
  0,
  productPlans.findIndex((plan) => plan.featured),
)

const slotLayouts: FixedSlotLayout[] = [
  { name: 'far-prev', offset: -2, left: -48, top: 18, zIndex: 1 },
  { name: 'prev', offset: -1, left: 346, top: 3, zIndex: 2 },
  { name: 'center', offset: 0, left: 740, top: -8, zIndex: 4 },
  { name: 'next', offset: 1, left: 1154, top: 0, zIndex: 2 },
  { name: 'far-next', offset: 2, left: 1548, top: 18, zIndex: 1 },
]
</script>
