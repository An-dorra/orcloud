import featureDomainManagement from '@/assets/domain-registration/features/domain-management.svg'
import featureDomainRegistration from '@/assets/domain-registration/features/domain-registration.svg'
import featureDomainResolution from '@/assets/domain-registration/features/domain-resolution.svg'
import featureSecurityProtection from '@/assets/domain-registration/features/security-protection.svg'
import certCompliance from '@/assets/domain-registration/infrastructure/infrastructure-compliance-icon.svg'
import certShield from '@/assets/domain-registration/infrastructure/infrastructure-shield-icon.svg'
import stepConfigure from '@/assets/domain-registration/steps/step-configure.svg'
import stepMarker from '@/assets/domain-registration/steps/step-marker.svg'
import stepRegister from '@/assets/domain-registration/steps/step-register.svg'
import stepSearch from '@/assets/domain-registration/steps/step-search.svg'
import useCaseCorporateWebsite from '@/assets/domain-registration/use-cases/corporate-website.png'
import useCaseEcommerceWebsite from '@/assets/domain-registration/use-cases/ecommerce-website.png'
import useCasePersonalBrand from '@/assets/domain-registration/use-cases/personal-brand.png'
import useCaseSaasProduct from '@/assets/domain-registration/use-cases/saas-product.png'
import useCaseWeb3AiBase from '@/assets/domain-registration/use-cases/web3-ai-base.png'
import useCaseWeb3AiOverlay from '@/assets/domain-registration/use-cases/web3-ai-overlay.png'

export type DomainPriceCard = {
  extension: string
  description: string
  firstYearPrice: string
  renewalPrice: string
}

export type DomainFeature = {
  title: string
  description: string
  tone: 'blue' | 'teal' | 'sky' | 'violet'
  iconSrc: string
}

export type DomainStep = {
  step: string
  title: string
  description: string
  tone: 'blue' | 'violet' | 'orange'
  iconSrc: string
}

export type DomainUseCase = {
  title: string
  description: string
  tone: 'sky' | 'copper' | 'indigo' | 'blue' | 'slate'
  imageSrc: string
  overlaySrc?: string
}

export const domainPriceCards: DomainPriceCard[] = [
  {
    extension: '.com',
    description: 'Classic generic domain, the global top choice for business.',
    firstYearPrice: '$66 / First Year',
    renewalPrice: 'Renewal Price:$90 / year',
  },
  {
    extension: '.cn',
    description: "China's ccTLD – top choice for local business.",
    firstYearPrice: '$66 / First Year',
    renewalPrice: 'Renewal Price:$90 / year',
  },
  {
    extension: '.net',
    description: 'Top choice for internet services and technology websites.',
    firstYearPrice: '$66 / First Year',
    renewalPrice: 'Renewal Price:$90 / year',
  },
  {
    extension: '.top',
    description: 'Break conventions, worry‑free domains',
    firstYearPrice: '$66 / First Year',
    renewalPrice: 'Renewal Price:$90 / year',
  },
]

export const domainFeatures: DomainFeature[] = [
  {
    title: 'Domain Registration',
    description:
      'Extremely simplified registration process. Enter a name, choose an extension, complete payment and ownership assignment within minutes, and start your digital journey immediately.',
    tone: 'blue',
    iconSrc: featureDomainRegistration,
  },
  {
    title: 'Domain Resolution',
    description:
      'Utilizes highly available Anycast DNS technology with multi-line intelligent resolution. Provides optimal access paths based on different ISPs and geographic locations.',
    tone: 'teal',
    iconSrc: featureDomainResolution,
  },
  {
    title: 'Domain Management',
    description:
      'Supports batch renewal, auto-renewal settings, and group management. Provides detailed change history logs to ensure transparent and traceable management processes.',
    tone: 'sky',
    iconSrc: featureDomainManagement,
  },
  {
    title: 'Security Protection',
    description:
      'Includes WHOIS privacy protection, domain lock, and DNSSEC security extensions. Prevents unauthorized transfers and malicious attacks, safeguarding brand equity.',
    tone: 'violet',
    iconSrc: featureSecurityProtection,
  },
]

export const domainSteps: DomainStep[] = [
  {
    step: '01',
    title: 'Search for a domain',
    description: 'Enter keywords to check availability and price.',
    tone: 'blue',
    iconSrc: stepSearch,
  },
  {
    step: '02',
    title: 'Select an extension and register',
    description: 'Choose extension -> verify identity -> pay.',
    tone: 'violet',
    iconSrc: stepRegister,
  },
  {
    step: '03',
    title: 'Configure DNS and go live',
    description: 'Set DNS records to point to your server and launch your site.',
    tone: 'orange',
    iconSrc: stepConfigure,
  },
]

export const domainUseCases: DomainUseCase[] = [
  {
    title: 'Corporate Website',
    description: 'Build a professional brand image - .com.cn is your top choice.',
    tone: 'sky',
    imageSrc: useCaseCorporateWebsite,
  },
  {
    title: 'E-commerce Website',
    description: 'Attract global traffic with a stable and trusted transaction gateway.',
    tone: 'copper',
    imageSrc: useCaseEcommerceWebsite,
  },
  {
    title: 'SaaS Product',
    description: 'Focus on functionality - .io/.app showcase technological edge.',
    tone: 'indigo',
    imageSrc: useCaseSaasProduct,
  },
  {
    title: 'Web3 / AI Project',
    description: 'Lead industry trends - .ai/.xyz empower native brand innovation.',
    tone: 'blue',
    imageSrc: useCaseWeb3AiBase,
    overlaySrc: useCaseWeb3AiOverlay,
  },
  {
    title: 'Personal Brand',
    description: 'Create a unique identity - let the world see your creativity and talent.',
    tone: 'slate',
    imageSrc: useCasePersonalBrand,
  },
]

export const domainInfrastructureStats = [
  { value: '1,000+', label: 'Global Acceleration Nodes' },
  { value: '99.99%', label: 'DNS Availability Guarantee' },
  { value: '10M+', label: 'Total Hosted Domains' },
]

export const domainInfrastructureBadges = ['ISO 27001', 'SOC 2 Type II', 'GDPR Compliant']

export const domainInfrastructureIcons = [certCompliance, certShield]

export const domainStepMarkerSrc = stepMarker
