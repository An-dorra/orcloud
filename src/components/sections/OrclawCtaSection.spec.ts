import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'

import OrclawCtaSection from './OrclawCtaSection.vue'

describe('OrclawCtaSection', () => {
  it('renders the reusable OrClaw CTA banner with default copy and animation layers', () => {
    const wrapper = mount(OrclawCtaSection)

    expect(wrapper.findComponent(FullBleedSection).exists()).toBe(true)
    expect(wrapper.find('.orclaw-cta-section').exists()).toBe(true)
    expect(wrapper.find('.orclaw-copy h2').text()).toContain('Meet "OrClaw"')
    expect(wrapper.find('.orclaw-copy p').text()).toContain('Intelligent resource management')
    expect(wrapper.find('.orclaw-copy a').attributes('href')).toBe('#')
    expect(wrapper.find('.orclaw-crab').exists()).toBe(true)
    expect(wrapper.find('.orclaw-crab').classes()).not.toContain('reveal-on-scroll')
    expect(wrapper.find('.orclaw-cta-section__crab-reveal').classes()).toEqual(
      expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-300']),
    )
  })

  it('allows other routes to override CTA copy without changing layout classes', () => {
    const wrapper = mount(OrclawCtaSection, {
      props: {
        title: 'Need Cloud Help?',
        description: 'Ask OrClaw to inspect your resources.',
        ctaLabel: 'Start now',
        href: '/support',
      },
    })

    expect(wrapper.find('.orclaw-copy h2').text()).toBe('Need Cloud Help?')
    expect(wrapper.find('.orclaw-copy p').text()).toBe('Ask OrClaw to inspect your resources.')
    expect(wrapper.find('.orclaw-copy a').text()).toBe('Start now')
    expect(wrapper.find('.orclaw-copy a').attributes('href')).toBe('/support')
  })
})
