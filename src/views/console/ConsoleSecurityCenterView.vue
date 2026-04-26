<template>
  <ConsoleLayout>
    <section class="security-page">
      <header class="security-header">
        <p class="security-eyebrow">Management Console</p>
        <h1>Security</h1>
      </header>

      <el-tabs v-model="activeTab" class="security-tabs">
        <el-tab-pane v-for="tab in securityTabs" :key="tab.name" :label="tab.label" :name="tab.name" />
      </el-tabs>

      <el-card class="security-panel" shadow="never">
        <div class="security-toolbar" :class="{ 'security-toolbar--split': Boolean(activeTabConfig.helperText) }">
          <p v-if="activeTabConfig.helperText" class="security-helper">{{ activeTabConfig.helperText }}</p>

          <div v-if="activeTabConfig.searchable" class="security-search">
            <el-input
              v-model="searchKeyword"
              class="security-search-input"
              placeholder="Please enter what you need to search for"
              clearable
            />
            <el-button type="primary" class="security-primary-button">Search</el-button>
          </div>

          <el-button v-if="activeTabConfig.createLabel" type="primary" class="security-primary-button">
            <Plus class="button-icon" :stroke-width="2" />
            {{ activeTabConfig.createLabel }}
          </el-button>
        </div>

        <div class="security-table-scroll">
          <el-table class="security-table" :data="filteredRows" table-layout="fixed">
            <el-table-column
              v-for="column in activeTabConfig.columns"
              :key="column.prop"
              :prop="column.prop"
              :label="column.label"
              :width="column.width"
              :min-width="column.minWidth"
              :align="column.align"
              :header-align="column.align"
              :show-overflow-tooltip="column.overflow"
            >
              <template v-if="column.prop === 'operation'" #default="{ row }">
                <el-button link type="primary" class="security-table-action">{{ row.operation }}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="security-pagination-wrap">
          <el-pagination
            v-model:current-page="currentPage"
            background
            layout="prev, pager, next"
            :page-size="activeTabConfig.rows.length"
            :total="99"
          />
        </div>
      </el-card>
    </section>
  </ConsoleLayout>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Plus } from 'lucide-vue-next'

import ConsoleLayout from '@/components/console/ConsoleLayout.vue'

type SecurityTabName = 'api' | 'ssh-key' | 'api-logs' | 'security-group'

type SecurityColumn = {
  prop: string
  label: string
  width?: number
  minWidth?: number
  align?: 'left' | 'right' | 'center'
  overflow?: boolean
}

type SecurityRow = Record<string, string>

type SecurityTabConfig = {
  name: SecurityTabName
  label: string
  createLabel?: string
  helperText?: string
  searchable?: boolean
  minTableWidth: number
  columns: SecurityColumn[]
  rows: SecurityRow[]
}

const sharedDescription = "User 123456 has agreed to the 'Service Agreement' and 'Privacy Policy, account registration successful"
const sharedTime = '2026-04-13 19:11'
const sharedIp = '172.70.208.80:13292'

