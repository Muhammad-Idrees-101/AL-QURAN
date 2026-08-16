import type { Metadata } from 'next';
import { BASE_URL, OG_IMAGE, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Islamic Academy — Video Lectures by Dr. Israr Ahmed, Mufti Menk, Nouman Ali Khan',
  description:
    'Watch Bayan-ul-Quran and Tafseer video lectures from world-class scholars including Dr. Israr Ahmed, Mufti Menk, and Nouman Ali Khan.',
  alternates: { canonical: `${BASE_URL}/academy` },
  openGraph: {
    title: 'Islamic Academy — Video Lectures by Dr. Israr Ahmed, Mufti Menk, Nouman Ali Khan',
    description:
      'Watch Bayan-ul-Quran and Tafseer video lectures from world-class scholars including Dr. Israr Ahmed, Mufti Menk, and Nouman Ali Khan.',
    url: `${BASE_URL}/academy`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Al-Quran Interactive — Your Spiritual Knowledge Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Islamic Academy — Video Lectures by Dr. Israr Ahmed, Mufti Menk, Nouman Ali Khan',
    description:
      'Watch Bayan-ul-Quran and Tafseer lectures from Dr. Israr Ahmed, Mufti Menk, and Nouman Ali Khan.',
    images: [OG_IMAGE],
  },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
