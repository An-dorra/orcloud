import { describe, expect, it } from 'vitest'

import { routes } from './index'

describe('routes', () => {
  it('defines the required top-level route names', () => {
    const routeNames = routes.map((route) => route.name)

    expect(routeNames).toContain('home')
    expect(routeNames).toContain('about')
  })
})
