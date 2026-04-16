/// <reference types="node" />

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

describe('HomeView market section styles', () => {
  it('uses the requested market service typography and flex spacing values', () => {
    const view = readFileSync(resolve(process.cwd(), 'src/views/HomeView.vue'), 'utf8')

    expect(view).toContain('display: flex;')
    expect(view).toContain('gap: 40px;')
    expect(view).toContain('font-size: 24px;')
    expect(view).toContain('.market-services article.active h3')
    expect(view).toContain('font-size: 32px;')
    expect(view).toContain('height: 40px;')
  })
})
