import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'

import DataCenterView from './DataCenterView.vue'

describe('DataCenterView', () => {
  it('renders the data center page using shared infrastructure modules', () => {
    const wrapper = mount(DataCenterView)
    const heroHeadingText = wrapper.find('.data-center-page h1').text()

    expect(wrapper.find('.data-center-page').exists()).toBe(true)
    expect(heroHeadingText).toContain('Global Data Center')
    expect(heroHeadingText).toContain('Infrastructure')
    expect(wrapper.text()).toContain('Strategic Global Presence')
    expect(wrapper.text()).toContain('Next-Generation Facilities')
    expect(wrapper.text()).toContain('Uncompromising Reliability')
    expect(wrapper.text()).toContain('Build with Confidence on Origins Cloud')
    expect(wrapper.findAll('.data-center-facility-card')).toHaveLength(3)
    expect(wrapper.findAllComponents(FullBleedSection).length).toBeGreaterThanOrEqual(2)
    expect(wrapper.findComponent(OrclawCtaSection).exists()).toBe(true)
    expect(wrapper.find('img[src*="data-center"]').exists()).toBe(true)
  })
})
