import afterSalesPhaseIcon from '@/assets/vip-member-service/phases/after-sales-phase-icon.svg'
import inSalesPhaseIcon from '@/assets/vip-member-service/phases/in-sales-phase-icon.svg'
import preSalesPhaseIcon from '@/assets/vip-member-service/phases/pre-sales-phase-icon.svg'
import eligibleScenariosCardBackground from '@/assets/vip-member-service/guarantee/eligible-scenarios-card-background.png'
import eligibleScenariosStatusIcon from '@/assets/vip-member-service/guarantee/eligible-scenarios-status-icon.svg'
import excludedScenariosCardBackground from '@/assets/vip-member-service/guarantee/excluded-scenarios-card-background.png'
import excludedScenariosStatusIcon from '@/assets/vip-member-service/guarantee/excluded-scenarios-status-icon.svg'
import faqChevronIcon from '@/assets/vip-member-service/icp/faq-chevron-icon.svg'
import icpProcessStepConnector from '@/assets/vip-member-service/icp/icp-process-step-connector.svg'
import initiateStepIcon from '@/assets/vip-member-service/refund/initiate-step-icon.svg'
import refundedStepIcon from '@/assets/vip-member-service/refund/refunded-step-icon.svg'
import approveStepIcon from '@/assets/vip-member-service/refund/approve-step-icon.svg'
import verifyStepIcon from '@/assets/vip-member-service/refund/verify-step-icon.svg'
import membershipCardAccentIcon from '@/assets/vip-member-service/overview/membership-card-accent-icon.svg'
import noIcpNeededIcon from '@/assets/vip-member-service/overview/no-icp-needed-icon.svg'
import oneDayIcpIcon from '@/assets/vip-member-service/overview/one-day-icp-icon.svg'
import refundWindowCardBackground from '@/assets/vip-member-service/overview/refund-window-card-background.png'
import fullTimeSupportIcon from '@/assets/vip-member-service/overview/full-time-support-icon.svg'
import slaCareIcon from '@/assets/vip-member-service/overview/sla-care-icon.svg'
import vipSupportAccentIcon from '@/assets/vip-member-service/overview/vip-support-accent-icon.svg'

export const vipMembershipHero = {
  title: 'VIP Membership Services',
  description:
    "Elevate your cloud operations with Origins Cloud's bespoke VIP support ecosystem. Experience elite efficiency, proactive infrastructure health monitoring, and a dedicated team committed to your long-term success.",
}

export type VipServiceStageCardItem = {
  iconSrc: string
  title: string
  description: string
  bullets: string[]
}

export const vipServiceStageCards: VipServiceStageCardItem[] = [
  {
    iconSrc: preSalesPhaseIcon,
    title: 'Pre-Sales Phase',
    description:
      'Personalized architecture consulting and professional training sessions to align your cloud strategy with business goals.',
    bullets: ['Strategy Workshops', 'Systems Audit'],
  },
  {
    iconSrc: inSalesPhaseIcon,
    title: 'In-Sales Phase',
    description:
      'Seamless deployment monitoring,order verification, and instant confirmation for rapid resource provisioning.',
    bullets: ['Rapid Onboarding', 'Priority Deployment'],
  },
  {
    iconSrc: afterSalesPhaseIcon,
    title: 'After-Sales Phase',
    description:
      'Ongoing maintenance, security updates, and performance tuning to ensure long-term stability and ROI.',
    bullets: ['24/7 Monitoring', 'Quarterly Reviews'],
  },
] 

export type VipIcpProcessStep = {
  number: string
  title: string
  description: string
  highlighted?: boolean
}

export const vipIcpProcessSteps: VipIcpProcessStep[] = [
  {
    number: '1',
    title: 'System Entry',
    description: 'Data input and initial documentation',
  },
  {
    number: '2',
    title: 'Review',
    description: 'Expert validation of filing materials',
  },
  {
    number: '3',
    title: 'Approval',
    description: 'Provincial communication authority',
  },
  {
    number: '4',
    title: 'Completed',
    description: 'Launch-ready infrastructure',
    highlighted: true,
  },
]

export const vipFaqItems = ['Processing Time?', 'Site Shutdown Required?', 'Photo Requirements?'] as const

export type VipGuaranteeMetric = {
  value: string
  label: string
}

export const vipGuaranteeMetrics: VipGuaranteeMetric[] = [
  { value: '99.999%', label: 'DATA RELIABILITY' },
  { value: '99.95%', label: 'NETWORK AVAILABILITY' },
]

export type VipGuaranteeCard = {
  backgroundSrc: string
  iconSrc: string
  title: string
  description: string
}

export const vipGuaranteeCards: VipGuaranteeCard[] = [
  {
    backgroundSrc: eligibleScenariosCardBackground,
    iconSrc: eligibleScenariosStatusIcon,
    title: 'Eligible Scenarios',
    description: 'Hardware failure, backbone network congestion, platform-side software bugs.',
  },
  {
    backgroundSrc: excludedScenariosCardBackground,
    iconSrc: excludedScenariosStatusIcon,
    title: 'Excluded Scenarios',
    description: 'User code errors, DDOS attacks exceeding purchased limits, scheduled maintenance.',
  },
]

export type VipRefundProcessStep = {
  iconSrc: string
  title: string
  highlighted?: boolean
}

export const vipRefundProcessSteps: VipRefundProcessStep[] = [
  {
    iconSrc: initiateStepIcon,
    title: 'INITIATE',
  },
  {
    iconSrc: verifyStepIcon,
    title: 'VERIFY',
  },
  {
    iconSrc: approveStepIcon,
    title: 'APPROVE',
  },
  {
    iconSrc: refundedStepIcon,
    title: 'REFUNDED',
    highlighted: true,
  },
]

export type VipMembershipOverviewCard = {
  title: string
  description: string
  widthClass: string
  iconSrc?: string
  accentIconSrc?: string
  backgroundSrc?: string
  dark?: boolean
}

export const vipMembershipOverviewCards: VipMembershipOverviewCard[] = [
  {
    title: 'VIP 1-to-1 Support',
    description: 'A dedicated engineer assigned specifically to your account infrastructure.',
    widthClass: 'w-[832px]',
    accentIconSrc: vipSupportAccentIcon,
  },
  {
    title: '1-Day ICP',
    description: 'Rapid document review and processing.',
    widthClass: 'w-[408px]',
    iconSrc: oneDayIcpIcon,
  },
  {
    title: '24/7/365',
    description: 'Continuous technical vigilance.',
    widthClass: 'w-[408px]',
    iconSrc: fullTimeSupportIcon,
  },
  {
    title: 'No ICP Needed',
    description: 'Global regions available without ICP filing requirements.',
    widthClass: 'w-[408px]',
    iconSrc: noIcpNeededIcon,
  },
  {
    title: 'SLA+ Care',
    description: 'Enhanced uptime guarantees.',
    widthClass: 'w-[408px]',
    iconSrc: slaCareIcon,
  },
  {
    title: '5-Day Refund Window',
    description: 'Extended confidence period for premium enterprise customers.',
    widthClass: 'w-[832px]',
    backgroundSrc: refundWindowCardBackground,
    accentIconSrc: membershipCardAccentIcon,
    dark: true,
  },
]

export const vipMemberServiceAssets = {
  faqChevronIcon,
  icpProcessStepConnector,
}
