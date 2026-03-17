import { Request, Response, NextFunction } from 'express'

const requests = new Map<string, number[]>()
const WINDOW = 60_000 // 1 min
const LIMIT = 60

export function rateLimiter(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || 'unknown'
  const now = Date.now()
  const hits = (requests.get(ip) || []).filter((t) => now - t < WINDOW)
  if (hits.length >= LIMIT) {
    return res.status(429).json({ error: 'too many requests' })
  }
  hits.push(now)
  requests.set(ip, hits)
  next()
}
