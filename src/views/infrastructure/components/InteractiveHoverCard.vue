<template>
  <component
    :is="tag"
    class="group cursor-pointer translate-y-0 scale-100 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:z-10 hover:-translate-y-[4px] hover:scale-[1.012] hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string
  }>(),
  {
    tag: 'article',
  },
)
</script>
