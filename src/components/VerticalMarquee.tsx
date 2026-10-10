import type { ReactNode } from 'react'

interface VerticalMarqueeProps {
  children: ReactNode
  direction?: 'up' | 'down'
  speed?: number
  className?: string
}

export function VerticalMarquee({
  children,
  direction = 'up',
  speed = 30,
  className = '',
}: VerticalMarqueeProps) {
  const anim = direction === 'up' ? 'marquee-up' : 'marquee-down'

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex flex-col gap-4"
        style={{ animation: `${anim} ${speed}s linear infinite` }}
      >
        <div className="flex flex-col gap-4">{children}</div>
        <div className="flex flex-col gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
