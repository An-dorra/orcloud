import corporateWebsite from '@/assets/domain-registration/use-cases/corporate-website.png'
import ecommerceWebsite from '@/assets/domain-registration/use-cases/ecommerce-website.png'
import personalBrand from '@/assets/domain-registration/use-cases/personal-brand.png'
import saasProduct from '@/assets/domain-registration/use-cases/saas-product.png'
import web3AiBase from '@/assets/domain-registration/use-cases/web3-ai-base.png'
import web3AiOverlay from '@/assets/domain-registration/use-cases/web3-ai-overlay.png'
import facilityCompute from '@/assets/data-center/facilities/facility-high-density-compute.png'
import facilityCooling from '@/assets/data-center/facilities/facility-sustainable-cooling.png'
import facilitySecurity from '@/assets/data-center/facilities/facility-multi-layer-security.png'
import financeNetwork from '@/assets/images/industry-finance-network-wide.jpg'
import gamesConsole from '@/assets/images/industry-games-console-wide.jpg'
import commerceBag from '@/assets/images/industry-commerce-bag-wide.jpg'
import cloudSecurity from '@/assets/images/news-cloud-security-protocol.png'
import serverCorridor from '@/assets/images/news-server-corridor-nodes.png'
import aiTalent from '@/assets/images/news-ai-talent-network.png'

export type SolutionKind = 'general' | 'industry'

export type SolutionCard = {
  title: string
  description: string
  image?: string
}

export type SolutionPageData = {
  slug: string
  kind: SolutionKind
  menuLabel: string
  title: string
  description: string
  introTitle: string
  introDescription: string
  introStats?: Array<{ label: string; value: string }>
  painPoints: Array<{ title: string; description: string }>
  features: SolutionCard[]
  architectureTitle: string
  architectureDescription: string
  architectureSteps: Array<{ title: string; description: string }>
  scenariosTitle: string
  scenariosDescription: string
  scenarios: SolutionCard[]
  advantageTitle?: string
  advantages?: SolutionCard[]
  metricsTitle?: string
  metrics?: Array<{ value: string; label: string; description: string }>
  ctaTitle: string
  ctaDescription: string
  figmaNodeId: string
}

const commonGeneralImages = [corporateWebsite, saasProduct, web3AiBase, personalBrand]
const commonIndustryImages = [facilityCompute, ecommerceWebsite, financeNetwork, gamesConsole]

