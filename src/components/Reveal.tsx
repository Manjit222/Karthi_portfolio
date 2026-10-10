import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Variant = 'up' | 'left' | 'right' | 'scale'

const HIDDEN: Record<Variant, string> = {
  up: 'translate-y-8 opacity-0',
  left: '-translate-x-8 opacity-0',
  right: 'translate-x-8 opacity-0',
  scale: 'scale-95 opacity-0',
}

interface RevealProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  variant?: Variant
}

export function Reveal({
  children,
  className = '',
  style,
  delay = 0,
  variant = 'up',
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : HIDDEN[variant]
      } ${className}`}
      style={{ ...style, transitionDelay: shown ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
