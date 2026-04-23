<template>
  <div
    class="site-header-dropdown absolute left-1/2 top-20 h-[252px] w-[1920px] -translate-x-1/2 border-t border-[#ebedf1] bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
    :class="isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'"
  >
    <div v-if="menu.dropdown?.type === 'flat'" class="flex h-full items-start px-[120px]">
      <div class="flex h-full items-start overflow-hidden px-6 py-10" :class="menu.dropdown.panelWidthClass">
        <template v-for="(item, index) in menu.dropdown.items" :key="item.key">
          <RouterLink
            :to="item.to"
            class="site-header-dropdown__flat-item inline-flex h-12 w-[308px] items-center rounded-[8px] px-3 text-[16px] leading-5 font-medium no-underline transition-colors duration-300"
            :class="getFlatItemClass(item.key)"
            @mouseenter="$emit('activate-flat-item', item.key)"
          >
            {{ item.label }}
          </RouterLink>
          <div v-if="index < menu.dropdown.items.length - 1" class="mx-6 flex h-[70px] w-px shrink-0 items-center bg-[#ebedf1]" aria-hidden="true" />
        </template>
      </div>
    </div>

    <div v-else-if="menu.dropdown?.type === 'split'" class="flex h-full items-start px-[120px]">
      <div class="flex h-full w-[323px] shrink-0 flex-col gap-3 overflow-hidden border-r border-[#ebedf1] px-6 py-10">
        <button
          v-for="category in menu.dropdown.categories"
          :key="category.key"
          class="site-header-dropdown__category inline-flex h-12 w-[275px] items-center justify-between rounded-[8px] px-3 text-[16px] leading-5 font-medium transition-colors duration-300"
          :class="getCategoryClass(category.key)"
          type="button"
          @mouseenter="$emit('activate-category', category.key)"
        >
          <span>{{ category.label }}</span>
          <span class="inline-flex h-5 w-5 flex-none items-center justify-center">
            <span class="site-header-dropdown__chevron block h-[7px] w-[7px] border-r-[1.5px] border-t-[1.5px] rotate-45" />
          </span>
        </button>
      </div>

      <div class="flex h-full w-[1357px] flex-col overflow-hidden px-6 py-10">
        <div class="flex flex-wrap content-start" :class="menu.dropdown.contentGapClass">
          <RouterLink
            v-for="item in activeCategory?.items ?? []"
            :key="item.key"
            :to="item.to"
            class="site-header-dropdown__content-item inline-flex h-12 w-[308px] items-center rounded-[8px] px-3 text-[16px] leading-5 font-medium no-underline transition-colors duration-300"
            :class="getContentItemClass(item.key)"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { SiteHeaderCategory, SiteHeaderMenuItem } from '@/data/siteHeaderMenus'

const props = defineProps<{
  menu: SiteHeaderMenuItem
  isOpen: boolean
  activeCategoryKey?: string
  activeFlatItemKey?: string
  activeContentItemKey?: string
}>()

defineEmits<{
  'activate-category': [categoryKey: string]
  'activate-flat-item': [itemKey: string]
  'activate-content-item': [itemKey: string]
}>()

const activeCategory = computed<SiteHeaderCategory | undefined>(() => {
  if (props.menu.dropdown?.type !== 'split') {
    return undefined
  }

  return props.menu.dropdown.categories.find((category) => category.key === props.activeCategoryKey) ?? props.menu.dropdown.categories[0]
})

const getFlatItemClass = (itemKey: string) => {
  return props.activeFlatItemKey === itemKey ? 'bg-[#ebf2ff] text-[#0168f0]' : 'font-medium text-[#86909c]'
}

const getCategoryClass = (categoryKey: string) => {
  return props.activeCategoryKey === categoryKey
    ? 'bg-[#ebf2ff] text-[#0168f0]'
    : 'font-medium text-[#86909c]'
}

const getContentItemClass = (itemKey: string) => {
  const highlightedItem = activeCategory.value?.items.find((item) => item.highlighted)

  return highlightedItem?.key === itemKey
    ? 'bg-[#ebf2ff] text-[#0168f0]'
    : 'font-medium text-[#86909c]'
}

</script>

<style scoped>
.site-header-dropdown__category,
.site-header-dropdown__content-item,
.site-header-dropdown__flat-item {
  cursor: pointer;
}

.site-header-dropdown__category,
.site-header-dropdown__content-item,
.site-header-dropdown__flat-item,
.site-header-dropdown__chevron {
  transition:
    color 300ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 300ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.site-header-dropdown__chevron {
  border-color: currentColor;
}
</style>
