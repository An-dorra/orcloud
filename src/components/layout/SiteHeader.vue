<template>
  <FullBleedSection
    tag="header"
    class="site-header relative z-20 h-20 bg-white [backdrop-filter:blur(15px)]"
    content-class="site-header__shell flex h-20 items-center pl-10 pr-[33px]"
  >
    <RouterLink class="site-header__brand flex items-center no-underline" to="/" aria-label="Origins Cloud home">
      <img class="site-header__symbol h-[25px] w-[46px]" :src="originsCloudSymbol" alt="" />
      <img class="site-header__wordmark ml-[9px] block h-[17.388px] w-[112.317px]" :src="originsCloudWordmark" alt="Origins Cloud" />
    </RouterLink>

    <nav class="site-header__nav flex flex-1 items-center justify-center gap-[60px]" aria-label="Primary navigation">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.label"
        class="site-header__link inline-flex items-center gap-1 whitespace-nowrap text-[16px] font-normal text-[#1d2129] no-underline"
        :to="item.to"
      >
        {{ item.label }}
        <img class="site-header__caret block h-[18px] w-[18px]" :src="iconCaretDown" alt="" aria-hidden="true" />
      </RouterLink>
    </nav>

    <div class="site-header__actions flex items-center gap-[30px]" aria-label="Account links">
      <button class="site-header__icon h-5 w-5 border-0 bg-transparent p-0" type="button" aria-label="Language">
        <img class="block h-5 w-5" :src="iconGlobe" alt="" aria-hidden="true" />
      </button>
      <button class="site-header__icon h-5 w-5 border-0 bg-transparent p-0" type="button" aria-label="App menu">
        <img class="block h-5 w-5" :src="iconApps" alt="" aria-hidden="true" />
      </button>
      <img class="site-header__divider block h-[15px] w-px" :src="iconVerticalDivider" alt="" aria-hidden="true" />
      <RouterLink class="site-header__plain-link site-header__plain-link--light inline-flex items-center gap-1 whitespace-nowrap text-[16px] font-[300] text-[#1d2129] no-underline" to="/">
        Console
      </RouterLink>
      <RouterLink class="site-header__plain-link site-header__plain-link--light inline-flex items-center gap-1 whitespace-nowrap text-[16px] font-[300] text-[#1d2129] no-underline" to="/">
        Login
      </RouterLink>
      <RouterLink
        class="site-header__register inline-flex h-10 w-[150px] items-center justify-center rounded-[400px] bg-[#0289f2] text-[16px] font-semibold text-white no-underline"
        to="/"
      >
        Register
      </RouterLink>
    </div>
  </FullBleedSection>
</template>

<script setup lang="ts">
import FullBleedSection from '@/components/layout/FullBleedSection.vue'
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
