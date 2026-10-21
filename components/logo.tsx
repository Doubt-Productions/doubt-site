import Link from 'next/link';

export function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-lg" aria-label="Doubt home">
      {/* biome-ignore lint/performance/noImgElement: static export, the SVG needs no optimisation */}
      <img src="/brand/doubt-logo.svg" alt="" width={36} height={36} className="size-9" />
      <span className="grad-text font-display text-xl font-extrabold tracking-tight">Doubt</span>
    </Link>
  );
}
