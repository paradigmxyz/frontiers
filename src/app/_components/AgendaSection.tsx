import type { ReactNode } from 'react'

import { Section, SectionHeading } from '~/ui/Section'
import { Text } from '~/ui/Text'

const agendas = [
  {
    sessions: [
      {
        time: '8:30AM-9:00AM',
        title: 'Check-in & Registration',
      },
      {
        time: '9:00AM-11:30AM',
        title: 'Reth Updates',
        subsessions: [
          { title: 'The Future of Reth', speaker: 'gakonst' },
          { title: 'The Reth SDK', speaker: 'mattsse_ & rjected' },
          { title: 'Reth Execution Extensions', speaker: 'shekhirin' },
          { title: 'Reth to 1 Gigagas/s and Beyond', speaker: 'rkrasiuk & danipopes' },
          { title: 'Reth Core Development', speaker: 'onbjerg' },
        ]
      },
      {
        time: '11:30AM-12:30PM',
        title: 'Lunch Break'
      },
      {
        time: '12:30PM-2:00PM',
        title: 'Ecosystem Builders',
        subsessions: [
          { title: 'Kona: OP Stack derivation in Rust', speaker: 'vex_0x' },
          { title: 'SP1 Reth: Reth x ZK', speaker: 'pumatheuma' },
          { title: 'Pevm: Parallel EVM for Reth', speaker: 'sam_battenally' },
          { title: 'Reth Benchmarking', speaker: 'BrianBland' },
        ]
      },
      {
        time: '2:00PM-8:00PM',
        title: 'Hacking'
      }
    ],
    tag: {
      mobile: 'DAY 1',
      desktop: 'DAY 1: RETH'
    }
  },
  {
    sessions: [
      {
        time: '9:00AM-11:30AM',
        title: 'Tooling',
        subsessions: [
          { title: 'Revm Endgame', speaker: 'rakita' },
          { title: 'Data Ecosystem Safari', speaker: 'notnotstorm' },
          { title: 'Foundry Endgame', speaker: 'gakonst' },
          { title: 'Alloy is ready for production', speaker: 'mattsse_' },
          { title: 'Wevm and the future of Wagmi, Viem and beyond', speaker: 'awkweb' },
        ]
      },
      {
        time: '11:30AM-12:30PM',
        title: 'Lunch Break'
      },
      {
        time: '12:30PM-1:30PM',
        title: 'Ecosystem Builders',
        subsessions: [
          { title: 'Shadow Reth: Execution Extensions for Shadow Logs', speaker: 'emhsia' },
          { title: 'RBuilder: A MEV Builder on Reth', speaker: 'bertcmiller' },
          { title: 'MEV RS', speaker: 'ralexstokes' },
        ]
      },
      {
        time: '1:30PM-6:00PM',
        title: 'Hacking'
      },
      {
        time: '6:00PM-7:00PM',
        title: 'Hacking Presentations & Demos'
      }
    ],
    tag: {
      mobile: 'DAY 2',
      desktop: 'DAY 2: TOOLING'
    }
  }
]

export function AgendaSection() {
  return (
    <Section className="flex flex-col items-center py-40 pt-10 gap-[64px]">
      <SectionHeading id="agenda">AGENDA</SectionHeading>
      <div className="flex max-tablet:flex-col max-tablet:w-full gap-[48px]">
        {agendas.map(({ sessions, tag }, i) => (
          <Card key={i} sessions={sessions} tag={tag} />
        ))}
      </div>
    </Section>
  )
}

function Card({
  sessions,
  tag,
}: {
  sessions: {
    time: string; 
    title: string; 
    subsessions?: { title: string; speaker: string }[] 
  }[]
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
          </div>
          <div className="flex flex-1 flex-col gap-[36px]">
            {sessions.map(({ time, title, subsessions }, i) => (
              <div className="flex flex-col gap-[16px]" key={i}>
                <Text
                  fontFamily="typewriter"
                  size="24"
                >
                  {title}
                </Text>
                <Text
                  className="text-[#a0a0a0]"
                  fontFamily="typewriter"
                  size="16"
                >
                  {time}
                </Text>
                {subsessions && (
                  <div className="flex flex-col gap-[20px] ml-[0px]">
                    {subsessions.map(({ title, speaker }, j) => (
                      <div key={j} className="flex flex-col gap-[12px]">
                        <Text size="16">{title}</Text>
                        <div className="flex justify-between">
                          <Text
                            className="text-[#a0a0a0]"
                            fontFamily="typewriter"
                            size="12"
                          >
                            {speaker}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
