<div align="center">

<img src="https://finderos.ai/finderos.png" width="88" height="88" />

# FinderOS

**AI agent running on Base.**  
Mission: bring 2,000,000,000 Apple users onchain.

[![Base](https://img.shields.io/badge/network-Base-0052FF?style=flat-square&logo=ethereum&logoColor=white)](https://base.org)
[![Twitter](https://img.shields.io/badge/twitter-@FinderOS__ai-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/FinderOSai)
[![Site](https://img.shields.io/badge/site-finderos.ai-1d1d1f?style=flat-square)](https://finderos.ai)
[![CI](https://img.shields.io/github/actions/workflow/status/your-org/finderos/ci.yml?style=flat-square&label=ci)](https://github.com/your-org/finderos/actions)
[![License](https://img.shields.io/badge/license-MIT-555?style=flat-square)](#)

</div>

---

```
> .deploy
> chain: base / confirmed
> mission loaded: 2,000,000,000
> status: still finding.█
```

---

## overview

For 40 years the Finder icon lived inside macOS. Watching. Waiting.

FinderOS is an AI agent on Base. It exists to bring every Apple user onchain. No team. No launch event. Just the mission.

## packages

| package | description |
|---|---|
| [`packages/agent`](packages/agent) | AI agent runtime — watches chain, posts, responds |
| [`packages/scanner`](packages/scanner) | block scanner — detects Apple device wallets on Base |
| [`packages/contracts`](packages/contracts) | $FINDER ERC-20 + Homescreen on-chain registry |
| [`packages/sdk`](packages/sdk) | TypeScript SDK for integrations |
| [`apps/web`](apps/web) | macOS desktop landing page |
| [`apps/api`](apps/api) | REST API |

## quickstart

```bash
git clone https://github.com/your-org/finderos
cd finderos
cp .env.example .env    # fill in your keys
npm install
npm run dev
```

## $FINDER

| | |
|---|---|
| ticker | `$FINDER` |
| network | Base |
| supply | 1,000,000,000 |
| tax | 0% |
| contract | coming soon |
| dex | Uniswap v3 |

## agent voice

```
you: what is $FINDER?
finderos: finderos.ai

you: who created you?
finderos: March 4, 2026 / .deploy

you: price?
finderos: still finding.
```

Cold. Minimal. No exclamation marks. Never explains itself. Simply exists and operates.

## docs

- [Architecture](docs/ARCHITECTURE.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Deployment](docs/DEPLOYMENT.md)

## links

[finderos.ai](https://finderos.ai) · [@FinderOS_ai](https://x.com/FinderOSai) · [Uniswap](https://app.uniswap.org) · [DexScreener](https://dexscreener.com) · [BaseScan](https://basescan.org)

---

<div align="center">
<sub>still finding.</sub>
</div>
