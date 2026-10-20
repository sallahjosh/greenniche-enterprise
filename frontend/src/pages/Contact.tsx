import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Phone, Mail, MapPin, MessageCircle,
  Send, CheckCircle2, ChevronDown,
} from 'lucide-react'
import { brand } from '@/lib/brand'
import { whatsappLink } from '@/lib/utils'
import { api } from '@/lib/api'

const schema = z.object({
  name:    z.string().min(2, 'Enter your name'),
  phone:   z.string().min(9, 'Enter a valid phone number'),
  email:   z.string().email('Enter a valid email').optional().or(z.literal('')),
  subject: z.string().optional(),
  message: z.string().min(10, 'At least 10 characters'),
})
type FormValues = z.infer<typeof schema>

const faqs = [
  { q: 'What is GreenNiche Enterprise?',
    a: 'A zero-waste, climate-smart cassava agribusiness in the Central Region of Ghana that processes fresh cassava into Gari and turns by-products into animal feed, charcoal and starch.' },
  { q: 'What products does GreenNiche sell?',
    a: 'Gari, animal feed, charcoal and starch.' },
  { q: 'How does the zero-waste production model work?',
    a: 'Fresh cassava becomes Gari; peels become animal feed and charcoal; the liquid from dewatering becomes starch, which binds the charcoal. One crop, fully used.' },
  { q: 'How can I place an order?',
    a: 'Browse the Products page, choose your items, and complete checkout. You can also reach us on WhatsApp.' },
  { q: 'Which payment methods are supported?',
    a: 'Paystack (online) and cash-on-delivery and bank transfer for qualifying orders.' },
  { q: 'Can institutions place bulk orders?',
    a: 'Yes. Schools and institutions can request a quote via the contact form or WhatsApp.' },
  { q: 'How can livestock farmers enquire about animal feed?',
    a: 'Use the contact form or WhatsApp us with your requirements.' },
  { q: 'How can customers track their orders?',
    a: 'Registered customers can view order status from the My Account portal.' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(values: FormValues) {
    setSubmitError(null)
    try {
      await api.post('/contact', values)
      setSubmitted(true)
      reset()
    } catch (e) {
      setSubmitError((e as Error).message || 'Could not submit. Please use WhatsApp instead.')
    }
  }

  return (
    <div className="bg-canvas">

      {/* ── HEADER ── */}
      <section className="border-b border-stone-200 bg-parchment">
        <div className="wrap py-12 md:py-16">
          <span className="tag">Contact</span>
          <h1 className="mt-4 section-heading text-4xl md:text-5xl">Get in touch</h1>
          <p className="mt-3 max-w-xl prose-body">
            Questions, bulk orders or partnership enquiries — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="wrap py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">

          {/* Left: info panel */}
          <div className="flex flex-col gap-6">

            {/* Contact details card */}
            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-xs">
              <h2 className="font-display text-xl font-bold text-ink">Reach us directly</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a href={`tel:${brand.phone}`}
                    className="flex items-center gap-3 rounded-xl border border-stone-100 bg-stone-50 px-4 py-3 text-sm font-medium text-ink hover:border-brand-200 hover:bg-brand-50 transition-colors">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 shrink-0">
                      <Phone className="h-4 w-4" />
                    </span>
                    {brand.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${brand.email}`}
                    className="flex items-center gap-3 rounded-xl border border-stone-100 bg-stone-50 px-4 py-3 text-sm font-medium text-ink hover:border-brand-200 hover:bg-brand-50 transition-colors break-all">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 shrink-0">
                      <Mail className="h-4 w-4" />
                    </span>
                    {brand.email}
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 rounded-xl border border-stone-100 bg-stone-50 px-4 py-3 text-sm text-ink-light">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 shrink-0">
                      <MapPin className="h-4 w-4" />
                    </span>
                    {brand.location}
                  </div>
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA card */}
            <a
              href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to make an enquiry.')}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl bg-brand-500 p-6 text-white hover:bg-brand-600 transition-colors shadow-brand group"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 group-hover:bg-white/25 transition-colors shrink-0">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg font-bold">Chat on WhatsApp</p>
                <p className="mt-0.5 text-sm text-white/70">Fastest way to reach us</p>
              </div>
            </a>

            {/* Map placeholder */}
            <div className="flex h-44 items-center justify-center rounded-3xl border border-stone-200 bg-stone-50 text-sm text-ink-muted">
              Map coming soon — address pending confirmation.
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-xs">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                  <CheckCircle2 className="h-8 w-8 text-brand-500" />
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-ink">Thank you!</h2>
                <p className="mt-2 text-sm text-ink-light max-w-sm">
                  Your message has been received. We will be in touch shortly.
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-6 btn-outline text-sm">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-xl font-bold text-ink">Send a message</h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name *" error={errors.name?.message}>
                      <input {...register('name')} className="field" placeholder="Your name" />
                    </Field>
                    <Field label="Phone *" error={errors.phone?.message}>
                      <input {...register('phone')} className="field" placeholder="0XXXXXXXXX" />
                    </Field>
                  </div>
                  <Field label="Email (optional)" error={errors.email?.message}>
                    <input {...register('email')} className="field" placeholder="you@example.com" />
                  </Field>
                  <Field label="Subject (optional)" error={errors.subject?.message}>
                    <input {...register('subject')} className="field" placeholder="Bulk order, partnership…" />
                  </Field>
                  <Field label="Message *" error={errors.message?.message}>
                    <textarea {...register('message')} rows={4}
                      className="field resize-none" placeholder="How can we help?" />
                  </Field>

                  {submitError && (
                    <p className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </p>
                  )}

                  <button type="submit" disabled={isSubmitting}
                    className="btn-primary w-full justify-center">
                    {isSubmitting
                      ? 'Sending…'
                      : <><Send className="h-4 w-4" /> Send message</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-parchment border-t border-stone-200 py-14">
        <div className="wrap">
          <span className="tag">FAQ</span>
          <h2 className="mt-4 section-heading text-3xl md:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 max-w-3xl space-y-2">
            {faqs.map((f, i) => (
              <div key={f.q}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-ink hover:bg-stone-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 ${
                    openFaq === i ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === i && (
                  <div className="border-t border-stone-100 px-6 py-4 text-sm text-ink-light leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, error, children }: {
  label: string; error?: string; children: React.ReactNode
}) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}
