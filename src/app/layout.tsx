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
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <WithCursor cursor="box">
          <div className="selection:bg-paradigmGreen selection:text-black">
            <Providers>
              <TopNav />
              <main className="py-[100px] px-[24px] min-h-screen mx-auto max-w-screen-desktop overflow-x-hidden">
                {children}
              </main>
            </Providers>
          </div>
        </WithCursor>
      </body>
    </html>
  )
}
