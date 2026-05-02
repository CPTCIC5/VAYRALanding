'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const navLinks = [
  { label: 'THESIS', href: '#thesis' },
  { label: 'MODULE 01', href: '#products' },
  { label: 'AMBITION', href: '#ambition' },
  { label: 'TEAM', href: '#team' },
]

export default function Nav() {
  const scrollY = useScrollProgress()
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 100

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
        style={{
          backgroundColor: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26,26,26,0.8)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
        }}
      >
        {/* Wordmark */}
        <a href="#" className="text-[#C8A96E] text-2xl tracking-[0.25em]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          VAYRA
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-[11px] tracking-[0.2em] text-[#6B6B6B] hover:text-[#F0EDE8] transition-colors duration-200"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px bg-[#C8A96E] w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="px-5 py-2 text-[11px] tracking-[0.2em] text-[#C8A96E] border border-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-all duration-200"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            CONTACT
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-[#C8A96E]"
            transition={{ duration: 0.25 }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-[#C8A96E]"
            transition={{ duration: 0.25 }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-[#C8A96E]"
            transition={{ duration: 0.25 }}
          />
        </button>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10"
          >
            {[...navLinks, { label: 'CONTACT', href: '#contact' }].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl tracking-[0.2em] text-[#F0EDE8] hover:text-[#C8A96E] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
