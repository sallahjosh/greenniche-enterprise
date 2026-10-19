import { createApp } from './app'
import { env } from './config/env'
import { prisma } from './lib/prisma'

async function main() {
  const app = createApp()

  const server = app.listen(env.port, () => {
    console.log(`[greenniche-api] listening on http://localhost:${env.port} (${env.nodeEnv})`)
  })

  // Graceful shutdown
  const shutdown = async (signal: string) => {
    console.log(`[greenniche-api] ${signal} received, shutting down...`)
    server.close(async () => {
      await prisma.$disconnect()
      process.exit(0)
    })
  }
  process.on('SIGINT', () => shutdown('SIGINT'))
  process.on('SIGTERM', () => shutdown('SIGTERM'))
}

main().catch((err) => {
  console.error('[greenniche-api] fatal start error:', err)
  process.exit(1)
})
