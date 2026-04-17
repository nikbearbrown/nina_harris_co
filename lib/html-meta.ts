import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

export interface HtmlDocMeta {
  slug: string
  filename: string
  title: string
  description: string
  tags: string[]
  thumbnail?: string
}

export interface GroupedHtmlDocs {
  folder: string
  folderTitle: string
  docs: HtmlDocMeta[]
}

function extractTag(html: string, pattern: RegExp): string | null {
  const match = html.match(pattern)
  return match ? match[1].trim() : null
}

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export function scanHtmlDir(dir: string): HtmlDocMeta[] {
  let files: string[]
  try {
    files = readdirSync(dir).filter(f => f.endsWith('.html')).sort()
  } catch {
    return []
  }

  return files.map(filename => {
    const slug = filename.replace('.html', '')
    let title = titleCase(slug)
    let description = ''
    let tags: string[] = []
    let thumbnail: string | undefined

    try {
      const html = readFileSync(join(dir, filename), 'utf-8')
      const t = extractTag(html, /<title[^>]*>([^<]+)<\/title>/i)
      if (t) title = t
      const d = extractTag(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)
        ?? extractTag(html, /<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i)
      if (d) description = d
      const k = extractTag(html, /<meta\s+name=["']keywords["']\s+content=["']([^"']+)["']/i)
        ?? extractTag(html, /<meta\s+content=["']([^"']+)["']\s+name=["']keywords["']/i)
      if (k) tags = k.split(',').map(t => t.trim()).filter(Boolean)
      const img = extractTag(html, /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)
        ?? extractTag(html, /<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i)
      if (img) thumbnail = img
    } catch {}

    return { slug, filename, title, description, tags, thumbnail }
  })
}

/** Scan subdirectories of `dir`, returning docs grouped by folder name, sorted alphabetically. */
export function scanHtmlSubdirs(dir: string): GroupedHtmlDocs[] {
  let entries: string[]
  try {
    entries = readdirSync(dir).sort()
  } catch {
    return []
  }

  const groups: GroupedHtmlDocs[] = []

  for (const entry of entries) {
    const fullPath = join(dir, entry)
    try {
      if (!statSync(fullPath).isDirectory()) continue
    } catch {
      continue
    }

    const docs = scanHtmlDir(fullPath).map(doc => ({
      ...doc,
      // prefix slug with folder so routes resolve correctly
      slug: `${entry}/${doc.slug}`,
    }))

    if (docs.length > 0) {
      groups.push({
        folder: entry,
        folderTitle: titleCase(entry),
        docs: docs.sort((a, b) => a.title.localeCompare(b.title)),
      })
    }
  }

  return groups
}
