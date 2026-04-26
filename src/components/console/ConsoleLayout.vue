<template>
  <div class="console-layout bg-[#f5f7fb] text-[#20242b]">
    <ConsoleSidebar />
    <main class="h-screen min-w-0 flex-1 overflow-y-auto">
      <div class="console-main-shell min-h-screen">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ConsoleSidebar from './ConsoleSidebar.vue'
</script>

<style scoped>
.console-layout {
  display: flex;
  min-height: 100vh;
  min-width: 0;
  font-family:
    'Montserrat', Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.console-main-shell {
  width: 100%;
  max-width: 1584px;
  margin-inline: auto;
  padding: 40px;
}

@media (min-width: 1921px) {
  .console-main-shell {
    padding-inline: 48px;
  }
}

@media (min-width: 2560px) {
  .console-main-shell {
    max-width: 1584px;
    padding-inline: 40px;
  }
}

@media (max-width: 1440px) {
  .console-main-shell {
    padding: 32px;
  }
}

@media (max-width: 1180px) {
  .console-main-shell {
    padding: 24px;
  }
}
</style>
