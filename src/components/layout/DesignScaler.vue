<template>
  <VScaleScreen
    v-if="shouldScale"
    :width="1920"
    :height="1080"
    :auto-scale="{ x: false, y: false }"
    :body-overflow-hidden="false"
    :box-style="scaleBoxStyle"
    :wrapper-style="scaleWrapperStyle"
  >
    <slot />
  </VScaleScreen>

  <div v-else class="mx-auto min-h-screen w-[1920px] bg-white">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import VScaleScreen from 'v-scale-screen'

const viewportWidth = ref(1920)

const shouldScale = computed(() => viewportWidth.value < 1920)

const scaleBoxStyle = {
  height: 'auto',
  minHeight: '100vh',
  overflow: 'visible',
  backgroundColor: '#ffffff',
}

const scaleWrapperStyle = {
  overflow: 'visible',
}

function syncViewportWidth() {
  const layoutViewportWidth = document.documentElement.clientWidth || window.innerWidth
  viewportWidth.value = layoutViewportWidth
  document.documentElement.style.setProperty('--viewport-width', `${layoutViewportWidth}px`)
}

onMounted(() => {
  syncViewportWidth()
  window.addEventListener('resize', syncViewportWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncViewportWidth)
})
</script>
