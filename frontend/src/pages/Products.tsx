import React from 'react'
import { Link } from 'react-router-dom'
import { PackageX } from 'lucide-react'
import { Spinner } from '@/components/ui/Spinner'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useProducts } from '@/api/catalog'
import { coreProducts } from '@/lib/brand'
import { formatGHS, whatsappLink } from '@/lib/utils'
import { brand } from '@/lib/brand'
import type { Product } from '@/types'

export function Products() {
  const { data: products, isLoading, isError } = useProducts()
  const list = products ?? []

  return (
    <>
      <section className="border-b border-brand-100 bg-brand-50/40">
        <div className="container-page py-12 md:py-16">
          <h1 className="text-3xl font-extrabold md:text-4xl">Our products</h1>
          <p className="mt-3 max-w-2xl text-lg text-brand-900/80">
            Four products from one crop — Gari, animal feed, charcoal and starch. Nothing wasted.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        {isLoading ? (
          <Spinner className="py-20" />
        ) : isError ? (
          <EmptyState
            title="Catalogue temporarily unavailable"
            message="The live product catalogue will appear here once the backend is running. You can still reach us on WhatsApp."
            action={
              <a
                href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to enquire about your products.')}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-5 py-2.5"
              >
                Enquire on WhatsApp
              </a>
            }
          />
        ) : list.length === 0 ? (
          <EmptyState
            title="No products yet"
            message="Products will appear here once they are published by the administrator."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        {/* Static reference of the four core products (always visible for context) */}
        {list.length === 0 && !isLoading && !isError && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-brand-900">Our four core products</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreProducts.map((p) => (
                <div key={p.slug} className="card overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-40 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-brand-900/70">{p.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

function ProductCard({ product }: { product: Product }) {
  const available = (product.inventory?.onHand ?? 0) - (product.inventory?.reserved ?? 0) > 0
  const priceLabel = product.priceVisible && product.basePrice != null ? formatGHS(Number(product.basePrice)) : 'Price on request'
  const image = product.images?.[0]?.url ?? '/images/gn-image-2.jpg'

  return (
    <div className="card overflow-hidden">
      <Link to={`/products/${product.slug}`}>
        <img src={image} alt={product.images?.[0]?.altText ?? product.name} className="h-48 w-full object-cover" loading="lazy" />
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{product.name}</h3>
          <Badge tone={available ? 'green' : 'amber'}>{available ? 'Available' : 'Limited'}</Badge>
        </div>
        <p className="mt-1 text-sm text-brand-900/70">{product.summary}</p>
        <p className="mt-3 font-semibold text-brand-700">{priceLabel}</p>
        <div className="mt-4 flex gap-2">
          <Link to={`/products/${product.slug}`} className="btn-outline px-4 py-2 text-sm">
            View details
          </Link>
          {product.canOrderOnline ? (
            <Button size="sm" className="flex-1">Add to cart</Button>
          ) : (
            <a
              href={whatsappLink(brand.phone, `Hello GreenNiche, I would like a quote for ${product.name}.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex-1 px-4 py-2 text-sm"
            >
              Request a quote
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function EmptyState({ title, message, action }: { title: string; message: string; action?: React.ReactNode }) {
  return (
    <div className="card flex flex-col items-center justify-center p-12 text-center">
      <PackageX className="h-10 w-10 text-brand-300" aria-hidden="true" />
      <h2 className="mt-3 text-lg font-semibold text-brand-900">{title}</h2>
      <p className="mt-1 max-w-md text-sm text-brand-900/70">{message}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
