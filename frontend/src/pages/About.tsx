import { Link } from 'react-router-dom'
import {
  Award, Leaf, Recycle, Sprout, Droplets,
  Users, CheckCircle2, ArrowRight,
} from 'lucide-react'
import { brand } from '@/lib/brand'
import { whatsappLink } from '@/lib/utils'

export function About() {
  return (
    <div className="bg-[#FDFBF7]">

      {/* ── PAGE HEADER ── */}
      <section className="border-b border-[#EDE4D0] bg-[#F5F0E8]">
        <div className="container-page py-14 md:py-20">
          <span className="section-label">About us</span>
          <h1 className="mt-5 font-display text-4xl font-black leading-tight tracking-tightest text-ink md:text-5xl lg:text-6xl">
            Processing cassava.<br />
            <span className="text-brand-600">Processing the future.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/60">
            {brand.name} is a zero-waste, climate-smart agribusiness in {brand.location}. We
            turn fresh cassava into premium Gari and transform every by-product into value —
            reducing post-harvest waste and creating economic opportunity for local communities.
          </p>
        </div>
      </section>

      {/* ── STORY SPLIT  (image + text, image properly sized) ── */}
      <section className="container-page py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">

          {/* Image column — fixed max width, portrait crop */}
          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
            {/* Main image */}
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src="/images/gn-image-1.jpg"
                alt="GreenNiche operations"
                className="h-[340px] w-full object-cover sm:h-[380px]"
                loading="lazy"
              />
            </div>
            {/* Small accent image */}
            <div className="absolute -bottom-5 -right-4 w-36 overflow-hidden rounded-2xl border-4 border-[#FDFBF7] shadow-card sm:w-44">
              <img
                src="/images/gn-image-4.jpg"
                alt="Cassava processing"
                className="h-28 w-full object-cover sm:h-32"
                loading="lazy"
              />
            </div>
            {/* Award badge */}
            <div className="absolute -top-4 left-4 flex items-center gap-3 rounded-2xl border border-[#EDE4D0] bg-white px-4 py-3 shadow-card">
              <Award className="h-6 w-6 shrink-0 text-brand-500" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-700">Award 2025</p>
                <p className="text-xs font-semibold text-ink/60">Most Financially Sound</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-col pt-6 lg:pt-0">
            <span className="section-label w-fit">Our story</span>
            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-tightest text-ink md:text-4xl">
              From spoilage<br />
              <span className="text-brand-600">to value.</span>
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/65">
              <p>
                <span className="font-semibold text-ink">{brand.founder}</span>, a final-year BCom
                Marketing student at the University of Cape Coast, watched fresh cassava spoil
                before reaching markets — a loss for farmers and communities that he was determined
                to fix.
              </p>
              <p>
                GreenNiche was founded to preserve the value of every cassava harvest. By processing
                fresh cassava into long-lasting Gari, the business extends the crop's usefulness far
                beyond the fresh root.
              </p>
              <p>
                The founding insight then evolved into a circular model: peels become animal feed and
                charcoal, dewatering liquid becomes starch, and that starch binds the charcoal.
                One crop. Every part used. Zero waste.
              </p>
              <p>
                {brand.name} is also the founder of The African Boy Child Organisation and has been
                recognised as the Most Financially Sound Business at the Compassion Business Challenge
                2025, and shortlisted for the Ecopreneurship Challenge 2026.
              </p>
            </div>

            <ul className="mt-7 grid grid-cols-2 gap-2.5">
              {[
                'Zero post-harvest waste',
                'Supporting local farmers',
                'Youth-led innovation',
                'Award-winning model',
                'Climate-smart process',
                'Community-centred',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink/70">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors shadow-soft"
              >
                Shop our products <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to make an enquiry.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-500 px-6 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50 transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER CARD ── */}
      <section className="bg-[#F5F0E8] py-16">
        <div className="container-page">
          <span className="section-label">The founder</span>
          <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
            {/* Photo placeholder */}
            <div className="flex h-64 w-full max-w-[280px] items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-brand-200 bg-brand-50">
              <div className="text-center">
                <Leaf className="mx-auto h-10 w-10 text-brand-300" />
                <p className="mt-2 text-xs font-medium text-brand-500">Founder photo</p>
                <p className="text-xs text-brand-400">(to be supplied)</p>
              </div>
            </div>
            {/* Info */}
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-2xl font-black text-ink md:text-3xl">{brand.founder}</h2>
              <p className="mt-1 text-sm font-semibold text-brand-600">Known as {brand.founderKnownAs}</p>
              <p className="mt-1 text-sm text-ink/60">{brand.founderRole}, {brand.name}</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
                <div className="rounded-2xl border border-[#EDE4D0] bg-white p-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-600">Education</dt>
                  <dd className="mt-1 text-ink/70">{brand.founderEducation}</dd>
                </div>
                <div className="rounded-2xl border border-[#EDE4D0] bg-white p-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-brand-600">Advocacy</dt>
                  <dd className="mt-1 text-ink/70">{brand.founderAdvocacy}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-ink/40">
                Biographical details are limited to verified facts from the project brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GREENNICHE ── */}
      <section className="container-page py-20">
        <div className="text-center">
          <span className="section-label">Why choose us</span>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tightest text-ink md:text-5xl">
            Why <span className="text-brand-600">GreenNiche</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Recycle className="h-5 w-5" />, title: 'Zero-waste production',  text: 'Every part of the cassava plant becomes a product. Nothing is discarded.' },
            { icon: <Sprout className="h-5 w-5" />,  title: 'Climate-smart farming', text: 'Our circular model slashes post-harvest loss and agricultural waste.' },
            { icon: <Users className="h-5 w-5" />,   title: 'Smallholder farmers',   text: 'Dependable demand for locally grown cassava, empowering rural communities.' },
            { icon: <Leaf className="h-5 w-5" />,    title: 'Youth-led innovation',  text: 'A young Ghanaian founder reimagining what agribusiness can be.' },
            { icon: <Award className="h-5 w-5" />,   title: 'Award-winning',         text: 'Most Financially Sound Business, Compassion Business Challenge 2025.' },
            { icon: <Droplets className="h-5 w-5" />, title: 'Community value',      text: 'Products that serve households, vendors, livestock farmers and schools.' },
          ].map((f) => (
            <div
              key={f.title}
              className="group flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5 border border-[#EDE4D0]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="bg-brand-900 py-16 text-white">
        <div className="container-page">
          <span className="section-label border-brand-700 bg-brand-800 text-brand-300">Recognition</span>
          <h2 className="mt-5 font-display text-3xl font-black tracking-tightest md:text-4xl">
            Awards & recognition
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {brand.awards.map((a) => (
              <div key={a.event} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-brand-800/60 p-6">
                <Award className="mt-0.5 h-8 w-8 shrink-0 text-brand-400" />
                <div>
                  <p className="font-display text-lg font-bold text-white">{a.title}</p>
                  <p className="mt-0.5 text-sm text-white/60">{a.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
