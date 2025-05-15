import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { Text, type TextProps } from "./Text";

export function Section({
  children,
  className,
}: PropsWithChildren<{ className?: string | undefined }>) {
  return (
    <section className={clsx("relative z-10", className)}>{children}</section>
  );
}

export function SectionHeading({
  children,
  id,
  className,
  fontFamily = "typewriter",
  size = "28",
  ...textProps
}: PropsWithChildren<
  { className?: string | undefined; id?: string } & Partial<TextProps>
>) {
  return (
    <>
      <div className="absolute -mt-[120px]" id={id} />
      <Text
        fontFamily={fontFamily}
        size={size}
        className={className}
        {...textProps}
      >
        <h2>{children}</h2>
      </Text>
    </>
  );
}
