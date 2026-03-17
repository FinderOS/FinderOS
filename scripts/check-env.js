#!/usr/bin/env node
/**
 * FinderOS env checker
 * Validates required environment variables before startup
 */

const required = [
  'ANTHROPIC_API_KEY',
  'BASE_RPC_URL',
  'FINDER_CONTRACT_ADDRESS',
]

const optional = [
  'BASE_WS_URL',
  'FIREBASE_DB_URL',
  'DEPLOY_HOST',
  'API_PORT',
]

let ok = true

console.log('checking environment...\n')

for (const key of required) {
  if (!process.env[key]) {
    console.error(`  ✗ ${key} — missing (required)`)
    ok = false
  } else {
    console.log(`  ✓ ${key}`)
  }
}

for (const key of optional) {
  if (!process.env[key]) {
    console.log(`  · ${key} — not set (optional)`)
  } else {
    console.log(`  ✓ ${key}`)
  }
}

console.log()

if (!ok) {
  console.error('env check failed. check .env.example')
  process.exit(1)
}

console.log('env ok. still finding.')
