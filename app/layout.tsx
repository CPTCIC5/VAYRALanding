import type { Metadata } from 'next'
import '@fontsource/bebas-neue/400.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'VAYRA — Electromagnetic Dominance. Made in India.',
  description:
    "India's first AI-native Electronic Warfare company. Building cognitive EW systems for the Indian Armed Forces.",
  keywords: ['electronic warfare', 'AI', 'defence', 'India', 'VAYRA', 'cognitive EW', 'iDEX'],
  openGraph: {
    title: 'VAYRA — Electromagnetic Dominance. Made in India.',
    description:
      "India's first AI-native Electronic Warfare company. Building cognitive EW systems for the Indian Armed Forces.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="grain">
      <body className='flex items-center justify-center mx-auto'>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
