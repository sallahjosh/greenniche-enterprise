import { FileText } from 'lucide-react'

export function Blog() {
  return (
    <>
      <section className="border-b border-brand-100 bg-brand-50/40">
        <div className="container-page py-12 md:py-16">
          <h1 className="text-3xl font-extrabold md:text-4xl">Blog &amp; News</h1>
          <p className="mt-3 max-w-2xl text-lg text-brand-900/80">
            Business updates, sustainability articles and circular economy education from GreenNiche.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="card mx-auto flex max-w-lg flex-col items-center p-12 text-center">
          <FileText className="h-12 w-12 text-brand-300" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold">No posts published yet</h2>
          <p className="mt-1 text-brand-900/70">
            Articles will appear here once an administrator publishes them. We do not publish
            fictional company news.
          </p>
        </div>
      </section>
    </>
  )
}
