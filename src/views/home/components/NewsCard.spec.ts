import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import type { NewsCard as NewsCardType } from '@/data/home'

import NewsCard from './NewsCard.vue'

const card: NewsCardType = {
  title: 'HK Computing Power Target: Expanding Global High- Performance Cluster',
  image: '/news.png',
  date: '2026/3/27',
}

describe('NewsCard', () => {
  it('uses the remapped filled arrow asset for the footer action', () => {
    const wrapper = mount(NewsCard, {
      props: {
        card,
      },
    })

    expect(wrapper.find('.news-card__footer img').attributes('src')).toContain('icon-arrow-circle-filled')
  })
})
