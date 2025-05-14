import Image from "next/image";

import { Text } from "~/ui/Text";

function ByParadigm() {
  return (
    <div className="flex justify-center">
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
  )
}

function FooterLogo() {
  return (
    <div className="flex items-center flex-col z-[1] mix-blend-exclusion">
      <div className="inline-flex justify-center w-fit relative">
        <div className="absolute top-[-32px] right-[-8px] max-mobile:top-[-16px] max-mobile:right-[-40px] max-[400px]:hidden">
          <ByParadigm />
        </div>
        <div className="absolute min-[400px]:hidden top-[-24px] right-[-8px]">
          <ByParadigm />
        </div>
        <Text asChild size="160" weight="500" className="max-sm:text-[42px] max-sm:leading-[1.1]">
          <h1>Frontiers</h1>
        </Text>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full">
      {/* Background Image */}
      <Image
        alt="Earth background"
        className="relative object-cover w-full z-0"
        src="/images/world.svg"
        width="1209"
        height="300"
      />

      {/* Gradient Overlay - fades the top of the background image */}
      <div
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0) 20%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.9) 80%, #000000 100%)",
        }}
      />

      {/* Main Content - Logo and Description */}
      <div className="absolute top-0 left-0 right-0 z-[2] pt-12 sm:pt-12">
        <div className="flex flex-col items-center px-4 sm:px-8">
          <FooterLogo />
        </div>
      </div>

      {/* Footer Links & Copyright */}
      <div className="absolute bottom-8 left-0 right-0 z-[2]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 max-[480px]:gap-2">
            <Text
              asChild
              className="text-white/70 hover:text-white text-xs max-[480px]:text-xs"
              fontFamily="typewriter"
            >
              <a href="https://www.paradigm.xyz/privacy-policy">
                PRIVACY POLICY
              </a>
            </Text>
            <Text fontFamily="typewriter" className="text-white/50">
              |
            </Text>
            <Text
              asChild
              className="text-white/70 hover:text-white text-xs max-[480px]:text-xs"
              fontFamily="typewriter"
            >
              <a href="https://www.paradigm.xyz/website-terms-of-use">
                EVENT TERMS & CONDITIONS
              </a>
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}