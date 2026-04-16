import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'

import PlansCarouselSection from './PlansCarouselSection.vue'

describe('PlansCarouselSection', () => {
  it('renders the plans heading, fixed slot carousel, and more button', () => {
    const wrapper = mount(PlansCarouselSection)

    expect(wrapper.text()).toContain('Stable, Secure, Credible')
    expect(wrapper.find('.fixed-slot-carousel__stage').exists()).toBe(true)
    expect(wrapper.findAll('.fixed-slot-carousel__slot')).toHaveLength(5)
    expect(wrapper.find('.fixed-slot-carousel__slot--center').text()).toContain('Light Business')
    expect(wrapper.text()).toContain('More')
  })

  it('uses the shared full-bleed wrapper so ultra-wide screens can reveal the edge cards', () => {
    const wrapper = mount(PlansCarouselSection)

    expect(wrapper.findComponent(FullBleedSection).exists()).toBe(true)
  })
})
