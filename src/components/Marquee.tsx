import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Marquee({ children, speed = 18, className = '' }: MarqueeProps) {
  return (
    <div className={`group overflow-hidden ${className}`}>
      <div
        className="flex w-max gap-2.5 group-hover:![animation-play-state:paused]"
        style={{ animation: `marquee-left ${speed}s linear infinite` }}
      >
        <div className="flex gap-2.5">{children}</div>
        <div className="flex gap-2.5" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
