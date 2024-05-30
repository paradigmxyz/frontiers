import type { ReactNode } from 'react'

import { Section, SectionHeading } from '~/ui/Section'
import { Text } from '~/ui/Text'

const agendas = [
  {
    date: 'Friday, August 16',
    sessions: [
      { time: '9:00AM-11:00AM', title: 'Reth Core Team Updates' },
      {
        time: '11:30AM-12:30PM',
        title: 'Reth Builders Update: ZKVM, Shadow Logs, MEV Stack, and more',
      },
      {
        time: '12:30PM-1:30PM',
        title: 'Lunch Break',
      },
      {
        time: '1:30PM-Late',
        title: 'Hackathon',
      },
    ],
    tag: {
      mobile: 'DAY 1',
      desktop: 'DAY 1: RETH',
    },
  },
  {
    date: 'Saturday, August 17',
    sessions: [
      {
        time: '9:00AM-11:00AM',
        title: 'Open Source Updates: Foundry, Alloy, Wagmi/Viem',
      },
      {
        time: '11:00AM-12:00PM',
        title: 'Open Source Community Lightning Talks',
      },
      {
        time: '12:00PM-1:00PM',
        title: 'Lunch Break',
      },
      {
        time: '1:00PM-6:00PM',
        title: 'Network & Hack',
      },
      {
        time: '6:00PM',
        title: 'Hackathon Ends + Optional Talks & Demos',
      },
    ],
    tag: {
      mobile: 'DAY 2',
      desktop: 'DAY 2: OPEN SOURCE TOOLING',
    },
  },
]

export function AgendaSection() {
  return (
    <Section className="flex flex-col items-center py-40 pt-10 gap-[64px]">
      <SectionHeading id="agenda">AGENDA</SectionHeading>
      <div className="flex max-tablet:flex-col max-tablet:w-full gap-[48px]">
        {agendas.map(({ date, sessions, tag }, i) => (
          <Card key={date} date={date} sessions={sessions} tag={tag} />
        ))}
      </div>
    </Section>
  )
}

function Card({
  date,
  sessions,
  tag,
}: {
  date: string
  sessions: { time: string; title: string }[]
  tag: { mobile: string; desktop: string }
}) {
  return (
    <div className="relative flex">
      <div className="bg-[#333333] absolute -top-[1px] -left-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] z-0" />
      <div className="relative bg-black rounded-[16px] w-[490px] max-tablet:w-full p-[44px] z-[1]">
        <div className="flex tablet:flex-col max-[720px]:flex-col gap-[44px]">
          <div className="flex flex-1 flex-col gap-[24px]">
            <div className="mobile:hidden">
              <DayTag>{tag.mobile}</DayTag>
            </div>
            <div className="max-mobile:hidden">
              <DayTag>{tag.desktop}</DayTag>
            </div>
            <Text fontFamily="typewriter" size="28">
              {date}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-[36px]">
            {sessions.map(({ time, title }, i) => (
              <div className="flex flex-col gap-[16px]" key={time}>
                <Text
                  className="text-[#a0a0a0]"
                  fontFamily="typewriter"
                  size="14"
                >
                  {time}
                </Text>
                <Text>{title}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DayTag({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#d0d0d0] w-fit py-[8px] px-[12px]">
      <Text
        className="text-black"
        fontFamily="typewriter"
        weight="400"
        size="14"
      >
        {children}
      </Text>
    </div>
  )
}
