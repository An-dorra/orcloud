<template>
  <div class="home-page">
    <section class="hero-section" :style="{ backgroundImage: `url(${heroCloudInfrastructure})` }">
      <div class="hero-section__inner">
        <div class="hero-section__content">
          <h1>
            The Infrastructure of
            <br />
            the Future
          </h1>
          <p>
            Origins Quantum delivers a next-generation neural
            <br />
            architecture designed for low-latency, high-availability
            <br />
            global operations.
          </p>
          <div class="hero-section__actions">
            <a href="#">Get Started</a>
            <a href="#" class="hero-section__secondary">Learn More</a>
          </div>
        </div>
        <div class="hero-section__value-row">
          <article v-for="item in valueCards" :key="item.title" class="hero-value">
            <div>
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
            <img class="hero-value__icon" :src="iconChevronRight" alt="" aria-hidden="true" />
          </article>
        </div>
      </div>
    </section>

    <section class="plans-section">
      <div class="plans-section__inner">
        <div class="section-heading">
          <h2>Stable, Secure, Credible</h2>
          <p>Select from our wide range of cloud hosting solutions optimized for various workloads and enterprise scales.</p>
        </div>
        <div class="plans-section__carousel">
          <ProductPlanCard
            v-for="(plan, index) in productPlans"
            :key="`${plan.title}-${plan.price}`"
            :class="`plan-card--pos-${index + 1}`"
            :plan="plan"
          />
        </div>
        <button class="more-button" type="button">
          <span>More</span>
          <img :src="iconMoreArrow" alt="" aria-hidden="true" />
        </button>
      </div>
    </section>

    <section class="industries-section">
      <div class="section-heading">
        <h2>Full-stack, 100s of industries</h2>
        <p>Products and cloud innovations, enabling business scenarios and vertical industries.</p>
      </div>
      <div class="industries-section__grid">
        <article
          v-for="card in industryCards"
          :key="card.title"
          class="industry-card"
          :class="{ 'industry-card--active': card.active }"
        >
          <img :src="card.image" :alt="card.title" />
          <h3>{{ card.title }}</h3>
        </article>
      </div>
    </section>

    <section class="market-section">
      <div class="section-heading">
        <h2>Cloud Market Ecosystem</h2>
        <p>Extending your cloud capabilities with professional value-added services.</p>
      </div>
      <div class="market-section__body">
        <div class="market-services">
          <article v-for="service in marketplaceServices" :key="service.title" :class="{ active: service.active }">
            <span></span>
            <div>
              <h3>{{ service.title }}</h3>
              <p v-if="service.description">{{ service.description }}</p>
            </div>
          </article>
          <button type="button">Explore Marketplace →</button>
        </div>
        <img class="market-section__image" :src="marketplaceCloudEcosystem" alt="Cloud market ecosystem" />
      </div>
    </section>

    <section class="network-section">
      <div class="section-heading">
        <h2>Safe, compliant, high-speed infrastructure</h2>
        <p>Our global network ensures low-latency access and local compliance across every major geographic region.</p>
      </div>
      <div class="network-section__stats">
        <div v-for="item in stats" :key="item.label">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </div>
      </div>
      <img class="network-section__map" :src="globalNetworkMap" alt="Global network map" />
      <div class="network-section__certifications">
        <h3>Global security &amp; compliance certifications</h3>
        <div>
          <img v-for="logo in certificationLogos" :key="logo" :src="logo" alt="" />
        </div>
      </div>
    </section>

    <section class="news-section">
      <div class="section-heading">
        <h2>OrCloud News &amp; Dynamics</h2>
        <p>Globally distributed infrastructure nodes provide users with fast, stable, intelligent, and reliable services.</p>
      </div>
      <div class="news-section__grid">
        <NewsCard v-for="card in newsCards" :key="card.title" :card="card" />
        <div class="news-section__more"><button class="more-button" type="button">More →</button></div>
      </div>
    </section>

    <section class="assistant-section">
      <div class="assistant-section__inner">
        <img class="assistant-section__rings" :src="orclawRingBackground" alt="" />
        <img class="assistant-section__crab" :src="orclawAssistantCrab" alt="OrClaw assistant crab" />
        <div class="assistant-section__content">
          <h2>Meet "OrClaw"<br />Your Personal AI Assistant</h2>
          <p>Intelligent resource management, troubleshooting, and cloud optimization at your fingertips.</p>
          <a href="#">Click to jump →</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import globalNetworkMap from '@/assets/images/global-network-map.svg'
