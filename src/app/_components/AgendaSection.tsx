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
      { time: "06:00", title: "Check in begins" },
      {
        time: "08:00",
        title: "Opening Keynote by Tomasz K. Stańczak",
        description: "Ethereum Foundation",
        detailsItalic: true,
      },
      {
        time: "08:00",
        title: "Hacking begins",
        description: "Snacks, beverages, and music ensue.",
      },
      {
        time: "08:00 – 12:00",
        title: "Night shift begins.",
        description: "Hack as long as you want!",
      },
    ],
  },
  {
    day: "THURSDAY, AUGUST 7",
    events: [
      {
        time: "08:00 – 09:00",
        title: "Check in & hack.",
        description: "Receive your badges, stickers, and more.",
      },
      {
        time: "9:00",
        title: "The Application Era by Georgios Konstantopoulos",
        description: "Paradigm, Ithaca",
        detailsItalic: true,
      },
      {
        time: "",
        title: "More talks to be announced soon.",
        isPlaceholder: true,
      },
      {
        time: "08:00 – 09:00", // As per image, though seems like a clash
        title: "Lunch.",
        description: "Catered, delicious meals to power your hacking.",
      },
      {
        time: "",
        title: "More talks to be announced soon.",
        isPlaceholder: true,
      },
      {
        time: "4:00 – 11:59",
        title: "Hacking continues.",
        description: "We're excited to see what you build.",
      },
    ],
  },
  {
    day: "FRIDAY, AUGUST 8",
    events: [
      {
        time: "9:00",
        title: "Finalize your projects.",
        description: "You will have a chance to present!",
      },
      {
        time: "12:00",
        title: "Presentations & awards.",
        description: "We have gifts for top teams.",
      },
      {
        time: "3:00",
        title: "Event ends.",
        description: "Spend the rest of the day in beautiful San Francisco.",
      },
    ],
  },
];

export function AgendaSection() {
  return (
    <Section className="py-20 sm:py-28 w-full bg-black">
      <div id="agenda" className="max-w-[940px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - aligned with the third column of the agenda items */}
        <div className="tablet:grid tablet:grid-cols-[minmax(190px,auto)_120px_1fr] tablet:gap-x-6 mb-12 sm:mb-16">
          <div className="tablet:col-start-3">
            <SectionHeading
              fontFamily="default" // Serif font
              className="!text-6xl sm:!text-7xl text-left" // Ensure left alignment
              weight="400" // Match other serif titles if needed
            >
              Our <span className="italic">agenda</span>
            </SectionHeading>
          </div>
        </div>

        {/* Main agenda content area */}
        <div>
          {agendaData.map((agendaDay, dayIndex) => (
            <div key={agendaDay.day} className={clsx(dayIndex > 0 && "mt-0")}>
              {/* Mobile Day Header (shown only on mobile, before first event of day) */}
              {agendaDay.events.length > 0 && (
                <div className="tablet:hidden pt-6 pb-4 mb-2 border-b border-white/10">
                  {" "}
                  {/* Fainter border, more padding */}
                  <Text
                    fontFamily="typewriter"
                    size="12"
                    className="text-white"
                  >
                    {agendaDay.day.toUpperCase()}
                  </Text>
                </div>
              )}

              {/* Events grid for each day */}
              {agendaDay.events.map((event, eventIndex) => (
                <div
                  key={event.title + event.time + eventIndex}
                  className={clsx(
                    "py-5 tablet:py-8 tablet:grid tablet:grid-cols-[minmax(190px,auto)_120px_1fr] tablet:gap-x-6", // Increased py, fixed Day col width, fixed Time col width
                    "border-b border-white/10" // Fainter border
                  )}
                >
                  {/* --- COLUMN 1: Day Name (Tablet+) --- */}
                  <div className="hidden tablet:block pt-1 pr-6">
                    {eventIndex === 0 && (
                      <Text
                        fontFamily="typewriter"
                        size="12"
                        className="text-white"
                      >
                        {agendaDay.day.toUpperCase()}
                      </Text>
                    )}
                  </div>

                  {/* --- COLUMN 2: Time --- */}
                  <div
                    className={clsx(
                      "mb-1 tablet:mb-0 tablet:pt-1 tablet:pr-6 whitespace-nowrap", // Added whitespace-nowrap
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
                      asChild={!event.isPlaceholder} // Use asChild only if not placeholder, to allow complex children
                      fontFamily="default"
                      size="18"
                      weight="400"
                      className={clsx(
                        "text-white",
                        event.isPlaceholder && "italic opacity-75"
                      )}
                    >
                      {event.isPlaceholder ? (
                        event.title
                      ) : (
                        <p>
                          <span className="font-medium">{event.title}</span>
                          {event.description && (
                            <span
                              className={clsx(
                                "text-white/50 ml-2",
                                event.detailsItalic && "italic"
                              )}
                            >
                              {event.description}
                            </span>
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
