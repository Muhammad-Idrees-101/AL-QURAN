import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Bookmarks is user-specific — no value for crawlers
        disallow: ['/bookmarks', '/api/private', '/admin'],
      },
      {
        // Block AI training bots
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot', 'anthropic-ai', 'Claude-Web'],
        disallow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
