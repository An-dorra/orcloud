<template>
  <div
    class="fixed-slot-carousel__viewport overflow-visible"
    :style="viewportStyle"
    @mouseenter="handlePointerEnter"
    @mouseleave="handlePointerLeave"
    @focusin="handlePointerEnter"
    @focusout="handlePointerLeave"
  >
    <div class="fixed-slot-carousel__stage relative h-full">
      <button
        v-for="entry in visibleEntries"
        :key="`${entry.name}-${entry.itemIndex}`"
        type="button"
        class="fixed-slot-carousel__slot absolute border-0 bg-transparent p-0 text-left [transform-origin:center_bottom] [will-change:transform,filter,opacity] focus-visible:outline-2 focus-visible:outline-offset-[10px] focus-visible:outline-[rgba(1,104,240,0.35)]"
        :class="[
          `fixed-slot-carousel__slot--${entry.name}`,
          `fixed-slot-carousel__slot--depth-${entry.depth}`,
          { 'fixed-slot-carousel__slot--is-active': entry.name === activeSlotName },
        ]"
        :style="getSlotStyle(entry)"
        :aria-pressed="entry.name === activeSlotName"
        @click="activate(entry.itemIndex)"
      >
        <slot
          :item="entry.item"
          :item-index="entry.itemIndex"
          :slot-name="entry.name"
          :active="entry.name === activeSlotName"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

import { getFixedSlotEntries, type FixedSlotLayout } from './fixed-slot-carousel'

const props = withDefaults(
  defineProps<{
    items: unknown[]
    slotLayouts: readonly FixedSlotLayout[]
    initialIndex?: number
    viewportWidth?: number
    viewportHeight?: number
    activeSlotName?: string
    autoplayMs?: number
    pauseOnHover?: boolean
  }>(),
  {
    initialIndex: 0,
    viewportWidth: 1920,
    viewportHeight: 475,
    activeSlotName: 'center',
    autoplayMs: 0,
    pauseOnHover: true,
  },
)

const emit = defineEmits<{
  (event: 'update:activeIndex', value: number): void
  (event: 'change', value: number): void
}>()

const uncontrolledActiveIndex = ref(props.initialIndex)
const isInteractionPaused = ref(false)
let autoplayTimer: number | null = null

watch(
  () => props.initialIndex,
  (value) => {
    uncontrolledActiveIndex.value = value
  },
)

watch(
  () => [props.autoplayMs, props.items.length, isInteractionPaused.value] as const,
  () => {
    syncAutoplay()
  },
  { immediate: true },
)

const viewportStyle = computed(() => ({
  width: `${props.viewportWidth}px`,
  height: `${props.viewportHeight}px`,
}))

const visibleEntries = computed(() =>
  getFixedSlotEntries(props.items, uncontrolledActiveIndex.value, props.slotLayouts),
)

type VisibleEntry = (typeof visibleEntries.value)[number]

function getSlotStyle(entry: VisibleEntry) {
  const isActive = entry.name === props.activeSlotName
  const depthStyle =
    entry.depth === 'center'
      ? {
          transform: 'translate3d(0, -8px, 0) scale(1)',
          filter: 'brightness(1) saturate(1)',
          opacity: 1,
        }
      : entry.depth === 'adjacent'
        ? {
            transform: 'translate3d(0, 4px, 0) scale(0.986)',
            filter: 'brightness(0.94) saturate(0.92)',
            opacity: 0.96,
          }
        : {
            transform: 'translate3d(0, 12px, 0) scale(0.968)',
            filter: 'brightness(0.87) saturate(0.85)',
            opacity: 0.9,
          }

  return {
    left: `${entry.left}px`,
    top: `${entry.top}px`,
    zIndex: entry.zIndex,
    cursor: 'pointer',
    transition:
      'left 320ms ease, top 320ms ease, transform 480ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease, opacity 420ms ease, z-index 320ms ease',
    ...depthStyle,
    ...(isActive ? { filter: 'brightness(1.02) saturate(1.03)' } : {}),
  }
}

function activate(index: number) {
  uncontrolledActiveIndex.value = index
  emit('update:activeIndex', index)
  emit('change', index)
}

function activateNext() {
  if (props.items.length === 0) {
    return
  }

  activate((uncontrolledActiveIndex.value + 1) % props.items.length)
}

function clearAutoplay() {
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function syncAutoplay() {
  clearAutoplay()

  if (!props.autoplayMs || props.autoplayMs <= 0 || props.items.length <= 1) {
    return
  }

  if (props.pauseOnHover && isInteractionPaused.value) {
    return
  }

  autoplayTimer = window.setInterval(() => {
    activateNext()
  }, props.autoplayMs)
}

function handlePointerEnter() {
  if (!props.pauseOnHover) {
    return
  }

  isInteractionPaused.value = true
}

function handlePointerLeave() {
  if (!props.pauseOnHover) {
    return
  }

  isInteractionPaused.value = false
}

onBeforeUnmount(() => {
  clearAutoplay()
})
</script>
