import express, { type Request, type Response, type NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'

import { env } from './config/env'
import { apiRouter } from './routes/index'
import { notFoundHandler, errorHandler } from './middleware/error'

export function createApp() {
  const app = express()

  app.use(helmet())
  app.use(
    cors({
      origin: env.clientOrigin,
      credentials: true,
    })
  )
  // Stripe/Paystack webhook bodies must be raw; route will re-parse if needed.
  app.use('/api/v1/payments/webhook', express.raw({ type: 'application/json' }))
  app.use(express.json({ limit: '1mb' }))
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())

  if (!env.isProd) {
    app.use(morgan('dev'))
  }

  // Basic API rate limiter (auth routes get a stricter limiter there).
  app.use('/api', rateLimit({ windowMs: 60_000, max: 300, standardHeaders: true }))

  app.get('/api/v1/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'greenniche-api',
      version: '0.1.0',
      time: new Date().toISOString(),
    })
  })

  app.use('/api/v1', apiRouter)

  app.use(notFoundHandler)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    errorHandler(err, res)
  })

  return app
}
