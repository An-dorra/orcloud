import globalComplianceGlobe from '@/assets/service-guarantee/pillars/global-compliance-globe.png'
import directEngineerBars from '@/assets/service-guarantee/pillars/direct-engineer-bars.png'
import zeroKnowledgeIllustration from '@/assets/service-guarantee/pillars/zero-knowledge-illustration.png'
import serviceCtaLeft from '@/assets/service-guarantee/cta/cta-line-background-left.png'
import serviceCtaRight from '@/assets/service-guarantee/cta/cta-line-background-right.png'
import iconBareMetalIsolation from '@/assets/service-guarantee/verifiability/icon-bare-metal-isolation.png'
import iconCertifiedSovereign from '@/assets/service-guarantee/verifiability/icon-certified-sovereign.png'
import iconDarkFiberBackbone from '@/assets/service-guarantee/verifiability/icon-dark-fiber-backbone.png'
import iconNvmeFirstStorage from '@/assets/service-guarantee/verifiability/icon-nvme-first-storage.png'
import serverRackHero from '@/assets/service-guarantee/verifiability/server-rack-hero.png'

export const serviceGuaranteeMetrics = [
  { label: 'SYSTEM UPTIME', value: '99.9%+', caption: 'Real-time status', statusDot: true },
  { label: 'RESPONSE TIME', value: '<20ms', caption: 'Global average latency' },
  { label: 'THROUGHPUT', value: '100T/s', caption: 'Transactional intelligence capacity' },
  { label: 'NODES', value: 'Global', caption: 'Edge distribution network' },
]

export const serviceGuaranteeVerifiabilityItems = [
  {
    iconSrc: iconBareMetalIsolation,
    title: 'Bare Metal Isolation',
    description: 'No noisy neighbors. Guaranteed resource allocation on a per-cycle basis.',
  },
  {
    iconSrc: iconNvmeFirstStorage,
    title: 'NVMe-First Storage',
    description: 'Every volume sits on Tier-0 enterprise storage with persistent IOPS guarantees.',
  },
  {
    iconSrc: iconDarkFiberBackbone,
    title: 'Dark Fiber Backbone',
    description: 'Proprietary low-latency routing across our global data centers.',
  },
  {
    iconSrc: iconCertifiedSovereign,
    title: 'Certified Sovereign',
    description: 'Our infrastructure meets the strict data residency requirements for government and finance sectors.',
  },
]

export const serviceGuaranteeAssets = {
  globalComplianceGlobe,
  directEngineerBars,
  zeroKnowledgeIllustration,
  serverRackHero,
  serviceCtaLeft,
  serviceCtaRight,
}
