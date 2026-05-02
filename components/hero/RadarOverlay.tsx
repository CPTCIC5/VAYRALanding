'use client'

export default function RadarOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* ── Radar dish — right side of hero ── */}
      <div
        className="absolute"
        style={{ right: '8%', top: '50%', transform: 'translateY(-50%)', width: 'clamp(260px, 32vw, 480px)', aspectRatio: '1' }}
      >
        {/* Static rings */}
        {[1, 0.72, 0.47, 0.25].map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-[#C8A96E]"
            style={{
              opacity: 0.06 + i * 0.025,
              transform: `scale(${s})`,
              top: `${(1 - s) * 50}%`,
              left: `${(1 - s) * 50}%`,
              width: `${s * 100}%`,
              height: `${s * 100}%`,
            }}
          />
        ))}

        {/* Sweep arm — GPU-composited rotate */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ animation: 'radarSweep 4s linear infinite' }}
        >
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              width: '50%',
              height: '1px',
              transformOrigin: '0 0',
              background: 'linear-gradient(90deg, rgba(200,169,110,0.7) 0%, transparent 100%)',
              boxShadow: '0 0 8px rgba(200,169,110,0.4)',
            }}
          />
          {/* Sweep fill */}
          <div
            className="absolute inset-0"
            style={{
              background: 'conic-gradient(from 0deg, rgba(200,169,110,0.07) 0deg, transparent 60deg)',
            }}
          />
        </div>

        {/* Pulse rings */}
        {[0, 0.7, 1.4].map((delay, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-[#C8A96E]"
            style={{
              opacity: 0,
              animation: `radarPulse 3s ease-out ${delay}s infinite`,
            }}
          />
        ))}

        {/* Centre dot */}
        <div
          className="absolute rounded-full bg-[#C8A96E]"
          style={{
            width: 6,
            height: 6,
            top: 'calc(50% - 3px)',
            left: 'calc(50% - 3px)',
            boxShadow: '0 0 12px 3px rgba(200,169,110,0.5)',
            animation: 'targetBlink 2s ease-in-out infinite',
          }}
        />

        {/* Cross-hairs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-[#C8A96E]" style={{ opacity: 0.06 }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-px bg-[#C8A96E]" style={{ opacity: 0.06 }} />
        </div>
      </div>

      {/* ── Missile trajectory arcs ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Arc 1 — long arc from lower-left to upper-right */}
        <path
          d="M 120 820 C 300 400, 800 200, 1150 180"
          stroke="#C8A96E"
          strokeWidth="0.8"
          strokeDasharray="600"
          strokeDashoffset="600"
          opacity="0.25"
          style={{ animation: 'drawPath 3s ease-out 0.8s forwards' }}
        />
        {/* Arrowhead / target dot at end of arc 1 */}
        <circle cx="1150" cy="180" r="3" fill="#C8A96E" opacity="0"
          style={{ opacity: 0, animation: 'targetBlink 2s ease-in-out 3.8s infinite' }} />
        <circle cx="1150" cy="180" r="8" stroke="#C8A96E" strokeWidth="0.7" opacity="0"
          style={{ animation: 'targetBlink 2s ease-in-out 3.8s infinite' }} />

        {/* Arc 2 — shorter, coming from right */}
        <path
          d="M 1380 680 C 1200 500, 950 350, 780 280"
          stroke="#C8A96E"
          strokeWidth="0.6"
          strokeDasharray="500"
          strokeDashoffset="500"
          opacity="0.18"
          style={{ animation: 'drawPath 2.5s ease-out 2s forwards' }}
        />
        <circle cx="780" cy="280" r="2.5" fill="#C8A96E" opacity="0"
          style={{ animation: 'targetBlink 2s ease-in-out 4.5s infinite' }} />

        {/* Arc 3 — mid screen */}
        <path
          d="M 200 100 C 400 250, 600 600, 680 780"
          stroke="#C8A96E"
          strokeWidth="0.5"
          strokeDasharray="700"
          strokeDashoffset="700"
          opacity="0.12"
          style={{ animation: 'drawPath 3.5s ease-out 1.5s forwards' }}
        />

        {/* Grid lines — subtle targeting grid */}
        {[180, 360, 540, 720, 900, 1080, 1260].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="900" stroke="#C8A96E" strokeWidth="0.3" opacity="0.03" />
        ))}
        {[150, 300, 450, 600, 750].map((y) => (
          <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#C8A96E" strokeWidth="0.3" opacity="0.03" />
        ))}
      </svg>

      {/* ── Corner targeting brackets ── */}
      {[
        { pos: 'top-8 left-8',       borders: 'border-t border-l' },
        { pos: 'top-8 right-8',      borders: 'border-t border-r' },
        { pos: 'bottom-16 left-8',   borders: 'border-b border-l' },
        { pos: 'bottom-16 right-8',  borders: 'border-b border-r' },
      ].map(({ pos, borders }, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-6 h-6 ${borders} border-[#C8A96E]`}
          style={{ opacity: 0.35 }}
        />
      ))}

      {/* ── Status readout — top left ── */}
      <div
        className="absolute top-24 left-8 hidden md:flex flex-col gap-1"
        style={{ opacity: 0.35 }}
      >
        {['SYS: ACTIVE', 'FREQ: 2.4–18 GHz', 'MODE: COGNITIVE'].map((line) => (
          <span
            key={line}
            className="text-[9px] tracking-[0.2em] text-[#C8A96E]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}
