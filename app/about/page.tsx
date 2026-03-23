import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Scrooge & Marley',
  description: 'Scrooge & Marley — Counting House & Money Lenders, Est. 1836, 1 Cornhill, London.',
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">About the Firm</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <p>
              Scrooge &amp; Marley is a London counting house and money lending concern,
              established in 1836. We provide financial services to merchants, landlords,
              and trading concerns across the City. Our reputation is built on precision,
              discretion, and the unwavering enforcement of contractual obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Founders</h2>
            <p>
              The firm was founded by <strong>Ebenezer Scrooge</strong> and <strong>Jacob Marley</strong>.
              Mr Marley, though deceased these seven years, remains memorialised in the name above
              our door. Mr Scrooge, sole surviving partner, continues to conduct all business
              with the same exacting standards upon which the firm was built.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Principles</h2>
            <p>
              We believe that sound finance requires no ornamentation. A debt is a debt.
              A contract is a contract. We do not speculate, we do not indulge sentiment,
              and we do not extend terms beyond what prudence allows. These principles have
              served our clients — and our ledgers — well.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <p>
              Scrooge &amp; Marley offers debt recovery, money lending, estate accounting,
              and commercial bookkeeping. All engagements are governed by written agreement.
              We maintain detailed records and provide quarterly statements to all clients
              without exception.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Correspondence</h2>
            <p>
              Enquiries may be directed to{' '}
              <a href="mailto:correspondence@scroogeandmarley.com" className="text-primary hover:underline">correspondence@scroogeandmarley.com</a>.
            </p>
            <p className="mt-2 text-muted-foreground">
              1 Cornhill, London EC3V 3ND
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
