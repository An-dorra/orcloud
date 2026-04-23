export type SiteHeaderLinkItem = {
  key: string
  label: string
  to: string
  highlighted?: boolean
}

export type SiteHeaderFlatDropdown = {
  type: 'flat'
  panelWidthClass: string
  items: SiteHeaderLinkItem[]
}

export type SiteHeaderCategory = {
  key: string
  label: string
  items: SiteHeaderLinkItem[]
}

export type SiteHeaderSplitDropdown = {
  type: 'split'
  categories: SiteHeaderCategory[]
  contentGapClass: string
}

export type SiteHeaderDropdown = SiteHeaderFlatDropdown | SiteHeaderSplitDropdown

export type SiteHeaderMenuItem = {
  key: string
  label: string
  to: string
  routePrefixes?: string[]
  dropdown?: SiteHeaderDropdown
}

export const siteHeaderMenuItems: SiteHeaderMenuItem[] = [
  {
    key: 'product-center',
    label: 'Product Center',
    to: '/product-center',
    routePrefixes: ['/product-center', '/domain-registration'],
    dropdown: {
      type: 'flat',
      panelWidthClass: 'w-[838px]',
      items: [
        { key: 'cloud-servers', label: 'Cloud Servers', to: '/product-center' },
        { key: 'domain-registration', label: 'Domain Registration', to: '/domain-registration' },
      ],
    },
  },
  {
    key: 'service-guarantee',
    label: 'Service Guarantee',
    to: '/service-guarantee',
    routePrefixes: ['/service-guarantee', '/trust-center', '/data-center', '/vip-member-service'],
    dropdown: {
      type: 'split',
      contentGapClass: 'gap-x-[24px] gap-y-[24px]',
      categories: [
        {
          key: 'service-guarantee',
          label: 'Service Guarantee',
          items: [
            { key: 'service-guarantee-page', label: 'Service Guarantee', to: '/service-guarantee', highlighted: true },
            { key: 'trust-center', label: 'Trust Center', to: '/trust-center' },
            { key: 'data-center', label: 'Data Center', to: '/data-center' },
            { key: 'vip-member-service', label: 'VIP Member Service', to: '/vip-member-service' },
          ],
        },
        {
          key: 'official-announcement',
          label: 'Official Announcement',
          items: [{ key: 'official-announcement-page', label: 'Official Announcement', to: '/service-guarantee', highlighted: true }],
        },
      ],
    },
  },
  {
    key: 'solutions',
    label: 'Solutions',
    to: '/',
    dropdown: {
      type: 'split',
      contentGapClass: 'gap-x-[12px] gap-y-[12px]',
      categories: [
        {
          key: 'general-solution',
          label: 'General Solution',
          items: [
            { key: 'cloud-server-deployment', label: 'Cloud Server Deployment', to: '/', highlighted: true },
            { key: 'highly-available-architecture', label: 'Highly Available Architecture', to: '/' },
            { key: 'data-backup-recovery', label: 'Data Backup and Recovery', to: '/' },
            { key: 'safety-protection', label: 'Safety Protection', to: '/' },
            { key: 'flexible-expansion', label: 'Flexible Expansion', to: '/' },
            { key: 'automated-deployment', label: 'Automated Deployment', to: '/' },
          ],
        },
        {
          key: 'industry-solutions',
          label: 'Industry Solutions',
          items: [
            { key: 'website-cloud-solutions', label: 'Website Cloud Solutions', to: '/', highlighted: true },
            { key: 'ecommerce-cloud-solutions', label: 'E-commerce Cloud Solutions', to: '/' },
            { key: 'financial-cloud-solutions', label: 'Financial Cloud Solutions', to: '/' },
            { key: 'game-cloud-solutions', label: 'Game Cloud Solutions', to: '/' },
            { key: 'mobile-cloud-solutions', label: 'Mobile Cloud Solutions', to: '/' },
            { key: 'education-cloud-solutions', label: 'Education Cloud Solutions', to: '/' },
            { key: 'medical-cloud-solutions', label: 'Medical Cloud Solutions', to: '/' },
          ],
        },
      ],
    },
  },
  {
    key: 'ecological-cooperation',
    label: 'Ecological Cooperation',
    to: '/',
  },
  {
    key: 'about-us',
    label: 'About Us',
    to: '/about',
    routePrefixes: ['/about'],
  },
]
