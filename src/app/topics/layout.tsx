import type { Metadata } from 'next';
import { BASE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Browse Quran by Topic — Prayer, Patience, Prophets, Jannah & More',
  description:
    'Explore Quranic verses organized by topic — Prayer, Patience, Prophets, Jannah, Tawhid, Forgiveness, and more.',
  alternates: { canonical: `${BASE_URL}/topics` },
  keywords: [
    'Quran topics',
    'Surahs about prayer',
    'Surahs about Jannah',
    'Quran themes',
    'Surahs about prophets',
    'Quran by topic',
    'thematic Quran guide',
    'Quran patience',
    'Quran Tawhid',
    'Quran forgiveness',
  ],
  openGraph: {
    title: 'Browse Quran by Topic — Prayer, Patience, Prophets, Jannah & More',
    description:
      'Explore Quranic verses organized by topic — Prayer, Patience, Prophets, Jannah, Tawhid, Forgiveness, and more.',
    url: `${BASE_URL}/topics`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Al-Quran Interactive — Your Spiritual Knowledge Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse Quran by Topic — Prayer, Patience, Prophets, Jannah & More',
    description: 'Find Surahs by theme: Prayer, Prophets, Jannah, Forgiveness, and more.',
    images: [OG_IMAGE],
  },
};

export default function TopicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
