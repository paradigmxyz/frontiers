import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import './styles.css'
import { WithCursor } from '../ui/WithCursor'
import { Providers } from './_components/Providers'
import { TopNav } from './_components/TopNav'

export const metadata: Metadata = {
  title: 'Frontiers',
  description:
    'A two-day event focused on high-performance, bleeding edge crypto infrastructure.',
  icons: [{ rel: 'icon', url: '/images/favicon.png' }],
  twitter: {
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
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
