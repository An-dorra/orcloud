import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'

import TrustCenterView from './TrustCenterView.vue'

describe('TrustCenterView', () => {
  it('renders the trust center page using shared infrastructure components', () => {
    const wrapper = mount(TrustCenterView)

    expect(wrapper.find('.trust-center-page').exists()).toBe(true)
    expect(wrapper.text()).toContain('Trusted Infrastructure,')
    expect(wrapper.text()).toContain('Official Attestations')
    expect(wrapper.text()).toContain('Aligned with Industry Standards')
    expect(wrapper.text()).toContain('Trust Built Into the Infrastructure')
    expect(wrapper.text()).toContain('Build on a Trusted Foundation')
    expect(wrapper.findAll('.attestation-card')).toHaveLength(6)
    expect(wrapper.findAll('.trust-layer-card')).toHaveLength(3)
    expect(wrapper.findComponent(OrclawCtaSection).exists()).toBe(true)
    expect(wrapper.findAllComponents(FullBleedSection).length).toBeGreaterThanOrEqual(2)
    expect(wrapper.find('img[src*="trust-center"]').exists()).toBe(true)
  })
})
