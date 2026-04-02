'use client'

import Link from 'next/link'

const SERVICES = [
  { label: 'Brand Strategy', href: '/services' },
  { label: 'Brand Guidelines', href: '/services' },
  { label: 'Brand Assets', href: '/services' },
  { label: 'Websites', href: '/services' },
  { label: 'LinkedIn', href: '/services' },
  { label: 'Substack', href: '/services' },
]

const TOOLS = [
  { label: 'Nina', href: '/tools' },
  { label: 'Eddy', href: '/tools' },
  { label: 'Ogilvy', href: '/tools' },
  { label: 'Brandy', href: '/tools' },
  { label: 'Madison', href: '/tools' },
  { label: 'PROOF', href: '/tools' },
  { label: 'Subby', href: '/tools' },
  { label: 'Wilkes', href: '/tools' },
]

const CONNECT = [
{ label: 'Substack', href: 'https://humanitariansai.substack.com/', external: true },
  { label: 'Humanitarians AI', href: 'https://humanitarians.ai', external: true },
]

const LEGAL = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/privacy/cookies' },
  { label: 'Terms of Service', href: '/terms-of-service' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto py-12">

        {/* Top: brand info + columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand info — spans 1 col */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-sm font-bold">Nina Harris &amp; Co</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A Humanitarians AI Service
            </p>
            <div className="text-xs text-muted-foreground space-y-1 pt-1">
              <p>Humanitarians AI Incorporated</p>
              <p>A 501(c)(3) nonprofit organization</p>
              <p>30 N Gould St Ste N</p>
              <p>Sheridan, WY 82801</p>
              <a
                href="mailto:nina@humanitarians.ai"
                className="hover:text-foreground transition-colors"
              >
                nina@humanitarians.ai
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Services</h3>
            <div className="flex flex-col gap-1.5">
              {SERVICES.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Tools</h3>
            <div className="flex flex-col gap-1.5">
              {TOOLS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex flex-col gap-1.5">
              {CONNECT.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legal</h3>
            <div className="flex flex-col gap-1.5">
              {LEGAL.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t text-xs text-muted-foreground space-y-1">
          <p>&copy; 2026 Nina Harris &amp; Co. All rights reserved.</p>
          <p>
            Nina Harris &amp; Co is a service of{' '}
            <a
              href="https://humanitarians.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Humanitarians AI
            </a>
            , a 501(c)(3) nonprofit organization. Built by Nik Bear Brown and Nina Harris.
          </p>
        </div>

      </div>
    </footer>
  )
}
