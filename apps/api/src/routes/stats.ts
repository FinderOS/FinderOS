import { Router } from 'express'

const router = Router()

// GET /v1/stats
router.get('/', async (_, res) => {
  res.json({
    target: 2_000_000_000,
    onboarded: 0,
    remaining: 2_000_000_000,
    pct: '0.000000%',
    status: 'still finding.',
  })
})

export { router as statsRouter }
