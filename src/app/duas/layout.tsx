import type { Metadata } from 'next';
import { BASE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Authentic Islamic Duas — Daily Supplications with Translation',
  description:
    'Browse authentic Duas (supplications) from Quran and Sunnah with Arabic text, transliteration, and English/Urdu translation.',
  alternates: { canonical: `${BASE_URL}/duas` },
  keywords: [
    'Islamic duas',
    'morning duas',
    'evening adhkar',
    'dua before sleeping',
    'dua for parents',
    'Sayyid al-Istighfar',
    'authentic duas',
    'duas from Quran',
    'duas from Sunnah',
    'daily supplications',
  ],
  openGraph: {
    title: 'Authentic Islamic Duas — Daily Supplications with Translation',
    description:
      'Browse authentic Duas (supplications) from Quran and Sunnah with Arabic text, transliteration, and English/Urdu translation.',
    url: `${BASE_URL}/duas`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Al-Quran Interactive — Your Spiritual Knowledge Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authentic Islamic Duas — Daily Supplications with Translation',
    description: 'Authentic supplications from Quran & Sunnah with Arabic, transliteration, and translation.',
    images: [OG_IMAGE],
  },
};

export default function DuasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
