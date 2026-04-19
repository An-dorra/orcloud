/// <reference types="node" />

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

describe('HomeView market section styles', () => {
  it('uses Tailwind utility classes that preserve the requested market service layout values', () => {
    const view = readFileSync(resolve(process.cwd(), 'src/views/HomeView.vue'), 'utf8')

    expect(view).toContain('class="market-section__body mt-[44px] flex items-start gap-[142px]"')
    expect(view).toContain('class="market-services reveal-on-scroll reveal-delay-200 mt-[10px] flex h-[514px] basis-[444px] flex-col box-border pb-[18px]"')
    expect(view).toContain('class="origin-left flex items-start gap-10 pt-3 pb-[30px] transition-all duration-500 ease-out"')
    expect(view).toContain("service.active ? 'active scale-[1.04] pb-[42px]' : 'scale-100'")
    expect(view).toContain("service.active ? 'text-[32px] leading-[1.15]' : 'text-[24px] leading-[1.18]'")
    expect(view).toContain('class="mt-auto inline-flex h-15 w-[398px] items-center justify-center gap-[10px]')
  })
})
