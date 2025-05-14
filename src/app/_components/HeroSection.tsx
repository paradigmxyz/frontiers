"use client";

import clsx from "clsx";
import Image from "next/image";
import { type ReactElement, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "~/ui/Button";
import { Section } from "~/ui/Section";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";
import { TopNavContext } from "./TopNav";

export function HeroSection() {
  const { ref, inView } = useInView({ initialInView: true, threshold: 0 });
  const { setShow } = useContext(TopNavContext);
  useEffect(() => setShow(!inView), [inView, setShow]);

  // State and effect for scroll indicator
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  useEffect(() => {
    const scrollThreshold = 50;
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative h-screen w-screen">
      {/* Hero Section Navigation */}
      <nav className="absolute top-0 left-0 w-full flex justify-center pt-8 sm:pt-10 md:pt-14 z-20">
        <ul className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-16 px-4 sm:px-6 md:px-10 py-1 sm:py-2 md:py-2">
          <li className="flex items-center gap-2 opacity-60 mb-2 sm:mb-0">
            <Text fontFamily="typewriter" size="14">
              STREAM
            </Text>
            <span className="bg-[#444] text-white text-xs px-2 py-0.5 rounded font-typewriter">
              SOON
            </span>
          </li>
          <li className="text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14">
              <a href="#agenda" className="hover:underline">
                SCHEDULE
              </a>
            </Text>
          </li>
          <li className="text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14">
              <a href="#speakers" className="hover:underline">
                SPEAKERS
              </a>
            </Text>
          </li>
          <li className="text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14">
              <a href="#faqs" className="hover:underline">
                FAQ
              </a>
            </Text>
          </li>
          <li className="text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14">
              <a href="#projects" className="hover:underline">
                OPEN SOURCE
              </a>
            </Text>
          </li>
        </ul>
      </nav>
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/bg-hires.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Gradient overlay - fades the bottom of the hero image to black */}
      <div
        className="absolute inset-0 w-full h-full z-[9] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.9) 85%, #000000 100%)",
        }}
      />
      <Section className="relative h-full z-10 flex items-center justify-center pt-16 w-full">
        <div className="flex flex-col items-center justify-center gap-3 w-full mt-6 px-2 max-sm:gap-2 max-sm:mt-2">
          {/* Title and ByParadigm */}
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
          {/* Subtitle */}
          <div className="-mt-4 mb-2">
            <Text
              className="text-center text-gray-300 text-xl max-w-sm sm:max-w-none font-serif max-sm:text-base max-sm:leading-tight max-sm:px-2"
              asChild
              size="20"
            >
              <p>
                Paradigm's annual open source conference for application and infrastructure developers.
              </p>
            </Text>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 mt-2 w-full px-4 max-w-[350px] max-sm:px-0">
            <WithCursor cursor="pulse-crosshair">
              <Button
                asChild
                frame
                color="paradigmGreen"
                className="w-full sm:min-w-[240px] px-6 sm:px-10 max-sm:h-[48px] max-sm:text-base"
                height="60"
              >
                <a href="#register">APPLY NOW</a>
              </Button>
            </WithCursor>
            <WithCursor cursor="pulse-crosshair">
              <Button
                asChild
                frame
                color="white"
                className="w-full sm:min-w-[240px] px-6 sm:px-10 max-sm:h-[48px] max-sm:text-base"
                height="60"
              >
                <a
                  href="https://x.com/paradigm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FOLLOW ON X
                </a>
              </Button>
            </WithCursor>
          </div>
          {/* Date and Location */}
          <div className="mt-3 max-sm:mt-2 w-full">
            {/* Mobile version - single line, no wrap */}
            <div className="flex flex-col items-center sm:hidden w-full">
              <Text
                fontFamily="typewriter"
                className="text-[15px] tracking-widest text-white/80 pb-2 border-b border-white/20 mb-2 max-sm:text-[13px] max-sm:pb-1 max-sm:mb-1 max-sm:tracking-normal max-sm:leading-tight"
              >
                <span className="whitespace-nowrap">AUGUST 6-8, 2025 &nbsp;•&nbsp; SAN FRANCISCO & ONLINE</span>
              </Text>
            </div>
            {/* Desktop version - horizontal with dot separators */}
            <div className="hidden sm:block text-center">
              <Text
                fontFamily="typewriter"
                className="text-[15px] tracking-widest text-white/80"
              >
                AUGUST 6-8, 2025 &nbsp;&nbsp;&bull;&nbsp;&nbsp;{' '}
                SAN FRANCISCO
                & ONLINE
              </Text>
            </div>
          </div>
        </div>
      </Section>
      {/* SCROLL TO LEARN MORE TEXT */}
      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
          <Text
            fontFamily="typewriter"
            size="12"
            className="text-white animate-subtle-pulse tracking-wider uppercase whitespace-nowrap max-sm:text-[11px]"
          >
            SCROLL TO LEARN MORE
          </Text>
        </div>
      )}
    </div>
  );
}

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
  );
}

function ProjectFlag({
  anchor,
  image,
}: {
  anchor: "top" | "left" | "right" | "bottom";
  image: ReactElement;
}) {
  return (
    <div
      className={clsx(
        "flex",
        anchor === "top" || anchor === "bottom" ? "flex-col" : undefined
      )}
    >
      {(anchor === "left" || anchor === "top") && (
        <div className="bg-black flex items-center justify-center w-[16px] h-[16px]">
          <div className="bg-white w-[6px] h-[6px]" />
        </div>
      )}
      <div className="bg-black flex items-center justify-center w-[56px] h-[56px]">
        {image}
      </div>
      {(anchor === "right" || anchor === "bottom") && (
        <div className="bg-black flex items-center justify-center w-[16px] h-[16px]">
          <div className="bg-white w-[6px] h-[6px]" />
        </div>
      )}
    </div>
  );
}
