# Deployment

The site is a static Astro build deployed with Cloudflare Workers Static Assets. A small Worker entry point canonicalizes the public URL: `www.rotsu.com` redirects to `https://rotsu.com`, and HTTP requests to the apex redirect to HTTPS while preserving the path and query string.

## Prerequisites

- Node.js 22 or newer
- A Cloudflare account with access to the intended domain
- Wrangler authenticated with `npx wrangler login`

No environment variables or secrets are required.

## Validate locally

```sh
npm install
npm run cf:dev
```

Wrangler serves the generated `dist/` directory using the production asset routing rules.

## Deploy

Check the upload without changing Cloudflare:

```sh
npm run deploy:dry-run
```

Deploy when ready:

```sh
npm run deploy
```

Both `rotsu.com` and `www.rotsu.com` are declared as Worker Custom Domains in `wrangler.jsonc`. Cloudflare provisions their DNS records and certificates during deployment.

## Roll back

List recent versions and roll back to a known-good deployment:

```sh
npx wrangler versions list
npx wrangler rollback <version-id>
```
