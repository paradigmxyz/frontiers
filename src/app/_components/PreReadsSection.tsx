import type { ReactElement } from 'react'
import { Section, SectionHeading } from '~/ui/Section'
import { Text } from '~/ui/Text'
import { WithCursor } from '~/ui/WithCursor'

export function PreReadsSection() {
  return (
    <Section className="max-w-screen-mobile mx-auto py-24 max-tablet:py-12 flex items-center flex-col gap-[48px]">
      <SectionHeading id="pre-reads">RELEVANT MATERIAL</SectionHeading>
      <WithCursor cursor="external">
        <div className="flex flex-col bg-black border border-b-0 border-[#333333] w-full">
          <Article
            title="Reth Book"
            description="Official Reth documentation, for operating high performance Ethereum nodes."
            link="https://reth.rs/"
          />
          <Article
            title="Foundry Book"
            description="Official Foundry documentation, for building and testing smart contracts."
            link="https://book.getfoundry.sh/"
          />
          <Article
            title="Alloy Book"
            description="Official Alloy documentation, for interacting with nodes over JSON-RPC."
            link="https://alloy.rs/"
          />
          <Article
            title="How to raise the gas limit?"
            description="Series on how to approach the limits of blockchain scaling"
            link="https://www.paradigm.xyz/2024/05/how-to-raise-the-gas-limit-2"
          />
          <Article
            title="Shadow Reth"
            description="Shadow logs on Reth"
            link="https://blog.shadow.xyz/shadow-reth/"
          />
          <Article
            title="SP1 Testnet Documentation"
            description="Deploy verifiable EVM programs on Ethereum testnets"
            link="https://blog.succinct.xyz/sp1-testnet/"
          />
          <Article
            title="Wagmi Documentation"
            description="Documentation for building high-performance blockchain frontends."
            link="https://wagmi.sh/"
          />
          <Article
            title="Reth Execution Extensions"
            description="Extending Ethereum nodes for building indexers, rollups and more."
            link="https://www.paradigm.xyz/2024/05/reth-exex"
          />
        </div>
      </WithCursor>
    </Section>
  )
}

function Article({
  // icon,
  title,
  description,
  link,
}: {
  // icon: ReactElement
  title: string
  description: string
  link: string
}) {
  return (
    <a
      href={link}
      className="mobile:cursor-none"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="p-[20px] border-b border-[#333333] flex justify-between items-center">
        <div className="flex items-center gap-[20px]">
          <div className="flex flex-col gap-[16px]">
            <Text fontFamily="typewriter" size="14">
              {title}
            </Text>
            <Text className="text-[#9B9B9B]" fontFamily="typewriter" size="14">
              {description}
            </Text>
          </div>
        </div>
        <svg
          aria-hidden="true"
          className="w-[40px] h-[40px] max-mobile:hidden"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.9744 20.7924C26.9729 21.437 26.4491 21.9582 25.8046 21.9566C25.1602 21.955 24.639 21.4314 24.6405 20.787L24.6415 20.3794C24.6447 18.9756 22.9482 18.2697 21.9546 19.2613L14.2417 26.9595C13.7857 27.4147 13.0469 27.4139 12.5918 26.9579C12.1366 26.5018 12.1373 25.7631 12.5934 25.308L20.3121 17.6041C21.2946 16.6234 20.6023 14.9443 19.2141 14.9411L18.8208 14.9402C18.1768 14.9387 17.6559 14.4153 17.6575 13.7712C17.6591 13.1272 18.1823 12.6065 18.8262 12.608L24.9937 12.6221C26.0984 12.6247 26.9918 13.5223 26.9891 14.6269L26.9744 20.7924Z"
            fill="white"
          />
        </svg>
      </div>
    </a>
  )
}

