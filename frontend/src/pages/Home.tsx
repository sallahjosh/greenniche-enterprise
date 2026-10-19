import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Leaf, Recycle,
  Sprout, Flame, Droplets, MessageCircle,
} from 'lucide-react'
import { useProducts } from '@/api/catalog'
import { brand, coreProducts } from '@/lib/brand'
import { formatGHS, whatsappLink } from '@/lib/utils'

/* ═══════════════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════════════ */
export function Home() {
  const navigate = useNavigate()
  const { data: products, isLoading, isError } = useProducts()

  return (
    <div>

      {/* ── 1. HERO ────────────────────────────────────── */}
      <section className="relative min-h-screen bg-brand-900 overflow-hidden">

        {/* Full-bleed background image */}
        <img
          src="/images/de-gari.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />

        {/* Rich overlay — dark at bottom for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,44,27,0.72) 0%, rgba(10,44,27,0.55) 40%, rgba(10,44,27,0.88) 85%, rgba(10,44,27,0.97) 100%)',
          }}
        />

        {/* Noise texture */}
        <div aria-hidden className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 wrap flex flex-col justify-end min-h-screen pb-16 pt-32 lg:pb-24">

          {/* Top pill */}
          <div className="mb-8">
            <span className="tag-dark">
              <Leaf className="h-3 w-3" />
              Zero-Waste Agribusiness · Central Region, Ghana
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-white tracking-tightest max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 1.02 }}>
            Turning Every<br />
            Harvest Into<br />
            <span style={{ WebkitTextStroke: '2px #3FA970', color: 'transparent' }}>
              Lasting Value.
            </span>
          </h1>

          {/* Subtext + CTAs in a two-column layout at large screens */}
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-lg leading-relaxed text-white/70">
                From premium Gari to animal feed, charcoal and starch — GreenNiche transforms
                fresh cassava through a zero-waste circular process that creates value for
                farmers, households and communities.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={() => navigate('/products')} className="btn-primary">
                  Explore our products <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/how-it-works" className="btn-outline-white">
                  Discover our process
                </Link>
              </div>
            </div>

            {/* Floating stats */}
            <div className="flex gap-px overflow-hidden rounded-2xl border border-white/10 shrink-0">
              {[
                { n: '4', label: 'Products' },
                { n: '0', label: 'Waste'    },
                { n: '2', label: 'Awards'   },
              ].map(s => (
                <div key={s.label} className="bg-white/8 backdrop-blur px-6 py-4 text-center">
                  <p className="font-display text-3xl font-black text-white">{s.n}</p>
                  <p className="mt-0.5 text-2xs font-semibold uppercase tracking-widest text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
          <span className="text-2xs uppercase tracking-[0.2em] text-white">Scroll</span>
          <div className="h-8 w-px bg-white" />
        </div>
      </section>

      {/* ── 2. MARQUEE ─────────────────────────────────── */}
      <div className="overflow-hidden border-y border-stone-200 bg-canvas py-3.5">
        <div className="flex animate-[marquee_35s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
              Zero Waste <span className="mx-5 text-brand-400">◆</span>
              Premium Gari <span className="mx-5 text-brand-400">◆</span>
              Climate Smart <span className="mx-5 text-brand-400">◆</span>
              Ghana Made <span className="mx-5 text-brand-400">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── 3. BRAND INTRO ─────────────────────────────── */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">

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
                GreenNiche Enterprise was founded after our founder,{' '}
                <strong className="text-ink font-semibold">{brand.founder}</strong>, saw
                how much fresh cassava spoiled before reaching markets — a waste of farmers'
                effort and families' income.
              </p>
              <p>
                Today we process cassava into premium Gari and ensure that every
                by-product — peels, liquid, starch — becomes something useful.
                One crop, fully used, zero waste.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-dark">
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-outline">
                How it works
              </Link>
            </div>
          </div>

          {/* Image with floating accent */}
          <div className="relative">
            <div className="overflow-hidden rounded-4xl shadow-xl aspect-[4/5]">
              <img
                src="/images/gn-image-1.jpg"
                alt="GreenNiche operations"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-3xl border-4 border-canvas overflow-hidden shadow-lg w-36 sm:w-44">
              <img
                src="/images/gn-image-4.jpg"
                alt="Cassava processing"
                className="h-32 w-full object-cover sm:h-40"
                loading="lazy"
              />
            </div>
            <div className="absolute top-6 -right-4 max-w-[200px] rounded-2xl bg-white shadow-lg p-4 sm:-right-8">
              <p className="text-2xs font-bold uppercase tracking-wider text-brand-600">Circular process</p>
              <p className="mt-1 font-display text-2xl font-bold text-ink">Zero<br/>Waste.</p>
              <p className="mt-1 text-xs text-ink-muted">One crop → four products</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCTS ────────────────────────────────── */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="wrap">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-14">
            <div>
              <span className="tag-stone">Our products</span>
              <h2 className="mt-4 section-heading text-4xl md:text-5xl">
                Four products.<br />
                <span className="text-brand-600">One crop.</span>
              </h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors mb-1">
              View all products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-80 animate-pulse rounded-3xl bg-stone-200" />
                ))
              : isError || !products || products.length === 0
                ? coreProducts.map(p => <ProductCard key={p.slug} slug={p.slug} name={p.name} summary={p.summary} image={p.image} price={null} priceVisible={false} />)
                : (products as ApiProduct[]).map(p => (
                    <ProductCard
                      key={p.slug}
                      slug={p.slug}
                      name={p.name}
                      summary={p.summary}
                      image={p.images?.[0]?.url ?? '/images/gn-image-2.jpg'}
                      price={p.basePrice}
                      priceVisible={p.priceVisible}
                    />
                  ))
            }
          </div>
        </div>
      </section>

      {/* ── 5. CIRCULAR PROCESS ────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-900 py-24 lg:py-32">
        <img src="/images/gn-image-3.jpg" alt="" aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
        <div aria-hidden className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

        <div className="wrap relative z-10">
          <div className="max-w-2xl mb-16">
            <span className="tag-dark">Circular model</span>
            <h2 className="mt-5 section-heading text-4xl md:text-5xl text-white">
              One crop.<br />
              <span className="text-brand-400">Every part used.</span>
            </h2>
            <p className="mt-4 text-base text-white/55">
              Fresh cassava enters our process. Four valuable products come out.
              No step creates waste — every by-product feeds the next stage.
            </p>
          </div>

          {/* Process steps */}
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl border border-white/10">
            {[
              { n:'01', icon:<Sprout className="h-6 w-6"/>, title:'Fresh Cassava',
                body:'Sourced from local smallholder farmers across the Central Region.' },
              { n:'02', icon:<Leaf className="h-6 w-6"/>, title:'Premium Gari',
                body:'Our flagship product — long-lasting, nutritious processed cassava.' },
              { n:'03', icon:<Flame className="h-6 w-6"/>, title:'Charcoal & Feed',
                body:'Cassava peels become animal feed and eco-friendly charcoal.' },
              { n:'04', icon:<Droplets className="h-6 w-6"/>, title:'Recovered Starch',
                body:'Dewatering liquid yields starch — the binder that closes the loop.' },
            ].map(s => (
              <div key={s.n}
                className="group bg-white/5 hover:bg-brand-800/70 backdrop-blur p-8 transition-colors cursor-default">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-brand-300 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <span className="font-display text-5xl font-black text-white/8 group-hover:text-white/15 transition-colors select-none">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/how-it-works" className="btn-outline-white">
              See the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. WHY GREENNICHE ──────────────────────────── */}
      <section className="bg-canvas py-24 lg:py-32">
        <div className="wrap">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag">Why us</span>
            <h2 className="mt-5 section-heading text-4xl md:text-5xl">
              Why <span className="text-brand-600">GreenNiche</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon:<Recycle className="h-5 w-5"/>,  title:'Zero-waste production',
                body:'Every part of the cassava plant becomes a product. Nothing is discarded.' },
              { icon:<Sprout className="h-5 w-5"/>,   title:'Climate-smart farming',
                body:'Our circular model eliminates post-harvest loss and agricultural waste.' },
              { icon:<Leaf className="h-5 w-5"/>,     title:'Quality you can taste',
                body:'Premium Gari produced with care for households, schools and vendors.' },
              { icon:<Flame className="h-5 w-5"/>,    title:'Community energy',
                body:'Cassava-peel charcoal provides affordable, eco-friendly energy locally.' },
              { icon:<Droplets className="h-5 w-5"/>, title:'Full-value processing',
                body:'Starch recovered from dewatering closes the loop — no liquid wasted.' },
              { icon:<MessageCircle className="h-5 w-5"/>, title:'Local impact',
                body:'Supporting smallholder farmers and creating economic value in Ghana.' },
            ].map(f => (
              <div key={f.title}
                className="group rounded-3xl bg-white border border-stone-200 p-7 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PHOTO STRIP ─────────────────────────────── */}
      <div className="grid h-56 grid-cols-3 sm:h-72 md:h-96">
        {['/images/gn-image-5.jpg', '/images/gn-image-6.jpg', '/images/gn-image-2.jpg'].map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img src={src} alt="" aria-hidden
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy" />
          </div>
        ))}
      </div>

      {/* ── 8. ORDER CTA ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-600 py-24 text-white">
        <div aria-hidden className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="wrap relative z-10 flex flex-col items-center gap-6 text-center">
          <span className="tag-dark">Ready to order?</span>
          <h2 className="section-heading text-4xl md:text-5xl text-white max-w-2xl">
            Fresh Gari. Direct from the source.
          </h2>
          <p className="max-w-lg text-base text-white/65">
            Browse our products online or message us directly on WhatsApp. Bulk orders
            for schools, institutions and vendors are welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-800 shadow-lg hover:bg-brand-50 transition-colors"
            >
              Shop all products <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to place an order.')}
              target="_blank" rel="noreferrer"
              className="btn-outline-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ── Product card ── */
type ApiProduct = {
  slug:string; name:string; summary:string
  basePrice?:number|null; priceVisible?:boolean; images?:{url:string}[]
}
function ProductCard({ slug, name, summary, image, price, priceVisible }:{
  slug:string; name:string; summary:string; image:string; price?:number|null; priceVisible?:boolean
}) {
  const label = priceVisible && price != null ? formatGHS(Number(price)) : 'Price on request'
  return (
    <Link to={`/products/${slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all">
      <div className="overflow-hidden">
        <img src={image} alt={name}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold text-ink">{name}</h3>
        <p className="mt-1.5 text-sm text-ink-light line-clamp-2 flex-1">{summary}</p>
        <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
          <span className="text-sm font-bold text-brand-700">{label}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-ink-muted group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
