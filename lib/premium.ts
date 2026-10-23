/**
 * Doubt Premium perks as the site shows them. Keep in step with doubt-bot `src/premium/perks.ts`
 * (same names and order); the wording here is longer.
 */
export type Perk = { name: string; emoji: string; body: string; how: string };

export const serverPerks: Perk[] = [
  {
    name: 'Custom bot look',
    emoji: '🎨',
    body: 'Give Doubt its own avatar, banner and About Me in your server. Other servers keep the normal look.',
    how: '/botlook or the dashboard',
  },
  {
    name: 'Custom ticket topics',
    emoji: '🎫',
    body: 'Swap the three standard ticket topics for up to 10 of your own, each with a name, emoji, description and its own staff role.',
    how: '/setup → Tickets or the dashboard',
  },
  {
    name: 'XP boosts',
    emoji: '⚡',
    body: 'Give roles, channels and categories XP multipliers up to 3×, and switch XP off where chatting shouldn’t count.',
    how: '/setup → Levelling or the dashboard',
  },
  {
    name: 'More level rewards',
    emoji: '🏅',
    body: 'Hand out up to 100 level reward roles instead of 25.',
    how: '/rank reward or the dashboard',
  },
  {
    name: 'Scheduled messages',
    emoji: '🗓️',
    body: 'Post embeds made with the embed creator once, daily, weekly or every few hours. Up to 25 per server, and they never ping anyone.',
    how: '/schedule or the dashboard',
  },
  {
    name: 'Dashboard stats',
    emoji: '📈',
    body: 'See ticket and moderation trends over 30 or 90 days, your busiest moderators, and download every case as a CSV file.',
    how: 'The dashboard',
  },
  {
    name: 'Welcome image cards',
    emoji: '🖼️',
    body: 'Greet new members with a picture card showing their avatar, name and member number.',
    how: '/setup → Welcome or the dashboard',
  },
];

export const userPerks: Perk[] = [
  {
    name: 'Custom rank card',
    emoji: '🃏',
    body: 'Pick one of eight backgrounds and your own accent and bar colours. Your rank card looks like this in every server.',
    how: '/rank style',
  },
  {
    name: 'Profile flair',
    emoji: '✨',
    body: 'Add an accent colour and a one-line bio to your profile in /user info.',
    how: '/profile flair',
  },
  {
    name: 'Premium badge',
    emoji: '💎',
    body: 'Show a Premium badge on your Doubt profile.',
    how: 'Automatic',
  },
  {
    name: 'Longer AFK messages',
    emoji: '💤',
    body: 'Write AFK messages up to 500 characters instead of 200.',
    how: '/afk',
  },
];
