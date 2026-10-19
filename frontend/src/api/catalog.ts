import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import type { Product } from '@/types'

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await api.get('/products')
      return data
    },
  })
}
