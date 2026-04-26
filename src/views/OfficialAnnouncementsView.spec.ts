import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'

import OfficialAnnouncementsView from './OfficialAnnouncementsView.vue'

describe('OfficialAnnouncementsView', () => {
  it('renders the figma-matched announcements layout', () => {
    const wrapper = mount(OfficialAnnouncementsView)

    expect(wrapper.find('.official-announcements-page').exists()).toBe(true)
    expect(wrapper.text()).toContain('Official Announcements')
    expect(wrapper.text()).toContain('Latest Notices')
    expect(wrapper.text()).toContain('After-Sales Services')
    expect(wrapper.text()).toContain('Update Announcements')
    expect(wrapper.text()).toContain('Technical Documentation')
    expect(wrapper.findAll('a').filter((node) => node.text().includes('APR 2026'))).toHaveLength(5)
    expect(wrapper.findComponent(OrclawCtaSection).exists()).toBe(true)
    expect(wrapper.findAll('.announcement-list-arrow')).toHaveLength(5)
    expect(wrapper.find('.pagination-arrow-prev').exists()).toBe(true)
    expect(wrapper.find('.pagination-arrow-next').exists()).toBe(true)
  })
})
