<template>
  <InteractiveHoverCard
    class="data-center-facility-card flex w-[539px] flex-col rounded-[24px] bg-white px-6 pt-6 pb-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
  >
    <div class="relative h-[282px] overflow-hidden rounded-[24px] border border-[#ebedf1]">
      <img class="h-full w-full object-cover" :src="card.imageSrc" alt="" aria-hidden="true" />
    </div>
    <div class="mt-8 flex flex-col gap-3 px-6">
      <h3 class="m-0 text-[32px] leading-7 font-semibold text-[#1d2129] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">
        {{ card.title }}
      </h3>
      <p class="m-0 text-[18px] leading-6 font-normal text-[#4e5969] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#1d2129]">
        {{ card.description }}
      </p>
    </div>
  </InteractiveHoverCard>
</template>

<script setup lang="ts">
import type { dataCenterFacilityCards } from '@/data/dataCenter'
import InteractiveHoverCard from '@/views/infrastructure/components/InteractiveHoverCard.vue'

defineProps<{
  card: (typeof dataCenterFacilityCards)[number]
}>()
</script>
