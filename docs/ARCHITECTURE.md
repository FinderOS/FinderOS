# FinderOS Architecture

## Overview

FinderOS is a monorepo containing the AI agent, onchain scanner, smart contracts, SDK, and web app.

```
finderos/
├── packages/
│   ├── agent/        — AI agent runtime (Anthropic)
│   ├── scanner/      — Base chain block scanner
│   ├── contracts/    — $FINDER ERC-20 + Homescreen registry
│   └── sdk/          — TypeScript SDK for integrations
├── apps/
│   ├── web/          — macOS desktop landing page
│   └── api/          — REST API (Express)
└── infra/            — nginx, docker, deploy scripts
```

## Agent

The FinderOS agent runs continuously. It watches the Base chain, posts observations to Twitter, and responds to user messages in character.

Built on Anthropic Claude. Voice: cold, minimal, no exclamation marks.

## Scanner

Watches every Base block. Classifies wallet addresses by device signature. Queues detected Apple device wallets for onboarding.

## Contracts

- `FinderToken.sol` — ERC-20, 1B supply, 0% tax
- `FinderHomescreen.sol` — on-chain app registry

## Data Flow

```
Base Chain
    │
    ▼
Scanner (watches blocks)
    │
    ▼
DeviceClassifier (iOS / macOS detection)
    │
    ▼
OnboardingQueue → FinderHomescreen contract
                → $FINDER transfer
```
