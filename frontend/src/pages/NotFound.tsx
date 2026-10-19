import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="text-5xl font-extrabold text-brand-300">404</p>
      <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
      <p className="mt-1 text-brand-900/70">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-6 px-6 py-3">
        Back home
      </Link>
    </div>
  )
}
