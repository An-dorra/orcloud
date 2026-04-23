<template>
  <div class="group flex h-[114px] w-[909px] items-center gap-6">
    <img
      class="h-[120px] w-[120px] shrink-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.012]"
      :src="item.iconSrc"
      alt=""
      aria-hidden="true"
    />
    <div class="flex h-[114px] w-[813px] flex-col justify-center pl-[12px]">
      <h3
        class="m-0 whitespace-nowrap text-[24px] leading-[29px] font-semibold text-[#1d2129] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]"
        :class="item.titleWidthClass"
      >
        {{ item.title }}
      </h3>
      <p
        class="mt-3 mb-0 text-[18px] leading-[22px] font-normal text-[#4e5969] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#1d2129]"
        :class="item.descriptionWidthClass"
      >
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { dataCenterReliabilityFeatures } from '@/data/dataCenter'

defineProps<{
  item: (typeof dataCenterReliabilityFeatures)[number]
}>()
</script>