import heroCloudInfrastructure from '@/assets/images/hero-cloud-infrastructure.jpg'
import marketplaceCloudEcosystem from '@/assets/images/marketplace-cloud-ecosystem.png'
import orclawAssistantCrab from '@/assets/images/orclaw-assistant-crab.svg'
import orclawRingBackground from '@/assets/images/orclaw-ring-background.svg'
import iconChevronRight from '@/assets/icons/icon-chevron-right.svg'
import iconMoreArrow from '@/assets/icons/icon-more-arrow.svg'
import {
  certificationLogos,
  industryCards,
  marketplaceServices,
  newsCards,
  productPlans,
  stats,
  valueCards,
} from '@/data/home'
import NewsCard from '@/views/home/components/NewsCard.vue'
import ProductPlanCard from '@/views/home/components/ProductPlanCard.vue'
</script>

<style scoped>
.home-page {
  width: 100%;
  background: #ffffff;
  color: #1d2129;
  font-family: Montserrat, Inter, Arial, sans-serif;
}

.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 920px;
  margin-top: -80px;
  overflow: hidden;
  background: #02010f;
  background-repeat: no-repeat;
  background-position: center -6px;
  background-size: 1920px 926px;
}

.hero-section__inner {
  width: 1920px;
  margin: 0 auto;
  padding: 192px 0 0 120px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.hero-section__content {
  width: 806px;
  color: #ffffff;
}

.hero-section__content h1 {
  width: 741px;
  margin: 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 78px;
}

.hero-section__content p {
  width: 806px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
}

.hero-section__actions {
  display: flex;
  gap: 46px;
  margin-top: 90px;
}

.hero-section__actions a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 58px;
  border-radius: 400px;
  background: #0168f0;
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
  text-decoration: none;
}

.hero-section__actions .hero-section__secondary {
  border: 1px solid rgba(209, 213, 220, 0.5);
  background: #ffffff;
  color: #0168f0;
}

.hero-section__value-row {
  margin-top: auto;
  margin-left: -120px;
  display: flex;
  width: 1920px;
  height: 183px;
  padding: 0 100px;
  border-bottom: 2px solid #ebedf1;
  background: #ffffff;
}

.hero-value {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 24px;
  position: relative;
  background: #ffffff;
}

.hero-value:last-child {
  border-right: 0;
}

.hero-value::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 1px;
  height: 50%;
  background: #ebedf1;
  transform: translateY(-50%);
}

.hero-value:last-child::after {
  display: none;
}

.hero-value h2 {
  margin: 0;
  color: #1d2129;
  font-size: 24px;
  font-weight: 600;
}

.hero-value p {
  width: 346px;
  margin: 8px 0 0;
  color: #4e5969;
  font-size: 18px;
  line-height: 1.22;
}

.hero-value__icon {
  width: 18px;
  height: 18px;
  display: block;
}

.section-heading h2 {
  margin: 0;
  color: #1d2129;
  font-size: 56px;
  font-weight: 600;
  line-height: 1.22;
}

.section-heading p {
  margin: 16px 0 0;
  color: #4e5969;
  font-size: 28px;
  font-weight: 300;
  line-height: 1.22;
}

.plans-section {
  position: relative;
  width: 100%;
  height: 1000px;
  padding-top: 108px;
  overflow: hidden;
  background: #ffffff;
}

.plans-section__inner {
  width: 1920px;
  margin: 0 auto;
  position: relative;
  height: 100%;
}

.plans-section .section-heading {
  margin-left: 120px;
}

.plans-section .section-heading p {
  width: 1076px;
}

.plans-section__carousel {
  position: relative;
  width: 2016px;
  height: 475px;
  margin-top: 90px;
  margin-left: -48px;
}

.more-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 250px;
  height: 40px;
  border: 0;
  border-radius: 500px;
  background: rgba(122, 122, 122, 0.1);
  color: #1d2129;
  font-size: 18px;
  font-weight: 600;
}

.more-button img {
  width: 20px;
  height: 20px;
  display: block;
}

.plans-section__inner > .more-button {
  position: absolute;
  left: 830px;
  top: 853px;
}

.plans-section__carousel :deep(.plan-card) {
  position: absolute;
}

.plans-section__carousel :deep(.plan-card--pos-1) {
  left: 0;
  top: 45px;
}

.plans-section__carousel :deep(.plan-card--pos-2) {
  left: 394px;
  top: 30px;
}

