import type { Metadata } from 'next';
import { RedirectPage } from '@/components/redirect-page';
import { links } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Add to Discord',
  description: 'Add Doubt to your Discord server.',
  robots: { index: false },
};

export default function Invite() {
  return (
    <RedirectPage to={links.invite} title="Adding Doubt to Discord" label="Add Doubt to Discord" />
  );
}
