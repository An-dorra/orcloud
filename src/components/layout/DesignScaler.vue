<template>
  <div
    v-if="shouldScale"
    class="design-scaler design-scaler--scaled relative min-h-screen w-full overflow-x-hidden bg-white"
    :style="scaledViewportStyle"
  >
    <div ref="scaleFrameRef" class="design-scaler__frame absolute top-0 left-0 w-[1920px] bg-white" :style="scaledFrameStyle">
      <slot />
    </div>
  </div>

  <div v-else class="design-scaler mx-auto min-h-screen w-[1920px] bg-white">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import type { CSSProperties } from 'vue'

const DESIGN_WIDTH = 1920

const viewportWidth = ref(DESIGN_WIDTH)
const contentHeight = ref(1080)
const scaleFrameRef = ref<HTMLElement | null>(null)
let resizeObserver: ResizeObserver | undefined

const pageScale = computed(() => Math.min(1, viewportWidth.value / DESIGN_WIDTH))
const shouldScale = computed(() => viewportWidth.value < DESIGN_WIDTH)

const scaledViewportStyle = computed<CSSProperties>(() => ({
  height: `${Math.max(contentHeight.value * pageScale.value, window.innerHeight || 0)}px`,
}))

const scaledFrameStyle = computed<CSSProperties>(() => ({
  transform: `scale(${pageScale.value})`,
  transformOrigin: 'left top',
}))

function syncViewportWidth() {
  const layoutViewportWidth = document.documentElement.clientWidth || window.innerWidth

  viewportWidth.value = layoutViewportWidth
  document.documentElement.style.setProperty('--page-scale', `${pageScale.value}`)
  document.documentElement.style.setProperty('--viewport-width', `${layoutViewportWidth}px`)
}

function syncContentHeight() {
  const frame = scaleFrameRef.value

  if (!frame) {
    return
  }

  contentHeight.value = Math.max(frame.scrollHeight, 1080)
}

async function syncScaleLayout() {
  syncViewportWidth()
  await nextTick()
  syncContentHeight()
}

onMounted(async () => {
  await syncScaleLayout()

  window.addEventListener('resize', syncScaleLayout)

  if (typeof ResizeObserver === 'function' && scaleFrameRef.value) {
    resizeObserver = new ResizeObserver(() => {
      syncContentHeight()
    })
    resizeObserver.observe(scaleFrameRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', syncScaleLayout)
  resizeObserver?.disconnect()
})
</script>
