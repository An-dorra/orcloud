import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import { routes } from '@/router'
import { accountShortcuts, consolePrimaryNavItems, securityStatusItems, subscriptionColumns } from '@/data/console'

import ConsoleDashboardView from './ConsoleDashboardView.vue'

describe('ConsoleDashboardView', () => {
  it('is registered as an isolated console route', () => {
    const consoleRoute = routes.find((route) => route.path === '/console')

    expect(consoleRoute?.name).toBe('console-dashboard')
    expect(consoleRoute?.meta?.layout).toBe('console')
  })

  it('renders the dashboard modules from reusable console data', () => {
    const wrapper = mount(ConsoleDashboardView, {
      global: {
        stubs: {
          RouterLink: {
            template: '<a><slot /></a>',
          },
          ElAvatar: {
            template: '<span class="el-avatar"><slot /></span>',
          },
          ElButton: {
            template: '<button><slot /></button>',
          },
          ElDivider: {
            template: '<hr />',
          },
          ElProgress: {
            template: '<div class="el-progress" />',
          },
          ElTable: {
            template: '<div class="el-table"><slot /><slot name="empty" /></div>',
          },
          ElTableColumn: {
            template: '<div class="el-table-column" />',
          },
        },
      },
    })

    expect(wrapper.text()).toContain('Welcome back')
    expect(wrapper.text()).toContain('Security Center')
    expect(wrapper.text()).toContain('Financial Overview')
    expect(wrapper.text()).toContain('Active Subscriptions')

    for (const item of securityStatusItems) {
      expect(wrapper.text()).toContain(item.title)
    }

    for (const shortcut of accountShortcuts) {
      expect(wrapper.text()).toContain(shortcut.title)
    }

    for (const item of consolePrimaryNavItems) {
      expect(wrapper.text()).toContain(item.label)
    }

    expect(subscriptionColumns).toHaveLength(4)
    expect(wrapper.text()).toContain('Deploy new servers at our global data center locations')
  })
})
