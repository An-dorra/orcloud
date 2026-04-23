<template>
  <article
    class="domain-feature-card group flex h-[176px] w-[820px] cursor-pointer rounded-[20px] bg-[#f6f7fb] px-[36px] py-[31px] translate-y-0 scale-100 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:z-10 hover:-translate-y-[4px] hover:scale-[1.012] hover:bg-[#fbfdff] hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]"
  >
    <div class="mt-[3px] flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#1677ff_0%,#5ea2ff_100%)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
      <img class="h-[44px] w-[44px]" :src="feature.iconSrc" alt="" aria-hidden="true" />
    </div>
    <div class="ml-[24px] flex w-[640px] flex-col pt-[6px]">
      <h3 class="m-0 text-[24px] leading-[29px] font-semibold text-[#1d2129] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">{{ feature.title }}</h3>
      <p class="mt-[16px] mb-0 text-[16px] leading-[20px] font-normal text-[#4e5969] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">{{ feature.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { DomainFeature } from '@/data/domainRegistration'

defineProps<{
  feature: DomainFeature
}>()
</script>
