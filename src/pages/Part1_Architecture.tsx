import { Navigation } from "@/components/Navigation";
import { Part1Intro } from "@/components/sections/part1_arch/Part1Intro";
import { Part1Mechanism } from "@/components/sections/part1_arch/Part1Mechanism";
import { Part1ZK } from "@/components/sections/part1_arch/Part1ZK";
import { Part1Merkle } from "@/components/sections/part1_arch/Part1Merkle";

const Part1_Architecture = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Section 1: 아키텍처 인트로 */}
      <Part1Intro />
      
      {/* Section 2: Account vs UTXO 모델 */}
      <Part1Mechanism />
      
      {/* Section 3: ZK 회로와 커밋먼트 */}
      <Part1ZK />
      
      {/* Section 4: 머클 트리와 널리파이어 */}
      <Part1Merkle />
    </div>
  );
};

export default Part1_Architecture;