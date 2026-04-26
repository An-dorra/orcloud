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
    routePrefixes: ['/service-guarantee', '/trust-center', '/data-center', '/vip-member-service', '/official-announcements'],
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
          items: [{ key: 'official-announcement-page', label: 'Official Announcement', to: '/official-announcements', highlighted: true }],
        },
      ],
    },
  },
  {
    key: 'solutions',
    label: 'Solutions',
    to: '/',
    routePrefixes: ['/solutions'],
    dropdown: {
      type: 'split',
      contentGapClass: 'gap-x-[12px] gap-y-[12px]',
      categories: [
        {
          key: 'general-solution',
          label: 'General Solution',
          items: [
            { key: 'cloud-server-deployment', label: 'Cloud Server Deployment', to: '/solutions/cloud-server-deployment', highlighted: true },
            { key: 'highly-available-architecture', label: 'High Availability Architecture', to: '/solutions/high-availability-architecture' },
            { key: 'data-backup-recovery', label: 'Data Backup and Recovery', to: '/solutions/backup-and-recovery' },
            { key: 'safety-protection', label: 'Security Protection', to: '/solutions/security-protection' },
            { key: 'flexible-expansion', label: 'Flexible Expansion', to: '/solutions/flexible-expansion' },
            { key: 'automated-deployment', label: 'Automated Deployment', to: '/' },
          ],
        },
        {
          key: 'industry-solutions',
          label: 'Industry Solutions',
          items: [
            { key: 'website-cloud-solutions', label: 'Website Solutions', to: '/solutions/website-solutions', highlighted: true },
            { key: 'ecommerce-cloud-solutions', label: 'E-commerce Solutions', to: '/solutions/e-commerce-solutions' },
            { key: 'financial-cloud-solutions', label: 'Financial Solutions', to: '/solutions/financial-solutions' },
            { key: 'game-cloud-solutions', label: 'Gaming Solutions', to: '/solutions/gaming-solutions' },
            { key: 'mobile-cloud-solutions', label: 'Mobile Solutions', to: '/' },
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
