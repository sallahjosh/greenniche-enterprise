import { Router } from 'express'
import { healthRouter } from './health'

export const apiRouter = Router()

apiRouter.use('/health', healthRouter)

// Future route mounts (implemented incrementally):
// apiRouter.use('/auth', authRouter)
// apiRouter.use('/products', productsRouter)
// apiRouter.use('/cart', cartRouter)
// apiRouter.use('/orders', ordersRouter)
// apiRouter.use('/payments', paymentsRouter)
// apiRouter.use('/contact', contactRouter)
// apiRouter.use('/admin', adminRouter)
