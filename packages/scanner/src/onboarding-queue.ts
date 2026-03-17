import { WalletResult } from './block-scanner'
import { logger } from './logger'

export class OnboardingQueue {
  private queue: WalletResult[] = []
  private processing = false

  async add(wallet: WalletResult): Promise<void> {
    this.queue.push(wallet)
    if (!this.processing) {
      await this.process()
    }
  }

  private async process(): Promise<void> {
    this.processing = true
    while (this.queue.length > 0) {
      const wallet = this.queue.shift()!
      await this.onboard(wallet)
    }
    this.processing = false
  }

  private async onboard(wallet: WalletResult): Promise<void> {
    // TODO: transfer $FINDER, add to homescreen
    logger.info('onboarding wallet', { address: wallet.address })
  }
}
