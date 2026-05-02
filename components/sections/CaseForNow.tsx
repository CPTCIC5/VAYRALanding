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
    <section className="section-padding py-24" style={{ background: '#050505', borderTop: '1px solid #1A1A1A' }}>
      <div className="max-w-screen-xl mx-auto">

        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[10px] tracking-[0.35em] mb-4 block"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E' }}
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
            className="mt-3 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B' }}
          >
            They will not stay converged.
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
                className="text-xs tracking-[0.25em] mb-4 block"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: '#C8A96E' }}
              >
                {num}
              </span>
              <h3
                className="text-sm mb-4 leading-snug"
                style={{ fontFamily: "'Space Mono', monospace", color: '#F0EDE8' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B' }}
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
