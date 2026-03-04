import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aloraops.ai';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/solutions`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/company`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const blogSlugs = getAllSlugs();
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
