import { readFileSync } from 'node:fs';
import type { NextConfig } from 'next';
import { links } from './lib/links';

// vercel.json redirects /invite and /support before the static files are served, so its targets
// must match lib/links.ts. A production build fails when they drift; other builds only warn.
const vercel = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8')) as {
  redirects: { source: string; destination: string }[];
};
for (const [source, expected] of [
  ['/invite', links.invite],
  ['/support', links.support],
] as const) {
  const actual = vercel.redirects.find((r) => r.source === source)?.destination;
  if (actual !== expected) {
    const message = `vercel.json redirect for ${source} is "${actual}" but lib/links.ts says "${expected}".`;
    if (process.env.VERCEL_ENV === 'production') throw new Error(message);
    console.warn(`Warning: ${message}`);
  }
}

// Static export: `next build` writes plain files to out/.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
