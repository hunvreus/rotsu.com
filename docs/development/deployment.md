# Deployment

The site is a static Astro build deployed with Cloudflare Workers Static Assets. There is no Worker entry point because the site does not need server-side code.

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

The custom domain is intentionally not declared in `wrangler.jsonc`; attach `rotsu.com` to the Worker in Cloudflare after confirming the account and DNS zone.

## Roll back

List recent versions and roll back to a known-good deployment:

```sh
npx wrangler versions list
npx wrangler rollback <version-id>
```
