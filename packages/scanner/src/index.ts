import { createPublicClient, http, webSocket } from 'viem'
import { base } from 'viem/chains'
import { scanBlock } from './block-scanner'
import { DeviceClassifier } from './device-classifier'
import { OnboardingQueue } from './onboarding-queue'
import { logger } from './logger'

async function main() {
  logger.info('FinderOS scanner starting')
  logger.info('network: base mainnet')

  const client = createPublicClient({
    chain: base,
    transport: http(process.env.BASE_RPC_URL),
  })

  const classifier = new DeviceClassifier()
  const queue = new OnboardingQueue()

  // Watch every block
  client.watchBlocks({
    onBlock: async (block) => {
      logger.debug(`block: ${block.number}`)
      const appleWallets = await scanBlock(client, block, classifier)
      for (const wallet of appleWallets) {
        await queue.add(wallet)
      }
    },
    onError: (err) => {
      logger.error('block watch error', { error: err.message })
    },
  })

  logger.info('scanner active. still finding.')
}

main().catch(console.error)
