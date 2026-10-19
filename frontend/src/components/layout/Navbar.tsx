import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Only the most important destinations live in the navbar.
// Blog/News, Gallery and How It Works are in the footer.
const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
      isActive
        ? 'text-brand-700 bg-brand-50'
        : 'text-gray-600 hover:text-brand-700 hover:bg-brand-50'
    )

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <nav
        className="container-page flex h-16 items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-extrabold text-brand-700 tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
            <Leaf className="h-4 w-4" />
          </span>
          GreenNiche
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/account"
            className="text-sm font-semibold text-gray-600 hover:text-brand-700 px-3 py-2 transition-colors"
          >
            Login
          </NavLink>
          <NavLink
            to="/cart"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </NavLink>
          <Button size="sm" onClick={() => navigate('/products')}>
            Order Now
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-colors md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={linkClass}
                end={l.end}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3">
              <NavLink
                to="/account"
                className="flex-1 rounded-lg border border-brand-500 px-4 py-2 text-center text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                Login / My Account
              </NavLink>
              <NavLink
                to="/cart"
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                Cart
              </NavLink>
            </div>
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false)
                navigate('/products')
              }}
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
