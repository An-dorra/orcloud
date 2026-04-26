import { onBeforeUnmount, onMounted, type Ref } from 'vue'

export function useScrollReveal(rootRef: Ref<HTMLElement | null>) {
  let revealObserver: IntersectionObserver | undefined
  const visibilityThreshold = 0.16
  const preloadViewportRatio = 0.1

  function revealIfAlreadyInView(element: HTMLElement) {
    const rect = element.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0
    const preloadOffset = viewportHeight * preloadViewportRatio

    if (rect.width <= 0 || rect.height <= 0 || viewportHeight <= 0 || viewportWidth <= 0) {
      return false
    }

    const visibleHeight = Math.min(rect.bottom, viewportHeight + preloadOffset) - Math.max(rect.top, 0)
    const visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0)

    if (visibleHeight <= 0 || visibleWidth <= 0) {
      return false
    }

    const visibleArea = visibleHeight * visibleWidth
    const totalArea = rect.width * rect.height

    if (totalArea <= 0) {
      return false
    }

    if (visibleArea / totalArea < visibilityThreshold) {
      return false
    }

    element.classList.add('is-visible')
    return true
  }

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

    const pendingElements = revealElements.filter((element) => !revealIfAlreadyInView(element))

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
        threshold: visibilityThreshold,
        rootMargin: `0px 0px ${Math.round(preloadViewportRatio * 100)}% 0px`,
      },
    )

    pendingElements.forEach((element) => revealObserver?.observe(element))
  })

  onBeforeUnmount(() => {
    revealObserver?.disconnect()
  })
}
