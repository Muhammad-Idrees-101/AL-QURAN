/**
 * Shared SEO constants for Al-Quran Interactive
 * All layout and page metadata files import from here.
 * This ensures a single source of truth for the canonical domain.
 */

export const BASE_URL = 'https://al-quran-beige.vercel.app';
export const SITE_NAME = 'Al-Quran Interactive';
export const OG_IMAGE = `${BASE_URL}/og-image.png`;
export const TWITTER_HANDLE = '@alquraninteractive';
export const THEME_COLOR = '#0d9488';

/** Build a canonical URL from a path (no trailing slash) */
export function buildCanonical(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${cleanPath === '/' ? '' : cleanPath}`;
}

/** Standard OG image object used site-wide */
export const OG_IMAGE_OBJECT = {
  url: OG_IMAGE,
  width: 1200,
  height: 630,
  alt: 'Al-Quran Interactive — Your Spiritual Knowledge Hub',
};
