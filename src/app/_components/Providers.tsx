'use client'

import type { PropsWithChildren } from 'react'
import { TopNavProvider } from './TopNav'

export function Providers({ children }: PropsWithChildren) {
  return <TopNavProvider>{children}</TopNavProvider>
}
