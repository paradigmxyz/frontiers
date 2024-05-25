import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import { Text } from './Text'

export function Section({
  children,
  className,
}: PropsWithChildren<{ className?: string | undefined }>) {
  return (
    <section className={clsx('relative z-10', className)}>{children}</section>
  )
}

export function SectionHeading({
  children,
  id,
}: PropsWithChildren<{ className?: string | undefined; id?: string }>) {
  return (
    <>
      <div className="absolute -mt-[120px]" id={id} />
      <Text fontFamily="typewriter" size="28">
        <h2>{children}</h2>
      </Text>
    </>
  )
}
