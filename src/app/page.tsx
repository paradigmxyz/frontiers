import { Button } from "~/ui/Button";
import { WithCursor } from "~/ui/WithCursor";

import { AgendaSection } from "./_components/AgendaSection";
import { FaqsSection } from "./_components/FaqsSection";
import { Footer } from "./_components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { PerspectiveBackground } from "./_components/PerspectiveBackground";
import { OpenSourceSection } from "./_components/OpenSourceSection";
import { SpeakersSection } from "./_components/SpeakersSection";
import { ToTheBuildersSection } from "./_components/ToTheBuildersSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ToTheBuildersSection />
      <PerspectiveBackground />
      <AgendaSection />
      <SpeakersSection />
      <FaqsSection />
      <OpenSourceSection />
      <div className="max-w-screen-mobile max-w-[940px] mx-auto">
        <WithCursor cursor="pulse-crosshair">
          <Button asChild frame className="w-[80%] mx-auto" height="60">
            <a href="https://form.typeform.com/to/EBlW7QFt">Register Now</a>
          </Button>
        </WithCursor>
      </div>
      <div className="h-[300px] max-mobile:h-[100px]" />
      <Footer />
    </div>
  );
}
