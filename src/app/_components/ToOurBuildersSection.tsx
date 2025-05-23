import clsx from "clsx";
import Image from "next/image";

import { Button } from "~/ui/Button";
import { Section, SectionHeading } from "~/ui/Section";
import { Text } from "~/ui/Text";
import { WithCursor } from "~/ui/WithCursor";
import { BadgeCard } from "./BadgeCard";

export function ToOurBuildersSection() {
  return (
    <Section className="flex flex-col pb-12 max-mobile:pb-16 pt-0 mt-0 w-full mx-auto overflow-x-hidden">
      <div className="w-full max-w-[940px] md:max-w-[90vw] sm:max-w-[85vw] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Left Column: Crypto is in its application era */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-[32px] max-mobile:gap-[28px] max-mobile:mt-2">
              <SectionHeading
                id="to-our-builders"
                fontFamily="default"
                className="!text-6xl sm:!text-7xl text-left mb-4 md:mb-4 max-mobile:!text-5xl"
                weight="400"
              >
                To our <span className="italic">builders</span>
              </SectionHeading>
              <Text asChild size={"18"} className="max-mobile:text-[16px]">
                <p>
                  The (crypto) world is changing faster than we can comprehend.
                </p>
              </Text>
              <Text asChild size={"18"} className="max-mobile:text-[16px]">
                <p>
                  Crypto enables small teams to have outsized impact through open source, shared financial infrastructure. Stablecoins have
                  become the first mainstream crypto use case, and AI is multiplying developer productivity. Acceleration is the new normal.
                </p>
              </Text>
              <Text asChild size={"18"} className="max-mobile:text-[16px]">
                <p>
                  Frontiers is our intense two-day conference & hackathon, where developers learn and build the next generation of crypto applications and infrastructure.
                  Our team will be on-site to meet, and advise builders on their projects.
                </p>
              </Text>
              <Text asChild size={"18"} className="max-mobile:text-[16px]">
                <p>
                  At Paradigm, we believe the best way to understand and shape this future is to build it in the trenches
                  with the developer community, and we have been doing just that for the past six years with our wide suite of <a href="#projects" className="underline">open source software</a> and <a href="https://www.paradigm.xyz/writing?page=1&s=0&sort=newest&tags=research" className="underline">research</a>.
                </p>
              </Text>
              <Text asChild size={"18"} className="max-mobile:text-[16px]">
                <p>
                  Looking forward to seeing you, at the frontier.
                </p>
              </Text>
            </div>

            <div className="flex flex-row gap-8 mt-6 w-full max-sm:mt-4 max-sm:gap-6 max-sm:justify-center">
              {features.map((feature) => (
                <div
                  className="flex flex-row max-sm:flex-col items-center text-left max-sm:items-center max-sm:text-center gap-3 mr-8 max-sm:mr-0"
                  key={feature.name}
                >
                  <div className="size-[40px] flex-shrink-0">
                    {feature.content}
                  </div>
                  <Text
                    size="12"
                    fontFamily="typewriter"
                    className={clsx(
                      "text-wrap mt-1 max-mobile:mt-2 flex items-center",
                      feature.color === "paradigmGreen" && "text-paradigmGreen",
                      feature.color === "violet" && "text-[#F429D5]"
                    )}
                  >
                    {feature.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column: Badge SVG with interactive button */}
          <BadgeCard />
        </div>
      </div>
    </Section>
  );
}

const features = [
  {
    name: "OSS Updates",
    color: "paradigmGreen",
    content: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 71 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Stack updates</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.5711 73.3715C34.2232 73.3715 33.9411 73.0894 33.9411 72.7415V53.5648C33.9411 50.2048 29.8787 48.5221 27.5029 50.898L16.7892 61.6117C16.5431 61.8577 16.1442 61.8577 15.8982 61.6117C15.6522 61.3657 15.6522 60.9668 15.8982 60.7207L26.9807 49.6383C29.3565 47.2624 27.6738 43.2001 24.3139 43.2001L5.6593 43.2C5.31136 43.2 5.0293 42.918 5.0293 42.57C5.0293 42.2221 5.31136 41.94 5.6593 41.94L23.5791 41.9401C26.9391 41.9401 28.6218 37.8777 26.2459 35.5018L15.5325 24.7884C15.2865 24.5424 15.2865 24.1435 15.5325 23.8974C15.7786 23.6514 16.1775 23.6514 16.4235 23.8974L27.5029 34.9768C29.8788 37.3527 33.9411 35.67 33.9411 32.31V13.6586C33.9411 13.3107 34.2232 13.0286 34.5711 13.0286C34.9191 13.0286 35.2011 13.3107 35.2011 13.6586V32.3128C35.2011 35.6728 39.2635 37.3555 41.6394 34.9796L52.7215 23.8974C52.9676 23.6514 53.3665 23.6514 53.6125 23.8974C53.8585 24.1434 53.8585 24.5423 53.6125 24.7884L42.899 35.5018C40.5232 37.8777 42.2058 41.9401 45.5658 41.9401L64.7422 41.9401C65.0901 41.9401 65.3722 42.2221 65.3722 42.5701C65.3722 42.918 65.0901 43.2001 64.7422 43.2001L44.8311 43.2001C41.4711 43.2001 39.7885 47.2624 42.1643 49.6383L54.504 61.9779C54.75 62.2239 54.75 62.6228 54.504 62.8689C54.2579 63.1149 53.859 63.1149 53.613 62.8689L41.6393 50.8952C39.2635 48.5193 35.2011 50.202 35.2011 53.562V72.7415C35.2011 73.0894 34.9191 73.3715 34.5711 73.3715Z"
          fill="#00E100"
        />
        <rect
          x="28.915"
          y="36.9143"
          width="11.3143"
          height="11.3143"
          rx="5.65714"
          fill="#090909"
        />
      </svg>
    ),
  },
  {
    name: "Hacking & Rewards",
    color: "violet",
    content: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 71 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Live hacking</title>
        <rect
          x="10.6842"
          y="17.4286"
          width="21.3714"
          height="21.3714"
          rx="10.6857"
          stroke="#F429D5"
          strokeWidth="1.25714"
        />
        <rect
          x="10.6842"
          y="47.5999"
          width="21.3714"
          height="21.3714"
          rx="10.6857"
          stroke="#F429D5"
          strokeWidth="1.25714"
        />
        <rect
          x="39.6003"
          y="32.5143"
          width="21.3714"
          height="21.3714"
          rx="10.6857"
          stroke="#F429D5"
          strokeWidth="1.25714"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8792 59.1294C19.6447 58.6771 20.1144 57.854 20.1144 56.9648V29.4342C20.1144 28.545 19.6447 27.722 18.8792 27.2696L8.0851 20.8913C7.78622 20.7147 7.68711 20.3292 7.86371 20.0303C8.04032 19.7315 8.42577 19.6324 8.72464 19.809L16.321 24.2977C17.9971 25.2881 20.1144 24.0799 20.1144 22.1331V13.6572C20.1144 13.31 20.3958 13.0286 20.7429 13.0286C21.0901 13.0286 21.3715 13.31 21.3715 13.6572V25.8474C21.3715 26.7366 21.8412 27.5597 22.6067 28.012L45.794 41.7136C46.583 42.1798 47.5632 42.1798 48.3522 41.7136L62.3153 33.4627C62.6142 33.2861 62.9996 33.3852 63.1762 33.684C63.3528 33.9829 63.2537 34.3684 62.9548 34.545L51.9719 41.0349C50.3249 42.0081 50.3249 44.391 51.9719 45.3641L62.9566 51.8551C63.2555 52.0317 63.3546 52.4172 63.178 52.7161C63.0014 53.0149 62.6159 53.114 62.3171 52.9374L48.3522 44.6855C47.5632 44.2192 46.583 44.2192 45.794 44.6855L22.6067 58.387C21.8412 58.8394 21.3715 59.6625 21.3715 60.5517V72.7429C21.3715 73.0901 21.0901 73.3715 20.7429 73.3715C20.3958 73.3715 20.1144 73.0901 20.1144 72.7429V64.2659C20.1144 62.3191 17.9971 61.1109 16.321 62.1013L8.72286 66.5911C8.42399 66.7677 8.03854 66.6686 7.86193 66.3698C7.68533 66.0709 7.78444 65.6854 8.08331 65.5088L18.8792 59.1294ZM21.3715 53.2505C21.3715 55.1974 23.4888 56.4056 25.1649 55.4152L42.1743 45.3641C43.8212 44.391 43.8212 42.0081 42.1743 41.0349L25.1649 30.9839C23.4888 29.9935 21.3715 31.2017 21.3715 33.1485V53.2505Z"
          fill="#F429D5"
        />
      </svg>
    ),
  },
  {
    name: "Cutting Edge Apps",
    color: "",
    content: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>Lightning talks</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.54423 44.4571C8.93264 44.4571 10.0582 45.5826 10.0582 46.971L10.0582 67.7142C10.0582 68.0614 10.3396 68.3428 10.6868 68.3428C11.0339 68.3428 11.3153 68.0614 11.3153 67.7142L11.3153 46.9716C11.3153 45.5829 12.4411 44.4571 13.8299 44.4571C15.2186 44.4571 16.3444 45.5829 16.3444 46.9716L16.3444 60.1713C16.3444 60.5185 16.6258 60.7999 16.973 60.7999C17.3201 60.7999 17.6016 60.5185 17.6016 60.1713L17.6016 46.9705C17.6016 45.5824 18.7269 44.4571 20.115 44.4571H20.7428C21.7842 44.4571 22.6285 45.3013 22.6285 46.3428V47.6C22.6285 47.9471 22.9099 48.2285 23.2571 48.2285C23.6042 48.2285 23.8856 47.9471 23.8856 47.6V46.3428C23.8856 45.3013 24.7299 44.4571 25.7714 44.4571H26.4007C27.7897 44.4571 28.9157 45.5831 28.9157 46.9721L28.9157 55.1428C28.9157 55.4899 29.1971 55.7713 29.5443 55.7713C29.8914 55.7713 30.1729 55.4899 30.1729 55.1428L30.1729 46.9706C30.1729 45.5824 31.2982 44.4571 32.6864 44.4571C34.0746 44.4571 35.1999 45.5824 35.1999 46.9706L35.1999 52.6285C35.1999 52.9756 35.4813 53.257 35.8285 53.257C36.1756 53.257 36.457 52.9756 36.457 52.6285L36.457 46.9716C36.457 45.5828 37.5828 44.4571 38.9715 44.4571C40.3602 44.4571 41.486 45.5828 41.486 46.9716V63.9428C41.486 64.29 41.7674 64.5714 42.1146 64.5714C42.4617 64.5714 42.7432 64.29 42.7432 63.9428V46.9715C42.7432 45.5828 43.8689 44.4571 45.2577 44.4571C46.6464 44.4571 47.7721 45.5828 47.7721 46.9715V53.8856C47.7721 54.2328 48.0536 54.5142 48.4007 54.5142C48.7479 54.5142 49.0293 54.2328 49.0293 53.8856V46.9715C49.0293 45.5828 50.155 44.4571 51.5437 44.4571C52.9324 44.4571 54.0582 45.5828 54.0582 46.9715V50.1142C54.0582 50.4613 54.3396 50.7428 54.6868 50.7428C55.0339 50.7428 55.3153 50.4613 55.3153 50.1142V46.9716C55.3153 45.5829 56.4411 44.4571 57.8299 44.4571C59.2186 44.4571 60.3444 45.5829 60.3444 46.9716V67.7142C60.3444 68.0614 60.6258 68.3428 60.973 68.3428C61.3201 68.3428 61.6016 68.0614 61.6016 67.7142V46.3428C61.6016 45.3014 62.4459 44.4571 63.4874 44.4571H64.7446C65.0917 44.4571 65.3731 44.1756 65.3731 43.8285C65.3731 43.4813 65.0917 43.1999 64.7446 43.1999H63.4874C62.4459 43.1999 61.6016 42.3556 61.6016 41.3141L61.6016 18.6856C61.6016 18.3385 61.3201 18.0571 60.973 18.0571C60.6258 18.0571 60.3444 18.3385 60.3444 18.6856L60.3444 40.6854C60.3444 42.0741 59.2186 43.1999 57.8299 43.1999C56.4411 43.1999 55.3153 42.0741 55.3153 40.6854L55.3153 36.2856C55.3153 35.9385 55.0339 35.6571 54.6868 35.6571C54.3396 35.6571 54.0582 35.9385 54.0582 36.2856L54.0582 40.6855C54.0582 42.0742 52.9324 43.1999 51.5437 43.1999C50.155 43.1999 49.0293 42.0742 49.0293 40.6855L49.0293 36.2856C49.0293 35.9385 48.7479 35.6571 48.4007 35.6571C48.0536 35.6571 47.7721 35.9385 47.7721 36.2856L47.7721 40.6854C47.7721 42.0741 46.6464 43.1999 45.2576 43.1999H44.0003C43.306 43.1999 42.7432 42.6371 42.7432 41.9428V41.3142C42.7432 40.9671 42.4617 40.6857 42.1146 40.6857C41.7674 40.6857 41.486 40.9671 41.486 41.3142V41.9428C41.486 42.6371 40.9232 43.1999 40.2289 43.1999H38.9715C37.5828 43.1999 36.457 42.0741 36.457 40.6854V35.0285C36.457 34.6813 36.1756 34.3999 35.8285 34.3999C35.4813 34.3999 35.1999 34.6813 35.1999 35.0285V40.6864C35.1999 42.0746 34.0746 43.1999 32.6864 43.1999C31.2982 43.1999 30.1729 42.0746 30.1729 40.6864V31.2571C30.1729 30.9099 29.8914 30.6285 29.5443 30.6285C29.1971 30.6285 28.9157 30.9099 28.9157 31.2571V40.6849C28.9157 42.0739 27.7897 43.1999 26.4007 43.1999C25.0117 43.1999 23.8856 42.0739 23.8856 40.6849V33.7714C23.8856 33.4242 23.6042 33.1428 23.2571 33.1428C22.9099 33.1428 22.6285 33.4242 22.6285 33.7714V40.6865C22.6285 42.0746 21.5032 43.1999 20.115 43.1999C18.7269 43.1999 17.6016 42.0746 17.6016 40.6865L17.6016 31.257C17.6016 30.9099 17.3201 30.6285 16.973 30.6285C16.6258 30.6285 16.3444 30.9099 16.3444 31.257L16.3444 40.6854C16.3444 42.0741 15.2186 43.1999 13.8299 43.1999C12.4411 43.1999 11.3153 42.0741 11.3153 40.6854L11.3153 18.6856C11.3153 18.3385 11.0339 18.0571 10.6867 18.0571C10.3396 18.0571 10.0582 18.3385 10.0582 18.6856L10.0582 40.686C10.0582 42.0744 8.93265 43.1999 7.54423 43.1999H5.65884C5.31169 43.1999 5.03027 43.4813 5.03027 43.8285C5.03027 44.1756 5.31169 44.4571 5.65884 44.4571H7.54423Z"
          fill="#D0D0D0"
        />
      </svg>
    ),
  },
];
