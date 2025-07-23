"use client";

import Image from "next/image";
import { Button } from "~/ui/Button";
import { WithCursor } from "~/ui/WithCursor";

export function BadgeCard() {
  return (
    <div className="w-auto max-w-[350px] relative mt-12 lg:mt-0">
      <div className="relative">
        <Image
          src="/images/badge.svg"
          alt="Event badge"
          width={350}
          height={552}
          className="h-auto"
          priority
        />
        <div className="absolute bottom-[24px] bg-black mx-4 inset-x-0 flex justify-center">
          <WithCursor cursor="pulse-crosshair">
            <Button
              color="disabled"
              height="50"
              className="w-[98%]"
              data-typeform-link="true"
            >
              APPS CLOSED
            </Button>
          </WithCursor>
        </div>
      </div>
    </div>
  );
}
