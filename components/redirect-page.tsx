import { RedirectNow } from './redirect-now';

/**
 * Fallback for /invite and /support. On Vercel, vercel.json redirects these paths before this
 * page is served; anywhere else the meta refresh, the script and the visible link take over.
 */
export function RedirectPage({ to, title, label }: { to: string; title: string; label: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${to}`} />
      <RedirectNow to={to} />
      <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <p className="mt-4 text-muted">
          Taking you to Discord. If nothing happens, use the link below.
        </p>
        <a href={to} className="btn btn-primary mt-8 !min-h-12 !px-6">
          {label}
        </a>
      </section>
    </>
  );
}
