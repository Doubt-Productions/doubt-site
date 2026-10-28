/**
 * Live bot status for the home page, read from the public status page (Kener) on the server.
 *
 * Visitors never talk to the status page: the home page is regenerated at most every
 * STATUS_REVALIDATE_SECONDS on Vercel, and these fetches run during that regeneration. Every
 * request has a short timeout and every failure turns into `null` or an empty list, so an
 * unreachable status page shows "status unavailable" instead of breaking the page.
 */

import { links } from './links';

const pageUrl = new URL(links.status);
const STATUS_ORIGIN = pageUrl.origin;
const STATUS_MONITOR = pageUrl.pathname.split('/').filter(Boolean).at(-1);
const STATUS_FEED_URL = `${links.status}/rss.xml`;

/** How long a fetched status may be shown. app/page.tsx repeats it as `revalidate`. */
export const STATUS_REVALIDATE_SECONDS = 300;

/** Incidents and maintenance older than this are not shown on the home page. */
const NOTICE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

const FETCH_TIMEOUT_MS = 4000;

export type StatusState = 'up' | 'degraded' | 'down' | 'maintenance' | 'unknown';

export type StatusNotice = {
  title: string;
  link: string | null;
  date: string | null;
};

export type BotStatus = {
  state: StatusState;
  /** Uptime over the last 90 days in percent, as the status page reports it. */
  uptime90d: string | null;
  /** Incidents and maintenance from the RSS feed, newest first, at most a week old. */
  notices: StatusNotice[];
};

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate: STATUS_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

function decodeXml(value: string): string {
  return value
    .replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&')
    .trim();
}

function tag(xml: string, name: string): string | null {
  const match = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  return match ? decodeXml(match[1]) : null;
}

/** Reads the <item>s of the monitor's RSS feed (incidents and scheduled maintenance). */
export function parseFeed(xml: string, now = Date.now()): StatusNotice[] {
  const items = xml.match(/<item(?:\s[^>]*)?>[\s\S]*?<\/item>/g) ?? [];
  const notices: { notice: StatusNotice; time: number }[] = [];
  for (const item of items) {
    const title = tag(item, 'title');
    if (!title) continue;
    const pubDate = tag(item, 'pubDate');
    const time = pubDate ? Date.parse(pubDate) : Number.NaN;
    if (!Number.isNaN(time) && now - time > NOTICE_MAX_AGE_MS) continue;
    const link = tag(item, 'link');
    notices.push({
      notice: {
        title,
        link: link?.startsWith('https://') ? link : null,
        date: Number.isNaN(time) ? null : new Date(time).toISOString(),
      },
      time: Number.isNaN(time) ? 0 : time,
    });
  }
  return notices
    .sort((a, b) => b.time - a.time)
    .slice(0, 3)
    .map((n) => n.notice);
}

/** The status badge is an SVG whose aria-label reads like "Doubt: Operational". */
export function parseStateBadge(svg: string): StatusState {
  const label = svg.match(/aria-label="[^":]*:\s*([^"]+)"/)?.[1]?.toLowerCase() ?? '';
  if (/maintenance/.test(label)) return 'maintenance';
  if (/degraded|partial/.test(label)) return 'degraded';
  if (/down|outage|offline/.test(label)) return 'down';
  if (/operational|\bup\b|online/.test(label)) return 'up';
  return 'unknown';
}

/** The uptime badge's aria-label reads like "Doubt 90d: 99.98". */
export function parseUptimeBadge(svg: string): string | null {
  const value = svg.match(/aria-label="[^"]*:\s*([\d.]+)\s*%?"/)?.[1];
  return value ? `${value}%` : null;
}

export async function getBotStatus(): Promise<BotStatus> {
  const [feed, stateBadge, uptimeBadge] = await Promise.all([
    fetchText(STATUS_FEED_URL),
    fetchText(`${STATUS_ORIGIN}/badge/${STATUS_MONITOR}/status`),
    fetchText(`${STATUS_ORIGIN}/badge/${STATUS_MONITOR}/uptime`),
  ]);
  return {
    state: stateBadge ? parseStateBadge(stateBadge) : 'unknown',
    uptime90d: uptimeBadge ? parseUptimeBadge(uptimeBadge) : null,
    notices: feed ? parseFeed(feed) : [],
  };
}
