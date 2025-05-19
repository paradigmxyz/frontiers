"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "~/ui/Section";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";

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
    affiliation: "Paradigm, Ithaca",
    imageSrc: "/images/gk.png",
    twitterUrl: "https://twitter.com/gakonst",
    githubUrl: "https://github.com/gakonst",
  },
  {
    name: "Tomasz K. Stańczak",
    affiliation: "Ethereum Foundation",
    imageSrc: "/images/tomasz.jpg",
    githubUrl: "https://github.com/tkstanczak",
    twitterUrl: "https://x.com/tkstanczak",
  },
  {
    name: "Matthias Seitz",
    affiliation: "Paradigm, Ithaca",
    imageSrc: "/images/matt.png",
    twitterUrl: "https://twitter.com/mattsse_",
    githubUrl: "https://github.com/mattsse",
  },
  {
    name: "Storm Slivkoff",
    affiliation: "Paradigm",
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
    affiliation: "Wevm, Paradigm, Ithaca",
    imageSrc: "/images/tom.png",
    twitterUrl: "https://twitter.com/awkweb",
    githubUrl: "https://github.com/awkweb",
  },
  {
    name: "George Niculae",
    affiliation: "Ithaca",
    imageSrc: "/images/george.png",
    twitterUrl: "https://x.com/gndizzy",
    githubUrl: "https://github.com/dizzy",
  },
  {
    name: "Henri Stern",
    affiliation: "Privy",
    imageSrc: "/images/henri.png",
    twitterUrl: "https://x.com/henri_stern",
    githubUrl: "https://github.com/sternhenri",
  },
];

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <Image
    src="/images/github-logo.svg"
    alt="GitHub Profile"
    width={20}
    height={20}
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

  return (
    <div className="bg-spaceBlack border border-white/10 rounded-sm flex items-center justify-start p-5 relative group">

      {/* Photo */}
      <div
        className={clsx(
          "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 mr-5 flex items-center justify-center",
          isPlaceholderImage && "bg-neutral-800"
        )}
      >
        <Image
          src={imageSrc}
          alt={name}
          width={96}
          height={96}
          className="object-cover w-full h-full aspect-square"
        />
        {isPlaceholderImage && (
          <Text size="11" fontFamily="typewriter" className="text-neutral-500">
            PHOTO
          </Text>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <Text
          asChild
          size="24"
          weight="400"
          fontFamily="default"
          className="text-white pb-1 leading-[1.1] text-[20px] sm:text-[26px]"
        >
          <h3>
            <span className="block md:hidden">{name}</span>
            <span className="hidden md:inline">{(() => {
              const [first, ...rest] = name.split(' ');
              return <>{first}<br />{rest.join(' ')}</>;
            })()}</span>
          </h3>
        </Text>
        <Text
          size="12"
          fontFamily="typewriter"
          className="text-white/50 my-1 sm:my-2 uppercase text-[11px] sm:text-[12px] tracking-normal"
        >
          {affiliation}
        </Text>

        {/* Social Links */}
        <div className="flex flex-row h-full items-center gap-2 justify-start mt-2">
          {twitterUrl && (
            <WithCursor cursor="external">
              <Link
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on X`}
                className="block"
              >
                <div className="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
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
                className="block"
              >
                <div className="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                  <GitHubIcon />
                </div>
              </Link>
            </WithCursor>
          )}
        </div>
      </div>
    </div>
  );
}

export function SpeakersSection() {
  return (
    <Section className="py-20 sm:py-28 w-full bg-black">
      <div id="speakers" className="max-w-[940px] md:max-w-[1100px] lg:max-w-[900px] md:max-w-[90vw] mx-auto w-full px-4">
        <SectionHeading
          fontFamily="default"
          className="!text-6xl sm:!text-7xl text-center mb-12 sm:mb-16"
          weight="400"
        >
          Our <span className="italic">speakers</span>
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-12 mb-12 px-5 sm:px-8 lg:px-10">
          {speakerData.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-12 px-5 sm:px-8 lg:px-10">
          <div className="flex-grow h-px bg-white/10" />
          <Text
            fontFamily="default"
            size="24"
            className="text-center text-white/50 italic px-6"
          >
            ...and more
          </Text>
          <div className="flex-grow h-px bg-white/10" />
        </div>
      </div>
    </Section>
  );
}
