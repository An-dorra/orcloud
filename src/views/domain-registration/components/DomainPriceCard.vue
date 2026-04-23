<template>
  <article
    class="domain-price-card group flex h-[419px] w-[390px] cursor-pointer flex-col overflow-hidden rounded-[24px] border-[2px] border-[#e7e9ee] bg-white px-[30px] pt-[42px] pb-[38px] translate-y-0 scale-100 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:z-10 hover:-translate-y-[4px] hover:scale-[1.012] hover:border-[rgba(1,104,240,0.14)] hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]"
  >
    <h3 class="m-0 text-[40px] leading-[48px] font-semibold tracking-0 text-[#0168f0] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">{{ card.extension }}</h3>
    <p class="mt-[29px] mb-0 w-[318px] text-[18px] leading-[22px] font-normal text-[#5d6678] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">{{ card.description }}</p>

    <div class="mt-[35px] flex items-end gap-[18px] leading-[0]">
      <div class="flex flex-col gap-[10px]">
        <p class="m-0 text-[12px] leading-[14px] font-normal text-[#b0b7c5] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#7ea7ea]">First Year Special</p>
        <div class="flex items-end gap-[6px] whitespace-nowrap text-[#0168f0] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">
          <div class="flex items-start gap-[2px]">
            <span class="text-[18px] leading-[normal] font-medium">$</span>
            <span class="text-[28px] leading-[normal] font-bold">66</span>
          </div>
          <span class="text-[14px] leading-5 font-semibold">/ First Year</span>
        </div>
      </div>
      <p class="mb-[2px] ml-[6px] text-[14px] leading-[normal] font-normal text-[#a9b1bf] line-through transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#8ca4c5]">$ 99 / year</p>
    </div>

    <p class="mt-[31px] mb-0 text-[16px] leading-6 font-normal text-[#6a7385] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0168f0]">{{ card.renewalPrice }}</p>

    <div class="mt-auto flex flex-col gap-[28px]">
      <div class="h-px w-full bg-[#eceef2] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[rgba(1,104,240,0.14)]" aria-hidden="true" />

      <button class="h-[50px] w-full rounded-[8px] border-0 bg-[#1f2430] text-[16px] leading-6 font-semibold text-white transition-[background-color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#0168f0] group-hover:translate-y-[-1px]" type="button">
        Buy Now
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { DomainPriceCard as DomainPriceCardData } from '@/data/domainRegistration'

defineProps<{
  card: DomainPriceCardData
}>()
</script>
