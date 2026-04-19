import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FullBleedSection from './FullBleedSection.vue'

describe('FullBleedSection', () => {
  it('renders a viewport wrapper and centered content wrapper with caller classes', () => {
    const wrapper = mount(FullBleedSection, {
      props: {
        contentClass: 'hero-section__content-shell',
      },
      attrs: {
        class: 'hero-section',
      },
      slots: {
        default: '<div class="hero-copy">hero</div>',
      },
    })

    expect(wrapper.find('section.full-bleed-section.hero-section').exists()).toBe(true)
    expect(wrapper.find('.full-bleed-section__content.hero-section__content-shell .hero-copy').exists()).toBe(true)
  })

  it('lets caller height utilities control the content wrapper height', () => {
    const wrapper = mount(FullBleedSection, {
      props: {
        contentClass: 'h-[920px]',
      },
    })

    const contentClasses = wrapper.find('.full-bleed-section__content').classes()

    expect(contentClasses).toContain('h-[920px]')
    expect(contentClasses).not.toContain('h-full')
  })
})
