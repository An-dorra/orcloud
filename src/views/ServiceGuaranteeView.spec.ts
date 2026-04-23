import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'

import ServiceGuaranteeView from './ServiceGuaranteeView.vue'

describe('ServiceGuaranteeView', () => {
  it('renders the figma-matched service assurance sections with shared components', () => {
    const wrapper = mount(ServiceGuaranteeView)

    expect(wrapper.find('.service-guarantee-page').exists()).toBe(true)
    expect(wrapper.text()).toContain('The Sovereign Guarantee.')
    expect(wrapper.text()).toContain('Our Core Pillar Guarantees')
    expect(wrapper.text()).toContain('Hardware-Level Verifiability')
    expect(wrapper.text()).toContain('Build with Confidence on Origins Cloud')
    expect(wrapper.findAll('.pillar-card')).toHaveLength(4)
    expect(wrapper.findAll('.service-guarantee-page .reveal-on-scroll').length).toBeGreaterThan(10)
    expect(wrapper.findComponent(OrclawCtaSection).exists()).toBe(true)
    expect(wrapper.find('img[src*="service-guarantee"]').exists()).toBe(true)
    expect(wrapper.findAll('img[src*="icon-"]').length).toBe(4)
  })
})
