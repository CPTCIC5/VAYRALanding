'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import SpectrumBars from '@/components/ui/SpectrumBars'

const stats = [
  { value: 86, suffix: '%', label: 'Signal Classification\nAccuracy' },
  { value: 96, suffix: '%', label: 'ECM Decision\nAccuracy' },
  { value: 24, suffix: '', label: 'Modulation Types\nRecognised' },
  { value: 2.5, suffix: 'M', label: 'Signal Samples\nTrained On', decimal: true },
]

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setDisplay(parseFloat((ease * value).toFixed(decimal ? 1 : 0)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, decimal])

  return (
    <span ref={ref}>
      {decimal ? display.toFixed(1) : Math.round(display)}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#050505', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}
    >
      {/* Spectrum bars fill the background */}
      <SpectrumBars count={56} opacity={0.055} />

      <div className="relative z-10 max-w-screen-xl mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ value, suffix, label, decimal }, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 py-14 px-6 md:px-10"
              style={{ borderRight: i < stats.length - 1 ? '1px solid #1A1A1A' : 'none' }}
            >
              <span
                className="text-[clamp(3rem,5vw,5.5rem)] leading-none text-[#F0EDE8]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  textShadow: '0 0 40px rgba(200,169,110,0.2)',
                }}
              >
                <Counter value={value} suffix={suffix} decimal={decimal} />
              </span>
              <span
                className="text-[10px] tracking-[0.18em] text-[#6B6B6B] uppercase leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
