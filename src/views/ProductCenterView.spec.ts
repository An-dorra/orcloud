import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import ProductCenterView from './ProductCenterView.vue'

describe('ProductCenterView', () => {
  it('matches the product center page sections from Figma and reuses shared CTA/footer layout', () => {
    const wrapper = mount(ProductCenterView)

    expect(wrapper.find('.product-center-page').classes()).toContain('w-[1920px]')
    expect(wrapper.findAllComponents(FullBleedSection)).toHaveLength(3)
    expect(wrapper.find('.product-center-hero').exists()).toBe(true)
    expect(wrapper.find('.product-center-hero h1').text()).toBe('Origins Cloud Servers')
    expect(wrapper.find('.product-center-search').exists()).toBe(true)
    expect(wrapper.find('.product-center-plans').exists()).toBe(true)
    expect(wrapper.find('.product-plan-card-grid').classes()).toEqual(expect.arrayContaining(['flex', 'flex-wrap']))
    expect(wrapper.findAll('.product-pricing-card')).toHaveLength(9)
    expect(wrapper.find('.orclaw-cta-section').exists()).toBe(true)
  })

  it('uses the homepage scroll reveal pattern for product center sections', () => {
    const wrapper = mount(ProductCenterView)
    const view = readFileSync(resolve(process.cwd(), 'src/views/ProductCenterView.vue'), 'utf8')

    expect(wrapper.find('.product-center-page').classes()).toContain('w-[1920px]')
    expect(wrapper.findAllComponents(FullBleedSection)).toHaveLength(3)
    expect(view).toContain("import FullBleedSection from '@/components/layout/FullBleedSection.vue'")
    expect(view).toContain('<FullBleedSection class="product-center-hero bg-[#f7fbff]"')
    expect(view).toContain('<FullBleedSection class="product-center-plans bg-[#f8f8fa]"')
    expect(wrapper.find('.product-center-hero h1').classes()).toContain('reveal-on-scroll')
    expect(wrapper.find('.product-center-hero p').classes()).toEqual(
      expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-100']),
    )
    expect(wrapper.find('.product-center-search').classes()).toEqual(
      expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-200']),
    )
    expect(wrapper.find('.product-center-hero img').classes()).toContain('reveal-media')
    expect(wrapper.find('.product-center-plans h2').classes()).toContain('reveal-on-scroll')
    expect(wrapper.find('.product-center-plans p').classes()).toEqual(
      expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-100']),
    )
    expect(wrapper.find('.product-plan-card-grid').classes()).toEqual(
      expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-300']),
    )
    expect(view).toContain('setupScrollRevealOnScroll')
    expect(view).toContain('new IntersectionObserver')
    expect(view).toContain('transform: translateY(72px);')
    expect(view).toContain('transform: translateY(24px) scale(0.985);')
  })
})