function Icon1() {
  return (
    <svg
      height="56px"
      width="56px"
      aria-hidden="true"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.85352 12.1465V7.64648C7.85352 7.37034 8.07737 7.14648 8.35352 7.14648H12.8535C13.1297 7.14648 13.3535 7.37034 13.3535 7.64648C13.3535 7.92263 13.1297 8.14648 12.8535 8.14648C11.6384 8.14648 11.0298 9.61566 11.8891 10.4749L45.5251 44.111C46.3843 44.9702 47.8535 44.3616 47.8535 43.1465C47.8535 42.8703 48.0774 42.6465 48.3535 42.6465C48.6297 42.6465 48.8535 42.8703 48.8535 43.1465V47.6465C48.8535 47.9226 48.6297 48.1465 48.3535 48.1465H43.8535C43.5774 48.1465 43.3535 47.9226 43.3535 47.6465C43.3535 47.3703 43.5774 47.1465 43.8535 47.1465C45.0687 47.1465 45.6772 45.6773 44.818 44.8181L11.1819 11.182C10.3227 10.3228 8.85352 10.9313 8.85352 12.1465C8.85352 12.4226 8.62966 12.6465 8.35352 12.6465C8.07737 12.6465 7.85352 12.4226 7.85352 12.1465Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64656 48.1465C7.37042 48.1465 7.14656 47.9226 7.14656 47.6465L7.14656 43.1465C7.14656 42.8703 7.37042 42.6465 7.64656 42.6465C7.9227 42.6465 8.14656 42.8703 8.14656 43.1465C8.14656 44.3616 9.61574 44.9702 10.475 44.111L44.111 10.4749C44.9703 9.61566 44.3617 8.14648 43.1466 8.14649C42.8704 8.14649 42.6466 7.92263 42.6466 7.64649C42.6466 7.37034 42.8704 7.14649 43.1466 7.14648L47.6466 7.14648C47.9227 7.14648 48.1466 7.37034 48.1466 7.64648L48.1466 12.1465C48.1466 12.4226 47.9227 12.6465 47.6466 12.6465C47.3704 12.6465 47.1466 12.4226 47.1466 12.1465C47.1466 10.9313 45.6774 10.3228 44.8181 11.182L11.1821 44.8181C10.3228 45.6773 10.9314 47.1465 12.1466 47.1465C12.4227 47.1465 12.6466 47.3703 12.6466 47.6465C12.6466 47.9226 12.4227 48.1465 12.1466 48.1465L7.64656 48.1465Z"
        fill="white"
      />
      <rect x="21" y="21" width="14" height="14" rx="7" fill="#090909" />
      <line x1="28.25" y1="24.3965" x2="28.25" y2="31.3965" stroke="white" />
      <line x1="31.75" y1="27.8965" x2="24.75" y2="27.8965" stroke="white" />
    </svg>
  )
}

