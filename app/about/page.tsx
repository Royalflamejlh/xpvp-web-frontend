import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'utils/contentUtils'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <p>Coming Soon!</p>
    </>
  )
}
