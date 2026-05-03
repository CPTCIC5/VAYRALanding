export default function Footer() {
  const footerLinks = [
    { label: 'Mission', href: '#thesis' },
    { label: 'Products', href: '#products' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '/privacy' },
  ]

  return (
    <footer className="relative overflow-hidden section-padding section-padding-y" style={{ background: '#000', borderTop: '1px solid #1A1A1A' }}>

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

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">

          {/* Left — brand */}
          <div className="flex flex-col items-center md:items-start">
            <span
              style={{ 
                fontFamily: "'Bebas Neue', sans-serif", 
                fontSize: '2rem', 
                letterSpacing: '0.25em', 
                color: '#C8A96E', 
                lineHeight: 1 
              }}
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
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
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
          <div className="text-center md:text-right">
            <p
              className="text-xs"
              style={{ 
                fontFamily: "'JetBrains Mono', monospace", 
                color: '#6B6B6B', 
                lineHeight: '1.6' 
              }}
            >
              © 2026 VAYRA.
              <br />
              All rights reserved.
            </p>
          </div>

        </div>

        {/* Bottom row - company info */}
        <div 
          className="pt-8 text-center" 
          style={{ borderTop: '1px solid #1A1A1A', marginTop: '20px' }}
        >
          <p
            className="text-[10px] tracking-[0.2em]"
            style={{ 
              fontFamily: "'JetBrains Mono', monospace", 
              color: '#2A2A2A',
              marginTop:'20px'
            }}
          >
            VAYRA DEFENCE TECHNOLOGIES PVT. LTD. · iDEX SUPPORTED · BENGALURU, INDIA
          </p>
        </div>

      </div>

    </footer>
  )
}
