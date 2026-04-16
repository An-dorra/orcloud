/// <reference types="node" />

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

describe('main.css font setup', () => {
  it('uses local Montserrat font files instead of Google Fonts', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/styles/main.css'), 'utf8')
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')

    expect(css).toContain('@font-face')
    expect(css).toContain("font-family: 'Montserrat'")
    expect(css).toContain("url('../assets/fonts/Montserrat/Montserrat-Regular-8.otf')")
    expect(html).not.toContain('fonts.googleapis.com')
  })
})
