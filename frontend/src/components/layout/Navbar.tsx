import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/',         label: 'Home',     end: true  },
  { to: '/about',    label: 'About',    end: false },
  { to: '/products', label: 'Products', end: false },
  { to: '/contact',  label: 'Contact',  end: false },
]

export function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative px-1 py-0.5 text-sm font-medium transition-colors',
      'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full',
      'after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform',
      'hover:text-brand-700 hover:after:scale-x-100',
      isActive ? 'text-brand-700 after:scale-x-100' : 'text-[#1A1A1A]/60'
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-soft border-b border-[#EDE4D0]'
          : 'bg-[#FDFBF7]/80 backdrop-blur border-b border-[#EDE4D0]/60'
      )}
    >
      <nav
        className="container-page flex h-[68px] items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-xl font-bold text-[#1A1A1A] tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white shadow-soft">
            <Leaf className="h-4 w-4" />
          </span>
          <span>
            Green<span className="text-brand-600">Niche</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.end}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* ── Desktop actions ── */}
        <div className="hidden items-center gap-3 md:flex">
          <NavLink
            to="/account"
            className="text-sm font-medium text-[#1A1A1A]/60 hover:text-brand-700 transition-colors"
          >
            Login
          </NavLink>
          <NavLink
            to="/cart"
            aria-label="Cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#EDE4D0] bg-white text-[#1A1A1A]/60 hover:text-brand-700 hover:border-brand-200 shadow-soft transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
          </NavLink>
          <button
            onClick={() => navigate('/products')}
            className="btn-primary text-xs px-5 py-2.5 shadow-soft"
          >
            Order Now
          </button>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EDE4D0] bg-white text-[#1A1A1A]/60 hover:text-brand-700 transition-colors md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="border-t border-[#EDE4D0] bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-5">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-[#1A1A1A]/70 hover:bg-[#F5F0E8] hover:text-brand-700'
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex gap-2 border-t border-[#EDE4D0] pt-4">
              <NavLink
                to="/account"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-brand-500 py-2.5 text-center text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
              >
                Login
              </NavLink>
              <button
                onClick={() => { setOpen(false); navigate('/products') }}
                className="flex-1 btn-primary text-xs py-2.5"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
