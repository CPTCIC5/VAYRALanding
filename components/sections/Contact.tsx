'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding py-28"
      style={{ background: '#000', borderTop: '1px solid #1A1A1A' }}
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — headline */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[10px] tracking-[0.35em] text-[#C8A96E] mb-5 block"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            CONTACT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="leading-none text-[#F0EDE8]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3.5rem, 7vw, 7rem)',
            }}
          >
            READY<br />TO TALK?
          </motion.h2>
        </div>

        {/* Right — copy + CTAs */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base text-[#6B6B6B] mb-8 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We are looking for partners, operators, and institutions serious about
            India's electromagnetic future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Button variant="gold" href="mailto:contact@vayra.in">GET IN TOUCH</Button>
            <Button variant="outline" href="#mission">LEARN MORE</Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-[11px] text-[#6B6B6B] tracking-[0.25em]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            contact@vayra.in
          </motion.p>
        </div>

      </div>
    </section>
  )
}
