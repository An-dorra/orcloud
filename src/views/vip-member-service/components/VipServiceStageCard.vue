<template>
  <InteractiveHoverCard
    class="vip-service-stage-card flex h-[419px] w-[538px] flex-col rounded-[24px] bg-white px-10 pt-10 pb-[39px] shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
  >
    <img class="h-20 w-20 shrink-0" :src="card.iconSrc" alt="" aria-hidden="true" />
    <h3
      class="mt-6 mb-0 text-[32px] leading-[39px] font-semibold text-[#1d2129] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]"
    >
      {{ card.title }}
    </h3>
    <p class="mt-4 mb-0 min-h-[72px] text-[18px] leading-6 font-normal text-[#3f4751]">
      {{ card.description }}
    </p>
    <span class="mt-6 block h-px w-[420px] bg-[#ebedf1]" aria-hidden="true" />
    <div class="mt-6 flex flex-col gap-[11.5px]">
      <div v-for="bullet in card.bullets" :key="bullet" class="flex items-center gap-2">
        <span class="h-[11px] w-[11px] rounded-full bg-[#5d9dff]" />
        <span class="text-[16px] leading-5 font-normal text-[#86909c]">{{ bullet }}</span>
      </div>
    </div>
  </InteractiveHoverCard>
</template>

<script setup lang="ts">
import type { VipServiceStageCardItem } from '@/data/vipMemberService'
import InteractiveHoverCard from '@/views/infrastructure/components/InteractiveHoverCard.vue'

defineProps<{
  card: VipServiceStageCardItem
}>()
</script>
