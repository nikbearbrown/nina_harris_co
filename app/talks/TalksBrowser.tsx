'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Search, X, ExternalLink } from 'lucide-react'

interface Doc {
  slug: string
  filename: string
  title: string
  description: string
  tags: string[]
  author?: string
  category?: string
  slideCount?: string
  thumbnail?: string
}

interface Group {
  folder: string
  folderTitle: string
  docs: Doc[]
}

const TOTAL_WEEKS = 14

function getWeekNumber(folder: string): number | null {
  const match = folder.match(/^info-7375-week-(\d+)$/i)
  return match ? parseInt(match[1]) : null
}

function DocCard({ doc }: { doc: Doc }) {
  return (
    <Link href={`/talks/${doc.slug}`}>
      <Card className="h-full hover:border-foreground/20 transition-colors cursor-pointer overflow-hidden">
        {doc.thumbnail && (
          <div className="relative w-full aspect-video bg-muted">
            <Image
              src={doc.thumbnail}
              alt={doc.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            {doc.title}
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          </CardTitle>
          {doc.description && (
            <CardDescription className="line-clamp-2">
              {doc.description}
            </CardDescription>
          )}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
            {doc.author && <span>{doc.author}</span>}
            {doc.category && (
              <>
                {doc.author && <span>·</span>}
                <span>{doc.category}</span>
              </>
            )}
            {doc.slideCount && (
              <>
                {(doc.author || doc.category) && <span>·</span>}
                <span>{doc.slideCount} slides</span>
              </>
            )}
          </div>
          {doc.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-2">
              {doc.tags.slice(0, 3).map(tag => (
                <Badge key={tag} variant="secondary" className="text-[10px]">
                  {tag}
                </Badge>
              ))}
              {doc.tags.length > 3 && (
                <span className="text-[10px] text-muted-foreground">
                  +{doc.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </CardHeader>
      </Card>
    </Link>
  )
}

export default function TalksBrowser({ groups, filterTags = [] }: { groups: Group[]; filterTags?: string[] }) {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [selectedWeek, setSelectedWeek] = useState(1)

  const allTags = useMemo(() => {
    if (filterTags.length > 0) return filterTags
    const set = new Set<string>()
    groups.forEach(g => g.docs.forEach(d => d.tags.forEach(t => set.add(t))))
    return Array.from(set).sort()
  }, [groups, filterTags])

  // All info-7375-week groups (unfiltered) — used to know which weeks have any content
  const weeksWithContent = useMemo(() => {
    const set = new Set<number>()
    groups.forEach(g => {
      const w = getWeekNumber(g.folder)
      if (w !== null) set.add(w)
    })
    return set
  }, [groups])

  const filteredGroups = useMemo(() => {
    return groups
      .map(g => {
        let docs = g.docs
        if (activeTag) docs = docs.filter(d => d.tags.includes(activeTag))
        if (query.trim()) {
          const q = query.toLowerCase()
          docs = docs.filter(
            d =>
              d.title.toLowerCase().includes(q) ||
              d.description.toLowerCase().includes(q) ||
              d.tags.some(t => t.toLowerCase().includes(q))
          )
        }
        return { ...g, docs }
      })
      .filter(g => g.docs.length > 0)
  }, [groups, query, activeTag])

  const info7375Groups = useMemo(
    () => filteredGroups.filter(g => getWeekNumber(g.folder) !== null),
    [filteredGroups]
  )

  const otherGroups = useMemo(
    () => filteredGroups.filter(g => getWeekNumber(g.folder) === null),
    [filteredGroups]
  )

  const currentWeekDocs = useMemo(
    () => info7375Groups.find(g => getWeekNumber(g.folder) === selectedWeek)?.docs ?? [],
    [info7375Groups, selectedWeek]
  )

  const hasAnyContent = filteredGroups.length > 0 || weeksWithContent.size > 0

  return (
    <>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search talks…"
          className="w-full pl-10 pr-10 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-ring"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 items-center mb-8">
          <span className="text-xs text-muted-foreground mr-1">Filter:</span>
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-0.5"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant={activeTag === tag ? 'default' : 'outline'}
              className="cursor-pointer text-xs"
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {!hasAnyContent ? (
        <p className="text-muted-foreground">No talks yet.</p>
      ) : (
        <div className="space-y-10">

          {/* INFO 7375 — always rendered so week nav is always visible */}
          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-1 border-b pb-2">
              INFO 7375 — Branding &amp; AI
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Summer 2026 · Northeastern University</p>

            {/* Week selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map(week => {
                const hasContent = weeksWithContent.has(week)
                const isSelected = selectedWeek === week
                return (
                  <button
                    key={week}
                    onClick={() => hasContent && setSelectedWeek(week)}
                    disabled={!hasContent}
                    className={[
                      'px-3 py-1.5 text-sm font-medium rounded-md border transition-colors',
                      isSelected && hasContent
                        ? 'bg-foreground text-background border-foreground'
                        : hasContent
                        ? 'border-border hover:border-foreground/50 hover:bg-muted'
                        : 'border-border/30 text-muted-foreground/35 cursor-not-allowed',
                    ].join(' ')}
                  >
                    Week {week}
                  </button>
                )
              })}
            </div>

            {/* Selected week content */}
            {currentWeekDocs.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {currentWeekDocs.map(doc => (
                  <DocCard key={doc.slug} doc={doc} />
                ))}
              </div>
            ) : weeksWithContent.has(selectedWeek) ? (
              <p className="text-sm text-muted-foreground">
                No talks for Week {selectedWeek} match your search.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Week {selectedWeek} content coming soon.
              </p>
            )}
          </section>

          {/* All other (non INFO 7375) groups */}
          {otherGroups.map(g => (
            <section key={g.folder}>
              <h2 className="text-2xl font-bold tracking-tighter mb-4 border-b pb-2">
                {g.folderTitle}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.docs.map(doc => (
                  <DocCard key={doc.slug} doc={doc} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  )
}
