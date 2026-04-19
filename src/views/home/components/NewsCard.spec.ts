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

  it('uses the hero value card hover treatment without changing its fixed layout', () => {
    const wrapper = mount(NewsCard, {
      props: {
        card,
      },
    })

    const newsCard = wrapper.find('.news-card')

    expect(newsCard.classes()).toContain('h-[501px]')
    expect(newsCard.classes()).toContain('w-[533.33px]')
    expect(newsCard.classes()).toContain('cursor-pointer')
    expect(newsCard.classes()).toContain('transition-all')
    expect(newsCard.classes()).toContain('duration-300')
    expect(newsCard.classes()).toContain('ease-out')
    expect(newsCard.classes()).toContain('hover:scale-[1.015]')
    expect(newsCard.classes()).toContain('hover:shadow-[0_14px_38px_rgba(1,104,240,0.16)]')
    expect(wrapper.find('h3').classes()).toContain('group-hover:text-[#0168f0]')
    expect(wrapper.find('time').classes()).toContain('group-hover:text-[#0168f0]')
    expect(wrapper.find('.news-card__footer img').classes()).toContain('transition-all')
    expect(wrapper.find('.news-card__footer img').classes()).toContain('duration-300')
    expect(wrapper.find('.news-card__footer img').classes()).toContain('group-hover:scale-105')
    expect(wrapper.find('.news-card__image-frame').classes()).toContain('overflow-hidden')
    expect(wrapper.find('.news-card__image').classes()).toContain('transition-transform')
    expect(wrapper.find('.news-card__image').classes()).toContain('duration-300')
    expect(wrapper.find('.news-card__image').classes()).toContain('group-hover:scale-[1.04]')
  })
})
