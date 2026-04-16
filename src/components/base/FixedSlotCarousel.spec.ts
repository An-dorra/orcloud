import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { h } from 'vue'

import FixedSlotCarousel from './FixedSlotCarousel.vue'

const slotLayouts = [
  { name: 'far-prev', offset: -2, left: -48, top: 18, zIndex: 1 },
  { name: 'prev', offset: -1, left: 346, top: 3, zIndex: 2 },
  { name: 'center', offset: 0, left: 740, top: 0, zIndex: 4 },
  { name: 'next', offset: 1, left: 1154, top: 0, zIndex: 2 },
  { name: 'far-next', offset: 2, left: 1548, top: 18, zIndex: 1 },
] as const

describe('FixedSlotCarousel', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders five fixed slots and keeps the active item in the center slot', async () => {
    const wrapper = mount(FixedSlotCarousel, {
      props: {
        items: ['Ultra Entry Plan', 'Personal basic funds', 'Light Business', 'General Enterprise', 'Growth Plus'],
        initialIndex: 2,
        viewportWidth: 1920,
        viewportHeight: 475,
        slotLayouts,
      },
      slots: {
        default: ({ item, slotName, active }) =>
          h(
            'div',
            {
              class: ['slot-card', active ? 'slot-card--active' : ''],
            },
            `${String(item)} | ${String(slotName)}`,
          ),
      },
    })

    expect(wrapper.findAll('.fixed-slot-carousel__slot')).toHaveLength(5)
    expect(wrapper.find('.fixed-slot-carousel__slot--center').text()).toContain('Light Business')

    await wrapper.find('.fixed-slot-carousel__slot--next').trigger('click')

    expect(wrapper.find('.fixed-slot-carousel__slot--center').text()).toContain('General Enterprise')
  })

  it('auto-rotates to the next item when autoplay is enabled', async () => {
    vi.useFakeTimers()

    const wrapper = mount(FixedSlotCarousel, {
      props: {
        items: ['Ultra Entry Plan', 'Personal basic funds', 'Light Business', 'General Enterprise', 'Growth Plus'],
        initialIndex: 2,
        autoplayMs: 3000,
        viewportWidth: 1920,
        viewportHeight: 475,
        slotLayouts,
      },
      slots: {
        default: ({ item, slotName }) => h('div', `${String(item)} | ${String(slotName)}`),
      },
    })

    expect(wrapper.find('.fixed-slot-carousel__slot--center').text()).toContain('Light Business')

    await vi.advanceTimersByTimeAsync(3000)

    expect(wrapper.find('.fixed-slot-carousel__slot--center').text()).toContain('General Enterprise')
  })

  it('exposes depth-aware motion classes for center, adjacent, and outer slots', () => {
    const wrapper = mount(FixedSlotCarousel, {
      props: {
        items: ['Ultra Entry Plan', 'Personal basic funds', 'Light Business', 'General Enterprise', 'Growth Plus'],
        initialIndex: 2,
        viewportWidth: 1920,
        viewportHeight: 475,
        slotLayouts,
      },
      slots: {
        default: ({ item, slotName }) => h('div', `${String(item)} | ${String(slotName)}`),
      },
    })

    expect(wrapper.find('.fixed-slot-carousel__slot--center').classes()).toContain('fixed-slot-carousel__slot--depth-center')
    expect(wrapper.find('.fixed-slot-carousel__slot--prev').classes()).toContain('fixed-slot-carousel__slot--depth-adjacent')
    expect(wrapper.find('.fixed-slot-carousel__slot--next').classes()).toContain('fixed-slot-carousel__slot--depth-adjacent')
    expect(wrapper.find('.fixed-slot-carousel__slot--far-prev').classes()).toContain('fixed-slot-carousel__slot--depth-outer')
    expect(wrapper.find('.fixed-slot-carousel__slot--far-next').classes()).toContain('fixed-slot-carousel__slot--depth-outer')
  })
})
