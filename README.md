# Spiceetech Website

Marketing site for [Spiceetech](https://spiceetech.co.za) — an indie studio building
mobile apps, tools, and SaaS. Built with React, Vite, and TypeScript.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deployment (GitHub Pages + custom domain)

This repo deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`)
whenever `main` is pushed.

1. Create a GitHub repo and push this project to it.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes `dist/` to Pages.
4. `public/CNAME` already contains `spiceetech.co.za`, so GitHub Pages will serve
   the site on that domain once DNS is pointed at it (see below).

### Pointing spiceetech.co.za (GoDaddy) at GitHub Pages

In GoDaddy's DNS management for `spiceetech.co.za`, add:

| Type  | Name | Value                  |
| ----- | ---- | ----------------------- |
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | `<your-username>.github.io` |

Then in the repo's **Settings → Pages**, set the custom domain to
`spiceetech.co.za` and enable **Enforce HTTPS** once it becomes available
(can take a few minutes to a few hours after DNS propagates).

Remove any existing GoDaddy "parked domain" A records or forwarding rules first,
since they'll conflict with the records above.
