<template>
  <aside class="console-sidebar">
    <RouterLink class="console-brand no-underline" to="/console">
      <img class="console-brand__logo" src="@/assets/console/origins-cloud-console-logo.png" alt="Origins Cloud" />
    </RouterLink>

    <nav class="console-nav-section">
      <RouterLink
        v-for="item in consolePrimaryNavItems"
        :key="item.label"
        class="console-nav-item"
        active-class="is-active"
        :to="item.to"
      >
        <component :is="item.icon" class="h-[18px] w-[18px]" :stroke-width="1.8" />
        <span class="console-nav-label">{{ item.label }}</span>
      </RouterLink>
    </nav>

    <nav class="console-nav-section console-nav-section--utility">
      <RouterLink
        v-for="item in consoleUtilityNavItems"
        :key="item.label"
        class="console-nav-item"
        active-class="is-active"
        :to="item.to"
      >
        <component :is="item.icon" class="h-[18px] w-[18px]" :stroke-width="1.8" />
        <span class="console-nav-label">{{ item.label }}</span>
      </RouterLink>
    </nav>

    <div class="console-user mt-auto border-t border-[#e7ebf2]">
      <div class="flex items-center gap-4">
        <el-avatar :size="42" class="console-avatar">S</el-avatar>
        <div class="min-w-0 flex-1">
          <p class="m-0 truncate text-[15px] leading-5 font-medium text-[#20242b]">Alex Sterling</p>
          <p class="m-0 mt-1 text-[12px] leading-4 text-[#a0a7b4]">ID:123456</p>
        </div>
        <el-button circle text aria-label="User menu">
          <MoreHorizontal class="h-5 w-5 text-[#a0a7b4]" />
        </el-button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import { consolePrimaryNavItems, consoleUtilityNavItems } from '@/data/console'
</script>

<style scoped>
.console-sidebar {
  display: flex;
  width: 336px;
  min-width: 336px;
  height: 100vh;
  flex-direction: column;
  border-right: 1px solid #e1e6ef;
  background: #f5f7fb;
}

@media (min-width: 1921px) {
  .console-sidebar {
    width: 336px;
    min-width: 336px;
  }
}

.console-brand {
  display: flex;
  align-items: center;
  padding: 40px 34px 0;
}

.console-brand__logo {
  width: 167px;
  height: auto;
}

.console-nav-section {
  margin: 24px 32px 0;
  border-top: 1px solid #e7ebf2;
  padding-top: 24px;
}

.console-nav-section--utility {
  margin-top: 24px;
}

.console-nav-item {
  display: flex;
  align-items: center;
  width: 275px;
  min-height: 48px;
  gap: 12px;
  padding: 14px 12px;
  color: #8d96a3;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition:
    color 180ms ease,
    background 180ms ease;
}

.console-nav-item:hover,
.console-nav-item.is-active {
  color: #0877ee;
  background: rgba(8, 119, 238, 0.06);
}

.console-nav-label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.console-user {
  margin-inline: 32px;
  padding: 24px 12px;
}

.console-avatar {
  --el-avatar-bg-color: #0877ee;
  font-weight: 600;
}

@media (max-width: 1180px) {
  .console-sidebar {
    width: 88px;
    min-width: 88px;
  }

  .console-brand {
    justify-content: center;
    padding-inline: 14px;
  }

  .console-brand__logo {
    width: 52px;
    height: 32px;
    object-fit: cover;
    object-position: left center;
  }

  .console-nav-item {
    justify-content: center;
    padding-inline: 0;
  }

  .console-nav-label,
  .console-user .min-w-0,
  .console-user :deep(.el-button) {
    display: none;
  }

  .console-user > div {
    justify-content: center;
  }
}
</style>
