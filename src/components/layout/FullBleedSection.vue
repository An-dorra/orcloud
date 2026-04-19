<template>
  <component
    :is="tag"
    class="full-bleed-section block min-[1921px]:ml-[calc(50%-(var(--viewport-width,100vw)/2))] min-[1921px]:mr-[calc(50%-(var(--viewport-width,100vw)/2))] min-[1921px]:w-[var(--viewport-width,100vw)]"
    v-bind="$attrs"
  >
    <div class="full-bleed-section__content w-full min-[1921px]:mx-auto min-[1921px]:w-[1920px]" :class="contentClass">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

withDefaults(
  defineProps<{
    tag?: string
    contentClass?: string
  }>(),
  {
    tag: 'section',
    contentClass: '',
  },
)
</script>
