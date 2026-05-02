'use client'

export default function HexGrid({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hex"
            x="0"
            y="0"
            width="56"
            height="48"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5)"
          >
            {/* Hexagon outline */}
            <polygon
              points="28,2 50,14 50,38 28,50 6,38 6,14"
              fill="none"
              stroke="#C8A96E"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    </div>
  )
}
