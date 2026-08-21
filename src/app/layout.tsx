import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from './providers';
import { validateServerEnv, env } from '@/lib/env';
import './globals.css';

// Client-only organisms — must NOT be SSR'd through the server layout
// (they rely on Zustand persist + localStorage which is browser-only)
const SidebarNavigation = dynamic(
  () => import('@/components/organisms/SidebarNavigation').then(m => m.SidebarNavigation),
  { ssr: false }
);
const GlobalAudioPlayer = dynamic(
  () => import('@/components/organisms/GlobalAudioPlayer').then(m => m.GlobalAudioPlayer),
  { ssr: false }
);
const SettingsDrawer = dynamic(
  () => import('@/components/organisms/SettingsDrawer').then(m => m.SettingsDrawer),
  { ssr: false }
);
const Footer = dynamic(
  () => import('@/components/organisms/Footer').then(m => m.Footer),
  { ssr: false }
);

// Validate environment variables on the server
validateServerEnv();

const BASE_URL = env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Al-Quran Interactive Read, Listen & Study the Quran Online',
    template: '%s | Al-Quran Interactive',
  },
  description:
    'Read all 114 Surahs with English & Urdu translation, audio recitation, Tafseer by Ibn Kathir, authentic Duas, and video lectures.',
  keywords: [
    'Quran online',
    'read Quran',
    'listen Quran',
    'Quran translation',
    'Quran tafseer',
    'Islamic duas',
    'Surah Al-Fatiha',
    'Surah Yaseen',
    'Dr Israr Ahmed',
    'Mufti Menk',
    'Nouman Ali Khan',
    'Islamic knowledge',
    'audio Quran',
    'Quran with Urdu translation',
    'al quran interactive',
    'quran kareem',
  ],
  authors: [{ name: 'Al-Quran Interactive', url: BASE_URL }],
  creator: 'Al-Quran Interactive',
  publisher: 'Al-Quran Interactive',
  category: 'Religion & Spirituality',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    // No trailing slash on canonical
    canonical: BASE_URL,
    // hreflang: enable when /ur/* URL paths are live
    // languages: {
    //   'en-US': `${BASE_URL}`,
    //   'ur-PK': `${BASE_URL}/ur`,
    // },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Al-Quran Interactive',
    title: 'Al-Quran Interactive — Read, Listen & Study the Quran Online',
    description:
      'Read all 114 Surahs with English & Urdu translation, audio recitation, Tafseer by Ibn Kathir, authentic Duas, and video lectures.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Al-Quran Interactive Your Spiritual Knowledge Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al-Quran Interactive Read, Listen & Study the Quran Online',
    description:
      'Explore all 114 Surahs with translations, audio, Tafseer, Duas, and video lectures from world-class scholars.',
    images: [`${BASE_URL}/og-image.png`],
    creator: '@alquraninteractive',
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: '733e4fcea6a10f83',
  },
};

// ─── Viewport (separate export, required by Next.js 14+) ─────
export const viewport: Viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Al-Quran Interactive',
        description:
          'A premium Islamic knowledge platform for reading, listening, and studying the Holy Quran.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/player/{search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: ['en-US', 'ur-PK'],
      },
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Al-Quran Interactive',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logo.png`,
        },
        sameAs: [],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch + preconnect for Google Fonts */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical Inter font subset to eliminate render-blocking for FCP/LCP */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Scheherazade+New:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Scheherazade+New:wght@400;700&display=swap"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Scheherazade+New:wght@400;700&display=swap"
          />
        </noscript>
        <link rel="icon" href="/logo.png?v=3" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <Providers>
          <div className="flex min-h-screen min-[1200px]:flex-col">
            {/* Sidebar Navigation */}
            <SidebarNavigation />

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-64 min-[1200px]:ml-0 min-[1200px]:pt-20 min-h-screen flex flex-col">
              {/* top padding: mobile=64px header, tablet=64px header, desktop=sidebar (no top pad needed) */}
              <div className="flex-1 pt-16 lg:pt-0 pb-24 lg:pb-8">
                {children}
              </div>
              <Footer />
            </main>

            {/* Global Floating Components */}
            <GlobalAudioPlayer />
            <SettingsDrawer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
