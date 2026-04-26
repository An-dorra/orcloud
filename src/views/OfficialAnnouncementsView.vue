<template>
  <div class="official-announcements-page w-[1920px] bg-white text-[#1d2129]">
    <FullBleedSection
      class="overflow-hidden bg-[linear-gradient(180deg,rgba(160,198,255,0.2)_0%,rgba(160,198,255,0)_95.918%)] bg-no-repeat [background-position:center_top] [background-size:1920px_686px] min-[1921px]:[background-size:var(--viewport-width,100vw)_auto]"
      content-class="relative h-[686px] overflow-hidden"
    >
      <div class="pointer-events-none absolute top-[43px] right-1 h-[409px] w-[795px] rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(93,157,255,0.18)_0%,rgba(93,157,255,0.09)_38%,rgba(93,157,255,0)_72%)] blur-[12px]" />

      <div class="absolute top-[200px] left-[120px] flex w-[916px] flex-col">
        <h1 class="m-0 text-[56px] leading-[68px] font-bold tracking-[-0.02em] text-[#1d2129]">
          <span class="text-[#0168f0]">Official</span> Announcements
        </h1>
        <p class="mt-6 mb-0 w-[916px] text-[28px] leading-10 font-normal text-[#4e5969]">
          {{ officialAnnouncementsHero.description }}
        </p>
      </div>
    </FullBleedSection>

    <section class="h-[1094px] bg-white pt-[60px]">
      <div class="flex justify-center">
        <div class="flex h-14 items-center gap-6 rounded-[800px] bg-[#f3f3f3] p-1">
          <button
            v-for="tab in officialAnnouncementsTabs"
            :key="tab"
            class="flex h-12 items-center justify-center rounded-[800px] px-8 py-[10px] text-center text-[16px] leading-6 font-medium transition-colors"
            :class="
              activeTab === tab
                ? 'bg-white text-[#0168f0] shadow-[0_1px_1px_rgba(0,0,0,0.05)]'
                : 'text-[#4e5969] hover:text-[#1d2129]'
            "
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div class="mx-[120px] mt-[56px] flex flex-col">
        <template
          v-for="(item, index) in filteredList"
          :key="item.id"
        >
          <a
            :href="item.href"
            class="group flex h-36 items-center justify-between rounded-[8px] px-6 py-8 text-left no-underline"
            :style="{ transitionDelay: `${index * 50}ms` }"
          >
            <div class="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-[4px] bg-[#eef4fc]">
              <span class="text-[30px] leading-[30px] font-bold text-[#0168f0]">{{ item.day }}</span>
              <span class="pt-1 text-[12px] leading-[15px] font-bold uppercase tracking-[1px] text-[#4e5969]/70">{{ item.monthYear }}</span>
            </div>

            <div class="flex w-[1461.72px] shrink-0 flex-col items-start gap-[10px] text-left">
              <h3 class="m-0 text-left text-[24px] leading-[normal] font-medium text-[#161c22] transition-colors group-hover:text-[#0168f0]">
                {{ item.title }}
              </h3>
              <div class="inline-flex w-fit items-center justify-center rounded-[4px] border border-[#0168f0] px-[6px] py-[2px]">
                <span class="text-[14px] leading-[normal] font-normal text-[#0168f0]">{{ item.category }}</span>
              </div>
            </div>

            <img
              class="announcement-list-arrow h-10 w-10 shrink-0 transition-opacity group-hover:opacity-80"
              :src="listArrowRight"
              alt=""
              aria-hidden="true"
            />
          </a>

          <div
            v-if="index < filteredList.length - 1"
            class="h-px w-full bg-[#e6e6e6]"
          />
        </template>
      </div>

      <div class="flex items-center justify-center pt-10 pb-6">
        <button class="flex h-6 w-6 items-center justify-center" aria-label="Previous page">
          <img class="pagination-arrow-prev h-6 w-6" :src="paginationPrev" alt="" aria-hidden="true" />
        </button>

        <div class="mx-6 flex items-center gap-3">
          <span class="flex h-6 w-6 items-center justify-center rounded-[20px] bg-[#1d2129] text-center font-['Inter'] text-[16px] leading-6 font-medium text-white">
            1
          </span>
          <span class="flex h-6 w-6 items-center justify-center text-center font-['Inter'] text-[16px] leading-6 font-medium text-[#1d2129]">2</span>
          <span class="flex h-6 w-6 items-center justify-center text-center font-['Inter'] text-[16px] leading-6 font-medium text-[#1d2129]">3</span>
          <span class="flex h-6 w-6 items-center justify-center text-center font-['Inter'] text-[16px] leading-6 font-medium text-[#1d2129]">...</span>
          <span class="flex h-6 w-6 items-center justify-center text-center font-['Inter'] text-[16px] leading-6 font-medium text-[#1d2129]">99</span>
        </div>

        <button class="flex h-6 w-6 items-center justify-center" aria-label="Next page">
          <img class="pagination-arrow-next h-6 w-6" :src="paginationNext" alt="" aria-hidden="true" />
        </button>
      </div>
    </section>

    <OrclawCtaSection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import listArrowRight from '@/assets/official-announcements/list-arrow-right.svg'
import paginationNext from '@/assets/official-announcements/pagination-next.svg'
import paginationPrev from '@/assets/official-announcements/pagination-prev.svg'
import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import {
  type AnnouncementTab,
  officialAnnouncementsHero,
  officialAnnouncementsList,
  officialAnnouncementsTabs,
} from '@/data/officialAnnouncements'

const activeTab = ref<AnnouncementTab>(officialAnnouncementsTabs[0])

const filteredList = computed(() => {
  return officialAnnouncementsList.filter((item) => item.category === activeTab.value)
})
</script>

<style scoped>
:deep(.reveal-on-scroll),
:deep(.reveal-media) {
  opacity: 1;
  transform: none;
  transition: none;
}
</style>
