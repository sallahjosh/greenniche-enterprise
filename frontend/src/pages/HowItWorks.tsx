import React from 'react'
import { Sprout, Leaf, Flame, Droplets, Wheat, ArrowRight } from 'lucide-react'

export function HowItWorks() {
  return (
    <>
      <section className="border-b border-brand-100 bg-brand-50/40">
        <div className="container-page py-12 md:py-16">
          <h1 className="text-3xl font-extrabold md:text-4xl">How it works</h1>
          <p className="mt-3 max-w-3xl text-lg text-brand-900/80">
            One crop. Every part used. Zero waste. Here is how GreenNiche turns fresh cassava and
            its by-products into four valuable products.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <h2 className="text-2xl font-bold">From fresh cassava to Gari — and beyond</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          <Step n={1} icon={<Sprout className="h-6 w-6" />} title="Fresh cassava" text="Sourced from local smallholder farmers." />
          <Arrow />
          <Step n={2} icon={<Leaf className="h-6 w-6" />} title="Gari production" text="Processed into premium, long-lasting Gari." />
          <Arrow />
          <Step n={3} icon={<Wheat className="h-6 w-6" />} title="Cassava peels" text="What would be waste is collected as a raw material." />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Output icon={<Wheat className="h-6 w-6" />} title="Animal Feed" text="Cassava peels become nutritious feed for livestock and poultry farmers." />
          <Output icon={<Flame className="h-6 w-6" />} title="Charcoal" text="Cassava peels are pressed into charcoal, bound with our own starch." />
        </div>
      </section>

      <section className="bg-brand-50/40">
        <div className="container-page py-14">
          <h2 className="text-2xl font-bold">From dewatering liquid to starch</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            <Step n={1} icon={<Droplets className="h-6 w-6" />} title="Dewatering liquid" text="Liquid released during cassava dewatering is collected." />
            <Arrow />
            <Step n={2} icon={<Droplets className="h-6 w-6" />} title="Starch extraction" text="Natural starch is extracted from the liquid." />
            <Arrow />
            <Step n={3} icon={<Flame className="h-6 w-6" />} title="Charcoal binder" text="The starch binds our charcoal — closing the loop." />
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="card p-8">
          <h2 className="text-xl font-bold">Why this matters</h2>
          <p className="mt-3 text-brand-900/80">
            Each output contributes to our zero-waste approach: Gari feeds people, animal feed
            serves farmers, charcoal provides energy, and starch closes the loop by binding the
            charcoal. Nothing from the cassava is wasted.
          </p>
          <p className="mt-3 text-sm text-brand-900/60">
            We do not make unsupported numerical claims about emissions reductions or environmental
            impact here. Verified figures will be added as they are confirmed.
          </p>
        </div>
      </section>
    </>
  )
}

function Step({ n, icon, title, text }: { n: number; icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card flex h-full flex-col p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">{icon}</span>
        <span className="text-sm font-bold text-brand-300">0{n}</span>
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-brand-900/70">{text}</p>
    </div>
  )
}

function Output({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card flex items-start gap-4 p-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">{icon}</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-brand-900/70">{text}</p>
      </div>
    </div>
  )
}

function Arrow() {
  return (
    <div className="hidden items-center justify-center text-brand-300 md:flex">
      <ArrowRight className="h-6 w-6" />
    </div>
  )
}
