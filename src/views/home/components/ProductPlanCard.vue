<template>
  <article class="plan-card" :class="{ 'plan-card--featured': plan.featured }">
    <span v-if="plan.featured" class="plan-card__badge">BEST SELLER</span>
    <h3>{{ plan.title }}</h3>
    <p class="plan-card__description">{{ plan.description }}</p>
    <ul>
      <li v-for="(spec, index) in plan.specs" :key="spec">
        <img
          class="plan-card__check"
          :src="plan.featured && index === 1 ? iconSpecCheckAlt : iconSpecCheck"
          alt=""
          aria-hidden="true"
        />
        {{ spec }}
      </li>
    </ul>
    <div class="plan-card__divider">
      <img :src="plan.featured ? iconPlanDividerFeatured : iconPlanDivider" alt="" aria-hidden="true" />
    </div>
    <div class="plan-card__footer">
      <div>
        <p class="plan-card__label">Starting from</p>
        <strong>{{ plan.price }}</strong>
        <span>{{ plan.period }}</span>
      </div>
      <button type="button">Buy Now</button>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ProductPlan } from '@/data/home'
import iconPlanDivider from '@/assets/icons/icon-plan-divider.svg'
import iconPlanDividerFeatured from '@/assets/icons/icon-plan-divider-featured.svg'
import iconSpecCheck from '@/assets/icons/icon-spec-check.svg'
import iconSpecCheckAlt from '@/assets/icons/icon-spec-check-alt.svg'

defineProps<{
  plan: ProductPlan
}>()
</script>

<style scoped>
.plan-card {
  position: relative;
  width: 420px;
  min-height: 422px;
  padding: 40px 32px 44px;
  border: 1px solid #e6e6e6;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.plan-card--featured {
  z-index: 2;
  width: 440px;
  min-height: 475px;
  padding: 40px 40px 44px;
  border-color: #0d59ff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
}

.plan-card__badge {
  position: absolute;
  top: -1px;
  right: -1px;
  padding: 10px 24px 10px 20px;
  border-bottom-left-radius: 8px;
  background: #0168f0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  line-height: 15px;
}

.plan-card h3 {
  margin: 0;
  color: #1a1c1c;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.22;
}

.plan-card--featured h3 {
  font-size: 36px;
}

.plan-card__description {
  min-height: 44px;
  margin: 28px 0 0;
  color: #4e5969;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.22;
}

.plan-card--featured .plan-card__description {
  font-size: 22px;
  margin-top: 36px;
}

.plan-card ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
}

.plan-card--featured ul {
  margin-top: 36px;
}

.plan-card li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1d2129;
  font-size: 16px;
  font-weight: 300;
}

.plan-card--featured li {
  font-size: 18px;
}

.plan-card__check {
  width: 15px;
  height: 15px;
  display: block;
}

.plan-card__divider {
  margin-top: 28px;
}

.plan-card--featured .plan-card__divider {
  margin-top: 36px;
}

.plan-card__divider img {
  width: 100%;
  height: 1px;
  display: block;
}

.plan-card__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 28px;
}

.plan-card--featured .plan-card__footer {
  margin-top: 36px;
}
.plan-card__label {
  margin: 0 0 8px;
  color: #86909c;
  font-size: 12px;
}

.plan-card--featured .plan-card__label {
  font-size: 14px;
}

.plan-card strong {
  color: #0168f0;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
}

.plan-card--featured strong {
  font-size: 36px;
}

.plan-card span {
  color: #86909c;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.plan-card--featured span {
  font-size: 16px;
}

.plan-card button {
  width: 120px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background: #1d2129;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
}

.plan-card--featured button {
  width: 130px;
  height: 44px;
  background: linear-gradient(180deg, #0168f0 0%, #5d9dff 100%);
  font-size: 18px;
}
</style>
