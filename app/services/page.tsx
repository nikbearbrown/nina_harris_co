import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Nina Harris & Co',
  description: 'Agency-quality brand strategy and creative services for nonprofits, at nonprofit scale.',
}

const SERVICES = [
  {
    number: '01',
    title: 'Brand Strategy',
    body: `We start where every good brand starts — with the questions most people skip. Who are you actually for? What do you stand for that no one else in your space can claim? What does your audience need to believe before they'll donate, volunteer, or share your work? We build your archetype, audience personas, positioning, and unique value proposition before anyone touches a color palette.`,
    deliverable: 'A complete brand strategy document — the foundation everything else is built on.',
  },
  {
    number: '02',
    title: 'Brand Guidelines',
    body: `A logo without guidelines is a suggestion. We build the rulebook that keeps your brand consistent when you're not in the room — voice and tone guide, visual direction, color systems, typography, logo usage rules, and do/don't examples. The document your next volunteer, board member, or designer opens before they create anything.`,
    deliverable: 'A brand guidelines document your team can actually follow.',
  },
  {
    number: '03',
    title: 'Brand Assets',
    body: `Logo concepts, visual identity system, style guide, and templates — built from the strategy, not before it. Every asset traces back to a strategic decision. Nothing is decorative.`,
    deliverable: 'A visual identity system ready for print, web, and social.',
  },
  {
    number: '04',
    title: 'Website',
    body: `We build sites that say what your nonprofit does, who it's for, and why it matters — in that order. Strategy first, then wireframes, then content, then build. Our development teams are OPT volunteers gaining real-world experience on real-world projects.`,
    deliverable: 'A live website that represents your brand accurately and works on every device.',
  },
  {
    number: '05',
    title: 'LinkedIn Strategy',
    body: `LinkedIn is where your donors, board prospects, and grant reviewers look you up. We optimize your organization's profile, build a content calendar, create post frameworks in your brand voice, and set up an audience growth strategy you can maintain with a small team.`,
    deliverable: 'A LinkedIn presence that works as hard as you do.',
  },
  {
    number: '06',
    title: 'Substack & Newsletter',
    body: `A Substack publication is the best tool most nonprofits aren't using. We set up your publication, build an editorial calendar, create article frameworks for your team, and develop a subscriber growth strategy — all calibrated to your voice, your audience, and your capacity.`,
    deliverable: 'A publishing platform with a plan, not just a signup page.',
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            What we build for you
          </p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8">
            Agency quality.<br />Nonprofit scale.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
            Every nonprofit we work with gets the same strategic process a Fortune 500 company gets
            from a top agency — the same questions, the same frameworks, the same standard of output.
            The difference is the model: our work is led by a senior Creative Director, accelerated
            by AI tools that enforce professional standards, and executed by trained OPT volunteers
            and graduate students building real portfolios on real projects. That&apos;s how we deliver
            agency-quality work at nonprofit scale.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Services list */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="divide-y divide-border">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-12 first:pt-0 last:pb-0"
              >
                {/* Number */}
                <div className="pt-1">
                  <span className="text-4xl font-bold tracking-tighter text-muted-foreground/30 select-none">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold tracking-tight">{service.title}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{service.body}</p>

                  {/* Deliverable callout */}
                  <div className="mt-2 border-l-2 border-foreground pl-4">
                    <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-1">
                      What you walk away with
                    </p>
                    <p className="text-base font-medium">{service.deliverable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">Ready to start?</h2>
            <p className="text-background/70 max-w-md">
              Tell us about your nonprofit and what you&apos;re building. We&apos;ll take it from there.
            </p>
          </div>
          <a
            href="mailto:harris.nina@humanitarians.ai"
            className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors border border-background/30 text-background hover:bg-background/10 whitespace-nowrap"
          >
            Get in touch →
          </a>
        </div>
      </section>

    </div>
  )
}
