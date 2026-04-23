import { onBeforeUnmount, onMounted, type Ref } from 'vue'

export function useScrollReveal(rootRef: Ref<HTMLElement | null>) {
  let revealObserver: IntersectionObserver | undefined

  onMounted(() => {
    const root = rootRef.value
    const revealElements = Array.from(root?.querySelectorAll<HTMLElement>('.reveal-on-scroll, .reveal-media') ?? [])

    if (!root || !revealElements.length) {
      return
    }

    if (
      import.meta.env.MODE === 'test' ||
      typeof window.matchMedia !== 'function' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealElements.forEach((element) => revealObserver?.observe(element))
  })

  onBeforeUnmount(() => {
    revealObserver?.disconnect()
  })
}
