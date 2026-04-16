import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SiteHeader from './SiteHeader.vue'

describe('SiteHeader', () => {
  it('uses the full-bleed wrapper with a centered shell', () => {
    const wrapper = mount(SiteHeader, {
      global: {
        stubs: {
          RouterLink: {
            template: '<a><slot /></a>',
          },
        },
      },
    })

    expect(wrapper.find('header.full-bleed-section.site-header').exists()).toBe(true)
    expect(wrapper.find('.full-bleed-section__content.site-header__shell').exists()).toBe(true)
  })
})
