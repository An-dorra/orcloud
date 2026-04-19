<template>
  <div ref="homePageRef" class="home-page w-[1920px] bg-white text-[#1d2129]">
    <FullBleedSection
      class="hero-section -mt-20 overflow-hidden bg-[#02010f] bg-no-repeat [background-position:0_-6px] [background-size:1920px_926px] min-[1921px]:[background-position:center_-6px] min-[1921px]:[background-size:var(--viewport-width,100vw)_auto]"
      content-class="relative flex h-[920px] flex-col pl-[120px] pt-[192px]"
      :style="{ backgroundImage: `url(${heroCloudInfrastructure})` }"
    >
      <div class="w-[806px] text-white">
        <h1
          class="hero-printer-title m-0 w-[741px] text-[64px] leading-[78px] font-bold"
          :class="{ 'hero-printer-title--complete': heroTitlePrinted }"
          aria-label="The Infrastructure of the Future"
        >
          <span class="hero-printer-title__line">{{ typedHeroTitleLineOne }}</span>
          <br />
          <span class="hero-printer-title__line">{{ typedHeroTitleLineTwo }}</span>
        </h1>
        <p
          class="hero-printer-description mt-6 w-[806px] text-[28px] leading-[34px] font-normal text-[rgba(255,255,255,0.8)]"
          :class="{ 'is-visible': heroDescriptionVisible }"
        >
          Origins Quantum delivers a next-generation neural
          <br />
          architecture designed for low-latency, high-availability
          <br />
          global operations.
        </p>
        <div class="hero-printer-actions mt-[90px] flex gap-[46px]" :class="{ 'is-visible': heroActionsVisible }">
          <a
            href="#"
            class="inline-flex h-[58px] w-[280px] items-center justify-center rounded-[400px] bg-[#0168f0] text-[28px] font-medium text-white no-underline"
          >
            Get Started
          </a>
          <a
            href="#"
            class="inline-flex h-[58px] w-[280px] items-center justify-center rounded-[400px] border border-[rgba(209,213,220,0.5)] bg-white text-[28px] font-medium text-[#0168f0] no-underline"
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        class="hero-section__value-row mt-auto ml-[-120px] h-[183px] w-[1920px] border-b-2 border-b-[#ebedf1] bg-white min-[1921px]:ml-[calc(50%-(var(--viewport-width,100vw)/2)-60px)] min-[1921px]:w-[var(--viewport-width,100vw)]"
      >
        <div class="hero-section__value-row-shell flex h-full w-full px-[100px] min-[1921px]:mx-auto min-[1921px]:w-[1920px]">
          <article
            v-for="(item, index) in valueCards"
            :key="item.title"
            class="hero-value-card group relative flex flex-1 cursor-pointer items-center justify-between bg-white px-6 py-10 transition-all duration-300 ease-out hover:z-10 hover:scale-[1.015] hover:shadow-[0_14px_38px_rgba(1,104,240,0.16)]"
          >
            <div>
              <h2 class="m-0 text-[24px] font-semibold text-[#1d2129] transition-colors duration-300 group-hover:text-[#0168f0]">{{ item.title }}</h2>
              <p class="mt-2 w-[346px] text-[18px] leading-[1.22] text-[#4e5969] transition-colors duration-300 group-hover:text-[#0168f0]">{{ item.description }}</p>
            </div>
            <img class="block h-[18px] w-[18px] opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(98%)_saturate(2865%)_hue-rotate(202deg)_brightness(95%)_contrast(102%)]" :src="iconChevronRight" alt="" aria-hidden="true" />
            <span
              v-if="index !== valueCards.length - 1"
              class="absolute top-1/2 right-0 h-1/2 w-px -translate-y-1/2 bg-[#ebedf1] transition-opacity duration-300 group-hover:opacity-0"
              aria-hidden="true"
            />
          </article>
        </div>
      </div>
    </FullBleedSection>

    <PlansCarouselSection />
    <IndustriesAccordionSection />

    <section class="market-section bg-white px-[120px] pt-[126px] pb-[84px]">
      <div class="section-heading">
        <h2 class="reveal-on-scroll m-0 text-[56px] leading-[1.22] font-semibold text-[#1d2129]">Cloud Market Ecosystem</h2>
        <p class="reveal-on-scroll reveal-delay-100 mt-4 w-[1038px] text-[22px] leading-[1.18] font-[300] text-[#7f8796]">
          Extending your cloud capabilities with professional value-added services.
        </p>
      </div>
      <div class="market-section__body mt-[44px] flex items-start gap-[142px]">
        <div class="market-services reveal-on-scroll reveal-delay-200 mt-[10px] flex h-[514px] basis-[444px] flex-col box-border pb-[18px]">
          <div class="market-services__items flex flex-col">
            <article
              v-for="service in rotatingMarketplaceServices"
              :key="service.title"
              class="origin-left flex items-start gap-10 pt-3 pb-[30px] transition-all duration-500 ease-out"
              :class="service.active ? 'active scale-[1.04] pb-[42px]' : 'scale-100'"
            >
              <img
                :src="service.icon"
                :alt="`${service.title} icon`"
                class="block shrink-0"
                :class="service.active ? 'mt-px h-[30px] w-[30px]' : 'mt-1 h-5 w-5'"
              />
              <div class="flex flex-col">
                <h3
                  class="m-0 text-[#1d2129] font-bold transition-all duration-500 ease-out"
                  :class="service.active ? 'text-[32px] leading-[1.15]' : 'text-[24px] leading-[1.18]'"
                >
                  {{ service.title }}
                </h3>
                <p
                  v-if="service.active && service.description"
                  class="mt-[10px] w-[372px] text-[18px] leading-[1.18] font-[300] text-[#7f8796] transition-all duration-500 ease-out"
                >
                  {{ service.description }}
                </p>
              </div>
            </article>
          </div>
          <button
            type="button"
            class="mt-auto inline-flex h-15 w-[398px] items-center justify-center gap-[10px] rounded-[5px] border-0 bg-[#0168f0] text-[16px] font-medium text-white"
          >
            <span class="text-[22px]">Explore Marketplace</span>
            <img class="h-4 w-4 [filter:brightness(0)_invert(1)]" :src="iconMoreArrow" alt="" aria-hidden="true" />
          </button>
        </div>
        <div class="market-section__image reveal-media mt-0 h-[514px] min-w-0 flex-1 basis-auto">
          <img
            class="block h-full w-full rounded-[12px] object-cover"
            :src="marketplaceCloudEcosystem"
            alt="Cloud market ecosystem"
          />
        </div>
      </div>
    </section>

    <section class="network-section relative h-[1000px] bg-white px-[120px] pt-[130px]">
      <div class="section-heading">
        <h2 class="reveal-on-scroll m-0 text-[56px] leading-[1.22] font-semibold text-[#1d2129]">
          Safe, compliant, high-speed infrastructure
        </h2>
        <p class="reveal-on-scroll reveal-delay-100 mt-4 w-[1130px] text-[28px] leading-[1.22] font-[300] text-[#4e5969]">
          Our global network ensures low-latency access and local compliance across every major geographic region.
        </p>
      </div>
      <div class="mt-[60px] flex gap-[60px]">
        <div
          v-for="(item, index) in stats"
          :key="item.label"
          class="reveal-on-scroll flex flex-col gap-3"
          data-reveal-stat
          :style="{ transitionDelay: `${160 + index * 90}ms` }"
        >
          <strong class="text-[46px] leading-[40px] font-bold text-[#0168f0]">{{ item.value }}</strong>
          <span class="text-[18px] uppercase tracking-[1px] text-[#64748b]">{{ item.label }}</span>
        </div>
      </div>
      <div class="network-map-media reveal-media absolute top-[358px] right-[169px] h-[513px] w-[1029px]">
        <img class="block h-full w-full" :src="globalNetworkMap" alt="Global network map" />
      </div>
      <div class="network-map-overlay-reveal reveal-media absolute top-[358px] right-[169px] h-[513px] w-[1029px] pointer-events-none" aria-hidden="true">
        <div class="network-map-overlay h-full w-full" :class="{ 'network-map-overlay--fading': networkMapFading }">
        <div
          v-for="(node, index) in networkMapNodes"
          :key="node.label"
          class="network-map-node"
          :class="{ 'network-map-node--visible': index < visibleNetworkNodeCount }"
          :style="{ left: node.left, top: node.top }"
        >
          <span class="network-map-node__dot"></span>
          <span
            class="network-map-node__label"
            :style="{ transform: `translate(${node.labelX}, ${node.labelY})` }"
          >
            {{ node.label }}
          </span>
        </div>
        </div>
      </div>
      <div class="absolute bottom-[172px] left-[120px]">
        <h3 class="reveal-on-scroll reveal-delay-400 mb-[22px] text-[28px] font-semibold uppercase text-[#1d2129]">Global security &amp; compliance certifications</h3>
        <div class="flex items-center gap-10">
          <img
            v-for="(logo, index) in certificationLogos"
            :key="logo"
            class="reveal-on-scroll h-20 w-20 object-contain"
            :src="logo"
            alt=""
            :style="{ transitionDelay: `${480 + index * 60}ms` }"
          />
        </div>
      </div>
    </section>

    <section class="news-section h-[1575px] bg-white px-[120px] pt-[136px]">
      <div class="section-heading">
        <h2 class="reveal-on-scroll m-0 text-[56px] leading-[1.22] font-semibold text-[#1d2129]">OrCloud News &amp; Dynamics</h2>
        <p class="reveal-on-scroll reveal-delay-100 mt-4 w-[1097px] text-[28px] leading-[1.22] font-[300] text-[#4e5969]">
          Globally distributed infrastructure nodes provide users with fast, stable, intelligent, and reliable services.
        </p>
      </div>
      <div class="mt-20 grid grid-cols-[repeat(3,533.33px)] gap-x-10 gap-y-20">
        <div
          v-for="(card, index) in newsCards"
          :key="card.title"
          class="news-card-reveal reveal-on-scroll"
          :style="{ transitionDelay: `${180 + index * 90}ms` }"
        >
          <NewsCard :card="card" />
        </div>
        <div class="news-section__more reveal-on-scroll flex h-[501px] items-center justify-center" :style="{ transitionDelay: `${180 + newsCards.length * 90}ms` }">
          <button class="inline-flex h-10 w-[250px] items-center justify-center border-0 bg-transparent p-0" type="button" aria-label="More news">
            <span class="sr-only">More</span>
            <img class="block h-10 w-[250px]" :src="buttonMorePill" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>

    <FullBleedSection class="bg-[#1d2129]" content-class="relative h-[485px] overflow-hidden">
      <img class="absolute top-[-237px] left-[883px] h-[1159px] w-[1159px]" :src="orclawRingBackground" alt="" />
      <div class="reveal-on-scroll reveal-delay-300 absolute top-[82px] right-[147px] h-[495px] w-[682px]">
        <div class="h-full w-full rotate-[-21deg]">
          <OrclawCrab class="h-full w-full" />
        </div>
      </div>
      <div class="orclaw-copy absolute top-[82px] left-[120px] text-white">
        <h2 class="reveal-on-scroll m-0 text-[56px] leading-[1.22] font-bold">Meet "OrClaw"<br />Your Personal AI Assistant</h2>
        <p class="reveal-on-scroll reveal-delay-100 mt-7 w-[666px] text-[26px] leading-[1.22] font-[300] text-[rgba(255,255,255,0.6)]">
          Intelligent resource management, troubleshooting, and cloud optimization at your fingertips.
        </p>
        <a
          href="#"
          class="reveal-on-scroll reveal-delay-200 mt-[58px] inline-flex h-10 min-w-[150px] items-center justify-center rounded-[400px] bg-[#0168f0] px-[30px] text-[16px] font-semibold text-white no-underline"
        >
          Click to jump →
        </a>
      </div>
    </FullBleedSection>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import globalNetworkMap from '@/assets/images/global-network-map.svg'
