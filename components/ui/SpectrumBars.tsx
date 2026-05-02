'use client'

import { useMemo } from 'react'

interface SpectrumBarsProps {
  count?: number
  className?: string
  opacity?: number
}

export default function SpectrumBars({ count = 52, className = '', opacity = 0.07 }: SpectrumBarsProps) {
  const bars = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      peak: (0.15 + Math.random() * 0.85).toFixed(2),
      delay: (Math.random() * 2.5).toFixed(2),
      duration: (0.7 + Math.random() * 1.6).toFixed(2),
      height: Math.floor(20 + Math.random() * 60),
    })), [count])

  return (
    <div
      className={`absolute inset-0 flex items-end justify-center gap-[2px] pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      {bars.map((b, i) => (
        <div
          key={i}
          className="flex-none w-[3px] bg-[#C8A96E] rounded-t-sm origin-bottom"
          style={{
            height: `${b.height}%`,
            '--bar-peak': b.peak,
            animation: `specPulse ${b.duration}s ease-in-out ${b.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
