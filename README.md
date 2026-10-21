# doubt-site

Website for the Doubt Discord bot: doubtbot.eu.

Next.js 16 (App Router) with a static export (`output: 'export'`), Tailwind 4 and Biome. Deployed on
Vercel as the `doubt-site` project.

## Develop

```sh
yarn install
yarn dev          # http://localhost:3000
yarn biome:ci     # lint and format check
yarn typecheck
yarn build        # writes the static site to out/
```

## Links and the invite

All outside links live in `lib/links.ts`. The invite uses the production application ID
(`941052587837378570`) unless `NEXT_PUBLIC_DISCORD_CLIENT_ID` is set (see `.env.example`). The
permission integer is copied from doubt-bot `src/utils/permissions.ts`.

`/invite` and `/support` are small static pages (meta refresh, script and a visible link). On
Vercel, `vercel.json` redirects both paths permanently before those pages are served; a
production build fails if its targets drift from `lib/links.ts`.
