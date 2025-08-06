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
import { ConnectModal } from "./ConnectModal";

export function HeroSection() {
  const { ref, inView } = useInView({ initialInView: true, threshold: 0 });
  const { setShow } = useContext(TopNavContext);
  useEffect(() => setShow(!inView), [inView, setShow]);

  // State and effect for scroll indicator
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
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

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      const href = anchor?.getAttribute('href');
      if (anchor && href?.startsWith('#')) {
        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offset = window.innerHeight * 0.2; // 20% of viewport height
          window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener to the document for all anchor clicks
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div ref={ref} className="relative h-screen w-screen">
      {/* Hero Section Navigation */}
      <nav className="absolute top-0 left-0 w-full flex justify-center pt-8 sm:pt-10 md:pt-14 z-20">
        <ul className="flex flex-wrap justify-center items-center gap-5 sm:gap-4 md:gap-6 px-4 sm:px-3 md:px-10 py-1 sm:py-2 md:py-2">
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14" className="sm:text-[13px] md:text-[14px]">
              <a href="#livestream" className="hover:underline">
                STREAM
              </a>
            </Text>
          </li>
          <li className="text-xl sm:text-base md:text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14" className="sm:text-[13px] md:text-[14px]">
              <a href="#to-our-builders" className="hover:underline">
                ABOUT
              </a>
            </Text>
          </li>
          <li className="text-xl sm:text-base md:text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14" className="sm:text-[13px] md:text-[14px]">
              <a href="#agenda" className="hover:underline">
                AGENDA
              </a>
            </Text>
          </li>
          <li className="text-xl sm:text-base md:text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14" className="sm:text-[13px] md:text-[14px]">
              <a href="#speakers" className="hover:underline">
                SPEAKERS
              </a>
            </Text>
          </li>
          <li className="text-xl sm:text-base md:text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14" className="sm:text-[13px] md:text-[14px]">
              <a href="#faqs" className="hover:underline">
                FAQ
              </a>
            </Text>
          </li>
          <li className="text-xl sm:text-base md:text-xl text-white font-typewriter hidden sm:block">
            &middot;
          </li>
          <li className="mb-2 sm:mb-0">
            <Text asChild fontFamily="typewriter" size="14" className="sm:text-[13px] md:text-[14px]">
              <a href="#projects" className="hover:underline">
                OSS
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
          {/* Logo */}
          <div className="flex items-center flex-col z-[1] mix-blend-exclusion px-4 sm:px-6 mb-8 sm:mb-6">
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
          </div>
          {/* Subtitle */}
          <div className="-mt-2 mb-2 w-full flex justify-center">
            <Text
              className="text-center text-gray-300 text-xl max-w-[600px] font-serif max-sm:leading-tight max-sm:px-2"
              asChild
              size="20"
            >
              <p>
                Paradigm's annual open source conference for application and infrastructure developers.
              </p>
            </Text>
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 mt-2 w-full px-4 max-w-[400px] max-sm:px-0 items-center justify-center">
            <WithCursor cursor="pulse-crosshair">
              <Button
                frame
                color="paradigmGreen"
                className="w-full sm:min-w-[240px] px-6 sm:px-10 max-sm:h-[48px] max-sm:text-base"
                height="60"
                onClick={() => setConnectModalOpen(true)}
              >
                CONNECT NOW
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
          <div className="mt-6 sm:mt-8 w-full">
            <div className="flex flex-row items-center w-full gap-2 justify-center">
              <Text
                fontFamily="typewriter"
                className="text-sm tracking-wider text-white/80 text-center max-sm:leading-tight"
              >
                AUGUST 6-8, 2025
              </Text>
              <span className="hidden sm:inline text-white/50 text-base mx-2">&middot;</span>
              <span className="inline sm:hidden text-white/50 text-base mx-1">&bull;</span>
              <Text
                fontFamily="typewriter"
                className="text-sm tracking-wider text-white/80 text-center max-sm:leading-tight"
              >
                SF & ONLINE
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

      {/* Connect Modal */}
      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
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
