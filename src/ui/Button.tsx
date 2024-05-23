'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import { type ComponentProps, useState } from 'react'

const buttonVariants = cva(
  [
    'bg-paradigmGreen',
    'text-black',
    'px-[24px]',
    'cursor-none',
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
  VariantProps<typeof buttonVariants>

export function Button({
  children,
  className,
  height = '50',
  type = 'button',
  ...props
}: ButtonProps) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <>
      <Cursor x={x} y={y} />
      <button
        {...props}
        className={buttonVariants({ className, height })}
        onMouseMove={(event) => {
          setX(event.clientX)
          setY(event.clientY)
        }}
        onMouseLeave={() => {
          setX(0)
          setY(0)
        }}
        type={type}
      >
        <TopLeftCorner />
        {children}
        <BottomRightCorner />
      </button>
    </>
  )
}

function Cursor({ x, y }: { x: number; y: number }) {
  if (x === 0 && y === 0) return null
  return (
    <div
      className="fixed bg-white mix-blend-exclusion pointer-events-none cursor-none z-[9999]"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style={{ mixBlendMode: 'exclusion' }}
          clipPath="url(#clip0_415_3609)"
        >
          <path
            d="M9.7002 3.39995C9.7002 3.01335 9.3868 2.69995 9.0002 2.69995C8.6136 2.69995 8.3002 3.01335 8.3002 3.39995V6.49995C8.3002 7.49407 7.49431 8.29995 6.5002 8.29995H3.4002C3.0136 8.29995 2.7002 8.61335 2.7002 8.99995C2.7002 9.38655 3.0136 9.69995 3.4002 9.69995H6.5002C7.49431 9.69995 8.3002 10.5058 8.3002 11.5V14.6C8.3002 14.9866 8.6136 15.3 9.0002 15.3C9.3868 15.3 9.7002 14.9866 9.7002 14.6V11.4999C9.7002 10.5058 10.5061 9.69995 11.5002 9.69995H14.6002C14.9868 9.69995 15.3002 9.38655 15.3002 8.99995C15.3002 8.61335 14.9868 8.29995 14.6002 8.29995H11.5002C10.5061 8.29995 9.7002 7.49406 9.7002 6.49995V3.39995Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_415_3609">
            <rect
              width="14"
              height="14"
              fill="white"
              transform="translate(2 2)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
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
