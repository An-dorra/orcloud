<template>
  <div class="flex flex-col items-center text-center">
    <h2 class="reveal-on-scroll m-0 text-[56px] leading-[68px] font-semibold tracking-[-0.02em] text-[#1a1c1c]">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="reveal-on-scroll reveal-delay-100 mt-6 mb-0 font-[300] text-[#7f8796]"
      :class="subtitleClass"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    subtitleClass?: string
  }>(),
  {
    subtitle: '',
    subtitleClass: 'w-[980px] text-[28px] leading-[34px]',
  },
)
</script>
