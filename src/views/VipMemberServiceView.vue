<template>
  <div ref="pageRef" class="vip-member-service-page w-[1920px] bg-white text-[#1d2129]">
    <FullBleedSection
      class="overflow-hidden bg-[linear-gradient(180deg,rgba(160,198,255,0.2)_0%,rgba(160,198,255,0)_95.918%)] bg-no-repeat [background-position:center_top] [background-size:1920px_686px] min-[1921px]:[background-size:var(--viewport-width,100vw)_auto]"
      content-class="relative h-[686px] overflow-hidden"
      :style="{ backgroundImage: `url(${heroBackground})` }"
    >
      <div class="pointer-events-none absolute top-[43px] right-1 h-[409px] w-[795px] rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(93,157,255,0.18)_0%,rgba(93,157,255,0.09)_38%,rgba(93,157,255,0)_72%)] blur-[12px]" />

      <div class="absolute top-[200px] left-[120px] flex w-[916px] flex-col">
        <h1 class="reveal-on-scroll m-0 text-[56px] leading-[68px] font-bold tracking-[-0.02em] text-[#1d2129]">
          VIP Membership <span class="text-[#0168f0]">Services</span>
        </h1>
        <p class="reveal-on-scroll reveal-delay-100 mt-6 mb-0 w-[916px] text-[28px] leading-10 font-normal text-[#4e5969]">
          {{ vipMembershipHero.description }}
        </p>
      </div>
    </FullBleedSection>

    <section class="h-[939px] bg-white px-[120px] pt-[150px]">
      <InfrastructureSectionHeading
        title="7x24x365 Technical Support"
        subtitle="Our professional after-sales engineering team is stationed around the clock to ensure your infrastructure never sleeps."
        subtitle-class="w-[1200px] text-[28px] leading-[34px]"
      />

      <div class="mt-[60px] flex items-start justify-between">
        <div
          v-for="(card, index) in vipServiceStageCards"
          :key="card.title"
          class="reveal-media"
          :style="{ transitionDelay: `${180 + index * 80}ms` }"
        >
          <VipServiceStageCard :card="card" />
        </div>
      </div>
    </section>

    <FullBleedSection class="bg-[linear-gradient(180deg,#ebf2ff_0%,rgba(235,242,255,0)_100%)]" content-class="h-[708px] px-[120px] pt-[104px]">
      <div class="flex items-start justify-between">
        <div class="relative flex h-[500px] w-[726px] flex-wrap gap-x-4 gap-y-4">
          <div
            v-for="(step, index) in vipIcpProcessSteps"
            :key="step.title"
            class="reveal-on-scroll"
            :style="{ transitionDelay: `${180 + index * 70}ms` }"
          >
            <VipProcessStepCard
              :title="step.title"
              :description="step.description"
              :number="step.number"
              :highlighted="Boolean(step.highlighted)"
              width="355px"
              height="242px"
              title-class="mt-0 text-[18px] leading-6"
              description-class="mt-0 text-[14px] leading-[normal]"
            />
          </div>
        </div>

        <div class="w-[866px] pt-0">
          <div class="reveal-on-scroll">
            <h2 class="m-0 text-[56px] leading-[68px] font-semibold text-[#1d2129]">Free ICP Filing</h2>
            <p class="mt-6 mb-0 text-[28px] leading-[34px] font-normal text-[#4e5969]">
              Zero Cost • Fast Processing • Professional Agency
            </p>
          </div>

          <div class="reveal-on-scroll mt-[82px]" :style="{ transitionDelay: '220ms' }">
            <h3 class="m-0 text-[32px] leading-[39px] font-semibold text-[#1d2129]">Frequently Asked Questions</h3>
          </div>

          <div class="mt-5 flex flex-col">
            <div
              v-for="(question, index) in vipFaqItems"
              :key="question"
              class="reveal-on-scroll flex h-[65px] items-center justify-between border-b border-[#ebedf1] pt-3 pr-6 pb-[13px]"
              :style="{ transitionDelay: `${260 + index * 70}ms` }"
            >
              <span class="text-[24px] leading-6 font-normal text-[#1d2129]">{{ question }}</span>
              <span class="flex h-10 w-10 items-center justify-center">
                <img class="h-10 w-10" :src="vipMemberServiceAssets.faqChevronIcon" alt="" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </FullBleedSection>

    <section class="relative h-[695px] bg-white px-[120px] pt-[151px]">
      <div class="flex items-start justify-between">
        <div class="w-[949.93px]">
          <div class="reveal-on-scroll">
            <h2 class="m-0 w-[949.93px] text-[56px] leading-[68px] font-bold text-[#1d2129]">
              100x Failure<br />
              Compensation Guarantee
            </h2>
            <p class="mt-6 mb-0 w-[900px] text-[28px] leading-10 font-normal text-[#4e5969]">
              We stand behind our infrastructure. If we fail to meet our SLA, we don't just refund; we compensate at 100 times the downtime impact.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-x-8 gap-y-6 pt-6">
            <div
              v-for="(metric, index) in vipGuaranteeMetrics"
              :key="metric.label"
              class="reveal-on-scroll flex w-[458.96px] flex-col gap-1"
              :style="{ transitionDelay: `${200 + index * 70}ms` }"
            >
              <div class="text-[48px] leading-[normal] font-bold text-[#0168f0]">{{ metric.value }}</div>
              <div class="text-[22px] leading-[normal] font-medium tracking-[0.02em] text-[#86909c]">{{ metric.label }}</div>
            </div>
          </div>
        </div>

        <div class="w-[660.59px]">
          <div class="reveal-on-scroll">
            <h3 class="m-0 text-[32px] leading-[39px] font-semibold text-[#1d2129]">Compensation Scope</h3>
          </div>

          <div class="mt-8 flex flex-col gap-8">
            <div
              v-for="(card, index) in vipGuaranteeCards"
              :key="card.title"
              class="reveal-media"
              :style="{ transitionDelay: `${220 + index * 80}ms` }"
            >
              <VipScenarioCard :card="card" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="h-[761px] bg-white px-[120px] pt-[150px]">
      <div class="flex items-start justify-between">
        <div class="relative h-[500px] w-[792px]">
          <div class="flex flex-wrap gap-x-4 gap-y-4">
            <div
              v-for="(step, index) in vipRefundProcessSteps"
              :key="step.title"
              class="reveal-on-scroll"
              :style="{ transitionDelay: `${180 + index * 70}ms` }"
            >
              <VipProcessStepCard
              :title="step.title"
              :icon-src="step.iconSrc"
              :highlighted="Boolean(step.highlighted)"
              width="388px"
              height="242px"
              title-class="mt-0 text-[24px] leading-[29px]"
            />
          </div>
        </div>

          <img
            class="pointer-events-none absolute top-[91px] left-[358px] h-[60px] w-[60px]"
            :src="vipMemberServiceAssets.icpProcessStepConnector"
            alt=""
            aria-hidden="true"
          />
          <img
            class="pointer-events-none absolute top-[349px] left-[374px] h-[60px] w-[60px] -scale-y-100 rotate-180"
            :src="vipMemberServiceAssets.icpProcessStepConnector"
            alt=""
            aria-hidden="true"
          />
          <img class="pointer-events-none absolute top-[212px] left-[568px] h-[60px] w-[60px] rotate-90" :src="vipMemberServiceAssets.icpProcessStepConnector" alt="" aria-hidden="true" />
        </div>

        <div class="w-[790px] pt-[1px]">
          <div class="reveal-on-scroll">
            <h2 class="m-0 text-[56px] leading-[68px] font-semibold text-[#1d2129]">3-Day No-Reason Refund</h2>
            <p class="mt-6 mb-0 w-[790px] text-[28px] leading-10 font-normal text-[#4e5969]">
              We offer a safety net for your investment. Test our cloud with confidence.
            </p>
          </div>

          <div class="reveal-on-scroll mt-[159px]" :style="{ transitionDelay: '240ms' }">
            <h3 class="m-0 text-[32px] leading-[39px] font-semibold text-[#161c22]">Conditions:</h3>
            <p class="mt-4 mb-0 w-[776px] text-[22px] leading-[27px] font-normal text-[#3f4751]">
              Valid for first-time instance purchases. Not applicable to renewals or resource market purchases. Processing time: 3-5 business days.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="h-[887px] bg-white px-[120px] pt-[150px]">
      <div class="flex justify-center">
        <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold tracking-[-0.02em] text-[#1a1c1c]">
          Membership at a Glance
        </h2>
      </div>

      <div class="mt-[60px] flex flex-wrap gap-4">
        <div
          v-for="(card, index) in vipMembershipOverviewCards"
          :key="card.title"
          class="reveal-media"
          :style="{ transitionDelay: `${180 + index * 70}ms` }"
        >
          <VipOverviewCard :card="card" />
        </div>
      </div>
    </section>

    <OrclawCtaSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import heroBackground from '@/assets/infrastructure/hero/infrastructure-hero-background.jpg'
import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import {
  vipFaqItems,
  vipGuaranteeCards,
  vipGuaranteeMetrics,
  vipIcpProcessSteps,
  vipMemberServiceAssets,
  vipMembershipHero,
  vipMembershipOverviewCards,
  vipRefundProcessSteps,
  vipServiceStageCards,
} from '@/data/vipMemberService'
import '@/styles/page-reveal.css'
import InfrastructureSectionHeading from '@/views/infrastructure/components/InfrastructureSectionHeading.vue'
import VipOverviewCard from '@/views/vip-member-service/components/VipOverviewCard.vue'
import VipProcessStepCard from '@/views/vip-member-service/components/VipProcessStepCard.vue'
import VipScenarioCard from '@/views/vip-member-service/components/VipScenarioCard.vue'
import VipServiceStageCard from '@/views/vip-member-service/components/VipServiceStageCard.vue'

const pageRef = ref<HTMLElement | null>(null)

useScrollReveal(pageRef)
</script>