import heroCloudInfrastructure from '@/assets/images/hero-cloud-infrastructure.jpg'
import marketplaceCloudEcosystem from '@/assets/images/marketplace-cloud-ecosystem.png'
import orclawRingBackground from '@/assets/images/orclaw-ring-background.svg'
import buttonMorePill from '@/assets/icons/button-more-pill.png'
import iconChevronRight from '@/assets/icons/icon-chevron-right.svg'
import iconMoreArrow from '@/assets/icons/icon-more-arrow.svg'
import {
  certificationLogos,
  marketplaceServices,
  newsCards,
  stats,
  valueCards,
} from '@/data/home'
import IndustriesAccordionSection from '@/views/home/components/IndustriesAccordionSection.vue'
import NewsCard from '@/views/home/components/NewsCard.vue'
import OrclawCrab from '@/views/home/components/OrclawCrab.vue'
import PlansCarouselSection from '@/views/home/components/PlansCarouselSection.vue'

const MARKETPLACE_SERVICE_INTERVAL = 3000
const NETWORK_NODE_STEP_INTERVAL = 350
const NETWORK_NODE_HOLD_DURATION = 1800
const NETWORK_NODE_FADE_DURATION = 500
const HERO_TITLE_TYPE_INTERVAL = 42
const HERO_TITLE_LINE_ONE = 'The Infrastructure of'
const HERO_TITLE_LINE_TWO = 'the Future'
const HERO_TITLE_FULL_TEXT = `${HERO_TITLE_LINE_ONE} ${HERO_TITLE_LINE_TWO}`
const HERO_DESCRIPTION_DELAY = 180
const HERO_ACTIONS_DELAY = 160

