import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            MCXPVP.net
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Website under construction.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            <a
              href="https://discord.gg/QtSSUuKSQ2"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord for updates
            </a>
          </p>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/kits"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            Kits &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
