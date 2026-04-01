import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Nina Harris & Co',
  description:
    'Get in touch with Nina Harris & Co. We work with nonprofits, OPT volunteers, and students. Start with a conversation.',
}

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'nina@humanitarians.ai',
    href: 'mailto:nina@humanitarians.ai',
  },
  {
    label: 'Organization',
    value: 'Humanitarians AI',
    href: 'https://humanitarians.ai',
  },
  {
    label: 'Substack',
    value: 'skepticism.ai',
    href: 'https://www.skepticism.ai/',
  },
  {
    label: 'GitHub',
    value: 'github.com/nikbearbrown',
    href: 'https://github.com/nikbearbrown/',
  },
]

const REASONS = [
  {
    heading: 'Nonprofits',
    body: "If you need brand work — identity, guidelines, website, LinkedIn, Substack — reach out. We'd like to hear about your organization and what you're trying to accomplish. Start with a conversation, not a contract.",
  },
  {
    heading: 'OPT Volunteers',
    body: "If you're looking for real project experience in brand and creative work, learn about the Humanitarians AI volunteer program. Real clients, real deliverables, documented professional experience.",
  },
  {
    heading: 'Students',
    body: "If you're building a personal brand for the job market, start with Nina — the brand intake tool. It's the foundation everything else is built on.",
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
            Let&apos;s talk about your brand.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Nina Harris &amp; Co works with nonprofits that need serious brand strategy, OPT
            volunteers who want real project experience, and students building a personal brand
            for the job market. If any of that sounds like you, get in touch.
          </p>
        </div>
      </section>

      {/* Who Should Reach Out */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-10">
            Who Should Reach Out
          </p>
          <div className="divide-y divide-border">
            {REASONS.map((reason) => (
              <div
                key={reason.heading}
                className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 first:pt-0 last:pb-0"
              >
                <h2 className="text-sm font-bold tracking-widest uppercase pt-1 text-muted-foreground">
                  {reason.heading}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-10">
            Get in touch
          </h2>
          <div className="divide-y divide-background/10 mb-12">
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="grid md:grid-cols-[200px_1fr] gap-2 md:gap-12 py-6 first:pt-0 last:pb-0"
              >
                <p className="text-sm font-semibold tracking-widest uppercase text-background/50">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-base text-background hover:underline underline-offset-4"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
          <a
            href="mailto:nina@humanitarians.ai"
            className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors border border-background/30 text-background hover:bg-background/10"
          >
            Email Us →
          </a>
        </div>
      </section>
    </div>
  )
}
