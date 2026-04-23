<template>
  <div ref="productCenterPageRef" class="product-center-page w-[1920px] bg-white text-[#1d2129]">
    <FullBleedSection class="product-center-hero bg-[#f7fbff]" content-class="relative flex h-[606px] px-[120px] pt-[120px]">
      <div class="flex w-[945px] flex-col">
        <h1 class="reveal-on-scroll m-0 text-[56px] leading-[68px] font-bold">
          <span class="text-[#0168f0]">Origins Cloud</span>
          <span class="text-[#1d2129]"> Servers</span>
        </h1>
        <p class="reveal-on-scroll reveal-delay-100 mt-6 mb-0 w-[880px] text-[26px] leading-[34px] font-[300] text-[#4e5969]">
          Origins Cloud provides customers with professional cloud services featuring cloud-network integration, personalized
          support, flexible customization, and secure &amp; controllable operation.
        </p>
        <label class="product-center-search reveal-on-scroll reveal-delay-200 mt-[60px] flex h-[60px] w-[700px] items-center rounded-[400px] bg-white px-6 shadow-[0_8px_30px_rgba(30,64,175,0.08)]">
          <span class="sr-only">Search products</span>
          <input
            class="h-full flex-1 border-0 bg-transparent text-[16px] font-[300] text-[#1d2129] outline-none placeholder:text-[#b8bec8]"
            type="search"
            placeholder="Keyword search for goods"
          />
          <span class="relative h-[18px] w-[18px]" aria-hidden="true">
            <span class="absolute top-0 left-0 h-[13px] w-[13px] rounded-full border-2 border-[#9aa4b2]" />
            <span class="absolute right-0 bottom-px h-2 w-0.5 rotate-[-45deg] rounded-full bg-[#9aa4b2]" />
          </span>
        </label>
      </div>
      <div class="relative flex flex-1 justify-end">
        <img class="reveal-media absolute top-[-37px] right-[-4px] h-[475px] w-[776px] object-contain" :src="heroCloudPlatform" alt="" />
      </div>
    </FullBleedSection>

    <FullBleedSection class="product-center-plans bg-[#f8f8fa]" content-class="flex min-h-[1909px] flex-col px-[120px] pt-20">
      <div class="flex flex-col items-center">
        <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold text-[#1d2129]">Stable, Secure, Credible</h2>
        <p class="reveal-on-scroll reveal-delay-100 mt-[31px] mb-0 text-center text-[24px] leading-[34px] font-[300] text-[#7f8796]">
          Select from our wide range of cloud hosting solutions optimized for various workloads and enterprise scales.
        </p>
        <div class="reveal-on-scroll reveal-delay-200 mt-[56px] flex rounded-[800px] bg-[#f3f3f3] p-1">
          <button class="h-12 rounded-[800px] border-0 bg-white px-8 text-[16px] leading-6 font-medium text-[#0168f0] shadow-[0_1px_2px_rgba(0,0,0,0.05)]" type="button">
            HK International
          </button>
        </div>
      </div>

      <div class="product-plan-card-grid reveal-on-scroll reveal-delay-300 mt-10 flex flex-wrap gap-10">
        <ProductPricingCard v-for="plan in productCenterPlans" :key="plan.title" :plan="plan" />
      </div>
    </FullBleedSection>

    <OrclawCtaSection />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import heroCloudPlatform from '@/assets/images/product-center/hero-cloud-platform.png'
import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import ProductPricingCard from '@/components/sections/ProductPricingCard.vue'
import { productCenterPlans } from '@/data/productCenter'

const productCenterPageRef = ref<HTMLElement | null>(null)
let revealObserver: IntersectionObserver | undefined

onMounted(() => {
  setupScrollRevealOnScroll()
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})

function setupScrollRevealOnScroll() {
  const root = productCenterPageRef.value
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

  revealElements.forEach((element) => revealObserver?.observe(element))
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
