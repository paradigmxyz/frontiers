import { Button } from '../ui/Button'
import { WithCursor } from '../ui/WithCursor'
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
      <div className="max-w-screen-mobile mx-auto">
        <WithCursor cursor="pulse-crosshair">
          <Button className="w-full" height="60">
            Apply to attend
          </Button>
        </WithCursor>
      </div>
    </div>
  )
}
