import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

const primary = [
  { to: '/',         label: 'Home',     end: true  },
  { to: '/about',    label: 'About',    end: false },
  { to: '/products', label: 'Products', end: false },
  { to: '/contact',  label: 'Contact',  end: false },
]

export function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  /* On the home page the nav starts transparent over the dark hero,
     then becomes opaque after scroll. On all other pages always opaque. */
  const transparent = isHome && !scrolled && !open

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent'
          : 'bg-white/97 backdrop-blur-md border-b border-stone-200 shadow-xs'
      )}
    >
      <nav className="wrap flex h-[70px] items-center justify-between gap-6" aria-label="Main navigation">

        {/* ── Brand ── */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className={cn(
            'flex h-8 w-8 items-center justify-center rounded-lg shadow-sm transition-colors',
            transparent ? 'bg-white/15 border border-white/20' : 'bg-brand-500'
          )}>
            <Leaf className="h-4 w-4 text-white" />
          </span>
          <span className={cn(
            'font-display text-lg font-bold tracking-tight transition-colors',
            transparent ? 'text-white' : 'text-ink'
          )}>
            Green<span className={transparent ? 'text-brand-300' : 'text-brand-500'}>Niche</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden items-center gap-1 lg:flex">
          {primary.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => cn(
                'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                isActive
                  ? transparent ? 'text-white bg-white/10' : 'text-brand-600 bg-brand-50'
                  : transparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-ink/70 hover:text-ink hover:bg-stone-100'
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* ── Desktop actions ── */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <NavLink to="/account" className={cn(
            'text-sm font-medium transition-colors px-2',
            transparent ? 'text-white/80 hover:text-white' : 'text-ink/60 hover:text-ink'
          )}>
            Login
          </NavLink>
          <NavLink to="/cart" aria-label="Cart" className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full border transition-all',
            transparent
              ? 'border-white/25 text-white/80 hover:bg-white/10 hover:text-white'
              : 'border-stone-200 text-ink/60 hover:border-brand-300 hover:text-brand-600 bg-white shadow-xs'
          )}>
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
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full border transition-all lg:hidden',
            transparent
              ? 'border-white/25 text-white/80 hover:bg-white/10'
              : 'border-stone-200 text-ink/60 bg-white shadow-xs'
          )}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <div className="wrap py-5 flex flex-col gap-1">
            {primary.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => cn(
                  'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  isActive ? 'bg-brand-50 text-brand-700' : 'text-ink/70 hover:bg-stone-100 hover:text-ink'
                )}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 pt-3 border-t border-stone-100 flex gap-2.5">
              <NavLink to="/account" className="flex-1 rounded-full border border-stone-200 py-2.5 text-center text-sm font-semibold text-ink/70 hover:bg-stone-50">
                Login
              </NavLink>
              <NavLink to="/cart" className="flex-1 rounded-full border border-stone-200 py-2.5 text-center text-sm font-semibold text-ink/70 hover:bg-stone-50">
                Cart
              </NavLink>
            </div>
            <button onClick={() => navigate('/products')} className="btn-primary mt-2 w-full justify-center">
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
