import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { agentRouter } from './routes/agent'
import { appsRouter } from './routes/apps'
import { statsRouter } from './routes/stats'
import { rateLimiter } from './middleware/rate-limiter'
import { logger } from './middleware/logger'

const app = express()
const PORT = process.env.API_PORT || 4000

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(logger)
app.use(rateLimiter)

app.use('/v1/agent', agentRouter)
app.use('/v1/apps', appsRouter)
app.use('/v1/stats', statsRouter)

app.get('/health', (_, res) => {
  res.json({ status: 'ok', message: 'still finding.' })
})

app.listen(PORT, () => {
  console.log(`FinderOS API running on :${PORT}`)
})
