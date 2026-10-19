import { Link } from 'react-router-dom'
import { UserCircle, ArrowRight } from 'lucide-react'

export function Account() {
  // Customer auth (register/login/orders) is implemented in the next Phase 1 step.
  return (
    <div className="container-page py-20">
      <div className="card mx-auto flex max-w-lg flex-col items-center p-12 text-center">
        <UserCircle className="h-12 w-12 text-brand-300" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold">My Account</h1>
        <p className="mt-1 text-brand-900/70">
          Customer registration and login are part of the next Phase 1 step. You will be able to view
          order history, track orders and manage your details here.
        </p>
        <Link to="/products" className="btn-primary mt-6 px-6 py-3">
          Continue shopping <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
