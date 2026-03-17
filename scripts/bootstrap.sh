#!/bin/bash
# FinderOS bootstrap — sets up dev environment from scratch
set -e

echo "FinderOS bootstrap starting..."

# check node
if ! command -v node &> /dev/null; then
  echo "node not found. install node >= 20"
  exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
  echo "node >= 20 required. found: $(node -v)"
  exit 1
fi

echo "node: $(node -v) ✓"

# install deps
echo "installing dependencies..."
npm install

# copy env
if [ ! -f .env ]; then
  cp .env.example .env
  echo ".env created from .env.example"
  echo "fill in ANTHROPIC_API_KEY and other values before running"
fi

# build all packages
echo "building packages..."
npm run build

echo ""
echo "FinderOS ready."
echo "run: npm run dev"
echo "still finding."
