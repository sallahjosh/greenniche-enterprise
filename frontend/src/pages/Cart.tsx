import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight } from 'lucide-react'

export function Cart() {
  // Cart will use localStorage for guest convenience (per spec), while the server
  // remains authoritative for prices, stock, orders and payments. Wired in the next step.
  return (
    <div className="container-page py-20">
      <div className="card mx-auto flex max-w-lg flex-col items-center p-12 text-center">
        <ShoppingCart className="h-12 w-12 text-brand-300" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-1 text-brand-900/70">
          Browse our products and add items to your cart. Checkout is processed securely on the
          server.
        </p>
        <Link to="/products" className="btn-primary mt-6 px-6 py-3">
          Shop products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
