import { Features } from '@/components/features';
import { HeroArt } from '@/components/hero-art';
import { StatusPill } from '@/components/status-pill';
import { links } from '@/lib/links';

// Regenerate the page at most every 5 minutes so the status pill stays fresh (lib/status.ts).
export const revalidate = 300;

const steps = [
  {
    title: 'Invite Doubt',
    body: 'Add the bot to a server where you have Manage Server.',
    code: 'Add to Discord',
  },
  {
    title: 'Run /setup',
    body: 'Pick channels and roles for welcome, tickets, moderation and levelling.',
    code: '/setup',
  },
  {
    title: 'Fine-tune on the dashboard',
    body: 'Sign in with Discord to change settings and review cases, tickets and levels.',
    code: 'dash.doubtbot.eu',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 50% 70% at 78% 40%, var(--halo), transparent 70%), linear-gradient(180deg, var(--bg-deep), var(--bg))',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-20 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pt-24 md:pb-28">
          <div>
            <h1 className="text-[2.6rem] leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl">
              Your server, <span className="grad-text">without a doubt.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Moderation with cases, AutoMod, tickets, welcome messages, levels and an economy in
              one Discord bot, with a dashboard to manage it all.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/invite" className="btn btn-primary !min-h-12 !px-6 !text-base">
                <DiscordGlyph />
                Add to Discord
              </a>
              <a href={links.dashboard} className="btn btn-ghost !min-h-12 !px-6 !text-base">
                Open dashboard
              </a>
            </div>
            <p className="mt-5 text-sm text-muted">
              Questions?{' '}
              <a
                href="/support"
                className="font-semibold text-fg underline decoration-line-strong underline-offset-4 hover:decoration-tint-1"
              >
                Join the support server
              </a>
              .
            </p>
            <StatusPill />
          </div>
          <div className="order-first md:order-none">
            <div className="mx-auto w-56 sm:w-72 md:w-full">
              <HeroArt />
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section aria-labelledby="setup-title" className="border-y border-line bg-bg-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 id="setup-title" className="text-2xl font-extrabold sm:text-3xl">
            Set up in a minute
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="card card-hover relative p-6">
                <span className="grad-text font-display text-4xl font-extrabold">{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                <span className="kbd mt-4 inline-block">{s.code}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div
          className="card relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16"
          style={{
            background:
              'radial-gradient(ellipse 70% 100% at 50% 0%, var(--halo), transparent 70%), var(--surface)',
          }}
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready when <span className="grad-text">your server is.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Add Doubt, run <span className="kbd">/setup</span> and you are good to go. Read the docs
            any time you want to dig deeper.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/invite" className="btn btn-primary !min-h-12 !px-6 !text-base">
              <DiscordGlyph />
              Add to Discord
            </a>
            <a href={links.docs} className="btn btn-ghost !min-h-12 !px-6 !text-base">
              Read the docs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function DiscordGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.3a18.4 18.4 0 0 0-5.6 0L8.6 3a19.7 19.7 0 0 0-4.9 1.5C.6 9.1-.3 13.6.1 18.1a19.9 19.9 0 0 0 6 3l1.3-2a12.9 12.9 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4c-.7.4-1.3.7-2 1l1.3 2a19.8 19.8 0 0 0 6-3c.5-5.2-.9-9.7-3.6-13.7ZM8 15.3c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.5 8 10.5s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z" />
    </svg>
  );
}
