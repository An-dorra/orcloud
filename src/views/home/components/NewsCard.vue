<template>
  <article class="news-card">
    <img :src="card.image" :alt="card.title" />
    <h3>{{ card.title }}</h3>
    <div class="news-card__footer">
      <time>{{ card.date }}</time>
      <span aria-hidden="true">→</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { NewsCard } from '@/data/home'

defineProps<{
  card: NewsCard
}>()
</script>

<style scoped>
.news-card {
  width: 533.33px;
  height: 501px;
  padding: 24px;
  border: 1px solid #e6e6e6;
  border-radius: 30px;
  background: #ffffff;
}

.news-card img {
  display: block;
  width: 485px;
  height: 252px;
  border-radius: 24px;
  object-fit: cover;
}

.news-card h3 {
  width: 485px;
  min-height: 87px;
  margin: 33px 0 0;
  color: #1d2129;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
}

.news-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 33px;
}

.news-card time {
  color: #86909c;
  font-size: 16px;
  letter-spacing: 1px;
}

.news-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0168f0;
  color: #ffffff;
  font-size: 24px;
}
</style>
