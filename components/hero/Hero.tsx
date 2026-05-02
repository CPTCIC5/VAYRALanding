'use client'

import dynamic from 'next/dynamic'
import { motion, useScroll } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import RadarOverlay from './RadarOverlay'

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

const headlineLines = ['ELECTROMAGNETIC', 'DOMINANCE.']

export default function Hero() {
  const { scrollY } = useScroll()
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    return scrollY.on('change', (v) => setShowScroll(v < 80))
  }, [scrollY])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden scanlines">
      {/* Three.js — atmospheric background */}
      <HeroScene />

      {/* Radar + missile overlay */}
      <RadarOverlay />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 30% 50%, transparent 20%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.95) 100%)',
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
      />

      <div className="relative z-10 w-full section-padding pt-28 pb-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl">

            {/* Classification label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]" style={{ boxShadow: '0 0 6px #C8A96E' }} />
              <span
                className="text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                COGNITIVE ELECTRONIC WARFARE — INDIA
              </span>
            </motion.div>

            {/* Headline — clip-path reveal */}
            <div className="mb-2">
              {headlineLines.map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{ clipPath: 'inset(0 0 100% 0)' }}
                    animate={{ clipPath: 'inset(0 0 0% 0)' }}
                    transition={{ delay: 0.4 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="leading-[0.92] text-[#F0EDE8]"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(4rem, 10vw, 9.5rem)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ clipPath: 'inset(0 0 0% 0)' }}
                  transition={{ delay: 0.76, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-[0.92] text-[#C8A96E]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(4rem, 10vw, 9.5rem)',
                    letterSpacing: '0.01em',
                  }}
                >
                  MADE IN INDIA.
                </motion.h1>
              </div>
            </div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-7 text-[#6B6B6B] leading-relaxed max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
            >
              The next war will be won in the spectrum
              before a single shot is fired.
              <br />
              VAYRA builds the AI that sees it first.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button variant="gold" href="#mission">OUR MISSION →</Button>
              <Button variant="outline" href="#contact">TALK TO US</Button>
            </motion.div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
              className="mt-12 h-px bg-[#C8A96E] origin-left"
              style={{ maxWidth: 120, opacity: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] tracking-[0.35em] text-[#6B6B6B]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          SCROLL
        </span>
        <div
          className="w-px h-8 bg-[#C8A96E]"
          style={{ opacity: 0.4, animation: 'scrollPulse 1.8s ease-in-out infinite' }}
        />
      </motion.div>
    </section>
  )
}
