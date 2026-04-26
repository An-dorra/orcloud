export const officialAnnouncementsHero = {
  title: 'Official Announcements',
  description: 'Real-time updates and the latest news about Origins Cloud services. Striving for absolute transparency in cloud infrastructure.',
}

export const officialAnnouncementsTabs = [
  'Latest Notices',
  'After-Sales Services',
  'Update Announcements',
  'Technical Documentation',
] as const

export type AnnouncementTab = (typeof officialAnnouncementsTabs)[number]

export type AnnouncementItem = {
  id: string
  title: string
  category: AnnouncementTab
  day: string
  monthYear: string
  dateStr: string // "YYYY-MM-DD" used for sorting/aria
  href: string
}

export const officialAnnouncementsList: AnnouncementItem[] = [
  {
    id: '1',
    title: '102 Key Enterprises Settle in Hong Kong, Over 40 Focus on AI Driving Job Growth',
    category: 'Latest Notices',
    day: '01',
    monthYear: 'APR 2026',
    dateStr: '2026-04-01',
    href: '#',
  },
  {
    id: '2',
    title: 'Policy Support Accelerates Global Expansion of Domestic Large Models',
    category: 'Latest Notices',
    day: '01',
    monthYear: 'APR 2026',
    dateStr: '2026-04-01',
    href: '#',
  },
  {
    id: '3',
    title: 'Hong Kong and the Greater Bay Area Collaborate to Build AI Talent Systems',
    category: 'Latest Notices',
    day: '01',
    monthYear: 'APR 2026',
    dateStr: '2026-04-01',
    href: '#',
  },
  {
    id: '4',
    title: 'Cloud Providers in HK/GBA Collaborate on Cross-Border Infrastructure',
    category: 'Latest Notices',
    day: '01',
    monthYear: 'APR 2026',
    dateStr: '2026-04-01',
    href: '#',
  },
  {
    id: '5',
    title: 'Tongyi Qianwen Tops Global Open-Source Downloads, Overseas Usage Exceeds 30%',
    category: 'Latest Notices',
    day: '01',
    monthYear: 'APR 2026',
    dateStr: '2026-04-01',
    href: '#',
  },
]