const networkMapNodes = [
  { label: '美国', left: '17.76%', top: '47.60%', labelX: '14px', labelY: '-14px' },
  { label: '南美洲', left: '33.62%', top: '67.65%', labelX: '14px', labelY: '-14px' },
  { label: '欧洲', left: '47.85%', top: '35.84%', labelX: '14px', labelY: '-14px' },
  { label: '中东', left: '58.71%', top: '52.40%', labelX: '14px', labelY: '-14px' },
  { label: '中国', left: '73.70%', top: '44.12%', labelX: '-41px', labelY: '-34px' },
  { label: '泰国', left: '74.56%', top: '57.41%', labelX: '14px', labelY: '-20px' },
  { label: '新加坡', left: '77.93%', top: '63.94%', labelX: '14px', labelY: '0' },
  { label: '印度尼西亚', left: '77.93%', top: '69.39%', labelX: '14px', labelY: '-14px' },
  { label: '韩国', left: '82.06%', top: '42.38%', labelX: '-10px', labelY: '-34px' },
  { label: '日本', left: '86.29%', top: '44.12%', labelX: '14px', labelY: '-34px' },
]

const initialMarketplaceIndex = marketplaceServices.findIndex((service) => service.active)
const activeMarketplaceIndex = ref(initialMarketplaceIndex >= 0 ? initialMarketplaceIndex : 0)
const visibleNetworkNodeCount = ref(0)
const networkMapFading = ref(false)
const homePageRef = ref<HTMLElement | null>(null)
const typedHeroTitle = ref('')
const heroTitlePrinted = ref(false)
const heroDescriptionVisible = ref(false)
const heroActionsVisible = ref(false)
let marketplaceServiceTimer: ReturnType<typeof setInterval> | undefined
let heroTitleTimer: ReturnType<typeof setInterval> | undefined
let heroDescriptionTimer: ReturnType<typeof setTimeout> | undefined
let heroActionsTimer: ReturnType<typeof setTimeout> | undefined
let networkMapTimers: Array<ReturnType<typeof setTimeout>> = []
let revealObserver: IntersectionObserver | undefined

