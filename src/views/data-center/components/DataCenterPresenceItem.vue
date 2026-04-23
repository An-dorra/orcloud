<template>
  <div class="relative flex h-[92px] w-[360px] items-start">
    <span class="absolute top-[9px] left-0 h-[33px] w-[10px] rounded-[50px]" :class="active ? 'bg-[#0168f0]' : 'bg-[#1d2129]'" aria-hidden="true" />
    <div class="ml-[72px] flex w-[320px] flex-col">
      <h3 class="m-0 text-[24px] leading-[29px] font-bold tracking-[-0.01em]" :class="active ? 'text-[#0168f0]' : 'text-[#1d2129]'">{{ item.title }}</h3>
      <p class="mt-[10px] mb-0 text-[16px] leading-[19px] font-normal tracking-[-0.01em] text-[#7f8796]">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { dataCenterPresenceItems } from '@/data/dataCenter'

defineProps<{
  item: (typeof dataCenterPresenceItems)[number]
  active?: boolean
}>()
</script>
