import facilityHighDensityCompute from '@/assets/data-center/facilities/facility-high-density-compute.png'
import facilityMultiLayerSecurity from '@/assets/data-center/facilities/facility-multi-layer-security.png'
import facilitySustainableCooling from '@/assets/data-center/facilities/facility-sustainable-cooling.png'
import dataCenterCtaBackgroundLeft from '@/assets/data-center/cta/data-center-cta-background-left.png'
import dataCenterCtaBackgroundRight from '@/assets/data-center/cta/data-center-cta-background-right.png'
import chinaDataCenterMap from '@/assets/data-center/presence/china-data-center-map.svg'
import presenceTimelineDivider from '@/assets/data-center/presence/presence-timeline-divider.svg'
import reliabilityIconExpertOps from '@/assets/data-center/reliability/reliability-icon-expert-ops.png'
import reliabilityIconLatency from '@/assets/data-center/reliability/reliability-icon-latency.png'
import reliabilityIconRedundancy from '@/assets/data-center/reliability/reliability-icon-redundancy.png'

export const dataCenterPresenceItems = [
  {
    title: 'Shenzhen Hub',
    description: 'Tier 4 Facility | 50MW Capacity',
  },
  {
    title: 'Inner Mongolia Node',
    description: 'Eco-friendly Cooling | AI Optimized',
  },
  {
    title: 'Hong Kong Gateway',
    description: 'Global Connectivity Hub | Low Latency',
  },
  {
    title: 'Dalian Edge',
    description: 'North-East Regional Edge Node',
  },
]

export const dataCenterFacilityCards = [
  {
    imageSrc: facilityHighDensityCompute,
    title: 'High-Density Compute',
    description: 'Optimized for NVIDIA H100/A100 clusters and large-scale AI model training.',
  },
  {
    imageSrc: facilitySustainableCooling,
    title: 'Sustainable Cooling',
    description: 'Advanced liquid cooling and heat recovery systems achieving PUE below 1.2.',
  },
  {
    imageSrc: facilityMultiLayerSecurity,
    title: 'Multi-Layer Security',
    description: 'Biometric access, 24/7 onsite security, and complete network isolation protocols.',
  },
]

export const dataCenterReliabilityStats = [
  {
    label: 'SERVICE STABILITY',
    value: '99.9%',
  },
  {
    label: 'AVERAGE PUE',
    value: '1.18',
  },
  {
    label: 'GLOBAL PEERING',
    value: '100+',
  },
  {
    label: 'NOC MONITORING',
    value: '24/7',
  },
]

export const dataCenterReliabilityFeatures = [
  {
    iconSrc: reliabilityIconRedundancy,
    title: 'N+1 Redundancy',
    description: 'All critical systems including UPS, generators, and cooling are fully redundant to prevent single points of failure.',
    titleWidthClass: 'w-[206px]',
    descriptionWidthClass: 'w-[730px]',
  },
  {
    iconSrc: reliabilityIconLatency,
    title: 'Low Latency Fabric',
    description: 'Proprietary dark fiber rings interconnecting all major nodes for sub-10ms inter-datacenter latency.',
    titleWidthClass: 'w-[256px]',
    descriptionWidthClass: 'w-[730px]',
  },
  {
    iconSrc: reliabilityIconExpertOps,
    title: '24/7 Expert Ops',
    description: 'A dedicated team of infrastructure engineers monitoring system health every second of every day.',
    titleWidthClass: 'w-[189px]',
    descriptionWidthClass: 'w-[730px]',
  },
]

export const dataCenterAssets = {
  chinaDataCenterMap,
  presenceTimelineDivider,
  dataCenterCtaBackgroundLeft,
  dataCenterCtaBackgroundRight,
}
