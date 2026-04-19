<template>
  <DesignScaler>
    <div class="min-h-screen w-[1920px] bg-white">
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
