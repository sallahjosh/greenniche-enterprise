import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'green' | 'amber' | 'red' | 'gray'

const tones: Record<Tone, string> = {
  green: 'bg-brand-50 text-brand-700 border-brand-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  red: 'bg-red-50 text-red-700 border-red-100',
  gray: 'bg-gray-100 text-gray-700 border-gray-200',
}

export function Badge({ tone = 'gray', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        tones[tone]
      )}
    >
      {children}
    </span>
  )
}