.plans-section__carousel :deep(.plan-card--pos-3) {
  left: 788px;
  top: 0;
}

.plans-section__carousel :deep(.plan-card--pos-4) {
  left: 1202px;
  top: 27px;
}

.plans-section__carousel :deep(.plan-card--pos-5) {
  left: 1596px;
  top: 45px;
}

.industries-section {
  height: 1083px;
  padding: 116px 120px 0;
  background: #ffffff;
}

.industries-section .section-heading p {
  width: 1050px;
}

.industries-section__grid {
  display: grid;
  grid-template-columns: 430px 315px 315px 315px 315px;
  gap: 16px;
  margin-top: 80px;
}

.industry-card {
  position: relative;
  height: 560px;
  overflow: hidden;
  background: #111827;
}

.industry-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.industry-card::after {
  position: absolute;
  inset: 0;
  content: '';
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.58));
}

.industry-card h3 {
  position: absolute;
  left: 24px;
  bottom: 24px;
  z-index: 1;
  margin: 0;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
}

.market-section {
  height: 1000px;
  padding: 154px 120px 0;
  background: #ffffff;
}

.market-section .section-heading p {
  width: 1005px;
}

.market-section__body {
  display: flex;
  gap: 40px;
  margin-top: 60px;
}

.market-services {
  width: 557px;
}

.market-services article {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 18px 0;
}

.market-services article.active {
  padding-top: 24px;
}

.market-services article span {
  width: 26px;
  height: 26px;
  margin-top: 3px;
  border-radius: 50%;
  background: #0168f0;
}

.market-services h3 {
  margin: 0;
  color: #1d2129;
  font-size: 24px;
  font-weight: 600;
}

.market-services article.active h3 {
  font-size: 32px;
}

.market-services p {
  width: 462px;
  margin: 20px 0 0;
  color: #4e5969;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.22;
}

.market-services button {
  width: 550px;
  height: 60px;
  margin-top: 40px;
  border: 0;
  border-radius: 8px;
  background: #0168f0;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
}

.market-section__image {
  width: 1080px;
  height: 517px;
  border-radius: 12px;
  object-fit: cover;
}

.network-section {
  position: relative;
  height: 1000px;
  padding: 130px 120px 0;
  background: #ffffff;
}

.network-section .section-heading p {
  width: 1130px;
}

.network-section__stats {
  display: flex;
  gap: 60px;
  margin-top: 60px;
}

.network-section__stats div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.network-section__stats strong {
  color: #0168f0;
  font-size: 46px;
  font-weight: 700;
  line-height: 40px;
}

.network-section__stats span {
  color: #64748b;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.network-section__map {
  position: absolute;
  top: 358px;
  right: 169px;
  width: 1029px;
  height: 513px;
}

.network-section__certifications {
  position: absolute;
  left: 120px;
  bottom: 172px;
}

.network-section__certifications h3 {
  margin: 0 0 22px;
  color: #1d2129;
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
}

.network-section__certifications div {
  display: flex;
  gap: 40px;
  align-items: center;
}

.network-section__certifications img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.news-section {
  height: 1575px;
  padding: 136px 120px 0;
  background: #ffffff;
}

.news-section .section-heading p {
  width: 1097px;
}

.news-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 533.33px);
  gap: 80px 40px;
  margin-top: 80px;
}

.news-section__more {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 501px;
}

.industries-section,
.market-section,
.network-section,
.news-section {
  width: 1920px;
  margin: 0 auto;
}

.assistant-section {
  position: relative;
  width: 100%;
  height: 485px;
  overflow: hidden;
  background: #1d2129;
}

.assistant-section__inner {
  width: 1920px;
  margin: 0 auto;
  position: relative;
  height: 100%;
}

.assistant-section__rings {
  position: absolute;
  top: -237px;
  left: 883px;
  width: 1159px;
  height: 1159px;
}

.assistant-section__crab {
  position: absolute;
  top: -22px;
  right: 47px;
  width: 817px;
  height: 688px;
  transform: rotate(-21deg);
}

.assistant-section__content {
  position: absolute;
  top: 82px;
  left: 120px;
  color: #ffffff;
}

.assistant-section__content h2 {
  margin: 0;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.22;
}

.assistant-section__content p {
  width: 666px;
  margin: 28px 0 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 26px;
  font-weight: 300;
  line-height: 1.22;
}

.assistant-section__content a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 40px;
  margin-top: 58px;
  padding: 0 30px;
  border-radius: 400px;
  background: #0168f0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}
</style>
