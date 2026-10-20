import { Link } from 'react-router-dom'
import { ArrowUpRight, PackageX, MessageCircle } from 'lucide-react'
import { useProducts } from '@/api/catalog'
import { coreProducts, brand } from '@/lib/brand'
import { formatGHS, whatsappLink } from '@/lib/utils'
import type { Product } from '@/types'

export function Products() {
  const { data: products, isLoading, isError } = useProducts()
  const list: Product[] = products ?? []

  return (
    <div className="bg-canvas">

      {/* ── HEADER ── */}
      <section className="border-b border-stone-200 bg-parchment">
        <div className="wrap py-12 md:py-16">
          <span className="tag">Products</span>
          <h1 className="mt-4 section-heading text-4xl md:text-5xl">
            Our products
          </h1>
          <p className="mt-3 max-w-xl prose-body text-base">
            Four products from one cassava crop — Gari, animal feed, charcoal and starch.
            Nothing wasted.
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="wrap py-14">
        {isLoading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-72 animate-pulse rounded-3xl bg-stone-200" />
            ))}
          </div>
        ) : isError ? (
          <EmptyState
            title="Catalogue temporarily unavailable"
            message="The live catalogue will appear here once the backend is running. You can still reach us on WhatsApp."
            cta={
              <a
                href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to enquire about your products.')}
                target="_blank" rel="noreferrer"
                className="btn-primary text-sm"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
            }
          />
        ) : list.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {list.map(p => <LiveProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          /* Backend not running — show static core products */
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreProducts.map(p => (
              <StaticProductCard
                key={p.slug}
                slug={p.slug}
                name={p.name}
                summary={p.summary}
                image={p.image}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── BULK ORDERS CTA ── */}
      <section className="bg-parchment border-t border-stone-200">
        <div className="wrap py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="section-heading text-2xl">Need a bulk order?</h2>
            <p className="mt-1 text-sm prose-body">
              Schools, institutions and vendors — reach us directly on WhatsApp.
            </p>
          </div>
          <a
            href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to place a bulk order.')}
            target="_blank" rel="noreferrer"
            className="btn-primary shrink-0"
          >
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

/* ── Static card (backend offline) ── */
function StaticProductCard({ slug, name, summary, image }: {
  slug: string; name: string; summary: string; image: string
}) {
  return (
    <Link to={`/products/${slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="overflow-hidden">
        <img src={image} alt={name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-ink">{name}</h3>
        <p className="mt-1.5 text-sm text-ink-light line-clamp-2 flex-1">{summary}</p>
        <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
          <span className="text-sm font-bold text-ink-muted">Price on request</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-ink-muted group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ── Live card (backend online) ── */
function LiveProductCard({ product }: { product: Product }) {
  const available = (product.inventory?.onHand ?? 0) - (product.inventory?.reserved ?? 0) > 0
  const priceLabel = product.priceVisible && product.basePrice != null
    ? formatGHS(Number(product.basePrice))
    : 'Price on request'
  const image = product.images?.[0]?.url ?? '/images/gn-image-2.jpg'

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all">
      <Link to={`/products/${product.slug}`} className="overflow-hidden">
        <img src={image} alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-2xs font-semibold ${
            available ? 'bg-brand-50 text-brand-700' : 'bg-amber-50 text-amber-700'
          }`}>
            {available ? 'In stock' : 'Limited'}
          </span>
        </div>
        <p className="mt-1.5 text-sm text-ink-light line-clamp-2 flex-1">{product.summary}</p>
        <div className="mt-4 border-t border-stone-100 pt-4 space-y-2.5">
          <p className="text-sm font-bold text-brand-700">{priceLabel}</p>
          <div className="flex gap-2">
            <Link to={`/products/${product.slug}`}
              className="flex-1 rounded-full border border-stone-200 py-2 text-center text-xs font-semibold text-ink/70 hover:border-brand-400 hover:text-brand-700 transition-colors">
              View details
            </Link>
            {product.canOrderOnline ? (
              <button className="flex-1 rounded-full bg-brand-500 py-2 text-xs font-semibold text-white hover:bg-brand-600 transition-colors">
                Add to cart
              </button>
            ) : (
              <a
                href={whatsappLink(brand.phone, `Hello GreenNiche, I would like a quote for ${product.name}.`)}
                target="_blank" rel="noreferrer"
                className="flex-1 rounded-full bg-stone-100 py-2 text-center text-xs font-semibold text-ink/70 hover:bg-brand-50 hover:text-brand-700 transition-colors">
                Get a quote
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Empty / error state ── */
function EmptyState({ title, message, cta }: { title: string; message: string; cta?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-stone-200 bg-white p-16 text-center">
      <PackageX className="h-10 w-10 text-stone-300" />
      <h2 className="mt-4 font-display text-xl font-bold text-ink">{title}</h2>
      <p className="mt-2 max-w-sm text-sm text-ink-light">{message}</p>
      {cta && <div className="mt-6">{cta}</div>}
    </div>
  )
}
