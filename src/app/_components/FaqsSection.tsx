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
    question: "What is Frontiers?",
    answer:
      "Frontiers is Paradigm's annual open source conference and hackathon, bringing together developers, researchers, and enthusiasts to explore and build at the cutting edge of application and infrastructure development in crypto.",
  },
  {
    question: "When and where is Frontiers?",
    answer:
      "Frontiers will take place August 6-8, 2025 at in San Francisco, with virtual attendance available for those who cannot join in person via livestream.",
  },
  {
    question: "When will the full list of speakers be announced?",
    answer:
      "We will be updating the website with more speakers over the coming weeks. Stay tuned by either following Paradigm on X, or apply for attendance and you will be receiving email updates!",
  },
  {
    question: "Do you cover travel or hotels?",
    answer:
      "Unfortunately, we are unable to cover travel or hotel expenses for attendees. We recommend booking accommodations early.",
  },
  {
    question: "Who can I contact with questions?",
    answer:
      "For any further questions, please feel free to reach out to our events team at events@paradigm.xyz.",
  },
  {
    question: "Can I sponsor this event?",
    answer:
      "We do not accept any sponsors for Frontiers. Frontiers has a strict no booths policy.",
  },
];

export function FaqsSection() {
  return (
    <Section className="py-20 sm:py-28 w-full bg-black">
      <div id="faqs" className="max-w-[900px] mx-auto w-full">
        <SectionHeading
          fontFamily="default"
          className="!text-6xl sm:!text-7xl text-left pl-5 sm:pl-8 lg:pl-10 mb-12"
          weight="400"
        >
          Our frequently asked questions
        </SectionHeading>

        <div className="px-5 sm:px-8 lg:px-10">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={clsx(
                "py-8 tablet:py-10 tablet:grid tablet:grid-cols-[1fr_2fr] tablet:gap-x-14",
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
