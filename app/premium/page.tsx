import type { Metadata } from 'next';
import Link from 'next/link';
import { type Perk, serverPerks, userPerks } from '@/lib/premium';

export const metadata: Metadata = {
  title: 'Doubt Premium',
  description:
    'What Doubt Premium unlocks for your server and for you, bought through Discord’s own shop.',
  alternates: { canonical: '/premium' },
};

function PerkGrid({ perks }: { perks: Perk[] }) {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {perks.map((p) => (
        <li key={p.name} className="card flex flex-col gap-2 p-5">
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <span aria-hidden="true">{p.emoji}</span>
            {p.name}
          </h3>
          <p className="leading-relaxed text-muted">{p.body}</p>
          <p className="mt-auto pt-1 font-mono text-xs text-tint-1">{p.how}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Premium() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-[65ch]">
        <p className="text-xs font-bold tracking-[0.16em] text-tint-1 uppercase">Premium</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          Doubt <span className="grad-text">Premium</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Premium supports Doubt and unlocks extras. There are two subscriptions: one an admin buys
          for a whole server, and one you buy for yourself. Run <code>/premium</code> in Discord to
          see both and subscribe. Discord handles the payment, renewal and cancelling.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Moderation, AutoMod, reports and tickets stay free for every server. Settings you make
          with Premium are kept if it ends, and come back when you subscribe again.
        </p>
      </header>

      <section aria-labelledby="server-perks" className="mt-12">
        <h2 id="server-perks" className="text-2xl font-extrabold sm:text-3xl">
          For your server
        </h2>
        <p className="mt-2 text-muted">Bought by an admin, for everyone in that server.</p>
        <PerkGrid perks={serverPerks} />
      </section>

      <section aria-labelledby="user-perks" className="mt-14">
        <h2 id="user-perks" className="text-2xl font-extrabold sm:text-3xl">
          For you
        </h2>
        <p className="mt-2 text-muted">Yours in every server where you use Doubt.</p>
        <PerkGrid perks={userPerks} />
      </section>

      <p className="mt-14 text-sm text-muted">
        See the{' '}
        <Link href="/terms#premium" className="underline underline-offset-4 hover:text-tint-2">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-tint-2">
          Privacy Policy
        </Link>{' '}
        for how Premium works.
      </p>
    </article>
  );
}
