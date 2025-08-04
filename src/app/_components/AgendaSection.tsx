"use client";

import clsx from "clsx";
import { Section, SectionHeading } from "~/ui/Section";
import { Text } from "~/ui/Text";

interface Event {
  time: string;
  title: string;
  description?: string;
  detailsItalic?: boolean; // For speaker/affiliation if needed to be italic and half opacity
  isPlaceholder?: boolean;
}

interface AgendaDay {
  day: string;
  events: Event[];
}

const agendaData: AgendaDay[] = [
  {
    day: "WEDNESDAY, AUGUST 6",
    events: [
      {
        time: "17:30",
        title: "Welcome to Frontiers!",
        description: "Check in begins. Receive your badges, stickers, and more.",
      },
      {
        time: "18:30",
        title: "Fireside chat with Tomasz K. Stańczak and Georgios Konstantopoulos",
        description: "Ethereum Foundation & Paradigm",
        detailsItalic: true,
      },
      {
        time: "19:00 - 21:00",
        title: "Evening socializing.",
        description: "Code, snacks, beverages, and music.",
      },
    ],
  },
  {
    day: "THURSDAY, AUGUST 7",
    events: [
      {
        time: "",
        title: "Whole day hacking & co-working.",
        isPlaceholder: true,
      },
      {
        time: "08:00 – 09:00",
        title: "Check in & coffee.",
        description: "Receive your badges, stickers, and more.",
      },
      {
        time: "9:00",
        title: "The application era by Georgios Konstantopoulos",
        description: "Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "9:30",
        title: "One-shotting crypto apps with V0 by Guillermo Rauch",
        description: "Vercel",
        detailsItalic: true,
      },
      {
        time: "10:00",
        title: "Leveraging protocols to transform UX by Henri Stern",
        description: "Privy",
        detailsItalic: true,
      },
      {
        time: "10:30",
        title: "Building a viral consumer app by Sofiane Larbi",
        description: "Paradigm",
        detailsItalic: true,
      },
      {
        time: "11:00",
        title: "Porto by awkweb",
        description: "Wevm, Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "11:30",
        title: "The future of Reth by Matthias Seitz",
        description: "Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "11:30",
        title: "Mastering Claude Code by Tobias Harrison-Noonan",
        description: "Anthropic",
        detailsItalic: true,
      },
      {
        time: "12:30 – 13:30",
        title: "Lunch break.",
        description: "Enjoy lunch and networking.",
      },
      {
        time: "13:30 – 20:00",
        title: "Hacking & co-working.",
        description: "Build, collaborate, and create.",
      },
    ],
  },
  {
    day: "FRIDAY, AUGUST 8",
    events: [
      {
        time: "",
        title: "Whole day hacking & co-working.",
        isPlaceholder: true,
      },
      {
        time: "9:00",
        title: "Hyperoptimizing Reth by Alexey Shekhirin & Dan Cline",
        description: "Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "9:30",
        title: "Scaling Ethereum's State Trie by Brian Bland",
        description: "Base",
        detailsItalic: true,
      },
      {
        time: "10:00",
        title: "Scaling Ethereum L1 by Ansgar Dietrichs",
        description: "Ethereum Foundation",
        detailsItalic: true,
      },
      {
        time: "10:30",
        title: "Ethereum Acceleration with Reth by Roman Krasiuk",
        description: "Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "11:00",
        title: "Foundry & Alloy 1.0 by 0xrusowsky & DaniPopes",
        description: "Ithaca",
        detailsItalic: true,
      },
      {
        time: "11:30",
        title: "Sovereign data singularity by Storm Slivkoff",
        description: "Paradigm",
        detailsItalic: true,
      },
      {
        time: "12:00 – 13:00",
        title: "Lunch break.",
        description: "Enjoy lunch and networking.",
      },
      {
        time: "13:00",
        title: "Priority Blockspace for Humans & P2P Flashblocks on World Chain by Eric Woosley & Osiris",
        description: "World",
        detailsItalic: true,
      },
      {
        time: "13:30",
        title: "Real-time proving Ethereum with SP1 & Reth by John Guibas",
        description: "Succinct",
        detailsItalic: true,
      },
      {
        time: "14:00",
        title: "MonadBFT: Tail-fork Resistant Streamlined Consensus by Michael Chen",
        description: "Category Labs",
        detailsItalic: true,
      },
      {
        time: "14:30",
        title: "Minimmit: Fast Finality with Even Faster Blocks by Brendan Chou",
        description: "Commonware",
        detailsItalic: true,
      },
      {
        time: "15:00",
        title: "Malachite: A Fast and flexible BFT consensus engine by Adi Seredinschi",
        description: "Informal Systems",
        detailsItalic: true,
      },
      {
        time: "15:00 – 16:00",
        title: "Presentations & awards.",
        description: "Present your projects and win prizes for top teams.",
      },
      {
        time: "16:00 – 18:00",
        title: "Closing & evening socializing.",
        description: "Wrap up and continue conversations over drinks and snacks.",
      },
    ],
  },
];

