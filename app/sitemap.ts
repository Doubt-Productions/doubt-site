import type { MetadataRoute } from 'next';
import { LEGAL_UPDATED_ISO } from '@/lib/legal';
import { SITE_URL } from '@/lib/links';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/premium`, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LEGAL_UPDATED_ISO,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LEGAL_UPDATED_ISO,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
