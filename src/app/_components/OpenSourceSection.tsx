"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "~/ui/Section";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  logoSrc: string;
  githubUrl: string;
  stars: string;
  contributors: string;
  isLoading?: boolean;
}

interface ProjectData {
  name: string;
  description: string;
  logoSrc: string;
  githubUrl: string;
  repo: string; // Format: "owner/repo"
}

const projectsData: ProjectData[] = [
  {
    name: "reth",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/reth-logo.svg",
    githubUrl: "https://github.com/paradigmxyz/reth",
    repo: "paradigmxyz/reth",
  },
  {
    name: "foundry",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/foundry-logo.svg",
    githubUrl: "https://github.com/foundry-rs/foundry",
    repo: "foundry-rs/foundry",
  },
  {
    name: "porto",
    description: "A library for authentication & payments on the web.",
    logoSrc: "/images/logos/porto-logo.svg",
    githubUrl: "https://github.com/paradigmxyz/porto",
    repo: "paradigmxyz/porto",
  },
  {
    name: "wagmi",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/wagmi-logo.svg",
    githubUrl: "https://github.com/wevm/wagmi",
    repo: "wevm/wagmi",
  },
  {
    name: "viem",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/viem-logo.svg",
    githubUrl: "https://github.com/wevm/viem",
    repo: "wevm/viem",
  },
  {
    name: "alloy",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/alloy-logo.svg",
    githubUrl: "https://github.com/alloy-rs",
    repo: "alloy-rs/alloy",
  },
  {
    name: "cryo",
    description: "Fast extraction of blockchain data.",
    logoSrc: "/images/logos/cryo-logo.svg",
    githubUrl: "https://github.com/paradigmxyz/cryo",
    repo: "paradigmxyz/cryo",
  },
  {
    name: "revm",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/revm-logo.svg",
    githubUrl: "https://github.com/bluealloy/revm",
    repo: "bluealloy/revm",
  },
];

// Function to format numbers with commas
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4 text-white/50"
  >
    <path d="M8 1.75a.75.75 0 01.651.404l1.688 3.418 3.773.548a.75.75 0 01.416 1.285l-2.73 2.661.644 3.758a.75.75 0 01-1.088.791L8 12.327l-3.366 1.768a.75.75 0 01-1.088-.79l.644-3.759L1.472 7.405a.75.75 0 01.416-1.285l3.773-.548L7.35 2.154A.75.75 0 018 1.75z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-4 h-4 text-white/50"
  >
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM1.5 14.5a3 3 0 013-3h5a3 3 0 013 3v.5H13a.5.5 0 000-1h-.5a1.5 1.5 0 00-3 0H8a4 4 0 00-7.75 1.362A.5.5 0 00.5 15H0v.5a.5.5 0 00.5.5H.75v2.5a.75.75 0 001.5 0V16h10.5a.75.75 0 000-1.5H12a1.5 1.5 0 00-3 0H7.5a3 3 0 01-3 3H1.5v-.5z" />
  </svg>
);

function ProjectCard({
  name,
  description,
  logoSrc,
  githubUrl,
  stars,
  contributors,
  isLoading = false,
}: ProjectCardProps) {
  return (
    <WithCursor cursor="external">
      <Link
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="bg-spaceBlack border border-white/10 rounded-sm flex flex-col p-4 sm:p-6 h-full group hover:opacity-80 transition-opacity duration-200">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3 flex-shrink-0">
              <Image
                src={logoSrc}
                alt={`${name} logo`}
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
              />
            </div>
            <Text
              asChild
              size="20"
              weight="400"
              fontFamily="typewriter"
              className="text-white text-base sm:text-lg md:text-xl"
            >
              <h3>{name}</h3>
            </Text>
          </div>
          <Text
            size="14"
            fontFamily="default"
            className="text-white/50 mb-3 sm:mb-4 flex-grow text-xs sm:text-sm md:text-base"
          >
            {description}
          </Text>
          <div className="flex items-center gap-2 sm:gap-4 text-white/50 mt-auto pt-3 sm:pt-4 border-t border-white/5 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <StarIcon />
              <Text size="12" fontFamily="typewriter">
                {isLoading ? "Loading..." : `${stars} stars`}
              </Text>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <UsersIcon />
              <Text size="12" fontFamily="typewriter">
                {isLoading ? "Loading..." : `${contributors} contributors`}
              </Text>
            </div>
          </div>
        </div>
      </Link>
    </WithCursor>
  );
}

export function OpenSourceSection() {
  const [projects, setProjects] = useState<ProjectCardProps[]>(
    projectsData.map((project) => ({
      ...project,
      stars: "0",
      contributors: "0",
      isLoading: true,
    }))
  );

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const updatedProjects = await Promise.all(
          projectsData.map(async (project) => {
            try {
              // Fetch repo stats
              const repoResponse = await fetch(
                `https://api.github.com/repos/${project.repo}`
              );

              if (!repoResponse.ok) {
                throw new Error(`GitHub API error: ${repoResponse.statusText}`);
              }

              const repoData = await repoResponse.json();

              // Fetch contributors count
              const contributorsResponse = await fetch(
                `https://api.github.com/repos/${project.repo}/contributors?per_page=1&anon=true`
              );

              let contributorsCount = 0;

              if (contributorsResponse.ok) {
                // Get total count from Link header
                const linkHeader = contributorsResponse.headers.get("Link");
                if (linkHeader) {
                  const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
                  if (match) {
                    contributorsCount = parseInt(match[1], 10);
                  }
                } else {
                  // If no Link header, there's only one page of contributors
                  const contributors = await contributorsResponse.json();
                  contributorsCount = contributors.length;
                }
              }

              return {
                ...project,
                stars: formatNumber(repoData.stargazers_count),
                contributors: formatNumber(contributorsCount),
                isLoading: false,
              };
            } catch (error) {
              console.error(`Error fetching stats for ${project.name}:`, error);
              return {
                ...project,
                stars: "N/A",
                contributors: "N/A",
                isLoading: false,
              };
            }
          })
        );

        setProjects(updatedProjects);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <Section className="py-12 sm:py-20 md:py-28 w-full bg-black">
      <div id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          fontFamily="default"
          className="!text-4xl sm:!text-6xl md:!text-7xl text-center mb-5 sm:mb-8 px-2"
          weight="400"
        >
          Start hacking <span className="italic">today</span>
        </SectionHeading>
        <Text
          size="18"
          fontFamily="default"
          className="text-center text-white/70 mb-10 sm:mb-16 md:mb-20 max-w-xs sm:max-w-2xl mx-auto px-2"
        >
          Find our open source products & libraries below as you start building.
        </Text>
        <div className="grid grid-cols-1 xs:grid-cols-2 tablet:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
