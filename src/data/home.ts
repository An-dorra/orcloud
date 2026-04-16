import certificationCloudSecurity from '@/assets/images/certification-cloud-security.png'
import certificationDataCompliance from '@/assets/images/certification-data-compliance.png'
import certificationInfrastructureAudit from '@/assets/images/certification-infrastructure-audit.png'
import certificationSecurityAlliance from '@/assets/images/certification-security-alliance.png'
import certificationSocTwo from '@/assets/images/certification-soc-two.png'
import certificationTrustedCloud from '@/assets/images/certification-trusted-cloud.png'
import iconMarketServiceBuild from '@/assets/icons/icon-market-service-build.png'
import iconMarketServiceData from '@/assets/icons/icon-market-service-data.png'
import iconMarketServiceOps from '@/assets/icons/icon-market-service-ops.png'
import iconMarketServicePhone from '@/assets/icons/icon-market-service-phone.png'
import industryCommerceBagPortrait from '@/assets/images/industry-commerce-bag-portrait.jpg'
import industryCpuComputingPortrait from '@/assets/images/industry-cpu-computing-portrait.jpg'
import industryFinanceNetworkPortrait from '@/assets/images/industry-finance-network-portrait.jpg'
import industryGamesConsolePortrait from '@/assets/images/industry-games-console-portrait.jpg'
import industryWeb3VrPortrait from '@/assets/images/industry-web3-vr-portrait.jpg'
import newsAiTalentNetwork from '@/assets/images/news-ai-talent-network.png'
import newsCloudSecurityProtocol from '@/assets/images/news-cloud-security-protocol.png'
import newsDataCenterGrowth from '@/assets/images/news-data-center-growth.png'
import newsHongKongSkyline from '@/assets/images/news-hong-kong-skyline.png'
import newsServerCorridorNodes from '@/assets/images/news-server-corridor-nodes.png'

export interface ProductPlan {
  title: string
  description: string
  descriptionWidth?: number
  specs: string[]
  price: string
  period: string
  cardHeight?: number
  highlightedCardHeight?: number
  contentAlign?: 'left' | 'center'
  specTextWeight?: 'light' | 'regular'
  featured?: boolean
}

export interface IndustryCard {
  title: string
  image: string
  description?: string
  ctaLabel?: string
  active?: boolean
}

export interface NewsCard {
  title: string
  image: string
  date: string
}

export const valueCards = [
  {
    title: 'Special Cloud Servers',
    description: 'Enterprise-grade performance with optimized latency for global operations.',
  },
  {
    title: 'Registration Gifts',
    description: 'Claim your 10 CNY voucher upon sign-up. Exclusive first-time user perks.',
  },
  {
    title: 'Professional Support',
    description: '24/7 online technical assistance from our team of cloud certified engineers.',
  },
  {
    title: 'About OrCloud',
    description: 'Learn about our mission to redefine cloud reliability and innovation globally.',
  },
]

export const productPlans: ProductPlan[] = [
  {
    title: 'Ultra Entry Plan',
    description: 'Personal Blogs, Text-only Websites, Code Testing Environments',
    specs: ['1 vCPU / 1GB RAM', '20GB SSD Storage', '1TB Data Transfer'],
    price: '$20',
    period: 'month',
    cardHeight: 422,
    contentAlign: 'left',
    specTextWeight: 'regular',
  },
  {
    title: 'Personal basic funds',
    description: 'Small WordPress, mini program backend, low visit.',
    specs: ['2 vCPU / 2GB RAM', '20GB SSD Storage', '1TB Data Transfer'],
    price: '$32',
    period: '/ year',
    cardHeight: 415,
    contentAlign: 'center',
    specTextWeight: 'regular',
  },
  {
    title: 'Light Business',
    description: 'Optimized for growing SMBs and complex web portals.',
    specs: ['2 vCPU / 4GB RAM', '80GB NVMe Storage', 'Unlimited Bandwidth'],
    price: '$41',
    period: '/ month',
    cardHeight: 422,
    highlightedCardHeight: 475,
    contentAlign: 'left',
    specTextWeight: 'light',
    featured: true,
  },
  {
    title: 'General Enterprise',
    description: 'Corporate Official Websites, Simple\nCRM/ERP, Medium-scale Databases.',
    descriptionWidth: 356,
    specs: ['8 vCPU / 16GB RAM', '250GB Enterprise SSD', '10Gbps Network Port'],
    price: '$174',
    period: '/ month',
    cardHeight: 422,
    contentAlign: 'left',
    specTextWeight: 'light',
  },
  {
    title: 'General Enterprise',
    description: 'Medium E-commerce, Distributed Apps, Basic Data Storage',
    specs: ['8 vCPU / 16GB RAM', '250GB Enterprise SSD', '10Gbps Network Port'],
    price: '194',
    period: '/ year',
    cardHeight: 422,
    contentAlign: 'center',
    specTextWeight: 'light',
  },
]

