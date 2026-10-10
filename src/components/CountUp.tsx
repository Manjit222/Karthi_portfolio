import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({ end, prefix = '', suffix = '', duration = 1400, className = '' }: CountUpProps) {
  const { ref, shown } = useReveal<HTMLParagraphElement>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shown) return
    const start = performance.now()
    let frame: number

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [shown, end, duration])

  return (
    <p ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </p>
  )
}
