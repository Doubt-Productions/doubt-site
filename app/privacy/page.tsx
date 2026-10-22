import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, type LegalSection } from '@/components/legal-page';
import { links } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'What the Doubt Discord bot and its dashboard store, why, for how long, and how to have it deleted.',
  alternates: { canonical: '/privacy' },
};

const Email = () => <a href={`mailto:${links.email}`}>{links.email}</a>;

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          Doubt is a Discord bot operated by <strong>Doubt Productions</strong>. This policy covers
          the bot, the dashboard at <a href={links.dashboard}>dash.doubtbot.eu</a> and this website.
          Doubt Productions decides what data Doubt keeps and is responsible for it.
        </p>
        <p>
          For anything about your data, email <Email />.
        </p>
      </>
    ),
  },
  {
    id: 'server-data',
    title: 'What Doubt stores about a server',
    body: (
      <>
        <p>
          Doubt stores data per server (by its Discord server ID) so its features work there. All
          references to people and places are Discord IDs.
        </p>
        <ul>
          <li>
            <strong>Settings</strong> made with <code>/setup</code> or on the dashboard: ticket
            channel, category, staff role and log channel; mod log channel and whether members are
            told by DM; AutoMod log channel; welcome channel, welcome message, rules channel and the
            roles given to new members and bots; levelling on or off, where level-ups are announced
            and the level-up message; level reward roles.
          </li>
          <li>
            <strong>Moderation cases</strong>: the case number, the action (warn, timeout, kick,
            ban, unban), the member and the moderator, the reason, the duration and when it ends,
            whether the member was sent a DM, the case card posted in the mod log, and who last
            edited the reason and when.
          </li>
          <li>
            <strong>Tickets</strong>: the ticket number, who opened it, the topic and reason, the
            ticket channel, whether it is open, who claimed and closed it, the close reason and the
            times. Transcripts are covered in <a href="#transcripts">section 4</a>.
          </li>
          <li>
            <strong>AutoMod hits</strong>: when Discord’s AutoMod acts under a rule Doubt manages,
            the rule, the action, the member, the channel, the matched keyword and the time. The
            message itself is never stored.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'user-data',
    title: 'What Doubt stores about you',
    body: (
      <>
        <ul>
          <li>
            <strong>Your Discord user ID and username</strong>, saved when you use a command or
            button, or earn XP.
          </li>
          <li>
            <strong>Levels</strong>: your XP and level in each server where levelling is on. Doubt
            notes who sent a message and in which channel to hand out XP at most once a minute; it
            does not read or keep the text.
          </li>
          <li>
            <strong>Economy</strong>: your wallet and bank balance in each server where you have an
            account, and when you last used <code>/beg</code>.
          </li>
          <li>
            <strong>AFK</strong>: your AFK message and the nickname to restore, until you are back.
          </li>
          <li>
            <strong>Badges</strong> the Doubt team gave you, shown on your profile.
          </li>
          <li>
            <strong>top.gg votes</strong>: when you vote for Doubt on top.gg, top.gg sends us your
            user ID. We keep the time of the vote and the coins paid out, so a vote is never paid
            twice.
          </li>
          <li>
            <strong>Moderation and tickets</strong>: cases and tickets that involve you, as listed
            in <a href="#server-data">section 2</a>.
          </li>
        </ul>
        <p>
          Doubt does not keep a history of the commands you run, does not track your presence or
          activity, and does not build profiles for advertising. When a command fails, the error,
          the command and your user ID go to our private error log so we can fix it.
        </p>
      </>
    ),
  },
  {
    id: 'transcripts',
    title: 'Message content and ticket transcripts',
    body: (
      <>
        <p>
          Doubt reads message content for one feature only: ticket transcripts. A transcript is
          saved for every closed ticket. Message text is included only while Doubt has Discord’s
          approval to read message content; without it, a transcript holds authors, times, embeds
          and attachment names.
        </p>
        <ul>
          <li>
            <strong>What is saved</strong>: when a ticket closes, Doubt reads that ticket channel
            once and saves an HTML transcript with each message’s author (name, ID and avatar),
            time, text, embeds and attachment names.
          </li>
          <li>
            <strong>Where</strong>: private ticket channels only. Doubt does not read or keep
            messages anywhere else.
          </li>
          <li>
            <strong>Who can see it</strong>: the server’s staff, in the ticket log channel and on
            the dashboard. Staff of other servers cannot.
          </li>
          <li>
            <strong>How long</strong>: Doubt deletes a stored transcript automatically 30 days after
            it was saved, together with the copy it posted in the ticket log channel. A server admin
            can delete one sooner from the dashboard, and anyone can ask for one to be deleted by
            emailing <Email />.
          </li>
          <li>
            <strong>Never for AI or analytics</strong>: transcripts and message content are not used
            to train AI models, for analytics or for advertising.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'dashboard-site',
    title: 'The dashboard and this website',
    body: (
      <>
        <p>
          The dashboard signs you in with Discord and keeps a single signed session cookie so you
          stay signed in. It stores nothing else about you. What you change there is saved by the
          bot as described above, and every request is checked against your current permissions in
          that server.
        </p>
        <p>
          This website sets no cookies and runs no analytics or trackers. A theme choice you make is
          kept in your own browser only. Like any web host, our hosting provider handles request
          data such as IP addresses to serve and protect the site.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use it',
    body: (
      <>
        <ul>
          <li>To run Doubt’s features in the servers that added it.</li>
          <li>To let a server’s staff review cases, tickets, AutoMod hits and levels.</li>
          <li>To fix problems and keep Doubt secure and free of abuse.</li>
          <li>To answer you when you contact us.</li>
        </ul>
        <p>
          Doubt’s own staff can block a server or a user who misuses Doubt or breaks our{' '}
          <Link href="/terms">Terms of Service</Link>. For a block we store the server or user ID,
          the reason, which staff member made it and when, and we keep a log of these staff actions.
          Doubt’s staff get no access to a server’s settings, cases, tickets or transcripts unless
          they hold those permissions in that server themselves.
        </p>
        <p>
          To report misuse of Doubt, tell us in the <a href="/support">support server</a> or email{' '}
          <Email />.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    body: (
      <>
        <p>We do not sell your data and we do not share it for advertising. It is handled by:</p>
        <ul>
          <li>
            <strong>Discord</strong>, the platform Doubt runs on.
          </li>
          <li>
            <strong>Our service providers</strong>, who host the bot, the database, the dashboard
            and this website for us, and only process data on our behalf.
          </li>
          <li>
            <strong>top.gg</strong>, only for votes you choose to make there.
          </li>
          <li>
            <strong>Authorities</strong>, when the law requires it.
          </li>
        </ul>
        <p>Doubt’s bot, database and dashboard run on a privately run server.</p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: (
      <>
        <ul>
          <li>
            <strong>Ticket transcripts</strong>: 30 days after they are saved, or sooner as
            described in <a href="#transcripts">section 4</a>.
          </li>
          <li>
            <strong>AFK</strong>: until you are back or remove it with <code>/afk remove</code>.
          </li>
          <li>
            <strong>Economy account</strong>: until you close it with <code>/economy</code>.
          </li>
          <li>
            <strong>A server’s data</strong> (settings, cases, tickets, AutoMod hits, levels,
            economy accounts and AFK statuses): deleted automatically 30 days after Doubt is removed
            from the server. Adding Doubt back within those 30 days keeps it. A block and the staff
            log entry about it are kept.
          </li>
          <li>
            <strong>Everything else</strong>: as long as it is needed for the feature, or until a
            server’s staff, you or we delete it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: (
      <>
        <p>
          You can ask us for a copy of the data Doubt holds about you, to correct it, to delete it,
          or to restrict or object to how we use it. Email <Email /> from any address and include
          your Discord user ID. We may ask you to confirm the account is yours, and we answer within
          one month.
        </p>
        <p>
          Some records belong to a server’s moderation history, such as a case against you. We weigh
          deletion of those against that server’s legitimate need to keep them. If you are in the EU
          or UK, you can also complain to your data protection authority.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        Doubt is for people old enough to use Discord under Discord’s rules in their country. We do
        not knowingly collect data from anyone younger. If you think we have, email us and we will
        delete it.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        Access to the database and the bot’s dashboard API is limited and every dashboard request is
        signed and checked against live Discord permissions. No system is perfectly secure, but we
        take reasonable steps to protect your data.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        When this policy changes we update it here and change the date at the top. Big changes may
        also be announced in the <a href="/support">support server</a>. See also our{' '}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Doubt Productions, <Email />. You can also reach us in the{' '}
        <a href="/support">support server</a>, but please send data requests by email.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains what Doubt stores, why, for how long, and how to have it deleted. The
          short version: Doubt keeps what its features need, reads message text only for ticket
          transcripts, deletes those after 30 days, and never sells your data.
        </p>
      }
      sections={sections}
    />
  );
}
