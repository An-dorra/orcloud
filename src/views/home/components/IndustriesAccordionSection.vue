<template>
  <section class="industries-section min-h-[1030px] bg-white px-[120px] pt-[108px]">
    <div class="section-heading">
      <h2 class="reveal-on-scroll m-0 text-[58px] leading-[1.18] font-semibold text-[#1d2129]">Full-stack, 1000s of industries</h2>
      <p class="reveal-on-scroll reveal-delay-100 mt-4 max-w-[1220px] text-[22px] leading-[1.32] font-[300] text-[#7f8796]">
        Focusing on rich business scenarios, accumulating best practices from various industries, and providing
        solutions for diverse application scenarios.
      </p>
    </div>

    <div class="industry-card-grid-reveal reveal-on-scroll reveal-delay-200">
      <div
        class="industry-card-grid mt-16 grid gap-4 transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        :style="gridStyle"
      >
        <article
          v-for="(card, index) in resolvedCards"
          :key="card.title"
          class="industry-card relative h-[560px] cursor-pointer overflow-hidden border-0 bg-[#111827] p-0 transition-[filter,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-[#0168f0] focus-visible:outline-offset-4"
          :class="card.expanded ? 'industry-card--active shadow-[0_22px_60px_rgba(1,104,240,0.18)]' : 'saturate-[0.92]'"
          role="button"
          tabindex="0"
          :aria-pressed="card.expanded"
          @click="setActiveIndex(index)"
          @mouseenter="setActiveIndex(index)"
          @keydown.enter.prevent="setActiveIndex(index)"
          @keydown.space.prevent="setActiveIndex(index)"
        >
          <img
            class="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :class="card.expanded ? 'scale-[1.04]' : 'scale-100'"
            :src="card.image"
            :alt="card.title"
          />
          <div
            class="industry-card__overlay--collapsed absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.24)_38%,rgba(0,0,0,0.58)_100%)] transition-opacity duration-500 ease-out"
            :class="card.expanded ? 'opacity-0' : 'opacity-100'"
            aria-hidden="true"
          />
          <div
            class="industry-card__overlay--expanded absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.28)_36%,rgba(0,0,0,0.62)_100%),linear-gradient(90deg,rgba(1,104,240,0.14)_0%,transparent_28%)] transition-opacity duration-500 ease-out"
            :class="card.expanded ? 'opacity-100' : 'opacity-0'"
            aria-hidden="true"
          />
          <div
            class="absolute inset-0 z-[2] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :class="card.expanded ? 'px-6 pt-[22px] pb-5' : 'px-[18px] pt-6 pb-5'"
          >
            <h3
              class="m-0 text-[22px] leading-[1.18] font-semibold text-white whitespace-pre-line transition-[font-size,line-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              :class="{ 'whitespace-nowrap text-[24px]': card.expanded }"
            >
              {{ getDisplayTitle(card.title, card.expanded) }}
            </h3>
            <Transition name="industry-card-fade">
              <p
                v-if="card.expanded && card.description"
                class="industry-card__description mt-3 w-[440px] text-[16px] leading-[1.36] font-[300] text-[rgba(255,255,255,0.76)]"
              >
                {{ card.description }}
              </p>
            </Transition>
            <Transition name="industry-card-fade" mode="out-in">
              <button
                v-if="card.expanded"
                key="cta"
                class="industry-card__cta mt-auto inline-flex w-fit items-center gap-2 rounded-[8px] border-0 bg-[rgba(255,255,255,0.12)] px-[18px] py-[10px] pl-3 text-[14px] font-medium text-white [backdrop-filter:blur(8px)] transition-colors duration-300 hover:bg-[rgba(255,255,255,0.18)]"
                type="button"
              >
                <img class="industry-card__cta-icon block h-5 w-5" :src="iconConsultNow" alt="" aria-hidden="true" />
                <span>{{ card.ctaLabel ?? 'Consult Now' }}</span>
              </button>
              <span v-else key="link" class="industry-card__link-icon mt-auto block" aria-hidden="true">
                <img class="block h-12 w-12" :src="iconArrowCircleOutline" alt="" />
              </span>
            </Transition>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import iconArrowCircleOutline from '@/assets/icons/icon-arrow-circle-outline.png'
import iconConsultNow from '@/assets/icons/icon-consult-now.png'
import { industryCards } from '@/data/home'

const initialActiveIndex = Math.max(
  0,
  industryCards.findIndex((card) => card.active),
)

const activeIndex = ref(initialActiveIndex)

const resolvedCards = computed(() =>
  industryCards.map((card, index) => ({
    ...card,
    expanded: index === activeIndex.value,
  })),
)

const gridStyle = computed(() => ({
  gridTemplateColumns: resolvedCards.value.map((card) => (card.expanded ? '520px' : '274px')).join(' '),
}))

const setActiveIndex = (index: number) => {
  activeIndex.value = index
}

const getDisplayTitle = (title: string, expanded: boolean) => {
  if (!expanded) {
    return title
  }

  return title.replace(/\s*\n\s*/g, ' ')
}
</script>

<style scoped>
.industry-card-fade-enter-active,
.industry-card-fade-leave-active {
  transition:
    opacity 220ms ease,
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.industry-card-fade-enter-from,
.industry-card-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
