import type { Component } from 'vue'
import {
  Boxes,
  Braces,
  Building2,
  CircleUserRound,
  ClipboardList,
  CloudCog,
  CreditCard,
  Database,
  Headphones,
  KeyRound,
  Languages,
  MailCheck,
  PhoneCall,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  UserCog,
} from 'lucide-vue-next'

export type ConsoleNavItem = {
  label: string
  to: string
  icon: Component
}

export type ConsoleStatusItem = {
  title: string
  subtitle: string
  action?: string
  icon: Component
}

export type ConsoleShortcut = {
  title: string
  tone: 'blue' | 'warm' | 'mint' | 'violet'
  icon: Component
}

export type ConsoleResourceMetric = {
  label: string
  value: string
}

export const consolePrimaryNavItems: ConsoleNavItem[] = [
  { label: 'Order Products', to: '/console/orders', icon: ClipboardList },
  { label: 'My Products', to: '/console/products', icon: Boxes },
  { label: 'Account Information', to: '/console/account', icon: UserCog },
  { label: 'Financial Information', to: '/console/finance', icon: Database },
  { label: 'Security Center', to: '/console/security', icon: ShieldCheck },
  { label: 'Resource Center', to: '/console/resources', icon: CloudCog },
  { label: 'Ticket Center', to: '/console/tickets', icon: Headphones },
  { label: 'Sub-account Management', to: '/console/sub-accounts', icon: ServerCog },
]

export const consoleUtilityNavItems: ConsoleNavItem[] = [
  { label: 'Shopping Cart', to: '/console/cart', icon: ShoppingCart },
  { label: 'Language', to: '/console/language', icon: Languages },
]

export const securityStatusItems: ConsoleStatusItem[] = [
  { title: 'Name Verification', subtitle: 'Personal ID: --', action: 'Go to verify', icon: CircleUserRound },
  { title: 'Enterprise Verification', subtitle: 'Enterprise ID: --', action: 'Go to verify', icon: Building2 },
  { title: 'Verified Phone', subtitle: '40067890', action: 'Go to verify', icon: PhoneCall },
  { title: 'Verified Email', subtitle: 'Unbound', action: 'Go to verify', icon: MailCheck },
]

export const accountShortcuts: ConsoleShortcut[] = [
  { title: 'API Logs', tone: 'blue', icon: CreditCard },
  { title: 'Sec. Groups', tone: 'warm', icon: ShieldCheck },
  { title: 'SSH Keys', tone: 'mint', icon: KeyRound },
  { title: 'API Mgmt', tone: 'violet', icon: Braces },
]

export const resourceMetrics: ConsoleResourceMetric[] = [
  { label: 'Total Products', value: '0' },
  { label: 'Active Products', value: '0' },
]

export const subscriptionColumns = [
  { prop: 'productName', label: 'PRODUCT NAME' },
  { prop: 'hostId', label: 'HOST ID', width: 250 },
  { prop: 'expirationTime', label: 'EXPIRATION TIME' },
  { prop: 'remarks', label: 'REMARKS', align: 'right' },
]
