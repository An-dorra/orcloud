<template>
  <InteractiveHoverCard class="vip-scenario-card relative h-[149px] w-[660.59px] overflow-hidden rounded-[24px] backdrop-blur-[20px]">
    <img class="absolute inset-0 h-full w-full object-cover" :src="card.backgroundSrc" alt="" aria-hidden="true" />
    <div class="relative flex h-full items-start gap-4 px-6 pt-6">
      <img class="h-[30px] w-[30px] shrink-0" :src="card.iconSrc" alt="" aria-hidden="true" />
      <div class="flex w-[543px] flex-col gap-6">
        <h3 class="m-0 text-[24px] leading-[29px] font-semibold text-white">{{ card.title }}</h3>
        <p class="m-0 text-[16px] leading-6 font-normal text-[rgba(255,255,255,0.8)]">
          {{ card.description }}
        </p>
      </div>
    </div>
  </InteractiveHoverCard>
</template>

<script setup lang="ts">
import type { VipGuaranteeCard } from '@/data/vipMemberService'
import InteractiveHoverCard from '@/views/infrastructure/components/InteractiveHoverCard.vue'

defineProps<{
  card: VipGuaranteeCard
}>()
</script>
