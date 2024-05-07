import { getBlogPosts } from '@/app/blog/utils'

export const baseUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`

export default async function sitemap() {
  let blogs = getBlogPosts().map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
