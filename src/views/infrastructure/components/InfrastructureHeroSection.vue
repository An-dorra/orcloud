<template>
  <FullBleedSection
    class="overflow-hidden bg-no-repeat [background-position:center_top] [background-size:1920px_686px] min-[1921px]:[background-size:var(--viewport-width,100vw)_auto]"
    content-class="relative h-[686px] overflow-hidden"
    :style="{ backgroundImage: `url(${heroBackground})` }"
  >
    <div class="absolute top-[200px] left-[120px] flex flex-col" :class="contentClass">
      <h1 class="reveal-on-scroll m-0 text-[#1d2129]" :class="titleClass" v-html="formattedTitle" />
      <p class="reveal-on-scroll reveal-delay-100 mt-6 mb-0 font-[300] text-[#4e5969]" :class="descriptionClass">
        {{ description }}
      </p>
    </div>
  </FullBleedSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import heroBackground from '@/assets/infrastructure/hero/infrastructure-hero-background.jpg'
import FullBleedSection from '@/components/layout/FullBleedSection.vue'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    contentClass?: string
    titleClass?: string
    descriptionClass?: string
  }>(),
  {
    contentClass: 'w-[916px]',
    titleClass: 'w-[888px] text-[56px] leading-[68px] font-semibold',
    descriptionClass: 'w-[916px] text-[28px] leading-10',
  },
)

const formattedTitle = computed(() => props.title.replace(/\n/g, '<br />'))
</script>
