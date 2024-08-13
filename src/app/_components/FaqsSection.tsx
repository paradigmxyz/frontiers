'use client'

import * as Accordion from '@radix-ui/react-accordion'
import type { ReactNode } from 'react'

import { Section, SectionHeading } from '~/ui/Section'
import { Text } from '~/ui/Text'

const faqs = [
  {
    title: 'Is the event in-person or online as well?',
    content: 'The event will be held in-person in San Francisco.',
  },
  {
    title: 'How much does an in-person ticket cost?',
    content: 'The event is free upon acceptance.',
  },
  {
    title: 'How do I get selected for in-person attendance?',
    content: 'Applications are now closed for attendance! Thanks for applying!',
  },
  {
    title: 'Can I give a talk?',
    content:
      'Yes if you are building great open source software. Just make sure to fill it in the form attendance!',
  },
  {
    title: 'Who can I contact if I have additional questions?',
    content: 'Please contact events@paradigm.xyz.',
  },
]

export function FaqsSection() {
  return (
    <Section className="max-w-screen-mobile mx-auto py-40 max-tablet:py-24 flex items-center flex-col gap-[48px]">
      <SectionHeading id="faqs">FAQs</SectionHeading>
      <Accordion.Root className="bg-black w-full" type="multiple">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.title}
            title={faq.title}
            content={faq.content}
            value={index.toString()}
          />
        ))}
      </Accordion.Root>
    </Section>
  )
}

function AccordionItem({
  content,
  title,
  value,
}: {
  content: ReactNode
  title: ReactNode
  value: string
}) {
  return (
    <Accordion.Item
      className="border-b border-white border-opacity-20 overflow-hidden"
      value={value}
    >
      <Accordion.Trigger className="w-full text-left py-[36px] flex items-center justify-between gap-[24px] transition-all [&[data-state=open]>svg]:rotate-45">
        <Text fontFamily="typewriter" size="28">
          {title}
        </Text>
        <PlusIcon />
      </Accordion.Trigger>
      <Accordion.Content className="transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="pb-[36px]">
          <Text size="16">{content}</Text>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  )
}

function PlusIcon() {
  return (
    <svg
      className="min-w-[24px] transition-all ease-in-out duration-[50ms]"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2002 2.39995C13.2002 1.73721 12.6629 1.19995 12.0002 1.19995C11.3375 1.19995 10.8002 1.73721 10.8002 2.39995V7.99995C10.8002 9.54635 9.54659 10.8 8.0002 10.8H2.40019C1.73745 10.8 1.2002 11.3372 1.2002 12C1.2002 12.6627 1.73745 13.2 2.4002 13.2H8.0002C9.54659 13.2 10.8002 14.4536 10.8002 16V21.6C10.8002 22.2627 11.3375 22.7999 12.0002 22.7999C12.6629 22.7999 13.2002 22.2627 13.2002 21.5999V15.9999C13.2002 14.4536 14.4538 13.2 16.0002 13.2H21.6002C22.2629 13.2 22.8002 12.6627 22.8002 12C22.8002 11.3372 22.2629 10.8 21.6002 10.8H16.0002C14.4538 10.8 13.2002 9.54635 13.2002 7.99995V2.39995Z"
        fill="white"
      />
    </svg>
  )
}
