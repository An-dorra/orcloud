import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import ProductPricingCard from './ProductPricingCard.vue'

describe('ProductPricingCard', () => {
  it('renders a fixed-size flex card matching the product center plan design', () => {
    const wrapper = mount(ProductPricingCard, {
      props: {
        plan: {
          title: 'Ultra Entry',
          description: 'Personal blog, text-only site, code testing environment',
          specs: ['CPU: 1 Core', 'RAM: 1 GB', 'Bandwidth: 1 Mbps'],
          tags: ['Hong Kong Cloud', '1H1G'],
          price: '3',
        },
      },
    })

    expect(wrapper.find('.product-pricing-card').classes()).toEqual(
      expect.arrayContaining(['flex', 'h-[460px]', 'w-[390px]', 'rounded-[24px]']),
    )
    expect(wrapper.text()).toContain('Ultra Entry')
    expect(wrapper.findAll('.product-pricing-card__spec')).toHaveLength(3)
    expect(wrapper.findAll('.product-pricing-card__tag')).toHaveLength(2)
    expect(wrapper.text()).toContain('$')
    expect(wrapper.text()).toContain('/ month')
    expect(wrapper.find('button').text()).toBe('Buy Now')
  })

  it('uses the same hover highlight treatment as the homepage value cards', () => {
    const wrapper = mount(ProductPricingCard, {
      props: {
        plan: {
          title: 'Ultra Entry',
          description: 'Personal blog, text-only site, code testing environment',
          specs: ['CPU: 1 Core', 'RAM: 1 GB', 'Bandwidth: 1 Mbps'],
          tags: ['Hong Kong Cloud', '1H1G'],
          price: '3',
        },
      },
    })

    const card = wrapper.find('.product-pricing-card')

    expect(card.classes()).toContain('group')
    expect(card.classes()).toContain('transition-all')
    expect(card.classes()).toContain('duration-300')
    expect(card.classes()).toContain('ease-out')
    expect(card.classes()).toContain('hover:z-10')
    expect(card.classes()).toContain('hover:scale-[1.015]')
    expect(card.classes()).toContain('hover:shadow-[0_14px_38px_rgba(1,104,240,0.16)]')
    expect(card.classes()).not.toContain('hover:bg-[#0168f0]')
    expect(wrapper.find('h3').classes()).toContain('group-hover:text-[#0168f0]')
    expect(wrapper.find('p').classes()).toContain('group-hover:text-[#0168f0]')
    expect(wrapper.findAll('.product-pricing-card__spec').at(0)?.classes()).toContain('group-hover:text-[#0168f0]')
    expect(wrapper.find('button').classes()).toContain('group-hover:bg-[#0168f0]')
  })
})
