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

  it('marks internal content for sequential scroll reveal', () => {
    const wrapper = mount(PlansCarouselSection)

    expect(wrapper.find('h2').classes()).toContain('reveal-on-scroll')
    expect(wrapper.find('p').classes()).toEqual(expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-100']))
    expect(wrapper.find('.plans-carousel-section__carousel').classes()).toEqual(
      expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-200']),
    )
    expect(wrapper.find('button[aria-label="More plans"]').classes()).toEqual(
      expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-300']),
    )
  })
})
