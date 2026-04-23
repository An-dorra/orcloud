import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import OrclawCtaSection from '@/components/sections/OrclawCtaSection.vue'

import DomainRegistrationView from './DomainRegistrationView.vue'

describe('DomainRegistrationView', () => {
  it('renders the figma-matched sections and reuses the shared Orclaw CTA module', () => {
    const wrapper = mount(DomainRegistrationView)

    expect(wrapper.find('.domain-registration-page').classes()).toContain('w-[1920px]')
    expect(wrapper.find('.domain-registration-hero').exists()).toBe(true)
    expect(wrapper.find('.domain-registration-hero h1').text().replace(/\s+/g, ' ').trim()).toBe('Website building starts with a domain name')
    expect(wrapper.text()).toContain('Recommended domain names')
    expect(wrapper.text()).toContain('All-in-one domain lifecycle management')
    expect(wrapper.text()).toContain('Registration in just 3 steps')
    expect(wrapper.text()).toContain('Tailored for different businesses')
    expect(wrapper.text()).toContain('Stable and Reliable Infrastructure')
    expect(wrapper.text()).toContain('Register Your Exclusive Domain Now')
    expect(wrapper.findAll('.domain-price-card')).toHaveLength(4)
    expect(wrapper.findAll('.domain-feature-card')).toHaveLength(4)
    expect(wrapper.findAll('.domain-step-card')).toHaveLength(3)
    expect(wrapper.findAll('.domain-use-case-card')).toHaveLength(5)
    expect(wrapper.findAll('img[src*="domain-registration"]').length).toBeGreaterThan(5)
    expect(wrapper.findComponent(OrclawCtaSection).exists()).toBe(true)
  })

  it('renders a real searchable input in the bottom CTA', () => {
    const wrapper = mount(DomainRegistrationView)

    const searchInputs = wrapper.findAll('input[type="search"]')

    expect(searchInputs.length).toBeGreaterThanOrEqual(2)
    expect(searchInputs.at(1)?.attributes('placeholder')).toBe('Enter desired domain name')
  })

  it('uses shared full-bleed sections and the existing reveal animation pattern', () => {
    const wrapper = mount(DomainRegistrationView)
    const view = readFileSync(resolve(process.cwd(), 'src/views/DomainRegistrationView.vue'), 'utf8')

    expect(wrapper.findAllComponents(FullBleedSection).length).toBeGreaterThanOrEqual(3)
    expect(wrapper.find('.domain-registration-hero h1').classes()).toContain('reveal-on-scroll')
    expect(wrapper.findAll('.reveal-on-scroll').length).toBeGreaterThan(10)
    expect(wrapper.findAll('.reveal-media').length).toBeGreaterThan(3)
    expect(view).toContain('setupScrollRevealOnScroll')
    expect(view).toContain('new IntersectionObserver')
    expect(view).toContain('transform: translateY(72px);')
    expect(view).toContain('transform: translateY(24px) scale(0.985);')
  })

  it('stages domain cards in sequence and gives card-like sections the homepage hover treatment', () => {
    const view = readFileSync(resolve(process.cwd(), 'src/views/DomainRegistrationView.vue'), 'utf8')
    const priceCard = readFileSync(resolve(process.cwd(), 'src/views/domain-registration/components/DomainPriceCard.vue'), 'utf8')
    const featureCard = readFileSync(resolve(process.cwd(), 'src/views/domain-registration/components/DomainFeatureCard.vue'), 'utf8')
    const stepCard = readFileSync(resolve(process.cwd(), 'src/views/domain-registration/components/DomainStepCard.vue'), 'utf8')
    const useCaseCard = readFileSync(resolve(process.cwd(), 'src/views/domain-registration/components/DomainUseCaseCard.vue'), 'utf8')

    expect(view).toContain("transitionDelay: `${200 + index * 70}ms`")
    expect(priceCard).toContain('hover:scale-[1.012]')
    expect(priceCard).toContain('hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]')
    expect(priceCard).toContain('group-hover:text-[#0168f0]')
    expect(featureCard).toContain('hover:scale-[1.012]')
    expect(featureCard).toContain('hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]')
    expect(featureCard).toContain('group-hover:text-[#0168f0]')
    expect(stepCard).toContain('hover:scale-[1.012]')
    expect(stepCard).toContain('hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]')
    expect(stepCard).toContain('group-hover:text-[#0168f0]')
    expect(useCaseCard).toContain('hover:scale-[1.012]')
    expect(useCaseCard).toContain('hover:shadow-[0_16px_36px_rgba(1,104,240,0.14)]')
  })

  it('uses pointer cursors and smoother hover transitions across interactive cards', () => {
    const priceCard = readFileSync(resolve(process.cwd(), 'src/views/domain-registration/components/DomainPriceCard.vue'), 'utf8')
    const featureCard = readFileSync(resolve(process.cwd(), 'src/views/domain-registration/components/DomainFeatureCard.vue'), 'utf8')
    const stepCard = readFileSync(resolve(process.cwd(), 'src/views/domain-registration/components/DomainStepCard.vue'), 'utf8')
    const useCaseCard = readFileSync(resolve(process.cwd(), 'src/views/domain-registration/components/DomainUseCaseCard.vue'), 'utf8')

    expect(priceCard).toContain('cursor-pointer')
    expect(priceCard).toContain('duration-700')
    expect(priceCard).toContain('hover:-translate-y-[4px]')
    expect(priceCard).toContain('transition-all')
    expect(priceCard).toContain('scale-100')
    expect(featureCard).toContain('cursor-pointer')
    expect(featureCard).toContain('duration-700')
    expect(featureCard).toContain('hover:-translate-y-[4px]')
    expect(featureCard).toContain('transition-all')
    expect(featureCard).toContain('scale-100')
    expect(stepCard).toContain('cursor-pointer')
    expect(stepCard).toContain('duration-700')
    expect(stepCard).toContain('hover:-translate-y-[4px]')
    expect(stepCard).toContain('transition-all')
    expect(stepCard).toContain('scale-100')
    expect(useCaseCard).toContain('cursor-pointer')
    expect(useCaseCard).toContain('duration-700')
    expect(useCaseCard).toContain('hover:-translate-y-[4px]')
    expect(useCaseCard).toContain('transition-all')
    expect(useCaseCard).toContain('scale-100')
  })

  it('separates reveal wrappers from hoverable cards so transform animations do not fight each other', () => {
    const view = readFileSync(resolve(process.cwd(), 'src/views/DomainRegistrationView.vue'), 'utf8')

    expect(view).toContain('v-for="(card, index) in domainPriceCards"')
    expect(view).toContain('class="reveal-on-scroll"')
    expect(view).toContain('<DomainPriceCard :card="card" />')
    expect(view).toContain('v-for="(feature, index) in domainFeatures"')
    expect(view).toContain('<DomainFeatureCard :feature="feature" />')
    expect(view).toContain('v-for="(useCase, index) in domainUseCases"')
    expect(view).toContain('class="reveal-media"')
    expect(view).toContain('<DomainUseCaseCard :use-case="useCase" :index="index" />')
  })
})
