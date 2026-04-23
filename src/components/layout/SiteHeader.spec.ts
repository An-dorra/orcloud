import { mount } from '@vue/test-utils'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createMemoryHistory, createRouter } from 'vue-router'
import { describe, expect, it } from 'vitest'

import SiteHeader from './SiteHeader.vue'

const createTestRouter = async () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/product-center', component: { template: '<div />' } },
      { path: '/domain-registration', component: { template: '<div />' } },
      { path: '/service-guarantee', component: { template: '<div />' } },
      { path: '/trust-center', component: { template: '<div />' } },
      { path: '/data-center', component: { template: '<div />' } },
      { path: '/about', component: { template: '<div />' } },
    ],
  })

  await router.push('/')
  await router.isReady()

  return router
}

const mountHeader = async () => {
  const router = await createTestRouter()

  const wrapper = mount(SiteHeader, {
    global: {
      plugins: [router],
    },
  })

  return { wrapper, router }
}

describe('SiteHeader', () => {
  it('uses the full-bleed wrapper with a centered shell', async () => {
    const { wrapper } = await mountHeader()

    expect(wrapper.find('header.full-bleed-section.site-header').exists()).toBe(true)
    expect(wrapper.find('.full-bleed-section__content.site-header__shell').exists()).toBe(true)
  })

  it('fixes to the top while preserving its current height and layout shell', async () => {
    const { wrapper } = await mountHeader()

    const header = wrapper.find('header.site-header')

    expect(header.classes()).toEqual(expect.arrayContaining(['fixed', 'top-0', 'z-[1000]', 'h-20', 'w-[1920px]']))
    expect(header.classes()).not.toContain('z-20')
    expect(header.classes()).not.toContain('sticky')
    expect(wrapper.find('.site-header__shell').classes()).toEqual(
      expect.arrayContaining(['flex', 'h-20', 'items-center', 'pl-10', 'pr-[33px]']),
    )
  })

  it('uses the shared page scale css variable instead of its own resize logic', async () => {
    const { wrapper } = await mountHeader()

    await new Promise((resolve) => window.requestAnimationFrame(resolve))

    const style = wrapper.find('header.site-header').attributes('style')
    const source = readFileSync(resolve(process.cwd(), 'src/components/layout/SiteHeader.vue'), 'utf8')

    expect(style ?? '').not.toContain('transform:')
    expect(style ?? '').not.toContain('transform-origin:')
    expect(source).toContain('transform: scale(var(--page-scale, 1));')
    expect(source).not.toContain('window.addEventListener')
  })

  it('slides open the dropdown panel when hovering a first-level menu', async () => {
    const { wrapper } = await mountHeader()

    const productCenterItem = wrapper.findAll('.site-header__nav-item')[0]
    await productCenterItem.trigger('mouseenter')

    const dropdown = wrapper.find('.site-header-dropdown')

    expect(dropdown.exists()).toBe(true)
    expect(dropdown.classes()).toContain('opacity-100')
    expect(wrapper.text()).toContain('Cloud Servers')
    expect(wrapper.text()).toContain('Domain Registration')
  })
})
