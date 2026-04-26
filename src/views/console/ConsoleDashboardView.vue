<template>
  <ConsoleLayout>
    <header>
      <p class="m-0 text-[14px] leading-none font-semibold text-[#5d9dff] uppercase">Management Console</p>
      <h1 class="console-title mt-2 mb-0 font-semibold text-[#191c1e]">Welcome back，Alex Sterling</h1>
      <p class="mt-2 mb-0 flex items-center gap-4 text-[14px] leading-none text-[#86909c]">
        <span>Account ID: 1111111</span>
        <span class="h-[14px] w-px bg-[#e6e6e6]" />
        <span>User ID: 13720769014</span>
      </p>
    </header>

    <div class="console-dashboard-grid">
      <div class="console-left-stack">
        <ConsoleCard title="Security Center" class="console-card-pad">
          <div class="security-status-grid">
            <article
              v-for="item in securityStatusItems"
              :key="item.title"
              class="security-status-card rounded-[12px] border border-[rgba(195,198,214,0.1)] bg-[#f6f7fb]"
            >
              <div class="flex items-center gap-[10px]">
                <component :is="item.icon" class="h-6 w-6 shrink-0 text-[#1d2129]" :stroke-width="1.7" />
                <div class="min-w-0 flex-1">
                  <h3 class="m-0 truncate text-[14px] leading-none font-semibold text-[#1d2129]">{{ item.title }}</h3>
                  <p class="mt-2 mb-0 truncate text-[12px] leading-none text-[#4e5969]">{{ item.subtitle }}</p>
                </div>
              </div>
              <RouterLink v-if="item.action" class="mt-3 block text-right text-[12px] leading-none font-normal text-[#0168f0] no-underline" to="/console/security">
                {{ item.action }}
              </RouterLink>
            </article>
          </div>
        </ConsoleCard>

        <ConsoleCard title="Account Information" class="console-card-pad">
          <div class="shortcut-grid">
            <button
              v-for="shortcut in accountShortcuts"
              :key="shortcut.title"
              class="shortcut-tile"
              :class="`shortcut-tile--${shortcut.tone}`"
              type="button"
            >
              <component :is="shortcut.icon" class="h-5 w-5" :stroke-width="1.8" />
              <span>{{ shortcut.title }}</span>
            </button>
          </div>
        </ConsoleCard>
      </div>

      <div class="console-right-stack">
        <ConsoleCard title="Financial Overview" class="console-card-pad">
          <template #actions>
            <Eye class="h-5 w-5 text-[#0168f0]" :stroke-width="1.8" />
          </template>

          <div class="financial-balance-row">
            <div class="min-w-0 flex-1">
              <p class="m-0 text-[16px] leading-none font-medium text-[#4e5969]">Available Balance</p>
              <strong class="mt-2 block text-[26px] leading-none font-semibold text-[#0168f0]">$ 0.00</strong>
            </div>
            <el-button type="primary" class="console-primary-button">Top Up</el-button>
          </div>

          <div class="mt-4 flex items-center justify-between text-[14px] leading-[15px]">
            <span class="text-[#4e5969]">Unpaid orders: <span class="text-[#0168f0]">0</span></span>
            <RouterLink class="text-center text-[#0168f0] no-underline" to="/console/finance">[Balance Reminder]</RouterLink>
          </div>

          <el-divider class="console-divider" />

          <div>
            <p class="m-0 text-[16px] leading-none font-medium text-[#4e5969]">Consumption Tracking</p>
            <div class="consumption-grid mt-3 text-[14px] leading-none font-medium text-[#1d2129]">
              <span>Total: <strong class="ml-2 font-medium text-[#0168f0]">$0.00</strong></span>
              <span>Monthly: <strong class="ml-2 font-medium text-[#0168f0]">$0.00</strong></span>
            </div>
            <div class="financial-button-grid mt-6">
              <el-button plain class="console-outline-button">Financial info</el-button>
              <el-button plain class="console-outline-button">Bill detail</el-button>
            </div>
          </div>
        </ConsoleCard>

        <ConsoleCard title="Resource Statistics" class="console-card-pad">
          <div class="resource-metric-grid">
            <div v-for="metric in resourceMetrics" :key="metric.label" class="resource-metric-card rounded-[12px] bg-[#f6f7fb]">
              <p class="m-0 text-[16px] leading-none font-medium text-[#4e5969]">{{ metric.label }}</p>
              <strong class="mt-3 block text-[26px] leading-none font-semibold text-[#0168f0]">{{ metric.value }}</strong>
            </div>
          </div>
          <el-progress class="mt-6" :percentage="93" :show-text="false" :stroke-width="8" />
        </ConsoleCard>
      </div>
    </div>

    <ConsoleCard title="Active Subscriptions" class="console-card-pad product-list-section">
      <template #actions>
        <el-button type="primary" class="console-deploy-button">
          <Plus class="mr-2 h-5 w-5" :stroke-width="2" />
          Deploy New Server
        </el-button>
      </template>

      <el-table class="console-table" :data="[]" empty-text=" " table-layout="fixed">
        <el-table-column
          v-for="column in subscriptionColumns"
          :key="column.prop"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :align="column.align"
          :header-align="column.align"
        />
        <template #empty>
          <div class="console-empty-state flex flex-col items-center justify-start">
            <img class="console-empty-image" :src="emptySubscriptions" alt="" aria-hidden="true" />
            <p class="mt-[46px] mb-0 text-[16px] leading-none font-medium text-[#4e5969]">Deploy new servers at our global data center locations</p>
          </div>
        </template>
      </el-table>
    </ConsoleCard>
  </ConsoleLayout>
