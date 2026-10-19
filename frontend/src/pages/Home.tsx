import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight, Leaf, Recycle, Sprout, Flame,
  Droplets, Award, Users, MessageCircle, CheckCircle2,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { useProducts } from '@/api/catalog'
import { brand, coreProducts } from '@/lib/brand'
import { formatGHS, whatsappLink } from '@/lib/utils'

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
export function Home() {
  const navigate = useNavigate()
  const { data: products, isLoading, isError } = useProducts()

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-brand-900">
        {/* subtle green texture overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #1B7A4A 0%, transparent 60%), radial-gradient(circle at 80% 20%, #3FA970 0%, transparent 50%)',
          }}
        />

        <div className="container-page relative z-10 grid min-h-[90vh] items-center gap-10 py-16 md:grid-cols-2 md:py-0">
          {/* Text side */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-400/40 bg-brand-800/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
              <Leaf className="h-3 w-3" />
              Zero-waste agribusiness · Ghana
            </span>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              One crop.{' '}
              <span className="text-brand-400">Every part used.</span>{' '}
              Zero waste.
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              <span className="font-semibold text-white">{brand.tagline}</span>
              {' '}We turn fresh cassava into Gari and transform what would be waste into
              animal feed, charcoal and starch — creating value for farmers and communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/products')}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-base font-bold text-white shadow-lg hover:bg-brand-400 transition-colors"
              >
                Order Now <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Learn Our Story
              </Link>
            </div>

            {/* trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-8">
              {brand.awards.map((a) => (
                <div key={a.event} className="flex items-center gap-2 text-xs text-white/60">
                  <Award className="h-4 w-4 text-brand-400 shrink-0" />
                  <span>{a.title} · <span className="text-white/80">{a.event}</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="flex items-center justify-center py-10 md:py-16">
            <div className="relative w-full max-w-md">
              {/* decorative ring */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl border border-brand-500/20"
              />
              <div
                aria-hidden
                className="absolute -inset-8 rounded-3xl border border-brand-500/10"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <img
                  src="/images/de-gari.jpg"
                  alt="Premium Gari produced by GreenNiche Enterprise"
                  className="h-[420px] w-full object-cover md:h-[500px]"
                  loading="eager"
                />
                {/* floating label */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/50 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm font-bold text-white">Premium Gari</p>
                  <p className="text-xs text-white/70">Processed in {brand.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="container-page grid grid-cols-2 divide-x divide-brand-100 py-5 md:grid-cols-4">
          {[
            { value: '4', label: 'Products from one crop' },
            { value: '0', label: 'Waste in our process' },
            { value: '2', label: 'Awards & recognitions' },
            { value: '∞', label: 'Community impact' },
          ].map((s) => (
            <div key={s.label} className="px-4 py-2 text-center md:py-4">
              <p className="font-display text-3xl font-extrabold text-brand-700">{s.value}</p>
              <p className="mt-0.5 text-xs text-brand-900/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. PRODUCTS PREVIEW ── */}
      <section className="container-page py-20">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge tone="green">Our products</Badge>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-900 md:text-4xl">
              Four products. One crop.
            </h2>
            <p className="mt-2 max-w-xl text-brand-900/60">
              Nothing from the cassava plant is wasted. Every stage of processing creates something valuable.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
          >
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-72 animate-pulse rounded-2xl bg-brand-50" />
            ))
          ) : isError || !products || products.length === 0 ? (
            coreProducts.map((p) => <StaticProductCard key={p.slug} p={p} />)
          ) : (
            (products as ProductLike[]).map((p) => <LiveProductCard key={p.slug} product={p} />)
          )}
        </div>
      </section>

      {/* ── 4. CIRCULAR PROCESS ── */}
      <section className="bg-brand-900 py-20 text-white">
        <div className="container-page">
          <div className="text-center">
            <Badge tone="green">How it works</Badge>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
              The circular production model
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              Fresh cassava in. Four valuable products out. No step creates waste — every
              by-product feeds the next stage.
            </p>
          </div>

          <div className="relative mt-14">
            {/* connector line desktop */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-10 mx-auto hidden h-px w-3/4 bg-brand-700 md:block"
            />
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { n: '01', icon: <Sprout className="h-6 w-6" />, title: 'Fresh Cassava', text: 'Sourced from local smallholder farmers.' },
                { n: '02', icon: <Leaf className="h-6 w-6" />, title: 'Gari', text: 'Processed into our flagship premium Gari.' },
                { n: '03', icon: <Flame className="h-6 w-6" />, title: 'Charcoal', text: 'Peels become charcoal bound with our own starch.' },
                { n: '04', icon: <Droplets className="h-6 w-6" />, title: 'Starch', text: 'Dewatering liquid → starch → closes the loop.' },
              ].map((step) => (
                <div key={step.n} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-500 bg-brand-800 text-brand-400">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-500 px-6 py-3 text-sm font-semibold text-brand-400 hover:bg-brand-800 transition-colors"
            >
              Explore the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. OUR STORY ── */}
      <section className="container-page py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/gn-image-1.jpg"
                alt="GreenNiche operations"
                className="h-80 w-full object-cover md:h-96"
                loading="lazy"
              />
            </div>
            {/* floating award card */}
            <div className="absolute -bottom-5 -right-4 rounded-xl border border-brand-100 bg-white p-4 shadow-card md:-right-8">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-brand-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-brand-900">Most Financially Sound</p>
                  <p className="text-xs text-brand-900/60">Compassion Business Challenge 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Badge tone="green">Our story</Badge>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-900 md:text-4xl">
              From spoilage to value
            </h2>
            <p className="mt-4 text-brand-900/70 leading-relaxed">
              Our founder, <span className="font-semibold text-brand-900">{brand.founder}</span>,
              saw first-hand how much fresh cassava spoiled before reaching markets — a waste of
              farmers' effort and income.
            </p>
            <p className="mt-3 text-brand-900/70 leading-relaxed">
              GreenNiche was founded to change that. By processing cassava into long-lasting Gari
              and converting every by-product into useful goods, we eliminate waste while creating
              economic value for farmers, households and communities across the Central Region.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                'Zero post-harvest cassava waste',
                'Supporting smallholder farmers',
                'Youth-led climate-smart innovation',
                'Award-winning business model',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-900/80">
                  <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600 transition-colors"
            >
              Read our full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. WHY GREENNICHE ── */}
      <section className="bg-brand-50 py-20">
        <div className="container-page">
          <div className="text-center">
            <Badge tone="green">Why choose us</Badge>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-900 md:text-4xl">
              Why GreenNiche
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Recycle className="h-6 w-6" />, title: 'Zero-waste production', text: 'Every part of the cassava plant becomes a product — nothing is discarded.' },
              { icon: <Sprout className="h-6 w-6" />, title: 'Climate-smart agriculture', text: 'Our processing model reduces post-harvest loss and agricultural waste.' },
              { icon: <Users className="h-6 w-6" />, title: 'Smallholder farmers', text: 'We create dependable demand for locally grown cassava across the region.' },
              { icon: <Leaf className="h-6 w-6" />, title: 'Youth-led innovation', text: 'A young founder reimagining what an agribusiness can be in Ghana.' },
              { icon: <Award className="h-6 w-6" />, title: 'Award-winning', text: 'Recognised as the Most Financially Sound Business at the 2025 Compassion Business Challenge.' },
              { icon: <Droplets className="h-6 w-6" />, title: 'Community value', text: 'Products designed to serve households, vendors, livestock farmers and schools.' },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-soft hover:border-brand-300 hover:shadow-card transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100 transition-colors">
                  {f.icon}
                </div>
                <h3 className="mt-4 font-semibold text-brand-900">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. RECOGNITION BANNER ── */}
      <section className="border-y border-brand-100 bg-white py-12">
        <div className="container-page flex flex-col items-center gap-8 text-center md:flex-row md:gap-12 md:text-left">
          <div className="shrink-0">
            <Award className="h-16 w-16 text-brand-500" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500">Recognition</p>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-brand-900">
              Most Financially Sound Business
            </h2>
            <p className="mt-1 text-brand-900/60">Compassion Business Challenge 2025 · also shortlisted for the Ecopreneurship Challenge 2026</p>
          </div>
          <div className="shrink-0 md:ml-auto">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              About us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. WHATSAPP CTA ── */}
      <section className="bg-brand-600 py-16 text-white">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Ready to order?
          </h2>
          <p className="max-w-xl text-lg text-white/80">
            Browse our products online or reach us directly on WhatsApp. Bulk orders for schools,
            institutions and vendors are welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-brand-700 shadow hover:bg-brand-50 transition-colors"
            >
              Shop products <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to place an order.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3.5 text-base font-bold text-white hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── sub-components ─── */

type ProductLike = {
  slug: string
  name: string
  summary: string
  basePrice?: number | null
  priceVisible?: boolean
  image?: string
  images?: { url: string; altText?: string | null }[]
  inventory?: { onHand: number; reserved: number } | null
  canOrderOnline?: boolean
}

function StaticProductCard({ p }: { p: { slug: string; name: string; summary: string; image: string } }) {
  return (
    <Link
      to={`/products/${p.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft hover:shadow-card transition-all"
    >
      <div className="overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-brand-900">{p.name}</h3>
        <p className="mt-1 text-sm text-brand-900/60 line-clamp-2">{p.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
          Price on request <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}

function LiveProductCard({ product }: { product: ProductLike }) {
  const image = product.images?.[0]?.url ?? product.image ?? '/images/gn-image-2.jpg'
  const priceLabel =
    product.priceVisible && product.basePrice != null
      ? formatGHS(Number(product.basePrice))
      : 'Price on request'
  const available = (product.inventory?.onHand ?? 1) - (product.inventory?.reserved ?? 0) > 0

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft hover:shadow-card transition-all"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-brand-900">{product.name}</h3>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
              available ? 'bg-brand-50 text-brand-700' : 'bg-amber-50 text-amber-700'
            }`}
          >
            {available ? 'Available' : 'Limited'}
          </span>
        </div>
        <p className="mt-1 text-sm text-brand-900/60 line-clamp-2">{product.summary}</p>
        <p className="mt-3 text-sm font-bold text-brand-700">{priceLabel}</p>
      </div>
    </Link>
  )
}
