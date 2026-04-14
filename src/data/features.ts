export interface FeatureCard {
  eyebrow: string
  title: string
  description: string
}

// Centralized card content keeps repeated feature UI reusable and data-driven.
export const featureCards: FeatureCard[] = [
  {
    eyebrow: 'Structure',
    title: 'Component-first layout',
    description: 'Base, layout, and feature components are separated so each layer has a clear job.',
  },
  {
    eyebrow: 'Styling',
    title: 'Tailwind-ready system',
    description: 'Utility classes live in Vue templates while shared global behavior stays in one CSS entry.',
  },
  {
    eyebrow: 'Routing',
    title: 'Router included',
    description: 'Named routes make navigation predictable and easy to extend as the app grows.',
  },
]
