#!/bin/bash
set -e

source .env

echo "FinderOS deploying..."
echo "→ $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH"

rsync -avz --delete \
  --exclude '.DS_Store' \
  --exclude 'node_modules' \
  apps/web/public/ \
  "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/"

echo "deploy complete. still finding."
