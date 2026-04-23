<template>
  <article
    class="domain-step-card group flex h-[131px] w-[520px] cursor-pointer items-start rounded-[24px] bg-white px-8 py-6 shadow-[0_0_0_1px_rgba(235,237,241,0.8)] translate-y-0 scale-100 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:z-10 hover:-translate-y-[4px] hover:scale-[1.012] hover:bg-[#fbfdff] hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]"
  >
    <div class="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" :class="badgeClass">
      <img class="h-7 w-7" :src="step.iconSrc" alt="" aria-hidden="true" />
    </div>
    <div class="ml-6 flex w-[372px] flex-col pt-[2px]">
      <h3 class="m-0 text-[22px] leading-[27px] font-semibold text-[#1d2129] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">{{ step.title }}</h3>
      <p class="mt-[10px] mb-0 text-[18px] leading-[22px] font-[300] text-[#1d2129] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">{{ normalizedDescription }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { DomainStep } from '@/data/domainRegistration'

const props = defineProps<{
  step: DomainStep
}>()

const badgeClass = computed(() => {
  switch (props.step.tone) {
    case 'violet':
      return 'bg-[linear-gradient(90deg,#6636ff_0%,#bb88ff_100%)]'
    case 'orange':
      return 'bg-[linear-gradient(90deg,#ea3132_0%,#ff8533_100%)]'
    default:
      return 'bg-[linear-gradient(180deg,#0168f0_0%,#5d9dff_100%)]'
  }
})

const normalizedDescription = computed(() => props.step.description.replace(/->/g, '→'))
</script>
