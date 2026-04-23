<template>
  <div ref="domainRegistrationPageRef" class="domain-registration-page w-[1920px] bg-white text-[#1d2129]">
    <FullBleedSection
      class="domain-registration-hero -mt-20 overflow-hidden bg-no-repeat [background-position:center_top] [background-size:1920px_686px] min-[1921px]:[background-size:var(--viewport-width,100vw)_auto]"
      content-class="relative h-[686px] overflow-hidden min-[1921px]:h-[calc(var(--viewport-width,100vw)*686/1920)]"
      :style="{ backgroundImage: `url(${heroBackground})` }"
    >
      <div class="absolute top-[209px] left-[87px] flex w-[916px] flex-col gap-6 min-[1921px]:top-[calc(var(--viewport-width,100vw)*209/1920)]">
        <div class="flex flex-col gap-6">
          <h1 class="reveal-on-scroll m-0 w-[860px] text-[59px] leading-[72px] font-bold text-[#1d2129]">
            <span class="text-[#0168f0]">Website building </span>starts with a domain name
          </h1>
          <p class="reveal-on-scroll reveal-delay-100 m-0 w-[910px] text-[29px] leading-[34px] font-normal text-[#4e5969]">
            Whether you're looking to host a new website, develop a mini program, etc., the first step is to register a short, memorable
            domain name that is perfect
          </p>
        </div>
      </div>
    </FullBleedSection>

    <section class="domain-registration-hero-search flex h-[222px] flex-col items-center bg-white pt-[60px]">
      <form class="reveal-on-scroll reveal-delay-200 flex h-20 w-[1126px] items-center justify-between rounded-[500px] border border-[#ebedf1] bg-white py-2 pr-6 pl-10 shadow-[10px_10px_30px_0_#e4f0ff]">
        <label class="sr-only" for="domain-registration-hero-search">Search for a domain name</label>
        <input
          id="domain-registration-hero-search"
          class="h-full flex-1 border-0 bg-transparent text-[24px] leading-normal font-normal text-[#1d2129] outline-none placeholder:text-[#cccccc]"
          type="search"
          placeholder="Enter desired domain name"
        />
        <button class="flex shrink-0 items-center gap-[10px] rounded-[200px] border border-[rgba(235,237,241,0.9)] bg-white px-[30px] py-[10px] text-[20px] leading-6 font-normal text-[#0168f0] shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(93,157,255,0.16)]" type="submit">
          <img class="h-7 w-7 shrink-0" :src="iconSearch24" alt="" aria-hidden="true" />
          Search
        </button>
      </form>

      <div class="reveal-on-scroll reveal-delay-300 mt-[32px] flex w-[1126px] items-center gap-6 pl-6 text-[18px] leading-normal font-normal text-[#0168f0] whitespace-nowrap">
        <span class="shrink-0">Bulk registration</span>
        <span class="h-[26px] w-px bg-[#d6deea]" />
        <span class="shrink-0">Domain transfer</span>
        <span class="h-[26px] w-px bg-[#d6deea]" />
        <span class="shrink-0">Console</span>
      </div>
    </section>

    <section class="domain-registration-recommended flex h-[761px] flex-col bg-white px-[120px] pt-[72px]" data-domain-section>
      <div class="flex flex-col items-center">
        <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold text-[#1d2129]">Recommended domain names</h2>
        <p class="reveal-on-scroll reveal-delay-100 mt-[31px] mb-0 text-center text-[28px] leading-[normal] font-[300] text-[#8691a3]">
          Globally Preferred for Registration
        </p>
      </div>

      <div class="mt-[72px] flex items-start justify-between">
        <div v-for="(card, index) in domainPriceCards" :key="card.extension" class="reveal-on-scroll" :style="{ transitionDelay: `${200 + index * 70}ms` }">
          <DomainPriceCard :card="card" />
        </div>
      </div>
    </section>

    <section class="domain-registration-lifecycle bg-white px-[120px] pt-[150px] pb-[150px]" data-domain-section>
      <div class="flex flex-col items-center">
        <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold text-[#1a1c1c]">All-in-one domain lifecycle management</h2>
      </div>

      <div class="mt-[70px] flex flex-wrap gap-x-10 gap-y-[34px]">
        <div v-for="(feature, index) in domainFeatures" :key="feature.title" class="reveal-on-scroll" :style="{ transitionDelay: `${160 + index * 70}ms` }">
          <DomainFeatureCard :feature="feature" />
        </div>
      </div>
    </section>

    <FullBleedSection
      class="domain-registration-steps bg-[#f9f9f9]"
      content-class="relative px-[120px] pt-[150px] pb-[71px]"
      data-domain-section
    >
      <div class="flex flex-col items-center">
        <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold text-[#1a1c1c]">Registration in just 3 steps</h2>
      </div>

      <div class="relative mt-[76px] flex items-start justify-between">
        <div class="absolute top-[89px] left-[260px] h-[2px] w-[1160px] rounded-full bg-[#6daeff]" aria-hidden="true" />
        <div v-for="(step, index) in domainSteps" :key="step.step" class="reveal-on-scroll" :style="{ transitionDelay: `${160 + index * 80}ms` }">
          <div class="flex w-[520px] flex-col items-center">
          <div class="flex h-[115px] w-[120px] flex-col items-center">
            <span class="px-[14px] text-center text-[48px] leading-[59px] font-semibold text-[#5d9dff]">{{ step.step }}</span>
            <span class="domain-registration-step-node mt-[25px]" aria-hidden="true" />
          </div>
          <DomainStepCard class="mt-[48px]" :step="step" />
          </div>
        </div>
      </div>
    </FullBleedSection>

    <section class="domain-registration-use-cases bg-white px-[120px] pt-[150px] pb-[86px]" data-domain-section>
      <div class="flex flex-col items-center">
        <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold text-[#1a1c1c]">Tailored for different businesses</h2>
      </div>

      <div class="mt-[60px] flex items-start justify-between">
        <div v-for="(useCase, index) in domainUseCases" :key="useCase.title" class="reveal-media" :style="{ transitionDelay: `${160 + index * 60}ms` }">
          <DomainUseCaseCard :use-case="useCase" :index="index" />
        </div>
      </div>
    </section>

    <FullBleedSection
      class="domain-registration-infrastructure bg-[#f9f9f9]"
      content-class="flex h-[792px] flex-col items-center px-[120px] pt-[150px]"
      data-domain-section
    >
      <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold text-[#1a1c1c]">Stable and Reliable Infrastructure</h2>
      <p class="reveal-on-scroll reveal-delay-100 mt-[31px] mb-0 text-center text-[28px] leading-[34px] font-[300] text-[#7f8796]">
        We provide not just domains, but a solid foundation to support your business operations.
      </p>

      <div class="mt-[93px] flex w-[1374px] items-start justify-between">
        <div
          v-for="(stat, index) in domainInfrastructureStats"
          :key="stat.label"
          class="reveal-on-scroll flex min-w-[286px] flex-col"
          :style="{ transitionDelay: `${160 + index * 90}ms` }"
        >
          <strong class="text-[56px] leading-[68px] font-bold text-[#0168f0]">{{ stat.value }}</strong>
          <span class="mt-3 text-[22px] leading-[27px] font-normal uppercase tracking-[1.4px] text-[#64748b]">{{ stat.label }}</span>
        </div>
      </div>

      <div class="mt-[59px] h-px w-[1480px] bg-[#eaedf3]" aria-hidden="true" />

      <div class="mt-[58px] flex items-center">
        <div class="flex items-center gap-[34px]">
          <img class="reveal-on-scroll h-[36px] w-[29px]" :src="domainInfrastructureIcons[0]" alt="" aria-hidden="true" />
          <img class="reveal-on-scroll h-[36px] w-[29px]" :src="domainInfrastructureIcons[1]" alt="" aria-hidden="true" />
        </div>
        <span class="mx-[32px] h-[31px] w-px bg-[#eaedf3]" aria-hidden="true" />
        <div class="flex items-center gap-[72px]">
          <span
            v-for="(badge, index) in domainInfrastructureBadges"
            :key="badge"
            class="reveal-on-scroll text-[20px] leading-6 font-medium text-[#4e5969]"
            :style="{ transitionDelay: `${240 + index * 80}ms` }"
          >
            {{ badge }}
          </span>
        </div>
      </div>
    </FullBleedSection>

    <FullBleedSection
      class="domain-registration-bottom-cta bg-[linear-gradient(180deg,#deebff_0%,#f5f8ff_100%)]"
      content-class="flex h-[628px] flex-col items-center px-[120px] pt-[155px]"
    >
      <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold text-[#1a1c1c]">Register Your Exclusive Domain Now</h2>
      <p class="reveal-on-scroll reveal-delay-100 mt-[29px] mb-0 text-center text-[28px] leading-[34px] font-[300] text-[#6f7d95]">
        A good domain starts your success. Origins Cloud gives you the edge.
      </p>

      <div class="mt-[94px] flex items-center gap-[30px]">
        <form class="reveal-on-scroll reveal-delay-200 flex h-[60px] w-[752px] items-center justify-between rounded-[500px] border border-[rgba(255,255,255,0.72)] bg-[rgba(255,255,255,0.26)] py-[3px] pr-[5px] pl-[22px] shadow-[0_8px_24px_rgba(157,181,220,0.12)] backdrop-blur-[12px]">
          <label class="sr-only" for="domain-registration-bottom-search">Search for a domain name</label>
          <input
            id="domain-registration-bottom-search"
            class="h-full flex-1 border-0 bg-transparent text-[18px] leading-6 font-normal text-[#1d2129] outline-none placeholder:text-[#d3d7de]"
            type="search"
            placeholder="Enter desired domain name"
          />
          <button class="flex h-[50px] min-w-[169px] items-center justify-center gap-[10px] rounded-[29px] border border-[rgba(221,226,236,0.9)] bg-white px-[30px] text-[20px] leading-6 font-normal text-[#0168f0] shadow-[0_2px_8px_rgba(173,184,206,0.24)]" type="submit">
            <img class="h-[26px] w-[26px] shrink-0" :src="iconSearch24" alt="" aria-hidden="true" />
            Search
          </button>
        </form>
        <button class="reveal-on-scroll reveal-delay-300 flex h-[60px] items-center justify-center rounded-[13px] border border-[rgba(255,255,255,0.74)] bg-[rgba(255,255,255,0.68)] px-[30px] text-[20px] leading-6 font-medium text-[#0168f0] shadow-[0_2px_10px_rgba(173,184,206,0.12)]" type="button">
          Go to Console
        </button>
      </div>
    </FullBleedSection>

    <OrclawCtaSection />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import heroBackground from '@/assets/domain-registration/bg.png'
import iconSearch24 from '@/assets/domain-registration/icon-search-24.svg'
import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import {
  domainFeatures,
  domainInfrastructureIcons,
  domainInfrastructureBadges,
  domainInfrastructureStats,
  domainPriceCards,
  domainStepMarkerSrc,
  domainSteps,
  domainUseCases,
} from '@/data/domainRegistration'

import DomainFeatureCard from './domain-registration/components/DomainFeatureCard.vue'
import DomainPriceCard from './domain-registration/components/DomainPriceCard.vue'
import DomainStepCard from './domain-registration/components/DomainStepCard.vue'
import DomainUseCaseCard from './domain-registration/components/DomainUseCaseCard.vue'

const domainRegistrationPageRef = ref<HTMLElement | null>(null)
let revealObserver: IntersectionObserver | undefined

onMounted(() => {
  setupScrollRevealOnScroll()
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})

function setupScrollRevealOnScroll() {
  const root = domainRegistrationPageRef.value
  const revealElements = Array.from(root?.querySelectorAll<HTMLElement>('.reveal-on-scroll, .reveal-media') ?? [])

  if (!root || !revealElements.length) {
    return
  }

  if (
    import.meta.env.MODE === 'test' ||
    typeof window.matchMedia !== 'function' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    revealElements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  const initiallyVisibleElements = revealElements.filter((element) => {
    const rect = element.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0
  })

  initiallyVisibleElements.forEach((element) => element.classList.add('is-visible'))

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  revealElements
    .filter((element) => !element.classList.contains('is-visible'))
    .forEach((element) => revealObserver?.observe(element))
}
</script>

<style>
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(72px);
  transition:
    opacity 720ms ease,
    transform 820ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-media {
  opacity: 0;
  transform: translateY(24px) scale(0.985);
  transition:
    opacity 620ms ease,
    transform 760ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-media.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.domain-registration-step-node {
  position: relative;
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background: #2f89ff;
  box-shadow:
    0 0 0 4px rgba(47, 137, 255, 0.16),
    0 0 10px rgba(47, 137, 255, 0.45);
}

.reveal-delay-100 {
  transition-delay: 100ms;
}

.reveal-delay-200 {
  transition-delay: 200ms;
}

.reveal-delay-300 {
  transition-delay: 300ms;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll,
  .reveal-media {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
