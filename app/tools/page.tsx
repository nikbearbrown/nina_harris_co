import { join } from 'path'
import { readFileSync } from 'fs'
import type { Metadata } from 'next'
import { scanHtmlDir } from '@/lib/html-meta'
import ToolsBrowser from './ToolsBrowser'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Tools - Nina Harris & Co',
  description: 'AI tools built for the brand process — strategy, editorial, copywriting, and more.',
}

interface Tool {
  id: string
  name: string
  slug: string
  description: string
  tool_type: 'link' | 'artifact'
  claude_url: string | null
  tags: string[]
}

const FEATURED_TOOLS = [
  {
    name: 'NINA',
    subtitle: 'Brand Identity System',
    description:
      'A senior brand strategist built as an AI tool. Walks you through a complete brand identity build — intake, archetype mapping, audience personas, creative brief, value proposition, voice and tone, visual direction, and style guide. Every step earned before the next one unlocks.',
    cta: 'Use Nina',
    href: '#',
  },
  {
    name: 'EDDY THE EDITOR',
    subtitle: 'Substack Article Review',
    description:
      'A two-mode editorial tool for writers publishing on Substack. Reviews against professional journalism standards — headline mechanics, hook strength, structural flow, paragraph pacing, logical coherence — then adds Substack-specific publishing expertise.',
    cta: 'Use Eddy',
    href: '#',
  },
  {
    name: 'OGILVY',
    subtitle: 'Copywriting Coach',
    description:
      "An AI copywriting coach built on David Ogilvy's principles. Mode one teaches — breaks down why your draft isn't working. Mode two writes — produces copy in your brand voice across platforms, calibrated for each channel's conventions.",
    cta: 'Use Ogilvy',
    href: '#',
  },
  {
    name: 'BRANDY',
    subtitle: 'Brand Communications Audit',
    description:
      'Runs a brand audit on any existing identity — visual, verbal, or strategic. Evaluates coherence, tests positioning against competitors, scores audience fit, and identifies the most likely failure mode when someone else implements your brand.',
    cta: 'Use Brandy',
    href: '#',
  },
  {
    name: 'MADISON',
    subtitle: 'Venture Pitch Strategist',
    description:
      'Builds a 10-slide pitch deck from strategy, not from a template. Pressure-tests your claims, flags thin evidence, enforces timing discipline at 130 words per minute, and strips AI scaffolding before anything reaches an investor, donor, or grader.',
    cta: 'Use Madison',
    href: '#',
  },
  {
    name: 'PROOF',
    subtitle: 'Non-Profit Brand Audit',
    description:
      "Audits what a nonprofit brand actually establishes — not what it claims, intends, or aspires to. Every finding labeled, every recommendation traceable to a specific observation. Built for 501(c)(3) organizations that need to know what their brand proves.",
    cta: 'Use PROOF',
    href: '#',
  },
  {
    name: 'SUBBY',
    subtitle: 'Substack Writing Assistant',
    description:
      'A two-mode Substack writing assistant covering 19 format-specific commands — from 300-word Notes to 3,000-word serial installments, subject lines to manifesto statements. Asks before it writes. Pushes back on weak briefs.',
    cta: 'Use Subby',
    href: '#',
  },
  {
    name: 'WILKES',
    subtitle: 'Narrative Journalism',
    description:
      'Generates narrative journalism in the spirit of Paul Wilkes — intimate, specific, witness-based, and never preachy. Long-form profiles, documentary arcs, and field narratives for nonprofit storytelling.',
    cta: 'Use Wilkes',
    href: '#',
  },
]

export default async function ToolsPage() {
  // 1. Filesystem artifacts
  const artifactDocs = scanHtmlDir(join(process.cwd(), 'public', 'artifacts'))
  const artifactTools: Tool[] = artifactDocs.map(doc => ({
    id: `fs-${doc.slug}`,
    name: doc.title,
    slug: doc.slug,
    description: doc.description,
    tool_type: 'artifact',
    claude_url: `/artifacts/${doc.filename}`,
    tags: doc.tags,
  }))

  // 2. Database link tools — only attempt if DATABASE_URL is configured
  let dbTools: Tool[] = []
  if (process.env.DATABASE_URL) {
    try {
      const { sql } = await import('@/lib/db')
      dbTools = await sql`SELECT * FROM tools WHERE tool_type = 'link' ORDER BY created_at DESC`
    } catch (err) {
      console.error('[tools/page] Failed to fetch DB tools:', err)
    }
  }

  // 3. Merge, deduplicate by slug (filesystem wins)
  const slugSet = new Set(artifactTools.map(t => t.slug))
  const linkTools = dbTools.filter(t => !slugSet.has(t.slug))
  const allTools = [...artifactTools, ...linkTools]

  // Read curated filter tags from filters.json
  let filterTags: string[] = []
  try {
    const raw = readFileSync(join(process.cwd(), 'public', 'artifacts', 'filters.json'), 'utf-8')
    filterTags = JSON.parse(raw)
  } catch {}

  return (
    <div className="flex flex-col w-full">

      {/* Hero */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Tools
          </p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8">
            The AI tools behind the work
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
            Every tool in this collection was built for a specific job in the brand process — the kind
            of work that used to require hiring a strategist, an editor, or a pitch consultant. We use
            them in every project. They&apos;re also available for anyone to use on their own. Built
            through the Madison Project at Humanitarians AI and the INFO 7375 course at Northeastern
            University.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Featured tools — stacked list */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="divide-y divide-border">
            {FEATURED_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="grid md:grid-cols-[1fr_auto] gap-6 items-start py-10 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                    {tool.subtitle}
                  </p>
                  <h2 className="text-xl font-bold tracking-tight mb-3">{tool.name}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
                    {tool.description}
                  </p>
                </div>
                <div className="md:pt-8">
                  <a
                    href={tool.href}
                    className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium transition-colors border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                  >
                    {tool.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic tools (artifacts + DB) — shown only if any exist */}
      {allTools.length > 0 && (
        <>
          <div className="border-t border-border" />
          <section className="w-full py-16 md:py-24 bg-muted/40">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight mb-8">More tools</h2>
              <ToolsBrowser tools={allTools} filterTags={filterTags} />
            </div>
          </section>
        </>
      )}

    </div>
  )
}
