import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'

import DesignScaler from './DesignScaler.vue'

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('DesignScaler', () => {
  const originalResizeObserver = globalThis.ResizeObserver

  beforeEach(() => {
    globalThis.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver
  })

  afterEach(() => {
    globalThis.ResizeObserver = originalResizeObserver
    vi.restoreAllMocks()
  })

  it('scales by viewport width and reserves the scaled content height on narrow screens', async () => {
    vi.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(1440)

    const scrollHeightSpy = vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockImplementation(function (this: HTMLElement) {
      return this.classList.contains('design-scaler__frame') ? 2400 : 0
    })

    const wrapper = mount(DesignScaler, {
      slots: {
        default: '<div class="page-stub">page</div>',
      },
    })

    await nextTick()
    await nextTick()

    const viewport = wrapper.find('.design-scaler--scaled')
    const frame = wrapper.find('.design-scaler__frame')

    expect(viewport.exists()).toBe(true)
    expect(frame.exists()).toBe(true)
    expect(viewport.attributes('style')).toContain('height: 1800px;')
    expect(frame.attributes('style')).toContain('transform: scale(0.75);')
    expect(document.documentElement.style.getPropertyValue('--page-scale')).toBe('0.75')

    scrollHeightSpy.mockRestore()
  })

  it('keeps the 1920px centered layout on wide screens', () => {
    vi.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(1920)

    const wrapper = mount(DesignScaler, {
      slots: {
        default: '<div class="page-stub">page</div>',
      },
    })

    expect(wrapper.find('.design-scaler--scaled').exists()).toBe(false)
    expect(wrapper.find('.design-scaler.mx-auto.w-\\[1920px\\]').exists()).toBe(true)
  })
})
