import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import { routes } from '@/router'

import ConsoleAccountInformationView from './ConsoleAccountInformationView.vue'

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
  ElForm: {
    template: '<form><slot /></form>',
  },
  ElFormItem: {
    props: ['label'],
    template: '<label><span>{{ label }}</span><slot /></label>',
  },
  ElInput: {
    props: ['modelValue', 'readonly', 'type', 'showPassword', 'placeholder'],
    template: '<input :value="modelValue || placeholder" :readonly="readonly" :type="showPassword ? `password` : type" />',
  },
  ElOption: {
    template: '<span />',
  },
  ElPagination: {
    template: '<nav class="el-pagination">pagination</nav>',
  },
  ElProgress: {
    template: '<div class="el-progress" />',
  },
  ElSelect: {
    props: ['modelValue'],
    template: '<span>{{ modelValue }}<slot /></span>',
  },
  ElSwitch: {
    template: '<button />',
  },
  ElTable: {
    props: ['data'],
    template: '<div class="el-table"><div v-for="row in data" :key="row.id + row.ip">{{ row.id }} {{ row.description }} {{ row.creationTime }} {{ row.ip }}</div><slot /></div>',
  },
  ElTableColumn: {
    template: '<div />',
  },
  ElTabs: {
    emits: ['update:modelValue'],
    template: `
      <div>
        <button data-test="summary-tab" @click="$emit('update:modelValue', 'summary')">Summary</button>
        <button data-test="operation-tab" @click="$emit('update:modelValue', 'operation-log')">Operation Log</button>
        <slot />
      </div>
    `,
  },
  ElTabPane: {
    props: ['label'],
    template: '<div>{{ label }}<slot /></div>',
  },
}

const mountAccountView = () =>
  mount(ConsoleAccountInformationView, {
    global: {
      stubs: elementPlusStubs,
    },
  })

describe('ConsoleAccountInformationView', () => {
  it('is registered as a console route', () => {
    const accountRoute = routes.find((route) => route.path === '/console/account')

    expect(accountRoute?.name).toBe('console-account-information')
    expect(accountRoute?.meta?.layout).toBe('console')
  })

  it('renders the account settings sections from the Figma design', () => {
    const wrapper = mountAccountView()

    expect(wrapper.text()).toContain('Account Settings')
    expect(wrapper.text()).toContain('Identity Verified')
    expect(wrapper.text()).toContain('Basic Information')
    expect(wrapper.text()).toContain('Account Credentials')
    expect(wrapper.text()).toContain('Save Account Profile')
  })

  it('keeps profile and password fields editable', () => {
    const wrapper = mountAccountView()
    const inputs = wrapper.findAll('input')

    expect(inputs.some((input) => input.element.value === 'Alex Sterling' && !input.element.readOnly)).toBe(true)
    expect(inputs.some((input) => input.element.value === 'Origins Cloud Systems' && !input.element.readOnly)).toBe(true)
    expect(inputs.some((input) => input.element.value === '*********' && !input.element.readOnly && input.element.type === 'password')).toBe(true)
  })

  it('renders the operation log tab with Element Plus table controls', async () => {
    const wrapper = mountAccountView()

    await wrapper.find('[data-test="operation-tab"]').trigger('click')

    expect(wrapper.find('input').element.value).toBe('Please enter what you need to search for')
    expect(wrapper.text()).toContain('Search')
    expect(wrapper.find('.el-table').exists()).toBe(true)
    expect(wrapper.text()).toContain("User 123456 has agreed to the 'Service Agreement'")
    expect(wrapper.text()).toContain('2026-04-13 19:11')
    expect(wrapper.text()).toContain('172.70.208.80:13292')
    expect(wrapper.find('.el-pagination').exists()).toBe(true)
  })
})
