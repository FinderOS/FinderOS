export interface FinderOSConfig {
  rpcUrl?: string
  finderContract: string
  homescreenContract: string
}

export interface WalletStatus {
  address: string
  balance: bigint
  onboarded: boolean
  platform: 'iOS' | 'macOS' | 'unknown'
}

export interface AppEntry {
  id: string
  owner: string
  name: string
  url: string
  iconHash: string
  timestamp: number
}
