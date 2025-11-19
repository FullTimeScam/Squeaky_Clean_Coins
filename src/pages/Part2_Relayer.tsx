import { Navigation } from "@/components/Navigation";
import { Part2Intro } from "@/components/sections/part2_flow/Part2Intro";
import { Part2Relayer } from "@/components/sections/part2_flow/Part2Relayer";
import { Part2Flow } from "@/components/sections/part2_flow/Part2Flow";
import { Part2Gas } from "@/components/sections/part2_flow/Part2Gas";

const Part2_Relayer = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Section 1: 릴레이어 인트로 */}
      <Part2Intro />
      
      {/* Section 2: 릴레이어의 역할 */}
      <Part2Relayer />
      
      {/* Section 3: Waku 네트워크와 흐름 */}
      <Part2Flow />
      
      {/* Section 4: 가스비 대납 메커니즘 */}
      <Part2Gas />
    </div>
  );
};

export default Part2_Relayer;