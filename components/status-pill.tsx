import { links } from '@/lib/links';
import { type BotStatus, getBotStatus, type StatusState } from '@/lib/status';

const states: Record<StatusState, { label: string; color: string; pulse: boolean }> = {
  up: { label: 'Doubt is online', color: '#5cdd8b', pulse: true },
  degraded: { label: 'Doubt is running slowly', color: '#f8a306', pulse: true },
  down: { label: 'Doubt is having an outage', color: '#dc3545', pulse: true },
  maintenance: { label: 'Doubt is under maintenance', color: '#4c7dff', pulse: false },
  unknown: { label: 'Live status unavailable', color: 'var(--muted)', pulse: false },
};

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Amsterdam',
  timeZoneName: 'short',
});

/** Live bot status from the public status page, fetched on the server (see lib/status.ts). */
export async function StatusPill() {
  return <StatusView status={await getBotStatus()} />;
}

export function StatusView({ status }: { status: BotStatus }) {
  const state = states[status.state];
  return (
    <div className="mt-8 space-y-2">
      <a
        href={links.status}
        className="group inline-flex min-h-10 max-w-full items-center gap-2.5 rounded-full border border-line-strong bg-surface py-1.5 pr-3 pl-3.5 text-sm transition hover:border-tint-1 hover:shadow-[0_0_0_4px_var(--glow)]"
      >
        <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
          {state.pulse && (
            <span
              className="absolute inset-0 animate-ping rounded-full opacity-60 motion-reduce:hidden"
              style={{ background: state.color }}
            />
          )}
          <span className="relative size-2.5 rounded-full" style={{ background: state.color }} />
        </span>
        <span className="font-semibold text-fg">{state.label}</span>
        {status.uptime90d && (
          <span className="text-muted">
            · {status.uptime90d} uptime<span className="hidden sm:inline"> over 90 days</span>
          </span>
        )}
        <span
          className="text-muted transition group-hover:translate-x-0.5 group-hover:text-tint-2"
          aria-hidden="true"
        >
          →
        </span>
        <span className="sr-only">(open the status page)</span>
      </a>
      {status.notices.length > 0 && (
        <ul className="space-y-1 text-sm text-muted">
          {status.notices.map((notice) => (
            <li key={`${notice.date}-${notice.title}`}>
              <span className="font-semibold text-fg">
                {notice.link ? (
                  <a
                    href={notice.link}
                    className="underline decoration-line-strong underline-offset-4 hover:decoration-tint-1"
                  >
                    {notice.title}
                  </a>
                ) : (
                  notice.title
                )}
              </span>
              {notice.date && (
                <>
                  {' '}
                  · <time dateTime={notice.date}>{dateFormat.format(new Date(notice.date))}</time>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
