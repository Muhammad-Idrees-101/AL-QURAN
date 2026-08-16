import type { Metadata } from 'next';
import { BASE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Quran Tafseer Online — Ibn Kathir Commentary & Scholar Explanations',
  description:
    'Explore in-depth Tafseer (Quran commentary) by Ibn Kathir and renowned scholars, Surah by Surah, with audio and video lectures.',
  alternates: { canonical: `${BASE_URL}/tafseer` },
  openGraph: {
    title: 'Quran Tafseer Online — Ibn Kathir Commentary & Scholar Explanations',
    description:
      'Explore in-depth Tafseer (Quran commentary) by Ibn Kathir and renowned scholars, Surah by Surah, with audio and video lectures.',
    url: `${BASE_URL}/tafseer`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Al-Quran Interactive — Your Spiritual Knowledge Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quran Tafseer Online — Ibn Kathir Commentary & Scholar Explanations',
    description:
      'Deep Quranic commentary from Ibn Kathir and classical scholars for all 114 Surahs.',
    images: [OG_IMAGE],
  },
};

export default function TafseerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
