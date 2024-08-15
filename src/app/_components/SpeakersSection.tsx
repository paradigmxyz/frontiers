import Image from 'next/image'

import { Section, SectionHeading } from '~/ui/Section'
import { Text } from '~/ui/Text'
import { WithCursor } from '~/ui/WithCursor'

export function SpeakersSection() {
  return (
    <Section className="max-w-screen-tablet mx-auto flex items-center flex-col gap-[48px]">
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
              name: 'reth',
              link: 'https://github.com/paradigmxyz/reth',
            },
            {
              name: 'foundry',
              link: 'https://github.com/foundry-rs/foundry',
            },
            {
              name: 'alloy',
              link: 'https://github.com/alloy-rs/alloy',
            },
          ]}
        />
        <Speaker
          image="/images/matt.png"
          name="Matthias Seitz"
          profile={{
            name: '@mattsse_',
            link: 'https://twitter.com/mattsse_',
          }}
          projects={[
            {
              name: 'reth',
              link: 'https://github.com/paradigmxyz/reth',
            },
            {
              name: 'foundry',
              link: 'https://github.com/foundry-rs/foundry',
            },
            {
              name: 'alloy',
              link: 'https://github.com/alloy-rs/alloy',
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
            name: '@notnotstorm',
            link: 'https://twitter.com/notnotstorm',
          }}
          projects={[
            {
              name: 'cryo',
              link: 'https://github.com/paradigmxyz/cryo',
            },
            {
              name: 'flood',
              link: 'https://github.com/paradigmxyz/flood',
            },
          ]}
        />
        <Speaker
          image="/images/uma.png"
          name="Uma Roy"
          profile={{
            name: '@pumatheuma',
            link: 'https://twitter.com/pumatheuma',
          }}
          projects={[
            {
              name: 'sp1',
              link: 'https://github.com/succinctlabs/sp1',
            },
            {
              name: 'sp1-reth',
              link: 'https://github.com/succinctlabs/sp1-reth',
            },
          ]}
        />
        <Speaker
          image="/images/emily.png"
          name="Emily Hsia"
          profile={{
            name: '@emhsia',
            link: 'https://twitter.com/emhsia',
          }}
          projects={[
            {
              name: 'shadow-reth',
              link: 'https://github.com/shadow-hq/shadow-reth',
            },
          ]}
        />
        <Speaker
          image="/images/stokes.png"
          name="Alex Stokes"
          profile={{
            name: '@ralexstokes',
            link: 'https://twitter.com/ralexstokes',
          }}
          projects={[
            {
              name: 'mev-rs',
              link: 'https://github.com/ralexstokes/mev-rs',
            },
          ]}
        />
        <Speaker
          image="/images/clabby.png"
          name="Ben Clabby"
          profile={{
            name: '@vex_0x',
            link: 'https://twitter.com/vex_0x',
          }}
          projects={[
            {
              name: 'kona',
              link: 'https://github.com/ethereum-optimism/kona',
            },
            {
              name: 'op-reth',
              link: 'https://github.com/paradigmxyz/reth',
            },
          ]}
        />
        <Speaker
          image="/images/onbjerg.png"
          name="Oliver Nordbjerg"
          profile={{
            name: '@onbjerg',
            link: 'https://twitter.com/onbjerg',
          }}
          projects={[
            {
              name: 'reth',
              link: 'https://github.com/paradigmxyz/reth',
            },
          ]}
        />
        <Speaker
          image="/images/rkrasiuk.png"
          name="Roman Krasiuk"
          profile={{
            name: '@r_krasiuk',
            link: 'https://twitter.com/r_krasiuk',
          }}
          projects={[
            {
              name: 'reth',
              link: 'https://github.com/paradigmxyz/reth',
            },
          ]}
        />
        <Speaker
          image="/images/shekhirin.png"
          name="Alexey shekhirin"
          profile={{
            name: '@shekhirin',
            link: 'https://twitter.com/ashekhirin',
          }}
          projects={[
            {
              name: 'reth',
              link: 'https://github.com/paradigmxyz/reth',
            },
          ]}
        />
        <Speaker
          image="/images/brianbland.png"
          name="Brian Bland"
          profile={{
            name: '@brianisbland',
            link: 'https://twitter.com/brianisbland',
          }}
          projects={[
            {
              name: 'base',
              link: 'https://github.com/base-org',
            },
          ]}
        />
        <Speaker
          image="/images/ferran.png"
          name="Ferran Borreguero"
          profile={{
            name: '@ferranbt',
            link: 'https://twitter.com/ferranbt',
          }}
          projects={[
            {
              name: 'rbuilder',
              link: 'https://github.com/flashbots/rbuilder',
            },
          ]}
        />
        <Speaker
          image="/images/rjected.png"
          name="Dan Cline"
          profile={{
            name: '@rjected',
            link: 'https://twitter.com/rjected',
          }}
          projects={[
            {
              name: 'reth',
              link: 'https://github.com/paradigmxyz/reth',
            },
          ]}
        />
        <Speaker
          image="/images/dani.png"
          name="DaniPopes"
          profile={{
            name: '@danipopes',
            link: 'https://twitter.com/danipopes',
          }}
          projects={[
            {
              name: 'reth',
              link: 'https://github.com/paradigmxyz/reth',
            },
          ]}
        />
        <Speaker
          image="/images/yash.png"
          name="Yash Atreya"
          profile={{
            name: '@yashatreya',
            link: 'https://twitter.com/yashatreya',
          }}
          projects={[
            {
              name: 'foundry',
              link: 'https://github.com/foundry-rs/foundry',
            },
            {
              name: 'alloy',
              link: 'https://github.com/alloy-rs',
            },
          ]}
        />
        <Speaker
          image="/images/zerosnacks.png"
          name="Zerosnacks"
          profile={{
            name: '@zerosnacks',
            link: 'https://twitter.com/zerosnacks',
          }}
          projects={[
            {
              name: 'foundry',
              link: 'https://github.com/foundry-rs/foundry',
            },
            {
              name: 'alloy',
              link: 'https://github.com/alloy-rs',
            },
          ]}
        />
        <Speaker
          image="/images/ludwig.png"
          name="0xvanbeethoven"
          profile={{
            name: '@0xvanbeethoven',
            link: 'https://twitter.com/0xvanbeethoven',
          }}
          projects={[
            {
              name: 'brontes',
              link: 'https://github.com/SorellaLabs/brontes',
            },
          ]}
        />
        <Speaker
          image="/images/willsmith.png"
          name="Will Smith"
          profile={{
            name: 'Will Smith',
            link: 'https://twitter.com/69WillSmith',
          }}
          projects={[
            {
              name: 'brontes',
              link: 'https://github.com/SorellaLabs/brontes',
            },
          ]}
        />
        <Speaker
          image="/images/hai.png"
          name="Hai Nguyen"
          profile={{
            name: '@hai_rise',
            link: 'https://twitter.com/hai_rise',
          }}
          projects={[
            {
              name: 'pevm',
              link: 'https://github.com/risechain/pevm',
            },
          ]}
        />
      </div>
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
