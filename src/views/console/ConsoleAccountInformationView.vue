<template>
  <ConsoleLayout>
    <section class="account-page">
      <header class="account-header">
        <p class="account-eyebrow">Management Console</p>
        <h1>Account Settings</h1>
      </header>

      <el-tabs v-model="activeTab" class="account-tabs">
        <el-tab-pane label="Summary" name="summary" />
        <el-tab-pane label="Operation Log" name="operation-log" />
      </el-tabs>

      <div v-if="activeTab === 'summary'" class="account-content">
        <div class="account-top-row">
          <el-card class="profile-status-card" shadow="never">
            <span class="status-pill">Active Status</span>
            <div class="status-copy">
              <h2>Identity Verified</h2>
              <p>Your account was verified on October 12, 2023. Next review scheduled for 2025.</p>
            </div>
            <p class="user-account">
              <span>User Account：</span>
              <strong>{{ accountForm.phone }}</strong>
            </p>
            <div class="security-meter" aria-label="Profile security 20 percent">
              <el-progress :percentage="20" :show-text="false" :stroke-width="4" />
              <span>Profile Security: 20%</span>
            </div>
          </el-card>

          <el-card class="account-panel basic-panel" shadow="never">
            <div class="panel-heading">
              <h2>Basic Information</h2>
              <p>Manage your personal details and localization settings.</p>
            </div>

            <el-form class="account-form" :model="accountForm" label-position="top">
              <div class="field-row">
                <el-form-item label="Full Name">
                  <el-input v-model="accountForm.fullName" />
                </el-form-item>
                <el-form-item label="Language">
                  <el-select v-model="accountForm.language" :teleported="false">
                    <el-option label="English (United States)" value="English (United States)" />
                  </el-select>
                </el-form-item>
              </div>

              <div class="field-row">
                <el-form-item label="Company">
                  <el-input v-model="accountForm.company" />
                </el-form-item>
                <el-form-item label="Country/Region">
                  <el-input v-model="accountForm.country" />
                </el-form-item>
              </div>

              <el-form-item label="Office Address">
                <el-input v-model="accountForm.officeAddress" type="textarea" :rows="3" resize="none" />
              </el-form-item>
            </el-form>

            <div class="notification-setting">
              <div class="notification-copy">
                <span class="notification-icon">
                  <Bell class="h-5 w-5" :stroke-width="1.8" />
                </span>
                <div>
                  <h3>Email Notifications</h3>
                  <p>Receive weekly performance summaries and alerts.</p>
                </div>
              </div>
              <el-switch v-model="accountForm.emailNotifications" class="notification-switch" aria-label="Email notifications enabled" />
            </div>
          </el-card>
        </div>

        <el-card class="account-panel credentials-panel" shadow="never">
          <div class="panel-heading">
            <h2>Account Credentials</h2>
            <p>Security settings and primary contact identifiers.</p>
          </div>

          <el-form class="account-form" :model="accountForm" label-position="top">
            <div class="field-row">
              <el-form-item label="Phone Number">
                <el-input v-model="accountForm.phone">
                  <template #prepend>+49</template>
                </el-input>
              </el-form-item>
              <el-form-item label="Primary Email">
                <el-input v-model="accountForm.email" />
              </el-form-item>
            </div>

            <div class="field-row field-row--password">
              <el-form-item class="password-field" label="Account Password">
                <el-input v-model="accountForm.password" type="password" show-password />
              </el-form-item>
              <el-button type="primary" class="change-password-button">Change Password</el-button>
            </div>
          </el-form>
        </el-card>
      </div>

      <footer v-if="activeTab === 'summary'" class="account-actions">
        <el-button class="discard-button">Discard Changes</el-button>
        <el-button type="primary" class="save-button">Save Account Profile</el-button>
      </footer>

      <el-card v-else class="operation-log-panel" shadow="never">
        <div class="operation-toolbar">
          <el-input v-model="operationSearch" class="operation-search-input" placeholder="Please enter what you need to search for" clearable />
          <el-button type="primary" class="operation-search-button">Search</el-button>
        </div>

        <div class="operation-table-scroll">
          <el-table class="operation-log-table" :data="filteredOperationLogs" table-layout="fixed">
            <el-table-column prop="id" label="ID" width="150" />
            <el-table-column prop="description" label="Describe" min-width="450" show-overflow-tooltip />
            <el-table-column prop="creationTime" label="Creation Time" width="200" />
            <el-table-column prop="ip" label="IP" width="200" />
          </el-table>
        </div>

        <div class="operation-pagination-wrap">
          <el-pagination
            v-model:current-page="operationCurrentPage"
            background
            layout="prev, pager, next"
            :page-size="11"
            :total="99"
          />
        </div>
      </el-card>
    </section>
  </ConsoleLayout>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Bell } from 'lucide-vue-next'

