<template>
  <FullBleedSection class="orclaw-cta-section bg-[#1d2129]" content-class="relative h-[485px] overflow-hidden">
    <img class="absolute top-[-237px] left-[883px] h-[1159px] w-[1159px]" :src="orclawRingBackground" alt="" />
    <div class="orclaw-cta-section__crab-reveal reveal-on-scroll reveal-delay-300 absolute top-[82px] right-[147px] h-[495px] w-[682px]">
      <div class="h-full w-full rotate-[-21deg]">
        <OrclawCrab class="h-full w-full" />
      </div>
    </div>
    <div class="orclaw-copy absolute top-[82px] left-[120px] text-white">
      <h2 class="reveal-on-scroll m-0 text-[56px] leading-[1.22] font-bold" v-html="formattedTitle" />
      <p class="reveal-on-scroll reveal-delay-100 mt-7 w-[666px] text-[26px] leading-[1.22] font-[300] text-[rgba(255,255,255,0.6)]">
        {{ description }}
      </p>
      <a
        :href="href"
        class="reveal-on-scroll reveal-delay-200 mt-[58px] inline-flex h-10 min-w-[150px] items-center justify-center rounded-[400px] bg-[#0168f0] px-[30px] text-[16px] font-semibold text-white no-underline"
      >
        {{ ctaLabel }}
      </a>
    </div>
  </FullBleedSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import orclawRingBackground from '@/assets/images/orclaw-ring-background.svg'
import OrclawCrab from '@/views/home/components/OrclawCrab.vue'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    ctaLabel?: string
    href?: string
  }>(),
  {
    title: 'Meet "OrClaw"\nYour Personal AI Assistant',
    description: 'Intelligent resource management, troubleshooting, and cloud optimization at your fingertips.',
    ctaLabel: 'Click to jump →',
    href: '#',
  },
)

const formattedTitle = computed(() => props.title.replace(/\n/g, '<br />'))
</script>
