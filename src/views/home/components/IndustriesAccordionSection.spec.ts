import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import IndustriesAccordionSection from './IndustriesAccordionSection.vue'

describe('IndustriesAccordionSection', () => {
  it('defaults to the first industry card and switches the active card on click', async () => {
    const wrapper = mount(IndustriesAccordionSection)

    expect(wrapper.findAll('.industry-card')).toHaveLength(5)
    expect(wrapper.findAll('.industry-card--active')).toHaveLength(1)
    expect(wrapper.find('.industry-card--active h3').text()).toContain('Website Hosting Solution')

    await wrapper.findAll('.industry-card')[2]!.trigger('click')

    expect(wrapper.findAll('.industry-card--active')).toHaveLength(1)
    expect(wrapper.find('.industry-card--active h3').text().replace(/\s+/g, ' ').trim()).toBe('Mobile Cloud')
    expect(wrapper.find('.industry-card--active .industry-card__description').text()).toContain(
      'Empower mobile apps with high-performance cloud acceleration and global edge distribution.',
    )
  })

  it('switches the active card when hovering an industry card', async () => {
    const wrapper = mount(IndustriesAccordionSection)

    await wrapper.findAll('.industry-card')[4]!.trigger('mouseenter')

    expect(wrapper.findAll('.industry-card--active')).toHaveLength(1)
    expect(wrapper.find('.industry-card--active h3').text().replace(/\s+/g, ' ').trim()).toBe('Global Gaming Network')
    expect(wrapper.find('.industry-card--active .industry-card__description').text()).toContain(
      'Low-latency global networking',
    )
  })

  it('adds smooth transition layers for active card changes', () => {
    const wrapper = mount(IndustriesAccordionSection)
    const firstCard = wrapper.find('.industry-card')

    expect(wrapper.find('.industry-card-grid').classes()).toContain('duration-500')
    expect(firstCard.classes()).toContain('duration-500')
    expect(firstCard.find('.industry-card__overlay--collapsed').classes()).toContain('transition-opacity')
    expect(firstCard.find('.industry-card__overlay--expanded').classes()).toContain('transition-opacity')
    expect(firstCard.find('img').classes()).toContain('transition-transform')
    expect(wrapper.findComponent({ name: 'Transition' }).exists()).toBe(true)
  })

  it('keeps the left-bottom arrow for expanded non-cta cards and forces expanded titles onto one line', async () => {
    const wrapper = mount(IndustriesAccordionSection)

    await wrapper.findAll('.industry-card')[3]!.trigger('click')

    const activeCard = wrapper.find('.industry-card--active')

    expect(activeCard.find('.industry-card__cta').exists()).toBe(true)
    expect(activeCard.find('.industry-card__cta').text()).toContain('Consult Now')
    expect(activeCard.find('.industry-card__cta img').attributes('src')).toContain('icon-consult-now')
    expect(activeCard.find('.industry-card__link-icon').exists()).toBe(false)
    expect(activeCard.find('h3').text()).toBe('E-commerce Acceleration')
  })

  it('marks heading and cards for sequential scroll reveal', () => {
    const wrapper = mount(IndustriesAccordionSection)

    expect(wrapper.find('.section-heading h2').classes()).toContain('reveal-on-scroll')
    expect(wrapper.find('.section-heading p').classes()).toEqual(expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-100']))
    expect(wrapper.find('.industry-card-grid-reveal').classes()).toEqual(expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-200']))
  })
})
