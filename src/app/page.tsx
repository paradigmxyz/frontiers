import { HeroSection } from './_components/HeroSection'
import { PerspectiveBackground } from './_components/PerspectiveBackground'
import { ToTheBuildersSection } from './_components/ToTheBuildersSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ToTheBuildersSection />
      <PerspectiveBackground />
      <div className="relative z-[1] h-[925px]">{/* <AgendaSection /> */}</div>
    </div>
  )
}
