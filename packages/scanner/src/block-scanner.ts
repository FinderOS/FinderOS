import { PublicClient, Block } from 'viem'
import { DeviceClassifier } from './device-classifier'
import { logger } from './logger'

export interface WalletResult {
  address: string
  platform: 'iOS' | 'macOS' | 'unknown'
  blockNumber: bigint
  timestamp: number
}

export async function scanBlock(
  client: PublicClient,
  block: Block,
  classifier: DeviceClassifier
): Promise<WalletResult[]> {
  const results: WalletResult[] = []

  for (const txHash of block.transactions) {
    try {
      const tx = await client.getTransaction({ hash: txHash as `0x${string}` })
      const classification = await classifier.classify(tx.from)

      if (classification.platform !== 'unknown') {
        results.push({
          address: tx.from,
          platform: classification.platform,
          blockNumber: block.number ?? 0n,
          timestamp: Number(block.timestamp),
        })
        logger.info('apple wallet detected', {
          address: tx.from,
          platform: classification.platform,
        })
      }
    } catch (_) {
      // skip failed txs
    }
  }

  return results
}
