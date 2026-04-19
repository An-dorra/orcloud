<template>
  <footer class="site-footer h-[516px] w-[1920px] border-t border-[rgba(226,232,240,0.5)] bg-[#fff]">
    <div class="site-footer__promises flex h-[120px] items-center border-b border-[#ebf2ff] px-[320px] pt-12 pb-[49px]">
      <span
        v-for="item in promises"
        :key="item.label"
        class="site-footer__promise inline-flex flex-1 items-center justify-center gap-2 text-[16px] font-medium text-[#2d3760]"
      >
        <img class="site-footer__promise-icon block h-6 w-6" :src="item.icon" alt="" aria-hidden="true" />
        {{ item.label }}
      </span>
    </div>

    <div class="site-footer__main flex h-[318px] px-[320px] pt-[60px]">
      <div class="site-footer__intro w-[338px]">
        <img class="site-footer__logo h-[36px] w-[239px]" :src="originsCloudLogo" alt="Origins Cloud" />
        <p class="mt-6 w-[277px] text-[16px] leading-[1.45] font-[300] text-[#4e5969]">
          A global leading cloud computing service provider committed to making innovation accessible for every enterprise.
        </p>
      </div>

      <div class="site-footer__columns ml-[50px] flex gap-[50px]">
        <div
          v-for="column in footerColumns"
          :key="column.title"
          class="site-footer__column flex min-w-[130px] flex-col gap-4"
        >
          <h3 class="mb-[2px] text-[14px] font-medium uppercase text-[#2d3760]">{{ column.title }}</h3>
          <a
            v-for="link in column.links"
            :key="link"
            href="#"
            class="text-[14px] text-[#86909c] no-underline"
          >
            {{ link }}
          </a>
        </div>
      </div>
    </div>

    <div class="site-footer__bottom flex h-[81px] items-center border-t border-[#ebf2ff] px-[338px]">
      <p class="m-0 w-[336px] text-[12px] font-[300] text-[#86909c]">© 2016-2024 OrCloud www.originscloud.io.</p>
      <div class="site-footer__legal ml-auto flex gap-8">
        <a href="#" class="text-[12px] font-medium text-[#86909c] no-underline">Privacy Policy</a>
        <a href="#" class="text-[12px] font-medium text-[#86909c] no-underline">Terms of Service</a>
        <a href="#" class="text-[12px] font-medium text-[#86909c] no-underline">Legal Compliance</a>
        <a href="#" class="text-[12px] font-medium text-[#86909c] no-underline">Friendship Links</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import originsCloudLogo from '@/assets/images/origins-cloud-logo-footer.svg'
import iconFooterNoFiling from '@/assets/icons/icon-footer-no-filing.png'
import iconFooterRefund from '@/assets/icons/icon-footer-refund.png'
import iconFooterSupport from '@/assets/icons/icon-footer-support.png'
import iconFooterVip from '@/assets/icons/icon-footer-vip.png'

const promises = [
  { label: '5-Day Refund', icon: iconFooterRefund },
  { label: 'No Filing Required', icon: iconFooterNoFiling },
  { label: 'VIP Service', icon: iconFooterVip },
  { label: '24*7 Support', icon: iconFooterSupport },
]

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
