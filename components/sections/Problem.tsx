'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SignalWave from '@/components/ui/SignalWave'

const paragraphs = [
  {
    text: 'The last three major conflicts — Nagorno-Karabakh, Ukraine, Gaza — were not decided by troop strength or weapon counts. They were decided by who owned the electromagnetic spectrum. Who could see, who could disrupt, who could adapt in real time. The side with cognitive EW won. The others lost, and many still don\'t understand why.',
    gold: false,
  },
  {
    text: 'India operates within this domain using systems designed by foreign entities, optimised for foreign threat models, with update cycles measured in years. There is no Indian AI that reads an unknown signal and responds in milliseconds. There is no Indian system that learns from every engagement and gets faster. That cognitive layer does not exist.',
    gold: false,
  },
  {
    text: 'This is not a gap in hardware. This is a gap in sovereignty. The electromagnetic domain will define the next century of Indian security. We cannot outsource it. We will not.',
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
      className={gold ? 'border-l-2 pl-5' : ''}
      style={gold ? { borderLeftColor: '#C8A96E' } : {}}
    >
      <p
        className={`leading-relaxed ${gold ? 'text-lg md:text-xl font-medium' : 'text-base md:text-lg'}`}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: gold ? '#C8A96E' : '#6B6B6B',
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
      className="relative overflow-hidden section-padding py-24"
      style={{ borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}
    >
      <SignalWave opacity={0.04} />

      <div className="relative z-10 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 md:gap-28">
        <div className="md:sticky md:top-28 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[10px] tracking-[0.25em] mb-5 block"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E' }}
            >
              THE DOMAIN
            </span>
            <h2
              className="text-[clamp(1.6rem,3vw,2.8rem)] leading-tight"
              style={{ fontFamily: "'Space Mono', monospace", color: '#F0EDE8' }}
            >
              THE SPECTRUM
              <br />IS THE BATTLEFIELD.
              <br />INDIA IS
              <br />NOT READY.
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-10 pt-1">
          {paragraphs.map(({ text, gold }, i) => (
            <ParaBlock key={i} text={text} gold={gold} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
