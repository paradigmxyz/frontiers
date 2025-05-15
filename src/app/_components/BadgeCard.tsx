"use client";

import Image from "next/image";
import { Button } from "~/ui/Button";
import { WithCursor } from "~/ui/WithCursor";

export function BadgeCard() {
  return (
    <div className="w-auto max-w-[350px] relative">
      <div className="relative">
        <Image
          src="/images/badge.svg"
          alt="Event badge"
          width={350}
          height={552}
          className="h-auto"
          priority
        />
        <div className="absolute bottom-[24px] inset-x-0 flex justify-center">
          <WithCursor cursor="pulse-crosshair">
            <Button
              color="paradigmGreen"
              height="50"
              className="w-[90%]"
              onClick={() => window.open("https://7dr10b0z31d.typeform.com/Frontiers2025", "_self")}
              data-typeform-link="true"
            >
              APPLY NOW!
            </Button>
          </WithCursor>
        </div>
      </div>
    </div>
  );
}
