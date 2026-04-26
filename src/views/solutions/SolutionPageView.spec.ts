import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it } from 'vitest'

import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'
import { routes } from '@/router'
import { solutionPages } from '@/data/solutions'

import SolutionPageView from './SolutionPageView.vue'

function makeRouter(path: string) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  router.push(path)
  return router
}

describe('SolutionPageView', () => {
  it('renders each Figma-backed solution page from route data', async () => {
    for (const page of Object.values(solutionPages)) {
      const router = makeRouter(`/solutions/${page.slug}`)
      await router.isReady()

      const wrapper = mount(SolutionPageView, {
        global: {
          plugins: [router],
          stubs: {
            RouterLink: true,
          },
        },
      })

      expect(wrapper.text()).toContain(page.title)
      expect(wrapper.text()).toContain(page.introTitle)
      expect(wrapper.text()).toContain(page.architectureTitle)
      expect(wrapper.findComponent(OrclawCtaSection).exists()).toBe(true)
      expect(wrapper.findAll('.reveal-on-scroll').length).toBeGreaterThan(10)
    }
  })

  it('falls back to cloud server deployment for unknown slugs', async () => {
    const router = makeRouter('/solutions/not-real')
    await router.isReady()

    const wrapper = mount(SolutionPageView, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: true,
        },
      },
    })

    expect(wrapper.text()).toContain('Cloud Server Deployment')
  })
})
