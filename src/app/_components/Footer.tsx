import Image from "next/image";
import Link from "next/link";
import { Button } from "~/ui/Button";

import { Text } from "~/ui/Text";

function FooterLogo() {
  return (
    <div className="flex items-center flex-col z-[1] mix-blend-exclusion px-4 sm:px-6 mb-0 sm:mb-0 mt-0">
      <div className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px]">
        <Image
          src="/images/logo-header.svg"
          alt="Frontiers by Paradigm"
          width={700}
          height={200}
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="mt-4">
        <Button asChild frame color="paradigmGreen" className="w-full min-w-[180px] px-6 text-base" height="50">
          <Link href="https://7dr10b0z31d.typeform.com/Frontiers2025">APPLY NOW</Link>
        </Button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full max-h-[500px]">
      {/* Background Image */}
      <Image
        alt="Earth background"
        className="relative object-cover w-full h-[400px] z-0"
        src="/images/world.svg"
        width="1209"
        height="200"
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
      <div className="absolute top-0 left-0 right-0 z-[2]">
        <div className="flex flex-col items-center px-4 sm:px-8">
          <FooterLogo />
        </div>
      </div>

      {/* Footer Links & Copyright */}
      <div className="absolute bottom-4 left-0 right-0 z-[2]">
        <div className="flex flex-col items-center gap-2">
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