import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, ShoppingCart, MessageCircle } from 'lucide-react'
import { Spinner } from '@/components/ui/Spinner'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { api } from '@/lib/api'
import { brand, coreProducts } from '@/lib/brand'
import { formatGHS, whatsappLink } from '@/lib/utils'
import type { Product } from '@/types'

export function ProductDetail() {
  const { slug = '' } = useParams()
  const { data, isLoading, isError } = useQuery<Product>({
    queryKey: ['product', slug],
    enabled: !!slug,
    queryFn: async () => {
      const { data } = await api.get(`/products/${slug}`)
      return data
    },
  })

  // Fallback to the static core product reference when the API is not available yet.
  const fallback = coreProducts.find((p) => p.slug === slug)
  const product = data ?? (fallback ? ({
    slug: fallback.slug,
    name: fallback.name,
    summary: fallback.summary,
    description: fallback.summary,
    images: [{ id: 'f', url: fallback.image }],
    basePrice: null,
    priceVisible: false,
    canOrderOnline: false,
  } as unknown as Product) : null)

  if (isLoading) return <div className="container-page py-20"><Spinner /></div>
  if (isError && !fallback) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-4 inline-flex items-center gap-1 text-brand-700">
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>
      </div>
    )
  }
  if (!product) return null

  const available = (product.inventory?.onHand ?? 0) - (product.inventory?.reserved ?? 0) > 0
  const priceLabel = product.priceVisible && product.basePrice != null ? formatGHS(Number(product.basePrice)) : 'Price on request'
  const image = product.images?.[0]?.url ?? '/images/gn-image-2.jpg'

  return (
    <div className="container-page py-12">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-brand-700 hover:text-brand-900">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-brand-100">
          <img src={image} alt={product.name} className="h-80 w-full object-cover" loading="lazy" />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold">{product.name}</h1>
            <Badge tone={available ? 'green' : 'amber'}>{available ? 'Available' : 'Limited'}</Badge>
          </div>
          <p className="mt-2 text-brand-900/80">{product.summary}</p>
          <p className="mt-4 text-2xl font-bold text-brand-700">{priceLabel}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {product.canOrderOnline ? (
              <Button size="lg" disabled={!available}>
                <ShoppingCart className="h-5 w-5" /> Add to cart
              </Button>
            ) : (
              <a
                href={whatsappLink(brand.phone, `Hello GreenNiche, I would like a quote for ${product.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-6 py-3"
              >
                <MessageCircle className="h-5 w-5" /> Request a quote
              </a>
            )}
          </div>

          <p className="mt-4 text-xs text-brand-900/50">
            Cart and checkout are connected to the backend in the next step of Phase 1. For now, use
            WhatsApp to request a quote.
          </p>
        </div>
      </div>

      {product.description && (
        <div className="mt-12">
          <h2 className="text-xl font-bold">About this product</h2>
          <p className="mt-3 max-w-3xl text-brand-900/80">{product.description}</p>
        </div>
      )}
    </div>
  )
}
