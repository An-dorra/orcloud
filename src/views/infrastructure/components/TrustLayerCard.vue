<template>
  <InteractiveHoverCard class="trust-layer-card flex w-[539px] flex-col">
    <img class="h-[225px] w-full rounded-[24px] object-cover shadow-[0_1px_2px_rgba(0,0,0,0.05)]" :src="layer.imageSrc" alt="" aria-hidden="true" />
    <div class="pt-6">
      <h3 class="m-0 text-[32px] leading-7 font-semibold text-[#0168f0] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#005fd8]">
        {{ layer.title }}
      </h3>
      <p class="mt-3 mb-0 text-[18px] leading-6 font-normal text-[#4e5969] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#1d2129]">
        {{ layer.description }}
      </p>
    </div>
  </InteractiveHoverCard>
</template>

<script setup lang="ts">
import type { trustCenterLayers } from '@/data/trustCenter'

import InteractiveHoverCard from './InteractiveHoverCard.vue'

defineProps<{
  layer: (typeof trustCenterLayers)[number]
}>()
</script>
