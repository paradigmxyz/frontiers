import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import './styles.css'
import { getFrameMetadata } from 'frog/next'
import { WithCursor } from '../ui/WithCursor'
import { Providers } from './_components/Providers'
import { TopNav } from './_components/TopNav'

export async function generateMetadata(): Promise<Metadata> {
  const url =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || 'http://localhost:3000'
  const frameMetadata = await getFrameMetadata(`${url}/api`)
  return {
    title: 'Frontiers',
    description:
      'A two-day event focused on high-performance, bleeding edge crypto infrastructure.',
    icons: [{ rel: 'icon', url: '/images/favicon.png' }],
    twitter: {
      images: [
        {
          url: `${url}/images/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    openGraph: {
      images: [
        {
          url: `${url}/images/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
    other: frameMetadata,
  }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <WithCursor cursor="box">
          <div className="selection:bg-paradigmGreen selection:text-black overflow-x-hidden">
            <Providers>
              <TopNav />
              <main className="py-[100px] px-[24px] min-h-screen mx-auto max-w-screen-desktop">
                {children}
              </main>
            </Providers>
          </div>
        </WithCursor>
      </body>
    </html>
  )
}
