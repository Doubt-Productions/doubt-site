import type { ReactNode } from 'react';

/**
 * Illustrative HTML/CSS mocks of Doubt's Discord messages. The people in them are placeholders,
 * not screenshots of real members.
 */

export function MockMessage({ children, label }: { children: ReactNode; label: string }) {
  return (
    <figure
      className="card w-full overflow-hidden p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] sm:p-5"
      style={{ background: 'var(--discord-bg)' }}
    >
      <figcaption className="sr-only">{label}</figcaption>
      <div className="flex gap-3" aria-hidden="true">
        {/* biome-ignore lint/performance/noImgElement: decorative, static export */}
        <img
          src="/brand/doubt-app-icon.svg"
          alt=""
          width={40}
          height={40}
          className="size-10 shrink-0 rounded-full"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold">Doubt</span>
            <span className="rounded bg-[#5865f2] px-1.5 py-px text-[10px] font-bold text-white">
              APP
            </span>
            <span className="text-xs text-muted">Today at 14:02</span>
          </div>
          <div className="mt-1.5 space-y-2 text-sm">{children}</div>
        </div>
      </div>
    </figure>
  );
}

export function Embed({
  color = '#b44fd0',
  title,
  children,
}: {
  color?: string;
  title?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div
      className="max-w-md rounded-md border-l-4 p-3 pr-4"
      style={{ borderLeftColor: color, background: 'var(--discord-embed)' }}
    >
      {title ? <div className="font-bold">{title}</div> : null}
      {children ? (
        <div className="mt-1.5 space-y-2 text-[13px] leading-relaxed">{children}</div>
      ) : null}
    </div>
  );
}

export function Fields({ items }: { items: [string, ReactNode][] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
      {items.map(([name, value]) => (
        <div key={name} className="min-w-0">
          <dt className="text-xs font-bold">{name}</dt>
          <dd className="truncate text-muted">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Mention({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-[#5865f2]/20 px-1 font-medium text-[#7984f5] light:text-[#4752c4]">
      {children}
    </span>
  );
}

export function MockButton({
  children,
  tone = 'grey',
}: {
  children: ReactNode;
  tone?: 'grey' | 'brand' | 'red' | 'green';
}) {
  const tones = {
    grey: 'bg-[#4e5058] text-white',
    brand: 'bg-[#5865f2] text-white',
    red: 'bg-[#da373c] text-white',
    green: 'bg-[#248046] text-white',
  };
  return (
    <span className={`inline-flex rounded px-3 py-1.5 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
