'use client'

import Image from 'next/image'
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react'
import { Button } from '../../ui/Button'
import { Text } from '../../ui/Text'
import { WithCursor } from '../../ui/WithCursor'

import './TopNav.css'

export const TopNavContext = createContext({
  show: false,
  setShow: (_: boolean) => {},
})

export function TopNavProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false)
  return (
    <TopNavContext.Provider value={{ show, setShow }}>
      {children}
    </TopNavContext.Provider>
  )
}

export function TopNav() {
  const { show } = useContext(TopNavContext)
  if (!show) return null
  return (
    <WithCursor cursor="box">
      <div className="fixed top-0 z-50 p-[20px] animate-[0.3s_nav-enter_ease] w-full">
        <div className="relative px-[32px] max-mobile:px-[20px] h-[72px] max-mobile:h-[56px]">
          <div className="bg-[#000000] bg-opacity-60 backdrop-blur-lg border border-white border-opacity-20 absolute left-0 top-0 right-0 bottom-0 rounded-[40px] z-0" />
          <div className="relative z-[1] flex items-center justify-between w-full h-full">
            <div className="flex max-mobile:hidden">
              <Text
                className="flex justify-center items-center max-mobile:text-[9px] max-[400px]:text-[12px]"
                size="12"
                fontFamily="typewriter"
              >
                BY
              </Text>
              <Image
                alt="Paradigm Logo"
                className="h-[60px] ml-[-8px] max-mobile:h-[32px] max-mobile:ml-[-30px] max-[400px]:h-[50px] max-[400px]:ml-[-16px]"
                src="/images/paradigm-transparent.svg"
                width="153"
                height="60"
              />
            </div>
            <div className="flex mobile:hidden">
              <Image
                alt="Frontiers logo"
                src="/images/frontiers.svg"
                width="111"
                height="25"
              />
            </div>
            <div className="absolute left-[50%] -translate-x-1/2 max-mobile:hidden">
              <Text size="24">Frontiers</Text>
            </div>
            <div className="-mr-[18px] max-mobile:hidden">
              <WithCursor cursor="pulse-crosshair">
                <Button>APPLY TO ATTEND</Button>
              </WithCursor>
            </div>
            <button className="mobile:hidden" type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  d="M3 5H21M3 12H21M3 19H21"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </WithCursor>
  )
}
