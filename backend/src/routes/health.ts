import { Router } from 'express'
import { prisma } from '../lib/prisma'

export const healthRouter = Router()

healthRouter.get('/', async (_req, res) => {
  // Lightweight DB ping so the health check reflects DB reachability.
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok', db: 'up' })
  } catch (e) {
    res.status(503).json({ status: 'degraded', db: 'down', message: (e as Error).message })
  }
})
