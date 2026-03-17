export interface Classification {
  address: string
  platform: 'iOS' | 'macOS' | 'unknown'
  confidence: number
}

const APPLE_PATTERNS = [
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /Macintosh.*Mac OS X/i,
  /AppleWebKit.*Mobile/i,
]

export class DeviceClassifier {
  private cache = new Map<string, Classification>()

  async classify(address: string): Promise<Classification> {
    if (this.cache.has(address)) {
      return this.cache.get(address)!
    }

    // TODO: fetch device metadata from indexer
    const result: Classification = {
      address,
      platform: 'unknown',
      confidence: 0,
    }

    this.cache.set(address, result)
    return result
  }
}