function Icon2() {
  return (
    <svg
      aria-hidden="true"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 6C27 7.10457 26.1046 8 25 8L8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9L25 9C26.1046 9 27 9.89543 27 11C27 12.1046 26.1046 13 25 13L18.5 13C18.2239 13 18 13.2239 18 13.5C18 13.7761 18.2239 14 18.5 14L25 14C26.1046 14 27 14.8954 27 16C27 17.1046 26.1046 18 25 18L23.5 18C23.2239 18 23 18.2239 23 18.5C23 18.7761 23.2239 19 23.5 19L25 19C26.1046 19 27 19.8954 27 21C27 22.1046 26.1046 23 25 23L18.5 23C18.2239 23 18 23.2239 18 23.5C18 23.7761 18.2239 24 18.5 24L25 24C26.1046 24 27 24.8954 27 26C27 27.1046 26.1046 28 25 28L8.5 28C8.22386 28 8 28.2239 8 28.5C8 28.7761 8.22386 29 8.5 29L25 29C26.1046 29 27 29.8954 27 31C27 32.1046 26.1046 33 25 33L18.5 33C18.2239 33 18 33.2239 18 33.5C18 33.7761 18.2239 34 18.5 34L25 34C26.1046 34 27 34.8954 27 36C27 37.1046 26.1046 38 25 38L23.5 38C23.2239 38 23 38.2239 23 38.5C23 38.7761 23.2239 39 23.5 39L25 39C26.1046 39 27 39.8954 27 41C27 42.1046 26.1046 43 25 43L18.5 43C18.2239 43 18 43.2239 18 43.5C18 43.7761 18.2239 44 18.5 44L25 44C26.1046 44 27 44.8954 27 46C27 47.1046 26.1046 48 25 48L8.5 48C8.22386 48 8 48.2239 8 48.5C8 48.7761 8.22386 49 8.5 49L25.5 49C26.3284 49 27 49.6716 27 50.5L27 51.5C27 51.7761 27.2239 52 27.5 52C27.7761 52 28 51.7761 28 51.5L28 50.5C28 49.6716 28.6716 49 29.5 49L47.5 49C47.7761 49 48 48.7761 48 48.5C48 48.2239 47.7761 48 47.5 48L30 48C28.8954 48 28 47.1046 28 46C28 44.8954 28.8954 44 30 44L37.5 44C37.7761 44 38 43.7761 38 43.5C38 43.2239 37.7761 43 37.5 43L30 43C28.8954 43 28 42.1046 28 41C28 39.8954 28.8954 39 30 39L32.5 39C32.7761 39 33 38.7761 33 38.5C33 38.2239 32.7761 38 32.5 38L30 38C28.8954 38 28 37.1046 28 36C28 34.8954 28.8954 34 30 34L37.5 34C37.7761 34 38 33.7761 38 33.5C38 33.2239 37.7761 33 37.5 33L30 33C28.8954 33 28 32.1046 28 31C28 29.8954 28.8954 29 30 29L47.5 29C47.7761 29 48 28.7761 48 28.5C48 28.2239 47.7761 28 47.5 28L30 28C28.8954 28 28 27.1046 28 26C28 24.8954 28.8954 24 30 24L37.5 24C37.7761 24 38 23.7761 38 23.5C38 23.2239 37.7761 23 37.5 23L30 23C28.8954 23 28 22.1046 28 21C28 19.8954 28.8954 19 30 19L32.5 19C32.7761 19 33 18.7761 33 18.5C33 18.2239 32.7761 18 32.5 18L30 18C28.8954 18 28 17.1046 28 16C28 14.8954 28.8954 14 30 14L37.5 14C37.7761 14 38 13.7761 38 13.5C38 13.2239 37.7761 13 37.5 13L30 13C28.8954 13 28 12.1046 28 11C28 9.89543 28.8954 9 30 9L47.5 9C47.7761 9 48 8.77614 48 8.5C48 8.22386 47.7761 8 47.5 8L30 8C28.8954 8 28 7.10457 28 6L28 4.5C28 4.22386 27.7761 4 27.5 4C27.2239 4 27 4.22386 27 4.5L27 6Z"
        fill="white"
      />
    </svg>
  )
}

function Icon3() {
  return (
    <svg
      aria-hidden="true"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6.5" y="6.5" width="43" height="43" rx="21.5" stroke="white" />
      <rect x="26" y="26" width="4" height="4" fill="white" />
    </svg>
  )
}

function Icon4() {
  return (
    <svg
      aria-hidden="true"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 4V26.2371L36.2092 18.0279L36.9164 18.735L28.6513 27L52 27V28L29.0683 28L36.4521 31.0585L36.0695 31.9824L28.3702 28.7932L35.1855 45.2469L34.2617 45.6296L28 30.5126V52H27V28.6513L19 36.6513L18.2929 35.9442L26.2371 28L4 28V27L24.041 27L18.5581 24.7289L18.9408 23.805L26.5225 26.9455L19.7197 10.5221L20.6436 10.1395L27 25.4852V4H28Z"
        fill="white"
      />
    </svg>
  )
}