const rotatingMarketplaceServices = computed(() =>
  marketplaceServices.map((service, index) => ({
    ...service,
    active: index === activeMarketplaceIndex.value,
  })),
)

const typedHeroTitleLineOne = computed(() => typedHeroTitle.value.slice(0, HERO_TITLE_LINE_ONE.length))
const typedHeroTitleLineTwo = computed(() => {
  const lineTwoStart = HERO_TITLE_LINE_ONE.length + 1

  return typedHeroTitle.value.length > HERO_TITLE_LINE_ONE.length ? typedHeroTitle.value.slice(lineTwoStart) : ''
})

onMounted(() => {
  marketplaceServiceTimer = setInterval(() => {
    activeMarketplaceIndex.value = (activeMarketplaceIndex.value + 1) % marketplaceServices.length
  }, MARKETPLACE_SERVICE_INTERVAL)

  startHeroTitlePrinter()
  startNetworkMapLoop()
  setupScrollRevealOnScroll()
})

onBeforeUnmount(() => {
  if (marketplaceServiceTimer) {
    clearInterval(marketplaceServiceTimer)
  }

  if (heroTitleTimer) {
    clearInterval(heroTitleTimer)
  }

  if (heroDescriptionTimer) {
    clearTimeout(heroDescriptionTimer)
  }

  if (heroActionsTimer) {
    clearTimeout(heroActionsTimer)
  }

  clearNetworkMapTimers()
  revealObserver?.disconnect()
})

