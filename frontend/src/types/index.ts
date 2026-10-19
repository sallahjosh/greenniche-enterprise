// Shared client types mirroring the backend models. Kept minimal for Phase 1.

export type ProductCategory = {
  id: string
  slug: string
  name: string
  description?: string | null
}

export type Product = {
  id: string
  slug: string
  name: string
  summary: string
  description: string
  categoryId: string
  category?: ProductCategory
  basePrice: number | null
  priceVisible: boolean
  canOrderOnline: boolean
  minOrderQty: number
  unit?: string | null
  isActive: boolean
  featured: boolean
  images?: { id: string; url: string; altText?: string | null }[]
  inventory?: { onHand: number; reserved: number } | null
}

export type ApiError = {
  error: { code: string; message: string; details?: unknown }
}
