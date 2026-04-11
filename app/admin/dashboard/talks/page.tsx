'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RefreshCw, ExternalLink } from 'lucide-react'

interface Doc {
  slug: string
  filename: string
  title: string
  description: string
  tags: string[]
  author?: string
  category?: string
  slideCount?: string
}

interface Group {
  folder: string
  folderTitle: string
  docs: Doc[]
}

export default function TalksAdminPage() {
  const [groups, setGroups] = useState<Group[]>([])
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState('')

  const fetchGroups = useCallback(async () => {
    setSyncing(true)
    setError('')
    try {
      const res = await fetch('/api/admin/talks/sync', { method: 'POST' })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to sync')
      setGroups(data.groups)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error')
    } finally {
      setLoading(false)
      setSyncing(false)
    }
  }, [])

  useEffect(() => {
    fetchGroups()
  }, [fetchGroups])

  const totalDocs = groups.reduce((n, g) => n + g.docs.length, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter">Talks</h2>
          <p className="text-sm text-muted-foreground">
            HTML files in{' '}
            <code className="text-xs bg-muted px-1 rounded">public/talks/</code>{' '}
            organized by subfolder — filesystem is the source of truth
            {totalDocs > 0 && (
              <span className="ml-2 text-muted-foreground">({totalDocs} talk{totalDocs !== 1 ? 's' : ''})</span>
            )}
          </p>
        </div>
        <Button variant="outline" onClick={fetchGroups} disabled={syncing} className="gap-2">
          <RefreshCw className={`h-4 w-4 ${syncing ? 'animate-spin' : ''}`} />
          {syncing ? 'Syncing…' : 'Sync Talks'}
        </Button>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>
      )}

      <div className="rounded-md bg-muted/50 border p-4 text-sm text-muted-foreground space-y-1">
        <p className="font-medium text-foreground">Adding talks</p>
        <p>
          Drop <code className="text-xs bg-muted px-1 rounded">.html</code> files into subfolders of{' '}
          <code className="text-xs bg-muted px-1 rounded">public/talks/</code>, e.g.{' '}
          <code className="text-xs bg-muted px-1 rounded">public/talks/botspeak/my-talk.html</code>.
          Each file should include{' '}
          <code className="text-xs bg-muted px-1 rounded">&lt;title&gt;</code>,{' '}
          <code className="text-xs bg-muted px-1 rounded">description</code>,{' '}
          <code className="text-xs bg-muted px-1 rounded">keywords</code>,{' '}
          <code className="text-xs bg-muted px-1 rounded">author</code>,{' '}
          <code className="text-xs bg-muted px-1 rounded">category</code>, and{' '}
          <code className="text-xs bg-muted px-1 rounded">slide-count</code> meta tags.
          Push to main — Vercel deploys and the talk appears automatically.
        </p>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Loading…</p>
      ) : groups.length === 0 ? (
        <p className="text-muted-foreground">
          No talks found. Drop <code className="text-xs bg-muted px-1 rounded">.html</code> files into subfolders of{' '}
          <code className="text-xs bg-muted px-1 rounded">public/talks/</code>.
        </p>
      ) : (
        <div className="space-y-8">
          {groups.map(g => (
            <div key={g.folder}>
              <h3 className="text-lg font-semibold tracking-tight mb-3 border-b pb-2">
                {g.folderTitle}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({g.docs.length} talk{g.docs.length !== 1 ? 's' : ''})
                </span>
              </h3>
              <div className="grid gap-3">
                {g.docs.map(doc => (
                  <Card key={doc.slug}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 py-4">
                      <div className="space-y-1 min-w-0 flex-1">
                        <CardTitle className="text-base flex items-center gap-2 flex-wrap">
                          {doc.title}
                          <Badge variant="outline" className="font-mono text-xs">{doc.filename}</Badge>
                          {doc.category && (
                            <Badge variant="secondary" className="text-[10px]">{doc.category}</Badge>
                          )}
                          {doc.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                          ))}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          {doc.author && <span>{doc.author}</span>}
                          {doc.slideCount && (
                            <>
                              {doc.author && <span>·</span>}
                              <span>{doc.slideCount} slides</span>
                            </>
                          )}
                        </div>
                        {doc.description && (
                          <CardDescription>{doc.description}</CardDescription>
                        )}
                      </div>
                      <div className="flex gap-2 ml-4">
                        <a href={`/talks/${doc.slug}`} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </a>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
