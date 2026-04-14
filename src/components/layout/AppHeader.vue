<template>
  <header class="border-b border-zinc-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="text-lg font-bold tracking-normal text-zinc-950">
        OrCloud
      </RouterLink>

      <nav aria-label="Primary navigation" class="flex items-center gap-2">
        <RouterLink
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-emerald-50 hover:text-emerald-800"
          active-class="bg-emerald-100 text-emerald-900"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navigationItems } from '@/data/navigation'
</script>
