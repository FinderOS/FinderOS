/**
 * Example: get $FINDER balance for an address
 */
import { FinderOSClient } from '@finderos/sdk'

const client = new FinderOSClient({
  finderContract: process.env.FINDER_CONTRACT_ADDRESS!,
  homescreenContract: process.env.HOMESCREEN_CONTRACT_ADDRESS!,
})

async function main() {
  const address = '0x...'
  const balance = await client.getTokenBalance(address)
  const onboarded = await client.isOnboarded(address)
  const total = await client.getTotalOnboarded()

  console.log(`balance: ${balance}`)
  console.log(`onboarded: ${onboarded}`)
  console.log(`total onboarded: ${total} / 2,000,000,000`)
  console.log(await client.status())
}

main().catch(console.error)
