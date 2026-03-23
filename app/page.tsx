const buttonStyles =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground'

const buttonOutline =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'

const FEATURES = [
  {
    title: 'DEBT RECOVERY',
    description:
      'We pursue outstanding balances with methodical rigour. Every shilling owed is a shilling that shall be collected. Our ledgers do not forget, and neither do we.',
    link: 'Review collection terms',
  },
  {
    title: 'MONEY LENDING',
    description:
      'Capital advanced at competitive rates, secured against suitable collateral. Terms are precise, interest is punctual, and repayment is non-negotiable. We lend to those who can repay.',
    link: 'Enquire about lending rates',
  },
  {
    title: 'ESTATE ACCOUNTING',
    description:
      'Complete stewardship of financial estates, from property rents to inheritance settlements. Every transaction recorded in duplicate, every farthing accounted for.',
    link: 'Learn about estate services',
  },
  {
    title: 'COMMERCIAL BOOKKEEPING',
    description:
      'Double-entry bookkeeping for merchants, warehouses, and trading concerns. We bring order to commerce and ensure your accounts withstand the scrutiny of any auditor.',
    link: 'See bookkeeping services',
  },
]

const BENEFITS = [
  {
    heading: 'FOR CREDITORS',
    items: [
      'Systematic recovery of outstanding debts',
      'Detailed accounting of every payment received',
      'Legal proceedings initiated where necessary',
      'Quarterly statements delivered without fail',
    ],
  },
  {
    heading: 'FOR BORROWERS',
    items: [
      'Clear terms set forth before any sum changes hands',
      'Repayment schedules calculated to the penny',
      'No hidden charges — our rates are stated plainly',
      'Prompt acknowledgement of all payments rendered',
    ],
  },
  {
    heading: 'FOR MERCHANTS',
    items: [
      'Ledgers maintained with absolute precision',
      'Monthly reconciliation of all trade accounts',
      'Tax obligations calculated and documented',
      'Confidential handling of all financial matters',
    ],
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
                Scrooge &amp; Marley
              </h1>
              <p className="text-lg text-muted-foreground">
                Counting House &amp; Money Lenders, Est. 1836
              </p>
              <p className="max-w-[540px] text-lg leading-relaxed">
                We deal in debts, not dreams. For nearly a decade, our firm has provided
                sound financial services to the merchants, landlords, and trading concerns
                of London. Every transaction recorded. Every obligation enforced.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="mailto:correspondence@scroogeandmarley.com" className={buttonStyles}>
                  Arrange a Consultation
                </a>
                <a href="mailto:correspondence@scroogeandmarley.com" className={buttonOutline}>
                  Send Correspondence
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-muted/40 p-12 flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-6xl font-bold tracking-tighter text-foreground/80">&pound;</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Capital Secured</p>
                <p className="text-sm text-muted-foreground">1 Cornhill, London</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scrooge &amp; Marley offers a complete range of financial services
              for the prudent man of business. Precision in all matters. Sentiment in none.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border bg-card p-8 shadow-sm flex flex-col"
              >
                <h3 className="text-lg font-bold tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="mt-6 text-sm font-medium text-foreground hover:underline"
                >
                  {feature.link} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-background/60 mb-3">
              Who We Serve
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Our clients value discretion, accuracy, and the certainty that their
              financial affairs are managed by men who understand the weight of a pound.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.heading}
                className="rounded-lg border border-background/10 bg-background/5 p-8"
              >
                <h3 className="text-lg font-bold tracking-wide mb-4">
                  {benefit.heading}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item) => (
                    <li
                      key={item}
                      className="text-background/80 text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-background/40 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-[var(--bb-2)] text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-3">
            Settle Your Accounts
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether you require capital advanced, debts collected, or ledgers put in order,
            Scrooge &amp; Marley stands ready. We do not waste your time, and we expect
            the same courtesy. State your business plainly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:correspondence@scroogeandmarley.com"
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-bold tracking-wide transition-colors bg-white text-[var(--bb-2)] shadow hover:bg-white/90"
            >
              ARRANGE A MEETING
            </a>
            <a
              href="/about"
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-bold tracking-wide transition-colors border border-white/30 text-white hover:bg-white/10"
            >
              ABOUT THE FIRM
            </a>
            <a
              href="mailto:correspondence@scroogeandmarley.com"
              className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-bold tracking-wide transition-colors border border-white/30 text-white hover:bg-white/10"
            >
              SEND CORRESPONDENCE
            </a>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Place of Business
          </h2>
          <p className="max-w-[600px] mx-auto text-background/70 text-lg mb-8">
            Scrooge &amp; Marley receive callers by appointment at our counting house.
            Correspondence may be directed to the address below. We do not keep idle hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: '1 Cornhill, London', href: '#' },
              { name: 'correspondence@scroogeandmarley.com', href: 'mailto:correspondence@scroogeandmarley.com' },
            ].map((link) => (
              <span
                key={link.name}
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors border border-background/30 text-background"
              >
                {link.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
