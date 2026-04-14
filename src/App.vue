<template>
  <DesignScaler>
    <div class="app-shell">
      <SiteHeader />
      <main>
        <RouterView />
      </main>
      <SiteFooter />
    </div>
  </DesignScaler>
</template>

<script setup lang="ts">
import DesignScaler from '@/components/layout/DesignScaler.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
</script>

<style scoped>
.app-shell {
  width: 1920px;
  min-height: 100vh;
  overflow: hidden;
  background: #ffffff;
}
</style>
