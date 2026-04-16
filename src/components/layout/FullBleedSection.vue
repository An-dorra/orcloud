<template>
  <component :is="tag" class="full-bleed-section" v-bind="$attrs">
    <div class="full-bleed-section__content" :class="contentClass">
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

<style scoped>
.full-bleed-section {
  display: block;
}

.full-bleed-section__content {
  width: 100%;
  height: 100%;
}

@media (min-width: 1921px) {
  .full-bleed-section {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }

  .full-bleed-section__content {
    width: 1920px;
    margin: 0 auto;
  }
}
</style>
