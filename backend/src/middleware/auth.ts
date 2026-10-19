// Auth + RBAC middleware (placeholder for the next step of Phase 1).
// Full implementation (JWT verify, role checks, 2FA gate) is wired in the auth feature step.

import type { Request, Response, NextFunction } from 'express'
import { HttpError } from './error'

export interface AuthedRequest extends Request {
  user?: {
    id: string
    role: 'SUPER_ADMIN' | 'OPERATIONS' | 'FINANCE' | 'CUSTOMER'
  }
}

export function requireAuth(_req: AuthedRequest, _res: Response, _next: NextFunction) {
  // TODO: verify JWT, attach req.user
  throw new HttpError(401, 'Not authenticated')
}

export function requireRole(..._roles: string[]) {
  return (_req: AuthedRequest, _res: Response, _next: NextFunction) => {
    // TODO: check req.user.role against allowed roles
    throw new HttpError(403, 'Forbidden')
  }
}
