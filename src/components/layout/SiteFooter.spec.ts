import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SiteFooter from './SiteFooter.vue'

describe('SiteFooter', () => {
  it('uses the remapped footer promise icons from local assets', () => {
    const wrapper = mount(SiteFooter)

    expect(wrapper.findAll('.site-footer__promise img').map((node) => node.attributes('src'))).toEqual([
      expect.stringContaining('icon-footer-refund'),
      expect.stringContaining('icon-footer-no-filing'),
      expect.stringContaining('icon-footer-vip'),
      expect.stringContaining('icon-footer-support'),
    ])
  })
})
