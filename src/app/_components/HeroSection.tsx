import Image from 'next/image'

import { Button } from '~/ui/Button'
import { Text } from '~/ui/Text'

export function HeroSection() {
  return (
    <div>
      <div className="relative">
        <div className="flex items-center flex-col gap-[32px] z-[1] mix-blend-exclusion relative">
          {/* Title */}
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

          {/* Tagline */}
          <div className="flex justify-center gap-[12px] text-center max-mobile:hidden">
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
        </div>

        {/* Mountain Background + CTA */}
        <div className="absolute flex flex-col items-center top-[72px] max-tablet:top-[172px] max-mobile:hidden">
          <Image src="/images/mountain.svg" alt="Mountains" width="1196" height="384" />
          <Button className="w-[50%] mt-[-36px]" height="60">
            Apply to attend
          </Button>
        </div>
      </div>
    </div>
  )
}
