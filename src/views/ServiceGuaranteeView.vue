<template>
  <div ref="pageRef" class="service-guarantee-page w-[1920px] bg-white text-[#1d2129]">
    <InfrastructureHeroSection
      title="The Sovereign Guarantee."
      description="Uncompromising uptime, cryptographic security, and sub-millisecond precision. Our service level agreements aren't just promises—they are hard-coded into our architecture."
    />

    <FullBleedSection class="bg-white" content-class="h-[259px] px-[120px] pt-[60px]">
      <div class="flex items-start justify-between">
        <div
          v-for="(metric, index) in serviceGuaranteeMetrics"
          :key="metric.label"
          class="reveal-on-scroll flex h-[139px] w-[384px] flex-col border-r border-[#ebedf1] pl-8 last:border-r-0"
          :style="{ transitionDelay: `${120 + index * 80}ms` }"
        >
          <span class="text-[16px] leading-[22px] font-medium tracking-[1.4px] text-[#86909c]">{{ metric.label }}</span>
          <strong class="mt-3 text-[56px] leading-[68px] font-bold text-[#0168f0]">{{ metric.value }}</strong>
          <span class="mt-3 inline-flex items-center gap-2 text-[16px] leading-6 font-normal text-[#86909c]">
            <span v-if="metric.statusDot" class="h-2 w-2 rounded-full bg-[#5d9dff]" />
            {{ metric.caption }}
          </span>
        </div>
      </div>
    </FullBleedSection>

    <FullBleedSection class="bg-[#f5f8ff]" content-class="h-[1311px] px-[120px] pt-[150px]">
      <InfrastructureSectionHeading
        title="Our Core Pillar Guarantees"
        subtitle="Four pillars of architectural reliability, designed specifically for the next generation of decentralized AI."
        subtitle-class="w-[1100px] text-[18px] leading-6"
      />

      <div class="mt-[47px] flex flex-wrap gap-x-6 gap-y-6">
        <div class="reveal-on-scroll" :style="{ transitionDelay: '180ms' }">
          <PillarCard
            title="Unrivaled High Availability"
            description="We utilize multi-region redundant architecture that ensures your workloads remain operational even during massive infrastructure failures. No single point of failure exists in our core stack."
            :tags="['SELF-HEALING NODES', 'LOAD BALANCING']"
            width-class="w-[970px]"
            height-class="h-[400px]"
            description-width-class="w-[724px]"
          />
        </div>

        <div class="reveal-on-scroll" :style="{ transitionDelay: '260ms' }">
          <PillarCard
            title="Zero-Knowledge Infrastructure"
            description="End-to-end encryption at rest and in transit. Not even our administrators can access your sensitive data volumes."
            width-class="w-[686px]"
            height-class="h-[400px]"
            description-width-class="w-[461px]"
            dark
          >
            <img
              class="pointer-events-none absolute right-[-138px] bottom-[-40px] h-[422px] w-[422px] opacity-40"
              :src="serviceGuaranteeAssets.zeroKnowledgeIllustration"
              alt=""
              aria-hidden="true"
            />
            <a
              href="#"
              class="mt-auto inline-flex items-center gap-2 text-[18px] uppercase text-white no-underline"
            >
              AUDIT PROTOCOL
              <span class="text-[16px]">↗</span>
            </a>
          </PillarCard>
        </div>

        <div class="reveal-on-scroll" :style="{ transitionDelay: '340ms' }">
          <PillarCard
            title="Global Compliance"
            description="Fully compliant with GDPR, HIPAA, and SOC2. We guarantee data residency in the jurisdiction of your choice."
            width-class="w-[544px]"
            height-class="h-[400px]"
            description-width-class="w-[462px]"
          >
            <img
              class="pointer-events-none absolute right-[-36px] bottom-[-20px] h-auto w-[381px] opacity-60"
              :src="serviceGuaranteeAssets.globalComplianceGlobe"
              alt=""
              aria-hidden="true"
            />
          </PillarCard>
        </div>

        <div class="reveal-on-scroll" :style="{ transitionDelay: '420ms' }">
          <PillarCard
            title="Direct Engineer Access"
            description="Bypass tiered support. Every ticket is handled by a senior systems engineer. We guarantee a response time of under 15 minutes for critical incidents."
            width-class="w-[1112px]"
            height-class="h-[400px]"
            description-width-class="w-[585px]"
          >
            <img
              class="pointer-events-none absolute right-[19px] bottom-[-10px] h-[320px] w-[553px] opacity-90"
              :src="serviceGuaranteeAssets.directEngineerBars"
              alt=""
              aria-hidden="true"
            />
          </PillarCard>
        </div>
      </div>
    </FullBleedSection>

    <section class="h-[1005px] bg-white px-[120px] pt-[120px]">
      <InfrastructureSectionHeading title="Hardware-Level Verifiability" />

      <div class="mt-[60px] flex items-start justify-between">
        <IconFeatureList
          :items="serviceGuaranteeVerifiabilityItems"
          list-class="w-[759px] gap-[30px]"
          row-class="group min-h-[154px]"
          icon-mode="direct-image"
          direct-image-class="h-[140px] w-[140px]"
          content-class="w-[631px]"
          :base-delay="180"
          :delay-step="90"
        />

        <div class="reveal-media" :style="{ transitionDelay: '220ms' }">
          <img class="h-[588px] w-[866px] rounded-[12px] object-cover" :src="serviceGuaranteeAssets.serverRackHero" alt="Service assurance hardware" />
        </div>
      </div>
    </section>

    <InfrastructureActionSection
      title="Build with Confidence on Origins Cloud"
      description="Your infrastructure is the foundation of your innovation. Don't settle for less than architecturally sound precision."
      primary-label="Start Building"
      secondary-label="View Documentation"
      :left-decoration-src="serviceGuaranteeAssets.serviceCtaLeft"
      :right-decoration-src="serviceGuaranteeAssets.serviceCtaRight"
    />

    <OrclawCtaSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { serviceGuaranteeAssets, serviceGuaranteeMetrics, serviceGuaranteeVerifiabilityItems } from '@/data/serviceGuarantee'
import '@/styles/page-reveal.css'
import IconFeatureList from '@/views/infrastructure/components/IconFeatureList.vue'
import InfrastructureActionSection from '@/views/infrastructure/components/InfrastructureActionSection.vue'
import InfrastructureHeroSection from '@/views/infrastructure/components/InfrastructureHeroSection.vue'
import InfrastructureSectionHeading from '@/views/infrastructure/components/InfrastructureSectionHeading.vue'
import PillarCard from '@/views/infrastructure/components/PillarCard.vue'

const pageRef = ref<HTMLElement | null>(null)

useScrollReveal(pageRef)
</script>
