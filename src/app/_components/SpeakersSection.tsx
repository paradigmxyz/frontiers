"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "~/ui/Section";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";
import clsx from "clsx";

interface SpeakerProfile {
  name: string;
  affiliation: string;
  imageSrc: string;
  twitterUrl?: string;
  githubUrl?: string;
}

const speakerData: SpeakerProfile[] = [
  {
    name: "Georgios Konstantopoulos",
    affiliation: "Paradigm & Ithaca",
    imageSrc: "/images/gk.png",
    twitterUrl: "https://twitter.com/gakonst",
    githubUrl: "https://github.com/gakonst",
  },
  {
    name: "Tomasz K. Stańczak",
    affiliation: "Ethereum Foundation",
    imageSrc: "/images/tomasz.jpg",
    githubUrl: "https://github.com/tkstanczak",
  },
  {
    name: "Matthias Seitz",
    affiliation: "Paradigm & Ithaca",
    imageSrc: "/images/matt.png",
    twitterUrl: "https://twitter.com/mattsse_",
    githubUrl: "https://github.com/mattsse",
  },
  {
    name: "Storm Slivkoff",
    affiliation: "Paradigm & Ithaca",
    imageSrc: "/images/storm.png",
    twitterUrl: "https://twitter.com/notnotstorm",
    githubUrl: "https://github.com/sslivkoff",
  },
  {
    name: "Sofiane Larbi",
    affiliation: "Paradigm",
    imageSrc: "/images/sofiane.jpg",
    twitterUrl: "https://twitter.com/sofianeflarbi",
    githubUrl: "https://github.com/sofianel5",
  },
  {
    name: "Tom Meagher",
    affiliation: "Paradigm & Ithaca",
    imageSrc: "/images/tom.png",
    twitterUrl: "https://twitter.com/awkweb",
    githubUrl: "https://github.com/awkweb",
  },
];

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const GitHubIcon = () => (
  <Image
    src="/images/github-logo.svg"
    alt="GitHub Profile"
    width={16}
    height={16}
    className="text-white"
  />
);

function SpeakerCard({
  name,
  affiliation,
  imageSrc,
  twitterUrl,
  githubUrl,
}: SpeakerProfile) {
  const isPlaceholderImage = imageSrc.includes("placeholder");

  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div className="bg-spaceBlack border border-white/10 rounded-sm flex flex-col p-6 relative group">
      <div className="absolute top-4 right-4 flex items-center gap-3">
        {twitterUrl && (
          <WithCursor cursor="external">
            <Link
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on X`}
            >
              <div className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                <XIcon />
              </div>
            </Link>
          </WithCursor>
        )}
        {githubUrl && (
          <WithCursor cursor="external">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on GitHub`}
            >
              <div className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                <GitHubIcon />
              </div>
            </Link>
          </WithCursor>
        )}
      </div>
      <div
        className={clsx(
          "w-28 h-28 rounded-full overflow-hidden mb-4 relative",
          isPlaceholderImage &&
            "bg-neutral-800 flex items-center justify-center"
        )}
      >
        <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />
        {isPlaceholderImage && (
          <Text size="11" fontFamily="typewriter" className="text-neutral-500">
            PHOTO
          </Text>
        )}
      </div>
      <Text
        asChild
        size="20"
        weight="400"
        fontFamily="default"
        className="text-white mb-2 leading-tight"
      >
        <h3>
          <span className="text-4xl">{firstName}</span>
          {lastName && <br />}
          {lastName}
        </h3>
      </Text>
      <Text
        size="12"
        fontFamily="typewriter"
        className="text-white/50 pt-2 uppercase tracking-wider"
      >
        {affiliation}
      </Text>
    </div>
  );
}

export function SpeakersSection() {
  return (
    <Section className="py-20 sm:py-28 w-full bg-black">
      <div id="speakers" className="max-w-[940px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          fontFamily="default"
          className="!text-6xl sm:!text-7xl text-left mb-12 sm:mb-16"
          weight="400"
        >
          Our <span className="italic">speakers</span>
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 gap-6 mb-12">
          {speakerData.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="flex-grow h-px bg-white/10"></div>
          <Text
            fontFamily="default"
            size="24"
            className="text-center text-white/50 italic px-6"
          >
            ...and more
          </Text>
          <div className="flex-grow h-px bg-white/10"></div>
        </div>
      </div>
    </Section>
  );
}
