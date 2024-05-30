import Image from 'next/image'

import { Section, SectionHeading } from '~/ui/Section'
import { Text } from '~/ui/Text'
import { WithCursor } from '~/ui/WithCursor'

export function SpeakersSection() {
  return (
    <Section className="max-w-[890px] mx-auto flex items-center flex-col gap-[48px]">
      <SectionHeading id="speakers">SPEAKERS</SectionHeading>
      <div className="flex flex-wrap justify-center gap-[30px]">
        <Speaker
          image="/images/gk.png"
          name="Georgios Konstantopoulos"
          profile={{
            name: '@gakonst',
            link: 'https://twitter.com/gakonst',
          }}
          projects={[
            {
              name: 'reth core',
              link: 'https://github.com/paradigmxyz/reth',
            },
          ]}
        />
        <Speaker
          image="/images/matt.png"
          name="Matthias Seitz"
          profile={{
            name: '@mattse',
            link: 'https://twitter.com/mattse',
          }}
          projects={[
            {
              name: 'foundry',
              link: 'https://github.com/foundry-rs/foundry',
            },
            {
              name: 'reth core',
              link: 'https://github.com/paradigmxyz/reth',
            },
          ]}
        />
        <Speaker
          image="/images/tom.png"
          name="Tom Meagher"
          profile={{
            name: '@awkweb',
            link: 'https://twitter.com/awkweb',
          }}
          projects={[
            {
              name: 'wagmi',
              link: 'https://github.com/wevm/wagmi',
            },
            {
              name: 'viem',
              link: 'https://github.com/wevm/viem',
            },
          ]}
        />
        <Speaker
          image="/images/storm.png"
          name="Storm Slivkoff"
          profile={{
            name: '@cryo',
            link: 'https://twitter.com/notnotstorm',
          }}
          projects={[
            {
              name: 'flood',
              link: 'https://github.com/paradigmxyz/flood',
            },
          ]}
        />
      </div>
      <Text className="text-darkGray italic" size="24">
        More speakers to be announced...
      </Text>
    </Section>
  )
}

function Speaker({
  image,
  name,
  projects,
  profile,
}: {
  image: string
  name: string
  projects?: { name: string; link: string }[] | undefined
  profile: { name: string; link: string }
}) {
  return (
    <div className="flex flex-col gap-[16px] w-[200px] max-mobile:w-[168px] max-[420px]:w-[128px] max-[320px]:w-full">
      <WithCursor cursor="external">
        <a href={profile.link} target="_blank" rel="noopener noreferrer">
          <div className="w-[200px] h-[200px] max-mobile:w-[168px] max-mobile:h-[168px] max-[420px]:w-[128px] max-[420px]:h-[128px] max-[320px]:w-full max-[320px]:h-auto bg-darkGray relative">
            <Image
              className="object-cover w-full h-full"
              src={image}
              width="200"
              height="200"
              alt={`Speaker: ${name}`}
            />
            <div className="absolute top-2 left-2 bg-white text-black p-[8px]">
              <Text fontFamily="typewriter" size="12">
                {profile.name}
              </Text>
            </div>
          </div>
        </a>
      </WithCursor>
      <Text className="max-[420px]:text-[16px]" size="24">
        {name}
      </Text>
      <div className="flex gap-2">
        {projects?.map((project) => (
          <ProjectTag key={project.name} {...project} />
        ))}
      </div>
    </div>
  )
}

function ProjectTag({
  name,
  link,
}: {
  name: string
  link: string
}) {
  return (
    <WithCursor cursor="external">
      <a href={link} target="_blank" rel="noreferrer noopener">
        <div className="w-fit px-[4px] py-[6px] bg-violet">
          <Text className="text-nowrap" fontFamily="typewriter" size="12">
            {name}
          </Text>
        </div>
      </a>
    </WithCursor>
  )
}
