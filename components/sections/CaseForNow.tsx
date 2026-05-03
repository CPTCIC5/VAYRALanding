'use client'

import { motion } from 'framer-motion'

const columns = [
  {
    num: '01',
    title: 'THE AI IS READY',
    body: 'Foundation models, transformer architectures, and edge inference hardware have matured to the point where real-time RF signal intelligence is achievable outside a datacenter. The capability that required a lab five years ago now runs on a field-deployable system. The technical barrier is gone.',
  },
  {
    num: '02',
    title: 'THE WINDOW IS OPEN',
    body: "India's defence indigenisation push — iDEX, Atmanirbhar Bharat, IDEX grants — has created an institutional opening that did not exist a decade ago. Procurement channels are accessible to startups for the first time. The policy environment rewards building. This window will not stay open forever.",
  },
  {
    num: '03',
    title: "THE ADVERSARY ISN'T WAITING",
    body: "China and Pakistan have made cognitive EW a stated priority. India's borders are contested in the electromagnetic domain every day — not in the future, right now. A company that builds the right capability in the next three years will define this domain for the next thirty. A company that waits will not get the chance.",
  },
]

export default function CaseForNow() {
  return (
    <section className="section-padding section-padding-y" style={{ background: '#050505', borderTop: '1px solid #1A1A1A' }}>
      <div className="max-w-7xl mx-auto">

        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[10px] tracking-[0.35em] block"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E', marginBottom: 'var(--space-lg)' }}
          >
            WHY NOW
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem,6vw,6.5rem)',
              color: '#F0EDE8',
            }}
          >
            THREE THINGS
            <br />
            CONVERGED.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B', marginTop: 'var(--space-md)' }}
          >
            They will not stay converged.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'clamp(2rem, 4vw, 3rem)' }}>
          {columns.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                borderTop: '2px solid #C8A96E', 
                paddingTop: 'var(--space-lg)', 
                paddingBottom: 'var(--space-md)' 
              }}
            >
              <span
                className="text-xs tracking-[0.25em] block"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E', marginBottom: 'var(--space-md)' }}
              >
                {num}
              </span>
              <h3
                className="text-base leading-snug font-medium"
                style={{ fontFamily: "'Space Mono', monospace", color: '#F0EDE8', marginBottom: 'var(--space-md)' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B', lineHeight: '1.7' }}
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
