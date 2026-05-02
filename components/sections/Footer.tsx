export default function Footer() {
  const footerLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Products', href: '#products' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '/privacy' },
  ]

  return (
    <footer className="relative overflow-hidden" style={{ background: '#000', borderTop: '1px solid #1A1A1A' }}>

      {/* Watermark — pinned at very bottom, behind everything */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
        style={{ lineHeight: 1, opacity: 0.04 }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(5rem, 16vw, 16rem)',
            color: '#F0EDE8',
            whiteSpace: 'nowrap',
            display: 'block',
          }}
        >
          SEE. LEARN. DOMINATE.
        </span>
      </div>

      {/* Main footer row */}
      <div
        className="relative z-10 section-padding max-w-screen-xl mx-auto"
        style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">

          {/* Left — brand */}
          <div className="flex flex-col gap-2">
            <span
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.25em', color: '#C8A96E', lineHeight: 1 }}
            >
              VAYRA
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B6B6B' }}
            >
              Built in Bengaluru, India 🇮🇳
            </span>
          </div>

          {/* Center — nav links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs hover:text-[#F0EDE8] transition-colors duration-200"
                style={{ fontFamily: "'Space Mono', monospace", color: '#6B6B6B' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right — copyright */}
          <div className="md:text-right">
            <p
              className="text-xs"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#6B6B6B' }}
            >
              © 2026 VAYRA.
              <br />
              All rights reserved.
            </p>
          </div>

        </div>

        {/* Bottom rule */}
        <div className="mt-10 pt-6" style={{ borderTop: '1px solid #1A1A1A' }}>
          <p
            className="text-[10px] tracking-[0.2em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#2A2A2A' }}
          >
            VAYRA DEFENCE TECHNOLOGIES PVT. LTD. · iDEX SUPPORTED · BENGALURU, INDIA
          </p>
        </div>
      </div>

    </footer>
  )
}
