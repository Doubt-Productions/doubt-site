import Link from 'next/link';
import { links } from '@/lib/links';
import { Wordmark } from './logo';
import { ThemeToggle } from './theme-toggle';

const nav = [
  { label: 'Features', href: '/#features', internal: true },
  { label: 'Premium', href: '/premium', internal: true },
  { label: 'Docs', href: links.docs },
  { label: 'Dashboard', href: links.dashboard },
  { label: 'Support', href: '/support', internal: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) =>
            item.internal ? (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-muted transition hover:text-fg"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-muted transition hover:text-fg"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="/invite" className="btn btn-primary !min-h-10 !px-4 !text-sm">
            Add to Discord
          </a>
        </div>
      </div>
    </header>
  );
}
