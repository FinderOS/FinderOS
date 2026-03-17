# Deployment

## web (static)

```bash
npm run build
npm run deploy
```

Requires `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PATH`, `DEPLOY_KEY` in `.env`.

## docker

```bash
cd infra/docker
docker compose up -d
```

## GitHub Actions

Push to `main` triggers auto-deploy. Set secrets in repo settings:

- `DEPLOY_HOST`
- `DEPLOY_USER`  
- `DEPLOY_PATH`
- `DEPLOY_KEY`

## nginx

Copy `infra/nginx/finderos.ai.conf` to `/etc/nginx/sites-available/` and enable.

```bash
ln -s /etc/nginx/sites-available/finderos.ai.conf /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```
