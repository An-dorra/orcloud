import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'

import VipMemberServiceView from './VipMemberServiceView.vue'

describe('VipMemberServiceView', () => {
  it('renders the vip membership services page with shared layout sections', () => {
    const wrapper = mount(VipMemberServiceView)

    expect(wrapper.find('.vip-member-service-page').exists()).toBe(true)
    expect(wrapper.text()).toContain('VIP Membership Services')
    expect(wrapper.text()).toContain('7x24x365 Technical Support')
    expect(wrapper.text()).toContain('Free ICP Filing')
    expect(wrapper.text()).toContain('100x Failure Compensation Guarantee')
    expect(wrapper.text()).toContain('3-Day No-Reason Refund')
    expect(wrapper.text()).toContain('Membership at a Glance')
    expect(wrapper.findAll('.vip-service-stage-card')).toHaveLength(3)
    expect(wrapper.findAll('.vip-process-step-card')).toHaveLength(8)
    expect(wrapper.findAll('.vip-scenario-card')).toHaveLength(2)
    expect(wrapper.findAll('.vip-overview-card')).toHaveLength(6)
    expect(wrapper.findComponent(OrclawCtaSection).exists()).toBe(true)
    expect(wrapper.find('img[src*="vip-member-service"]').exists()).toBe(true)
  })
})