import ConsoleLayout from '@/components/console/ConsoleLayout.vue'

const activeTab = ref('summary')
const operationSearch = ref('')
const operationCurrentPage = ref(1)

const accountForm = reactive({
  fullName: 'Alex Sterling',
  language: 'English (United States)',
  company: 'Origins Cloud Systems',
  country: 'Germany',
  officeAddress: 'Technology Park East, Building 4, Berlin, 10115',
  emailNotifications: true,
  phone: '30 12345678',
  email: 'alex.sterling@origins-cloud.tech',
  password: '*********',
})

const operationLogs = Array.from({ length: 11 }, () => ({
  id: '406',
  description: "User 123456 has agreed to the 'Service Agreement' and 'Privacy Policy, account registration successful",
  creationTime: '2026-04-13 19:11',
  ip: '172.70.208.80:13292',
}))

const filteredOperationLogs = computed(() => {
  const keyword = operationSearch.value.trim().toLowerCase()

  if (!keyword) {
    return operationLogs
  }

  return operationLogs.filter((log) =>
    [log.id, log.description, log.creationTime, log.ip].some((value) => value.toLowerCase().includes(keyword)),
  )
})
</script>

<style scoped>
:deep(.el-button),
:deep(.el-input__inner),
:deep(.el-textarea__inner),
:deep(.el-select__wrapper),
:deep(.el-form-item__label),
:deep(.el-tabs__item),
:deep(.el-table),
:deep(.el-pagination) {
  font-family: inherit;
}

.account-page {
  display: flex;
  min-height: calc(100vh - 80px);
  flex-direction: column;
  gap: 32px;
}

.account-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.account-eyebrow {
  margin: 0;
  color: #5d9dff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}

.account-header h1 {
  margin: 0;
  color: #191c1e;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
}

:deep(.account-tabs.el-tabs) {
  --el-color-primary: #0168f0;
}

:deep(.account-tabs .el-tabs__header) {
  margin: 0;
}

:deep(.account-tabs .el-tabs__nav-wrap::after) {
  height: 1px;
  background: #e6e6e6;
}

:deep(.account-tabs .el-tabs__nav) {
  gap: 40px;
}

:deep(.account-tabs .el-tabs__item) {
  height: 48px;
  padding: 0;
  color: #86909c;
  font-size: 24px;
  font-weight: 500;
  line-height: 48px;
}

:deep(.account-tabs .el-tabs__item.is-active) {
  color: #0168f0;
  font-weight: 600;
}

:deep(.account-tabs .el-tabs__active-bar) {
  height: 2px;
  background: #0168f0;
}

:deep(.account-tabs .el-tabs__content) {
  display: none;
}

.account-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;
}

.account-top-row {
  display: flex;
  align-items: stretch;
  gap: 32px;
}

.profile-status-card {
  width: 352px;
  flex: 0 0 352px;
  border: 0;
  border-radius: 24px;
  background: #ebf2ff;
}

:deep(.profile-status-card > .el-card__body) {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
}

.status-pill {
  align-self: flex-start;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.6);
  padding: 4px 8px;
  color: #0168f0;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
}

