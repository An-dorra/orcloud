import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import { productPlans } from '@/data/home'

import ProductPlanCard from './ProductPlanCard.vue'

describe('ProductPlanCard', () => {
  it('applies the plan-specific card height when provided', () => {
    const wrapper = mount(ProductPlanCard, {
      props: {
        plan: productPlans[1]!,
      },
    })

    expect(wrapper.find('.plan-card').attributes('style')).toContain('height: 415px;')
  })

  it('forces highlighted cards to use left-aligned copy even if the base plan is centered', () => {
    const wrapper = mount(ProductPlanCard, {
      props: {
        plan: productPlans[1]!,
        highlighted: true,
      },
    })

    expect(wrapper.find('.plan-card').classes()).toContain('plan-card--highlighted')
    expect(wrapper.find('.plan-card').classes()).not.toContain('plan-card--centered')
  })

  it('keeps titles on a single left-aligned line and only bolds specs when highlighted', () => {
    const regularWrapper = mount(ProductPlanCard, {
      props: {
        plan: productPlans[1]!,
      },
    })
    const highlightedWrapper = mount(ProductPlanCard, {
      props: {
        plan: productPlans[1]!,
        highlighted: true,
      },
    })

    const regularCardClasses = regularWrapper.find('.plan-card').classes()
    const highlightedCardClasses = highlightedWrapper.find('.plan-card').classes()

    expect(regularCardClasses).toContain('plan-card--centered')
    expect(regularWrapper.find('.plan-card__title').classes()).toContain('plan-card__title--single-line')
    expect(highlightedCardClasses).toContain('plan-card--highlighted')
    expect(regularWrapper.find('ul').classes()).not.toContain('plan-card__specs--highlighted')
    expect(highlightedWrapper.find('ul').classes()).toContain('plan-card__specs--highlighted')
  })

  it('supports explicit description line breaks and custom widths for plan copy', () => {
    const wrapper = mount(ProductPlanCard, {
      props: {
        plan: productPlans[3]!,
      },
    })

    expect(wrapper.find('.plan-card__description').attributes('style')).toContain('width: 356px;')
    expect(wrapper.find('.plan-card__description').text()).toBe(
      'Corporate Official Websites, Simple\nCRM/ERP, Medium-scale Databases.',
    )
  })

  it('restores featured plans to normal height when they are not highlighted', () => {
    const regularWrapper = mount(ProductPlanCard, {
      props: {
        plan: productPlans[2]!,
        highlighted: false,
      },
    })
    const highlightedWrapper = mount(ProductPlanCard, {
      props: {
        plan: productPlans[2]!,
        highlighted: true,
      },
    })

    expect(regularWrapper.find('.plan-card').attributes('style')).toContain('height: 422px;')
    expect(highlightedWrapper.find('.plan-card').attributes('style')).toContain('height: 475px;')
  })

  it('adds highlighted choreography classes to the content blocks when active', () => {
    const wrapper = mount(ProductPlanCard, {
      props: {
        plan: productPlans[2]!,
        highlighted: true,
      },
    })

    expect(wrapper.find('.plan-card').classes()).toContain('plan-card--motion-highlighted')
    expect(wrapper.find('.plan-card__title').classes()).toContain('plan-card__content-item')
    expect(wrapper.find('.plan-card__description').classes()).toContain('plan-card__content-item')
    expect(wrapper.find('ul').classes()).toContain('plan-card__content-item')
    expect(wrapper.find('.plan-card__footer').classes()).toContain('plan-card__content-item')
  })
})
