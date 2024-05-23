import { HeroSection } from './_components/HeroSection'
import { PerspectiveBackground } from './_components/PerspectiveBackground'
import { PreReadsSection } from './_components/PreReadsSection'
import { SpeakersSection } from './_components/SpeakersSection'
import { ToTheBuildersSection } from './_components/ToTheBuildersSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ToTheBuildersSection />
      <PerspectiveBackground />
      {/* <AgendaSection /> */}
      <SpeakersSection />
      <PreReadsSection />
    </div>
  )
}
