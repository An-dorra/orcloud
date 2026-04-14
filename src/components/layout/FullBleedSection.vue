<template>
  <component :is="tag" class="full-bleed" :class="outerClass">
    <div class="full-bleed__inner" :class="innerClass">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
interface FullBleedSectionProps {
  tag?: keyof HTMLElementTagNameMap
  outerClass?: string
  innerClass?: string
}

const props = withDefaults(defineProps<FullBleedSectionProps>(), {
  tag: 'section',
  outerClass: '',
  innerClass: '',
})

const { tag, outerClass, innerClass } = props
</script>
