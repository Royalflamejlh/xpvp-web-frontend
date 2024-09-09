import { MetadataRoute } from 'next'
import { allKits } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const kitsRoutes = allKits.map((post) => ({
    url: `${siteUrl}/${post.path}`,
  }))

  const routes = ['', 'kits', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
  }))

  return [...routes, ...kitsRoutes]
}