</template>

<script setup lang="ts">
import { Eye, Plus } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import ConsoleCard from '@/components/console/ConsoleCard.vue'
import ConsoleLayout from '@/components/console/ConsoleLayout.vue'
import emptySubscriptions from '@/assets/console/empty-subscriptions.png'
import { accountShortcuts, resourceMetrics, securityStatusItems, subscriptionColumns } from '@/data/console'
</script>

<style scoped>
:deep(.el-button) {
  font-family: inherit;
}

.console-title {
  font-size: 32px;
  line-height: 1;
  letter-spacing: 0;
}

.console-dashboard-grid {
  display: grid;
  grid-template-columns: 560px minmax(0, 1fr);
  gap: 32px;
  margin-top: 32px;
}

.console-card-pad {
  padding: 32px;
}

.console-left-stack,
.console-right-stack {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.security-status-grid,
.shortcut-grid,
.resource-metric-grid,
.consumption-grid,
.financial-button-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.security-status-card {
  min-height: 88px;
  padding: 13px;
}

.resource-metric-card {
  padding: 16px;
}

.financial-balance-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.console-empty-state {
  min-height: 468px;
  padding-top: 49px;
}

.console-empty-image {
  width: 276px;
  height: 212px;
  object-fit: cover;
}

.product-list-section {
  margin-top: 32px;
}

:deep(.console-primary-button),
:deep(.console-deploy-button) {
  --el-button-bg-color: #0877ee;
  --el-button-border-color: #0877ee;
  --el-button-hover-bg-color: #006be0;
  --el-button-hover-border-color: #006be0;
  min-width: 95px;
  height: 40px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
}

:deep(.console-deploy-button) {
  min-width: 219px;
}

:deep(.console-outline-button) {
  --el-button-text-color: #0877ee;
  --el-button-border-color: #0877ee;
  --el-button-hover-text-color: #006be0;
  --el-button-hover-border-color: #006be0;
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
}

:deep(.console-divider) {
  margin: 24px 0;
}

:deep(.el-progress-bar__outer) {
  background-color: #dcecff;
}

:deep(.el-progress-bar__inner) {
  background-color: #0877ee;
}

:deep(.console-table) {
  --el-table-header-bg-color: #f7f8fa;
  --el-table-header-text-color: #737685;
  --el-table-border-color: transparent;
  --el-table-row-hover-bg-color: #f8fbff;
  border-radius: 8px;
  overflow: hidden;
}

:deep(.console-table th.el-table__cell) {
  height: 40px;
  padding: 4px 0;
  font-size: 13px;
  font-weight: 500;
}

:deep(.console-table .el-table__empty-block) {
  min-height: 468px;
}

.shortcut-tile {
  display: flex;
  min-height: 80px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 8px;
  color: #20242b;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

@media (max-width: 1320px) {
  .console-dashboard-grid {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }

  .security-status-grid,
  .resource-metric-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1180px) {
  .console-dashboard-grid {
    grid-template-columns: 1fr;
  }

  .security-status-grid,
  .resource-metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 1060px) {
  .security-status-grid,
  .shortcut-grid,
  .resource-metric-grid,
  .consumption-grid,
  .financial-button-grid {
    grid-template-columns: 1fr;
  }

  .financial-balance-row {
    flex-direction: column;
  }

}

.shortcut-tile--blue {
  background: #e9f0ff;
}

.shortcut-tile--warm {
  background: #fff5e8;
}

.shortcut-tile--mint {
  background: #e8fbf3;
}

.shortcut-tile--violet {
  background: #f2ecff;
}

</style>