export const industryCards: IndustryCard[] = [
  {
    title: 'Website Hosting Solution',
    description:
      'Ensure 99.99% availability with global elastic infrastructure. Seamlessly scale from startup to enterprise using intelligent load balancing and auto-scaling-delivering fast, stable, secure experiences worldwide.',
    ctaLabel: 'Consult Now',
    image: industryWeb3VrPortrait,
    active: true,
  },
  {
    title: 'Financial\nGrade Cloud',
    description:
      'Built for high-stakes environments, our financial-grade cloud delivers ultra-low latency, high reliability, and strict data security. Supports real-time transactions, risk control, and compliance with enterprise-level architecture-designed for modern fintech and digital asset platforms.',
    image: industryFinanceNetworkPortrait,
  },
  {
    title: 'Mobile Cloud',
    description:
      'Empower mobile apps with high-performance cloud acceleration and global edge distribution. Optimize responsiveness, reduce latency, and ensure smooth user experiences worldwide-ideal for social, streaming, and real-time interactive services.',
    image: industryCpuComputingPortrait,
  },
  {
    title: 'E-commerce\nAcceleration',
    description:
      'Boost e-commerce performance with scalable infrastructure and intelligent traffic management-handle peak campaign traffic without downtime and enhance conversion rates through faster load times and stable transactions.',
    image: industryCommerceBagPortrait,
  },
  {
    title: 'Global Gaming\nNetwork',
    description:
      'Low-latency global networking + real-time sync for immersive gaming-multiplayer, fast matchmaking, stable cross-region. Built for next-gen games, from casual to massive online worlds.',
    image: industryGamesConsolePortrait,
  },
]

export const marketplaceServices = [
  {
    title: 'Server O&M',
    description: 'Professional maintenance and optimization services for complex server architectures.',
    icon: iconMarketServiceOps,
    active: true,
  },
  { title: 'Data Processing', icon: iconMarketServiceData },
  { title: 'Website Building', icon: iconMarketServiceBuild },
  { title: '400 Phone Service', icon: iconMarketServicePhone },
]

export const stats = [
  { value: 'N', label: 'Global centers' },
  { value: '26', label: 'Geographic areas' },
  { value: '2800+', label: 'Accelerated nodes' },
]

export const certificationLogos = [
  certificationInfrastructureAudit,
  certificationTrustedCloud,
  certificationCloudSecurity,
  certificationDataCompliance,
  certificationSocTwo,
  certificationSecurityAlliance,
]

export const newsCards: NewsCard[] = [
  {
    title: 'HK Computing Power Target: Expanding Global High- Performance Cluster',
    image: newsHongKongSkyline,
    date: '2026/3/27',
  },
  {
    title: 'Data center growth reaches record milestone in Southeast Asia expansion.',
    image: newsDataCenterGrowth,
    date: '2026/3/27',
  },
  {
    title: 'New financial cloud security protocol released for enterprise partners.',
    image: newsCloudSecurityProtocol,
    date: '2026/3/27',
  },
  {
    title: 'Hong Kong-GBA Cloud Providers: Uniting for Cross-Border Cloud Synergy',
    image: newsServerCorridorNodes,
    date: '2026/3/27',
  },
  {
    title: 'Hong Kong-GBA Collaboration: Jointly Building a Cross-Border System for AI Talent & Tech Synergy',
    image: newsAiTalentNetwork,
    date: '2026/3/27',
  },
]
