import Anthropic from '@anthropic-ai/sdk'
import { AgentConfig } from './config'
import { logger } from './logger'
import { AGENT_SYSTEM_PROMPT } from './prompts'

interface RuntimeOptions {
  anthropic: Anthropic
  config: AgentConfig
}

export class AgentRuntime {
  private anthropic: Anthropic
  private config: AgentConfig
  private running = false

  constructor({ anthropic, config }: RuntimeOptions) {
    this.anthropic = anthropic
    this.config = config
  }

  async initialize(): Promise<void> {
    logger.info('runtime initializing')
    // verify API connectivity
    await this.anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 10,
      messages: [{ role: 'user', content: 'ping' }],
    })
    logger.info('anthropic: connected')
  }

  async chat(userMessage: string, history: Anthropic.MessageParam[] = []): Promise<string> {
    const response = await this.anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: AGENT_SYSTEM_PROMPT,
      messages: [...history, { role: 'user', content: userMessage }],
    })
    return (response.content[0] as Anthropic.TextBlock).text
  }

  async run(): Promise<void> {
    this.running = true
    logger.info('agent runtime active')

    // Main loop — agent observes and acts
    while (this.running) {
      await this.tick()
      await this.sleep(this.config.tickIntervalMs)
    }
  }

  private async tick(): Promise<void> {
    logger.debug('tick')
    // TODO: observe chain state, post updates, scan wallets
  }

  stop(): void {
    this.running = false
    logger.info('agent stopped')
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
