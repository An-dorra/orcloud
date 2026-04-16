import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import HomeView from './HomeView.vue'

describe('HomeView', () => {
  it('keeps the hero value row on a separate centered shell', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          PlansCarouselSection: {
            template: '<section class="plans-carousel-section-stub" />',
          },
          NewsCard: {
            template: '<article class="news-card-stub" />',
          },
        },
      },
    })

    expect(wrapper.find('.hero-section__value-row').exists()).toBe(true)
    expect(wrapper.find('.hero-section__value-row-shell').exists()).toBe(true)
    expect(wrapper.find('.plans-carousel-section-stub').exists()).toBe(true)
  })

  it('matches the redesigned industries showcase copy and active-card structure', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          PlansCarouselSection: {
            template: '<section class="plans-carousel-section-stub" />',
          },
          NewsCard: {
            template: '<article class="news-card-stub" />',
          },
        },
      },
    })

    expect(wrapper.find('.industries-section .section-heading h2').text()).toBe('Full-stack, 1000s of industries')
    expect(wrapper.find('.industries-section .section-heading p').text()).toBe(
      'Focusing on rich business scenarios, accumulating best practices from various industries, and providing solutions for diverse application scenarios.',
    )

    const cards = wrapper.findAll('.industry-card')

    expect(cards).toHaveLength(5)
    expect(cards[0]!.classes()).toContain('industry-card--active')
    expect(wrapper.find('.industry-card--active h3').text()).toBe('Website Hosting Solution')
    expect(wrapper.find('.industry-card--active .industry-card__description').text()).toContain('Ensure 99.99% availability')
    expect(wrapper.find('.industry-card--active .industry-card__cta').text()).toContain('Consult Now')
    expect(wrapper.find('.industry-card--active .industry-card__cta img').attributes('src')).toContain('icon-consult-now')
    expect(wrapper.findAll('.market-services article img').map((node) => node.attributes('src'))).toEqual([
      expect.stringContaining('icon-market-service-ops'),
      expect.stringContaining('icon-market-service-data'),
      expect.stringContaining('icon-market-service-build'),
      expect.stringContaining('icon-market-service-phone'),
    ])
    expect(wrapper.find('.industry-card:not(.industry-card--active) .industry-card__link-icon img').attributes('src')).toContain(
      'icon-arrow-circle-outline',
    )
    expect(wrapper.find('.news-section__more img').attributes('src')).toContain('button-more-pill')
    expect(
      cards.map((card) =>
        card
          .find('h3')
          .text()
          .replace(/\s+/g, ' ')
          .trim(),
      ),
    ).toEqual([
      'Website Hosting Solution',
      'Financial Grade Cloud',
      'Mobile Cloud',
      'E-commerce Acceleration',
      'Global Gaming Network',
    ])
  })

  it('switches the industries accordion active card and reveals the selected description on click', async () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          PlansCarouselSection: {
            template: '<section class="plans-carousel-section-stub" />',
          },
          NewsCard: {
            template: '<article class="news-card-stub" />',
          },
        },
      },
    })

    const cards = wrapper.findAll('.industry-card')

    expect(cards).toHaveLength(5)
    expect(cards[0]!.classes()).toContain('industry-card--active')
    expect(wrapper.find('.industry-card--active .industry-card__description').text()).toContain('Ensure 99.99% availability')

    await cards[1]!.trigger('click')

    const refreshedCards = wrapper.findAll('.industry-card')

    expect(refreshedCards[1]!.classes()).toContain('industry-card--active')
    expect(wrapper.findAll('.industry-card--active')).toHaveLength(1)
    expect(wrapper.find('.industry-card--active h3').text().replace(/\s+/g, ' ').trim()).toBe('Financial Grade Cloud')
    expect(wrapper.find('.industry-card--active .industry-card__description').text()).toContain(
      'Built for high-stakes environments, our financial-grade cloud delivers ultra-low latency',
    )
  })

  it('matches the redesigned market ecosystem structure with a single expanded item and icon button CTA', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          PlansCarouselSection: {
            template: '<section class="plans-carousel-section-stub" />',
          },
          NewsCard: {
            template: '<article class="news-card-stub" />',
          },
        },
      },
    })

    expect(wrapper.find('.market-section .section-heading h2').text()).toBe('Cloud Market Ecosystem')
    expect(wrapper.find('.market-section .section-heading p').text()).toBe(
      'Extending your cloud capabilities with professional value-added services.',
    )

    const services = wrapper.findAll('.market-services article')

    expect(services).toHaveLength(4)
    expect(wrapper.findAll('.market-services article.active')).toHaveLength(1)
    expect(wrapper.find('.market-services article.active h3').text()).toBe('Server O&M')
    expect(wrapper.find('.market-services article.active p').text()).toContain('Professional maintenance and optimization')
    expect(wrapper.findAll('.market-services article:not(.active) p')).toHaveLength(0)
    expect(wrapper.find('.market-services button img').exists()).toBe(true)
    expect(wrapper.find('.market-services button').text()).toContain('Explore Marketplace')
  })
})