.status-copy {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.status-copy h2 {
  margin: 0;
  color: #1d2129;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
}

.status-copy p {
  margin: 0;
  color: #4e5969;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.4;
}

.user-account {
  display: flex;
  gap: 12px;
  margin: 0;
  color: #4e5969;
  font-size: 14px;
  line-height: 1.2;
}

.user-account strong {
  color: #1d2129;
  font-weight: 500;
}

.security-meter {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  padding-block: 12px;
}

:deep(.security-meter .el-progress-bar__outer) {
  background: #d1e1fe;
}

:deep(.security-meter .el-progress-bar__inner) {
  background: #0168f0;
}

.security-meter > span {
  color: rgba(78, 89, 105, 0.7);
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
}

.account-panel {
  border: 1px solid #ebedf1;
  border-radius: 24px;
}

:deep(.account-panel > .el-card__body) {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
}

.basic-panel {
  flex: 1 1 auto;
  min-width: 0;
}

.credentials-panel {
  width: 100%;
}

.panel-heading {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.panel-heading h2 {
  margin: 0;
  color: #1d2129;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
}

.panel-heading p {
  margin: 0;
  color: #86909c;
  font-size: 14px;
  line-height: 1.2;
}

.account-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.field-row {
  display: flex;
  gap: 32px;
}

.field-row--password {
  align-items: flex-end;
  max-width: calc(50% - 16px);
}

:deep(.account-form .el-form-item) {
  min-width: 0;
  flex: 1 1 0;
  margin: 0;
}

:deep(.account-form .el-form-item__label) {
  margin-bottom: 8px;
  color: #4e5969;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
}

:deep(.account-form .el-input__wrapper),
:deep(.account-form .el-select__wrapper) {
  min-height: 40px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #e6e6e6 inset;
}

:deep(.account-form .el-input__wrapper:hover),
:deep(.account-form .el-select__wrapper:hover),
:deep(.account-form .el-input__wrapper.is-focus),
:deep(.account-form .el-select__wrapper.is-focused) {
  box-shadow: 0 0 0 1px #d2d8e2 inset;
}

:deep(.account-form .el-input__inner),
:deep(.account-form .el-select__selected-item) {
  color: #1d2129;
  font-size: 14px;
  font-weight: 400;
}

:deep(.account-form .el-textarea__inner) {
  min-height: 80px !important;
  border-radius: 8px;
  color: #1d2129;
  font-size: 14px;
  box-shadow: 0 0 0 1px #e6e6e6 inset;
}

:deep(.account-form .el-input-group__prepend) {
  width: 61px;
  border: 0;
  border-radius: 8px 0 0 8px;
  background: #f7f8fa;
  color: #0168f0;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 0 0 1px #ebedf1 inset;
}

:deep(.account-form .el-input-group--prepend .el-input__wrapper) {
  border-radius: 0 8px 8px 0;
  box-shadow: 0 0 0 1px #ebedf1 inset;
}

.notification-setting {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 8px;
  background: #f6f7fb;
  padding: 16px;
}

.notification-copy {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 24px;
}

.notification-icon {
  display: flex;
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  align-items: center;
  justify-content: center;
  color: #0168f0;
}

.notification-copy h3 {
  margin: 0;
  color: #1d2129;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
}

.notification-copy p {
  margin: 8px 0 0;
  color: #86909c;
  font-size: 12px;
  line-height: 16px;
}

:deep(.notification-switch.el-switch) {
  --el-switch-on-color: #0168f0;
  --el-switch-off-color: #d1d7e0;
  height: 24px;
}

:deep(.notification-switch .el-switch__core) {
  min-width: 44px;
  height: 24px;
  border: 0;
}

:deep(.notification-switch .el-switch__action) {
  width: 20px;
  height: 20px;
}

.password-field {
  flex: 1 1 auto;
}

:deep(.change-password-button) {
  --el-button-bg-color: #0168f0;
  --el-button-border-color: #0168f0;
  --el-button-hover-bg-color: #006be0;
  --el-button-hover-border-color: #006be0;
  height: 40px;
  flex: 0 0 auto;
  border-radius: 8px;
  padding-inline: 12px;
  font-size: 16px;
  font-weight: 600;
}

.account-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: auto;
}

:deep(.discard-button),
:deep(.save-button) {
  width: 240px;
  height: 48px;
  border-radius: 800px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
}

:deep(.discard-button) {
  --el-button-bg-color: #eff1f3;
  --el-button-text-color: #86909c;
  --el-button-hover-bg-color: #e7ebf0;
  --el-button-hover-text-color: #667085;
}

:deep(.save-button) {
  --el-button-bg-color: #0168f0;
  --el-button-border-color: #0168f0;
  --el-button-hover-bg-color: #006be0;
  --el-button-hover-border-color: #006be0;
}

.operation-log-panel {
  display: flex;
  min-height: 0;
  flex: 1;
  border: 1px solid rgba(195, 198, 214, 0.1);
  border-radius: 24px;
}

:deep(.operation-log-panel > .el-card__body) {
  display: flex;
  width: 100%;
  min-height: 646px;
  flex-direction: column;
  padding: 33px;
}

.operation-toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.operation-search-input {
  width: 534px;
  max-width: 100%;
}

:deep(.operation-search-input .el-input__wrapper) {
  min-height: 40px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #ebedf1 inset;
}

:deep(.operation-search-input .el-input__inner) {
  color: #1d2129;
  font-size: 14px;
}

:deep(.operation-search-input .el-input__inner::placeholder) {
  color: #c9cdd4;
}

:deep(.operation-search-button) {
  --el-button-bg-color: #0168f0;
  --el-button-border-color: #0168f0;
  --el-button-hover-bg-color: #006be0;
  --el-button-hover-border-color: #006be0;
  height: 40px;
  border-radius: 8px;
  padding-inline: 12px;
  font-size: 16px;
  font-weight: 600;
}

.operation-table-scroll {
  width: 100%;
  margin-top: 24px;
  overflow-x: auto;
}

:deep(.operation-log-table) {
  --el-table-border-color: #e6e6e6;
  --el-table-header-bg-color: #f7f8fa;
  --el-table-header-text-color: #737685;
  --el-table-row-hover-bg-color: #f8fbff;
  min-width: 1000px;
  border-radius: 8px;
  overflow: hidden;
}

:deep(.operation-log-table::before),
:deep(.operation-log-table .el-table__inner-wrapper::before) {
  display: none;
}

:deep(.operation-log-table th.el-table__cell) {
  height: 40px;
  padding: 4px 0;
  border-bottom: 0;
  background: #f7f8fa;
  color: #737685;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
}

:deep(.operation-log-table th.el-table__cell:first-child) {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

:deep(.operation-log-table th.el-table__cell:last-child) {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

:deep(.operation-log-table td.el-table__cell) {
  height: 50px;
  padding: 8px 0;
  color: #1d2129;
  font-size: 13px;
  font-weight: 400;
}

:deep(.operation-log-table .cell) {
  padding-inline: 16px;
  line-height: 1.2;
}

:deep(.operation-log-table .el-table__body-wrapper) {
  overflow-x: auto;
}

.operation-pagination-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  padding-top: 24px;
}

:deep(.operation-pagination.el-pagination) {
  --el-pagination-button-width: 24px;
  --el-pagination-button-height: 24px;
}

:deep(.operation-pagination-wrap .el-pagination) {
  gap: 24px;
  --el-pagination-button-width: 24px;
  --el-pagination-button-height: 24px;
  --el-pagination-font-size: 16px;
}

:deep(.operation-pagination-wrap .el-pager) {
  gap: 12px;
}

:deep(.operation-pagination-wrap .btn-prev),
:deep(.operation-pagination-wrap .btn-next),
:deep(.operation-pagination-wrap .el-pager li) {
  min-width: 24px;
  height: 24px;
  border-radius: 20px;
  background: transparent;
  color: #1d2129;
  font-weight: 500;
}

:deep(.operation-pagination-wrap .el-pager li.is-active) {
  background: #1d2129;
  color: #ffffff;
}

@media (max-width: 1320px) {
  .account-top-row {
    flex-direction: column;
  }

  .profile-status-card {
    width: 100%;
    min-height: 220px;
    flex-basis: auto;
  }

  .field-row--password {
    max-width: none;
  }

  :deep(.operation-log-panel > .el-card__body) {
    min-height: 620px;
  }
}

@media (max-width: 860px) {
  .account-page {
    gap: 24px;
  }

  :deep(.account-tabs .el-tabs__nav) {
    gap: 24px;
  }

  :deep(.account-tabs .el-tabs__item) {
    font-size: 20px;
  }

  .field-row,
  .field-row--password {
    flex-direction: column;
    gap: 24px;
  }

  .notification-setting {
    align-items: flex-start;
  }

  .account-actions {
    flex-direction: column;
  }

  .operation-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .operation-search-input,
  :deep(.operation-search-button) {
    width: 100%;
  }

  :deep(.operation-log-panel > .el-card__body) {
    min-height: auto;
    padding: 24px;
  }

  :deep(.discard-button),
  :deep(.save-button) {
    width: 100%;
  }
}

@media (max-width: 640px) {
  :deep(.account-panel > .el-card__body),
  :deep(.profile-status-card > .el-card__body) {
    padding: 24px;
  }

  .account-panel,
  .profile-status-card,
  .operation-log-panel {
    border-radius: 16px;
  }

  .notification-copy {
    gap: 12px;
  }
}
</style>
