import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allKits } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allKits)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
