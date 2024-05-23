import clsx from 'clsx'
import Image from 'next/image'
import type { ReactElement } from 'react'

import { Button } from '~/ui/Button'
import { Text } from '~/ui/Text'
import { WithCursor } from '../../ui/WithCursor'

export function HeroSection() {
  return (
    <div>
      <div className="relative flex flex-col gap-[32px]">
        {/* Title */}
        <div className="flex items-center flex-col z-[1] mix-blend-exclusion">
          <div className="inline-flex justify-center w-fit relative">
            <div className="absolute flex justify-center top-[-32px] right-[-8px] max-mobile:hidden">
              <Text
                className="flex justify-center items-center"
                size="12"
                fontFamily="typewriter"
              >
                BY
              </Text>
              <Image
                alt="Paradigm Logo"
                className="h-[60px] ml-[-8px]"
                src="/images/paradigm-transparent.svg"
                width="153"
                height="60"
              />
            </div>
            <Text size="160" weight="500">
              Frontiers
            </Text>
          </div>
        </div>

        {/* Tagline */}
        <div className="z-[1] relative flex justify-center gap-[12px] text-center max-mobile:hidden">
          <Text size="24" weight="300">
            August 16-17, 2024
          </Text>
          <Text size="16" weight="300">
            •
          </Text>
          <Text size="24" weight="300">
            San Francisco, CA
          </Text>
        </div>

        {/* Mountain Background + CTA */}
        <div className="absolute flex flex-col items-center top-[72px] max-tablet:top-[172px] max-mobile:hidden">
          <Image
            src="/images/mountain.svg"
            alt="Mountains"
            width="1196"
            height="384"
          />
          <div className="absolute top-[50%] right-[50%] max-tablet:top-[40%] max-[858px]:hidden">
            <WithCursor cursor="external">
              <ProjectFlag
                anchor="right"
                image={
                  <Image
                    alt="Alloy"
                    src="/images/alloy.svg"
                    height="48"
                    width="48"
                  />
                }
              />
            </WithCursor>
          </div>
          <div className="absolute top-[30%] right-[40%] max-tablet:top-[20%] max-[858px]:hidden">
            <WithCursor cursor="external">
              <ProjectFlag
                anchor="top"
                image={
                  <Image
                    alt="Reth"
                    src="/images/reth.png"
                    height="48"
                    width="48"
                  />
                }
              />
            </WithCursor>
          </div>
          <div className="absolute top-[55%] right-[30%] max-tablet:top-[45%] max-[858px]:hidden">
            <WithCursor cursor="external">
              <ProjectFlag
                anchor="bottom"
                image={
                  <Image
                    alt="Reth"
                    src="/images/foundry.svg"
                    height="48"
                    width="48"
                  />
                }
              />
            </WithCursor>
          </div>
          <div className="absolute top-[120px] left-[100px] max-tablet:top-[80px] max-tablet:left-[40px] max-w-[300px]">
            <Text fontFamily="typewriter" size="12" weight="300">
              A two-day event focused on high-performance, bleeding edge crypto
              infrastructure. By open source engineers, for open source
              engineers.
            </Text>
          </div>
          <WithCursor cursor="pulse-crosshair">
            <Button className="w-[50%] mt-[-36px]" height="60">
              Apply to attend
            </Button>
          </WithCursor>
        </div>
      </div>
    </div>
  )
}

function ProjectFlag({
  anchor,
  image,
}: { anchor: 'top' | 'left' | 'right' | 'bottom'; image: ReactElement }) {
  return (
    <div
      className={clsx(
        'flex',
        anchor === 'top' || anchor === 'bottom' ? 'flex-col' : undefined,
      )}
    >
      {(anchor === 'left' || anchor === 'top') && (
        <div className="bg-black flex items-center justify-center w-[16px] h-[16px]">
          <div className="bg-white w-[6px] h-[6px]" />
        </div>
      )}
      <div className="bg-black p-[8px] w-[64px] h-[64px]">{image}</div>
      {(anchor === 'right' || anchor === 'bottom') && (
        <div className="bg-black flex items-center justify-center w-[16px] h-[16px]">
          <div className="bg-white w-[6px] h-[6px]" />
        </div>
      )}
    </div>
  )
}
