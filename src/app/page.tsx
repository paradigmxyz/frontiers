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
      <div className="h-[100px] max-mobile:h-[100px]" />
      <Footer />
    </div>
  );
}
