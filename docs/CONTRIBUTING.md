# Contributing

## setup

```bash
git clone https://github.com/your-org/finderos
cd finderos
cp .env.example .env
npm install
npm run dev
```

## branches

- `main` — production
- `dev` — staging
- `feat/*` — features
- `fix/*` — bugfixes

## commit style

```
feat: add wallet classifier
fix: scanner crash on empty block
chore: update dependencies
```

## pull requests

Open a PR to `dev`. CI runs lint + tests. One approval required to merge.
