<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="site-header__brand" to="/" aria-label="Origins Cloud home">
        <img class="site-header__symbol" :src="originsCloudSymbol" alt="" />
        <img class="site-header__wordmark" :src="originsCloudWordmark" alt="Origins Cloud" />
      </RouterLink>

      <nav class="site-header__nav" aria-label="Primary navigation">
        <RouterLink
          v-for="item in navigationItems"
          :key="item.label"
          class="site-header__link"
          :to="item.to"
        >
          {{ item.label }}
          <img class="site-header__caret" :src="iconCaretDown" alt="" aria-hidden="true" />
        </RouterLink>
      </nav>

      <div class="site-header__actions" aria-label="Account links">
        <button class="site-header__icon" type="button" aria-label="Language">
          <img :src="iconGlobe" alt="" aria-hidden="true" />
        </button>
        <button class="site-header__icon" type="button" aria-label="App menu">
          <img :src="iconApps" alt="" aria-hidden="true" />
        </button>
        <img class="site-header__divider" :src="iconVerticalDivider" alt="" aria-hidden="true" />
        <RouterLink class="site-header__plain-link site-header__plain-link--light" to="/">
          Console
        </RouterLink>
        <RouterLink class="site-header__plain-link site-header__plain-link--light" to="/">
          Login
        </RouterLink>
        <RouterLink class="site-header__register" to="/">Register</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import originsCloudSymbol from '@/assets/images/origins-cloud-symbol.svg'
import originsCloudWordmark from '@/assets/images/origins-cloud-wordmark.svg'
import iconApps from '@/assets/icons/icon-apps.svg'
import iconCaretDown from '@/assets/icons/icon-caret-down.svg'
import iconGlobe from '@/assets/icons/icon-globe.svg'
import iconVerticalDivider from '@/assets/icons/icon-vertical-divider.svg'

const navigationItems = [
  { label: 'Product Center', to: '/' },
  { label: 'Service Guarantee', to: '/' },
  { label: 'Solutions', to: '/' },
  { label: 'Ecological Cooperation', to: '/' },
  { label: 'About Us', to: '/about' },
]
</script>

<style scoped>
.site-header {
  position: relative;
  z-index: 20;
  width: 100vw;
  height: 80px;
  background: #ffffff;
  backdrop-filter: blur(15px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  width: 1920px;
  height: 80px;
  padding: 0 33px 0 40px;
  margin: 0 auto;
}

.site-header__brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.site-header__symbol {
  width: 46px;
  height: 25px;
}

.site-header__wordmark {
  width: 112.317px;
  height: 17.388px;
  margin-left: 9px;
  display: block;
}

.site-header__nav {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 60px;
  align-items: center;
}

.site-header__link,
.site-header__plain-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #1d2129;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  white-space: nowrap;
}

.site-header__caret {
  width: 18px;
  height: 18px;
  display: block;
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 30px;
}

.site-header__icon {
  width: 20px;
  height: 20px;
  border: 0;
  background: transparent;
  padding: 0;
}

.site-header__icon img {
  width: 20px;
  height: 20px;
  display: block;
}

.site-header__divider {
  width: 1px;
  height: 15px;
  display: block;
}

.site-header__register {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  border-radius: 400px;
  background: #0289f2;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}

.site-header__plain-link--light {
  font-weight: 300;
}
</style>
