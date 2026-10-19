import { Link } from 'react-router-dom'
import { Leaf, Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react'
import { brand } from '@/lib/brand'
import { whatsappLink } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="bg-ink text-white" aria-label="Site footer">

      {/* Top CTA band */}
      <div className="border-b border-white/8 bg-brand-800">
        <div className="wrap py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="font-display text-2xl font-bold leading-snug">
              Ready to order? Let's talk.
            </p>
            <p className="mt-1 text-sm text-white/60">{brand.tagline}</p>
          </div>
          <a
            href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to place an order.')}
            target="_blank" rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-800 shadow-md hover:bg-brand-50 transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="wrap grid gap-10 py-16 md:grid-cols-12">

        {/* Brand column */}
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
              <Leaf className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-xl font-bold">
              Green<span className="text-brand-400">Niche</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-xs">
            A zero-waste, climate-smart cassava agribusiness in {brand.location}. One crop —
            Gari, animal feed, charcoal and starch. Nothing wasted.
          </p>
          <div className="mt-6 space-y-2.5">
            {brand.awards.map(a => (
              <div key={a.event} className="flex items-start gap-2 text-xs text-white/45">
                <span className="mt-0.5 text-brand-400 shrink-0">★</span>
                <span><span className="text-white/70 font-medium">{a.title}</span> · {a.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 md:col-start-6">
          <p className="text-2xs font-bold uppercase tracking-[0.14em] text-white/35 mb-5">Navigate</p>
          <ul className="space-y-3 text-sm">
            {[
              { to: '/products',    label: 'Our Products'  },
              { to: '/how-it-works',label: 'How It Works'  },
              { to: '/about',       label: 'About Us'      },
              { to: '/gallery',     label: 'Gallery'       },
              { to: '/blog',        label: 'Blog & News'   },
              { to: '/contact',     label: 'Contact'       },
              { to: '/account',     label: 'My Account'    },
            ].map(l => (
              <li key={l.to}>
                <Link to={l.to} className="flex items-center gap-1.5 text-white/55 hover:text-white transition-colors group">
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <p className="text-2xs font-bold uppercase tracking-[0.14em] text-white/35 mb-5">Contact</p>
          <ul className="space-y-3.5 text-sm text-white/55">
            <li>
              <a href={`tel:${brand.phone}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-400 shrink-0" />{brand.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors break-all">
                <Mail className="h-4 w-4 text-brand-400 shrink-0" />{brand.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />{brand.location}
            </li>
          </ul>
          <a
            href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to make an enquiry.')}
            target="_blank" rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-400 transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-xs text-white/30">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>{brand.location}</span>
        </div>
      </div>
    </footer>
  )
}
