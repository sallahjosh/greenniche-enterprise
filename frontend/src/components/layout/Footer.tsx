import { Link } from 'react-router-dom'
import { Leaf, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { brand } from '@/lib/brand'
import { whatsappLink } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10 bg-brand-800">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-lg font-bold">{brand.closing}</p>
            <p className="mt-0.5 text-sm text-white/70">{brand.tagline}</p>
          </div>
          <a
            href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to place an order.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-brand-700 shadow hover:bg-brand-50 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Order via WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
              <Leaf className="h-4 w-4 text-white" />
            </span>
            GreenNiche Enterprise
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            A zero-waste, climate-smart cassava agribusiness in {brand.location}. One crop — Gari,
            animal feed, charcoal and starch. Nothing wasted.
          </p>

          {/* Awards */}
          <div className="mt-6 space-y-2">
            {brand.awards.map((a) => (
              <div key={a.event} className="flex items-start gap-2 text-xs text-white/60">
                <span className="mt-0.5 text-brand-400">★</span>
                <span><span className="font-semibold text-white/80">{a.title}</span> · {a.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Navigate</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: '/products', label: 'Our Products' },
              { to: '/how-it-works', label: 'How It Works' },
              { to: '/about', label: 'About Us' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/blog', label: 'Blog / News' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/account', label: 'My Account' },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
                >
                  <ArrowRight className="h-3 w-3 opacity-50" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a href={`tel:${brand.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-400 shrink-0" />
                {brand.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-white transition-colors break-all">
                <Mail className="h-4 w-4 text-brand-400 shrink-0" />
                {brand.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
              <span>{brand.location}</span>
            </li>
          </ul>

          <a
            href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to make an enquiry.')}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-400 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>{brand.location}</span>
        </div>
      </div>
    </footer>
  )
}
