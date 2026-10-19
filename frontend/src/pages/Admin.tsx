import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowRight } from 'lucide-react'

export function Admin() {
  // The secure admin dashboard is gated by backend auth + RBAC (next Phase 1 step).
  return (
    <div className="container-page py-20">
      <div className="card mx-auto flex max-w-lg flex-col items-center p-12 text-center">
        <ShieldCheck className="h-12 w-12 text-brand-300" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold">Administration</h1>
        <p className="mt-1 text-brand-900/70">
          The management dashboard requires an authorised account. Secure login, role-based access
          and two-factor authentication for admins are implemented in the next Phase 1 step.
        </p>
        <Link to="/" className="btn-outline mt-6 px-6 py-3">
          Back to site <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
