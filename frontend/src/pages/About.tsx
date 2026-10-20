import { Link } from 'react-router-dom'
import {
  Award, Leaf, Recycle, Sprout, Droplets,
  Users, CheckCircle2, ArrowRight,
} from 'lucide-react'
import { brand } from '@/lib/brand'
import { whatsappLink } from '@/lib/utils'

export function About() {
  return (
    <div className="bg-canvas">

      {/* ── PAGE HEADER ── */}
      <section className="border-b border-stone-200 bg-parchment">
        <div className="wrap py-16 md:py-24">
          <span className="tag">About us</span>
          <h1 className="mt-5 section-heading" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: 1.05 }}>
            Processing cassava.<br />
            <span className="text-brand-600">Processing the future.</span>
          </h1>
          <p className="mt-5 max-w-2xl prose-body text-lg">
            {brand.name} is a zero-waste, climate-smart agribusiness in {brand.location}. We turn
            fresh cassava into premium Gari and transform every by-product into value — reducing
            post-harvest waste and creating economic opportunity for local communities.
          </p>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section className="bg-canvas py-20 lg:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Text */}
          <div>
            <span className="tag">Our mission</span>
            <h2 className="mt-5 section-heading text-4xl md:text-5xl">
              We are not just<br />
              processing Gari.<br />
              <em className="not-italic text-brand-600">We are processing<br />the future.</em>
            </h2>
            <div className="mt-6 space-y-4 prose-body">
              <p>
                {brand.name} was founded after our founder,{' '}
                <strong className="text-ink font-semibold">{brand.founder}</strong>, saw how much
                fresh cassava spoiled before reaching markets — a waste of farmers' effort and
                families' income.
              </p>
              <p>
                Today we process cassava into premium Gari and ensure that every by-product —
                peels, dewatering liquid, starch — becomes something useful. One crop, fully used,
                zero waste.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">
                Shop products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-outline">
                How it works
              </Link>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative">
            <div className="overflow-hidden rounded-4xl shadow-xl aspect-[4/5]">
              <img src="/images/gn-image-1.jpg" alt="GreenNiche operations"
                className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 -left-4 w-36 overflow-hidden rounded-3xl border-4 border-canvas shadow-lg sm:w-44">
              <img src="/images/gn-image-4.jpg" alt="Cassava processing"
                className="h-32 w-full object-cover sm:h-40" loading="lazy" />
            </div>
            <div className="absolute top-6 -right-4 max-w-[190px] rounded-2xl bg-white shadow-lg p-4">
              <p className="text-2xs font-bold uppercase tracking-wider text-brand-600">Circular process</p>
              <p className="mt-1 font-display text-2xl font-bold text-ink">Zero<br />Waste.</p>
              <p className="mt-1 text-xs text-ink-muted">One crop → 4 products</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY SPLIT ── */}
      <section className="bg-parchment py-20">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[400px_1fr] lg:gap-20">

          {/* Image */}
          <div className="relative mx-auto w-full max-w-[400px] lg:mx-0">
            <div className="overflow-hidden rounded-3xl shadow-md">
              <img src="/images/gn-image-1.jpg" alt="GreenNiche operations"
                className="h-[320px] w-full object-cover sm:h-[360px]" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 -right-4 w-36 overflow-hidden rounded-2xl border-4 border-parchment shadow-md sm:w-44">
              <img src="/images/gn-image-4.jpg" alt="Cassava processing"
                className="h-28 w-full object-cover sm:h-32" loading="lazy" />
            </div>
            <div className="absolute -top-4 left-4 flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-md">
              <Award className="h-6 w-6 shrink-0 text-brand-500" />
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-brand-600">Award 2025</p>
                <p className="text-xs font-semibold text-ink-light">Most Financially Sound</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col pt-6 lg:pt-0">
            <span className="tag w-fit">Our story</span>
            <h2 className="mt-5 section-heading text-3xl md:text-4xl">
              From spoilage<br /><span className="text-brand-600">to value.</span>
            </h2>
            <div className="mt-5 space-y-4 prose-body">
              <p>
                <strong className="text-ink">{brand.founder}</strong>, a final-year BCom Marketing
                student at the University of Cape Coast, watched fresh cassava spoil before
                reaching markets — a loss for farmers and communities he was determined to fix.
              </p>
              <p>
                GreenNiche was founded to preserve the value of every cassava harvest. By processing
                fresh cassava into long-lasting Gari, the business extends the crop's usefulness far
                beyond the fresh root.
              </p>
              <p>
                The founding insight evolved into a circular model: peels become animal feed and
                charcoal, dewatering liquid becomes starch, and that starch binds the charcoal.
                One crop. Every part used. Zero waste.
              </p>
            </div>
            <ul className="mt-7 grid grid-cols-2 gap-2.5">
              {['Zero post-harvest waste','Supporting local farmers','Youth-led innovation',
                'Award-winning model','Climate-smart process','Community-centred'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink-light">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />{item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary">
                Shop our products <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappLink(brand.phone,'Hello GreenNiche, I would like to make an enquiry.')}
                target="_blank" rel="noreferrer" className="btn-outline">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="bg-canvas py-16">
        <div className="wrap">
          <span className="tag">The founder</span>
          <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
            <div className="flex h-64 w-full max-w-[280px] items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-brand-200 bg-brand-50">
              <div className="text-center">
                <Leaf className="mx-auto h-10 w-10 text-brand-300" />
                <p className="mt-2 text-xs font-medium text-brand-500">Founder photo</p>
                <p className="text-xs text-brand-400">(to be supplied)</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="section-heading text-2xl md:text-3xl">{brand.founder}</h2>
              <p className="mt-1 text-sm font-semibold text-brand-600">Known as {brand.founderKnownAs}</p>
              <p className="mt-1 text-sm text-ink-light">{brand.founderRole}, {brand.name}</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <dt className="text-2xs font-bold uppercase tracking-wider text-brand-600">Education</dt>
                  <dd className="mt-1 text-ink-light">{brand.founderEducation}</dd>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <dt className="text-2xs font-bold uppercase tracking-wider text-brand-600">Advocacy</dt>
                  <dd className="mt-1 text-ink-light">{brand.founderAdvocacy}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-ink-muted">Biographical details are limited to verified facts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GREENNICHE ── */}
      <section className="wrap py-20">
        <div className="text-center mb-14">
          <span className="tag">Why choose us</span>
          <h2 className="mt-5 section-heading text-4xl md:text-5xl">
            Why <span className="text-brand-600">GreenNiche</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon:<Recycle className="h-5 w-5"/>, title:'Zero-waste production', text:'Every part of the cassava plant becomes a product. Nothing is discarded.' },
            { icon:<Sprout className="h-5 w-5"/>,  title:'Climate-smart farming', text:'Our circular model slashes post-harvest loss and agricultural waste.' },
            { icon:<Users className="h-5 w-5"/>,   title:'Smallholder farmers',   text:'Dependable demand for locally grown cassava, empowering rural communities.' },
            { icon:<Leaf className="h-5 w-5"/>,    title:'Youth-led innovation',  text:'A young Ghanaian founder reimagining what agribusiness can be.' },
            { icon:<Award className="h-5 w-5"/>,   title:'Award-winning',         text:'Most Financially Sound Business, Compassion Business Challenge 2025.' },
            { icon:<Droplets className="h-5 w-5"/>, title:'Community value',      text:'Products that serve households, vendors, livestock farmers and schools.' },
          ].map(f => (
            <div key={f.title}
              className="group flex flex-col gap-4 rounded-3xl bg-white border border-stone-200 p-7 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-light">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="bg-brand-900 py-16 text-white">
        <div className="wrap">
          <span className="tag-dark">Recognition</span>
          <h2 className="mt-5 section-heading text-3xl md:text-4xl text-white">Awards & recognition</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {brand.awards.map(a => (
              <div key={a.event} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-brand-800/60 p-6">
                <Award className="mt-0.5 h-8 w-8 shrink-0 text-brand-400" />
                <div>
                  <p className="font-display text-lg font-bold text-white">{a.title}</p>
                  <p className="mt-0.5 text-sm text-white/55">{a.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
