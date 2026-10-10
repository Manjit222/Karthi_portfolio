import { useEffect, useRef, useState } from 'react'

const RENDER_WIDTH = 1440
const RENDER_HEIGHT = 2600

interface LiveSitePreviewProps {
  url: string
  title: string
  className?: string
}

export function LiveSitePreview({ url, title, className = '' }: LiveSitePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateScale = () => setScale(container.clientWidth / RENDER_WIDTH)
    updateScale()

    const observer = new ResizeObserver(updateScale)
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track || scale === 0) return

    const visibleHeight = container.clientHeight / scale
    const distance = Math.max(0, RENDER_HEIGHT - visibleHeight)
    if (distance === 0) return

    const animation = track.animate(
      [
        { transform: 'translateY(0px)', offset: 0 },
        { transform: 'translateY(0px)', offset: 0.1 },
        { transform: `translateY(-${distance}px)`, offset: 0.9 },
        { transform: `translateY(-${distance}px)`, offset: 1 },
      ],
      { duration: 16000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' },
    )
    return () => animation.cancel()
  }, [scale])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        style={{
          width: RENDER_WIDTH,
          height: RENDER_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        <div ref={trackRef}>
          <iframe
            src={url}
            title={title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            className="pointer-events-none block border-0"
            style={{ width: RENDER_WIDTH, height: RENDER_HEIGHT }}
          />
        </div>
      </div>
    </div>
  )
}