export const solutionPages: Record<string, SolutionPageData> = {
  'cloud-server-deployment': {
    slug: 'cloud-server-deployment',
    kind: 'general',
    menuLabel: 'Cloud Server Deployment',
    title: 'Cloud Server Deployment',
    description:
      'Provide standardized cloud server resources for fast deployment from development to production. Scale your operations with the precision of "The Pristine Cloud."',
    introTitle: 'Simplified Infrastructure Management',
    introDescription: 'Our solution eliminates slow deployments, complexity, waste, and poor scalability, so you code while we stabilize.',
    introStats: [
      { label: 'Uptime Guarantee', value: '99.9%' },
      { label: 'Avg. Spin-up Time', value: '3min' },
      { label: 'Expert Support', value: '24/7' },
      { label: 'Edge Availability', value: 'Global' },
    ],
    painPoints: [
      { title: 'Lower deployment barrier', description: 'Standardized environments shorten the path from idea to production.' },
      { title: 'Faster time to launch', description: 'Automated provisioning removes manual setup and repeated configuration.' },
      { title: 'Cost efficiency', description: 'Right-size compute and storage without overbuying infrastructure.' },
      { title: 'Scalable growth', description: 'Expand from a single service to multi-layer cloud architecture.' },
    ],
    features: [
      { title: 'Standardized Resources', description: 'Pre-configured enterprise-grade hardware and software stacks optimized for immediate use.' },
      { title: 'Fast Deployment', description: 'Spin up new instances in minutes with automated provisioning and orchestration tools.' },
      { title: 'Flexible Configuration', description: 'Tailor CPU, memory, and storage to workload needs without vendor lock-in.' },
      { title: 'Stable Operation', description: 'High-availability architecture with continuous monitoring and automated failover protocols.' },
    ],
    architectureTitle: 'Scalable 3-Layer Architecture',
    architectureDescription:
      'The architecture separates user access, cloud compute, and storage/network layers to keep services stable during traffic surges.',
    architectureSteps: [
      { title: 'User Layer', description: 'Unified access entry for applications and APIs.' },
      { title: 'Cloud Server Layer', description: 'Elastic compute instances process business workloads.' },
      { title: 'Storage & Network Layer', description: 'Persistent storage and global networking protect data flow.' },
    ],
    scenariosTitle: 'Deployment Scenarios',
    scenariosDescription: 'Optimized for diverse enterprise needs and modern application requirements.',
    scenarios: [
      { title: 'Corporate Website', description: 'Reliable hosting for high-traffic business portals and mission-critical sites.', image: corporateWebsite },
      { title: 'Application Services', description: 'Robust backends for mobile and web applications with seamless scaling.', image: saasProduct },
      { title: 'Development & Testing', description: 'Isolated environments for rapid software iteration and collaborative dev cycles.', image: web3AiBase },
      { title: 'Startup Projects', description: 'Scalable infrastructure that grows with your business from day one to exit.', image: personalBrand },
    ],
    ctaTitle: 'Start your cloud deployment today',
    ctaDescription: 'Join thousands of enterprises already building on Origins Cloud. Your scalable future starts with a single click.',
    figmaNodeId: '919:3387',
  },
  'high-availability-architecture': {
    slug: 'high-availability-architecture',
    kind: 'general',
    menuLabel: 'High Availability Architecture',
    title: 'High Availability Architecture',
    description:
      'Ensure continuous and reliable service operation with a resilient cloud architecture. Multi-node deployment and automatic failover keep your business thriving.',
    introTitle: 'Redefining Resilience',
    introDescription:
      'Modern digital landscapes demand zero downtime. We eliminate systemic weaknesses so services remain resilient against hardware failure and traffic anomalies.',
    painPoints: [
      { title: 'Eliminate Single Points', description: 'Decentralize core service nodes across multiple zones.' },
      { title: 'Traffic Spikes', description: 'Absorb demand surges with elastic scaling and intelligent load management.' },
    ],
    features: [
      { title: 'Multi-node Deployment', description: 'Distribute workloads across geographically diverse nodes to prevent localized outages.' },
      { title: 'Automatic Failover', description: 'Reroute traffic to healthy instances the moment failure is detected.' },
      { title: 'Traffic Distribution', description: 'Optimized load balancing prevents any single server from being overwhelmed.' },
      { title: 'Continuous Monitoring', description: 'Real-time telemetry and health checks provide total infrastructure visibility.' },
    ],
    architectureTitle: 'The Resilience Blueprint',
    architectureDescription: 'A technical look at how traffic is balanced across redundant compute and storage paths.',
    architectureSteps: [
      { title: 'User', description: 'Requests enter through monitored access points.' },
      { title: 'Load Balancer', description: 'Traffic is distributed to healthy nodes.' },
      { title: 'Multiple Servers', description: 'Node A, B, and C provide active capacity.' },
      { title: 'Storage', description: 'Persistent state remains available through failure.' },
    ],
    scenariosTitle: 'Availability Scenarios',
    scenariosDescription: 'Built for services where downtime directly affects revenue, safety, or trust.',
    scenarios: [
      { title: 'High-traffic websites', description: 'Handle massive concurrent users during flash sales or global events.', image: serverCorridor },
      { title: 'Core business systems', description: 'Keep ERP and financial processing systems online 24/7.', image: facilityCompute },
      { title: '24/7 services', description: 'Critical healthcare or logistics platforms where uptime is tied to safety.', image: facilitySecurity },
      { title: 'SaaS platforms', description: 'Deliver consistent SLAs to a global customer base.', image: saasProduct },
    ],
    ctaTitle: 'Build always-on services with Origins Cloud',
    ctaDescription: 'Protect user trust and business continuity with resilient cloud architecture.',
    figmaNodeId: '950:5371',
  },
  'backup-and-recovery': {
    slug: 'backup-and-recovery',
    kind: 'general',
    menuLabel: 'Data Backup and Recovery',
    title: 'Backup & Recovery',
    description:
      'Protect your data and ensure rapid recovery from unexpected failures. Provide automated backup and fast recovery to protect business continuity through immutable cloud infrastructure.',
    introTitle: 'Enterprise Data Continuity',
    introDescription:
      "In an era of rising cyber threats and complex systems, simple backups are not enough. We address the critical pain points of modern data management.",
    painPoints: [
      { title: 'Human Error', description: 'Protect against accidental deletions or misconfigurations with instant rollback.' },
      { title: 'System Failure', description: 'Resilience against hardware malfunctions and provider disruptions.' },
      { title: 'Cyber Attacks', description: 'Immutable backups cannot be modified or encrypted by attackers.' },
      { title: 'Slow Recovery', description: 'Automated restoration workflows reduce downtime.' },
    ],
    features: [
      { title: 'Automated Backup', description: 'Schedule-based automation captures every byte with no manual steps.' },
      { title: 'Fast Recovery', description: 'Rapid activation of recovery workflows during system failures.' },
      { title: 'Version Management', description: 'Point-in-time recovery with version history across storage tiers.' },
      { title: 'Data Protection', description: 'AES-256 encryption at rest and in transit, plus MFA for recovery.' },
    ],
    architectureTitle: 'Seamless Data Architecture',
    architectureDescription: 'A transparent look into how Origins Cloud handles data flow from source to immutable storage.',
    architectureSteps: [
      { title: 'Source Node', description: 'Production data is captured at the origin.' },
      { title: 'Primary Disk', description: 'Local state is snapshotted safely.' },
      { title: 'Logic Engine', description: 'Policies validate retention and recovery rules.' },
      { title: 'Immutable Cloud', description: 'Backup objects are locked against tampering.' },
      { title: 'Rapid Restoration', description: 'Recovery paths restore operations quickly.' },
    ],
    scenariosTitle: 'Recovery Scenarios',
    scenariosDescription: 'Protect critical systems from accidental, operational, and external failures.',
    scenarios: [
      { title: 'Database Protection', description: 'Transactional integrity for SQL and NoSQL with hot backup support.', image: serverCorridor },
      { title: 'Website Recovery', description: 'Automatic restoration for web applications and CMS platforms.', image: corporateWebsite },
      { title: 'Operational Rollback', description: 'Revert production environments to any point in time.', image: cloudSecurity },
      { title: 'Disaster Recovery', description: 'Cross-region replication maintains availability during outages.', image: facilitySecurity },
    ],
    ctaTitle: 'Make recovery a built-in capability',
    ctaDescription: 'Protect business continuity with automated, immutable backup workflows.',
    figmaNodeId: '1059:1244',
  },
  'security-protection': {
    slug: 'security-protection',
    kind: 'general',
    menuLabel: 'Security Protection',
    title: 'Security Protection',
    description:
      'Comprehensive protection for your cloud applications and infrastructure. Provide traffic filtering, access control, and anomaly detection to protect services from attacks.',
    introTitle: 'The Shield Against Modern Threats',
    introDescription:
      'Origins Cloud Security Solution uses intelligent automation and multi-layered defense to improve stability and reduce operational risks.',
    introStats: [
      { label: 'Attack Mitigation', value: '99.9%' },
      { label: 'Latency Impact', value: '<10ms' },
    ],
    painPoints: [
      { title: 'Traffic Protection', description: 'High-capacity DDoS mitigation and web application firewall capabilities.' },
      { title: 'Access Control', description: 'Granular identity management and network isolation policies.' },
      { title: 'Anomaly Detection', description: 'AI-powered behavior analysis identifies stealthy threats.' },
      { title: 'Security Hardening', description: 'Hardened OS images and automated vulnerability scanning.' },
    ],
    features: [
      { title: 'Traffic Protection', description: 'High-capacity DDoS mitigation and advanced web application firewall capabilities.' },
      { title: 'Access Control', description: 'Zero-trust identity controls and isolated network policies.' },
      { title: 'Anomaly Detection', description: 'Real-time monitoring powered by AI to identify stealthy threats.' },
      { title: 'Security Hardening', description: 'Continuous vulnerability scanning across all layers.' },
    ],
    architectureTitle: 'Advanced Security Architecture',
    architectureDescription: 'Incoming traffic is scrubbed and verified at the edge before reaching core resources.',
    architectureSteps: [
      { title: 'Public Traffic', description: 'Every request enters through the security perimeter.' },
      { title: 'Security Layer', description: 'WAF, DDoS mitigation, and IAM inspect traffic.' },
      { title: 'Cloud Server', description: 'Only verified requests reach application compute.' },
      { title: 'Secure Data', description: 'Protected data stays isolated behind access controls.' },
    ],
    scenariosTitle: 'Protection Scenarios',
    scenariosDescription: 'Designed for public applications, sensitive data, and multi-user systems.',
    scenarios: [
      { title: 'Web application protection', description: 'Shield customer-facing apps from exploits and bots.', image: cloudSecurity },
      { title: 'Public-facing services', description: 'Secure APIs and public portals with rate limiting.', image: serverCorridor },
      { title: 'High-risk business', description: 'Strong protection for finance and sensitive data.', image: financeNetwork },
      { title: 'Multi-user platforms', description: 'Strict controls for complex user and permission models.', image: aiTalent },
    ],
    ctaTitle: 'Secure every layer before threats arrive',
    ctaDescription: 'Deploy a cloud security posture built for modern applications.',
    figmaNodeId: '1090:2552',
  },
  'flexible-expansion': {
    slug: 'flexible-expansion',
    kind: 'general',
    menuLabel: 'Flexible Expansion',
    title: 'Flexible Expansion',
    description:
      'Scale resources dynamically as traffic changes. Origins Cloud provides elasticity as a core solution for cost precision and stable performance.',
    introTitle: 'The Elasticity Imperative',
    introDescription:
      'Static infrastructure wastes resources during quiet hours and degrades during surges. Origins Cloud anticipates demand and optimizes distribution in real time.',
    painPoints: [
      { title: 'No More Slowness', description: 'Instant scaling prevents bottlenecks during critical spikes.' },
      { title: 'Cost Precision', description: 'Pay only for the compute you actually consume.' },
    ],
    features: [
      { title: 'Dynamic Scaling', description: 'Automatically increase resources during peak demand.' },
      { title: 'Elastic Reduction', description: 'Scale back during low usage to eliminate waste.' },
      { title: 'Flexible Configuration', description: 'Tailor compute, memory, and storage to workload requirements.' },
      { title: 'Load Adaptation', description: 'Real-time adjustment based on live metrics and health indicators.' },
    ],
    architectureTitle: 'Architectural Precision',
    architectureDescription: 'A proprietary scheduler orchestrates provisioning with millisecond latency.',
    architectureSteps: [
      { title: 'Traffic', description: 'Live demand signals feed the monitoring layer.' },
      { title: 'Monitoring', description: 'Telemetry tracks CPU, memory, and network throughput.' },
      { title: 'Scheduler', description: 'The engine determines the optimal resource quantity.' },
      { title: 'Provisioned Resources', description: 'Compute clusters deploy or terminate automatically.' },
    ],
    scenariosTitle: 'Elasticity Scenarios',
    scenariosDescription: 'Right-sized for businesses with uneven demand and growth curves.',
    scenarios: [
      { title: 'Traffic Spikes', description: 'Handle flash sales, breaking news, or global events with low latency.', image: aiTalent },
      { title: 'Growing Businesses', description: 'Expand infrastructure as your user base grows.', image: saasProduct },
      { title: 'Periodic Workloads', description: 'Run batch processing and seasonal tasks with heavy compute.', image: facilityCompute },
      { title: 'Internet Platforms', description: 'Scale complex, multi-user systems and social networks.', image: web3AiOverlay },
    ],
    ctaTitle: 'Scale without overcommitting',
    ctaDescription: 'Match infrastructure spend to real demand while keeping user experience stable.',
    figmaNodeId: '1117:6274',
  },
  'website-solutions': {
    slug: 'website-solutions',
    kind: 'industry',
    menuLabel: 'Website Solutions',
    title: 'Website Solutions',
    description:
      'Reliable and high-performance cloud solutions for modern websites. Help businesses build stable, secure, and scalable website infrastructure.',
    introTitle: 'Overcoming Infrastructure Hurdles',
    introDescription: 'Legacy hosting creates bottlenecks. We solve the fundamental challenges of modern web operations.',
    painPoints: [
      { title: 'Slow Performance', description: 'Eliminate lag and high bounce rates caused by unoptimized hardware.' },
      { title: 'System Instability', description: 'Prevent unexpected downtime during critical business hours.' },
      { title: 'Complex Operations', description: 'Reduce technical overhead of managing server clusters manually.' },
      { title: 'Security Risks', description: 'Defend against DDoS attacks and data breaches.' },
    ],
    features: [
      { title: 'High-Density Compute', description: 'Optimized compute for high-volume web workloads.', image: facilityCompute },
      { title: 'High-traffic Platforms', description: 'Scale instantly during traffic spikes without losing users.', image: corporateWebsite },
      { title: 'Multi-site Management', description: 'Centralized control for complex portfolios of web assets.', image: web3AiBase },
      { title: 'Global Access Websites', description: 'Low-latency delivery across continents.', image: web3AiOverlay },
    ],
    architectureTitle: 'The Solution Stack',
    architectureDescription: 'Holistic components engineered for a pristine web experience.',
    architectureSteps: [
      { title: 'Acceleration Layer (CDN)', description: 'Global content delivery serves assets from the nearest edge.' },
      { title: 'High-performance Cloud Servers', description: 'Compute-optimized instances with NVMe storage.' },
      { title: 'High Availability', description: 'Multi-AZ deployment removes single points of failure.' },
      { title: 'Security Protection', description: 'Enterprise WAF and DDoS mitigation built into every layer.' },
    ],
    scenariosTitle: 'Technical Advantages',
    scenariosDescription: 'Infrastructure benefits that improve site speed, reliability, and operations.',
    scenarios: [
      { title: 'Fast Deployment', description: 'Spin up full web environments in under 60 seconds.' },
      { title: 'Stable Operation', description: 'AI-powered predictive monitoring prevents failures.' },
      { title: 'Scalable Infrastructure', description: 'Elastic resources grow automatically with traffic.' },
      { title: 'Easy Management', description: 'Unified control plane for all web deployments.' },
    ],
    advantageTitle: 'Business Value',
    advantages: [
      { title: 'Better Performance', description: 'Higher search rankings and improved core web vitals.' },
      { title: 'Reduced Downtime', description: 'Protect revenue with 24/7 infrastructure resilience.' },
      { title: 'Improved User Experience', description: 'Friction-free digital interactions foster brand loyalty.' },
      { title: 'Supports Growth', description: 'Future-proof your business with global scale.' },
    ],
    ctaTitle: 'Launch a faster website foundation',
    ctaDescription: 'Move your website to a stable, secure, globally distributed cloud platform.',
    figmaNodeId: '1122:2664',
  },
  'e-commerce-solutions': {
    slug: 'e-commerce-solutions',
    kind: 'industry',
    menuLabel: 'E-commerce Solutions',
    title: 'E-commerce Solutions',
    description:
      'Reliable and scalable cloud infrastructure for e-commerce platforms. Support high traffic, order processing, and stable online store operations.',
    introTitle: 'Overcoming the Barriers to E-commerce Growth',
    introDescription: 'Retail systems need concurrency, stability, speed, and security in the same architecture.',
    painPoints: [
      { title: 'High Concurrency', description: 'Traditional servers fail during peak buyer interest.' },
      { title: 'System Instability', description: 'Downtime during load shifts leads to lost revenue.' },
      { title: 'Slow Performance', description: 'Laggy pages directly affect conversion and SEO.' },
      { title: 'Security Risks', description: 'Fragmented security leads to breaches and fraud.' },
    ],
    features: [
      { title: 'Online Stores', description: 'Infrastructure for seamless browsing and checkout.', image: ecommerceWebsite },
      { title: 'Promotion Campaigns', description: 'Handle flash sales and holiday traffic spikes.', image: commerceBag },
      { title: 'Cross-border E-commerce', description: 'Global low-latency access and secure expansion.', image: web3AiOverlay },
      { title: 'New Retail Systems', description: 'Integrate online storefronts with offline inventory.', image: facilityCompute },
    ],
    architectureTitle: 'The Solution Stack',
    architectureDescription: 'Precision-engineered cloud components designed for retail.',
    architectureSteps: [
      { title: 'High-performance Computing', description: 'GPU and CPU clusters support inventory, pricing, and recommendations.' },
      { title: 'Elastic Scaling', description: 'Scale up for midnight drops and down for quiet hours.' },
      { title: 'High Availability', description: 'Multi-node redundancy keeps stores online.' },
      { title: 'Security Protection', description: 'Integrated L7 DDoS mitigation protects every transaction.' },
    ],
    scenariosTitle: 'Optimized Architecture',
    scenariosDescription: 'Origins Cloud handles concurrent shoppers through routing and distributed processing.',
    scenarios: [
      { title: 'Acceleration Layer', description: 'Edge CDN nodes globally distribute static assets.' },
      { title: 'E-commerce App Layer', description: 'Elastic compute clusters process orders and business logic.' },
      { title: 'Distributed Database', description: 'Data layer handles high-volume reads and writes.' },
    ],
    metricsTitle: 'Business Results',
    metrics: [
      { value: '100%', label: 'Traffic Capacity', description: 'Handles extreme high traffic without quality degradation.' },
      { value: '99.9%', label: 'Stable Transactions', description: 'Protects checkout reliability through peak traffic.' },
      { value: '25%', label: 'Higher Conversion', description: 'Faster load times and fewer errors complete more sales.' },
      { value: '3.5x', label: 'Scalable Growth', description: 'Infrastructure supports rapid market expansion.' },
    ],
    ctaTitle: 'Build commerce that stays fast under pressure',
    ctaDescription: 'Run campaigns, checkout, and customer journeys on a cloud stack designed for conversion.',
    figmaNodeId: '1142:3548',
  },
  'financial-solutions': {
    slug: 'financial-solutions',
    kind: 'industry',
    menuLabel: 'Financial Solutions',
    title: 'Financial Solutions',
    description:
      'Secure and reliable cloud infrastructure for financial services. Support trading systems, payment platforms, and financial services with high security and stability.',
    introTitle: 'Addressing Critical Pain Points',
    introDescription: 'Financial workloads need hardened infrastructure, predictable latency, and strict compliance controls.',
    painPoints: [
      { title: 'High security risks', description: 'Mitigate cyber threats and unauthorized data access in real time.' },
      { title: 'System instability impact', description: 'Prevent financial losses caused by legacy downtime.' },
      { title: 'High concurrency pressure', description: 'Manage transaction spikes during peak market volatility.' },
      { title: 'Compliance requirements', description: 'Automate adherence to evolving global regulations.' },
    ],
    features: [
      { title: 'Trading systems', description: 'Low-latency execution and high-frequency data processing.', image: financeNetwork },
      { title: 'Payment platforms', description: 'Reliable transaction routing and settlement infrastructure.', image: commerceBag },
      { title: 'Financial services', description: 'Scalable backend services for banking and insurance.', image: web3AiBase },
      { title: 'High-security systems', description: 'Isolated environments for sensitive keys and records.', image: cloudSecurity },
    ],
    architectureTitle: 'Financial Flow Architecture',
    architectureDescription: 'Proprietary logic for real-time processing and hardened security.',
    architectureSteps: [
      { title: 'Security First', description: 'Requests undergo verification and packet inspection before reaching the core.' },
      { title: 'Real-time Processing', description: 'Optimized kernel bypass and RDMA enable microsecond latency.' },
      { title: 'Financial System', description: 'Core processing logic and engines run in isolated capacity.' },
      { title: 'Database', description: 'Immutable ledger and cold storage protect records.' },
    ],
    scenariosTitle: 'Technical Advantages',
    scenariosDescription: 'Financial-grade controls across compute, security, and data layers.',
    scenarios: [
      { title: 'Strong security', description: 'Hardened kernel and isolated VPC environments.' },
      { title: 'Stable operation', description: 'Redundant infrastructure with self-healing capabilities.' },
      { title: 'Real-time processing', description: 'Millisecond response for high-volume transactions.' },
      { title: 'Reliable data', description: 'Multiple replicas and strong consistency models.' },
    ],
    metricsTitle: 'Business Outcomes',
    metrics: [
      { value: '75%', label: 'Reduced risk', description: 'Lower security incidents and compliance breaches.' },
      { value: '99.9%', label: 'Improved reliability', description: 'Consistent uptime during market events.' },
      { value: '10x', label: 'Higher throughput', description: 'Increased capacity for future scaling.' },
      { value: 'Trust', label: 'Increased trust', description: 'Enhanced reputation through stronger security.' },
    ],
    ctaTitle: 'Protect financial workloads with confidence',
    ctaDescription: 'Deploy secure, compliant, high-performance infrastructure for financial systems.',
    figmaNodeId: '1150:4756',
  },
  'gaming-solutions': {
    slug: 'gaming-solutions',
    kind: 'industry',
    menuLabel: 'Gaming Solutions',
    title: 'Gaming Solutions',
    description:
      'Reliable and scalable cloud infrastructure for modern games. Support low latency, high concurrency, and global publishing for online game services.',
    introTitle: 'Overcoming the Invisible Lag',
    introDescription: 'Legacy infrastructure fails to meet the demands of modern synchronous gameplay. We solve the core friction points.',
    painPoints: [
      { title: 'High latency', description: 'Reduce ping spikes that ruin immersion and competitive fairness.' },
      { title: 'Concurrency pressure', description: 'Avoid crashes during peak events and viral launches.' },
      { title: 'Unstable servers', description: 'Reduce maintenance and hardware failures.' },
      { title: 'Global access issues', description: 'Improve cross-continental connectivity and jitter.' },
    ],
    features: [
      { title: 'Online games', description: 'Massively multiplayer environments with world-sharding.', image: gamesConsole },
      { title: 'Mobile game backend', description: 'Global entry points optimized for mobile networks.', image: web3AiOverlay },
      { title: 'Real-time comp games', description: 'Synchronization for shooters, MOBAs, and fighting games.', image: facilityCompute },
      { title: 'Global game publishing', description: 'Fast delivery and regional compliance for rollouts.', image: aiTalent },
      { title: 'Smooth gameplay', description: 'Eliminate lag spikes with a low-latency backbone.', image: serverCorridor },
      { title: 'Stable servers', description: 'Dedicated hardware instances for critical workloads.', image: facilitySecurity },
      { title: 'Supports large player base', description: 'Autoscaling groups react to player influx.', image: web3AiBase },
      { title: 'Optimized global access', description: 'Anycast routing sends players to the nearest region.', image: personalBrand },
    ],
    architectureTitle: 'Gaming Flow Architecture',
    architectureDescription: 'Global edge nodes reduce the hop distance between players and processing clusters.',
    architectureSteps: [
      { title: 'Network Optimization', description: 'Traffic is routed through regional game hubs.' },
      { title: 'Game servers', description: 'Dedicated game clusters process real-time sessions.' },
      { title: 'Player', description: 'Players connect to the nearest stable endpoint.' },
      { title: 'Data Sync', description: 'State sync keeps worlds consistent globally.' },
    ],
    scenariosTitle: 'Gaming Advantages',
    scenariosDescription: 'Built for competitive, social, and persistent online experiences.',
    scenarios: [
      { title: 'Global infrastructure', description: '150+ edge nodes in core gaming hubs worldwide.' },
      { title: 'High Concurrency', description: 'Elastic scaling handles millions of simultaneous connections.' },
    ],
    metricsTitle: 'Player Experience Results',
    metrics: [
      { value: '30%', label: 'Better Experience', description: 'Increase in player satisfaction after migration.' },
      { value: '-45ms', label: 'Reduced Latency', description: 'Average reduction in round-trip time.' },
      { value: '22%', label: 'Improved Retention', description: 'Higher day-30 retention due to stability.' },
      { value: 'Infinite', label: 'Scalable Growth', description: 'Ready to scale from 100 to 1,000,000 players.' },
    ],
    ctaTitle: 'Give players a faster global experience',
    ctaDescription: 'Scale game infrastructure without sacrificing latency, stability, or launch velocity.',
    figmaNodeId: '1165:7087',
  },
}

export const solutionPageList = Object.values(solutionPages)
