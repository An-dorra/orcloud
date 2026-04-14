import certificationCloudSecurity from '@/assets/images/certification-cloud-security.png'
import certificationDataCompliance from '@/assets/images/certification-data-compliance.png'
import certificationInfrastructureAudit from '@/assets/images/certification-infrastructure-audit.png'
import certificationSecurityAlliance from '@/assets/images/certification-security-alliance.png'
import certificationSocTwo from '@/assets/images/certification-soc-two.png'
import certificationTrustedCloud from '@/assets/images/certification-trusted-cloud.png'
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
  specs: string[]
  price: string
  period: string
  featured?: boolean
}

export interface IndustryCard {
  title: string
  image: string
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
  },
  {
    title: 'Personal basic funds',
    description: 'Small WordPress, mini program backend, low visit.',
    specs: ['2 vCPU / 2GB RAM', '20GB SSD Storage', '1TB Data Transfer'],
    price: '$32',
    period: '/ year',
  },
  {
    title: 'Light Business',
    description: 'Optimized for growing SMBs and complex web portals.',
    specs: ['2 vCPU / 4GB RAM', '80GB NVMe Storage', 'Unlimited Bandwidth'],
    price: '$41',
    period: '/ month',
    featured: true,
  },
  {
    title: 'General Enterprise',
    description: 'Corporate Official Websites, Simple CRM/ERP, Medium-scale Databases.',
    specs: ['8 vCPU / 16GB RAM', '250GB Enterprise SSD', '10Gbps Network Port'],
    price: '$174',
    period: '/ month',
  },
  {
    title: 'General Enterprise',
    description: 'Medium E-commerce, Distributed Apps, Basic Data Storage',
    specs: ['8 vCPU / 16GB RAM', '250GB Enterprise SSD', '10Gbps Network Port'],
    price: '194',
    period: '/ year',
  },
]

export const industryCards: IndustryCard[] = [
  { title: 'Website Building', image: industryWeb3VrPortrait, active: true },
  { title: 'Cloud Security', image: industryFinanceNetworkPortrait },
  { title: 'AI Applications', image: industryCpuComputingPortrait },
  { title: 'E-commerce', image: industryCommerceBagPortrait },
  { title: 'Cloud Gaming', image: industryGamesConsolePortrait },
]

export const marketplaceServices = [
  {
    title: 'Server O&M',
    description: 'Professional maintenance and optimization services for complex server architectures.',
    active: true,
  },
  { title: 'Data Processing' },
  { title: 'Website Building' },
  { title: '400 Phone Service' },
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
