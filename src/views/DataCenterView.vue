<template>
  <div ref="pageRef" class="data-center-page w-[1920px] bg-white text-[#1d2129]">
    <InfrastructureHeroSection
      :title="`Global Data Center\n<span class='text-[#0168f0]'>Infrastructure</span>`"
      description="Distributed, high-performance infrastructure engineered for the next generation of AI training, inference, and Web3 decentralized workloads."
      content-class="w-[916px]"
      title-class="w-[888px] text-[56px] leading-[68px] font-semibold tracking-[-0.02em]"
      description-class="w-[916px] text-[28px] leading-10"
    />

    <section class="h-[1171px] bg-white px-[120px] pt-[157px]">
      <InfrastructureSectionHeading
        title="Strategic Global Presence"
        subtitle="Strategically located hubs ensuring low-latency access and regulatory compliance."
        subtitle-class="w-[1138px] text-[24px] leading-[29px]"
      />

      <div class="mt-[70px] flex w-full items-start justify-between">
        <div class="relative flex w-[312px] flex-col gap-[31px] pt-[96px]">
          <span class="pointer-events-none absolute top-[121px] left-[5px] block h-[369px] w-px bg-[#dfe4eb]" aria-hidden="true" />
          <div v-for="(item, index) in dataCenterPresenceItems" :key="item.title" class="reveal-on-scroll" :style="{ transitionDelay: `${180 + index * 80}ms` }">
            <DataCenterPresenceItem :item="item" :active="index === 0" />
          </div>
        </div>

        <div class="reveal-media pt-[7px]" :style="{ transitionDelay: '220ms' }">
          <img class="h-[763px] w-[1046px] object-contain" :src="dataCenterAssets.chinaDataCenterMap" alt="Strategic data center map" />
        </div>
      </div>
    </section>

    <section class="h-[977px] bg-white px-[120px] pt-[140px]">
      <InfrastructureSectionHeading
        title="Next-Generation Facilities"
        subtitle="These certifications demonstrate our commitment to maintaining secure, compliant, and high-performance infrastructure across all services."
        subtitle-class="w-[1491px] text-[28px] leading-[34px]"
      />

      <div class="mt-[62px] flex items-start justify-between">
        <div v-for="(card, index) in dataCenterFacilityCards" :key="card.title" class="reveal-media" :style="{ transitionDelay: `${180 + index * 80}ms` }">
          <DataCenterFacilityCard :card="card" />
        </div>
      </div>
    </section>

    <FullBleedSection class="bg-[linear-gradient(180deg,#ebf2ff_0%,rgba(235,242,255,0)_100%)]" content-class="relative h-[840px] px-[120px] pt-[129px]">
      <InfrastructureSectionHeading title="Uncompromising Reliability" />

      <div class="mt-[75px] ml-[37px] flex items-start gap-[85px]">
        <div class="relative h-[393px] w-[521px] shrink-0">
          <div class="absolute top-0 left-0 grid w-[497px] grid-cols-2 gap-x-[23px] gap-y-[17px]">
            <div
              v-for="(stat, index) in dataCenterReliabilityStats"
              :key="stat.label"
              class="reveal-on-scroll relative flex h-[188px] w-[237px] flex-col justify-center rounded-[24px]"
              :style="{ transitionDelay: `${160 + index * 70}ms` }"
            >
              <div class="flex items-center gap-[11px]">
                <span class="h-[10px] w-[10px] rounded-full bg-[#5d9dff]" />
                <span class="text-[18px] leading-[22px] font-normal tracking-[1.2px] text-[#4e5969] uppercase">{{ stat.label }}</span>
              </div>
              <strong class="mt-[11px] text-[56px] leading-[68px] font-bold text-[#0168f0]">{{ stat.value }}</strong>
              <span class="pointer-events-none absolute top-[38px] right-0 block h-[119px] w-px bg-[#dfe7f5]" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div class="flex w-[909px] flex-col gap-[22px] pt-[2px]">
          <div v-for="(item, index) in dataCenterReliabilityFeatures" :key="item.title" class="reveal-on-scroll" :style="{ transitionDelay: `${220 + index * 90}ms` }">
            <DataCenterReliabilityFeature :item="item" />
          </div>
        </div>
      </div>
    </FullBleedSection>

    <InfrastructureActionSection
      title="Build with Confidence on Origins Cloud"
      description="Your infrastructure is the foundation of your innovation. Don't settle for less than architecturally sound precision."
      primary-label="Start Building"
      secondary-label="View Documentation"
      :left-decoration-src="dataCenterAssets.dataCenterCtaBackgroundLeft"
      :right-decoration-src="dataCenterAssets.dataCenterCtaBackgroundRight"
      left-decoration-class="left-0 top-0 h-[662px] w-[672px]"
      right-decoration-class="right-0 top-0 h-[662px] w-[672px]"
    />

    <OrclawCtaSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import {
  dataCenterAssets,
  dataCenterFacilityCards,
  dataCenterPresenceItems,
  dataCenterReliabilityFeatures,
  dataCenterReliabilityStats,
} from '@/data/dataCenter'
import '@/styles/page-reveal.css'
import DataCenterFacilityCard from '@/views/data-center/components/DataCenterFacilityCard.vue'
import DataCenterPresenceItem from '@/views/data-center/components/DataCenterPresenceItem.vue'
import DataCenterReliabilityFeature from '@/views/data-center/components/DataCenterReliabilityFeature.vue'
import InfrastructureActionSection from '@/views/infrastructure/components/InfrastructureActionSection.vue'
import InfrastructureHeroSection from '@/views/infrastructure/components/InfrastructureHeroSection.vue'
import InfrastructureSectionHeading from '@/views/infrastructure/components/InfrastructureSectionHeading.vue'

const pageRef = ref<HTMLElement | null>(null)

useScrollReveal(pageRef)
</script>
