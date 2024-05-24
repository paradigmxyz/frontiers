import Image from 'next/image'

import { Text } from '~/ui/Text'

export function Footer() {
  return (
    <footer className="absolute left-0 right-0 z-[1]">
      <Image
        alt="Earth background"
        className="object-fill w-full"
        src="/images/world.svg"
        width="1209"
        height="657"
      />
      <div className="absolute top-[50%] max-tablet:top-[40%] max-[480px]:top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-2 max-[480px]:gap-1">
          <Image
            alt="Paradigm logo"
            src="/images/paradigm-transparent.svg"
            className="w-[200px] max-mobile:w-[120px] max-[480px]:w-[100px]"
            width="200"
            height="78"
          />
          <Text className="max-[480px]:text-[48px]" size="160" weight="500">
            Frontiers
          </Text>
        </div>
      </div>
      <div className="absolute bottom-8 left-[50%] -translate-x-1/2 w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 max-[480px]:gap-1">
            <Text
              asChild
              className="max-[480px]:text-[9px]"
              fontFamily="typewriter"
            >
              <a href="/#">PRIVACY POLICY</a>
            </Text>
            <Text fontFamily="typewriter">|</Text>
            <Text
              asChild
              className="max-[480px]:text-[9px]"
              fontFamily="typewriter"
            >
              <a href="/#">EVENT TERMS & CONDITIONS</a>
            </Text>
          </div>
          <Text className="max-[480px]:text-[9px]" fontFamily="typewriter">
            © 2024 PARADIGM. ALL RIGHTS RESERVED.
          </Text>
        </div>
      </div>
    </footer>
  )
}
