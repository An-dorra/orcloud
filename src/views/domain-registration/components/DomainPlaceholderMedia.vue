<template>
  <div
    class="domain-placeholder-media flex items-center justify-center overflow-hidden rounded-[8px] border border-[rgba(148,163,184,0.2)] bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(255,255,255,0.96))]"
    :class="toneClass"
    data-placeholder-media
    aria-hidden="true"
  >
    <span class="text-center text-[11px] leading-[1.2] font-medium uppercase tracking-[1.2px] text-[rgba(29,33,41,0.48)]">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    tone?: 'blue' | 'teal' | 'sky' | 'violet' | 'orange' | 'slate' | 'copper' | 'indigo'
  }>(),
  {
    label: 'Placeholder',
    tone: 'blue',
  },
)

const toneClass = computed(() => {
  switch (props.tone) {
    case 'teal':
      return 'bg-[linear-gradient(135deg,rgba(45,212,191,0.18),rgba(255,255,255,0.96))]'
    case 'sky':
      return 'bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(255,255,255,0.96))]'
    case 'violet':
      return 'bg-[linear-gradient(135deg,rgba(167,139,250,0.18),rgba(255,255,255,0.96))]'
    case 'orange':
      return 'bg-[linear-gradient(135deg,rgba(251,146,60,0.18),rgba(255,255,255,0.96))]'
    case 'slate':
      return 'bg-[linear-gradient(135deg,rgba(148,163,184,0.2),rgba(255,255,255,0.96))]'
    case 'copper':
      return 'bg-[linear-gradient(135deg,rgba(180,83,9,0.16),rgba(255,255,255,0.96))]'
    case 'indigo':
      return 'bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(255,255,255,0.96))]'
    default:
      return ''
  }
})
</script>
