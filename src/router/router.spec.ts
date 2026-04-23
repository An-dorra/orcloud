import { describe, expect, it } from 'vitest'

import { routes } from './index'

describe('routes', () => {
  it('defines the required top-level route names', () => {
    const routeNames = routes.map((route) => route.name)

    expect(routeNames).toContain('home')
    expect(routeNames).toContain('product-center')
    expect(routeNames).toContain('domain-registration')
    expect(routeNames).toContain('service-guarantee')
    expect(routeNames).toContain('trust-center')
    expect(routeNames).toContain('data-center')
    expect(routeNames).toContain('vip-member-service')
    expect(routeNames).toContain('about')
  })
})
