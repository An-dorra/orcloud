<template>
  <article
    class="news-card group h-[501px] w-[533.33px] cursor-pointer rounded-[30px] border border-[#e6e6e6] bg-white p-6 transition-all duration-300 ease-out hover:z-10 hover:scale-[1.015] hover:shadow-[0_14px_38px_rgba(1,104,240,0.16)]"
  >
    <div class="news-card__image-frame h-[252px] w-[485px] overflow-hidden rounded-[24px]">
      <img class="news-card__image block h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" :src="card.image" :alt="card.title" />
    </div>
    <h3 class="mt-[33px] min-h-[87px] w-[485px] text-[24px] leading-[1.2] font-semibold text-[#1d2129] transition-colors duration-300 group-hover:text-[#0168f0]">
      {{ card.title }}
    </h3>
    <div class="news-card__footer mt-[33px] flex items-center justify-between">
      <time class="text-[16px] tracking-[1px] text-[#86909c] transition-colors duration-300 group-hover:text-[#0168f0]">{{ card.date }}</time>
      <img class="block h-12 w-12 transition-all duration-300 group-hover:scale-105" :src="iconArrowCircleFilled" alt="" aria-hidden="true" />
    </div>
  </article>
</template>

<script setup lang="ts">
import iconArrowCircleFilled from '@/assets/icons/icon-arrow-circle-filled.png'
import type { NewsCard } from '@/data/home'

defineProps<{
  card: NewsCard
}>()
</script>
