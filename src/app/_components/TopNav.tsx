"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

import { Button } from "~/ui/Button";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";
import { ConnectModal } from "./ConnectModal";

import "./TopNav.css";

export const TopNavContext = createContext({
  show: false,
  setShow: (_: boolean) => { },
});

export function TopNavProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);
  return (
    <TopNavContext.Provider value={{ show, setShow }}>
      {children}
    </TopNavContext.Provider>
  );
}

export function TopNav() {
  const { show } = useContext(TopNavContext);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  if (!show) return null;
  return (
    <Dialog.Root>
      <div className="fixed flex flex-col gap-4 top-0 z-50 p-[20px] animate-[0.3s_nav-enter_ease] w-full">
        <div className="relative px-[32px] max-mobile:px-[20px] h-[72px] max-mobile:h-[56px]">
          <div className="bg-black border border-white border-opacity-20 absolute left-0 top-0 right-0 bottom-0 rounded-[40px] z-0" />
          <div className="relative z-[1] flex items-center justify-between w-full h-full">
            <div className="flex hidden sm:flex">
              <Text
                className="flex justify-center items-center text-[12px]"
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
            <div className="flex sm:hidden">
              <Image
                alt="Frontiers logo"
                src="/images/frontiers.svg"
                width="111"
                height="25"
              />
            </div>
            <div className="absolute left-[50%] -translate-x-1/2 hidden sm:block">
              <Text size="24">Frontiers</Text>
            </div>
            <div className="-mr-[18px] hidden sm:block">
              <WithCursor cursor="pulse-crosshair">
                <Button
                  color="paradigmGreen"
                  onClick={() => setConnectModalOpen(true)}
                >
                  GET ONLINE
                </Button>
              </WithCursor>
            </div>
            <Dialog.Trigger className="sm:hidden">
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Dialog.Trigger>
          </div>
        </div>
        <Dialog.Content className="bg-black p-[32px] bg-opacity-90 border border-white border-opacity-20 animate-[0.1s_nav-enter_ease] rounded-[40px]">
          <nav className="flex flex-col items-center gap-8">
            <Text asChild fontFamily="typewriter" size="24">
              <Dialog.Close asChild className="focus:outline-none">
                <a href="#to-our-builders" className="no-underline text-white hover:opacity-80">MANIFESTO</a>
              </Dialog.Close>
            </Text>
            <Text asChild fontFamily="typewriter" size="24">
              <Dialog.Close asChild className="focus:outline-none">
                <a href="#agenda" className="no-underline text-white hover:opacity-80">AGENDA</a>
              </Dialog.Close>
            </Text>
            <Text asChild fontFamily="typewriter" size="24">
              <Dialog.Close asChild className="focus:outline-none">
                <a href="#speakers" className="no-underline text-white hover:opacity-80">SPEAKERS</a>
              </Dialog.Close>
            </Text>
            <Text asChild fontFamily="typewriter" size="24">
              <Dialog.Close asChild className="focus:outline-none">
                <a href="#faqs" className="no-underline text-white hover:opacity-80">FAQs</a>
              </Dialog.Close>
            </Text>
            <Text asChild fontFamily="typewriter" size="24">
              <Dialog.Close asChild className="focus:outline-none">
                <a href="#projects" className="no-underline text-white hover:opacity-80">OPEN SOURCE</a>
              </Dialog.Close>
            </Text>
            <Text asChild fontFamily="typewriter" size="24">
              <Dialog.Close asChild className="focus:outline-none">
                <a href="#pre-reads" className="no-underline text-white hover:opacity-80">PRE-READs</a>
              </Dialog.Close>
            </Text>
          </nav>
        </Dialog.Content>
      </div>

      {/* Connect Modal */}
      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
    </Dialog.Root>
  );
}
