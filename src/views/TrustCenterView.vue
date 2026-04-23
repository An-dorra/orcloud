<template>
  <div ref="pageRef" class="trust-center-page w-[1920px] bg-white text-[#1d2129]">
    <InfrastructureHeroSection
      :title="`Trusted <span class='text-[#0168f0]'>Infrastructure</span>,\nProven Standards`"
      description="Recognized standards ensuring security, reliability, and operational excellence across our decentralized infrastructure."
      content-class="w-[980px]"
      title-class="w-[1160px] text-[56px] leading-[68px] font-semibold tracking-[-0.02em]"
      description-class="w-[760px] text-[28px] leading-10"
    />

    <section class="h-[1171px] bg-white px-[120px] pt-[150px]">
      <InfrastructureSectionHeading
        title="Official Attestations"
        subtitle="Validated by third-party audits and real-time network proofs."
        subtitle-class="w-[860px] text-[18px] leading-6"
      />

      <div class="mt-[67px] flex flex-wrap gap-x-8 gap-y-8">
        <div
          v-for="(item, index) in trustCenterAttestations"
          :key="item.title"
          class="reveal-on-scroll"
          :style="{ transitionDelay: `${180 + index * 70}ms` }"
        >
          <AttestationCard :item="item" />
        </div>
      </div>
    </section>

    <FullBleedSection class="bg-[#eef5ff]" content-class="h-[1077px] px-[120px] pt-[140px]">
      <InfrastructureSectionHeading
        title="Aligned with Industry Standards"
        subtitle="These certifications demonstrate our commitment to maintaining secure, compliant, and high-performance infrastructure across all services."
        subtitle-class="w-[1020px] text-[18px] leading-6"
      />

      <div class="mt-[84px] flex items-start justify-between">
        <div class="reveal-media" :style="{ transitionDelay: '180ms' }">
          <img
            class="h-[563px] w-[770px] object-contain"
            :src="trustCenterAssets.complianceDashboardIllustration"
            alt="Compliance dashboard illustration"
          />
        </div>

        <IconFeatureList
          :items="trustCenterStandardItems"
          list-class="w-[612px] gap-6"
          row-class="group h-[120px]"
          bubble-class="h-20 w-20"
          icon-class="h-10 w-10"
          content-class="w-[500px]"
          title-class="text-[24px] leading-[29px]"
          description-class="text-[18px] leading-[22px]"
          :base-delay="220"
          :delay-step="90"
        />
      </div>
    </FullBleedSection>

    <section class="h-[795px] bg-white px-[120px] pt-[150px]">
      <InfrastructureSectionHeading
        title="Trust Built Into the Infrastructure"
        subtitle="Security is layered into every dimension of our stack."
        subtitle-class="w-[900px] text-[18px] leading-6"
      />

      <div class="mt-[86px] flex items-start justify-between">
        <div
          v-for="(layer, index) in trustCenterLayers"
          :key="layer.title"
          class="reveal-media"
          :style="{ transitionDelay: `${180 + index * 80}ms` }"
        >
          <TrustLayerCard :layer="layer" />
        </div>
      </div>
    </section>

    <InfrastructureActionSection
      title="Build on a Trusted Foundation"
      description="Deploy your mission-critical applications on a network designed for transparency and absolute security."
      primary-label="Explore Infrastructure"
      secondary-label="Contact Us"
      section-class="flex h-[728px] items-start justify-center pt-[223px] bg-white"
      description-class="w-[1180px] text-[28px] leading-[34px]"
      :background-src="trustCenterAssets.trustedFoundationBackground"
    />

    <OrclawCtaSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { trustCenterAssets, trustCenterAttestations, trustCenterLayers, trustCenterStandardItems } from '@/data/trustCenter'
import '@/styles/page-reveal.css'
import AttestationCard from '@/views/infrastructure/components/AttestationCard.vue'
import IconFeatureList from '@/views/infrastructure/components/IconFeatureList.vue'
import InfrastructureActionSection from '@/views/infrastructure/components/InfrastructureActionSection.vue'
import InfrastructureHeroSection from '@/views/infrastructure/components/InfrastructureHeroSection.vue'
import InfrastructureSectionHeading from '@/views/infrastructure/components/InfrastructureSectionHeading.vue'
import TrustLayerCard from '@/views/infrastructure/components/TrustLayerCard.vue'

const pageRef = ref<HTMLElement | null>(null)

useScrollReveal(pageRef)
</script>
