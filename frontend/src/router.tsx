import type { RouteObject } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Products } from '@/pages/Products'
import { ProductDetail } from '@/pages/ProductDetail'
import { HowItWorks } from '@/pages/HowItWorks'
import { Gallery } from '@/pages/Gallery'
import { Blog } from '@/pages/Blog'
import { Contact } from '@/pages/Contact'
import { Cart } from '@/pages/Cart'
import { Account } from '@/pages/Account'
import { Admin } from '@/pages/Admin'
import { NotFound } from '@/pages/NotFound'

export const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:slug', element: <ProductDetail /> },
      { path: '/how-it-works', element: <HowItWorks /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: '/account', element: <Account /> },
      { path: '/admin', element: <Admin /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
