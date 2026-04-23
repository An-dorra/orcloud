<template>
  <section class="relative overflow-hidden" :class="sectionClass">
    <img
      v-if="leftDecorationSrc"
      class="pointer-events-none absolute top-0 left-0 opacity-40"
      :class="leftDecorationClass"
      :src="leftDecorationSrc"
      alt=""
      aria-hidden="true"
    />
    <img
      v-if="rightDecorationSrc"
      class="pointer-events-none absolute top-0 right-0 opacity-40"
      :class="rightDecorationClass"
      :src="rightDecorationSrc"
      alt=""
      aria-hidden="true"
    />
    <img
      v-if="backgroundSrc"
      class="pointer-events-none absolute inset-0 h-full w-full object-cover"
      :src="backgroundSrc"
      alt=""
      aria-hidden="true"
    />

    <div class="relative flex flex-col items-center">
      <h2 class="reveal-on-scroll m-0 text-center text-[56px] leading-[68px] font-semibold text-[#1a1c1c]">
        {{ title }}
      </h2>
      <p class="reveal-on-scroll reveal-delay-100 mt-6 mb-0 text-center font-[300] text-[#4e5969]" :class="descriptionClass">
        {{ description }}
      </p>
      <div class="reveal-on-scroll reveal-delay-200 mt-[58px] flex items-center justify-center gap-[60px]">
        <a
          href="#"
          class="inline-flex h-[54px] w-[320px] items-center justify-center rounded-[500px] border-2 border-[#0168f0] bg-white px-10 text-[18px] font-semibold text-[#0168f0] no-underline transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(1,104,240,0.14)]"
        >
          {{ primaryLabel }}
        </a>
        <a
          href="#"
          class="inline-flex h-[54px] w-[320px] items-center justify-center rounded-[500px] bg-[#0168f0] px-10 text-[18px] font-semibold text-white no-underline transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(1,104,240,0.2)]"
        >
          {{ secondaryLabel }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    primaryLabel: string
    secondaryLabel: string
    sectionClass?: string
    descriptionClass?: string
    backgroundSrc?: string
    leftDecorationSrc?: string
    rightDecorationSrc?: string
    leftDecorationClass?: string
    rightDecorationClass?: string
  }>(),
  {
    sectionClass: 'flex h-[662px] items-start justify-center pt-[150px] bg-white',
    descriptionClass: 'w-[1180px] text-[28px] leading-[34px]',
    backgroundSrc: '',
    leftDecorationSrc: '',
    rightDecorationSrc: '',
    leftDecorationClass: 'h-[662px] w-[672px] -top-[10px]',
    rightDecorationClass: 'h-[662px] w-[672px] -top-[10px]',
  },
)
</script>
