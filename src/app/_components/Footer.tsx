import Image from "next/image";

import { Text } from "~/ui/Text";

function FooterLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex justify-center w-fit relative">
        <div className="absolute top-[-36px] right-[-12px] max-mobile:top-[-24px] max-mobile:right-[-8px] max-[400px]:top-[-16px] max-[400px]:right-[-6px]">
          <div className="flex justify-center">
            <Text
              className="flex justify-center items-center text-[12px] max-mobile:text-[9px] max-[400px]:text-[8px]"
              fontFamily="typewriter"
            >
              BY
            </Text>
            <Image
              alt="Paradigm Logo"
              className="h-[60px] ml-[-8px] max-mobile:h-[40px] max-mobile:ml-[-6px] max-[400px]:h-[30px] max-[400px]:ml-[-4px]"
              src="/images/paradigm-transparent.svg"
              width="153"
              height="60"
            />
          </div>
        </div>
        <Text
          size="160"
          weight="500"
          className="text-white text-center max-mobile:text-[80px] max-[400px]:text-[60px]"
        >
          Frontiers
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
        height="657"
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
      <div className="absolute top-0 left-0 right-0 z-[2] pt-20 sm:pt-28">
        <div className="flex flex-col items-center px-4 sm:px-8">
          <FooterLogo />

          <div className="mt-6 max-w-2xl mx-auto text-center">
            <Text
              className="text-white/80 text-lg sm:text-xl font-serif"
              fontFamily="default"
            >
              Paradigm's annual event & hackathon for application and
              infrastructure developers.
            </Text>

            <Text
              className="text-white/70 text-md sm:text-lg mt-3 font-serif"
              fontFamily="default"
            >
              August 6-8, 2025 • The Midway SF and online
            </Text>
          </div>
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
