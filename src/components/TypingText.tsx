import { useEffect, useState } from 'react'

interface Segment {
  text: string
  className?: string
}

interface TypingTextProps {
  segments: Segment[]
  start: boolean
  speed?: number
  className?: string
}

export function TypingText({ segments, start, speed = 45, className = '' }: TypingTextProps) {
  const full = segments.map((s) => s.text).join('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start || count >= full.length) return
    const timeout = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(timeout)
  }, [start, count, full.length, speed])

  let consumed = 0
  const done = count >= full.length

  return (
    <span className={className}>
      {segments.map((seg, i) => {
        const segStart = consumed
        consumed += seg.text.length
        const visible = Math.max(0, Math.min(seg.text.length, count - segStart))
        return (
          <span key={i} className={seg.className}>
            {seg.text.slice(0, visible)}
          </span>
        )
      })}
      <span
        className="ml-0.5 inline-block w-[2px] bg-current align-middle"
        style={{
          height: '0.9em',
          opacity: done ? 0 : 1,
          animation: done ? 'none' : 'blink 1s step-end infinite',
        }}
      />
    </span>
  )
}
