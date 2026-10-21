import type { ReactNode } from 'react';
import { Embed, Fields, Mention, MockButton, MockMessage } from './discord-mock';

type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  body: ReactNode;
  commands: string[];
  mock: ReactNode;
  mockLabel: string;
};

const features: Feature[] = [
  {
    id: 'moderation',
    eyebrow: 'Moderation',
    title: 'Every action becomes a case',
    body: 'Warnings, timeouts, kicks and bans get a numbered case per server, with the reason, the moderator and an optional DM to the member. Temporary bans lift on their own, and bans done in Discord itself are recorded too. Edit a reason later, or pull up a member’s history from the Cases menu.',
    commands: ['/warn', '/timeout', '/untimeout', '/kick', '/ban', '/unban', '/case', 'Cases menu'],
    mockLabel: 'A case card for a one hour timeout',
    mock: (
      <MockMessage label="A case card for a one hour timeout">
        <Embed color="#e5a00d" title="⏳ Case #12 · Timeout">
          <Fields
            items={[
              ['Member', <Mention key="m">@member</Mention>],
              ['Moderator', <Mention key="mod">@moderator</Mention>],
              ['Duration', '1 hour'],
              ['Ends', 'in 59 minutes'],
            ]}
          />
          <div>
            <div className="text-xs font-bold">Reason</div>
            <div className="text-muted">Spamming links in #general</div>
          </div>
        </Embed>
      </MockMessage>
    ),
  },
  {
    id: 'automod',
    eyebrow: 'AutoMod',
    title: 'Discord’s AutoMod, set up for you',
    body: 'Turn on spam, invite, mention and word filters from one command. Doubt manages Discord’s own AutoMod rules, so they keep working even when the bot is offline, and logs every block or timeout to a channel you choose. Only the matched keyword is kept, never the message.',
    commands: [
      '/automod status',
      '/automod spam',
      '/automod invites',
      '/automod mentions',
      '/automod words',
      '/automod log',
    ],
    mockLabel: 'An AutoMod log entry for a blocked invite link',
    mock: (
      <MockMessage label="An AutoMod log entry for a blocked invite link">
        <Embed color="#da373c" title="🛡️ AutoMod blocked a message">
          <Fields
            items={[
              ['Rule', 'Doubt · Invites'],
              ['Member', <Mention key="m">@member</Mention>],
              ['Channel', <Mention key="c">#general</Mention>],
              [
                'Matched',
                <code key="k" className="font-mono">
                  discord.gg/…
                </code>,
              ],
            ]}
          />
        </Embed>
      </MockMessage>
    ),
  },
  {
    id: 'tickets',
    eyebrow: 'Tickets',
    title: 'Support tickets with transcripts',
    body: 'Post a panel and members open a private, numbered ticket for support, a report or an appeal. Staff claim it, add people and close it. On close, Doubt saves an HTML transcript to your ticket log and the dashboard.',
    commands: ['/setup', '/ticket add', '/ticket remove', '/ticket close'],
    mockLabel: 'A ticket panel with a transcript file',
    mock: (
      <MockMessage label="A ticket panel with a transcript file">
        <Embed color="#b44fd0" title="🎫 Need a hand?">
          <p className="text-muted">
            Pick a topic and a private channel opens for you and our staff.
          </p>
        </Embed>
        <div className="flex flex-wrap gap-2">
          <MockButton tone="brand">💬 General support</MockButton>
          <MockButton>🚩 Report a member</MockButton>
          <MockButton>⚖️ Appeal</MockButton>
        </div>
        <div
          className="flex max-w-xs items-center gap-3 rounded-md border border-line p-2.5"
          style={{ background: 'var(--discord-embed)' }}
        >
          <span className="grid size-9 place-items-center rounded bg-surface-2 font-mono text-[10px] font-bold text-tint-2">
            HTML
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[13px] font-semibold text-[#00a8fc]">
              ticket-0007.html
            </span>
            <span className="block text-xs text-muted">Transcript · 23 messages</span>
          </span>
        </div>
      </MockMessage>
    ),
  },
  {
    id: 'welcome',
    eyebrow: 'Welcome',
    title: 'A warm welcome and the right roles',
    body: 'Greet new members with your own message in the channel you pick, point them at the rules, and give members and bots their roles automatically. Everything is set in one place with /setup or in the dashboard.',
    commands: ['/setup'],
    mockLabel: 'A welcome message for a new member',
    mock: (
      <MockMessage label="A welcome message for a new member">
        <p>
          Welcome to the server, <Mention>@newcomer</Mention>! 👋 Have a look at{' '}
          <Mention>#rules</Mention> and say hi.
        </p>
        <p className="text-xs text-muted">
          Roles given: <span className="font-semibold text-fg">Member</span>
        </p>
      </MockMessage>
    ),
  },
  {
    id: 'levelling',
    eyebrow: 'Levelling',
    title: 'Levels, rank cards and rewards',
    body: 'Members earn XP for chatting, at most once a minute so spam doesn’t pay. Level-ups are announced where they chat, in one channel or not at all, and reward roles are handed out at the levels you choose.',
    commands: ['/rank info', '/rank leaderboard', '/rank reward add', '/rank reward remove'],
    mockLabel: 'A rank card at level 12',
    mock: (
      <MockMessage label="A rank card at level 12">
        <div
          className="max-w-md rounded-xl border border-line p-4"
          style={{
            background:
              'radial-gradient(ellipse 60% 90% at 90% 20%, rgba(143,22,171,0.35), transparent 70%), var(--discord-embed)',
          }}
        >
          <div className="flex items-center gap-3">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-tint-1 to-magenta font-display text-lg font-bold text-white">
              M
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="truncate font-semibold">member</span>
                <span className="font-display text-sm">
                  <span className="text-muted">LEVEL</span>{' '}
                  <span className="text-xl font-extrabold">12</span>
                </span>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-violet to-magenta" />
              </div>
              <div className="mt-1.5 flex justify-between text-xs text-muted">
                <span>Rank #4</span>
                <span className="font-mono">1,342 / 2,100 XP</span>
              </div>
            </div>
          </div>
        </div>
      </MockMessage>
    ),
  },
  {
    id: 'economy',
    eyebrow: 'Economy',
    title: 'A small economy for every server',
    body: 'Each server has its own coins. Beg for a few, keep them in your wallet or move them to the bank, and vote for Doubt on top.gg for a bonus. Open or close your account whenever you like.',
    commands: ['/bal', '/beg', '/deposit', '/withdraw', '/economy'],
    mockLabel: 'A balance with wallet and bank',
    mock: (
      <MockMessage label="A balance with wallet and bank">
        <Embed color="#3ba55d" title="member’s balance">
          <Fields
            items={[
              ['Wallet', '$420'],
              ['Bank', '$1,250'],
              ['Total', '$1,670'],
            ]}
          />
        </Embed>
      </MockMessage>
    ),
  },
  {
    id: 'profiles',
    eyebrow: 'Profiles and AFK',
    title: 'Profiles with badges, and AFK',
    body: 'Every member has a profile that shows the badges the Doubt team gave them. Going away? Set an AFK message and Doubt lets people who mention you know, then welcomes you back when you return.',
    commands: ['/user profile', '/afk set', '/afk remove', 'Profile menu'],
    mockLabel: 'An AFK notice in reply to a mention',
    mock: (
      <MockMessage label="An AFK notice in reply to a mention">
        <Embed color="#b44fd0" title="member’s profile">
          <div className="flex flex-wrap gap-1.5">
            {['🛡️ Bot Staff', '🏅 Example badge'].map((b) => (
              <span
                key={b}
                className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-xs font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </Embed>
        <Embed color="#8f16ab" title="👋 member is AFK!">
          <p className="text-muted">Grabbing lunch, back in an hour.</p>
        </Embed>
      </MockMessage>
    ),
  },
  {
    id: 'utility',
    eyebrow: 'Info and utility',
    title: 'The everyday tools',
    body: 'Look up a server or a member, check Doubt’s status, find any command with /help, and build a clean embed in a form, preview it and post it without pinging anyone.',
    commands: [
      '/serverinfo',
      '/user info',
      '/user avatar',
      '/botinfo',
      '/embedcreator',
      '/help',
      '/ping',
    ],
    mockLabel: 'A server info card',
    mock: (
      <MockMessage label="A server info card">
        <Embed color="#b44fd0" title="Your Server">
          <Fields
            items={[
              ['Owner', <Mention key="o">@owner</Mention>],
              ['Created', '3 years ago'],
              ['Channels', '24 text · 5 voice'],
              ['Roles', '18'],
            ]}
          />
        </Embed>
      </MockMessage>
    ),
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="mx-auto max-w-6xl px-4 pt-6 pb-20 sm:px-6 sm:py-28"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-bold tracking-[0.16em] text-tint-1 uppercase">What Doubt does</p>
        <h2 id="features-title" className="mt-3 text-3xl font-extrabold sm:text-4xl">
          One bot for the whole server
        </h2>
        <p className="mt-4 text-lg text-muted">
          Slash commands for everything, settings in one place, and a dashboard when you would
          rather click.
        </p>
      </div>

      <ol className="mt-16 space-y-20 sm:space-y-28">
        {features.map((f, i) => (
          <li
            key={f.id}
            id={f.id}
            className="grid scroll-mt-24 items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className={i % 2 === 1 ? 'md:order-2' : undefined}>
              <p className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-muted uppercase">
                <span className="font-mono text-tint-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                {f.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{f.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{f.body}</p>
              <ul aria-label="Commands" className="mt-5 flex flex-wrap gap-2">
                {f.commands.map((c) => (
                  <li key={c} className="kbd">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className={i % 2 === 1 ? 'md:order-1' : undefined}>{f.mock}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
