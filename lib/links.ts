/**
 * Every outside link the site uses lives here, so there is one place to change them.
 *
 * The invite link is built at build time from NEXT_PUBLIC_DISCORD_CLIENT_ID, which defaults to the
 * production Doubt application. Set the variable only to point the invite at another application.
 */

/** Discord application (client) ID of the production Doubt bot. */
export const PRODUCTION_CLIENT_ID = '941052587837378570';

/**
 * Bot permissions requested on invite. Single source of truth: BOT_INVITE_PERMISSIONS_INTEGER in
 * doubt-bot `src/utils/permissions.ts`. Keep the two in sync.
 */
export const INVITE_PERMISSIONS = '1099914407094';

function resolveClientId(): string {
  const fromEnv = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID?.trim();
  if (!fromEnv) return PRODUCTION_CLIENT_ID;
  if (!/^\d{17,20}$/.test(fromEnv)) {
    throw new Error(
      `NEXT_PUBLIC_DISCORD_CLIENT_ID must be a Discord application ID (17 to 20 digits), got "${fromEnv}". Unset it to use the production application.`
    );
  }
  return fromEnv;
}

export const CLIENT_ID = resolveClientId();

export const SITE_URL = 'https://doubtbot.eu';

export const links = {
  invite: `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&permissions=${INVITE_PERMISSIONS}&scope=bot%20applications.commands`,
  support: 'https://discord.gg/h6Ybsjg6NG',
  dashboard: 'https://dash.doubtbot.eu',
  docs: 'https://docs.doubtbot.eu',
  email: 'contact@doubtbot.eu',
} as const;