function startHeroTitlePrinter() {
  typedHeroTitle.value = ''
  heroTitlePrinted.value = false
  heroDescriptionVisible.value = false
  heroActionsVisible.value = false
  let nextCharacterIndex = 0

  heroTitleTimer = setInterval(() => {
    typedHeroTitle.value += HERO_TITLE_FULL_TEXT[nextCharacterIndex] ?? ''
    nextCharacterIndex += 1

    if (nextCharacterIndex >= HERO_TITLE_FULL_TEXT.length && heroTitleTimer) {
      clearInterval(heroTitleTimer)
      heroTitleTimer = undefined
      heroTitlePrinted.value = true
      scheduleHeroIntroContent()
    }
  }, HERO_TITLE_TYPE_INTERVAL)
}

function scheduleHeroIntroContent() {
  heroDescriptionTimer = setTimeout(() => {
    heroDescriptionVisible.value = true

    heroActionsTimer = setTimeout(() => {
      heroActionsVisible.value = true
    }, HERO_ACTIONS_DELAY)
  }, HERO_DESCRIPTION_DELAY)
}

function clearNetworkMapTimers() {
  networkMapTimers.forEach((timer) => clearTimeout(timer))
  networkMapTimers = []
}

function scheduleNetworkMapTimer(callback: () => void, delay: number) {
  const timer = setTimeout(callback, delay)

  networkMapTimers.push(timer)
}

function startNetworkMapLoop() {
  clearNetworkMapTimers()
  visibleNetworkNodeCount.value = 0
  networkMapFading.value = false

  networkMapNodes.forEach((_, index) => {
    scheduleNetworkMapTimer(() => {
      visibleNetworkNodeCount.value = index + 1
    }, (index + 1) * NETWORK_NODE_STEP_INTERVAL)
  })

  const allNodesVisibleDelay = networkMapNodes.length * NETWORK_NODE_STEP_INTERVAL

  scheduleNetworkMapTimer(() => {
    networkMapFading.value = true
  }, allNodesVisibleDelay + NETWORK_NODE_HOLD_DURATION)

  scheduleNetworkMapTimer(() => {
    visibleNetworkNodeCount.value = 0
    networkMapFading.value = false
    startNetworkMapLoop()
  }, allNodesVisibleDelay + NETWORK_NODE_HOLD_DURATION + NETWORK_NODE_FADE_DURATION)
}

function setupScrollRevealOnScroll() {
  const root = homePageRef.value
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

function setupRevealOnScroll() {
  setupScrollRevealOnScroll()
}
</script>

<style>
.hero-printer-title {
  position: relative;
  min-height: 156px;
}

.hero-printer-title::after {
  display: inline-block;
  width: 4px;
  height: 0.9em;
  margin-left: 8px;
  background: currentColor;
  transform: translateY(7px);
  animation: hero-printer-cursor 720ms steps(1) infinite;
  content: '';
}

.hero-printer-title--complete::after {
  opacity: 0;
  animation: none;
}

.hero-printer-title__line {
  display: inline-block;
  min-height: 78px;
}

.hero-printer-description,
.hero-printer-actions {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 620ms ease,
    transform 720ms cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-printer-description.is-visible,
.hero-printer-actions.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes hero-printer-cursor {
  0%,
  49% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}

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

.reveal-delay-400 {
  transition-delay: 400ms;
}

.network-map-overlay {
  transition:
    opacity 500ms ease,
    transform 760ms cubic-bezier(0.22, 1, 0.36, 1);
}

.network-map-overlay--fading {
  opacity: 0;
}

.network-map-node {
  position: absolute;
  opacity: 0;
  transform: scale(0.72);
  transition:
    opacity 320ms ease,
    transform 320ms ease;
}

.network-map-node--visible {
  opacity: 1;
  transform: scale(1);
}

.network-map-node__dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #0168f0;
  transform: translate(-50%, -50%);
  box-shadow:
    0 0 0 7px rgba(1, 104, 240, 0.12),
    0 0 18px rgba(1, 104, 240, 0.72);
}

.network-map-node__label {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  min-width: max-content;
  height: 24px;
  padding: 0 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 6px 16px rgba(29, 33, 41, 0.08);
  color: #1d2129;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll {
    opacity: 1;
    transform: none;
  }

  .reveal-media {
    opacity: 1;
    transform: none;
  }

  .hero-printer-title::after {
    animation: none;
  }

  .hero-printer-description,
  .hero-printer-actions {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
