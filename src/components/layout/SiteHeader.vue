<template>
  <FullBleedSection
    tag="header"
    class="site-header fixed top-0 z-[1000] h-20 w-[1920px] overflow-visible bg-white [backdrop-filter:blur(15px)]"
    content-class="site-header__shell relative flex h-20 items-center pl-10 pr-[33px]"
    @mouseleave="closeMenu"
  >
    <RouterLink class="site-header__brand flex items-center no-underline" to="/" aria-label="Origins Cloud home">
      <img class="site-header__symbol h-[25px] w-[46px]" :src="originsCloudSymbol" alt="" />
      <img class="site-header__wordmark ml-[9px] block h-[17.388px] w-[112.317px]" :src="originsCloudWordmark" alt="Origins Cloud" />
    </RouterLink>

    <nav
      class="site-header__nav absolute left-[calc(50%-215.68px)] top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[60px]"
      aria-label="Primary navigation"
    >
      <div
        v-for="item in siteHeaderMenuItems"
        :key="item.key"
        class="site-header__nav-item relative"
        @mouseenter="handleMenuEnter(item.key)"
      >
        <RouterLink
          class="site-header__link inline-flex items-center gap-1 whitespace-nowrap text-[16px] leading-[20px] no-underline transition-colors duration-300"
          :class="isMenuHighlighted(item) ? 'font-medium text-[#0168f0]' : 'font-normal text-[#1d2129]'"
          :to="item.to"
        >
          {{ item.label }}
          <span class="site-header__caret-shell relative inline-flex h-[18px] w-[18px] flex-none items-center justify-center">
            <svg
              class="site-header__caret h-[18px] w-[18px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              :class="isMenuHighlighted(item) ? 'rotate-180 text-[#0168f0]' : 'text-[#1d2129]'"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M13.5 6.75L9 11.25L4.5 6.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </RouterLink>
      </div>
    </nav>

    <div class="site-header__actions ml-auto flex items-center gap-[30px]" aria-label="Account links">
      <button class="site-header__icon h-5 w-5 border-0 bg-transparent p-0" type="button" aria-label="Language">
        <img class="block h-5 w-5" :src="iconGlobe" alt="" aria-hidden="true" />
      </button>
      <button class="site-header__icon h-5 w-5 border-0 bg-transparent p-0" type="button" aria-label="App menu">
        <img class="block h-5 w-5" :src="iconApps" alt="" aria-hidden="true" />
      </button>
      <img class="site-header__divider block h-[15px] w-px" :src="iconVerticalDivider" alt="" aria-hidden="true" />
      <RouterLink class="site-header__plain-link inline-flex items-center gap-1 whitespace-nowrap text-[16px] leading-6 font-[300] text-[#1d2129] no-underline" to="/console">
        Console
      </RouterLink>
      <RouterLink class="site-header__plain-link inline-flex items-center gap-1 whitespace-nowrap text-[16px] leading-6 font-[300] text-[#1d2129] no-underline" to="/">
        Login
      </RouterLink>
      <RouterLink
        class="site-header__register inline-flex h-10 w-[150px] items-center justify-center rounded-[400px] bg-[#0289f2] text-[16px] font-semibold text-white no-underline"
        to="/"
      >
        Register
      </RouterLink>
    </div>

    <SiteHeaderDropdownPanel
      v-for="item in dropdownMenus"
      :key="`${item.key}-dropdown`"
      :menu="item"
      :is-open="activeMenuKey === item.key"
      :active-category-key="activeCategoryKeys[item.key]"
      :active-flat-item-key="activeFlatItemKeys[item.key]"
      :active-content-item-key="activeContentItemKeys[item.key]"
      @activate-category="(categoryKey) => handleCategoryEnter(item.key, categoryKey)"
      @activate-flat-item="(itemKey) => handleFlatItemEnter(item.key, itemKey)"
    />
  </FullBleedSection>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import SiteHeaderDropdownPanel from '@/components/layout/SiteHeaderDropdownPanel.vue'
import originsCloudSymbol from '@/assets/images/origins-cloud-symbol.svg'
import originsCloudWordmark from '@/assets/images/origins-cloud-wordmark.svg'
import iconApps from '@/assets/icons/icon-apps.svg'
import iconGlobe from '@/assets/icons/icon-globe.svg'
import iconVerticalDivider from '@/assets/icons/icon-vertical-divider.svg'
import { siteHeaderMenuItems, type SiteHeaderMenuItem } from '@/data/siteHeaderMenus'

const route = useRoute()

const dropdownMenus = siteHeaderMenuItems.filter((item) => item.dropdown)

const activeMenuKey = ref<string | null>(null)
const activeCategoryKeys = reactive<Record<string, string>>({
  'service-guarantee': 'service-guarantee',
  solutions: 'general-solution',
})
const activeFlatItemKeys = reactive<Record<string, string>>({
  'product-center': 'cloud-servers',
})
const activeContentItemKeys = reactive<Record<string, string>>({
  'service-guarantee': 'service-guarantee-page',
  solutions: 'cloud-server-deployment',
})

const routeMenuKey = computed(() => {
  return (
    siteHeaderMenuItems.find((item) => item.routePrefixes?.some((prefix) => route.path.startsWith(prefix)) || item.to === route.path)?.key ?? null
  )
})

const handleMenuEnter = (menuKey: string) => {
  const menu = siteHeaderMenuItems.find((item) => item.key === menuKey)

  if (!menu?.dropdown) {
    activeMenuKey.value = null
    return
  }

  activeMenuKey.value = menuKey
}

const handleCategoryEnter = (menuKey: string, categoryKey: string) => {
  activeCategoryKeys[menuKey] = categoryKey

  const menu = siteHeaderMenuItems.find((item) => item.key === menuKey)
  if (menu?.dropdown?.type !== 'split') {
    return
  }

  const category = menu.dropdown.categories.find((item) => item.key === categoryKey)
  if (category?.items[0]) {
    activeContentItemKeys[menuKey] = category.items[0].key
  }
}

const handleFlatItemEnter = (menuKey: string, itemKey: string) => {
  activeFlatItemKeys[menuKey] = itemKey
}

const closeMenu = () => {
  activeMenuKey.value = null
}

const isMenuHighlighted = (item: SiteHeaderMenuItem) => {
  return activeMenuKey.value === item.key || routeMenuKey.value === item.key
}
</script>

<style>
.site-header {
  transform: scale(var(--page-scale, 1));
  transform-origin: left top;
}
</style>
