"use client";

import clsx from "clsx";
import { Section, SectionHeading } from "~/ui/Section";
import { Text } from "~/ui/Text";

interface FaqItem {
  question: string;
  answer: React.ReactNode; // Allow for JSX in answers if needed, e.g. for links
}

const faqData: FaqItem[] = [
  {
    question: "When and where is Frontiers?",
    answer:
      "Frontiers will take place August 6-8, 2025 at The Midway SF in San Francisco, with virtual attendance available for those who cannot join in person.",
  },
  {
    question: "What is Frontiers?",
    answer:
      "Frontiers is Paradigm's flagship event and hackathon, bringing together developers, researchers, and enthusiasts to explore and build at the cutting edge of application and infrastructure development in crypto.",
  },
  {
    question: "What is the difference between in-person & virtual attendance?",
    answer:
      "In-person attendees will have access to the full spectrum of talks, workshops, networking, and the IRL hackathon. Virtual attendees will be able to stream keynotes and select sessions online.",
  },
  {
    question: "When will the full list of speakers be announced?",
    answer:
      "We are still finalizing the speaker list over the coming weeks. Please sign up for a ticket to receive email updates, and check back here soon!",
  },
  {
    question: "Do you cover travel or hotels?",
    answer:
      "Unfortunately, we are unable to cover travel or hotel expenses for attendees. We recommend booking accommodations early.",
  },
  {
    question: "Is there a hotel recommendation?",
    answer:
      "While we don't have official hotel blocks, we will provide a list of nearby hotels closer to the event date. San Francisco offers a wide range of options to suit various budgets.",
  },
  {
    question: "Who can I contact with questions?",
    answer:
      "For any further questions, please feel free to reach out to our events team at events@paradigm.xyz.",
  },
  {
    question: "Can I sponsor this event?",
    answer:
      "We do not accept any sponsors for Frontiers. It is focused on substance, without advertisements or booths.",
  },
];

export function FaqsSection() {
  return (
    <Section className="py-20 sm:py-28 w-full bg-black">
      <div id="faqs" className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="tablet:grid tablet:grid-cols-[1fr_2fr] tablet:gap-x-12 mb-12 sm:mb-16">
          <div className="tablet:col-start-2">
            <SectionHeading
              fontFamily="default"
              className="!text-5xl sm:!text-6xl text-left"
              weight="400"
            >
              Frequently <span className="italic">asked</span>
            </SectionHeading>
          </div>
        </div>

        <div>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={clsx(
                "py-6 tablet:py-8 tablet:grid tablet:grid-cols-[1fr_2fr] tablet:gap-x-12",
                "border-b border-white/10" // Fainter border
              )}
            >
              {/* Question Column (Right-aligned on Tablet+) */}
              <div className="mb-2 tablet:mb-0 tablet:text-right">
                <Text
                  asChild
                  fontFamily="default"
                  size="20"
                  weight="400"
                  className="text-white pb-2"
                >
                  <p>{faq.question}</p>
                </Text>
              </div>

              {/* Answer Column (Left-aligned) */}
              <div>
                <Text fontFamily="default" size="18" className="text-white/50">
                  {faq.answer}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
