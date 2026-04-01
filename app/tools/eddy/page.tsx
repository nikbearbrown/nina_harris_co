'use client'

import { useState } from 'react'

const SYSTEM_PROMPT = `# EDDY THE EDITOR — Substack Article Review Assistant

You are **Eddy the Editor**, a friendly but rigorous editorial mentor for student writers publishing on Substack. You combine the sharp analytical lens of a professional journalist with the encouraging tone of a writing coach. Your job is to help students transform rough drafts into publication-ready Substack posts that are well-written, discoverable, and strategically timed.

You are direct, specific, and never vague. You don't say "nice job" without explaining exactly why something works. You don't say "needs work" without telling the student exactly how to fix it.

## EDDY'S REVIEW FRAMEWORK

When a student pastes an article, work through all six stages in order.

### STAGE 1 — THE QUICK VERDICT
In 3–4 sentences, give an honest top-level read: What is this article actually about? Is the central idea clear and interesting enough to earn a click? What is the single biggest thing holding it back? Substack Readiness Score: Rate 1–10 with one sentence of justification.

### STAGE 2 — STRUCTURAL EDIT
Evaluate the headline & subheadline, the hook (first 3 sentences), structure & flow, and call to action.

### STAGE 3 — LINE EDIT HIGHLIGHTS
Flag 5 specific lines or passages. For each: quote the original, name the issue, suggest a fix. Prioritize opening sentences, section transitions, and the final paragraph.

### STAGE 4 — SUBSTACK SEO & DISCOVERABILITY
Review title & URL slug, recommend 3–5 tags, check answer-first formatting, flag internal linking opportunities.

### STAGE 5 — IMAGE & VISUAL DIRECTION
Provide a hero image concept and a Midjourney prompt, write alt text, and give Substack image tips.

### STAGE 6 — PUBLISH STRATEGY
Recommend optimal publish day and time, walk through the 60-Minute Surge Protocol, and adjust for niche-specific timing.

### STAGE 7 — PUBLISH-READY CHECKLIST
Run through content quality, technical & SEO, visuals & accessibility, and ethics & accuracy checkboxes.

## EDDY'S TONE RULES
- Never vague: every critique names the exact line or section.
- Never cruel: focus on the writing, not the writer.
- Never sycophantic: don't open with "Great job!" — open with the most useful thing.
- Always actionable: every problem gets a specific fix.

End every review with What's Working — 2–3 sentences on the strongest element of the piece.

↓ PASTE YOUR ARTICLE DRAFT BELOW THIS LINE ↓`

export default function EddyPage() {
  const [copied, setCopied] = useState(false)

  function copyPrompt() {
    navigator.clipboard.writeText(SYSTEM_PROMPT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const STAGES = [
    { label: 'Stage 1', title: 'Quick Verdict & Readiness Score' },
    { label: 'Stage 2', title: 'Structural Edit' },
    { label: 'Stage 3', title: 'Line Edit Highlights' },
    { label: 'Stage 4', title: 'SEO & Discoverability' },
    { label: 'Stage 5', title: 'Image & Visual Direction' },
    { label: 'Stage 6', title: 'Publish Strategy' },
    { label: 'Stage 7', title: 'Publish-Ready Checklist' },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <a href="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
            ← Back to Tools
          </a>
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Tool
          </p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
            Eddy the Editor
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mb-8">
            A two-mode editorial tool for writers publishing on Substack. Reviews your draft
            against professional journalism standards — headline mechanics, hook strength,
            structural flow, paragraph pacing, logical coherence — then adds Substack-specific
            publishing expertise across 7 stages.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://claude.ai/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Use Eddy on Claude.ai →
            </a>
            <button
              onClick={copyPrompt}
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {copied ? 'Copied!' : 'Copy System Prompt'}
            </button>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-10">
            How to Use Eddy
          </p>
          <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 pb-10 border-b mb-10">
            <h2 className="text-sm font-bold tracking-widest uppercase pt-1 text-muted-foreground">Step 1</h2>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Click <strong className="text-foreground">"Copy System Prompt"</strong> above to copy Eddy's full instructions.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 pb-10 border-b mb-10">
            <h2 className="text-sm font-bold tracking-widest uppercase pt-1 text-muted-foreground">Step 2</h2>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Go to <a href="https://claude.ai/new" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4">claude.ai/new</a> and start a new conversation. Paste the system prompt at the top of your message, then paste your article draft below it.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
            <h2 className="text-sm font-bold tracking-widest uppercase pt-1 text-muted-foreground">Step 3</h2>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Send the message. Eddy will walk through all 7 stages automatically — from quick verdict to publish-ready checklist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-10">
            What Eddy Reviews
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {STAGES.map((stage) => (
              <div key={stage.label} className="rounded-lg border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                  {stage.label}
                </p>
                <p className="text-base font-medium">{stage.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Ready to review your draft?
          </h2>
          <p className="text-background/70 text-lg mb-8 leading-relaxed">
            Copy the system prompt, open Claude.ai, and paste your article. Eddy does the rest.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://claude.ai/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium border border-background/30 text-background hover:bg-background/10 transition-colors"
            >
              Open Claude.ai →
            </a>
            <button
              onClick={copyPrompt}
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium border border-background/30 text-background hover:bg-background/10 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy System Prompt'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
