'use client'

import clsx from 'clsx'
import {
  type PropsWithChildren,
  type ReactNode,
  cloneElement,
  isValidElement,
  useState,
} from 'react'

import './WithCursor.css'

type WithCursorProps = PropsWithChildren<{
  cursor: 'box' | 'pulse-crosshair' | 'external'
}>

export function WithCursor({ children, cursor }: WithCursorProps) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  if (!isValidElement(children)) return null
  return (
    <>
      <Cursor x={x} y={y}>
        {cursor === 'box' && <Box />}
        {cursor === 'pulse-crosshair' && <PulseCrosshair />}
        {cursor === 'external' && <External />}
      </Cursor>
      {cloneElement(children, {
        // @ts-expect-error
        className: clsx('cursor-none', children.props.className),
        onMouseMove: (event: MouseEvent) => {
          setX(event.clientX)
          setY(event.clientY)
        },
        onMouseLeave: () => {
          setX(0)
          setY(0)
        },
      })}
    </>
  )
}

function Cursor({
  children,
  x,
  y,
}: { children: ReactNode; x: number; y: number }) {
  if (x === 0 && y === 0) return null
  return (
    <div
      className="fixed bg-white mix-blend-exclusion pointer-events-none cursor-none z-[9999]"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      {children}
    </div>
  )
}

function Box() {
  return <div className="w-[18px] h-[18px] mix-blend-exclusion" />
}

function PulseCrosshair() {
  return (
    <>
      {/* Pulsing border */}
      <div className="absolute animate-[3s_pulse_ease-out_infinite] w-full h-full border border-[1] border-white mix-blend-exclusion" />
      <div className="absolute animate-[3s_pulse_1s_ease-out_infinite] w-full h-full border border-[1] border-white mix-blend-exclusion" />
      <div className="absolute animate-[3s_pulse_2s_ease-out_infinite] w-full h-full border border-[1] border-white mix-blend-exclusion" />

      {/* Inner */}
      <div>
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
    </>
  )
}

function External() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0714 10.0425C13.0704 10.4396 12.7477 10.7608 12.3506 10.7598C11.9536 10.7588 11.6325 10.4362 11.6334 10.0392L11.634 9.78811C11.636 8.92321 10.5907 8.48821 9.97858 9.09921L5.22657 13.8421C4.94559 14.1226 4.49045 14.1221 4.21002 13.8411C3.9296 13.5602 3.93005 13.1051 4.21101 12.8246L8.96658 8.07821C9.57198 7.47401 9.14538 6.43944 8.29018 6.43745L8.04778 6.43689C7.65098 6.43596 7.33008 6.11349 7.33108 5.71666C7.33208 5.31993 7.65438 4.99908 8.05118 5L11.0832 5.00696C12.1878 5.0095 13.0812 5.9071 13.0786 7.01173L13.0714 10.0425Z"
        fill="black"
      />
    </svg>
  )
}
