import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import App from './App.vue'

describe('App', () => {
  it('keeps the page layout offset when the header is fixed', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: {
            template: '<section class="route-stub" />',
          },
          RouterLink: {
            template: '<a><slot /></a>',
          },
        },
      },
    })

    expect(wrapper.find('main').classes()).toContain('pt-20')
    expect(wrapper.find('.route-stub').exists()).toBe(true)
  })

  it('keeps the fixed header outside the scaled page content', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: {
            template: '<section class="route-stub" />',
          },
          RouterLink: {
            template: '<a><slot /></a>',
          },
        },
      },
    })

    const appChildren = wrapper.find('.app-shell').element.children

    expect(appChildren[0]?.classList.contains('site-header')).toBe(true)
    expect(appChildren[1]?.classList.contains('design-scaler')).toBe(true)
  })
})
