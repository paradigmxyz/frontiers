import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import './styles.css'

export const metadata: Metadata = {
  title: 'Frontiers',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div>
          <main className="py-[100px] px-[24px] min-h-screen mx-auto max-w-screen-desktop overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
