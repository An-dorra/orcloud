<template>
  <div class="app-shell min-h-screen bg-white">
    <RouterView v-slot="{ Component, route }">
      <component v-if="route.meta.layout === 'console'" :is="Component" />

      <template v-else>
        <SiteHeader />
        <DesignScaler>
          <div class="min-h-screen w-[1920px] bg-white">
            <main class="pt-20">
              <component :is="Component" />
            </main>
            <SiteFooter />
          </div>
        </DesignScaler>
      </template>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import DesignScaler from '@/components/layout/DesignScaler.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
</script>
