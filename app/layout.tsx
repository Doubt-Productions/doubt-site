import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Manrope, Syne } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { SITE_URL } from '@/lib/links';
import './globals.css';

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

const description =
  'Doubt is a Discord bot for moderation with cases, AutoMod, tickets with transcripts, welcome messages, levelling and an economy, with a dashboard to manage it all.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Doubt · Your server, without a doubt.',
    template: '%s · Doubt',
  },
  description,
  applicationName: 'Doubt',
  authors: [{ name: 'Doubt Productions' }],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/brand/doubt-app-icon.svg', type: 'image/svg+xml' },
      { url: '/brand/doubt-app-icon.png', type: 'image/png', sizes: '1024x1024' },
    ],
    apple: [{ url: '/brand/doubt-app-icon.png', sizes: '1024x1024' }],
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Doubt',
    title: 'Doubt · Your server, without a doubt.',
    description,
    locale: 'en_GB',
    images: [{ url: '/brand/doubt-banner.png', width: 2400, height: 848, alt: 'Doubt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doubt · Your server, without a doubt.',
    description,
    images: ['/brand/doubt-banner.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f0a14' },
    { media: '(prefers-color-scheme: light)', color: '#faf7fc' },
  ],
};

// Runs before first paint: a saved choice wins, then the system preference, then dark.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${syne.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static theme script, no user input */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col overflow-x-hidden">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-surface px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
