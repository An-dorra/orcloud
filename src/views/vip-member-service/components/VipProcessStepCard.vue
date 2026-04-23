<template>
  <InteractiveHoverCard
    class="vip-process-step-card relative flex items-center justify-center rounded-[24px] px-8 py-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
    :class="highlighted ? 'bg-[linear-gradient(180deg,#0168f0_0%,#5d9dff_100%)]' : 'bg-white'"
    :style="{ width, height }"
  >
    <div class="flex flex-col items-center">
      <div
        class="flex items-center justify-center rounded-[12px]"
        :class="highlighted ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-[#f3f8ff]'"
        :style="{ width: iconBoxSize, height: iconBoxSize }"
      >
        <template v-if="iconSrc">
          <img :class="iconSizeClass" :src="iconSrc" alt="" aria-hidden="true" />
        </template>
        <template v-else>
          <span class="font-bold" :class="[numberClass, highlighted ? 'text-white' : 'text-[#0168f0]']">{{ number }}</span>
        </template>
      </div>

      <h3
        class="mb-0 text-center font-semibold"
        :class="[titleClass, highlighted ? 'text-white' : 'text-[#1d2129]']"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="mb-0 text-center font-normal"
        :class="[descriptionClass, highlighted ? 'text-[rgba(255,255,255,0.8)]' : 'text-[#86909c]']"
      >
        {{ description }}
      </p>
    </div>
  </InteractiveHoverCard>
</template>

<script setup lang="ts">
import InteractiveHoverCard from '@/views/infrastructure/components/InteractiveHoverCard.vue'

withDefaults(
  defineProps<{
    title: string
    description?: string
    number?: string
    iconSrc?: string
    highlighted?: boolean
    width?: string
    height?: string
    titleClass?: string
    descriptionClass?: string
    iconBoxSize?: string
    iconSizeClass?: string
    numberClass?: string
  }>(),
  {
    description: '',
    number: '',
    iconSrc: '',
    highlighted: false,
    width: '355px',
    height: '242px',
    titleClass: 'mt-6 text-[24px] leading-[29px]',
    descriptionClass: 'mt-3 text-[16px] leading-[17px]',
    iconBoxSize: '48px',
    iconSizeClass: 'h-8 w-8',
    numberClass: 'text-[24px] leading-6',
  },
)
</script>
