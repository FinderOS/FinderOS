import * as dotenv from 'dotenv'
dotenv.config()

export interface AgentConfig {
  chainId: number
  rpcUrl: string
  anthropicApiKey: string
  finderContract: string
  tickIntervalMs: number
  postIntervalMs: number
}

export const config: AgentConfig = {
  chainId: parseInt(process.env.CHAIN_ID || '8453'),
  rpcUrl: process.env.BASE_RPC_URL || 'https://mainnet.base.org',
  anthropicApiKey: process.env.ANTHROPIC_API_KEY || '',
  finderContract: process.env.FINDER_CONTRACT_ADDRESS || '',
  tickIntervalMs: 12_000, // every Base block
  postIntervalMs: parseInt(process.env.AGENT_POST_INTERVAL_MS || '3600000'),
}
