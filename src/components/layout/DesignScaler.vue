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

  <div v-else class="design-static-shell">
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
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  syncViewportWidth()
  window.addEventListener('resize', syncViewportWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncViewportWidth)
})
</script>

<style scoped>
.design-static-shell {
  width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
  background: #ffffff;
}
</style>
