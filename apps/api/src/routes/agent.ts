import { Router } from 'express'
import { AgentRuntime } from '@finderos/agent'

const router = Router()

// POST /v1/agent/chat
router.post('/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body
    if (!message) return res.status(400).json({ error: 'message required' })
    // TODO: connect to running agent runtime
    res.json({ reply: 'still finding.', model: 'claude-haiku-4-5-20251001' })
  } catch (err) {
    res.status(500).json({ error: 'agent error' })
  }
})

// GET /v1/agent/status
router.get('/status', (_, res) => {
  res.json({
    status: 'active',
    chain: 'base',
    mission: '2,000,000,000',
    deployed: 'March 4, 2026',
  })
})

export { router as agentRouter }