const securityTabs: SecurityTabConfig[] = [
  {
    name: 'api',
    label: 'API',
    createLabel: 'Create API',
    minTableWidth: 1180,
    columns: [
      { prop: 'id', label: 'ID', width: 120 },
      { prop: 'name', label: 'Name', minWidth: 240, overflow: true },
      { prop: 'creationTime', label: 'Creation Time', width: 240 },
      { prop: 'ipWhitelist', label: 'IP Whitelist', width: 220 },
      { prop: 'allowedIpAccess', label: 'Allowed IP Access', width: 220 },
      { prop: 'operation', label: 'Operation', width: 150, align: 'right' },
    ],
    rows: Array.from({ length: 2 }, () => ({
      id: '406',
      name: sharedDescription,
      creationTime: sharedTime,
      ipWhitelist: sharedIp,
      allowedIpAccess: sharedIp,
      operation: 'delete',
    })),
  },
  {
    name: 'ssh-key',
    label: 'SSH Key',
    createLabel: 'Create API',
    helperText: 'The key will be used when creating instances; you can use your private key to log in to the cloud server.',
    minTableWidth: 900,
    columns: [
      { prop: 'name', label: 'Name', width: 250 },
      { prop: 'fingerprint', label: 'Fingerprint', minWidth: 500, overflow: true },
      { prop: 'operation', label: 'Operation', width: 150, align: 'right' },
    ],
    rows: Array.from({ length: 2 }, () => ({
      name: 'Name',
      fingerprint: sharedDescription,
      operation: 'delete',
    })),
  },
  {
    name: 'api-logs',
    label: 'API Logs',
    searchable: true,
    minTableWidth: 1000,
    columns: [
      { prop: 'id', label: 'ID', width: 200 },
      { prop: 'description', label: 'Describe', minWidth: 420, overflow: true },
      { prop: 'creationTime', label: 'Creation Time', width: 240 },
      { prop: 'ip', label: 'IP', width: 300, align: 'right' },
    ],
    rows: Array.from({ length: 2 }, () => ({
      id: '406',
      description: sharedDescription,
      creationTime: sharedTime,
      ip: sharedIp,
    })),
  },
  {
    name: 'security-group',
    label: 'Security Group',
    createLabel: 'Create Security Group',
    minTableWidth: 1180,
    columns: [
      { prop: 'name', label: 'Name', width: 180 },
      { prop: 'instance', label: 'Instance', width: 180 },
      { prop: 'rules', label: 'Rules', width: 180 },
      { prop: 'description', label: 'Describe', minWidth: 280, overflow: true },
      { prop: 'creationTime', label: 'Creation Time', width: 200 },
      { prop: 'operation', label: 'Operation', width: 150, align: 'right' },
    ],
    rows: Array.from({ length: 2 }, () => ({
      name: 'name',
      instance: 'Instance',
      rules: 'Rules',
      description: sharedDescription,
      creationTime: sharedTime,
      operation: 'delete',
    })),
  },
]

const activeTab = ref<SecurityTabName>('api')
const currentPage = ref(1)
const searchKeyword = ref('')

const activeTabConfig = computed(() => securityTabs.find((tab) => tab.name === activeTab.value) ?? securityTabs[0])

const filteredRows = computed(() => {
  const rows = activeTabConfig.value.rows
  const keyword = searchKeyword.value.trim().toLowerCase()

  if (!activeTabConfig.value.searchable || !keyword) {
    return rows
  }

  return rows.filter((row) => Object.values(row).some((value) => value.toLowerCase().includes(keyword)))
})

const tableMinWidth = computed(() => `${activeTabConfig.value.minTableWidth}px`)

watch(activeTab, () => {
  currentPage.value = 1
  searchKeyword.value = ''
})
</script>

<style scoped>
:deep(.el-button),
:deep(.el-input__inner),
:deep(.el-tabs__item),
:deep(.el-table),
:deep(.el-pagination) {
  font-family: inherit;
}

.security-page {
  display: flex;
  min-height: calc(100vh - 80px);
  flex-direction: column;
  gap: 32px;
}

.security-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.security-eyebrow {
  margin: 0;
  color: #5d9dff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}

.security-header h1 {
  margin: 0;
  color: #191c1e;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
}

:deep(.security-tabs.el-tabs) {
  --el-color-primary: #0168f0;
}

:deep(.security-tabs .el-tabs__header) {
  margin: 0;
}

:deep(.security-tabs .el-tabs__nav-wrap::after) {
  height: 1px;
  background: #ebedf1;
}

:deep(.security-tabs .el-tabs__nav) {
  gap: 40px;
}

:deep(.security-tabs .el-tabs__item) {
  height: 48px;
  padding: 0;
  color: #86909c;
  font-size: 24px;
  font-weight: 500;
  line-height: 48px;
}

:deep(.security-tabs .el-tabs__item.is-active) {
  color: #0168f0;
  font-weight: 600;
}

:deep(.security-tabs .el-tabs__active-bar) {
  height: 2px;
  background: #0168f0;
}

:deep(.security-tabs .el-tabs__content) {
  display: none;
}

.security-panel {
  display: flex;
  min-height: 646px;
  flex: 1;
  border: 1px solid rgba(195, 198, 214, 0.1);
  border-radius: 24px;
}

:deep(.security-panel > .el-card__body) {
  display: flex;
  width: 100%;
  min-height: 646px;
  flex-direction: column;
  padding: 33px;
}

.security-toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
}

