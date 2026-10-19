import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge conditional class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format a number as Ghana Cedi. */
export function formatGHS(amount: number | null | undefined): string {
  if (amount === null || amount === undefined) return 'Price on request'
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    minimumFractionDigits: 2,
  }).format(amount)
}

/** Convert a 10-digit Ghana number (e.g. 0256673127) into an international wa.me link. */
export function whatsappLink(phoneGhana: string, message?: string): string {
  const digits = phoneGhana.replace(/\D/g, '')
  // Local 0XXXXXXXXX -> Ghana +233
  const international = digits.startsWith('0') ? '233' + digits.slice(1) : digits
  const base = `https://wa.me/${international}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
