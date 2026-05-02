'use client'

export default function SignalWave({ opacity = 0.06 }: { opacity?: number }) {
  // Two repeating sine-wave paths tiled side-by-side so waveScroll looks seamless
  const wave = "M0,50 C20,20 40,80 60,50 C80,20 100,80 120,50 C140,20 160,80 180,50 C200,20 220,80 240,50 C260,20 280,80 300,50 C320,20 340,80 360,50 C380,20 400,80 420,50 C440,20 460,80 480,50 C500,20 520,80 540,50 C560,20 580,80 600,50"

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ opacity }}
    >
      {/* Three staggered wave lines at different vertical positions */}
      {[
        { y: '30%', speed: '14s', scale: 1 },
        { y: '55%', speed: '20s', scale: 0.6 },
        { y: '75%', speed: '10s', scale: 0.4 },
      ].map(({ y, speed, scale }, i) => (
        <div
          key={i}
          className="absolute left-0"
          style={{ top: y, width: '200%', transform: `scaleY(${scale})` }}
        >
          <svg
            viewBox="0 0 600 100"
            preserveAspectRatio="none"
            style={{
              width: '50%',
              height: 60,
              display: 'inline-block',
              animation: `waveScroll ${speed} linear infinite`,
            }}
          >
            <path d={wave} stroke="#C8A96E" strokeWidth="1.2" fill="none" />
          </svg>
          <svg
            viewBox="0 0 600 100"
            preserveAspectRatio="none"
            style={{ width: '50%', height: 60, display: 'inline-block' }}
          >
            <path d={wave} stroke="#C8A96E" strokeWidth="1.2" fill="none" />
          </svg>
        </div>
      ))}
    </div>
  )
}
