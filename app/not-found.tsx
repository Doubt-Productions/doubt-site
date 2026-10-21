import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p className="grad-text font-display text-7xl font-extrabold">404</p>
      <h1 className="mt-4 text-2xl font-bold">This page doesn’t exist</h1>
      <p className="mt-3 text-muted">The link may be old, or the address has a typo.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to the home page
      </Link>
    </section>
  );
}
