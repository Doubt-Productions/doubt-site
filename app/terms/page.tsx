import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, type LegalSection } from '@/components/legal-page';
import { links } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The rules for using the Doubt Discord bot, its dashboard and this website.',
  alternates: { canonical: '/terms' },
};

const Email = () => <a href={`mailto:${links.email}`}>{links.email}</a>;

const sections: LegalSection[] = [
  {
    id: 'agreement',
    title: 'Agreement',
    body: (
      <p>
        These terms apply to the Doubt Discord bot, the dashboard at{' '}
        <a href={links.dashboard}>dash.doubtbot.eu</a> and this website, together “Doubt”. Doubt is
        run by <strong>Doubt Productions</strong>. By adding Doubt to a server or using it, you
        agree to these terms. If you don’t agree, please don’t use Doubt.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Using Doubt',
    body: (
      <>
        <p>When you use Doubt, you agree to:</p>
        <ul>
          <li>
            Follow Discord’s <a href="https://discord.com/terms">Terms of Service</a> and{' '}
            <a href="https://discord.com/guidelines">Community Guidelines</a>
          </li>
          <li>Not use Doubt for anything illegal, or to harass, threaten or spam people</li>
          <li>
            Not try to break, overload or get around Doubt’s limits and permission checks, or to
            reach data of servers you don’t manage
          </li>
          <li>Not automate Doubt’s commands or the dashboard with scripts or self-bots</li>
        </ul>
      </>
    ),
  },
  {
    id: 'server-admins',
    title: 'If you run a server',
    body: (
      <>
        <p>
          You decide how Doubt is used in your server and you are responsible for that, including
          the messages, roles and channels you set and the moderation actions your staff take.
        </p>
        <ul>
          <li>
            Give Doubt only the permissions it needs, and keep the roles it hands out free of
            moderator powers. Doubt refuses roles that are unsafe to give.
          </li>
          <li>
            Let your members know that ticket conversations may be saved as transcripts and seen by
            your staff.
          </li>
          <li>
            Use cases, transcripts and AutoMod logs only to moderate and support your own server.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'economy',
    title: 'Coins, levels and badges',
    body: (
      <p>
        Coins, XP, levels and badges are for fun inside Discord. They have no money value, cannot be
        bought, sold or exchanged, and we may adjust or reset them, for example to fix a bug or undo
        abuse.
      </p>
    ),
  },
  {
    id: 'dashboard',
    title: 'The dashboard',
    body: (
      <p>
        You sign in to the dashboard with your Discord account. What you can see and change there
        follows your permissions in each server, checked again on every request. Keep your Discord
        account secure: actions taken while you are signed in count as yours.
      </p>
    ),
  },
  {
    id: 'availability',
    title: 'Availability and changes',
    body: (
      <p>
        We work to keep Doubt running well, but it is provided “as is” and “as available”. We may
        change, add or remove features, and Doubt may be offline at times. We do not promise any
        particular uptime.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Liability',
    body: (
      <p>
        As far as the law allows, Doubt Productions is not liable for indirect or consequential
        loss, or for loss of data, caused by using or not being able to use Doubt, including actions
        Doubt takes because of how a server set it up. Nothing in these terms limits liability that
        cannot be limited by law.
      </p>
    ),
  },
  {
    id: 'ending',
    title: 'Suspension and ending',
    body: (
      <p>
        You can stop using Doubt at any time; a server admin can remove it by kicking the bot. We
        may block a user or server from Doubt, or remove Doubt from a server, if these terms are
        broken or to protect Doubt and its users. To have a server’s data deleted after removing
        Doubt, email <Email />.
      </p>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy',
    body: (
      <p>
        How Doubt handles data is described in the <Link href="/privacy">Privacy Policy</Link>,
        which is part of these terms.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms. The new version is posted here with a new date at the top. Using
        Doubt after a change means you accept the new terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions about these terms? Email <Email /> or ask in the{' '}
        <a href="/support">support server</a>.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={
        <p>
          The rules for using Doubt, written to be read. In short: follow Discord’s rules, don’t
          abuse the bot, and if you run a server, you are in charge of how Doubt is set up there.
        </p>
      }
      sections={sections}
    />
  );
}
