import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./styles.css";
import { getFrameMetadata } from "frog/next";
import { WithCursor } from "../ui/WithCursor";
import { Providers } from "./_components/Providers";
import { TopNav } from "./_components/TopNav";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://frontiers.paradigm.xyz";
  const {
    "og:title": _,
    "og:image": __,
    ...frameMetadata
  } = await getFrameMetadata(`${url}/api`);
  return {
    title: "Paradigm Frontiers | August 6-8, 2025",
    description:
      "Paradigm's annual open source conference and hackathon, bringing together developers, researchers, and enthusiasts to explore and build at the cutting edge of crypto.",
    icons: [{ rel: "icon", url: "/images/favicon.png" }],
    twitter: {
      card: "summary_large_image",
      title: "Paradigm Frontiers | August 6-8, 2025",
      description:
        "Paradigm's annual open source conference and hackathon, bringing together developers, researchers, and enthusiasts to explore and build at the cutting edge of crypto.",
      images: [
        {
          url: `${url}/images/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    openGraph: {
      title: "Paradigm Frontiers | August 6-8, 2025",
      description:
        "Paradigm's annual open source conference and hackathon, bringing together developers, researchers, and enthusiasts to explore and build at the cutting edge of crypto.",
      images: [
        {
          url: `${url}/images/og.png`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      siteName: "Paradigm Frontiers",
      locale: "en_US",
    },
    other: frameMetadata,
  };
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <WithCursor cursor="box">
          <div className="selection:bg-paradigmGreen selection:text-black overflow-x-hidden">
            <Providers>
              <TopNav />
              <main className="">{children}</main>
            </Providers>
          </div>
        </WithCursor>
      </body>
    </html>
  );
}
