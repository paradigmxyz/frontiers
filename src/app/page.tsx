import { Button } from '~/ui/Button'
import { WithCursor } from '~/ui/WithCursor'

import { FaqsSection } from './_components/FaqsSection'
import { Footer } from './_components/Footer'
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
      <div className="h-[900px]" />
      <SpeakersSection />
      <FaqsSection />
      <PreReadsSection />
      <div className="max-w-screen-mobile mx-auto">
        <WithCursor cursor="pulse-crosshair">
          <Button asChild frame className="w-full" height="60">
            <a href="https://events.paradigm.xyz/frontiersregistration">
              Apply to attend
            </a>
          </Button>
        </WithCursor>
      </div>
      <div className="h-[300px] max-mobile:h-[100px]" />
      <Footer />
    </div>
  )
}
