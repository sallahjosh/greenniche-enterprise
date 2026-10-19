import { Award } from 'lucide-react'
import { brand } from '@/lib/brand'

export function About() {
  return (
    <>
      <section className="border-b border-brand-100 bg-brand-50/40">
        <div className="container-page py-12 md:py-16">
          <h1 className="text-3xl font-extrabold md:text-4xl">About GreenNiche Enterprise</h1>
          <p className="mt-3 max-w-3xl text-lg text-brand-900/80">
            A zero-waste, climate-smart agribusiness in {brand.location}, turning fresh cassava and
            its by-products into valuable products — reducing post-harvest waste and creating
            economic value for farmers and communities.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5 text-brand-900/80">
            <h2 className="text-2xl font-bold text-brand-900">The problem we saw</h2>
            <p>
              As a student in Cape Coast, {brand.founder} observed how much fresh cassava spoiled
              before it could reach markets and homes. Cassava is a vital staple, but its short
              shelf life after harvest leads to significant post-harvest loss for farmers and
              traders.
            </p>

            <h2 className="text-2xl font-bold text-brand-900">Founding GreenNiche</h2>
            <p>
              {brand.name} was founded to change that. By processing fresh cassava into Gari — a
              long-lasting, ready-to-eat staple — GreenNiche preserves the value of the harvest and
              extends its usefulness far beyond the fresh root.
            </p>

            <h2 className="text-2xl font-bold text-brand-900">The circular production model</h2>
            <p>
              The founding insight evolved into a circular model: fresh cassava becomes Gari, the
              peels become animal feed and charcoal, and the liquid from dewatering becomes starch —
              which in turn binds the charcoal. One crop. Every part used. Zero waste.
            </p>

            <h2 className="text-2xl font-bold text-brand-900">Our sustainability mission</h2>
            <p>
              We are not just processing Gari. We are processing the future. Our mission is to
              reduce agricultural waste, support smallholder farmers, and demonstrate that
              climate-smart agribusiness can be both sustainable and economically viable in Ghana.
            </p>

            <h2 className="text-2xl font-bold text-brand-900">Farmers and community</h2>
            <p>
              We work with local smallholder farmers and communities, creating dependable demand for
              cassava and turning what would be waste into products that serve households, livestock
              farmers, vendors and small businesses.
            </p>
          </div>

          {/* Founder card */}
          <aside className="card h-fit p-6">
            <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-brand-50">
              {/* Placeholder until an authentic founder photo is supplied. */}
              <span className="text-center text-sm text-brand-700">
                Founder photo
                <br />
                <span className="text-brand-900/50">(placeholder — to be supplied)</span>
              </span>
            </div>
            <h2 className="mt-4 text-xl font-bold">{brand.founder}</h2>
            <p className="text-sm text-brand-700">Known as {brand.founderKnownAs}</p>
            <p className="mt-1 text-sm text-brand-900/70">{brand.founderRole}, {brand.name}</p>
            <dl className="mt-4 space-y-2 text-sm text-brand-900/80">
              <div>
                <dt className="font-semibold">Education</dt>
                <dd>{brand.founderEducation}</dd>
              </div>
              <div>
                <dt className="font-semibold">Advocacy</dt>
                <dd>{brand.founderAdvocacy}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-brand-900/50">
              Biographical details are limited to verified facts from the project brief. No
              additional biographical information has been fabricated.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-brand-50/40">
        <div className="container-page py-14">
          <h2 className="text-2xl font-bold">Awards and recognition</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {brand.awards.map((a) => (
              <div key={a.event} className="card flex items-start gap-4 p-6">
                <Award className="mt-1 h-8 w-8 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="text-lg font-semibold text-brand-900">{a.title}</p>
                  <p className="text-brand-900/70">{a.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
