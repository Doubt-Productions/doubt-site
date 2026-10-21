import type { Metadata } from 'next';
import { RedirectPage } from '@/components/redirect-page';
import { links } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Support server',
  description: 'Join the Doubt support server on Discord.',
  robots: { index: false },
};

export default function Support() {
  return (
    <RedirectPage to={links.support} title="Doubt support server" label="Join the support server" />
  );
}
