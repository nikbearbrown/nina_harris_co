
# Scrooge & Marley — Next.js Website Template

A production-grade Next.js website template demonstrated through the fictional 
Victorian counting house of Ebenezer Scrooge and Jacob Marley, from Charles 
Dickens' *A Christmas Carol* (1843, public domain).

This is one instance of the **lorem-ipsum** template series — the same codebase 
styled for different fictional businesses from public domain literature to 
demonstrate real-world adaptability across brand identities, industries, and 
content types.

**Live site:** https://marley.bearbrown.co  
**GitHub:** https://github.com/nikbearbrown/marley  
**Template series:** https://github.com/nikbearbrown/lorem-ipsum

## Stack

- Next.js (App Router)
- Tailwind CSS + @tailwindcss/typography
- TypeScript
- Neon (serverless PostgreSQL)
- Vercel Blob (image storage)
- Tiptap (rich text editor)
- next-themes (dark/light mode)

## Prerequisites

- Node.js LTS — https://nodejs.org/
- Git — https://git-scm.com/downloads

### macOS
\`\`\`bash
brew install node git
\`\`\`

### Ubuntu/Debian
\`\`\`bash
sudo apt update && sudo apt install nodejs npm git
\`\`\`

### Windows
Download and run the installers from the links above. Restart after.

### Verify
\`\`\`bash
node --version && npm --version && git --version
\`\`\`

## Getting Started

\`\`\`bash
git clone https://github.com/nikbearbrown/marley.git
cd marley
npm install --legacy-peer-deps
cp .env.example .env.local   # add your environment variables
npm run dev
\`\`\`

Open http://localhost:3000

## Environment Variables

\`\`\`
DATABASE_URL=              # Neon PostgreSQL connection string
ADMIN_PASSWORD=            # Password for /admin/login
BLOB_READ_WRITE_TOKEN=     # Vercel Blob token
NEXT_PUBLIC_SITE_URL=      # https://marley.bearbrown.co
\`\`\`

## Database Setup

Run the SQL in `db/schema.sql` in your Neon dashboard, or paste the contents 
into the Neon SQL Editor.

## Deployment

Push to `main` → Vercel auto-deploys.

Set all environment variables in Vercel → Project Settings → Environment Variables.

## Admin

Navigate to `/admin` — login with `ADMIN_PASSWORD`. Manage blog posts, tools, 
and Substack sections from the dashboard.

## Troubleshooting

- **npm install fails** — try `npm cache clean --force` then re-run with `--legacy-peer-deps`
- **Permission errors on Mac/Linux** — use `sudo` for system-wide installs
- **Network issues** — `npm config set registry https://registry.npmjs.org/`

## About

Based on the Medhavy platform codebase. Template series created by 
Nik Bear Brown and Srinivas Sridhar.

*"Scrooge & Marley" is a fictional business from A Christmas Carol by 
Charles Dickens (1843), public domain.*

---

After updating README.md, commit and push:
git add README.md
git commit -m "docs: update README for Scrooge & Marley template"
git push origin main<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Marley template — multi-brand Next.js architecture reference</title>
  <meta name="description" content="Technical reference for developers working on thpastedthis help at all?10:19 AMAssessed HTML template's readiness for repository integrationAssessed HTML template's readiness for repository integrationYes — it's already a perfect dev doc. It has all three required meta tags (title, description, keywords), uses the BB palette CSS variables, and covers exactly what a developer needs to work on the codebase.
Drop it straight into public/dev/ and it auto-appears on /dev with no other steps needed:
bashcp /path/to/the/file.html public/dev/marley-template-reference.html
git add public/dev/marley-template-reference.html
git commit -m "docs: add Marley template architecture reference"
git push origin main
```

One thing worth updating inside the doc before you push — the footer currently says:
```
Built with bearbrown.co · AI tools for educators, creators & founders
```

That's Medhavy/Nik's tagline. For the Marley template it should either be removed or changed to something neutral like:
```
Marley Template · github.com/nikbearbrown/marley
```

Give Claude Code that as a one-liner:
```
In public/dev/marley-template-reference.html, update the footer text 
from "AI tools for educators, creators & founders" to 
"Marley Template · github.com/nikbearbrown/marley". 
Only change that line.No that should always be there ... it should drive traffic to my real consulting company ... every page should have a link to bear brown and co https://www.bearbrown.co/ and Nik Bear Brown's substack https://www.skepticism.ai/. all footers on all pages something Marley is open source under an MIT lience by the above10:23 AMSynthesized footer requirements linking consulting ventures and open-source licensingSynthesized footer requirements linking consulting ventures and open-source licensingRead CLAUDE.md first.

Add persistent attribution to the Footer component and all standalone HTML files.

1. FOOTER COMPONENT (components/Footer/Footer.tsx)
   Add a bottom attribution bar below the existing copyright line:

   "Marley is open source (MIT License) · Built by Nik Bear Brown · 
   bearbrown.co · The Skepticism AI Substack"

   Links:
   - "Nik Bear Brown" → https://www.bearbrown.co/
   - "bearbrown.co" → https://www.bearbrown.co/
   - "The Skepticism AI Substack" → https://www.skepticism.ai/

   Style: same muted treatment as the copyright line. 
   All links open in new tab with rel="noopener noreferrer".
   Do not change any other part of the footer layout.

2. ADD MIT LICENSE FILE
   Create LICENSE in the repo root:

   MIT License
   Copyright (c) 2026 Nik Bear Brown
   
   (standard MIT license text)

3. HTML FILES IN public/dev/ AND public/artifacts/
   For every .html file in public/dev/ and public/artifacts/, 
   update or add the footer to include:

   "Marley is open source (MIT License) · 
   <a href="https://www.bearbrown.co/">bearbrown.co</a> · 
   <a href="https://www.skepticism.ai/">The Skepticism AI Substack</a>"

   Match the existing footer style in each file. 
   If no footer exists, add one above </body>.

4. CLAUDE.md
   Add a section noting:
   - MIT License, copyright Nik Bear Brown
   - All pages link to https://www.bearbrown.co/ and https://www.skepticism.ai/
   - This attribution must be preserved in all brand instances and forks

List every file you plan to change before editing anything. Sonnet 4.6Extended
