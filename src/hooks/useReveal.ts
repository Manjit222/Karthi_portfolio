import { useEffect, useRef, useState } from 'react'

export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, shown }
}
