export const logger = {
  info: (msg: string, meta?: object) => console.log(`[INFO] ${msg}`, meta || ''),
  debug: (msg: string, meta?: object) => process.env.DEBUG && console.log(`[DEBUG] ${msg}`, meta || ''),
  error: (msg: string, meta?: object) => console.error(`[ERROR] ${msg}`, meta || ''),
  warn: (msg: string, meta?: object) => console.warn(`[WARN] ${msg}`, meta || ''),
}
