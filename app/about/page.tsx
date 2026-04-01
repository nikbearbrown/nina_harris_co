import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Nina Harris & Co',
  description: 'Nina Harris & Co is a service of Humanitarians AI — professional brand strategy for nonprofits, built in the classroom and delivered at no cost.',
}

const LINKS = [
  {
    label: 'Humanitarians AI',
    description: '501(c)(3) nonprofit behind the work',
    href: 'https://humanitarians.ai',
  },
  {
    label: 'Madison Project on GitHub',
    description: 'The open-source AI tool initiative',
    href: 'https://github.com/nikbearbrown/humanitarians_AI',
  },
  {
    label: 'INFO 7375 Course',
    description: 'Branding & AI at Northeastern University',
    href: 'https://github.com/nikbearbrown/INFO_7375_Branding_and_AI',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-3xl">
            Where this came from — and why it&apos;s free
          </h1>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Origin */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-lg leading-relaxed max-w-2xl">
            Nina Harris &amp; Co is a service of{' '}
            <a href="https://humanitarians.ai" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-muted-foreground">
              Humanitarians AI
            </a>
            , a 501(c)(3) nonprofit committed to making professional AI tools and services
            accessible to people who need them most.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Pull quote */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug max-w-3xl">
            &ldquo;Nina Harris &amp; Co is what happens when a Creative Director and an AI architect
            stop talking about democratizing brand strategy and start doing it.&rdquo;
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* The classroom */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                It started in a classroom
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                <strong className="text-foreground">INFO 7375: Branding &amp; AI</strong> is a
                graduate course at Northeastern University&apos;s College of Engineering,
                co-taught by Professor Nik Bear Brown and Adjunct Professor Nina Harris.
                Professor Brown builds the AI architecture.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                The Creative Director
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Nina Harris brings 40+ years at agencies including Publicis, McCann-Erickson,
                Saatchi &amp; Saatchi, and two decades as Brand and Creative Director at Charles
                Schwab. She trains the tools and directs the work with the strategic thinking,
                professional standards, and instincts that make the output useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* The Madison Project */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            The Madison Project
          </p>
          <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
            The AI tools are part of the Madison Project — named after Madison Avenue, where
            advertising became an industry. The students in INFO 7375 aren&apos;t building school
            projects. They&apos;re building professional-grade AI tools that do what agencies
            charge fortunes for.
          </p>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Links */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            Links
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md flex flex-col gap-2"
              >
                <span className="text-sm font-semibold group-hover:underline underline-offset-4">
                  {link.label} →
                </span>
                <span className="text-xs text-muted-foreground">{link.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
