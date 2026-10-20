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

      {/* ── 1. HERO  — clean split: text left, de-gari right ── */}
      <section className="relative bg-brand-900 overflow-hidden">
        {/* Left green blob */}
        <div aria-hidden className="absolute -left-40 top-0 h-full w-96 bg-brand-800/40 blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

        <div className="wrap relative z-10 grid min-h-[92vh] grid-cols-1 items-center gap-0 lg:grid-cols-2">

          {/* ── Left: text ── */}
          <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-12">
            <span className="tag-dark w-fit">
              <Leaf className="h-3 w-3" />
              Zero-Waste Agribusiness · Ghana
            </span>

            <h1
              className="mt-6 font-display font-black text-white tracking-tightest"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 1.04 }}
            >
              Turning Every<br />
              Harvest Into<br />
              <span className="text-brand-400">Lasting Value.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
              From premium Gari to animal feed, charcoal and starch — GreenNiche transforms
              fresh cassava through a zero-waste circular process that creates real value
              for farmers, households and communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate('/products')} className="btn-primary">
                Explore products <ArrowRight className="h-4 w-4" />
              </button>
              <Link to="/how-it-works" className="btn-outline-white">
                Discover our process
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
              {[
                { n: '4', label: 'Products from one crop' },
                { n: '0', label: 'Waste in our process'   },
                { n: '2', label: 'Business awards'        },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-black text-white">{s.n}</p>
                  <p className="mt-0.5 text-xs text-white/45 leading-tight max-w-[80px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: de-gari image in a styled frame ── */}
          <div className="hidden lg:flex items-center justify-center py-16">
            <div className="relative w-full max-w-[480px]">
              {/* Glow ring behind image */}
              <div aria-hidden className="absolute inset-0 rounded-[2.5rem] bg-brand-500/20 blur-2xl scale-95" />
              {/* Main image frame */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-white/10">
                <img
                  src="/images/de-gari.jpg"
                  alt="Premium GreenNiche Gari"
                  className="h-[520px] w-full object-cover object-center"
                  loading="eager"
                />
                {/* Bottom caption card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-900/90 to-transparent px-6 pb-6 pt-12">
                  <p className="text-2xs font-bold uppercase tracking-widest text-brand-300">Flagship product</p>
                  <div className="mt-1 flex items-baseline justify-between">
                    <p className="font-display text-2xl font-bold text-white">Premium Gari</p>
                    <p className="text-sm font-bold text-brand-400">GH₵60 / pack</p>
                  </div>
                </div>
              </div>
              {/* Small floating badge */}
              <div className="absolute -top-3 -right-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50">
                  <Leaf className="h-3.5 w-3.5 text-brand-600" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-700">Zero Waste</p>
                  <p className="text-xs text-ink-muted">One crop · 4 products</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile image */}
          <div className="relative -mx-5 h-64 sm:h-72 lg:hidden">
            <img
              src="/images/de-gari.jpg"
              alt="Premium GreenNiche Gari"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent" />
          </div>
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

      {/* ── 3. PRODUCTS ────────────────────────────────── */}
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