.security-toolbar--split {
  justify-content: space-between;
}

.security-helper {
  min-width: 0;
  margin: 0;
  color: #86909c;
  font-size: 16px;
  line-height: 1.4;
}

.security-search {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
}

.security-search-input {
  width: 534px;
  max-width: 100%;
}

:deep(.security-search-input .el-input__wrapper) {
  min-height: 40px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #ebedf1 inset;
}

:deep(.security-search-input .el-input__inner) {
  color: #1d2129;
  font-size: 14px;
}

:deep(.security-search-input .el-input__inner::placeholder) {
  color: #c9cdd4;
}

:deep(.security-primary-button) {
  --el-button-bg-color: #0168f0;
  --el-button-border-color: #0168f0;
  --el-button-hover-bg-color: #006be0;
  --el-button-hover-border-color: #006be0;
  height: 40px;
  border-radius: 8px;
  padding-inline: 18px;
  font-size: 16px;
  font-weight: 600;
}

.button-icon {
  width: 20px;
  height: 20px;
}

.security-table-scroll {
  width: 100%;
  margin-top: 24px;
  overflow-x: auto;
}

:deep(.security-table) {
  --el-table-border-color: #e6e6e6;
  --el-table-header-bg-color: #f7f8fa;
  --el-table-header-text-color: #737685;
  --el-table-row-hover-bg-color: #f8fbff;
  min-width: v-bind(tableMinWidth);
  border-radius: 8px;
  overflow: hidden;
}

:deep(.security-table::before),
:deep(.security-table .el-table__inner-wrapper::before) {
  display: none;
}

:deep(.security-table th.el-table__cell) {
  height: 40px;
  padding: 4px 0;
  border-bottom: 0;
  background: #f7f8fa;
  color: #737685;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
}

:deep(.security-table th.el-table__cell:first-child) {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

:deep(.security-table th.el-table__cell:last-child) {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

:deep(.security-table td.el-table__cell) {
  height: 50px;
  padding: 8px 0;
  color: #1d2129;
  font-size: 13px;
  font-weight: 400;
}

:deep(.security-table .cell) {
  padding-inline: 16px;
  line-height: 1.2;
}

:deep(.security-table-action.el-button) {
  height: auto;
  padding: 0;
  color: #0168f0;
  font-size: 13px;
  font-weight: 400;
}

.security-pagination-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  padding-top: 24px;
}

:deep(.security-pagination-wrap .el-pagination) {
  gap: 24px;
  --el-pagination-button-width: 24px;
  --el-pagination-button-height: 24px;
  --el-pagination-font-size: 16px;
}

:deep(.security-pagination-wrap .el-pager) {
  gap: 12px;
}

:deep(.security-pagination-wrap .btn-prev),
:deep(.security-pagination-wrap .btn-next),
:deep(.security-pagination-wrap .el-pager li) {
  min-width: 24px;
  height: 24px;
  border-radius: 20px;
  background: transparent;
  color: #1d2129;
  font-weight: 500;
}

:deep(.security-pagination-wrap .el-pager li.is-active) {
  background: #1d2129;
  color: #ffffff;
}

@media (max-width: 1320px) {
  .security-toolbar,
  .security-toolbar--split,
  .security-search {
    align-items: stretch;
    flex-direction: column;
  }

  .security-helper {
    white-space: normal;
  }

  .security-search-input,
  :deep(.security-primary-button) {
    width: 100%;
  }
}

@media (max-width: 860px) {
  .security-page {
    gap: 24px;
  }

  :deep(.security-tabs .el-tabs__nav) {
    gap: 24px;
  }

  :deep(.security-tabs .el-tabs__item) {
    font-size: 20px;
  }

  :deep(.security-panel > .el-card__body) {
    min-height: auto;
    padding: 24px;
  }
}

@media (max-width: 640px) {
  .security-panel {
    border-radius: 16px;
  }

  .security-helper,
  :deep(.security-primary-button) {
    font-size: 14px;
  }
}
</style>
