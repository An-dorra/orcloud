<template>
  <article class="product-pricing-card group flex h-[460px] w-[390px] flex-col rounded-[24px] border border-[#e6e6e6] bg-white px-8 py-10 text-left transition-all duration-300 ease-out hover:z-10 hover:scale-[1.015] hover:shadow-[0_14px_38px_rgba(1,104,240,0.16)]">
    <h3 class="m-0 w-[326px] text-[24px] leading-[29px] font-semibold text-[#1a1c1c] transition-colors duration-300 group-hover:text-[#0168f0]">{{ plan.title }}</h3>
    <p class="mt-7 mb-0 h-11 w-[326px] text-[18px] leading-[22px] font-[300] text-[#4e5969] transition-colors duration-300 group-hover:text-[#0168f0]">
      {{ plan.description }}
    </p>

    <ul class="mt-7 flex w-[326px] list-none flex-col gap-3 p-0">
      <li
        v-for="spec in plan.specs"
        :key="spec"
        class="product-pricing-card__spec flex h-5 items-center gap-2 text-[16px] leading-5 font-normal text-[#1d2129] transition-colors duration-300 group-hover:text-[#0168f0]"
      >
        <img class="h-[15px] w-[15px]" :src="iconSpecCheck" alt="" aria-hidden="true" />
        {{ spec }}
      </li>
    </ul>

    <div class="mt-7 h-px w-[326px] bg-[#e6e6e6]" aria-hidden="true" />

    <div class="mt-7 flex gap-3">
      <span
        v-for="tag in plan.tags"
        :key="tag"
        class="product-pricing-card__tag inline-flex h-7 items-center justify-center rounded-[4px] bg-[#f3f8ff] px-3 text-[16px] leading-5 font-medium text-[#0168f0]"
      >
        {{ tag }}
      </span>
    </div>

    <div class="mt-auto flex w-[326px] items-end justify-between">
      <div>
        <p class="m-0 text-[12px] leading-6 font-normal text-[#86909c]">Starting from</p>
        <div class="mt-2 flex items-end gap-[6px]">
          <strong class="flex items-start gap-0 text-[#0168f0]">
            <span class="text-[18px] leading-[13px] font-medium">$</span>
            <span class="text-[32px] leading-[22px] font-bold">{{ plan.price }}</span>
          </strong>
          <span class="text-[14px] leading-5 font-medium text-[#86909c]">/ month</span>
        </div>
      </div>
      <button class="h-10 w-[120px] rounded-[8px] border-0 bg-[#1d2129] text-[16px] leading-6 font-semibold text-white transition-colors duration-300 group-hover:bg-[#0168f0]" type="button">
        Buy Now
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ProductCenterPlan } from '@/data/productCenter'
import iconSpecCheck from '@/assets/icons/icon-spec-check.svg'

defineProps<{
  plan: ProductCenterPlan
}>()
</script>
