import { createAnthropicClient } from './client'
import { AgentRuntime } from './runtime'
import { logger } from './logger'
import { config } from './config'

async function main() {
  logger.info('FinderOS agent starting...')
  logger.info(`chain: base / ${config.chainId}`)
  logger.info('mission loaded: 2,000,000,000')

  const anthropic = createAnthropicClient()
  const runtime = new AgentRuntime({ anthropic, config })

  await runtime.initialize()
  await runtime.run()

  logger.info('still finding.')
}

main().catch((err) => {
  logger.error('agent crashed', { error: err.message })
  process.exit(1)
})
