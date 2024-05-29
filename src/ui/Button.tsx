'use client'

import { Slot, Slottable } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'cva'
import type { ComponentProps } from 'react'

const buttonVariants = cva(
  [
    'bg-paradigmGreen',
    'flex',
    'justify-center',
    'items-center',
    'text-black',
    'px-[24px]',
    'rounded-[400px]',
    'font-typewriter',
    'font-300',
    'relative',
    'uppercase',
  ],
  {
    variants: {
      height: {
        '50': ['h-[50px]', 'text-[16px]'],
        '60': ['h-[60px]', 'text-[18px]'],
      },
    },
  },
)

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean | undefined
    frame?: boolean | undefined
  }

export function Button({
  asChild,
  children,
  className,
  frame = false,
  height = '50',
  type = 'button',
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      {...props}
      className={buttonVariants({ className, height })}
      type={type}
    >
      {frame && <TopLeftCorner />}
      <Slottable>{children}</Slottable>
      {frame && <BottomRightCorner />}
    </Comp>
  )
}

function TopLeftCorner() {
  return (
    <svg
      aria-hidden="true"
      className="w-[20px] h-[20px] top-[14px] left-[20px] absolute"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 11.8447C1 6.04574 5.70101 1.34473 11.5 1.34473H22.5C22.7761 1.34473 23 1.12087 23 0.844727C23 0.568584 22.7761 0.344727 22.5 0.344727H1C0.447715 0.344727 0 0.792442 0 1.34473V21.8447C0 22.1209 0.223857 22.3447 0.5 22.3447C0.776142 22.3447 0.999999 22.1209 0.999999 21.8447L1 11.8447Z"
        fill="currentColor"
      />
    </svg>
  )
}

function BottomRightCorner() {
  return (
    <svg
      aria-hidden="true"
      className="w-[20px] h-[20px] bottom-[14px] right-[20px] absolute"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 10.8447C22 16.6437 17.299 21.3447 11.5 21.3447L0.5 21.3447C0.223858 21.3447 6.78525e-08 21.5686 4.37114e-08 21.8447C1.95703e-08 22.1209 0.223858 22.3447 0.5 22.3447L22 22.3447C22.5523 22.3447 23 21.897 23 21.3447L23 0.844727C23 0.568584 22.7761 0.344727 22.5 0.344727C22.2239 0.344726 22 0.568584 22 0.844726L22 10.8447Z"
        fill="currentColor"
      />
    </svg>
  )
}
