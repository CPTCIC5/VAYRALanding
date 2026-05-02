'use client'

import { motion } from 'framer-motion'

const columns = [
  {
    num: '01',
    title: 'THE THREAT IS REAL',
    body: "China and Pakistan have invested heavily in cognitive EW. India's borders are contested in the electromagnetic domain every day. The capability gap is not theoretical.",
  },
  {
    num: '02',
    title: 'THE TECHNOLOGY IS READY',
    body: 'Deep learning for signal classification. Reinforcement learning for autonomous decisions. Edge inference for field deployment. These technologies exist. What India lacks is the team to put them together for Indian conditions.',
  },
  {
    num: '03',
    title: 'THE TIMING IS NOW',
    body: 'India is in the middle of a defence indigenisation push that will not repeat. The procurement channels are open. The institutions are ready to partner. A company that builds the right thing in the next three years will define this domain for the next thirty.',
  },
]

export default function CaseForNow() {
  return (
    <section className="py-24 section-padding" style={{ background: '#050505' }}>
      <div className="max-w-screen-xl mx-auto">

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(3rem,6vw,6.5rem)] leading-none text-[#F0EDE8]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            THE WINDOW IS OPEN.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-3 text-base text-[#6B6B6B]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            It will not stay open.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {columns.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="pt-7 pb-10 pr-10"
              style={{ borderTop: '1px solid #C8A96E' }}
            >
              <span
                className="text-xs text-[#C8A96E] tracking-[0.25em] mb-4 block"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {num}
              </span>
              <h3
                className="text-sm text-[#F0EDE8] mb-4 leading-snug"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {title}
              </h3>
              <p
                className="text-sm text-[#6B6B6B] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
