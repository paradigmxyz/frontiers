import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

const textVariants = cva(['leading-snug', 'capsize'], {
  variants: {
    fontFamily: {
      default: 'font-sans',
      typewriter: 'font-typewriter',
    },
    size: {
      '9': 'text-[9px]',
      '11': 'text-[11px]',
      '12': 'text-[12px]',
      '14': 'text-[14px]',
      '16': 'text-[16px] max-tablet:text-[14px]',
      '24': 'text-[24px] max-tablet:text-[20px]',
      '28': 'text-[28px] max-tablet:text-[20px]',
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
  {
    asChild?: boolean | undefined
    className?: string | undefined
  } & VariantProps<typeof textVariants>
>

export function Text({
  asChild,
  className,
  fontFamily = 'default',
  size = '16',
  weight = '300',
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={textVariants({ className, fontFamily, size, weight })}
      {...props}
    />
  )
}
