import type { Metadata } from 'next';
import { BASE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Qibla Direction & Prayer Times Online — Al-Quran Interactive',
  description:
    'Find accurate Qibla direction and daily prayer times (Salah) based on your location.',
  alternates: { canonical: `${BASE_URL}/qibla` },
  keywords: [
    'Qibla direction',
    'prayer times online',
    'salah times',
    'qibla compass',
    'Islamic prayer times',
    'fajr dhuhr asr maghrib isha',
  ],
  openGraph: {
    title: 'Qibla Direction & Prayer Times Online — Al-Quran Interactive',
    description:
      'Find accurate Qibla direction and daily prayer times (Salah) based on your location.',
    url: `${BASE_URL}/qibla`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Al-Quran Interactive — Your Spiritual Knowledge Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qibla Direction & Prayer Times Online — Al-Quran Interactive',
    description: 'Find accurate Qibla direction and daily Salah prayer times based on your location.',
    images: [OG_IMAGE],
  },
};

export default function QiblaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
