'use client'

import dynamic from 'next/dynamic'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
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

      {/* Hero layout */}
      <div
        className="relative z-10 w-full"
        style={{
          paddingTop: 'clamp(7rem, 12vh, 10rem)',
          paddingBottom: 'clamp(5rem, 10vh, 8rem)',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div
          className="max-w-7xl mx-auto flex items-stretch justify-between"
          style={{ gap: 'clamp(2rem, 4vw, 4rem)' }}
        >

          {/* ── LEFT ── */}
          <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: 620 }}>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3"
              style={{ marginBottom: 'var(--space-lg)' }}
            >
              <span
                className="text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                SOVEREIGN AI FOR THE ELECTROMAGNETIC AGE // BUILD 0.1
              </span>
            </motion.div>

            <div style={{ marginBottom: 'var(--space-sm)' }}>
              {headlineLines.map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{ clipPath: 'inset(0 0 100% 0)' }}
                    animate={{ clipPath: 'inset(0 0 0% 0)' }}
                    transition={{ delay: 0.4 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="leading-[0.92] text-[#F0EDE8]"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(3.5rem, 8.5vw, 8.5rem)',
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
                    fontSize: 'clamp(3.5rem, 8.5vw, 8.5rem)',
                    letterSpacing: '0.01em',
                  }}
                >
                  MADE IN INDIA.
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-[#6B6B6B] leading-relaxed max-w-lg"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                marginTop: 'var(--space-lg)',
              }}
            >
              India cannot import its electromagnetic sovereignty.
              <br />
              VAYRA is building the AI-native defence technology
              company that ensures it doesn't have to.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4"
              style={{ marginTop: 'var(--space-xl)' }}
            >
              <Button variant="gold" href="#thesis">THE THESIS →</Button>
              <Button variant="outline" href="#contact">TALK TO US</Button>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
              className="h-px bg-[#C8A96E] origin-left"
              style={{ maxWidth: 120, opacity: 0.3, marginTop: 'var(--space-xl)' }}
            />
          </div>

          {/* ── RIGHT: Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-shrink-0"
            style={{
              width: 'clamp(320px, 26vw, 420px)',
              flexDirection: 'column',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            {/* Details */}
            <PanelSection label="Details">
              <DetailRow label="Stage" value="Seed" />
              <Dash />
              <DetailRow label="Domain" value="EMS / AI" />
              <Dash />
              <DetailRow label="Origin" value="India" />
              <Dash />
              <DetailRow label="Focus" value="RF / EW" />
              <Dash />
              <DetailRow label="Build" value="0.1" />
            </PanelSection>

            {/* Overview — flex-1 to fill remaining height */}
            <PanelSection label="Overview" grow>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.88rem',
                  color: 'rgba(240,237,232,0.6)',
                  lineHeight: 1.9,
                }}
              >
                The future of warfare will be fought and won in the electromagnetic spectrum. In
                battlefields dominated by remotely-operated, unmanned systems, connectivity and
                control are as critical as firepower.
                <br /><br />
                VAYRA is building the AI-native defence technology company that delivers EMS
                dominance for India and her allies — without relying on foreign systems or
                foreign permission.
              </p>
            </PanelSection>

            {/* Links */}
            <PanelSection label="Links" last>
              <PanelLink href="#thesis" label="VIEW THESIS" />
              <PanelLink href="#contact" label="VIEW LINKEDIN" />
            </PanelSection>
          </motion.div>

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

/* ── Sub-components ── */

function PanelSection({
  label,
  children,
  last = false,
  grow = false,
}: {
  label: string
  children: React.ReactNode
  last?: boolean
  grow?: boolean
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr',
        borderBottom: last ? 'none' : '1px solid rgba(255,255,255,0.1)',
        flex: grow ? 1 : undefined,
      }}
    >
      {/* Vertical label */}
      <div
        style={{
          borderRight: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '8px',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
          }}
        >
          [{label}]
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '1.75rem' }}>{children}</div>
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '9px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.6rem',
          color: '#F0EDE8',
          letterSpacing: '0.05em',
        }}
      >
        {value}
      </span>
    </div>
  )
}

function Dash() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px dashed rgba(255,255,255,0.08)',
        margin: '0.75rem 0',
      }}
    />
  )
}

function PanelLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '9px',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        textDecoration: 'none',
        padding: '0.5rem 0',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A96E')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
    >
      {label}
      <span
        style={{
          display: 'inline-block',
          width: 28,
          height: 1,
          background: 'currentColor',
        }}
      />
    </a>
  )
}