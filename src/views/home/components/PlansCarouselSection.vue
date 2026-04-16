<template>
  <FullBleedSection class="plans-carousel-section" content-class="plans-carousel-section__shell">
    <div class="plans-carousel-section__heading">
      <h2>Stable, Secure, Credible</h2>
      <p>Select from our wide range of cloud hosting solutions optimized for various workloads and enterprise scales.</p>
    </div>

    <div class="plans-carousel__viewport">
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

    <button class="plans-carousel__more" type="button" aria-label="More plans">
      <span class="plans-carousel__more-sr-only">More</span>
      <img :src="buttonMorePill" alt="" aria-hidden="true" />
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

<style scoped>
.plans-carousel-section {
  overflow: hidden;
  background: #ffffff;
}

.plans-carousel-section :deep(.plans-carousel-section__shell) {
  height: 1000px;
  padding-top: 108px;
}

.plans-carousel-section__heading {
  margin-left: 120px;
}

.plans-carousel-section__heading h2 {
  margin: 0;
  color: #1d2129;
  font-size: 56px;
  font-weight: 600;
  line-height: 1.22;
}

.plans-carousel-section__heading p {
  width: 1076px;
  margin: 16px 0 0;
  color: #4e5969;
  font-size: 28px;
  font-weight: 300;
  line-height: 1.22;
}

.plans-carousel__viewport {
  margin-top: 84px;
  margin-left: 0;
}

.plans-carousel__more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 40px;
  margin-top: 33px;
  margin-left: 835px;
  border: 0;
  padding: 0;
  background: transparent;
}

.plans-carousel__more img {
  width: 250px;
  height: 40px;
  display: block;
}

.plans-carousel__more-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 1921px) {
  .plans-carousel-section {
    overflow-x: visible;
    overflow-y: hidden;
  }
}
</style>
