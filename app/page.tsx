const buttonStyles =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground'

const buttonOutline =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'


const AUDIENCES = [
  {
    heading: 'FOR NONPROFITS',
    body: "You do the work. You don't have a brand team. We give you access to the same strategic frameworks Fortune 500 companies pay agencies six figures to build — brand identity, guidelines, websites, copywriting, LinkedIn strategy, and Substack publications — at no cost, through a team that cares about the work as much as you do.",
    link: 'Ready to start?',
    href: '/about',
  },
  {
    heading: 'FOR STUDENTS',
    body: "The job market doesn't care about your GPA. It cares about how you show up. These tools and services walk you through building a personal brand that stands out — strategy before aesthetics, substance before polish. Start with Nina for the identity foundation. Use Ogilvy to write copy that sounds like you. Use Eddy when your writing needs a tough editor before it goes live.",
    link: 'Explore the tools',
    href: '/tools',
  },
  {
    heading: 'FOR OPT VOLUNTEERS',
    body: "You have the skills. You need the experience. Through Humanitarians AI, you work on real brand projects for real nonprofit clients — website development, brand guidelines, social strategy, and content creation. Every project is documented, portfolio-ready, and supervised by a senior Creative Director. This isn't a simulation. It's the work.",
    link: 'Learn about the program',
    href: '/about',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Brand Strategy for Nonprofits That Can&apos;t Afford to Get It Wrong
              </h1>
              <p className="max-w-[540px] text-lg leading-relaxed">
                Your nonprofit does serious work. Your brand should reflect it. Nina Harris &amp; Co
                builds brand identity, guidelines, websites, and social strategy for nonprofits —
                led by 40 years of agency experience, powered by AI, delivered by the next
                generation of brand professionals. A Humanitarians AI service.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="/services" className={buttonStyles}>
                  See Our Services →
                </a>
                <a href="/contact" className={buttonOutline}>
                  Work With Us →
                </a>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src="/hero-image.jpg"
                alt="Nina Harris & Co"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Who This Is For Section */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Who This Is For
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Built for people doing real work without a real budget
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <div
                key={audience.heading}
                className="rounded-lg border bg-card p-8 shadow-sm flex flex-col"
              >
                <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
                  {audience.heading}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground flex-1 mb-6">
                  {audience.body}
                </p>
                <a
                  href={audience.href}
                  className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                >
                  {audience.link} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-10">
            Agency experience. AI tools. Emerging talent. One model.
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground mb-14">
            <p>
              Here&apos;s the part that makes this possible.
            </p>
            <p>
              Nina Harris has spent 40 years in brand and creative leadership at agencies including
              Publicis, Saatchi &amp; Saatchi, McCann-Erickson, and 20 years as Brand and Creative
              Director at Charles Schwab. She directs every project.
            </p>
            <p>
              The work is executed by OPT volunteers and graduate students from Northeastern
              University&apos;s INFO 7375: Branding &amp; AI program. They&apos;re not interns fetching coffee
              — they&apos;re trained professionals doing real brand work for real clients, building
              portfolios that get them hired.
            </p>
            <p>
              The AI tools — built through the Madison Project at Humanitarians AI — are what make
              the quality consistent. They enforce the same strategic frameworks, editorial standards,
              and brand discipline that Nina learned in four decades of agency work. The tools
              don&apos;t replace the thinking. They make sure nobody skips a step.
            </p>
            <p>
              The result: Nonprofits get work they couldn&apos;t otherwise afford. Emerging professionals
              get experience they couldn&apos;t otherwise access. AI handles the scale. Nina handles the
              standard.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-t pt-8">
              <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3">For Nonprofits</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Professional brand work — strategy through execution — at no cost through
                Humanitarians AI&apos;s 501(c)(3) mission.
              </p>
            </div>
            <div className="border-t pt-8">
              <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3">For OPT Volunteers</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Real nonprofit clients. Real deliverables. Documented professional experience
                that counts.
              </p>
            </div>
            <div className="border-t pt-8">
              <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3">For Students</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Personal brand strategy for the job market — because the hardest thing to brand
                is yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-10">
            Let&apos;s talk about your brand
          </h2>
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="border border-background/10 rounded-lg p-6">
              <p className="text-sm font-semibold text-background/50 uppercase tracking-widest mb-3">For Nonprofits</p>
              <p className="text-sm text-background/80 leading-relaxed">
                If you need brand work — identity, guidelines, website, LinkedIn, Substack — we&apos;d
                like to hear from you. Start with a conversation, not a contract.
              </p>
            </div>
            <div className="border border-background/10 rounded-lg p-6">
              <p className="text-sm font-semibold text-background/50 uppercase tracking-widest mb-3">For Students</p>
              <p className="text-sm text-background/80 leading-relaxed">
                If you&apos;re building a personal brand, start with Nina — the brand intake tool.
                It&apos;s the foundation everything else is built on.
              </p>
            </div>
            <div className="border border-background/10 rounded-lg p-6">
              <p className="text-sm font-semibold text-background/50 uppercase tracking-widest mb-3">For OPT Volunteers</p>
              <p className="text-sm text-background/80 leading-relaxed">
                If you&apos;re looking for real project experience in brand and creative, learn about
                the Humanitarians AI program.
              </p>
            </div>
          </div>
          <a
            href="mailto:nina@humanitarians.ai"
            className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors border border-background/30 text-background hover:bg-background/10"
          >
            Get in Touch →
          </a>
        </div>
      </section>
    </div>
  )
}
