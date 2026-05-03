'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SignalWave from '@/components/ui/SignalWave'

const paragraphs = [
  {
    text: 'The last three major conflicts — Nagorno-Karabakh, Ukraine, Gaza — were not decided by troop strength or weapon counts. They were decided by who owned the electromagnetic spectrum. Who could see, who could disrupt, who could adapt in real time. The side with cognitive EW won. The others lost, and many still don\'t understand why.',
  },
  {
    text: 'India operates within this domain using systems designed by foreign entities, optimised for foreign threat models, with update cycles measured in years. There is no Indian AI that reads an unknown signal and responds in milliseconds. There is no Indian system that learns from every engagement and gets faster. That cognitive layer does not exist.',
  },
  {
    text: 'This is not a gap in hardware. This is a gap in sovereignty. The electromagnetic domain will define the next century of Indian security. We cannot outsource it. We will not.',
  },
]

function ParaBlock({ text, i }: { text: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
    >
      <p
        className="text-base md:text-lg leading-relaxed"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: '#6B6B6B',
          lineHeight: '1.7',
        }}
      >
        {text}
      </p>
    </motion.div>
  )
}

export default function Problem() {
  return (
    <section
      id="domain"
      className="relative overflow-hidden section-padding section-padding-y"
      style={{ borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}
    >
      <SignalWave opacity={0.04} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Label - Above Grid */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[10px] tracking-[0.25em] block"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E', marginBottom: 'var(--space-lg)' }}
        >
          THE DOMAIN
        </motion.span>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
          {/* Left - Heading */}
          <div className="md:sticky  h-fit">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(1.6rem,3vw,2.8rem)] leading-tight"
              style={{ fontFamily: "'Space Mono', monospace", color: '#F0EDE8' }}
            >
              THE SPECTRUM
              <br />IS THE BATTLEFIELD.
              <br />INDIA IS
              <br />NOT READY.
            </motion.h2>
          </div>

          {/* Right - Paragraphs */}
          <div className="flex flex-col" style={{ gap: 'var(--space-xl)' }}>
            {paragraphs.map(({ text }, i) => (
              <ParaBlock key={i} text={text} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
