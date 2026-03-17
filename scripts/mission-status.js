#!/usr/bin/env node
/**
 * FinderOS mission status
 * Prints current mission progress to stdout
 */

require('dotenv').config()
const https = require('https')

const TARGET = 2_000_000_000
const CONTRACT = process.env.FINDER_CONTRACT_ADDRESS
const RPC = process.env.BASE_RPC_URL || 'https://mainnet.base.org'

async function fetchOnboarded() {
  // TODO: read from FinderHomescreen.totalOnboarded()
  return 0
}

async function main() {
  console.log('FinderOS mission status')
  console.log('─────────────────────────────────────────')
  console.log(`chain:     Base`)
  console.log(`contract:  ${CONTRACT || 'not deployed'}`)

  const onboarded = await fetchOnboarded()
  const remaining = TARGET - onboarded
  const pct = ((onboarded / TARGET) * 100).toFixed(8)

  console.log(`target:    ${TARGET.toLocaleString()}`)
  console.log(`onboarded: ${onboarded.toLocaleString()}`)
  console.log(`remaining: ${remaining.toLocaleString()}`)
  console.log(`progress:  ${pct}%`)
  console.log('─────────────────────────────────────────')
  console.log('status: still finding.')
}

main().catch(console.error)
