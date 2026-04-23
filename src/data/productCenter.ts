export interface ProductCenterPlan {
  title: string
  description: string
  specs: string[]
  tags: string[]
  price: string
}

export const productCenterPlans: ProductCenterPlan[] = [
  {
    title: 'Ultra Entry',
    description: 'Personal blog, text-only site, code testing environment',
    specs: ['CPU: 1 Core', 'RAM: 1 GB', 'Bandwidth: 1 Mbps'],
    tags: ['Hong Kong Cloud', '1H1G'],
    price: '3',
  },
  {
    title: 'Personal Basic',
    description: 'Small WordPress, mini program backend, low-traffic API',
    specs: ['CPU: 2 Core', 'RAM: 2 GB', 'Bandwidth: 3 Mbps'],
    tags: ['Hong Kong Cloud', '2H2G'],
    price: '4',
  },
  {
    title: 'Light Business',
    description: 'Lightweight e-commerce, personal studio collaboration tools',
    specs: ['CPU: 2 Core', 'RAM: 4 GB', 'Bandwidth: 5 Mbps'],
    tags: ['Hong Kong Cloud', '2H4G'],
    price: '6',
  },
  {
    title: 'Entry-Level Enterprise',
    description: 'Corporate website, simple CRM/ERP, medium-scale database',
    specs: ['CPU: 4 Core', 'RAM: 8 GB', 'Bandwidth: 5 Mbps'],
    tags: ['Hong Kong Cloud', '4H8G'],
    price: '26',
  },
  {
    title: 'General Enterprise',
    description: 'Mid-sized e-commerce, distributed applications, basic data storage',
    specs: ['CPU: 4 Core', 'RAM: 16 GB', 'Bandwidth: 10 Mbps'],
    tags: ['Hong Kong Cloud', '4H16G'],
    price: '29',
  },
  {
    title: 'Mid-High Performance',
    description: 'High-concurrency, analytics, sharded DB',
    specs: ['CPU: 8 Core', 'RAM: 16 GB', 'Bandwidth: 10 Mbps'],
    tags: ['Hong Kong Cloud', '8H16G'],
    price: '45',
  },
  {
    title: 'High-Perf Large RAM',
    description: 'Large database, Redis cache cluster, lightweight big data',
    specs: ['CPU: 8 Core', 'RAM: 32 GB', 'Bandwidth: 10 Mbps'],
    tags: ['Hong Kong Cloud', '8H32G'],
    price: '83',
  },
  {
    title: 'Flagship Compute',
    description: 'E-commerce flash sales, distributed cluster, transcoding',
    specs: ['CPU: 16 Core', 'RAM: 32 GB', 'Bandwidth: 20 Mbps'],
    tags: ['Hong Kong Cloud', '16H32G'],
    price: '103',
  },
  {
    title: 'Ultra Large Memory',
    description: 'Big data analytics cluster, in-memory database, ultra-large cache',
    specs: ['CPU: 8 Core', 'RAM: 64 GB', 'Bandwidth: 20 Mbps'],
    tags: ['Hong Kong Cloud', '8H64G'],
    price: '192',
  },
]
