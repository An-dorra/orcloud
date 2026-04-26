<template>
  <div ref="pageRef" class="solution-page w-[1920px] bg-white text-[#1d2129]">
    <FullBleedSection
      class="solution-hero overflow-hidden bg-[linear-gradient(180deg,rgba(160,198,255,0.2)_0%,rgba(160,198,255,0)_95.918%)] bg-no-repeat [background-position:center_top] [background-size:1920px_686px] min-[1921px]:[background-size:var(--viewport-width,100vw)_auto]"
      content-class="relative h-[686px] overflow-hidden"
    >
      <div class="pointer-events-none absolute top-[43px] right-1 h-[409px] w-[795px] rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(93,157,255,0.18)_0%,rgba(93,157,255,0.09)_38%,rgba(93,157,255,0)_72%)] blur-[12px]" />

      <div class="absolute top-[200px] left-[120px] flex w-[916px] flex-col">
        <p class="reveal-on-scroll m-0 text-[18px] leading-[22px] font-semibold uppercase tracking-[2.6px] text-[#0168f0]">
          {{ page.kind === 'industry' ? 'Industry Solutions' : 'General Solution' }}
        </p>
        <h1 class="reveal-on-scroll reveal-delay-100 mt-5 mb-0 max-w-[916px] text-[56px] leading-[68px] font-bold tracking-[-0.02em] text-[#1d2129]">
          {{ page.title }}
        </h1>
        <p class="reveal-on-scroll reveal-delay-200 mt-6 mb-0 w-[916px] text-[28px] leading-10 font-normal text-[#4e5969]">
          {{ page.description }}
        </p>
      </div>
    </FullBleedSection>

    <FullBleedSection class="solution-intro bg-white" content-class="relative min-h-[820px] px-[120px] pt-[150px] pb-[96px]">
      <div class="flex items-start justify-between gap-[80px]">
        <div class="w-[740px]">
          <h2 class="reveal-on-scroll m-0 text-[56px] leading-[68px] font-semibold tracking-[-0.02em] text-[#1a1c1c]">
            {{ page.introTitle }}
          </h2>
          <p class="reveal-on-scroll reveal-delay-100 mt-6 mb-0 text-[28px] leading-10 font-[300] text-[#4e5969]">
            {{ page.introDescription }}
          </p>

          <div v-if="page.introStats?.length" class="reveal-on-scroll reveal-delay-200 mt-[60px] grid grid-cols-2 gap-x-16 gap-y-9">
            <div v-for="stat in page.introStats" :key="stat.label" class="border-l border-[#dce8ff] pl-8">
              <span class="block text-[18px] leading-[22px] font-medium text-[#4e5969]">{{ stat.label }}</span>
              <strong class="mt-3 block text-[56px] leading-[68px] font-bold text-[#0168f0]">{{ stat.value }}</strong>
            </div>
          </div>
        </div>

        <div class="reveal-media relative h-[500px] w-[820px] overflow-hidden rounded-[28px] bg-[#f7fbff] shadow-[0_30px_80px_rgba(93,157,255,0.18)]">
          <div class="solution-visual absolute inset-0" :class="`solution-visual--${visualTone}`" aria-hidden="true">
            <span class="solution-visual__orb solution-visual__orb--one" />
            <span class="solution-visual__orb solution-visual__orb--two" />
            <span class="solution-visual__line solution-visual__line--one" />
            <span class="solution-visual__line solution-visual__line--two" />
            <span class="solution-visual__node solution-visual__node--one" />
            <span class="solution-visual__node solution-visual__node--two" />
            <span class="solution-visual__node solution-visual__node--three" />
          </div>
        </div>
      </div>

      <div class="mt-[86px] grid grid-cols-2 gap-x-10 gap-y-8">
        <div
          v-for="(item, index) in page.painPoints"
          :key="item.title"
          class="reveal-on-scroll flex min-h-[160px] items-start gap-6 rounded-[8px] border border-[#ebedf1] bg-white p-10 shadow-[0_16px_42px_rgba(93,157,255,0.08)]"
          :style="{ transitionDelay: `${120 + index * 70}ms` }"
        >
          <span class="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[20px] bg-[#eef4fc] text-[24px] leading-none font-bold text-[#0168f0]">
            {{ index + 1 }}
          </span>
          <span class="flex flex-col">
            <strong class="text-[28px] leading-[34px] font-semibold text-[#1d2129]">{{ item.title }}</strong>
            <span class="mt-3 text-[18px] leading-[26px] font-[300] text-[#4e5969]">{{ item.description }}</span>
          </span>
        </div>
      </div>
    </FullBleedSection>

    <FullBleedSection class="solution-features bg-[#f8faff]" content-class="px-[120px] pt-[150px] pb-[150px]">
      <SectionHeading title="Core Capabilities" description="Reusable cloud building blocks tailored to this solution." />

      <div class="mt-[60px] flex flex-wrap gap-x-8 gap-y-[60px]">
        <article
          v-for="(feature, index) in page.features"
          :key="feature.title"
          class="reveal-on-scroll solution-feature-card relative h-[340px] w-[396px] overflow-hidden rounded-[8px] bg-white p-[41px] shadow-[0_18px_50px_rgba(93,157,255,0.1)]"
          :style="{ transitionDelay: `${120 + index * 70}ms` }"
        >
          <div v-if="feature.image" class="absolute inset-x-0 top-0 h-[142px] overflow-hidden">
            <img class="h-full w-full object-cover" :src="feature.image" alt="" aria-hidden="true" />
            <span class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_100%)]" />
          </div>
          <div class="relative z-[1] flex h-[60px] w-[60px] items-center justify-center rounded-[18px] bg-[#0168f0] text-[22px] font-bold text-white">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
          <h3 class="relative z-[1] mt-10 mb-0 text-[28px] leading-[39px] font-semibold text-[#1d2129]">{{ feature.title }}</h3>
          <p class="relative z-[1] mt-2 mb-0 text-[18px] leading-6 font-[300] text-[#4e5969]">{{ feature.description }}</p>
        </article>
      </div>
    </FullBleedSection>

    <FullBleedSection class="solution-architecture bg-white" content-class="relative flex min-h-[845px] px-[120px] pt-[150px] pb-[110px]">
      <div class="w-[780px]">
        <h2 class="reveal-on-scroll m-0 text-[56px] leading-[68px] font-semibold tracking-[-0.02em] text-[#1a1c1c]">
          {{ page.architectureTitle }}
        </h2>
        <p class="reveal-on-scroll reveal-delay-100 mt-6 mb-0 text-[28px] leading-10 font-[300] text-[#4e5969]">
          {{ page.architectureDescription }}
        </p>

        <div class="mt-[58px] flex flex-col gap-8">
          <div
            v-for="(step, index) in page.architectureSteps.slice(0, 4)"
            :key="step.title"
            class="reveal-on-scroll flex items-start gap-6"
            :style="{ transitionDelay: `${160 + index * 70}ms` }"
          >
            <span class="mt-1 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[16px] bg-[#eef4fc] text-[22px] font-semibold text-[#0168f0]">{{ index + 1 }}</span>
            <span>
              <strong class="block text-[28px] leading-[34px] font-semibold text-[#1d2129]">{{ step.title }}</strong>
              <span class="mt-2 block text-[18px] leading-6 font-[300] text-[#4e5969]">{{ step.description }}</span>
            </span>
          </div>
        </div>
      </div>

      <div class="reveal-media relative ml-auto h-[620px] w-[760px]" aria-hidden="true">
        <div class="absolute top-[70px] left-[160px] h-[500px] w-[500px] rounded-full border border-[#dce8ff]" />
        <div class="absolute top-[135px] left-[225px] h-[370px] w-[370px] rounded-full border border-[#c4dbff]" />
        <div
          v-for="(step, index) in page.architectureSteps"
          :key="`${step.title}-diagram`"
          class="solution-node-card absolute flex items-center gap-4 rounded-[26px] bg-white p-4 pr-8 shadow-[10px_20px_40px_rgba(93,157,255,0.22)]"
          :class="diagramClass(index)"
        >
          <span class="flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#0168f0] text-[18px] font-semibold text-white">{{ index + 1 }}</span>
          <span class="whitespace-nowrap text-[24px] leading-[29px] font-medium text-[#4e5969]">{{ step.title }}</span>
        </div>
      </div>
    </FullBleedSection>

    <FullBleedSection class="solution-scenarios bg-[#f8faff]" content-class="px-[120px] pt-[150px] pb-[112px]">
      <SectionHeading :title="page.scenariosTitle" :description="page.scenariosDescription" />

      <div class="mt-[60px] grid grid-cols-4 gap-10">
        <article
          v-for="(scenario, index) in page.scenarios"
          :key="scenario.title"
          class="reveal-media group relative min-h-[360px] overflow-hidden rounded-[8px] bg-white shadow-[0_18px_50px_rgba(93,157,255,0.12)]"
          :style="{ transitionDelay: `${120 + index * 60}ms` }"
        >
          <div class="h-[214px] overflow-hidden bg-[#eaf2ff]">
            <img v-if="scenario.image" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" :src="scenario.image" alt="" aria-hidden="true" />
            <div v-else class="solution-card-pattern h-full w-full" />
          </div>
          <div class="p-8">
            <h3 class="m-0 text-[22px] leading-[27px] font-semibold text-[#1d2129]">{{ scenario.title }}</h3>
            <p class="mt-3 mb-0 text-[18px] leading-[22px] font-[300] text-[#4e5969]">{{ scenario.description }}</p>
          </div>
        </article>
      </div>
    </FullBleedSection>

    <FullBleedSection v-if="page.advantages?.length" class="solution-advantages bg-white" content-class="px-[120px] pt-[150px] pb-[130px]">
      <SectionHeading :title="page.advantageTitle ?? 'Business Value'" description="Measurable value across performance, uptime, user experience, and growth." />

      <div class="mt-[60px] grid grid-cols-4 gap-8">
        <article
          v-for="(item, index) in page.advantages"
          :key="item.title"
          class="reveal-on-scroll min-h-[222px] rounded-[8px] bg-white p-8 shadow-[0_18px_50px_rgba(93,157,255,0.12)]"
          :style="{ transitionDelay: `${120 + index * 70}ms` }"
        >
          <h3 class="m-0 text-[34px] leading-[39px] font-semibold text-[#0168f0]">{{ item.title }}</h3>
          <p class="mt-8 mb-0 text-[18px] leading-[26px] font-[300] text-[#4e5969]">{{ item.description }}</p>
        </article>
      </div>
    </FullBleedSection>

    <FullBleedSection v-if="page.metrics?.length" class="solution-metrics bg-white" content-class="px-[120px] pt-[150px] pb-[130px]">
      <SectionHeading :title="page.metricsTitle ?? 'Business Outcomes'" description="Outcome indicators modeled from the Figma business value sections." />

      <div class="mt-[60px] grid grid-cols-4 gap-[100px]">
        <div
          v-for="(metric, index) in page.metrics"
          :key="metric.label"
          class="reveal-on-scroll"
          :style="{ transitionDelay: `${120 + index * 70}ms` }"
        >
          <strong class="block text-[56px] leading-[68px] font-bold text-[#0168f0]">{{ metric.value }}</strong>
          <span class="mt-6 block text-[22px] leading-[27px] font-semibold text-[#1d2129]">{{ metric.label }}</span>
          <span class="mt-3 block text-[18px] leading-[22px] font-[300] text-[#4e5969]">{{ metric.description }}</span>
        </div>
      </div>
    </FullBleedSection>

    <FullBleedSection
      class="solution-bottom-cta overflow-hidden bg-[linear-gradient(180deg,#f6faff_0%,#ffffff_100%)]"
      content-class="relative flex h-[662px] flex-col items-center px-[120px] pt-[150px]"
    >
      <div class="pointer-events-none absolute top-0 left-0 h-full w-[672px] opacity-40 [background:radial-gradient(circle_at_20%_50%,rgba(1,104,240,0.16),transparent_60%)]" />
      <div class="pointer-events-none absolute top-0 right-0 h-full w-[672px] opacity-40 [background:radial-gradient(circle_at_80%_50%,rgba(1,104,240,0.16),transparent_60%)]" />

      <h2 class="reveal-on-scroll m-0 max-w-[1500px] text-center text-[56px] leading-[68px] font-semibold tracking-[-0.02em] text-[#1a1c1c]">
        {{ page.ctaTitle }}
      </h2>
      <p class="reveal-on-scroll reveal-delay-100 mt-6 mb-0 max-w-[1500px] text-center text-[28px] leading-10 font-[300] text-[#4e5969]">
        {{ page.ctaDescription }}
      </p>

      <div class="reveal-on-scroll reveal-delay-200 mt-[92px] flex items-center justify-center gap-[60px]">
        <RouterLink class="flex h-[54px] w-[320px] items-center justify-center rounded-[500px] border-2 border-[#0168f0] bg-white text-[18px] leading-[22px] font-semibold text-[#0168f0] no-underline" to="/">
          Free Registration
        </RouterLink>
        <RouterLink class="flex h-[54px] w-[320px] items-center justify-center rounded-[500px] bg-[#0168f0] text-[18px] leading-[22px] font-semibold text-white no-underline" to="/">
          Contact Us
        </RouterLink>
      </div>
    </FullBleedSection>

    <OrclawCtaSection />
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { solutionPages } from '@/data/solutions'

