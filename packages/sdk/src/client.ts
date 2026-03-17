import { createPublicClient, createWalletClient, http, PublicClient, WalletClient } from 'viem'
import { base } from 'viem/chains'
import { FINDER_ABI } from './abi'
import { FinderOSConfig, WalletStatus, AppEntry } from './types'

export class FinderOSClient {
  private publicClient: PublicClient
  private config: FinderOSConfig

  constructor(config: FinderOSConfig) {
    this.config = config
    this.publicClient = createPublicClient({
      chain: base,
      transport: http(config.rpcUrl),
    })
  }

  async getTokenBalance(address: string): Promise<bigint> {
    return await this.publicClient.readContract({
      address: this.config.finderContract as `0x${string}`,
      abi: FINDER_ABI,
      functionName: 'balanceOf',
      args: [address as `0x${string}`],
    }) as bigint
  }

  async isOnboarded(address: string): Promise<boolean> {
    return await this.publicClient.readContract({
      address: this.config.homescreenContract as `0x${string}`,
      abi: FINDER_ABI,
      functionName: 'onboarded',
      args: [address as `0x${string}`],
    }) as boolean
  }

  async getTotalOnboarded(): Promise<number> {
    const total = await this.publicClient.readContract({
      address: this.config.homescreenContract as `0x${string}`,
      abi: FINDER_ABI,
      functionName: 'totalOnboarded',
    }) as bigint
    return Number(total)
  }

  async status(): Promise<string> {
    return 'still finding.'
  }
}
