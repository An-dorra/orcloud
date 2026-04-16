<template>
  <div class="home-page">
    <FullBleedSection
      class="hero-section"
      content-class="hero-section__shell"
      :style="{ backgroundImage: `url(${heroCloudInfrastructure})` }"
    >
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
        <div class="hero-section__value-row-shell">
          <article v-for="item in valueCards" :key="item.title" class="hero-value">
            <div>
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
            <img class="hero-value__icon" :src="iconChevronRight" alt="" aria-hidden="true" />
          </article>
        </div>
      </div>
    </FullBleedSection>

    <PlansCarouselSection />
    <IndustriesAccordionSection />

    <section class="market-section">
      <div class="section-heading">
        <h2>Cloud Market Ecosystem</h2>
        <p>Extending your cloud capabilities with professional value-added services.</p>
      </div>
      <div class="market-section__body">
        <div class="market-services">
          <div class="market-services__items">
            <article v-for="service in marketplaceServices" :key="service.title" :class="{ active: service.active }">
              <img :src="service.icon" :alt="`${service.title} icon`" />
              <div>
                <h3>{{ service.title }}</h3>
                <p v-if="service.description">{{ service.description }}</p>
              </div>
            </article>
          </div>
          <button type="button">
            <span>Explore Marketplace</span>
            <img :src="iconMoreArrow" alt="" aria-hidden="true" />
          </button>
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
        <div class="news-section__more">
          <button class="more-button" type="button" aria-label="More news">
            <span class="more-button__sr-only">More</span>
            <img :src="buttonMorePill" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>

    <FullBleedSection class="assistant-section" content-class="assistant-section__shell">
      <img class="assistant-section__rings" :src="orclawRingBackground" alt="" />
      <img class="assistant-section__crab" :src="orclawAssistantCrab" alt="OrClaw assistant crab" />
      <div class="assistant-section__content">
        <h2>Meet "OrClaw"<br />Your Personal AI Assistant</h2>
        <p>Intelligent resource management, troubleshooting, and cloud optimization at your fingertips.</p>
        <a href="#">Click to jump →</a>
      </div>
    </FullBleedSection>
  </div>
</template>

<script setup lang="ts">
import FullBleedSection from '@/components/layout/FullBleedSection.vue'
import globalNetworkMap from '@/assets/images/global-network-map.svg'
import heroCloudInfrastructure from '@/assets/images/hero-cloud-infrastructure.jpg'
import marketplaceCloudEcosystem from '@/assets/images/marketplace-cloud-ecosystem.png'
import orclawAssistantCrab from '@/assets/images/orclaw-assistant-crab.svg'
import orclawRingBackground from '@/assets/images/orclaw-ring-background.svg'
import buttonMorePill from '@/assets/icons/button-more-pill.png'
import iconChevronRight from '@/assets/icons/icon-chevron-right.svg'
import iconMoreArrow from '@/assets/icons/icon-more-arrow.svg'
import {
  certificationLogos,
  marketplaceServices,
  newsCards,
  stats,
  valueCards,
} from '@/data/home'
import IndustriesAccordionSection from '@/views/home/components/IndustriesAccordionSection.vue'
import NewsCard from '@/views/home/components/NewsCard.vue'
import PlansCarouselSection from '@/views/home/components/PlansCarouselSection.vue'
</script>

<style scoped>
.home-page {
  width: 1920px;
  background: #ffffff;
  color: #1d2129;
  font-family: Montserrat, Inter, Arial, sans-serif;
}

.hero-section {
  margin-top: -80px;
  overflow: hidden;
  background: #02010f;
  background-repeat: no-repeat;
  background-position: 0 -6px;
  background-size: 1920px 926px;
}

.hero-section :deep(.hero-section__shell) {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 920px;
  padding: 192px 0 0 120px;
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
  width: 1920px;
  height: 183px;
  border-bottom: 2px solid #ebedf1;
  background: #ffffff;
}

.hero-section__value-row-shell {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 100px;
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

.more-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 40px;
  border: 0;
  padding: 0;
  background: transparent;
}

.more-button img {
  width: 250px;
  height: 40px;
  display: block;
}

.more-button__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.market-section {
  padding: 126px 120px 84px;
  background: #ffffff;
}

.market-section .section-heading p {
  width: 1038px;
  color: #7f8796;
  font-size: 22px;
  line-height: 1.18;
}

.market-section__body {
  display: flex;
  align-items: flex-start;
  gap: 142px;
  margin-top: 44px;
}

.market-services {
  flex: 0 0 444px;
  display: flex;
  flex-direction: column;
  height: 514px;
  margin-top: 10px;
  padding-bottom: 18px;
  box-sizing: border-box;
}

.market-services__items {
  display: flex;
  flex-direction: column;
}

.market-services article {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  padding: 12px 0 10px;
}

.market-services article.active {
  padding-top: 12px;
  padding-bottom: 42px;
}

.market-services article > div {
  display: flex;
  flex-direction: column;
}

.market-services article img {
  display: block;
  flex-shrink: 0;
}

.market-services article.active img {
  width: 30px;
  height: 30px;
  margin-top: 1px;
}

.market-services article:not(.active) img {
  width: 20px;
  height: 20px;
  margin-top: 4px;
}

.market-services h3 {
  margin: 0;
  color: #1d2129;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.18;
}

.market-services article.active h3 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.15;
}

.market-services p {
  width: 372px;
  margin: 10px 0 0;
  color: #7f8796;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.18;
}

.market-services button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 398px;
  height: 40px;
  margin-top: auto;
  border: 0;
  border-radius: 5px;
  background: #0168f0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
}

.market-services button img {
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
}

.market-section__image {
  flex: 1 1 auto;
  width: auto;
  max-width: none;
  height: 514px;
  min-width: 0;
  margin-top: 0;
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

.assistant-section {
  background: #1d2129;
}

.assistant-section :deep(.assistant-section__shell) {
  position: relative;
  height: 485px;
  overflow: hidden;
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

@media (min-width: 1921px) {
  .hero-section {
    background-position: center -6px;
    background-size: 100vw auto;
  }

  .hero-section__value-row {
    width: 100vw;
    margin-left: calc(50% - 50vw - 60px);
  }

  .hero-section__value-row-shell {
    width: 1920px;
    margin: 0 auto;
  }
}
</style>