import '@/styles/page-reveal.css'

const SectionHeading = defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h('div', { class: 'flex flex-col items-center' }, [
        h('h2', { class: 'reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold tracking-[-0.02em] text-[#1a1c1c]' }, props.title),
        h('p', { class: 'reveal-on-scroll reveal-delay-100 mt-6 mb-0 max-w-[1280px] text-center text-[28px] leading-10 font-[300] text-[#4e5969]' }, props.description),
      ])
  },
})

const route = useRoute()
const pageRef = ref<HTMLElement | null>(null)

const page = computed(() => {
  const slug = String(route.params.slug ?? '')
  return solutionPages[slug] ?? solutionPages['cloud-server-deployment']
})

const visualTone = computed(() => {
  const tones = ['compute', 'security', 'data', 'commerce', 'network']
  const index = Object.keys(solutionPages).indexOf(page.value.slug)
  return tones[Math.max(0, index) % tones.length]
})

const diagramClass = (index: number) => {
  return ['top-[90px] left-[96px]', 'top-[230px] right-[34px]', 'bottom-[118px] left-[56px]', 'bottom-[42px] right-[90px]', 'top-[78px] right-[124px]'][index % 5]
}

useScrollReveal(pageRef)
</script>

<style scoped>
.solution-visual {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(239, 246, 255, 0.7)),
    radial-gradient(circle at 68% 32%, rgba(1, 104, 240, 0.24), transparent 34%),
    radial-gradient(circle at 24% 74%, rgba(93, 157, 255, 0.22), transparent 38%);
}

