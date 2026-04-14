<template>
  <article class="h-full rounded-md border border-zinc-200 bg-white p-6 shadow-sm">
    <p class="text-sm font-semibold text-rose-700">{{ eyebrow }}</p>
    <h2 class="mt-3 text-xl font-semibold text-zinc-950">{{ title }}</h2>
    <p class="mt-3 leading-7 text-zinc-700">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
// Feature cards accept only display data, so they stay easy to reuse.
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>
