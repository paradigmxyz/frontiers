"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Section, SectionHeading } from "~/ui/Section";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";

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

interface GitHubStats {
  stars: string;
  contributors: string;
}

const projectsData: ProjectData[] = [
  {
    name: "reth",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/reth.png",
    githubUrl: "https://github.com/paradigmxyz/reth",
    repo: "paradigmxyz/reth",
  },
  {
    name: "foundry",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/foundry.png",
    githubUrl: "https://github.com/foundry-rs/foundry",
    repo: "foundry-rs/foundry",
  },
  {
    name: "porto",
    description: "A library for authentication & payments on the web.",
    logoSrc: "/images/logos/porto.png",
    githubUrl: "https://github.com/ithacaxyz/porto",
    repo: "ithacaxyz/porto",
  },
  {
    name: "wagmi",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/wagmi.png",
    githubUrl: "https://github.com/wevm/wagmi",
    repo: "wevm/wagmi",
  },
  {
    name: "viem",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/viem.png",
    githubUrl: "https://github.com/wevm/viem",
    repo: "wevm/viem",
  },
  {
    name: "alloy",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/alloy.png",
    githubUrl: "https://github.com/alloy-rs",
    repo: "alloy-rs/alloy",
  },
  {
    name: "cryo",
    description: "Fast extraction of blockchain data.",
    logoSrc: "/images/logos/cryo.png",
    githubUrl: "https://github.com/paradigmxyz/cryo",
    repo: "paradigmxyz/cryo",
  },
  {
    name: "revm",
    description:
      "Blazing fast, portable and modular toolkit for Ethereum application development.",
    logoSrc: "/images/logos/revm.png",
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
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-4"
  >
    <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
  </svg>
);

// GitHub stats cache with pre-populated values to avoid rate limiting
// These values can be updated periodically in the code instead of hitting the API every time
const GITHUB_STATS_CACHE: Record<string, GitHubStats> = {
  "paradigmxyz/reth": { stars: "4,635", contributors: "555" },
  "foundry-rs/foundry": { stars: "8,901", contributors: "502" },
  "ithacaxyz/porto": { stars: "307", contributors: "12" },
  "wevm/wagmi": { stars: "6,303", contributors: "267" },
  "wevm/viem": { stars: "2,924", contributors: "560" },
  "alloy-rs/alloy": { stars: "864", contributors: "180" },
  "paradigmxyz/cryo": { stars: "1,357", contributors: "29" },
  "bluealloy/revm": { stars: "1,857", contributors: "189" },
};

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
            <div className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3 flex-shrink-0 overflow-hidden rounded-full">
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
            size="16"
            fontFamily="default"
            className="text-white/70 mb-3 sm:mb-4 flex-grow text-sm sm:text-base md:text-lg"
          >
            {description}
          </Text>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/50 mt-auto pt-3 sm:pt-4 border-t border-white/5 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <StarIcon />
              <Text size="12" fontFamily="typewriter">
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <span className="text-white font-bold">{stars}</span> stars
                  </>
                )}
              </Text>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <UsersIcon />
              <Text size="12" fontFamily="typewriter">
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <span className="text-white font-bold">{contributors}</span>{" "}
                    contributors
                  </>
                )}
              </Text>
            </div>
          </div>
        </div>
      </Link>
    </WithCursor>
  );
}

function ContributeCard() {
  return (
    <WithCursor cursor="external">
      <Link
        href="https://github.com/paradigmxyz"
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="bg-spaceBlack border border-white/10 rounded-sm flex flex-col p-4 sm:p-6 h-full group hover:opacity-80 transition-opacity duration-200 border-dashed">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/logos/paradigm.png"
                alt="Paradigm logo"
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
              <h3>Contribute now</h3>
            </Text>
          </div>
          <Text
            size="16"
            fontFamily="default"
            className="text-white/70 mb-3 sm:mb-4 flex-grow text-sm sm:text-base md:text-lg"
          >
            Explore more open source projects on the Paradigm GitHub
            organization.
          </Text>
          <div className="flex items-center justify-center mt-auto pt-3 sm:pt-4 border-t border-white/5">
            <Text
              size="14"
              fontFamily="typewriter"
              className="text-paradigmGreen"
            >
              View all repositories →
            </Text>
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

  // Function to try fetching GitHub stats with rate limiting protection
  const fetchGitHubStatsWithCache = async () => {
    try {
      // Immediately load cached values
      const cachedProjects = projectsData.map((project) => {
        const cachedStats = GITHUB_STATS_CACHE[project.repo];
        return {
          ...project,
          stars: cachedStats?.stars || "N/A",
          contributors: cachedStats?.contributors || "N/A",
          isLoading: false,
        };
      });

      // Update with cached values first
      setProjects(cachedProjects);

      // Only try to fetch fresh data if we're not in production
      // or once per day based on localStorage timestamp
      const shouldFetchFresh = () => {
        if (typeof window === "undefined") return false;

        const lastFetch = localStorage.getItem("github_stats_last_fetch");
        if (!lastFetch) return true;

        const dayInMs = 24 * 60 * 60 * 1000;
        return Date.now() - parseInt(lastFetch) > dayInMs;
      };

      // Skip API calls if we shouldn't fetch fresh data
      if (!shouldFetchFresh()) return;

      // If we should update, try to fetch fresh data
      const freshProjects = await Promise.all(
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

            // Update the cache with fresh values
            GITHUB_STATS_CACHE[project.repo] = {
              stars: formatNumber(repoData.stargazers_count),
              contributors: formatNumber(contributorsCount),
            };

            return {
              ...project,
              stars: formatNumber(repoData.stargazers_count),
              contributors: formatNumber(contributorsCount),
              isLoading: false,
            };
          } catch (error) {
            console.error(`Error fetching stats for ${project.name}:`, error);
            // Return cached value on error
            const cachedStats = GITHUB_STATS_CACHE[project.repo];
            return {
              ...project,
              stars: cachedStats?.stars || "N/A",
              contributors: cachedStats?.contributors || "N/A",
              isLoading: false,
            };
          }
        })
      );

      // Update with fresh values
      setProjects(freshProjects);

      // Update the timestamp for when we last fetched
      if (typeof window !== "undefined") {
        localStorage.setItem("github_stats_last_fetch", Date.now().toString());
      }
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
    }
  };

  useEffect(() => {
    fetchGitHubStatsWithCache();
  }, []);

  return (
    <Section className="py-12 sm:py-20 md:py-28 w-full bg-black">
      <div id="projects" className="max-w-[940px] mx-auto w-full">
        <SectionHeading
          fontFamily="default"
          className="!text-6xl sm:!text-7xl text-left pl-5 sm:pl-8 lg:pl-10 mb-12 sm:mb-16"
          weight="400"
        >
          Our open source software
        </SectionHeading>

        <div className="flex flex-row flex-wrap px-5 sm:px-8 lg:px-10">
          {projects.slice(0, 8).map((project) => (
            <div key={project.name} className="w-1/2 p-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
