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
        time: "18:00",
        title: "Welcome to Frontiers!",
        description: "Check in begins.",
      },
      {
        time: "18:30",
        title: "Opening Keynote by Tomasz K. Stańczak",
        description: "Ethereum Foundation",
        detailsItalic: true,
      },
      {
        time: "19:00 - 22:00",
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
        time: "9:00 sharp",
        title: "The Application Era by Georgios Konstantopoulos",
        description: "Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "9:30",
        title: "Porto by Tom Meagher",
        description: "Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "10:00",
        title: "Building a viral consumer app by Sofiane Larbi",
        description: "Paradigm",
        detailsItalic: true,
      },
      {
        time: "",
        title: "More talks to be announced soon.",
        isPlaceholder: true,
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
        title: "The Future of Reth by Matthias Seitz",
        description: "Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "9:30",
        title: "Foundry & Alloy 1.0",
        description: "Ithaca",
        detailsItalic: true,
      },
      {
        time: "10:00",
        title: "Open Source Data by Storm Slivkoff",
        description: "Paradigm",
        detailsItalic: true,
      },
      {
        time: "",
        title: "More talks to be announced soon.",
        isPlaceholder: true,
      },
      {
        time: "15:00",
        title: "Finalize your projects.",
        description: "You will have a chance to present!",
      },
      {
        time: "16:00",
        title: "Presentations & awards.",
        description: "We have gifts for top teams.",
      },
      {
        time: "18:00",
        title: "Event ends.",
        description: "Spend the rest of the day in beautiful San Francisco.",
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
          className="!text-6xl sm:!text-7xl text-left px-4 mb-12 sm:mb-16 md:ml-[39%]"
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
                  <div className="md:hidden flex items-center py-4 mb-2 border-b border-t border-white/10 bg-white/5 px-5">
                    <Text
                      fontFamily="typewriter"
                      size="12"
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
                    "py-4 md:py-6 px-4 sm:px-8 lg:px-10 border-b border-white/10 md:grid md:grid-cols-[minmax(190px,auto)_120px_1fr] md:gap-x-8"
                  )}
                >
                  {/* --- COLUMN 1: Day Name (Tablet+) --- */}
                  <div className="hidden md:block pt-1 pr-8" />

                  {/* --- COLUMN 2: Time --- */}
                  <div
                    className={clsx(
                      "mb-4 tablet:mb-0 tablet:pt-1 tablet:pr-6 whitespace-nowrap", // Increased mobile bottom margin
                      event.isPlaceholder && "tablet:invisible"
                    )}
                  >
                    <Text
                      fontFamily="typewriter"
                      size="12"
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
                      event.isPlaceholder && "tablet:text-left"
                    )}
                  >
                    <Text
                      asChild={!event.isPlaceholder}
                      fontFamily="default"
                      size={event.isPlaceholder ? "18" : "28"}
                      weight="400"
                      className={clsx(
                        "text-white tablet:text-lg",
                        event.isPlaceholder && "italic opacity-75"
                      )}
                    >
                      {event.isPlaceholder ? (
                        event.title
                      ) : (
                        <p>
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
                              <span
                                className={clsx(
                                  "block tablet:hidden text-white/50 text-base mt-2",
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