.solution-visual--security {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.84), rgba(245, 248, 255, 0.72)),
    radial-gradient(circle at 74% 34%, rgba(93, 157, 255, 0.2), transparent 34%),
    radial-gradient(circle at 22% 72%, rgba(19, 78, 191, 0.16), transparent 40%);
}

.solution-visual--data {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(248, 251, 255, 0.74)),
    radial-gradient(circle at 70% 70%, rgba(1, 104, 240, 0.18), transparent 34%),
    radial-gradient(circle at 28% 26%, rgba(93, 157, 255, 0.22), transparent 42%);
}

.solution-visual--commerce {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(246, 249, 255, 0.74)),
    radial-gradient(circle at 74% 34%, rgba(1, 104, 240, 0.2), transparent 36%),
    radial-gradient(circle at 20% 76%, rgba(99, 102, 241, 0.13), transparent 40%);
}

.solution-visual--network {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.86), rgba(244, 249, 255, 0.74)),
    radial-gradient(circle at 64% 36%, rgba(14, 165, 233, 0.18), transparent 36%),
    radial-gradient(circle at 28% 70%, rgba(1, 104, 240, 0.18), transparent 42%);
}

.solution-visual__orb {
  position: absolute;
  border-radius: 999px;
  border: 1px solid rgba(1, 104, 240, 0.18);
}

