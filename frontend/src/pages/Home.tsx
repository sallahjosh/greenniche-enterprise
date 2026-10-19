import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Leaf, Recycle, Sprout,
  Flame, Droplets, Award, Users, MessageCircle, CheckCircle2,
} from 'lucide-react'
import { useProducts } from '@/api/catalog'
import { brand, coreProducts } from '@/lib/brand'
import { formatGHS, whatsappLink } from '@/lib/utils'

export function Home() {
  const navigate = useNavigate()
  const { data: products, isLoading, isError } = useProducts()

  return (
    <div className="bg-[#FDFBF7]">

      {/* ══════════════════════════════════════════
          1 · HERO  — full-bleed split
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#FDFBF7]">
        <div className="container-page grid min-h-[92vh] grid-cols-1 items-center gap-0 lg:grid-cols-2">

          {/* Left — text */}
          <div className="relative z-10 flex flex-col justify-center pb-16 pt-16 lg:pr-12 lg:py-24">

            {/* Pill label */}
            <span className="section-label w-fit">
              <Leaf className="h-3 w-3" />
              Zero-Waste Agribusiness · Ghana
            </span>

            {/* Big editorial headline */}
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tightest text-ink md:text-6xl lg:text-[5.5rem]">
              One crop.<br />
              <em className="not-italic text-brand-600">Every part</em><br />
              used.
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60 md:text-lg">
              We turn fresh cassava into premium Gari, then convert every by-product —
              peels, liquid, starch — into animal feed, charcoal and a binding agent.
              <span className="font-semibold text-ink"> Nothing wasted.</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/products')}
                className="btn-primary text-sm shadow-card hover:shadow-lifted"
              >
                Shop Products
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-brand-700 transition-colors"
              >
                Our story
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tagline stamp */}
            <p className="mt-10 border-l-2 border-brand-400 pl-4 text-sm italic text-ink/40">
              "{brand.tagline}"
            </p>
          </div>

          {/* Right — hero image */}
          <div className="relative hidden h-full min-h-[92vh] lg:block">
            {/* full-height bleed image */}
            <img
              src="/images/de-gari.jpg"
              alt="Premium GreenNiche Gari"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            {/* dark gradient on left edge so text stays readable */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-transparent to-transparent"
              style={{ width: '35%' }}
            />
            {/* floating info card */}
            <div className="absolute bottom-10 right-8 max-w-[200px] rounded-2xl bg-white/90 p-4 shadow-lifted backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-700">Flagship product</p>
              <p className="mt-1 font-display text-2xl font-bold text-ink">Gari</p>
              <p className="mt-0.5 text-xs text-ink/50">From {brand.location}</p>
            </div>
          </div>

          {/* Mobile hero image (below text) */}
          <div className="relative -mx-5 h-64 sm:h-80 lg:hidden">
            <img
              src="/images/de-gari.jpg"
              alt="Premium GreenNiche Gari"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2 · MARQUEE STRIP
      ══════════════════════════════════════════ */}
      <div className="overflow-hidden border-y border-[#EDE4D0] bg-brand-900 py-3">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-10 text-sm font-semibold uppercase tracking-widest text-white/60">
              Zero Waste
              <span className="mx-4 text-brand-500">✦</span>
              Climate Smart
              <span className="mx-4 text-brand-500">✦</span>
              Premium Gari
              <span className="mx-4 text-brand-500">✦</span>
              Ghana Made
              <span className="mx-4 text-brand-500">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          3 · PRODUCTS  — editorial card grid
      ══════════════════════════════════════════ */}
      <section className="container-page py-24">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">Our products</span>
            <h2 className="mt-4 font-display text-4xl font-black tracking-tightest text-ink md:text-5xl">
              Four products.<br />
              <span className="text-brand-600">One crop.</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="mb-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
          >
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-80 animate-pulse rounded-4xl bg-[#F5F0E8]" />
              ))
            : isError || !products || products.length === 0
              ? coreProducts.map((p) => <ProductCard key={p.slug} slug={p.slug} name={p.name} summary={p.summary} image={p.image} price={null} priceVisible={false} />)
              : (products as ApiProduct[]).map((p) => (
                  <ProductCard
                    key={p.slug}
                    slug={p.slug}
                    name={p.name}
                    summary={p.summary}
                    image={p.images?.[0]?.url ?? '/images/gn-image-2.jpg'}
                    price={p.basePrice}
                    priceVisible={p.priceVisible}
                  />
                ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4 · PROCESS  — dark editorial section
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-900 py-24 text-white">
        {/* background photo tint */}
        <img
          src="/images/gn-image-3.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="container-page relative z-10">
          <span className="section-label border-brand-700 bg-brand-800 text-brand-300">
            How it works
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-black tracking-tightest md:text-5xl">
            The circular <br />
            <span className="text-brand-400">production model.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/50">
            Fresh cassava in — four valuable products out. Every by-product feeds the next stage.
            No step creates waste.
          </p>

          {/* Steps grid */}
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden border border-white/10">
            {[
              { n: '01', icon: <Sprout className="h-6 w-6" />, title: 'Cassava', sub: 'Sourced from local smallholder farmers across the Central Region.' },
              { n: '02', icon: <Leaf className="h-6 w-6" />, title: 'Gari', sub: 'Premium processed cassava — our flagship product.' },
              { n: '03', icon: <Flame className="h-6 w-6" />, title: 'Charcoal', sub: 'Cassava peels pressed into charcoal, bound with our starch.' },
              { n: '04', icon: <Droplets className="h-6 w-6" />, title: 'Starch', sub: 'Dewatering liquid becomes starch — the binder that closes the loop.' },
            ].map((step) => (
              <div
                key={step.n}
                className="group flex flex-col gap-4 bg-brand-800/60 p-8 hover:bg-brand-700/60 transition-colors backdrop-blur"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-brand-300 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <span className="font-display text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                    {step.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-brand-400 hover:text-brand-300 transition-colors"
            >
              Explore the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5 · STORY  — asymmetric split
      ══════════════════════════════════════════ */}
      <section className="container-page py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">

          {/* Images collage */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-4xl shadow-lifted">
              <img
                src="/images/gn-image-1.jpg"
                alt="GreenNiche operations"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* small inset photo */}
            <div className="absolute -bottom-6 -right-4 w-40 overflow-hidden rounded-3xl border-4 border-[#FDFBF7] shadow-card sm:-right-8 sm:w-52">
              <img
                src="/images/gn-image-4.jpg"
                alt="Processing cassava"
                className="h-36 w-full object-cover sm:h-44"
                loading="lazy"
              />
            </div>
            {/* award badge */}
            <div className="absolute -top-4 left-4 flex items-center gap-3 rounded-2xl border border-[#EDE4D0] bg-white px-4 py-3 shadow-card sm:left-8">
              <Award className="h-7 w-7 text-brand-500 shrink-0" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-brand-700">Award 2025</p>
                <p className="text-xs text-ink/60">Most Financially Sound</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <span className="section-label w-fit">Our story</span>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight tracking-tightest text-ink md:text-5xl">
              From spoilage<br />
              <span className="text-brand-600">to value.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/60">
              Our founder, <span className="font-semibold text-ink">{brand.founder}</span>, watched
              fresh cassava spoil before reaching markets — a loss for farmers and communities.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/60">
              GreenNiche was built to solve that. By processing cassava into long-lasting Gari and
              converting every by-product into a useful good, we eliminate waste while generating
              real economic value across the Central Region.
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-3">
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

            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-brand-900 transition-colors shadow-card"
            >
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6 · WHY GREENNICHE  — cream bg, 3-col
      ══════════════════════════════════════════ */}
      <section className="bg-[#F5F0E8] py-24">
        <div className="container-page">
          <div className="text-center">
            <span className="section-label">Why choose us</span>
            <h2 className="mt-5 font-display text-4xl font-black tracking-tightest text-ink md:text-5xl">
              Why <span className="text-brand-600">GreenNiche</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Recycle className="h-5 w-5" />, title: 'Zero-waste production',    text: 'Every part of the cassava plant becomes a product. Nothing is discarded.' },
              { icon: <Sprout className="h-5 w-5" />,  title: 'Climate-smart farming',   text: 'Our circular model slashes post-harvest loss and agricultural waste.' },
              { icon: <Users className="h-5 w-5" />,   title: 'Smallholder farmers',     text: 'Dependable demand for locally grown cassava, empowering rural communities.' },
              { icon: <Leaf className="h-5 w-5" />,    title: 'Youth-led innovation',    text: 'A young Ghanaian founder reimagining what agribusiness can be.' },
              { icon: <Award className="h-5 w-5" />,   title: 'Award-winning',           text: 'Most Financially Sound Business, Compassion Business Challenge 2025.' },
              { icon: <Droplets className="h-5 w-5" />, title: 'Community value',        text: 'Products that serve households, vendors, livestock farmers and schools.' },
            ].map((f) => (
              <div
                key={f.title}
                className="group flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5"
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7 · PHOTO BAND  — full-bleed image strip
      ══════════════════════════════════════════ */}
      <div className="grid h-48 grid-cols-3 sm:h-64 md:h-80">
        {['/images/gn-image-5.jpg', '/images/gn-image-6.jpg', '/images/gn-image-2.jpg'].map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={src}
              alt=""
              aria-hidden
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          8 · CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="bg-brand-700 py-20 text-white">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <span className="section-label border-brand-600 bg-brand-800 text-brand-300">
            Ready to order?
          </span>
          <h2 className="font-display text-4xl font-black tracking-tightest md:text-5xl">
            Fresh Gari. Direct<br className="hidden sm:block" /> from the source.
          </h2>
          <p className="max-w-lg text-base text-white/60">
            Browse our products online or message us on WhatsApp. Bulk orders for
            schools, institutions and vendors are welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-800 shadow-card hover:bg-[#F5F0E8] transition-colors"
            >
              Shop all products <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to place an order.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ─── Product card ─── */
type ApiProduct = {
  slug: string
  name: string
  summary: string
  basePrice?: number | null
  priceVisible?: boolean
  images?: { url: string }[]
}

function ProductCard({
  slug, name, summary, image, price, priceVisible,
}: {
  slug: string; name: string; summary: string
  image: string; price?: number | null; priceVisible?: boolean
}) {
  const priceLabel =
    priceVisible && price != null ? formatGHS(Number(price)) : 'Price on request'

  return (
    <Link
      to={`/products/${slug}`}
      className="group flex flex-col overflow-hidden rounded-4xl bg-white shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl font-bold text-ink">{name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/55 line-clamp-2">{summary}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-bold text-brand-700">{priceLabel}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
