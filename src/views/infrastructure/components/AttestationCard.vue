<template>
  <InteractiveHoverCard
    class="attestation-card flex h-[328px] w-[538.667px] flex-col items-center rounded-[24px] border border-[#ebedf1] bg-white px-10 pt-[65px] pb-[65px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
  >
    <img
      class="h-24 w-24 shrink-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.012]"
      :src="item.iconSrc"
      alt=""
      aria-hidden="true"
    />
    <h3 class="mt-6 mb-0 text-center text-[24px] leading-[29px] font-semibold text-[#0168f0] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#005fd8]">
      {{ item.title }}
    </h3>
    <p class="mt-4 mb-0 w-[300px] text-center text-[16px] leading-5 font-normal text-[#7f8796] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#4e5969]">
      {{ item.description }}
    </p>
  </InteractiveHoverCard>
</template>

<script setup lang="ts">
import type { trustCenterAttestations } from '@/data/trustCenter'

import InteractiveHoverCard from './InteractiveHoverCard.vue'

defineProps<{
  item: (typeof trustCenterAttestations)[number]
}>()
</script>