.solution-visual__orb--one {
  top: 72px;
  left: 118px;
  width: 430px;
  height: 430px;
}

.solution-visual__orb--two {
  top: 138px;
  left: 236px;
  width: 260px;
  height: 260px;
}

.solution-visual__line {
  position: absolute;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(1, 104, 240, 0.38), transparent);
  transform-origin: left center;
}

.solution-visual__line--one {
  top: 244px;
  left: 138px;
  width: 510px;
  transform: rotate(-18deg);
}

.solution-visual__line--two {
  top: 314px;
  left: 182px;
  width: 470px;
  transform: rotate(22deg);
}

.solution-visual__node {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 10px 20px 40px rgba(93, 157, 255, 0.2);
  backdrop-filter: blur(12px);
}

.solution-visual__node::after {
  content: '';
  position: absolute;
  inset: 30px;
  border-radius: 18px;
  background: linear-gradient(135deg, #0168f0, #5d9dff);
}

.solution-visual__node--one {
  top: 98px;
  left: 166px;
}

.solution-visual__node--two {
  top: 226px;
  right: 142px;
}

.solution-visual__node--three {
  bottom: 86px;
  left: 308px;
}

.solution-feature-card {
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.solution-feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 64px rgba(93, 157, 255, 0.18);
}

.solution-node-card {
  min-width: 220px;
}

.solution-card-pattern {
  background:
    linear-gradient(135deg, rgba(1, 104, 240, 0.12), rgba(255, 255, 255, 0)),
    radial-gradient(circle at 24% 30%, rgba(1, 104, 240, 0.3), transparent 22%),
    radial-gradient(circle at 72% 60%, rgba(93, 157, 255, 0.24), transparent 28%),
    #eef4fc;
}
</style>
