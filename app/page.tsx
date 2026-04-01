const buttonStyles =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground'

const buttonOutline =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'

const COURSES = [
  {
    title: 'BOTSPEAK',
    description:
      'Fluency in AI communication. How to talk to machines — and know when they\'re talking past you. Prompt engineering, model limitations, hallucination detection, and the rhetorical gap between human intent and machine output.',
    link: 'Explore BotSpeak',
    href: '/notes/NEU_botspeak-syllabus',
  },
  {
    title: 'CAUSAL REASONING',
    description:
      'AI finds correlations. Humans build causal models. Counterfactual thinking, interventionist reasoning, and the kind of "why" questions that statistical models cannot answer.',
    link: 'Explore Causal Reasoning',
    href: '/notes/NEU_causal-reasoning-syllabus',
  },
  {
    title: 'ETHICAL PLAY',
    description:
      'Moral reasoning under uncertainty, value pluralism, and the limits of rule-based ethics. Developing the capacity for ethical judgment that cannot be reduced to optimization or alignment.',
    link: 'Explore Ethical Play',
    href: '/notes/NEU_ethical-play-tictoc',
  },
  {
    title: 'AIMAGINEERING',
    description:
      'Generative AI produces outputs. Humans produce meaning. Creative process, aesthetic judgment, conceptual blending, and the difference between novelty and genuine originality.',
    link: 'Explore AIMagineering',
    href: '/notes/NEU_aimagineering-syllabus',
  },
  {
    title: 'EMBODIED TEACHING',
    description:
      'Teaching is irreducibly human. Presence, improvisation, emotional attunement, and the embodied skills that make mentorship effective — none of which transfer to a language model.',
    link: 'Explore Embodied Teaching',
    href: '/notes/NEU_embodied-teaching-syllabus',
  },
  {
    title: 'CONDUCTING AI',
    description:
      'The five supervisory capacities: plausibility auditing, problem formulation, tool orchestration, interpretive judgment, and executive integration. The course that teaches you to conduct the orchestra, not play every instrument.',
    link: 'Explore Conducting AI',
    href: '/notes/NEU_conducting-ai-concept-brief',
  },
  {
    title: 'THE AI SHERPA',
    description:
      'A practitioner\'s guide for experiential learning. The full 18-chapter arc — from design failure diagnosis through the Sherpa infrastructure to domain field guides for co-op, study abroad, clinical, trades, and corporate early career programs.',
    link: 'Explore The AI Sherpa',
    href: '/notes/NEU_ai-sherpa-tictoc',
  },
]

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
                <a href="/tools" className={buttonStyles}>
                  See Our Services →
                </a>
                <a href="/about" className={buttonOutline}>
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

      {/* The Series Section */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              The Series
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Five courses, each targeting a distinct human capacity that remains
              beyond the reach of current AI. Taken together, they form a map of
              what makes human intelligence irreducible.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {COURSES.map((course) => (
              <div
                key={course.title}
                className="rounded-lg border bg-card p-8 shadow-sm flex flex-col"
              >
                <h3 className="text-lg font-bold tracking-wide mb-3">
                  {course.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {course.description}
                </p>
                <a
                  href={course.href}
                  className="mt-6 text-sm font-medium text-foreground hover:underline"
                >
                  {course.link} →
                </a>
              </div>
            ))}
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
