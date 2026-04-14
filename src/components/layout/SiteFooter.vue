<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__promises">
        <span v-for="item in promises" :key="item" class="site-footer__promise">
          <span class="site-footer__promise-icon"></span>
          {{ item }}
        </span>
      </div>

      <div class="site-footer__main">
        <div class="site-footer__intro">
          <img class="site-footer__logo" :src="originsCloudLogo" alt="Origins Cloud" />
          <p>
            A global leading cloud computing service provider committed to making innovation accessible for every enterprise.
          </p>
        </div>

        <div class="site-footer__columns">
          <div v-for="column in footerColumns" :key="column.title" class="site-footer__column">
            <h3>{{ column.title }}</h3>
            <a v-for="link in column.links" :key="link" href="#">{{ link }}</a>
          </div>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>© 2016-2024 OrCloud www.originscloud.io.</p>
        <div class="site-footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Legal Compliance</a>
          <a href="#">Friendship Links</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import originsCloudLogo from '@/assets/images/origins-cloud-logo-footer.svg'

const promises = ['5-Day Refund', 'No Filing Required', 'VIP Service', '24*7 Support']

const footerColumns = [
  {
    title: 'Hot Products',
    links: ['Cloud Server', 'Bare Metal Server', 'IDC Colocation', 'Domain Name Registration'],
  },
  {
    title: 'Solutions',
    links: ['Website Solutions', 'Gaming Solutions', 'Financial Solutions', 'E-commerce Solutions', 'Mobile Solutions'],
  },
  {
    title: 'Ecosystem Partnership',
    links: ['Partners', 'CPS Promotion', 'Official Announcements', 'Contact Us', 'Product Center'],
  },
  {
    title: 'Origin Cloud Products',
    links: ['Control Center', 'Security Center', 'Resource Center', 'Finance Center', 'Account Management'],
  },
]
</script>

<style scoped>
.site-footer {
  width: 100%;
  height: 516px;
  border-top: 1px solid rgba(226, 232, 240, 0.5);
  background: #f8f8fa;
}

.site-footer__inner {
  width: 1920px;
  margin: 0 auto;
}

.site-footer__promises {
  display: flex;
  align-items: center;
  height: 120px;
  padding: 48px 320px 49px;
  border-bottom: 1px solid #ebf2ff;
}

.site-footer__promise {
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #2d3760;
  font-size: 16px;
  font-weight: 500;
}

.site-footer__promise-icon {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: #1683ff;
}

.site-footer__main {
  display: flex;
  height: 318px;
  padding: 60px 320px 0;
}

.site-footer__intro {
  width: 338px;
}

.site-footer__logo {
  width: 239px;
  height: 36px;
}

.site-footer__intro p {
  width: 277px;
  margin-top: 24px;
  color: #4e5969;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.45;
}

.site-footer__columns {
  display: flex;
  gap: 50px;
  margin-left: 50px;
}

.site-footer__column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 130px;
}

.site-footer__column h3 {
  margin: 0 0 2px;
  color: #2d3760;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}

.site-footer__column a,
.site-footer__bottom a {
  color: #86909c;
  font-size: 14px;
  text-decoration: none;
}

.site-footer__bottom {
  display: flex;
  align-items: center;
  height: 81px;
  padding: 0 338px;
  border-top: 1px solid #ebf2ff;
}

.site-footer__bottom p {
  width: 336px;
  margin: 0;
  color: #86909c;
  font-size: 12px;
  font-weight: 300;
}

.site-footer__legal {
  display: flex;
  gap: 32px;
  margin-left: auto;
}

.site-footer__legal a {
  font-size: 12px;
  font-weight: 500;
}
</style>
