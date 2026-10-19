import type { Response } from 'express'
import { ZodError } from 'zod'

export class HttpError extends Error {
  status: number
  details?: unknown
  constructor(status: number, message: string, details?: unknown) {
    super(message)
    this.status = status
    this.details = details
  }
}

export function notFoundHandler(_req: unknown, res: Response) {
  res.status(404).json({ error: { code: 'not_found', message: 'Resource not found' } })
}

export function errorHandler(err: unknown, res: Response) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: { code: 'validation_error', message: 'Invalid request data', details: err.flatten() },
    })
  }
  if (err instanceof HttpError) {
    return res.status(err.status).json({ error: { code: 'http_error', message: err.message, details: err.details } })
  }
  // Never leak internal error details in production.
  console.error('[error]', err)
  const message = process.env.NODE_ENV === 'production' ? 'Internal server error' : (err as Error).message
  return res.status(500).json({ error: { code: 'server_error', message } })
}
