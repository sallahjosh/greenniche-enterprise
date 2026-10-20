import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/',         label: 'Home',     end: true  },
  { to: '/about',    label: 'About',    end: false },
  { to: '/products', label: 'Products', end: false },
  { to: '/contact',  label: 'Contact',  end: false },
]

export function Navbar() {
  const [open, setOpen]       = useState(false)
  const [raised, setRaised]   = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  // Only add drop shadow after the user scrolls — keeps it flat at top of page
  useEffect(() => {
    const h = () => setRaised(window.scrollY > 8)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header
      className={cn(
        // Always solid white — no transparency, no glass, everything visible at all times
        'sticky top-0 z-50 bg-white border-b border-stone-200 transition-shadow duration-200',
        raised ? 'shadow-sm' : 'shadow-none'
      )}
    >
      <nav
        className="wrap flex h-[68px] items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        {/* ── Brand ── */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 shadow-xs">
            <Leaf className="h-4 w-4 text-white" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Green<span className="text-brand-500">Niche</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => cn(
                'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-brand-50 text-brand-700 font-semibold'
                  : 'text-ink/70 hover:text-ink hover:bg-stone-100'
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* ── Desktop actions ── */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <NavLink
            to="/account"
            className="text-sm font-medium text-ink/60 hover:text-ink transition-colors"
          >
            Login
          </NavLink>
          <NavLink
            to="/cart"
            aria-label="Cart"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-ink/60 hover:border-brand-300 hover:text-brand-600 shadow-xs transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
          </NavLink>
          <button
            onClick={() => navigate('/products')}
            className="btn-primary text-xs px-5 py-2.5"
          >
            Order Now
          </button>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-ink/60 hover:text-ink transition-colors lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => cn(
                  'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand-50 text-brand-700 font-semibold'
                    : 'text-ink/70 hover:bg-stone-100 hover:text-ink'
                )}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex gap-2.5 border-t border-stone-100 pt-4">
              <NavLink
                to="/account"
                className="flex-1 rounded-full border border-stone-200 py-2.5 text-center text-sm font-semibold text-ink/70 hover:bg-stone-50 transition-colors"
              >
                Login
              </NavLink>
              <NavLink
                to="/cart"
                className="flex-1 rounded-full border border-stone-200 py-2.5 text-center text-sm font-semibold text-ink/70 hover:bg-stone-50 transition-colors"
              >
                Cart
              </NavLink>
            </div>
            <button
              onClick={() => navigate('/products')}
              className="btn-primary mt-2 w-full justify-center"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
