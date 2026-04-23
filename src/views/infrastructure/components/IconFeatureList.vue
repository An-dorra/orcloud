<template>
  <div class="flex flex-col" :class="listClass">
    <div
      v-for="(item, index) in items"
      :key="item.title"
      class="reveal-on-scroll flex items-center"
      :class="rowClass"
      :style="{ transitionDelay: `${baseDelay + index * delayStep}ms` }"
    >
      <img
        v-if="iconMode === 'direct-image'"
        class="shrink-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.012]"
        :class="directImageClass"
        :src="item.iconSrc"
        alt=""
        aria-hidden="true"
      />
      <div
        v-else
        class="flex shrink-0 items-center justify-center rounded-full bg-white shadow-[16px_16px_30px_rgba(163,190,254,0.3)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[18px_18px_36px_rgba(93,157,255,0.2)]"
        :class="bubbleClass"
      >
        <img class="shrink-0" :class="iconClass" :src="item.iconSrc" alt="" aria-hidden="true" />
      </div>
      <div class="ml-8 flex flex-col" :class="contentClass">
        <h3 class="m-0 font-semibold text-[#1d2129] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]" :class="titleClass">
          {{ item.title }}
        </h3>
        <p class="mt-[10px] mb-0 font-normal text-[#4e5969] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]" :class="descriptionClass">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface IconFeatureListItem {
  iconSrc: string
  title: string
  description: string
}

withDefaults(
  defineProps<{
    items: IconFeatureListItem[]
    listClass?: string
    rowClass?: string
    iconMode?: 'bubble' | 'direct-image'
    bubbleClass?: string
    iconClass?: string
    directImageClass?: string
    contentClass?: string
    titleClass?: string
    descriptionClass?: string
    baseDelay?: number
    delayStep?: number
  }>(),
  {
    listClass: 'gap-[30px]',
    rowClass: 'group',
    iconMode: 'bubble',
    bubbleClass: 'h-[100px] w-[100px]',
    iconClass: 'h-[50px] w-[50px]',
    directImageClass: 'h-[140px] w-[140px]',
    contentClass: 'w-[631px]',
    titleClass: 'text-[24px] leading-[29px]',
    descriptionClass: 'text-[18px] leading-6',
    baseDelay: 180,
    delayStep: 80,
  },
)
</script>
