import iconCloudSecuritySeal from '@/assets/trust-center/attestations/icon-cloud-security-seal.png'
import iconDataIntegrityShield from '@/assets/trust-center/attestations/icon-data-integrity-shield.png'
import iconGlobalPrivacyStandard from '@/assets/trust-center/attestations/icon-global-privacy-standard.png'
import iconInfrastructureHealthVerified from '@/assets/trust-center/attestations/icon-infrastructure-health-verified.png'
import iconNetworkResilienceAudit from '@/assets/trust-center/attestations/icon-network-resilience-audit.png'
import iconWeb3ProtocolCompliance from '@/assets/trust-center/attestations/icon-web3-protocol-compliance.png'
import trustedFoundationBackground from '@/assets/trust-center/cta/trusted-foundation-background.png'
import consensusLayerCard from '@/assets/trust-center/layers/consensus-layer-card.png'
import foundationLayerCard from '@/assets/trust-center/layers/foundation-layer-card.png'
import securityLayerCard from '@/assets/trust-center/layers/security-layer-card.png'
import complianceDashboardIllustration from '@/assets/trust-center/standards/compliance-dashboard-illustration.png'

export const trustCenterAttestations = [
  {
    iconSrc: iconCloudSecuritySeal,
    title: 'Cloud Security Seal',
    description: 'Comprehensive cloud security management system verification.',
  },
  {
    iconSrc: iconNetworkResilienceAudit,
    title: 'Network Resilience Audit',
    description: 'Validated failover mechanisms and packet routing integrity.',
  },
  {
    iconSrc: iconDataIntegrityShield,
    title: 'Data Integrity Shield',
    description: 'End-to-end encryption and immutable storage verification.',
  },
  {
    iconSrc: iconInfrastructureHealthVerified,
    title: 'Infrastructure Health Verified',
    description: 'Real-time hardware performance and thermal efficiency audit.',
  },
  {
    iconSrc: iconGlobalPrivacyStandard,
    title: 'Global Privacy Standard',
    description: 'Strict adherence to international data protection regulations.',
  },
  {
    iconSrc: iconWeb3ProtocolCompliance,
    title: 'Web3 Protocol Compliance',
    description: 'Validation of decentralized consensus and smart contract security.',
  },
]

export const trustCenterStandardItems = [
  {
    iconSrc: iconCloudSecuritySeal,
    title: 'Security & Data Protection',
    description: 'Military-grade encryption and access controls.',
  },
  {
    iconSrc: iconNetworkResilienceAudit,
    title: 'Infrastructure Reliability',
    description: '99.99% uptime guarantees backed by SLAs.',
  },
  {
    iconSrc: iconDataIntegrityShield,
    title: 'Continuous Auditing',
    description: 'Real-time compliance monitoring 24/7/365.',
  },
  {
    iconSrc: iconInfrastructureHealthVerified,
    title: 'Scalable Architecture',
    description: 'Certified scaling procedures for global loads.',
  },
]

export const trustCenterLayers = [
  {
    imageSrc: securityLayerCard,
    title: 'Application Layer',
    description: 'Secure AI and Web3 services through sandboxed environments and isolated workloads.',
  },
  {
    imageSrc: consensusLayerCard,
    title: 'Chain Layer',
    description: 'Immutable logs, cryptographic proofs of execution, and decentralized consensus.',
  },
  {
    imageSrc: foundationLayerCard,
    title: 'Cloud Layer',
    description: 'Global edge locations, hardware root of trust, and physical facility security.',
  },
]

export const trustCenterAssets = {
  complianceDashboardIllustration,
  trustedFoundationBackground,
}
