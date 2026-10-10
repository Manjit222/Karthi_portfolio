import type { CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealWordsProps {
  text: string
  className?: string
  style?: CSSProperties
  wordDelay?: number
}

export function RevealWords({ text, className = '', style, wordDelay = 70 }: RevealWordsProps) {
  const { ref, shown } = useReveal<HTMLSpanElement>()
  const words = text.split(' ')

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block transition-all duration-700 ease-out"
            style={{
              transform: shown ? 'translateY(0)' : 'translateY(110%)',
              opacity: shown ? 1 : 0,
              transitionDelay: `${i * wordDelay}ms`,
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </span>
  )
}
