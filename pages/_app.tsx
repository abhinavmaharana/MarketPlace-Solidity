import '../styles/globals.css'
import Link from 'next/link'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    <nav className="border-b p-6">
      <p className="text-4xl font-bold">Metaverse Marketplace</p>
      <div className="flex mt-4">
        <Link href="/">
          <a className="mr-4 text-[#B75CFF]">
            Home
          </a>
        </Link>
        <Link href="/create-item">
          <a className="mr-6 text-[#B75CFF]">
            Sell Digital Asset
          </a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-6 text-[#B75CFF]">
            My Digital Assets
          </a>
        </Link>
        <Link href="/creator-dashboard">
          <a className="mr-6 text-[#B75CFF]">
            Creator Dashboard
          </a>
        </Link>
      </div>
    </nav>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
