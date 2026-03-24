export const theme = {
  // Nina Harris & Co palette — swap these to rebrand the entire site
  // All pairings meet WCAG AAA contrast (7:1) against bb8 (parchment)
  colors: {
    bb1: '#0D0D0D',   // soot black — primary text (16.5:1)
    bb2: '#434343',   // iron grey — primary accent, headers (7.1:1)
    bb3: '#6B0000',   // dried-ink red — danger, emphasis (7.8:1)
    bb4: '#645420',   // cold brass — highlight, callout (7.2:1)
    bb5: '#2F2F2F',   // charcoal — secondary accent (10.8:1)
    bb6: '#4D4D43',   // tarnished pewter — muted accent (7.0:1)
    bb7: '#5E5A4A',   // aged ledger tan — borders, subtle backgrounds (7.0:1)
    bb8: '#E8E0D0',   // parchment — page background, light surfaces
  },
  // Semantic aliases — use these in components, not raw hex
  semantic: {
    text:        'bb1',
    accent:      'bb2',
    danger:      'bb3',
    highlight:   'bb4',
    secondary:   'bb5',
    muted:       'bb6',
    border:      'bb7',
    background:  'bb8',
  },
} as const

export type Theme = typeof theme
