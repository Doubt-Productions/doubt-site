import type { ReactNode } from 'react';
import { LEGAL_UPDATED } from '@/lib/legal';

export type LegalSection = { id: string; title: string; body: ReactNode };

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-[65ch]">
        <p className="text-xs font-bold tracking-[0.16em] text-tint-1 uppercase">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-muted">
          Last updated <time dateTime="2026-10-21">{LEGAL_UPDATED}</time>
        </p>
        <div className="prose-legal mt-6 text-muted">{intro}</div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,65ch)_16rem] lg:justify-between">
        <nav aria-label="Contents" className="card h-fit p-5 lg:sticky lg:top-24 lg:order-2">
          <h2 className="font-sans text-xs font-bold tracking-[0.14em] text-muted uppercase">
            Contents
          </h2>
          <ol className="mt-3 space-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.id} className="flex gap-2">
                <span className="w-5 shrink-0 pt-px font-mono text-xs leading-5 text-tint-1">
                  {i + 1}
                </span>
                <a href={`#${s.id}`} className="leading-5 hover:text-tint-2">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="prose-legal lg:order-1">
          {sections.map((s, i) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id}>
                <span className="mr-2 font-mono text-base text-tint-1">{i + 1}.</span>
                {s.title}
              </h2>
              {s.body}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
