import { describe, expect, it } from 'vitest'

import { featureCards } from './features'

describe('featureCards', () => {
  it('keeps repeated feature content in a reusable data source', () => {
    expect(featureCards).toHaveLength(3)
    expect(featureCards.every((card) => card.title && card.description)).toBe(true)
  })
})
