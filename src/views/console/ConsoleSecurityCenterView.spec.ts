import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import { routes } from '@/router'

import ConsoleSecurityCenterView from './ConsoleSecurityCenterView.vue'

const elementPlusStubs = {
  RouterLink: {
    template: '<a><slot /></a>',
  },
  ElAvatar: {
    template: '<span class="el-avatar"><slot /></span>',
  },
  ElButton: {
    template: '<button><slot /></button>',
  },
  ElCard: {
    template: '<section><slot /></section>',
  },
  ElInput: {
    props: ['modelValue', 'placeholder'],
    template: '<input :value="modelValue || placeholder" />',
  },
  ElPagination: {
    template: '<nav class="el-pagination">pagination</nav>',
  },
  ElTable: {
    props: ['data'],
    template: '<div class="el-table"><div v-for="(row, index) in data" :key="index">{{ Object.values(row).join(" ") }}</div><slot /></div>',
  },
  ElTableColumn: {
    props: ['label'],
    template: '<span>{{ label }}<slot :row="{ operation: `delete` }" /></span>',
  },
  ElTabs: {
    emits: ['update:modelValue'],
    template: `
      <div>
        <button data-test="api-tab" @click="$emit('update:modelValue', 'api')">API</button>
        <button data-test="ssh-tab" @click="$emit('update:modelValue', 'ssh-key')">SSH Key</button>
        <button data-test="logs-tab" @click="$emit('update:modelValue', 'api-logs')">API Logs</button>
        <button data-test="group-tab" @click="$emit('update:modelValue', 'security-group')">Security Group</button>
        <slot />
      </div>
    `,
  },
  ElTabPane: {
    props: ['label'],
    template: '<div>{{ label }}<slot /></div>',
  },
}

const mountSecurityView = () =>
  mount(ConsoleSecurityCenterView, {
    global: {
      stubs: elementPlusStubs,
    },
  })

describe('ConsoleSecurityCenterView', () => {
  it('is registered as a console route', () => {
    const securityRoute = routes.find((route) => route.path === '/console/security')

    expect(securityRoute?.name).toBe('console-security-center')
    expect(securityRoute?.meta?.layout).toBe('console')
  })

  it('renders the security page with API tab content', () => {
    const wrapper = mountSecurityView()

    expect(wrapper.text()).toContain('Security')
    expect(wrapper.text()).toContain('API')
    expect(wrapper.text()).toContain('SSH Key')
    expect(wrapper.text()).toContain('API Logs')
    expect(wrapper.text()).toContain('Security Group')
    expect(wrapper.text()).toContain('Create API')
    expect(wrapper.find('.el-table').exists()).toBe(true)
    expect(wrapper.find('.el-pagination').exists()).toBe(true)
  })

  it('switches to SSH Key content', async () => {
    const wrapper = mountSecurityView()

    await wrapper.find('[data-test="ssh-tab"]').trigger('click')

    expect(wrapper.text()).toContain('The key will be used when creating instances')
    expect(wrapper.text()).toContain('Fingerprint')
    expect(wrapper.text()).toContain('delete')
  })

  it('switches to API Logs with Element Plus search input', async () => {
    const wrapper = mountSecurityView()

    await wrapper.find('[data-test="logs-tab"]').trigger('click')

    expect(wrapper.find('input').element.value).toBe('Please enter what you need to search for')
    expect(wrapper.text()).toContain('Search')
    expect(wrapper.text()).toContain('Creation Time')
    expect(wrapper.text()).toContain('172.70.208.80:13292')
  })

  it('switches to Security Group content', async () => {
    const wrapper = mountSecurityView()

    await wrapper.find('[data-test="group-tab"]').trigger('click')

    expect(wrapper.text()).toContain('Create Security Group')
    expect(wrapper.text()).toContain('Instance')
    expect(wrapper.text()).toContain('Rules')
  })
})
