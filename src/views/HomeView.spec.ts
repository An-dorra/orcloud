import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import HomeView from './HomeView.vue'

describe('HomeView', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

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

  it('gives hero value cards theme-colored text/icon hover with scale and shadow only', () => {
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

    const valueCard = wrapper.find('.hero-value-card')

    expect(valueCard.classes()).toContain('transition-all')
    expect(valueCard.classes()).toContain('cursor-pointer')
    expect(valueCard.classes()).toContain('bg-white')
    expect(valueCard.classes()).toContain('hover:scale-[1.015]')
    expect(valueCard.classes()).toContain('hover:shadow-[0_14px_38px_rgba(1,104,240,0.16)]')
    expect(valueCard.classes()).not.toContain('hover:-translate-y-0.5')
    expect(valueCard.classes()).not.toContain('hover:bg-[#0168f0]')
    expect(valueCard.find('h2').classes()).toContain('group-hover:text-[#0168f0]')
    expect(valueCard.find('p').classes()).toContain('group-hover:text-[#0168f0]')
    expect(valueCard.find('img').classes()).toContain('group-hover:[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(98%)_saturate(2865%)_hue-rotate(202deg)_brightness(95%)_contrast(102%)]')
    expect(valueCard.find('img').classes()).not.toContain('group-hover:translate-x-1')
  })

  it('types the hero title with a stable printer effect and cursor', async () => {
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

    const title = wrapper.find('.hero-printer-title')

    expect(title.attributes('aria-label')).toBe('The Infrastructure of the Future')
    expect(title.classes()).toContain('hero-printer-title')
    expect(title.classes()).not.toContain('hero-printer-title--complete')
    expect(title.text()).toBe('')
    expect(wrapper.find('.hero-printer-description').classes()).not.toContain('is-visible')
    expect(wrapper.find('.hero-printer-actions').classes()).not.toContain('is-visible')

    await vi.advanceTimersByTimeAsync(42)
    expect(title.text()).toBe('T')

    const typedThroughLineOneLength = 1 + 'he Infrastructure of'.length

    await vi.advanceTimersByTimeAsync(42 * 'he Infrastructure of'.length)
    expect(title.text()).toContain('The Infrastructure of')
    expect(title.find('br').exists()).toBe(true)

    await vi.advanceTimersByTimeAsync(42 * ('The Infrastructure of the Future'.length - typedThroughLineOneLength))
    expect(title.text().replace('ofthe', 'of the')).toBe('The Infrastructure of the Future')
    expect(title.classes()).toContain('hero-printer-title--complete')
    expect(wrapper.find('.hero-printer-description').classes()).not.toContain('is-visible')

    await vi.advanceTimersByTimeAsync(180)
    expect(wrapper.find('.hero-printer-description').classes()).toContain('is-visible')
    expect(wrapper.find('.hero-printer-actions').classes()).not.toContain('is-visible')

    await vi.advanceTimersByTimeAsync(160)
    expect(wrapper.find('.hero-printer-actions').classes()).toContain('is-visible')
  })

  it('uses the animated Orclaw crab component instead of a static assistant image', () => {
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

    expect(wrapper.find('.orclaw-crab').exists()).toBe(true)
    expect(wrapper.find('img[alt="OrClaw assistant crab"]').exists()).toBe(false)
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

  it('cycles the expanded market service every three seconds', async () => {
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

    expect(wrapper.find('.market-services article.active h3').text()).toBe('Server O&M')

    await vi.advanceTimersByTimeAsync(3000)
    expect(wrapper.find('.market-services article.active h3').text()).toBe('Data Processing')
    expect(wrapper.find('.market-services article.active p').text()).toBe(
      'Scalable solutions for big data pipelines and real-time analytics.',
    )

    await vi.advanceTimersByTimeAsync(3000)
    expect(wrapper.find('.market-services article.active h3').text()).toBe('Website Building')
    expect(wrapper.find('.market-services article.active p').text()).toBe('No-code tools and enterprise CMS deployment.')

    await vi.advanceTimersByTimeAsync(3000)
    expect(wrapper.find('.market-services article.active h3').text()).toBe('400 Phone Service')
    expect(wrapper.find('.market-services article.active p').text()).toBe(
      'NO.1 connects customers; 400 hotline makes communication more professional.',
    )

    await vi.advanceTimersByTimeAsync(3000)
    expect(wrapper.find('.market-services article.active h3').text()).toBe('Server O&M')
  })

  it('overlays network map nodes without changing the map layout', async () => {
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

    expect(wrapper.find('.network-map-media').classes()).toEqual(expect.arrayContaining([
      'absolute',
      'top-[358px]',
      'right-[169px]',
      'h-[513px]',
      'w-[1029px]',
    ]))

    const overlay = wrapper.find('.network-map-overlay')
    const overlayReveal = wrapper.find('.network-map-overlay-reveal')

    expect(overlay.exists()).toBe(true)
    expect(overlayReveal.classes()).toEqual(expect.arrayContaining([
      'network-map-overlay-reveal',
      'absolute',
      'top-[358px]',
      'right-[169px]',
      'h-[513px]',
      'w-[1029px]',
      'pointer-events-none',
    ]))
    expect(overlay.classes()).toEqual(expect.arrayContaining(['network-map-overlay', 'h-full', 'w-full']))
    expect(wrapper.findAll('.network-map-node')).toHaveLength(10)
    expect(wrapper.findAll('.network-map-node--visible')).toHaveLength(0)

    await vi.advanceTimersByTimeAsync(350)
    expect(wrapper.findAll('.network-map-node--visible')).toHaveLength(1)
    expect(wrapper.find('.network-map-node--visible .network-map-node__label').text()).toBe('美国')

    await vi.advanceTimersByTimeAsync(3150)
    expect(wrapper.findAll('.network-map-node--visible')).toHaveLength(10)

    await vi.advanceTimersByTimeAsync(1800)
    expect(wrapper.find('.network-map-overlay').classes()).toContain('network-map-overlay--fading')

    await vi.advanceTimersByTimeAsync(500)
    expect(wrapper.findAll('.network-map-node--visible')).toHaveLength(0)
    expect(wrapper.find('.network-map-overlay').classes()).not.toContain('network-map-overlay--fading')
  })

  it('keeps animated network points out of the static map asset to avoid duplicate labels', () => {
    const svg = readFileSync(resolve(process.cwd(), 'src/assets/images/global-network-map.svg'), 'utf8')

    expect(svg).not.toContain('<foreignObject')
    expect(svg).not.toContain('fill="#0168F0"')
    expect(svg).not.toContain('fill="#2B7FFF"')
  })

  it('centers animated network dots on their map coordinates', () => {
    const view = readFileSync(resolve(process.cwd(), 'src/views/HomeView.vue'), 'utf8')

    expect(view).toContain('.network-map-node__dot')
    expect(view).toContain('transform: translate(-50%, -50%);')
    expect(view).toContain('transform: scale(1);')
    expect(view).not.toContain('transform: translate(-50%, -50%) scale(1);')
  })

  it('reveals scroll animation items immediately under test mode fallback', () => {
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

    const firstReveal = wrapper.find('.reveal-on-scroll').element

    expect(wrapper.findAll('.reveal-on-scroll').length).toBeGreaterThan(5)
    expect(firstReveal.classList.contains('is-visible')).toBe(true)
  })

  it('drives scroll reveal animations with a lightweight observer and CSS transitions', () => {
    const view = readFileSync(resolve(process.cwd(), 'src/views/HomeView.vue'), 'utf8')

    expect(view).not.toContain("from 'gsap'")
    expect(view).not.toContain("from 'gsap/ScrollTrigger'")
    expect(view).not.toContain('gsap.registerPlugin(ScrollTrigger)')
    expect(view).toContain('setupScrollRevealOnScroll')
    expect(view).toContain('new IntersectionObserver')
    expect(view).toContain('transform: translateY(72px);')
  })

  it('keeps large media out of the heavier translate reveal path', () => {
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

    expect(wrapper.find('img[alt="Global network map"]').classes()).not.toContain('reveal-on-scroll')
    expect(wrapper.find('img[alt="Global network map"]').classes()).not.toContain('reveal-media')
    expect(wrapper.find('.network-map-media').classes()).toContain('reveal-media')
    expect(wrapper.find('.network-map-overlay').classes()).not.toContain('reveal-on-scroll')
    expect(wrapper.find('.network-map-overlay').classes()).not.toContain('reveal-media')
    expect(wrapper.find('.network-map-overlay-reveal').classes()).toContain('reveal-media')
    expect(wrapper.find('.market-section__image').classes()).not.toContain('reveal-on-scroll')
    expect(wrapper.find('.market-section__image').classes()).toContain('reveal-media')

    const view = readFileSync(resolve(process.cwd(), 'src/views/HomeView.vue'), 'utf8')

    expect(view).toContain('transform: translateY(24px) scale(0.985);')
  })

  it('keeps entrance transforms on wrappers before element-internal transforms', () => {
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

    const crab = wrapper.find('.orclaw-crab')
    const crabRotateLayer = crab.element.parentElement
    const crabRevealLayer = crabRotateLayer?.parentElement

    expect(crab.classes()).not.toContain('reveal-on-scroll')
    expect(crab.classes()).not.toContain('rotate-[-21deg]')
    expect(crabRotateLayer?.classList.contains('rotate-[-21deg]')).toBe(true)
    expect(crabRevealLayer?.classList.contains('reveal-on-scroll')).toBe(true)
  })

  it('marks section internals for staggered scroll reveal instead of only the outer modules', () => {
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

    expect(wrapper.find('.market-section .section-heading h2').classes()).toContain('reveal-on-scroll')
    expect(wrapper.find('.market-section .section-heading p').classes()).toEqual(
      expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-100']),
    )
    expect(wrapper.find('.market-services').classes()).toEqual(expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-200']))
    expect(wrapper.find('.market-section__image').classes()).toContain('reveal-media')
    expect(wrapper.find('.network-section .section-heading h2').classes()).toContain('reveal-on-scroll')
    expect(wrapper.findAll('.network-section [data-reveal-stat]')).toHaveLength(3)
    expect(wrapper.find('.news-section .section-heading h2').classes()).toContain('reveal-on-scroll')
    expect(wrapper.findAll('.news-card-reveal')).toHaveLength(5)
    expect(wrapper.find('.orclaw-copy h2').classes()).toContain('reveal-on-scroll')
    expect(wrapper.find('.orclaw-copy p').classes()).toEqual(expect.arrayContaining(['reveal-on-scroll', 'reveal-delay-100']))
  })
})
