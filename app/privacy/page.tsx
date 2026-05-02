import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — VAYRA',
  description: 'Privacy Policy for VAYRA Defence Technologies.',
}

const sections = [
  {
    title: '01 / OVERVIEW',
    body: `VAYRA Defence Technologies Pvt. Ltd. ("VAYRA", "we", "us") operates this website at vayra.in. This policy describes how we collect, use, and protect information submitted through this site. By using this site you agree to the terms below.`,
  },
  {
    title: '02 / INFORMATION WE COLLECT',
    body: `We collect only information you voluntarily provide — specifically, your name, email address, and message when you use our contact form. We do not use tracking pixels, third-party analytics scripts, or advertising networks. Server access logs (IP address, browser type, page visited, timestamp) are retained for up to 30 days for security monitoring purposes only.`,
  },
  {
    title: '03 / HOW WE USE YOUR INFORMATION',
    body: `Contact form submissions are used solely to respond to your enquiry. We will not sell, trade, rent, or share your personal information with third parties except: (a) as required by applicable Indian law or a valid government order; (b) to service providers who process data strictly on our behalf and under confidentiality obligations.`,
  },
  {
    title: '04 / DEFENCE & SECURITY CONTEXT',
    body: `VAYRA operates in the defence technology sector. Certain information disclosed to us in the context of procurement discussions, technology evaluations, or institutional partnerships may be subject to applicable classification and non-disclosure obligations. Do not submit classified or controlled information through this public website.`,
  },
  {
    title: '05 / COOKIES',
    body: `This website does not use cookies for tracking or advertising. We may use a single session-state cookie if you interact with server-rendered forms. No persistent cookies are set without your explicit consent.`,
  },
  {
    title: '06 / DATA RETENTION',
    body: `Contact enquiries are retained for up to 12 months and then deleted unless a continuing relationship requires otherwise. Server logs are deleted after 30 days. You may request deletion of your data at any time by writing to the address below.`,
  },
  {
    title: '07 / YOUR RIGHTS',
    body: `Under applicable Indian law you have the right to access, correct, or request deletion of personal data we hold about you. To exercise these rights write to contact@vayra.in with the subject line "DATA REQUEST". We will respond within 15 business days.`,
  },
  {
    title: '08 / SECURITY',
    body: `We implement appropriate technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. This includes TLS encryption in transit and access-controlled storage at rest.`,
  },
  {
    title: '09 / THIRD-PARTY LINKS',
    body: `This site may link to external resources (government portals, iDEX, academic references). We are not responsible for the privacy practices or content of those sites.`,
  },
  {
    title: '10 / CHANGES TO THIS POLICY',
    body: `We may update this policy. Material changes will be noted with a revised effective date at the top of this page. Continued use of the site after changes constitutes acceptance.`,
  },
  {
    title: '11 / CONTACT',
    body: `For all privacy-related queries:\n\nVAYRA Defence Technologies Pvt. Ltd.\nBengaluru, Karnataka, India\ncontact@vayra.in`,
  },
]

export default function PrivacyPage() {
  return (
    <main style={{ background: '#000', minHeight: '100vh' }}>

      {/* Nav bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16"
        style={{
          background: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #1A1A1A',
          paddingLeft: 'clamp(1.5rem, 5vw, 6rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 6rem)',
        }}
      >
        <Link
          href="/"
          className="text-[#C8A96E] text-2xl tracking-[0.25em]"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          VAYRA
        </Link>
        <Link
          href="/"
          className="text-[10px] tracking-[0.2em] text-[#6B6B6B] hover:text-[#C8A96E] transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          ← BACK
        </Link>
      </div>

      {/* Content */}
      <div
        className="max-w-3xl mx-auto"
        style={{
          paddingTop: '8rem',
          paddingBottom: '6rem',
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
        }}
      >
        {/* Header */}
        <div className="mb-16" style={{ borderBottom: '1px solid #1A1A1A', paddingBottom: '2.5rem' }}>
          <span
            className="text-[10px] tracking-[0.35em] text-[#C8A96E] mb-4 block"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            LEGAL
          </span>
          <h1
            className="text-[clamp(3rem,6vw,5rem)] leading-none text-[#F0EDE8] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            PRIVACY POLICY
          </h1>
          <p
            className="text-xs text-[#6B6B6B]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Effective date: 1 May 2026 · VAYRA Defence Technologies Pvt. Ltd.
          </p>
        </div>

        {/* Policy sections */}
        <div className="flex flex-col gap-0">
          {sections.map(({ title, body }, i) => (
            <div
              key={i}
              className="py-8"
              style={{ borderBottom: '1px solid #1A1A1A' }}
            >
              <h2
                className="text-sm text-[#C8A96E] mb-3"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {title}
              </h2>
              <p
                className="text-sm text-[#6B6B6B] leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] text-[#6B6B6B] hover:text-[#C8A96E] transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ← RETURN TO VAYRA.IN
          </Link>
        </div>
      </div>
    </main>
  )
}
