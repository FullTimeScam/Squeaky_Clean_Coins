import { Navigation } from "@/components/Navigation";
import { Page01Intro } from "@/components/sections/Page01Intro";
import { Page02Icebreaker } from "@/components/sections/Page02Icebreaker";
import { Page03CasinoTitle } from "@/components/sections/Page03CasinoTitle";
import { Page04CasinoMethod } from "@/components/sections/Page04CasinoMethod";
import { Page05CasinoCase } from "@/components/sections/Page05CasinoCase";
import { Page06Timeline1 } from "@/components/sections/Page06Timeline1";
import { Page07Timeline2 } from "@/components/sections/Page07Timeline2";
import { Page08CasinoWeak } from "@/components/sections/Page08CasinoWeak";
import { Page09RailgunTitle } from "@/components/sections/Page09RailgunTitle";
import { Page10RailgunHow } from "@/components/sections/Page10RailgunHow";
import { Page11RailgunCase } from "@/components/sections/Page11RailgunCase";
import { Page12RailgunPOI } from "@/components/sections/Page12RailgunPOI";
import { Page13ResponseImmediate } from "@/components/sections/Page13ResponseImmediate";
import { Page14ResponseTrack } from "@/components/sections/Page14ResponseTrack";
import { Page15Closing } from "@/components/sections/Page15Closing";

const Index = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Navigation />
      <Page01Intro />
      <Page02Icebreaker />
      <Page03CasinoTitle />
      <Page04CasinoMethod />
      <Page05CasinoCase />
      <Page06Timeline1 />
      <Page07Timeline2 />
      <Page08CasinoWeak />
      <Page09RailgunTitle />
      <Page10RailgunHow />
      <Page11RailgunCase />
      <Page12RailgunPOI />
      <Page13ResponseImmediate />
      <Page14ResponseTrack />
      <Page15Closing />
    </div>
  );
};

export default Index;
