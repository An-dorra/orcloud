<template>
  <section class="console-card">
    <div v-if="title || $slots.actions" class="mb-6 flex items-center justify-between gap-4">
      <h2 v-if="title" class="m-0 text-[18px] leading-none font-semibold text-[#191c1e]">{{ title }}</h2>
      <div v-if="$slots.actions" class="shrink-0">
        <slot name="actions" />
      </div>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>
.console-card {
  border-radius: 24px;
  background: #fff;
}
</style>
