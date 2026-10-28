# doubt-site

Website for the Doubt Discord bot: doubtbot.eu.

Next.js 16 (App Router), prerendered at build time, with Tailwind 4 and Biome. Deployed on
Vercel as the `doubt-site` project.

## Develop

```sh
yarn install
yarn dev          # http://localhost:3000
yarn biome:ci     # lint and format check
yarn typecheck
yarn build        # production build in .next/
```

## Links and the invite

All outside links live in `lib/links.ts`. The invite uses the production application ID
(`941052587837378570`) unless `NEXT_PUBLIC_DISCORD_CLIENT_ID` is set (see `.env.example`). The
permission integer is copied from doubt-bot `src/utils/permissions.ts`.

`/invite` and `/support` are small static pages (meta refresh, script and a visible link). On
Vercel, `vercel.json` redirects both paths permanently before those pages are served; a
production build fails if its targets drift from `lib/links.ts`.

## Live status

The home page shows the bot's status from the public status page (`links.status` in
`lib/links.ts`). `lib/status.ts` reads the monitor's RSS feed (incidents and maintenance) and its
status and uptime badges on the server. The home page is regenerated at most every 5 minutes
(`revalidate` in `app/page.tsx`), so visitors never contact the status page themselves. If it can't
be reached within 4 seconds, the pill says "Live status unavailable" and the rest of the page is
unaffected.
