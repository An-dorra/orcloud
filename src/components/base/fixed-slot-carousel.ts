export interface FixedSlotLayout {
  name: string
  offset: number
  left: number
  top: number
  zIndex: number
}

export type FixedSlotDepth = 'center' | 'adjacent' | 'outer'

function wrapIndex(length: number, index: number) {
  return ((index % length) + length) % length
}

function getFixedSlotDepth(offset: number): FixedSlotDepth {
  if (offset === 0) {
    return 'center'
  }

  if (Math.abs(offset) === 1) {
    return 'adjacent'
  }

  return 'outer'
}

export function getFixedSlotEntries<T>(items: T[], activeIndex: number, slotLayouts: readonly FixedSlotLayout[]) {
  if (items.length === 0) {
    return []
  }

  return slotLayouts.map((layout) => {
    const itemIndex = wrapIndex(items.length, activeIndex + layout.offset)

    return {
      ...layout,
      depth: getFixedSlotDepth(layout.offset),
      itemIndex,
      item: items[itemIndex]!,
    }
  })
}
