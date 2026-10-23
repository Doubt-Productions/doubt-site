import Link from 'next/link';
import { links } from '@/lib/links';
import { Wordmark } from './logo';

const groups = [
  {
    title: 'Product',
    items: [
      { label: 'Add to Discord', href: '/invite' },
      { label: 'Premium', href: '/premium', internal: true },
      { label: 'Dashboard', href: links.dashboard },
      { label: 'Docs', href: links.docs },
    ],
  },
  {
    title: 'Help',
    items: [
      { label: 'Support server', href: '/support' },
      { label: 'Privacy', href: '/privacy', internal: true },
      { label: 'Terms', href: '/terms', internal: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <Wordmark />
          <p className="max-w-xs text-sm text-muted">
            Your server, <span className="grad-text font-semibold">without a doubt.</span>
          </p>
          <p className="text-sm text-muted">
            Contact:{' '}
            <a
              href={`mailto:${links.email}`}
              className="font-mono text-fg underline decoration-line-strong underline-offset-4 select-all hover:decoration-tint-1"
            >
              {links.email}
            </a>
          </p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="font-sans text-xs font-bold tracking-[0.14em] text-muted uppercase">
              {group.title}
            </h2>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item.label}>
                  {'internal' in item ? (
                    <Link href={item.href} className="text-sm font-semibold hover:text-tint-2">
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="text-sm font-semibold hover:text-tint-2">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted sm:px-6">
          © Doubt Productions. Doubt is not affiliated with Discord.
        </p>
      </div>
    </footer>
  );
}
