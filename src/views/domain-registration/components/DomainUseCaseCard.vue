<template>
  <article
    class="domain-use-case-card group relative flex h-[428px] cursor-pointer overflow-hidden rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] translate-y-0 scale-100 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:z-10 hover:-translate-y-[4px] hover:scale-[1.012] hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]"
    :class="widthClass"
  >
    <img class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" :src="useCase.imageSrc" alt="" aria-hidden="true" />
    <img v-if="useCase.overlaySrc" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" :src="useCase.overlaySrc" alt="" aria-hidden="true" />
    <div class="absolute inset-x-0 bottom-0 h-[176px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.8)_100%)]" />
    <div class="relative z-[1] mt-auto flex w-full flex-col px-6 pb-6">
      <h3 class="m-0 w-full text-[22px] leading-[27px] font-semibold text-white transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#dbeaff]">{{ useCase.title }}</h3>
      <p class="mt-[6px] mb-0 w-full text-[18px] leading-[normal] font-medium text-[rgba(255,255,255,0.7)] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#f2f7ff]">{{ normalizedDescription }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { DomainUseCase } from '@/data/domainRegistration'

const props = defineProps<{
  useCase: DomainUseCase
  index: number
}>()

const widthClass = computed(() => (props.index === 0 ? 'w-[311px]' : 'w-[316px]'))
const normalizedDescription = computed(() => props.useCase.description.replace(/ - /g, ' – '))
</script>
