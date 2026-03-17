import { Router } from 'express'

const router = Router()

// GET /v1/apps — fetch community homescreen apps
router.get('/', async (req, res) => {
  try {
    // TODO: fetch from Firebase / contract
    res.json({ apps: [], total: 0 })
  } catch (err) {
    res.status(500).json({ error: 'fetch failed' })
  }
})

// POST /v1/apps — add new app (proxies Firebase write)
router.post('/', async (req, res) => {
  const { name, url, icon } = req.body
  if (!name) return res.status(400).json({ error: 'name required' })
  // TODO: write to Firebase
  res.status(201).json({ id: 'new', name, url, icon })
})

export { router as appsRouter }
