import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { brand } from '@/lib/brand'
import { whatsappLink } from '@/lib/utils'
import { api } from '@/lib/api'

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  phone: z.string().min(9, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message should be at least 10 characters'),
})
type FormValues = z.infer<typeof schema>

const faqs = [
  {
    q: 'What is GreenNiche Enterprise?',
    a: 'A zero-waste, climate-smart cassava agribusiness in the Central Region of Ghana that processes fresh cassava into Gari and turns by-products into animal feed, charcoal and starch.',
  },
  {
    q: 'What products does GreenNiche sell?',
    a: 'Gari, animal feed, charcoal and starch.',
  },
  {
    q: 'How does the zero-waste production model work?',
    a: 'Fresh cassava becomes Gari; peels become animal feed and charcoal; the liquid from dewatering becomes starch, which binds the charcoal. One crop, fully used.',
  },
  {
    q: 'How can I place an order?',
    a: 'Browse the Products page, choose your items, and complete checkout. You can also reach us on WhatsApp.',
  },
  {
    q: 'Which payment methods are supported?',
    a: 'Paystack (online) is planned for the storefront. Cash-on-delivery and bank transfer are also supported for qualifying orders.',
  },
  {
    q: 'Can institutions place bulk orders?',
    a: 'Yes. Schools and institutions can request a quote via the contact form or WhatsApp.',
  },
  {
    q: 'How can livestock farmers enquire about animal feed?',
    a: 'Use the contact form or WhatsApp us with your requirements and we will respond with availability.',
  },
  {
    q: 'How can customers track their orders?',
    a: 'Registered customers can view order status and a timeline from the My Account portal.',
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(values: FormValues) {
    setSubmitError(null)
    try {
      await api.post('/contact', values)
      setSubmitted(true)
      reset()
    } catch (e) {
      // Backend contact route is wired in the next step; degrade gracefully until then.
      setSubmitError((e as Error).message || 'Could not submit right now. Please use WhatsApp instead.')
    }
  }

  return (
    <>
      <section className="border-b border-brand-100 bg-brand-50/40">
        <div className="container-page py-12 md:py-16">
          <h1 className="text-3xl font-extrabold md:text-4xl">Contact us</h1>
          <p className="mt-3 max-w-2xl text-lg text-brand-900/80">
            Questions, bulk orders or partnership enquiries — we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold">Reach us directly</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-600" />
                <a href={`tel:${brand.phone}`} className="text-brand-900 hover:text-brand-700">{brand.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-600" />
                <a href={`mailto:${brand.email}`} className="text-brand-900 hover:text-brand-700">{brand.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-600" />
                <span className="text-brand-900">{brand.location}</span>
              </li>
            </ul>

            <a
              href={whatsappLink(brand.phone, 'Hello GreenNiche, I would like to make an enquiry.')}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-3 font-semibold text-white hover:bg-brand-600"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-brand-900">Location</h3>
              {/* Map embed pending exact coordinates (not invented). */}
              <div className="mt-2 flex h-48 items-center justify-center rounded-xl border border-brand-100 bg-brand-50 text-sm text-brand-900/60">
                Map integration pending confirmed address (Old Ebu / Abuenu).
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card p-6">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-brand-500" />
                <h2 className="mt-3 text-xl font-bold">Thank you</h2>
                <p className="mt-1 text-brand-900/70">Your message has been received. We will be in touch shortly.</p>
                <Button className="mt-4" variant="outline" onClick={() => setSubmitted(false)}>
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input {...register('name')} className="input" placeholder="Your name" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <input {...register('phone')} className="input" placeholder="0XXXXXXXXX" />
                  </Field>
                </div>
                <Field label="Email (optional)" error={errors.email?.message}>
                  <input {...register('email')} className="input" placeholder="you@example.com" />
                </Field>
                <Field label="Subject (optional)" error={errors.subject?.message}>
                  <input {...register('subject')} className="input" placeholder="Bulk order, partnership, etc." />
                </Field>
                <Field label="Message" error={errors.message?.message}>
                  <textarea {...register('message')} className="input min-h-[120px]" placeholder="How can we help?" />
                </Field>

                {submitError && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{submitError}</p>
                )}

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending…' : (<>Send message <Send className="h-4 w-4" /></>)}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-50/40">
        <div className="container-page py-14">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card group p-5">
                <summary className="cursor-pointer list-none font-semibold text-brand-900 marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-brand-900/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-brand-900">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}
