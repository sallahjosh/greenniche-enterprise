import dotenv from 'dotenv'
import path from 'node:path'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback
  if (value === undefined) {
    // In dev we warn but don't crash; in production this is a hard failure.
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing required environment variable: ${name}`)
    }
    console.warn(`[env] Missing ${name} — using fallback or undefined (dev only).`)
  }
  return value as string
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: Number(process.env.PORT ?? 4000),
  clientOrigin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',

  databaseUrl: required('DATABASE_URL', 'postgresql://user:password@localhost:5432/greenniche'),

  jwtSecret: required('JWT_SECRET', 'dev-only-not-for-production-use'),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  bcryptRounds: Number(process.env.BCRYPT_ROUNDS ?? 12),

  paystack: {
    secretKey: process.env.PAYSTACK_SECRET_KEY ?? '',
    publicKey: process.env.PAYSTACK_PUBLIC_KEY ?? '',
    baseUrl: process.env.PAYSTACK_BASE_URL ?? 'https://api.paystack.co',
    webhookSecret: process.env.PAYSTACK_WEBHOOK_SECRET ?? '',
    currency: process.env.PAYSTACK_CURRENCY ?? 'GHS',
  },

  notifications: {
    devMode: (process.env.NOTIFICATIONS_DEV_MODE ?? 'true') === 'true',
  },

  business: {
    name: process.env.BUSINESS_NAME ?? 'GreenNiche Enterprise',
    phone: process.env.BUSINESS_PHONE ?? '0256673127',
    email: process.env.BUSINESS_EMAIL ?? 'clementkwasiannan01@gmail.com',
    location: process.env.BUSINESS_LOCATION ?? 'Central Region, Ghana',
    tagline: process.env.BUSINESS_TAGLINE ?? 'Zero Waste. Full Value. Processing the Future.',
  },
}

export type Env = typeof env
