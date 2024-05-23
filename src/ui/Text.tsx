import { type VariantProps, cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

const textVariants = cva(['leading-none', 'capsize'], {
  variants: {
    fontFamily: {
      default: 'font-sans',
      typewriter: 'font-typewriter',
    },
    size: {
      '12': 'text-[12px]',
      '16': 'text-[16px] max-tablet:text-[14px]',
      '24': 'text-[24px] max-tablet:text-[20px]',
      '160': 'text-[160px] max-tablet:text-[140px] max-mobile:text-[80px]',
    },
    weight: {
      '300': 'font-[300]',
      '400': 'font-[400]',
      '500': 'font-[500]',
    },
  },
})

type TextProps = PropsWithChildren<
  { className?: string | undefined } & VariantProps<typeof textVariants>
>

export function Text({
  children,
  className,
  fontFamily = 'default',
  size = '16',
  weight,
  ...props
}: TextProps) {
  return (
    <div
      {...props}
      className={textVariants({ className, fontFamily, size, weight })}
    >
      {children}
    </div>
  )
}
