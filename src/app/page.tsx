import { HeroSection } from './_components/HeroSection'
import { PerspectiveBackground } from './_components/PerspectiveBackground'
import { SpeakersSection } from './_components/SpeakersSection'
import { ToTheBuildersSection } from './_components/ToTheBuildersSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ToTheBuildersSection />
      <PerspectiveBackground />
      <div className="relative z-[1]">{/* <AgendaSection /> */}</div>
      <div className="relative z-[1]">
        <SpeakersSection />
      </div>
    </div>
  )
}
