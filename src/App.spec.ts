import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { describe, expect, it } from 'vitest'

import App from './App.vue'

const RouteStub = defineComponent({
  template: '<section class="route-stub" />',
})

function makeRouterViewStub(meta: Record<string, unknown> = {}) {
  return defineComponent({
    setup() {
      return {
        component: RouteStub,
        route: { meta },
      }
    },
    template: '<slot :Component="component" :route="route" />',
  })
}

describe('App', () => {
  it('keeps the page layout offset when the header is fixed', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: makeRouterViewStub(),
          SiteHeader: {
            template: '<header class="site-header" />',
          },
          DesignScaler: {
            template: '<div class="design-scaler"><slot /></div>',
          },
          SiteFooter: {
            template: '<footer class="site-footer" />',
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
          RouterView: makeRouterViewStub(),
          SiteHeader: {
            template: '<header class="site-header" />',
          },
          DesignScaler: {
            template: '<div class="design-scaler"><slot /></div>',
          },
          SiteFooter: {
            template: '<footer class="site-footer" />',
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

  it('renders console routes without the marketing shell', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: makeRouterViewStub({ layout: 'console' }),
          SiteHeader: {
            template: '<header class="site-header" />',
          },
          DesignScaler: {
            template: '<div class="design-scaler"><slot /></div>',
          },
          SiteFooter: {
            template: '<footer class="site-footer" />',
          },
          RouterLink: {
            template: '<a><slot /></a>',
          },
        },
      },
    })

    expect(wrapper.find('.route-stub').exists()).toBe(true)
    expect(wrapper.find('.site-header').exists()).toBe(false)
    expect(wrapper.find('.design-scaler').exists()).toBe(false)
    expect(wrapper.find('main.pt-20').exists()).toBe(false)
  })
})
