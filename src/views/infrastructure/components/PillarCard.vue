<template>
  <InteractiveHoverCard
    class="pillar-card relative overflow-hidden rounded-[24px] border border-[#ebedf1] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
    :class="[
      widthClass,
      heightClass,
      dark ? 'bg-[linear-gradient(180deg,#0168f0_0%,#5d9dff_100%)] border-[#5d9dff]' : '',
    ]"
  >
    <div class="relative flex h-full flex-col px-[41px] pt-[41px] pb-[41px]">
      <h3
        class="m-0 text-[32px] leading-9 font-bold transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        :class="dark ? 'text-white group-hover:text-white' : 'text-[#0f172a] group-hover:text-[#0168f0]'"
      >
        {{ title }}
      </h3>
      <p
        class="mt-4 mb-0 text-[18px] leading-6 font-normal transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        :class="[descriptionWidthClass, dark ? 'text-[rgba(255,255,255,0.8)] group-hover:text-white' : 'text-[#4e5969] group-hover:text-[#1d2129]']"
      >
        {{ description }}
      </p>

      <div v-if="tags.length" class="mt-auto flex flex-wrap gap-6 pt-12">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-[8px] px-4 py-2 text-[18px] tracking-[1px] uppercase transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          :class="dark ? 'bg-[rgba(255,255,255,0.14)] text-white' : 'bg-[#f6f7fb] text-[#0168f0] group-hover:bg-[rgba(1,104,240,0.08)]'"
        >
          {{ tag }}
        </span>
      </div>

      <slot />
    </div>
  </InteractiveHoverCard>
</template>

<script setup lang="ts">
import InteractiveHoverCard from './InteractiveHoverCard.vue'

withDefaults(
  defineProps<{
    title: string
    description: string
    tags?: string[]
    widthClass?: string
    heightClass?: string
    descriptionWidthClass?: string
    dark?: boolean
  }>(),
  {
    tags: () => [],
    widthClass: 'w-full',
    heightClass: 'h-full',
    descriptionWidthClass: 'w-full',
    dark: false,
  },
)
</script>
