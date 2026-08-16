import type { Metadata } from 'next';
import { BASE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'My Bookmarks — Al-Quran Interactive',
  description: 'Your saved Ayahs from the Holy Quran. Quickly return to bookmarked verses and continue your reading journey.',
  alternates: { canonical: `${BASE_URL}/bookmarks` },
  robots: {
    // User-specific page — noindex, nofollow per SEO spec
    index: false,
    follow: false,
  },
};

export default function BookmarksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
