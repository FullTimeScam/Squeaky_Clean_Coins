import { Navigation } from "@/components/Navigation";
import { Page01Intro } from "@/components/sections/Page01Intro";
import { Page02Icebreaker } from "@/components/sections/Page02Icebreaker";
import { Page03CasinoTitle } from "@/components/sections/Page03CasinoTitle";
import { Page04CasinoMethod } from "@/components/sections/Page04CasinoMethod";
import { Page05CasinoCase } from "@/components/sections/Page05CasinoCase";
import { Page06_Phase1 } from "@/components/sections/Page06_Phase1";
import { Page07_Phase2 } from "@/components/sections/Page07_Phase2";
import { Page08_Phase3 } from "@/components/sections/Page08_Phase3";
import { Page09_Phase4_5 } from "@/components/sections/Page09_Phase4-5";
import { Page10CasinoWeak } from "@/components/sections/Page10CasinoWeak";
import { Page11RailgunTitle } from "@/components/sections/Page11RailgunTitle";
import { Page12RailgunHow } from "@/components/sections/Page12RailgunHow";
// --- 신규 페이지 추가 ---
import { Page13RailgunDemo } from "@/components/sections/Page13RailgunDemo";
// --- 기존 페이지 +1 로드 ---
import { Page14RailgunCase } from "@/components/sections/Page14RailgunCase";
import { Page15RailgunPOI } from "@/components/sections/Page15RailgunPOI";
import { Page16ResponseImmediate } from "@/components/sections/Page16ResponseImmediate";
import { Page17ResponseTrack } from "@/components/sections/Page17ResponseTrack";
import { Page18Closing } from "@/components/sections/Page18Closing";

const Index = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Navigation />
      <Page01Intro />
      <Page02Icebreaker />
      <Page03CasinoTitle />
      <Page04CasinoMethod />
      <Page05CasinoCase />
      <Page06_Phase1 />
      <Page07_Phase2 />
      <Page08_Phase3 />
      <Page09_Phase4_5 />
      <Page10CasinoWeak />
      <Page11RailgunTitle />
      <Page12RailgunHow />
      <Page13RailgunDemo />
      <Page14RailgunCase />
      <Page15RailgunPOI />
      <Page16ResponseImmediate />
      <Page17ResponseTrack />
      <Page18Closing />
    </div>
  );
};

export default Index;