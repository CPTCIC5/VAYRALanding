'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SignalWave from '@/components/ui/SignalWave'

const paragraphs = [
  {
    text: 'Traditional Electronic Warfare works from a fixed database. It knows what it was programmed to know. When adversaries adapt — and they always do — the system fails silently.',
    gold: false,
  },
  {
    text: 'The last decade of conflict proved this. Nagorno-Karabakh. Ukraine. Gaza. Wars decided not by numbers but by who controlled the electromagnetic spectrum. The side with cognitive EW won. The side without it lost.',
    gold: false,
  },
  {
    text: 'India has zero indigenous cognitive EW capability. VAYRA is building it.',
    gold: true,
  },
]

function ParaBlock({ text, gold, i }: { text: string; gold: boolean; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
      className={gold ? 'border-l-2 border-[#C8A96E] pl-5' : ''}
      style={gold ? { borderLeftColor: '#C8A96E' } : {}}
    >
      <p
        className={`leading-relaxed ${gold ? 'text-[#C8A96E] text-lg md:text-xl font-medium' : 'text-[#6B6B6B] text-base md:text-lg'}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {text}
      </p>
    </motion.div>
  )
}

export default function Problem() {
  return (
    <section
      className="relative overflow-hidden section-padding py-24"
      style={{ borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}
    >
      {/* Scrolling signal waveform background */}
      <SignalWave opacity={0.04} />

      <div className="relative z-10 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 md:gap-28">
        {/* Sticky left heading */}
        <div className="md:sticky md:top-28 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[10px] tracking-[0.25em] text-[#C8A96E] mb-5 block"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              THE PROBLEM
            </span>
            <h2
              className="text-[clamp(1.6rem,3vw,2.8rem)] leading-tight text-[#F0EDE8]"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              EVERY EW SYSTEM<br />
              IN INDIAN SERVICE<br />
              IS BLIND TO THREATS<br />
              IT HAS NEVER SEEN.
            </h2>
          </motion.div>
        </div>

        {/* Scrolling right paragraphs */}
        <div className="flex flex-col gap-10 pt-1">
          {paragraphs.map(({ text, gold }, i) => (
            <ParaBlock key={i} text={text} gold={gold} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
