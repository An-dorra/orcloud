import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'
import ConsoleAccountInformationView from '@/views/console/ConsoleAccountInformationView.vue'
import ConsoleDashboardView from '@/views/console/ConsoleDashboardView.vue'
import ConsoleSecurityCenterView from '@/views/console/ConsoleSecurityCenterView.vue'
import DataCenterView from '@/views/DataCenterView.vue'
import DomainRegistrationView from '@/views/DomainRegistrationView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductCenterView from '@/views/ProductCenterView.vue'
import ServiceGuaranteeView from '@/views/ServiceGuaranteeView.vue'
import SolutionPageView from '@/views/solutions/SolutionPageView.vue'
import TrustCenterView from '@/views/TrustCenterView.vue'
import VipMemberServiceView from '@/views/VipMemberServiceView.vue'
import OfficialAnnouncementsView from '@/views/OfficialAnnouncementsView.vue'

// Exporting routes separately makes the route contract easy to test.
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/product-center',
    name: 'product-center',
    component: ProductCenterView,
  },
  {
    path: '/domain-registration',
    name: 'domain-registration',
    component: DomainRegistrationView,
  },
  {
    path: '/service-guarantee',
    name: 'service-guarantee',
    component: ServiceGuaranteeView,
  },
  {
    path: '/trust-center',
    name: 'trust-center',
    component: TrustCenterView,
  },
  {
    path: '/data-center',
    name: 'data-center',
    component: DataCenterView,
  },
  {
    path: '/vip-member-service',
    name: 'vip-member-service',
    component: VipMemberServiceView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/official-announcements',
    name: 'official-announcements',
    component: OfficialAnnouncementsView,
  },
  {
    path: '/console',
    name: 'console-dashboard',
    component: ConsoleDashboardView,
    meta: {
      layout: 'console',
    },
  },
  {
    path: '/console/account',
    name: 'console-account-information',
    component: ConsoleAccountInformationView,
    meta: {
      layout: 'console',
    },
  },
  {
    path: '/console/security',
    name: 'console-security-center',
    component: ConsoleSecurityCenterView,
    meta: {
      layout: 'console',
    },
  },
  {
    path: '/solutions/:slug',
    name: 'solution-page',
    component: SolutionPageView,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Reset scroll when navigating between top-level pages.
    return { top: 0 }
  },
})
