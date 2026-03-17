#!/usr/bin/env node
/**
 * FinderOS wallet generator
 * Generates a fresh deployer wallet for testnet/mainnet deployment
 * WARNING: never commit the output. store in .env only.
 */

const { privateKeyToAccount, generatePrivateKey } = require('viem/accounts')

const privateKey = generatePrivateKey()
const account = privateKeyToAccount(privateKey)

console.log('FinderOS wallet generated')
console.log('─────────────────────────────────────────')
console.log(`address:     ${account.address}`)
console.log(`private key: ${privateKey}`)
console.log('─────────────────────────────────────────')
console.log('add to .env:')
console.log(`DEPLOYER_PRIVATE_KEY=${privateKey}`)
console.log('')
console.log('WARNING: never commit private key to git')
console.log('fund this address with ETH on Base before deploying')
