import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export function Section({
  children,
  className,
}: PropsWithChildren<{ className?: string | undefined }>) {
  return (
    <section className={clsx('relative z-[1]', className)}>{children}</section>
  )
}