export function AgendaSection() {
  return (
    <Section className="py-20 sm:py-28 w-full bg-black">
      <div id="agenda" className="max-w-[940px] md:max-w-[90vw] sm:max-w-[85vw] mx-auto w-full px-4">
        <SectionHeading
          fontFamily="default"
          className="!text-6xl sm:!text-7xl text-left pl-4 sm:pl-8 mb-12 sm:mb-16 md:ml-[39%]"
          weight="400"
        >
          Our <span className="italic">agenda</span>
        </SectionHeading>

        {/* Main agenda content area */}
        <div>
          {agendaData.map((agendaDay, dayIndex) => (
            <div key={agendaDay.day} className={clsx(dayIndex > 0 && "mt-0")}>
              {/* Mobile Day Header (shown only on mobile, before first event of day) */}
              {agendaDay.events.length > 0 && (
                <div>
                  {/* Mobile divider */}
                  <div className="md:hidden flex items-center py-5 mb-2 border-b border-t border-white/10 bg-white/5 px-5">
                    <Text
                      fontFamily="typewriter"
                      size="14"
                      className="text-white"
                    >
                      {agendaDay.day.toUpperCase()}
                    </Text>
                  </div>
                  {/* Desktop divider */}
                  <div className="hidden md:flex items-center py-4 mb-2 border-b border-t border-white/10 bg-white/5 px-8">
                    <Text
                      fontFamily="typewriter"
                      size="12"
                      className="text-white"
                    >
                      {agendaDay.day.toUpperCase()}
                    </Text>
                  </div>
                </div>
              )}

              {/* Events grid for each day */}
              {agendaDay.events.map((event, eventIndex) => (
                <div
                  key={event.title + event.time + eventIndex}
                  className={clsx(
                    "py-5 md:py-6 px-4 sm:px-8 lg:px-10 border-b border-white/10 md:grid md:grid-cols-[minmax(190px,auto)_120px_1fr] md:gap-x-8",
                    event.isPlaceholder ? "flex flex-col justify-center py-8" : "mb-1"
                  )}
                >
                  {/* --- COLUMN 1: Day Name (Tablet+) --- */}
                  <div className="hidden md:block pt-1 pr-8" />

                  {/* --- COLUMN 2: Time --- */}
                  <div
                    className={clsx(
                      "mb-3 tablet:mb-0 tablet:pt-1 tablet:pr-6 whitespace-nowrap",
                      event.isPlaceholder && "tablet:invisible"
                    )}
                  >
                    <Text
                      fontFamily="typewriter"
                      size="14"
                      className={clsx(
                        "text-white",
                        event.isPlaceholder &&
                        !event.time &&
                        "hidden tablet:inline"
                      )}
                    >
                      {event.time}
                    </Text>
                  </div>

                  {/* --- COLUMN 3: Event Title & Description --- */}
                  <div
                    className={clsx(
                      "tablet:pt-1",
                      event.isPlaceholder && "tablet:text-left",
                      !event.isPlaceholder && "flex flex-col"
                    )}
                  >
                    <Text
                      asChild={!event.isPlaceholder}
                      fontFamily="default"
                      size={event.isPlaceholder ? "18" : "24"}
                      weight="400"
                      className={clsx(
                        "text-white tablet:text-lg",
                        event.isPlaceholder && "italic opacity-75"
                      )}
                    >
                      {event.isPlaceholder ? (
                        event.title
                      ) : (
                        <p className="mb-0">
                          <span className="font-medium">{event.title}</span>
                          {event.description && (
                            <>
                              <span
                                className={clsx(
                                  "tablet:ml-2 text-white/50 hidden tablet:inline",
                                  event.detailsItalic && "italic"
                                )}
                              >
                                {event.description}
                              </span>
                            </>
                          )}
                        </p>
                      )}
                    </Text>
                    {!event.isPlaceholder && event.description && (
                      <Text
                        fontFamily="default"
                        size="16"
                        className={clsx(
                          "tablet:hidden text-white/50 mt-3",
                          event.detailsItalic && "italic"
                        )}
                      >
                        {event.description}
                      </Text>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
