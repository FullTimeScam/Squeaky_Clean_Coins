import { Navigation } from "@/components/Navigation";
import { IntroSection } from "@/components/sections/IntroSection";
import { CasinoSection } from "@/components/sections/CasinoSection";
import { RailgunSection } from "@/components/sections/RailgunSection";
import { ResponseSection } from "@/components/sections/ResponseSection";
import { ClosingSection } from "@/components/sections/ClosingSection";

const Index = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Navigation />
      <IntroSection />
      <CasinoSection />
      <RailgunSection />
      <ResponseSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
