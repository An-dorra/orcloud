export interface NavigationItem {
  label: string
  to: string
}

// Navigation items are shared so layout components do not hard-code route labels.
export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
]
