import Anthropic from '@anthropic-ai/sdk'
import { config } from './config'

export function createAnthropicClient(): Anthropic {
  if (!config.anthropicApiKey) {
    throw new Error('ANTHROPIC_API_KEY not set')
  }
  return new Anthropic({ apiKey: config.anthropicApiKey })
}
