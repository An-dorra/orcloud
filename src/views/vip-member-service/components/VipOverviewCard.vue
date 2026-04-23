<template>
  <InteractiveHoverCard
    class="vip-overview-card relative h-[221.5px] overflow-hidden rounded-[8px] bg-white px-8 pt-8"
    :class="[card.widthClass, card.dark ? 'text-white' : 'text-[#1d2129]']"
  >
    <img
      v-if="card.backgroundSrc"
      class="absolute inset-0 h-full w-full object-cover"
      :src="card.backgroundSrc"
      alt=""
      aria-hidden="true"
    />

    <div class="relative flex h-full flex-col">
      <h3 class="m-0 text-[24px] leading-10 font-semibold">
        {{ card.title }}
      </h3>
      <p
        class="mt-0 text-[16px] font-normal"
        :class="
          card.dark
            ? 'text-[rgba(255,255,255,0.8)] leading-6'
            : card.title === 'VIP 1-to-1 Support'
              ? 'text-[#3f4751] leading-5'
              : 'text-[#86909c] leading-5'
        "
      >
        <template v-if="card.title === '1-Day ICP'">
          Rapid document review and<br />
          processing.
        </template>
        <template v-else-if="card.title === 'No ICP Needed'">
          Global regions available without<br />
          ICP filing requirements.
        </template>
        <template v-else>
          {{ card.description }}
        </template>
      </p>

      <img
        v-if="card.iconSrc"
        class="absolute"
        :class="
          card.title === '1-Day ICP'
            ? 'left-[326px] top-[148px] h-[39px] w-[49.4px]'
            : card.title === '24/7/365'
              ? 'left-[326px] top-[148px] h-[50px] w-[49.825px]'
              : card.title === 'No ICP Needed'
                ? 'left-[326px] top-[148px] h-[50px] w-[50px]'
                : 'left-[331px] top-[148px] h-[50px] w-[39.6px]'
        "
        :src="card.iconSrc"
        alt=""
        aria-hidden="true"
      />

      <img
        v-if="card.accentIconSrc"
        class="absolute left-[740px] top-[135px] h-[60px] w-[60px]"
        :src="card.accentIconSrc"
        alt=""
        aria-hidden="true"
      />
    </div>
  </InteractiveHoverCard>
</template>

<script setup lang="ts">
import type { VipMembershipOverviewCard } from '@/data/vipMemberService'
import InteractiveHoverCard from '@/views/infrastructure/components/InteractiveHoverCard.vue'

defineProps<{
  card: VipMembershipOverviewCard
}>()
</script>
