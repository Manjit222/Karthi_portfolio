import { useEffect, useRef } from 'react'

interface HalftoneTextProps {
  text: string
  className?: string
  fontWeight?: number
  colorFrom?: string
  colorTo?: string
  dotSpacing?: number
}

function hexToRgb(hex: string) {
  const sanitized = hex.replace('#', '')
  const bigint = parseInt(sanitized, 16)
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 }
}

export function HalftoneText({
  text,
  className,
  fontWeight = 800,
  colorFrom = '#f5f6fa',
  colorTo = '#3b63f6',
  dotSpacing = 6,
}: HalftoneTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const canvas = canvasRef.current
    if (!wrapper || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const render = () => {
      const width = wrapper.clientWidth
      const height = wrapper.clientHeight
      if (width === 0 || height === 0) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      const off = document.createElement('canvas')
      off.width = width
      off.height = height
      const offCtx = off.getContext('2d')
      if (!offCtx) return

      let fontSize = height * 0.9
      const maxWidth = width * 0.94
      offCtx.font = `${fontWeight} ${fontSize}px Inter, sans-serif`
      while (offCtx.measureText(text).width > maxWidth && fontSize > 10) {
        fontSize -= 2
        offCtx.font = `${fontWeight} ${fontSize}px Inter, sans-serif`
      }

      offCtx.fillStyle = '#fff'
      offCtx.textBaseline = 'middle'
      offCtx.textAlign = 'center'
      offCtx.fillText(text, width / 2, height / 2)

      const imageData = offCtx.getImageData(0, 0, width, height).data

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const from = hexToRgb(colorFrom)
      const to = hexToRgb(colorTo)

      for (let y = 0; y < height; y += dotSpacing) {
        for (let x = 0; x < width; x += dotSpacing) {
          const alpha = imageData[(y * width + x) * 4 + 3] / 255
          if (alpha < 0.15) continue

          const t = x / width
          const r = from.r + (to.r - from.r) * t
          const g = from.g + (to.g - from.g) * t
          const b = from.b + (to.b - from.b) * t
          const radius = Math.max((dotSpacing / 2) * 0.85 * alpha, 0.6)

          ctx.beginPath()
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, alpha + 0.2)})`
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    render()
    const observer = new ResizeObserver(render)
    observer.observe(wrapper)
    return () => observer.disconnect()
  }, [text, fontWeight, colorFrom, colorTo, dotSpacing])

  return (
    <div ref={wrapperRef} className={className}>
      <canvas ref={canvasRef} />
    </div>
  )
}
