import { Button } from "~/ui/Button";
import { WithCursor } from "~/ui/WithCursor";

import { AgendaSection } from "./_components/AgendaSection";
import { FaqsSection } from "./_components/FaqsSection";
import { Footer } from "./_components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { OpenSourceSection } from "./_components/OpenSourceSection";
import { PerspectiveBackground } from "./_components/PerspectiveBackground";
import { SpeakersSection } from "./_components/SpeakersSection";
import { ToOurBuildersSection } from "./_components/ToOurBuildersSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ToOurBuildersSection />
      <PerspectiveBackground />
      <AgendaSection />
      <SpeakersSection />
      <FaqsSection />
      <OpenSourceSection />
      <div className="max-w-screen-mobile max-w-[940px] mx-auto">
        <WithCursor cursor="pulse-crosshair">
          <Button asChild frame className="w-auto mx-6" height="60">
            <a href="https://7dr10b0z31d.typeform.com/Frontiers2025">APPLY NOW</a>
          </Button>
        </WithCursor>
      </div>
      <div className="h-[300px] max-mobile:h-[100px]" />
      <Footer />
    </div>
  );
}
