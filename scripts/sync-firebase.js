#!/usr/bin/env node
/**
 * FinderOS firebase sync
 * Exports community homescreen apps from Firebase to local JSON
 * Used for backup and contract migration
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

require('dotenv').config()

const DB_URL = process.env.FIREBASE_DB_URL
if (!DB_URL) {
  console.error('FIREBASE_DB_URL not set')
  process.exit(1)
}

const url = `${DB_URL}/apps.json`
console.log(`syncing from ${DB_URL}...`)

https.get(url, (res) => {
  let data = ''
  res.on('data', (chunk) => (data += chunk))
  res.on('end', () => {
    const apps = JSON.parse(data)
    const count = apps ? Object.keys(apps).length : 0
    const outPath = path.join(__dirname, '../data/apps-backup.json')

    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, JSON.stringify(apps, null, 2))

    console.log(`synced ${count} apps → data/apps-backup.json`)
    console.log('still finding.')
  })
}).on('error', (err) => {
  console.error('sync failed:', err.message)
  process.exit(1)
})
