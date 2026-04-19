import { mount } from '@vue/test-utils'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

import OrclawCrab from './OrclawCrab.vue'

describe('OrclawCrab', () => {
  it('renders the crab svg inline so its claws and legs can be animated', () => {
    const wrapper = mount(OrclawCrab)

    expect(wrapper.find('.orclaw-crab').exists()).toBe(true)
    expect(wrapper.find('svg #claw_left').exists()).toBe(true)
    expect(wrapper.find('svg #claw_right').exists()).toBe(true)
    expect(wrapper.findAll('svg [id^="leg_"]')).toHaveLength(6)
  })

  it('uses sideways step, alternating leg, claw, and eye animations for a crab-like motion', () => {
    const componentSource = readFileSync(resolve(process.cwd(), 'src/views/home/components/OrclawCrab.vue'), 'utf8')

    expect(componentSource).toContain('orclaw-side-step')
    expect(componentSource).toContain('orclaw-leg-left-step')
    expect(componentSource).toContain('orclaw-leg-right-step')
    expect(componentSource).toContain('orclaw-claw-left-snap')
    expect(componentSource).toContain('orclaw-eye-peek')
  })

  it('keeps the crab motion slow, subtle, and gives the claws visible pincer animations', () => {
    const componentSource = readFileSync(resolve(process.cwd(), 'src/views/home/components/OrclawCrab.vue'), 'utf8')

    expect(componentSource).toContain('orclaw-side-step 3.8s')
    expect(componentSource).toContain('orclaw-leg-left-step 2.6s')
    expect(componentSource).toContain('orclaw-claw-left-open')
    expect(componentSource).toContain('orclaw-claw-right-open')
    expect(componentSource).toContain('#claw_left > path:nth-child')
  })
})
